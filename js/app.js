/* MEEN Field Guide: a static single-page app. Views are chosen by location.hash
   (#courses, #course-meen-225, #track-aerospace, ...). Progress is kept in this
   browser only (localStorage). */
(function () {
  'use strict';

  var M = window.MEEN;
  var COURSES = M.courses;
  var BY_ID = {};
  COURSES.forEach(function (c) { BY_ID[c.id] = c; });

  /* Plan of study, as published in the Texas A&M catalog for BS-MEEN.
     Items that are not courses in this guide are shown as dashed slots. */
  var PLAN = [
    { y: 1, s: 'Fall', items: ['CHEM 107', 'ENGR 102', 'MATH 151', '#ENGL 103 or 104 · 3', '#University Core · 3'] },
    { y: 1, s: 'Spring', items: ['PHYS 206', 'PHYS 216', 'MATH 152', '#University Core · 3', '#CHEM 120 or core / communication · 3-4'] },
    { y: 2, s: 'Fall', items: ['MEEN 210', 'MEEN 225', 'MATH 251', 'PHYS 207', 'PHYS 217', 'STAT 211'] },
    { y: 2, s: 'Spring', items: ['MEEN 223', 'MEEN 260', 'MEEN 315', 'MATH 308', 'ECEN 215', '#University Core · 3'] },
    { y: 2, s: 'Summer', items: ['MEEN 399'] },
    { y: 3, s: 'Fall', items: ['MEEN 305', 'MEEN 344', 'MEEN 345', 'MEEN 357', 'MEEN 363', 'MEEN 381', '#University Core · 3'] },
    { y: 3, s: 'Spring', items: ['MEEN 360', 'MEEN 361', 'MEEN 364', 'MEEN 365', 'MEEN 368', 'MEEN 461', 'MEEN 464'] },
    { y: 4, s: 'Fall', items: ['MEEN 401', 'ISEN 302', '#Technical elective · 3', '#Technical elective · 3', '#Technical elective · 3', '#University Core · 3'] },
    { y: 4, s: 'Spring', items: ['MEEN 402', '#Technical elective · 3', '#General elective · 3', '#University Core · 6'] }
  ];
  var TERM_ORDER = {};
  PLAN.forEach(function (t, i) { t.items.forEach(function (id) { if (id[0] !== '#') TERM_ORDER[id] = i; }); });

  var AREA = { thermo: 'Thermo-fluids Systems', data: 'Data Science & Experimentation', mms: 'Mechanical & Manufacturing Systems' };
  var KIND = { support: 'Foundation', core: 'MEEN core', elective: 'Technical elective' };
  var DWORD = { 1: 'Light', 2: 'Moderate', 3: 'Solid', 4: 'Hard', 5: 'Very hard' };
  var YEAR = { 1: 'First year', 2: 'Second year', 3: 'Third year', 4: 'Fourth year' };

  /* Downstream map: which courses list each course as a prerequisite. */
  var UNLOCKS = {};
  COURSES.forEach(function (c) {
    c.pre.forEach(function (p) { (UNLOCKS[p] = UNLOCKS[p] || []).push(c.id); });
  });

  /* ---------- storage (per-browser convenience only) ---------- */
  var KEY = 'meen-field-guide-v1';
  var state = load();
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var s = JSON.parse(raw);
        return { done: s.done || [], units: s.units || {}, plan: s.plan || [], example: !!s.example, ui: s.ui || {} };
      }
    } catch (e) { /* storage unavailable */ }
    return exampleState();
  }
  function exampleState() {
    // Example: a student starting the spring of third year.
    var cut = 6; // index of Year 3 Spring in PLAN
    var done = [], plan = [];
    PLAN.forEach(function (t, i) {
      t.items.forEach(function (id) {
        if (id[0] === '#') return;
        if (i < cut) done.push(id); else if (i === cut) plan.push(id);
      });
    });
    return { done: done, units: {}, plan: plan, example: true, ui: {} };
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }
  function isDone(id) { return state.done.indexOf(id) !== -1; }
  function toggle(arr, id) {
    var i = arr.indexOf(id);
    if (i === -1) arr.push(id); else arr.splice(i, 1);
  }
  function unitsDone(id) { return state.units[id] || []; }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }
  function slug(id) { return id.toLowerCase().replace(/\s+/g, '-'); }
  function href(id) { return '#course-' + slug(id); }
  function gauge(d) {
    return '<span class="gauge" data-d="' + d + '" role="img" aria-label="Difficulty ' + d + ' of 5"><i></i><i></i><i></i><i></i><i></i></span>';
  }
  function plural(n, w) { return n + ' ' + w + (n === 1 ? '' : 's'); }
  function resUrl(r) {
    var q = encodeURIComponent(r[2] || r[1]);
    if (r[0] === 'video') return 'https://www.youtube.com/results?search_query=' + q;
    return 'https://www.google.com/search?q=' + q;
  }
  function topicsText(c) {
    return c.units.map(function (u) { return u[0] + ' ' + u[1]; }).join(' ') + ' ' + c.top.join(' ');
  }
  function ancestors(id, seen) {
    seen = seen || {};
    var c = BY_ID[id];
    if (!c) return seen;
    c.pre.forEach(function (p) { if (!seen[p]) { seen[p] = true; ancestors(p, seen); } });
    return seen;
  }
  function descendants(id, seen) {
    seen = seen || {};
    (UNLOCKS[id] || []).forEach(function (n) { if (!seen[n]) { seen[n] = true; descendants(n, seen); } });
    return seen;
  }
  function order(a, b) {
    var ta = TERM_ORDER[a.id], tb = TERM_ORDER[b.id];
    ta = ta === undefined ? 99 : ta; tb = tb === undefined ? 99 : tb;
    return ta - tb || a.id.localeCompare(b.id);
  }
  function tracksFor(id) {
    return M.tracks.filter(function (t) { return t.master.indexOf(id) !== -1 || t.electives.indexOf(id) !== -1; });
  }
  function missingPre(c) { return c.pre.filter(function (p) { return !isDone(p); }); }

  function card(c) {
    var ud = unitsDone(c.id).length, pct = Math.round(100 * ud / c.units.length);
    var tags = '<span class="tag">' + KIND[c.kind] + '</span>';
    if (c.area) tags += '<span class="tag">' + AREA[c.area] + (c.areaSure ? '' : '?') + '</span>';
    if (isDone(c.id)) tags += '<span class="tag done">Completed</span>';
    return '<a class="card' + (isDone(c.id) ? ' done' : '') + '" href="' + href(c.id) + '">' +
      '<span class="cid">' + esc(c.id) + ' · ' + c.cr + ' cr</span>' +
      '<span class="ctitle">' + esc(c.title) + '</span>' +
      '<span class="meta">' + gauge(c.d) + '<span class="dword">' + DWORD[c.d] + '</span><span class="mono">~' + c.h + ' h/wk outside class</span></span>' +
      '<span class="row">' + tags + '</span>' +
      '<span class="progress" title="' + ud + ' of ' + c.units.length + ' units checked off"><span style="width:' + pct + '%"></span></span>' +
      '</a>';
  }

  /* ---------- views ---------- */
  var app = document.getElementById('app');

  function viewHome() {
    var hardest = COURSES.filter(function (c) { return c.kind !== 'elective'; })
      .sort(function (a, b) { return b.d - a.d || b.h - a.h; }).slice(0, 6);
    var gateways = COURSES.map(function (c) { return { c: c, n: Object.keys(descendants(c.id)).length }; })
      .filter(function (x) { return x.c.kind !== 'elective'; })
      .sort(function (a, b) { return b.n - a.n; }).slice(0, 8);
    var doneN = state.done.length;
    return '' +
      '<section class="hero">' +
        '<span class="label">Texas A&amp;M · BS Mechanical Engineering · unofficial study guide</span>' +
        '<h1>Every MEEN course, broken down unit by unit.</h1>' +
        '<p>For each course: what it covers, how hard it is, how many hours to plan for, what to know before day one, how to study each unit, and where it shows up in industry. Then pick a career track to see which courses to focus on.</p>' +
      '</section>' +
      '<section class="entry" aria-label="Start here">' +
        '<a href="#roadmap"><b>Roadmap</b><span>The 4-year plan of study with prerequisite chains.</span></a>' +
        '<a href="#courses"><b>Courses</b><span>' + COURSES.length + ' courses: foundation, MEEN core and technical electives.</span></a>' +
        '<a href="#tracks"><b>Career tracks</b><span>' + M.tracks.length + ' industries, with what to master and which electives to take.</span></a>' +
        '<a href="#planner"><b>Semester planner</b><span>Check workload and what you are cleared to take next.</span></a>' +
        '<a href="#study"><b>How to study</b><span>A weekly routine, exam prep plan, and FE exam map.</span></a>' +
      '</section>' +
      '<section class="sec"><h2>Hardest required courses <span class="label">plan your semesters around these</span></h2>' +
        '<div class="grid-cards">' + hardest.map(card).join('') + '</div></section>' +
      '<section class="sec"><h2>Gateway courses <span class="label">most later courses depend on these</span></h2>' +
        '<div class="tablewrap"><table><thead><tr><th>Course</th><th>Leads to</th><th>Difficulty</th></tr></thead><tbody>' +
        gateways.map(function (x) {
          return '<tr><td><a href="' + href(x.c.id) + '">' + esc(x.c.id) + '</a> ' + esc(x.c.title) + '</td><td class="mono">' + plural(x.n, 'course') + '</td><td>' + gauge(x.c.d) + '</td></tr>';
        }).join('') + '</tbody></table></div></section>' +
      '<p class="muted">Progress saved in this browser: ' + plural(doneN, 'course') + ' marked completed.' + (state.example ? ' (Example data. Open the planner to set your own.)' : '') + '</p>';
  }

  function viewCourses() {
    var ui = state.ui;
    var kind = ui.kind || 'all', year = ui.year || 'all', area = ui.area || 'all', sort = ui.sort || 'plan', q = ui.q || '';
    var list = COURSES.filter(function (c) {
      if (kind !== 'all' && c.kind !== kind) return false;
      if (year !== 'all' && String(c.y) !== year) return false;
      if (area !== 'all' && c.area !== area) return false;
      if (q) {
        var hay = (c.id + ' ' + c.title + ' ' + topicsText(c)).toLowerCase();
        if (hay.indexOf(q.toLowerCase()) === -1) return false;
      }
      return true;
    });
    list.sort(sort === 'd' ? function (a, b) { return b.d - a.d || b.h - a.h; }
      : sort === 'h' ? function (a, b) { return b.h - a.h || b.d - a.d; } : order);
    function chip(k, label) {
      return '<button type="button" class="chip" data-set="kind" data-val="' + k + '" aria-pressed="' + (kind === k) + '">' + label + '</button>';
    }
    return '' +
      '<section class="stack"><h1>Courses</h1>' +
        '<p>Search by course number, title or topic (try "Mohr", "Laplace", "pump").</p></section>' +
      '<section class="stack">' +
        '<div class="row">' + chip('all', 'All') + chip('support', 'Foundation') + chip('core', 'MEEN core') + chip('elective', 'Technical electives') + '</div>' +
        '<div class="row">' +
          '<input type="search" id="q" placeholder="Search courses and topics" value="' + esc(q) + '" aria-label="Search courses and topics">' +
          '<select id="f-year" aria-label="Year"><option value="all">Any year</option>' +
            [1, 2, 3, 4].map(function (y) { return '<option value="' + y + '"' + (year === String(y) ? ' selected' : '') + '>' + YEAR[y] + '</option>'; }).join('') + '</select>' +
          '<select id="f-area" aria-label="Elective area"><option value="all">Any elective area</option>' +
            Object.keys(AREA).map(function (a) { return '<option value="' + a + '"' + (area === a ? ' selected' : '') + '>' + AREA[a] + '</option>'; }).join('') + '</select>' +
          '<select id="f-sort" aria-label="Sort"><option value="plan"' + (sort === 'plan' ? ' selected' : '') + '>Plan order</option><option value="d"' + (sort === 'd' ? ' selected' : '') + '>Hardest first</option><option value="h"' + (sort === 'h' ? ' selected' : '') + '>Most hours first</option></select>' +
        '</div>' +
        '<p class="label">' + plural(list.length, 'course') + '</p>' +
        (list.length ? '<div class="grid-cards">' + list.map(card).join('') + '</div>' : '<p>No courses match. Clear the search or filters.</p>') +
      '</section>' +
      (kind === 'elective' || area !== 'all' ? electiveNote() : '');
  }

  function electiveNote() {
    return '<p class="notice">Degree rule: at least three MEEN technical electives, with at least one from each area (Thermo-fluids Systems, Data Science &amp; Experimentation, Mechanical &amp; Manufacturing Systems). The plan of study shows 12 technical-elective hours. A "?" after an area means the assignment is a best guess. Confirm with the current MEEN technical elective list from advising and check Howdy for what is offered each term.</p>';
  }

  function viewCourse(id) {
    var c = BY_ID[id];
    if (!c) return '<section class="stack"><h1>Course not found</h1><p><a href="#courses">Back to all courses</a></p></section>';
    var ud = unitsDone(c.id);
    var unl = (UNLOCKS[c.id] || []).slice().sort(function (a, b) { return order(BY_ID[a], BY_ID[b]); });
    var chain = Object.keys(ancestors(c.id)).sort(function (a, b) { return order(BY_ID[a] || { id: a }, BY_ID[b] || { id: b }); });
    var tr = tracksFor(c.id);
    var termLabel = c.kind === 'elective' ? 'Senior elective' : (YEAR[c.y] + ', ' + c.s);
    function list(items) { return items && items.length ? '<ul>' + items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : '<p class="muted">None listed.</p>'; }
    function pre(p) {
      var known = BY_ID[p];
      return known ? '<a class="pill' + (isDone(p) ? ' ok' : '') + '" href="' + href(p) + '">' + esc(p) + '</a>' : '<span class="pill">' + esc(p) + '</span>';
    }
    return '' +
      '<p><a href="#courses">← All courses</a></p>' +
      '<section class="titleblock" aria-label="Course summary">' +
        '<div class="tb-main"><span class="cid">' + esc(c.id) + '</span><h1>' + esc(c.title) + '</h1><p>' + esc(c.sum) + '</p></div>' +
        '<div class="tb-cells">' +
          '<div><span class="label">Credits</span><span class="v">' + c.cr + '</span></div>' +
          '<div><span class="label">Typical term</span><span class="v">' + esc(termLabel) + '</span></div>' +
          '<div><span class="label">Difficulty</span><span class="v">' + gauge(c.d) + ' ' + c.d + '/5</span></div>' +
          '<div><span class="label">Outside class</span><span class="v">~' + c.h + ' h/wk</span></div>' +
          '<div><span class="label">Units done</span><span class="v">' + ud.length + '/' + c.units.length + '</span></div>' +
        '</div>' +
      '</section>' +
      '<div class="row">' +
        '<button type="button" class="btn' + (isDone(c.id) ? ' ghost' : '') + '" data-done="' + esc(c.id) + '">' + (isDone(c.id) ? 'Mark as not completed' : 'Mark course completed') + '</button>' +
        (c.area ? '<span class="tag">' + AREA[c.area] + (c.areaSure ? '' : ' (area unconfirmed)') + '</span>' : '') +
        '<span class="tag">' + KIND[c.kind] + '</span>' +
      '</div>' +
      '<div class="two-col">' +
        '<section class="sec"><h2>Why it matters</h2><p>' + esc(c.why) + '</p></section>' +
        '<section class="sec"><h2>Before you start</h2>' +
          '<span class="label">Prerequisites (confirm in Howdy)</span>' +
          (c.pre.length ? '<div class="pills">' + c.pre.map(pre).join('') + '</div>' : '<p class="muted">No course prerequisites listed.</p>') +
          '<span class="label">Concepts to have solid on day one</span>' + list(c.know) +
        '</section>' +
      '</div>' +
      '<section class="sec"><h2>Units and study guide <span class="label">open a unit, study it, check it off</span></h2>' +
        '<div class="units">' + c.units.map(function (u, i) {
          var checked = ud.indexOf(i) !== -1;
          return '<details class="unit' + (checked ? ' checked' : '') + '">' +
            '<summary><input type="checkbox" class="unitcheck" data-unit="' + i + '" data-course="' + esc(c.id) + '"' + (checked ? ' checked' : '') + ' aria-label="Mark unit ' + (i + 1) + ' done">' +
            '<span class="n">U' + (i + 1) + '</span><span class="t">' + esc(u[0]) + '</span><span class="chev" aria-hidden="true">›</span></summary>' +
            '<div class="body">' +
              '<div><span class="label">Topics</span><div class="pills">' + u[1].split(';').map(function (t) { return '<span class="pill">' + esc(t.trim()) + '</span>'; }).join('') + '</div></div>' +
              '<div class="howto"><span class="label">How to study it</span><p>' + esc(u[2]) + '</p></div>' +
              '<div><span class="label">Self-check: answer without notes</span><ul class="checks">' + u[3].split('|').map(function (q) { return '<li>' + esc(q.trim()) + '</li>'; }).join('') + '</ul></div>' +
            '</div></details>';
        }).join('') + '</div>' +
      '</section>' +
      '<div class="two-col">' +
        '<section class="sec"><h2>Most important topics</h2>' + list(c.top) + '</section>' +
        '<section class="sec"><h2>Key takeaways</h2>' + list(c.take) + '</section>' +
        '<section class="sec"><h2>In the real world</h2>' + list(c.real) + '</section>' +
        '<section class="sec"><h2>Common mistakes</h2>' + list(c.pit) + '</section>' +
      '</div>' +
      '<section class="sec"><h2>Best resources <span class="label">links open a search</span></h2>' +
        '<ul class="res">' + c.res.map(function (r) {
          return '<li><span class="kind">' + esc(r[0]) + '</span><a href="' + resUrl(r) + '" target="_blank" rel="noopener">' + esc(r[1]) + '</a></li>';
        }).join('') + '</ul></section>' +
      '<div class="two-col">' +
        '<section class="sec"><h2>Unlocks</h2>' + (unl.length ? '<div class="pills">' + unl.map(function (n) { return '<a class="pill" href="' + href(n) + '">' + esc(n) + '</a>'; }).join('') + '</div>' : '<p class="muted">No later course lists this as a prerequisite.</p>') +
          (chain.length ? '<span class="label">Full prerequisite chain</span><div class="pills">' + chain.map(pre).join('') + '</div>' : '') +
        '</section>' +
        '<section class="sec"><h2>Exams, tools and careers</h2>' +
          '<span class="label">FE Mechanical areas</span>' + (c.fe.length ? '<div class="pills">' + c.fe.map(function (f) { return '<span class="pill">' + esc(f) + '</span>'; }).join('') + '</div>' : '<p class="muted">None.</p>') +
          '<span class="label">Software</span>' + (c.sw.length ? '<p>' + c.sw.map(esc).join(', ') + '</p>' : '<p class="muted">None in particular.</p>') +
          '<span class="label">Career tracks that use it</span>' + (tr.length ? '<div class="pills">' + tr.map(function (t) { return '<a class="pill" href="#track-' + t.id + '">' + esc(t.name) + '</a>'; }).join('') + '</div>' : '<p class="muted">All tracks.</p>') +
        '</section>' +
      '</div>' +
      (c.kind === 'elective' ? electiveNote() : '');
  }

  function viewRoadmap() {
    var focus = state.ui.focus || '';
    var pre = focus ? ancestors(focus) : {}, next = focus ? descendants(focus) : {};
    var years = [1, 2, 3, 4].map(function (y) {
      var terms = PLAN.filter(function (t) { return t.y === y; });
      return '<div class="year"><h3>' + YEAR[y] + '</h3>' + terms.map(function (t) {
        var cr = 0;
        var items = t.items.map(function (id) {
          if (id[0] === '#') {
            var parts = id.slice(1).split(' · ');
            cr += parseInt(parts[1], 10) || 0;
            return '<div class="rm slot"><span>' + esc(parts[0]) + '</span><span class="mono">' + esc(parts[1] || '') + '</span></div>';
          }
          var c = BY_ID[id]; cr += c.cr;
          var cls = 'rm' + (isDone(id) ? ' done' : '') + (id === focus ? ' hl-self' : pre[id] ? ' hl-pre' : next[id] ? ' hl-next' : '');
          return '<a class="' + cls + '" href="' + href(id) + '" data-focus="' + esc(id) + '"><span class="cid">' + esc(id) + '</span>' + gauge(c.d) + '<span class="ct">' + esc(c.title) + '</span></a>';
        }).join('');
        return '<div class="term"><span class="label">' + t.s + ' · ~' + cr + ' cr</span>' + items + '</div>';
      }).join('') + '</div>';
    }).join('');
    var options = COURSES.filter(function (c) { return c.kind !== 'elective'; }).sort(order)
      .map(function (c) { return '<option value="' + esc(c.id) + '"' + (focus === c.id ? ' selected' : '') + '>' + esc(c.id + ' ' + c.title) + '</option>'; }).join('');
    return '' +
      '<section class="stack"><h1>Four-year roadmap</h1>' +
        '<p>The BS-MEEN plan of study from the Texas A&amp;M catalog. Choose a course to highlight what it needs and what it leads to.</p></section>' +
      '<div class="row"><label for="focus" class="label">Highlight</label><select id="focus"><option value="">None</option>' + options + '</select></div>' +
      '<div class="legend"><span><i style="background:var(--accent)"></i>Selected</span><span><i style="background:var(--d3)"></i>Needed first</span><span><i style="background:var(--d1)"></i>Leads to</span><span>✓ completed</span></div>' +
      '<div class="roadmap"><div class="roadmap-grid">' + years + '</div></div>' +
      '<p class="notice">A grade of C or better is required in most courses on this plan. Students take a math placement exam that can change the starting math course. MEEN 399 (high impact experience) is a zero-credit graduation requirement. Always confirm requirements with your degree audit and MEEN advising.</p>';
  }

  function viewTracks() {
    return '<section class="stack"><h1>Career tracks</h1><p>Each track lists core courses to master rather than just pass, the electives that fit best, and what employers in that field look for.</p></section>' +
      '<div class="grid-cards">' + M.tracks.map(function (t) {
        return '<a class="card" href="#track-' + t.id + '"><span class="ctitle">' + esc(t.name) + '</span><span class="muted">' + esc(t.blurb) + '</span>' +
          '<span class="meta"><span class="mono">' + plural(t.electives.length, 'elective') + ' suggested</span></span></a>';
      }).join('') + '</div>';
  }

  function viewTrack(id) {
    var t = M.tracks.filter(function (x) { return x.id === id; })[0];
    if (!t) return '<section class="stack"><h1>Track not found</h1><p><a href="#tracks">All tracks</a></p></section>';
    function clist(ids) {
      return '<div class="grid-cards">' + ids.filter(function (i) { return BY_ID[i]; }).map(function (i) { return card(BY_ID[i]); }).join('') + '</div>';
    }
    var areas = {};
    t.electives.forEach(function (e) { var c = BY_ID[e]; if (c && c.area) areas[c.area] = true; });
    var missing = Object.keys(AREA).filter(function (a) { return !areas[a]; });
    function ul(a) { return '<ul>' + a.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'; }
    return '<p><a href="#tracks">← All tracks</a></p>' +
      '<section class="stack"><span class="label">Career track</span><h1>' + esc(t.name) + '</h1><p>' + esc(t.blurb) + '</p></section>' +
      '<p class="notice">' + esc(t.note) + '</p>' +
      '<section class="sec"><h2>Core courses to master <span class="label">aim for an A and keep your notes</span></h2>' + clist(t.master) + '</section>' +
      '<section class="sec"><h2>Recommended technical electives</h2>' + clist(t.electives) +
        (missing.length ? '<p class="muted">You still need one elective from: ' + missing.map(function (a) { return AREA[a]; }).join(', ') + '. Pick the one closest to this track.</p>' : '') +
      '</section>' +
      '<div class="two-col">' +
        '<section class="sec"><h2>Skills to build</h2>' + ul(t.skills) + '</section>' +
        '<section class="sec"><h2>Software</h2>' + ul(t.software) + '</section>' +
        '<section class="sec"><h2>Certifications</h2>' + ul(t.certs) + '</section>' +
        '<section class="sec"><h2>Projects and orgs</h2>' + ul(t.projects) + '</section>' +
      '</div>' +
      '<section class="sec"><h2>Example employers <span class="label">companies that hire MEs in this field</span></h2><div class="pills">' + t.employers.map(function (e) { return '<span class="pill">' + esc(e) + '</span>'; }).join('') + '</div></section>';
  }

  function viewPlanner() {
    var plan = state.plan.filter(function (id) { return BY_ID[id]; });
    // A prerequisite planned for the same term counts (labs taken with their lecture); Howdy has the final word.
    function missP(c) { return c.pre.filter(function (p) { return !isDone(p) && plan.indexOf(p) === -1; }); }
    var cr = 0, out = 0, hardN = 0, dw = 0;
    plan.forEach(function (id) { var c = BY_ID[id]; cr += c.cr; out += c.h; dw += c.d * Math.max(c.cr, 1); if (c.d >= 4) hardN++; });
    var total = cr + out;
    var avg = plan.length ? (dw / plan.reduce(function (s, id) { return s + Math.max(BY_ID[id].cr, 1); }, 0)) : 0;
    var level = total > 60 || hardN >= 4 ? 'danger' : total > 48 || hardN >= 3 ? 'heavy' : 'ok';
    var verdict = !plan.length ? 'Pick courses below to see the workload.' :
      level === 'danger' ? 'Very heavy. Consider moving a hard course, dropping outside commitments, or planning a lighter next term.' :
      level === 'heavy' ? 'Heavy but common for MEEN. Protect your study blocks and start projects early.' :
      'Manageable. Good term to add research, an org leadership role, or job hunting.';
    var blocked = plan.filter(function (id) { return missP(BY_ID[id]).length; });

    var electives = COURSES.filter(function (c) { return c.kind === 'elective' && (isDone(c.id) || plan.indexOf(c.id) !== -1); });
    var have = {};
    electives.forEach(function (c) { if (c.area) have[c.area] = (have[c.area] || 0) + 1; });

    var ready = COURSES.filter(function (c) { return !isDone(c.id) && !missingPre(c).length && c.kind !== 'support'; }).sort(order);

    function pick(c, arr, name) {
      var miss = name === 'plan' && arr.indexOf(c.id) !== -1 ? missP(c) : name === 'plan' ? missingPre(c) : [];
      var on = arr.indexOf(c.id) !== -1;
      return '<label class="pick' + (miss.length ? ' locked' : '') + '"><input type="checkbox" data-' + name + '="' + esc(c.id) + '"' + (on ? ' checked' : '') + '>' +
        '<span><span class="cid">' + esc(c.id) + '</span> ' + esc(c.title) + (miss.length ? '<br><span class="muted">Needs ' + miss.map(esc).join(', ') + '</span>' : '') + '</span></label>';
    }
    var notDone = COURSES.filter(function (c) { return !isDone(c.id); }).sort(order);
    var all = COURSES.slice().sort(order);

    return '' +
      '<section class="stack"><h1>Semester planner</h1>' +
        '<p>Mark what you have finished, pick next semester\'s courses, and check the weekly load. Saved in this browser only.</p>' +
        (state.example ? '<p class="notice">Showing an example: a student starting the spring of third year. Change the checkboxes to match your own record, or clear everything.</p>' : '') +
        '<div class="row"><button type="button" class="btn ghost" data-action="example">Load example</button><button type="button" class="btn ghost" data-action="clear">Clear all</button></div>' +
      '</section>' +
      '<section class="sheet stack"><h2>Next semester load</h2>' +
        '<div class="load">' +
          '<div><span class="label">Credit hours</span><span class="big">' + cr + '</span></div>' +
          '<div><span class="label">Outside-class hours / week</span><span class="big">~' + out + '</span></div>' +
          '<div><span class="label">Total hours / week</span><span class="big">~' + total + '</span></div>' +
          '<div><span class="label">Average difficulty</span><span class="big">' + (plan.length ? avg.toFixed(1) : '–') + '</span></div>' +
          '<div><span class="label">Hard courses (4-5)</span><span class="big">' + hardN + '</span></div>' +
        '</div>' +
        '<p class="verdict" data-level="' + (plan.length ? level : '') + '">' + verdict + '</p>' +
        (blocked.length ? '<p class="notice">Missing prerequisites for: ' + blocked.map(function (id) { return esc(id) + ' (needs ' + missP(BY_ID[id]).map(esc).join(', ') + ')'; }).join('; ') + '. Courses planned for the same term count as taken together. Check Howdy for which ones are true co-requisites.</p>' : '') +
        '<p class="muted">Total = credit hours (time in class) + estimated outside hours. Estimates assume you are aiming for a B+ or better.</p>' +
      '</section>' +
      '<section class="sec"><h2>Technical elective areas <span class="label">completed + planned</span></h2>' +
        '<div class="load">' + Object.keys(AREA).map(function (a) {
          return '<div><span class="label">' + AREA[a] + '</span><span class="big" style="color:var(' + (have[a] ? '--d1' : '--d5') + ')">' + (have[a] || 0) + '</span></div>';
        }).join('') + '</div><p class="muted">You need at least one MEEN elective in each area and at least three MEEN electives in total.</p></section>' +
      '<section class="sec"><h2>Pick next semester</h2><div class="picklist">' + notDone.map(function (c) { return pick(c, state.plan, 'plan'); }).join('') + '</div></section>' +
      '<section class="sec"><h2>Cleared to take now <span class="label">prerequisites completed</span></h2>' +
        (ready.length ? '<div class="pills">' + ready.map(function (c) { return '<a class="pill" href="' + href(c.id) + '">' + esc(c.id) + '</a>'; }).join('') + '</div>' : '<p class="muted">Nothing new until you mark more courses completed.</p>') + '</section>' +
      '<section class="sec"><h2>Courses completed</h2><div class="picklist">' + all.map(function (c) { return pick(c, state.done, 'done'); }).join('') + '</div></section>';
  }

  function viewStudy() {
    var feRows = M.fe.map(function (area) {
      var cs = COURSES.filter(function (c) { return c.fe.indexOf(area) !== -1; }).sort(order);
      return '<tr><td>' + esc(area) + '</td><td>' + cs.map(function (c) { return '<a href="' + href(c.id) + '">' + esc(c.id) + '</a>'; }).join(', ') + '</td></tr>';
    }).join('');
    return '' +
      '<section class="stack"><h1>How to study engineering</h1><p>The same system works for almost every MEEN course. Use it every week, not only before exams.</p></section>' +
      '<div class="two-col">' +
        '<section class="sec"><h2>Weekly routine</h2><ol class="steps">' +
          '<li><span><b>Before lecture (15 min).</b> Skim the section and look at the worked examples so the lecture is a second exposure.</span></li>' +
          '<li><span><b>Same-day review (30 min).</b> Rewrite the key equations and one worked example from memory.</span></li>' +
          '<li><span><b>Homework solo first.</b> Attempt every problem alone before working with a group or looking at solutions.</span></li>' +
          '<li><span><b>Office hours weekly.</b> Bring a specific question. Professors and TAs remember students who show up.</span></li>' +
          '<li><span><b>End of week self-test.</b> Answer the unit self-check questions in this guide without notes, then check off the unit.</span></li>' +
        '</ol></section>' +
        '<section class="sec"><h2>Problem-solving method</h2><ol class="steps">' +
          '<li><span><b>Given and find.</b> List the knowns with units and what the problem asks for.</span></li>' +
          '<li><span><b>Sketch.</b> Draw the system, free-body diagram, control volume, or circuit.</span></li>' +
          '<li><span><b>Assumptions.</b> Steady? Rigid? Ideal gas? Negligible losses? Write them down.</span></li>' +
          '<li><span><b>Governing equations.</b> Write the general law (ΣF = ma, energy balance), then simplify using your assumptions.</span></li>' +
          '<li><span><b>Solve symbolically, then plug in numbers</b> with units carried through every step.</span></li>' +
          '<li><span><b>Check.</b> Units, sign, order of magnitude, and limiting cases (what if a mass goes to zero?).</span></li>' +
        '</ol></section>' +
      '</div>' +
      '<section class="sec"><h2>Exam prep timeline</h2><div class="tablewrap"><table><thead><tr><th>When</th><th>What to do</th></tr></thead><tbody>' +
        '<tr><td class="mono">2 weeks out</td><td>Make a one-page summary sheet of equations and when to use each. List the problem types covered.</td></tr>' +
        '<tr><td class="mono">10 days out</td><td>Redo homework problems from scratch without looking at solutions. Mark the ones you could not finish.</td></tr>' +
        '<tr><td class="mono">1 week out</td><td>Take an old exam under timed conditions. Ask the professor or check course sites for past exams.</td></tr>' +
        '<tr><td class="mono">3 days out</td><td>Go to office hours or review sessions with your marked problems. Do one more timed practice exam.</td></tr>' +
        '<tr><td class="mono">Night before</td><td>Light review of the summary sheet only. Sleep at least 7 hours; it helps recall more than late-night cramming.</td></tr>' +
      '</tbody></table></div></section>' +
      '<div class="two-col">' +
        '<section class="sec"><h2>Campus resources</h2><ul>' +
          '<li>Office hours for every professor and TA</li>' +
          '<li>Supplemental Instruction (SI) and tutoring through the Academic Success Center for many large math, physics and engineering courses</li>' +
          '<li>MEEN academic advising for degree plans, technical elective lists and Fast Track (BS/MS)</li>' +
          '<li>Career Center for résumé reviews, mock interviews and career fairs</li>' +
          '<li>Student chapters of ASME, SAE, AIAA, ASHRAE, SWE, SHPE and NSBE for study groups, mentors and recruiters</li>' +
          '<li>Undergraduate research through LAUNCH and faculty labs</li>' +
        '</ul></section>' +
        '<section class="sec"><h2>How to read difficulty and hours</h2><ul>' +
          '<li><b>Difficulty (1-5)</b> is an estimate of how hard students typically find the course, based on content load, math level and pace. It is not official data and varies by instructor.</li>' +
          '<li><b>Hours per week</b> is time outside class for a B+ or better. A common rule is 2-3 hours per credit hour; project-heavy courses (MEEN 357, 402) run higher.</li>' +
          '<li>Check public grade-distribution reports for the course and instructor before you register.</li>' +
        '</ul></section>' +
      '</div>' +
      '<section class="sec"><h2>FE exam map <span class="label">Fundamentals of Engineering, Mechanical</span></h2>' +
        '<p>Take the FE in your final year or just after graduating, while the material is fresh. Passing makes you an Engineer in Training (EIT), the first step to a PE license. The exam provides the NCEES FE Reference Handbook; practice finding equations in it.</p>' +
        '<div class="tablewrap"><table><thead><tr><th>Knowledge area</th><th>Courses that cover it</th></tr></thead><tbody>' + feRows + '</tbody></table></div>' +
      '</section>';
  }

  /* ---------- router ---------- */
  var NAV = ['home', 'roadmap', 'courses', 'tracks', 'planner', 'study'];
  function route() {
    var h = (location.hash || '#home').slice(1).toLowerCase();
    var html, tab = h;
    if (h.indexOf('course-') === 0) {
      var id = h.slice(7).toUpperCase().replace('-', ' ');
      html = viewCourse(id); tab = 'courses';
      document.title = (BY_ID[id] ? id + ' · ' : '') + 'MEEN Field Guide';
    } else if (h.indexOf('track-') === 0) {
      html = viewTrack(h.slice(6)); tab = 'tracks';
    } else if (h === 'courses') html = viewCourses();
    else if (h === 'roadmap') html = viewRoadmap();
    else if (h === 'tracks') html = viewTracks();
    else if (h === 'planner') html = viewPlanner();
    else if (h === 'study') html = viewStudy();
    else { html = viewHome(); tab = 'home'; }
    if (h.indexOf('course-') !== 0) document.title = 'MEEN Field Guide';
    app.innerHTML = html;
    document.querySelectorAll('nav.tabs a').forEach(function (a) {
      if (a.getAttribute('href') === '#' + tab) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    return tab;
  }
  function rerender(keepFocusId) {
    var y = window.scrollY;
    route();
    window.scrollTo(0, y);
    if (keepFocusId) {
      var el = document.getElementById(keepFocusId);
      if (el) { el.focus(); if (el.setSelectionRange) el.setSelectionRange(el.value.length, el.value.length); }
    }
  }
  window.addEventListener('hashchange', function () { route(); window.scrollTo(0, 0); });

  /* ---------- events (delegated) ---------- */
  function edited() { state.example = false; save(); }
  app.addEventListener('click', function (e) {
    var t = e.target;
    var chip = t.closest('[data-set]');
    if (chip) { state.ui[chip.dataset.set] = chip.dataset.val; save(); rerender(); return; }
    var done = t.closest('[data-done]');
    if (done && done.tagName === 'BUTTON') { toggle(state.done, done.dataset.done); edited(); rerender(); return; }
    var act = t.closest('[data-action]');
    if (act) {
      if (act.dataset.action === 'example') { var ui = state.ui; state = exampleState(); state.ui = ui; }
      else { state.done = []; state.plan = []; state.units = {}; state.example = false; }
      save(); rerender(); return;
    }
  });
  app.addEventListener('change', function (e) {
    var t = e.target;
    if (t.classList.contains('unitcheck')) {
      var cid = t.dataset.course, i = +t.dataset.unit;
      var arr = state.units[cid] = state.units[cid] || [];
      toggle(arr, i); save();
      t.closest('details').classList.toggle('checked', t.checked);
      var cell = document.querySelectorAll('.tb-cells .v')[4];
      if (cell) cell.textContent = arr.length + '/' + BY_ID[cid].units.length;
      return;
    }
    if (t.dataset.plan) { toggle(state.plan, t.dataset.plan); edited(); rerender(); return; }
    if (t.dataset.done) {
      toggle(state.done, t.dataset.done);
      state.plan = state.plan.filter(function (id) { return !isDone(id); });
      edited(); rerender(); return;
    }
    if (t.id === 'f-year') { state.ui.year = t.value; save(); rerender(); }
    if (t.id === 'f-area') { state.ui.area = t.value; save(); rerender(); }
    if (t.id === 'f-sort') { state.ui.sort = t.value; save(); rerender(); }
    if (t.id === 'focus') { state.ui.focus = t.value; save(); rerender(); }
  });
  app.addEventListener('input', function (e) {
    if (e.target.id === 'q') { state.ui.q = e.target.value; save(); rerender('q'); }
  });
  // Prevent the summary toggle when clicking the unit checkbox.
  app.addEventListener('click', function (e) {
    if (e.target.classList && e.target.classList.contains('unitcheck')) { e.preventDefault(); var cb = e.target; setTimeout(function () { cb.checked = !cb.checked; cb.dispatchEvent(new Event('change', { bubbles: true })); }, 0); }
  }, true);

  route();
})();
