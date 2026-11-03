# MEEN Field Guide

An unofficial study guide to the Texas A&M (College Station) BS in Mechanical Engineering.

For every course it lists:

- what the course covers, broken into units
- a study tip and self-check questions for each unit
- difficulty (1-5) and estimated hours per week outside class
- prerequisites and the concepts to know before day one
- most important topics, key takeaways, real-world uses and common mistakes
- resources (textbooks, videos, open courseware), FE exam areas and software

It also has:

- **Roadmap**: the 4-year plan of study, with prerequisite and "leads to" highlighting
- **Career tracks**: 11 industries (aerospace, automotive/EV, oil & gas, power, HVAC, robotics, manufacturing, semiconductors, biomedical, simulation, grad school), each with courses to master, recommended electives, skills, software, certifications and example employers
- **Semester planner**: mark completed courses, pick next semester, see weekly workload, missing prerequisites, and technical-elective area coverage
- **How to study**: weekly routine, problem-solving method, exam timeline, campus resources and an FE exam map
- **Flashcards**: formula and concept cards for each course, repeated on a spaced (Leitner) schedule
- **FE exam planner**: countdown to your exam date and a week-by-week plan weighted by question counts and your weak areas
- **Internship timeline**: what to do each semester for internships, MEEN 399 and the full-time search
- **Grade distributions**: each course page links to a search for grade distributions by instructor
- **Student tips**: on the hosted claude.ai version, students can post tips, difficulty and hours for each course; the page shows community averages. The static copy (GitHub Pages) shows a note instead, since it has no shared storage.

Progress is saved in your browser only (localStorage).

## Run it

It is a static site with no build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

It also works on GitHub Pages (Settings → Pages → deploy from branch, root folder).

## Edit the course data

All content is in `js/data/`:

| File | Contents |
| --- | --- |
| `support.js` | math, science and common-engineering courses (field key at the top) |
| `core.js` | required MEEN courses |
| `electives.js`, `electives2.js` | MEEN technical and general electives, the area rule, and pre-approved non-MEEN electives |
| `tracks.js` | career tracks, FE knowledge areas and the internship timeline |
| `flashcards.js` | formula flashcards |

The plan of study grid is the `PLAN` list near the top of `js/app.js`.

## Accuracy

The plan of study follows the current Texas A&M catalog. Some details are best estimates and are marked in the data:

- prerequisites: confirm in Howdy
- electives with a `note` field are not on the current list or have extra prerequisite details
- technical electives: titles, areas and prerequisites follow the department's current list on engineering.tamu.edu; unit outlines for electives are typical content, not syllabi
- difficulty and hour ratings: planning estimates, not official data

Corrections are welcome: edit the data files.
