# PAJAV website

**PAJAV** — Prithvi, Agni, Jal, Aakash, Vayu — the student-led technology &
innovation society of the Department of Information Technology, Maharaja
Agrasen Institute of Technology (MAIT). *Build. Learn. Compete.*

React + Vite, no CSS framework, no UI library.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the build locally
```

## Updating content

**Read [`CONTENT_GUIDE.md`](CONTENT_GUIDE.md).** Members, events, projects,
showcase, recruitment and links are plain data files in `src/data/` — no
design code to touch.

## Live events

Each hackathon or fest can have its own website ("event world") inside
`src/events/<name>/`, switched on from one line in `src/events/live.js`.
On ordinary days nothing shows. See [`src/events/README.md`](src/events/README.md).

## Structure

```
src/
  data/          content: site, team, announcements, projects, showcase, programs, elements
  events/        live-event worlds + the one-line switch (live.js)
  pages/         one file per route
  components/    header, footer, event rows, project tiles, people cards, dialogs
  lib/           dates, calendar links, recruitment status, headline fitting
  index.css      design tokens and every style
public/          images, favicon, redirects
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/events` | Events & notices |
| `/projects` | Projects, workflow, showcase |
| `/programmes` | Build / Learn / Compete in detail |
| `/people` | Leadership, faculty, core team, credits |
| `/about` | Vision, mission, the five elements |
| `/join` | Recruitment status and ways to take part |
| `/live`, `/e/<name>` | The live event's world |

Old addresses (`/announcements`, `/showcase`, `/team`) redirect.

## Deploying

`public/_redirects` (Netlify) and `vercel.json` (Vercel) send every path to
`index.html`, so refreshing any page works.

## Design notes

Colours come from the 2026 core-member poster (navy, forest green, leaf,
mint) plus one colour per element. Fonts: Anybody (headlines), Hanken
Grotesk (text), Caveat (handwritten notes), Tiro Devanagari Hindi. Tokens are
at the top of `src/index.css`.
