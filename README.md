# PAJAV website

Website of **Society PAJAV** — Prithvi, Agni, Jal, Aakash, Vaayu — the official society of the
Department of Information Technology, Maharaja Agrasen Institute of Technology (MAIT).

Noticeboard, projects, showcase and a member directory, built with React + Vite.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the build locally
```

## Updating content

Everything on the site comes from plain data files in `src/data/`. You rarely need to touch
the components.

| File | What it controls |
| --- | --- |
| `site.js` | Society name, tagline, membership form link, email, social links |
| `announcements.js` | Noticeboard: events, recruitment, notices (add a poster image in `public/`) |
| `projects.js` | Projects with status `active`, `planned` or `done` and an element tag |
| `showcase.js` | Designs, posters and writing by members, with credits |
| `team.js` | Coordinators, teams and members. Optional photos, bios and links go in `profiles` |
| `elements.js` | The five elements and what each one covers |

Entries marked `// SAMPLE` in `announcements.js` and `projects.js` are placeholders written
during the redesign. Replace them with real ones or delete them.

Every notice and project can be tagged with an element (`prithvi`, `agni`, `jal`, `aakash`,
`vaayu`) or `tech`; the tag sets its colour across the site.

## Deploying

`public/_redirects` (Netlify) and `vercel.json` (Vercel) send every path to `index.html`, so
refreshing `/people` or `/projects` works instead of returning a 404.

## Structure

```
src/
  data/         content (edit these)
  pages/        one file per route
  components/   shared pieces: header, footer, notice and project rows, dialogs
  lib/          date and name helpers
  index.css     design tokens and all styles
public/         images, favicon, redirects
```
