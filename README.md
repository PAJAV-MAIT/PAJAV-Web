# PAJAV website

**PAJAV** — Prithvi, Agni, Jal, Aakash, Vayu — the student-led technology &
innovation society of the Department of Information Technology, Maharaja
Agrasen Institute of Technology (MAIT). *Build. Learn. Compete.*

React + Vite, no CSS framework, no UI library.

- Live site: https://pajav-mait.sawantchandra2410.workers.dev
- Repository: https://github.com/PAJAV-MAIT/PAJAV-Web

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the build locally
```

## Contributing

`main` is protected: nobody pushes to it directly. Every change goes through
a branch and a pull request, which a maintainer reviews and merges.

**One time**

```bash
git clone https://github.com/PAJAV-MAIT/PAJAV-Web.git
cd PAJAV-Web
npm install
```

**For every new piece of work**

```bash
git checkout main
git pull                              # get the latest main
git checkout -b feature/short-name    # new branch
# ...make changes, check them with npm run dev...
git add .
git commit -m "Describe the change"
git push -u origin feature/short-name
```

Then on GitHub click **Compare & pull request**, describe the change, and
click **Create pull request**.

- **Changes requested?** Edit, commit and `git push` again on the same
  branch. The pull request updates automatically.
- **`main` changed while you were working?** Bring your branch up to date:

  ```bash
  git checkout main && git pull
  git checkout feature/short-name
  git merge main      # fix any conflicts, commit, then git push
  ```

Name branches by what they do: `feature/events-filter`, `fix/navbar-mobile`,
`content/add-core-team`. Run `npm run build` before opening a pull request
to make sure the site still builds.

**Only updating content** (members, events, projects)? You can do it on
GitHub without installing anything: open the file, click the pencil icon,
edit, then choose **Create a new branch and start a pull request**. See
[`CONTENT_GUIDE.md`](CONTENT_GUIDE.md).

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
public/          images, favicon
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

## Design notes

Colours: navy, forest green, leaf, mint plus one colour per element. 
Fonts: Anybody (headlines), Hanken Grotesk (text), Caveat (handwritten notes), Tiro Devanagari Hindi.
Tokens are at the top of `src/index.css`.
