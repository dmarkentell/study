# Handoff notes

Notes for whoever (or whichever AI assistant) works on this project next. Read this first, then `README.md`.

## What this is

MEEN Field Guide: an unofficial, static (no build step) study guide for the Texas A&M BS in Mechanical Engineering. Plain HTML, CSS and JavaScript, no framework. Open `index.html` or serve the folder with `python3 -m http.server 8000`.

A hosted copy runs as a claude.ai artifact (https://claude.ai/artifact/TaX2V9Nz27CcfhNA7DbhZA), owned by the repo owner. On claude.ai the page gets extra runtime features (see "Two runtimes" below).

## File map

| Path | What it holds |
| --- | --- |
| `index.html` | Page shell: nav, footer, script tags (order matters: data files, PDF.js, `semester.js`, then `app.js`) |
| `css/style.css` | All styles. Colors are tokens on `:root` with dark-mode overrides; layout concept is an engineering computation pad |
| `js/data/support.js` | Math, science and common engineering courses. **The field key for every course object is at the top of this file** |
| `js/data/core.js` | Required MEEN courses |
| `js/data/electives.js`, `js/data/electives2.js` | Technical electives (area: `thermo`, `data`, `mms`), general electives (`general`), and `MEEN.nonMeen` (pre-approved non-MEEN electives) |
| `js/data/tracks.js` | Career tracks, FE exam areas with question counts (`MEEN.fe`), internship timeline (`MEEN.career`) |
| `js/app.js` | The app: hash router, all views (home, roadmap, courses, course page, tracks, planner, study, FE planner, internships), planner state, shared student tips |
| `js/semester.js` | "My plan": degree plan and syllabus upload, Claude extraction, review forms, semester calendar, study plan, grade calculator, "Your section" on course pages |
| `vendor/pdf.worker.min.js` | PDF.js 3.11.174 worker (Apache-2.0); main PDF.js script loads from cdnjs |

## How the pieces connect

- Every data file pushes into `window.MEEN` (`courses`, `tracks`, `fe`, `career`, `nonMeen`).
- `app.js` routes on `location.hash`: `#roadmap`, `#courses`, `#course-meen-363`, `#track-aerospace`, `#planner`, `#study`, `#fe-plan`, `#careers`, `#semester`. Views return HTML strings; events are delegated on `#app`.
- `semester.js` registers `MEEN.views.semester` and `MEEN.afterRender`, and exposes `MEEN.degree()`, `MEEN.semesterCourses()`, `MEEN.courseStatus(id)`. `app.js` exposes helpers on `MEEN.app` and calls `MEEN.semesterInit()` at the end.
- The standard 4-year plan grid is the `PLAN` list near the top of `app.js` (from the catalog plan of study).

## Two runtimes

| Feature | claude.ai artifact | GitHub Pages / local |
| --- | --- | --- |
| Guide, roadmap, planner, FE planner, internships | Yes | Yes |
| Planner progress | Browser storage | Browser storage |
| My plan: read documents with Claude | Yes (`sample` capability, viewer's own Claude usage) | No, enter by hand |
| My plan storage | Private per user (`db`, path `data/users/<id>/semester`) | Browser storage |
| Shared student tips | Yes (`db`, collection `tips`, one doc per user) | Shows a note instead |

The artifact declares capabilities `sample`, `user` (profile scope) and `db` with rules: `tips` read `view` / write `owner`; `tips/{self}` write `interact`; `data/users/{self}` write `interact`.

Code checks for `window.claude` and falls back cleanly when it is missing, so the same files work in both places.

## Where the content came from, and how sure it is

- **Plan of study** (terms and required courses): pasted by the user from the Texas A&M catalog. Reliable.
- **Technical electives**: titles, areas and prerequisites from the department curriculum page (engineering.tamu.edu/mechanical/academics/degrees/undergraduate/curriculum.html). Reliable as of November 2026. MEEN 414 and 476 are kept but flagged as not on the current list.
- **Prerequisites for required courses**: best estimates. **Not yet checked against the catalog.** catalog.tamu.edu could not be read from the cloud session (its certificate chains to a root not trusted there). Next step: paste the MEEN course descriptions page and verify every `pre:` list.
- **Unit breakdowns, difficulty (1-5), hours per week, resources, career tracks**: written as study-planning estimates, not official data.
- **FE question counts**: approximate, from memory of the NCEES FE Mechanical spec. Verify against the current NCEES spec.

## Ideas not built yet

- Verify required-course prerequisites against the catalog (above).
- Grade-distribution data per instructor (needs a data source; course pages currently link to a search).
- Practice problems and flashcards were tried and removed at the owner's request; do not re-add without asking.

## Testing

There is no test framework. Changes were checked with Playwright scripts that load every route, check for console errors and horizontal overflow at phone width, and drive the planner, tips and My plan flows with `window.claude` mocked. A quick manual check: open each nav tab in light and dark mode at desktop and phone width.
