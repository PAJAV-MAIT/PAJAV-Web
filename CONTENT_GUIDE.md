# How to update the PAJAV website

Everything that changes — members, events, projects, posters, recruitment,
live events — lives in a few plain files. You never need to touch the design
code to update the site.

| I want to… | Open this file |
| --- | --- |
| Add or change **members**, leadership, faculty | `src/data/team.js` |
| Post an **event or notice** (workshop, hackathon, result) | `src/data/announcements.js` |
| Add or update a **project** | `src/data/projects.js` |
| Add a **poster or design** to the showcase | `src/data/showcase.js` |
| Open or close **recruitment** | `src/data/site.js` → `recruitment` |
| Change **links**, email, Instagram, LinkedIn | `src/data/site.js` |
| Change slogans ("Build. Learn. Compete.") | `src/data/site.js` |
| Change pillars, workshop formats, benefits | `src/data/programs.js` |
| Switch on a **live event** (hackathon site) | `src/events/live.js` — see `src/events/README.md` |
| Add **images** (photos, posters) | the `public/` folder |

---

## Before you start: three rules

1. **Copy an existing entry, then change it.** Every file already has
   examples. Copying one keeps the commas and brackets right.
2. **Text goes inside quotes:** `"like this"`. If your text contains a
   double quote, use a curly one (“ ”) or an apostrophe instead.
3. **Every entry ends with a comma** — `},` — including the last one. It's
   allowed, and it saves mistakes later.

Lines starting with `//` are notes for you; the website ignores them.

### Editing without installing anything

On GitHub, open the file, click the pencil icon (Edit), make the change, and
click **Commit changes**. If the site is connected to Netlify or Vercel, it
rebuilds by itself in a minute or two.

### Editing on your computer

```bash
npm install        # first time only
npm run dev        # opens the site at http://localhost:5173 and reloads as you edit
```

If you made a typo that breaks the file, the browser shows a red error naming
the file and line. Fix it and save — it reloads.

---

## Members — `src/data/team.js`

There are three lists: `leadership`, `faculty` and `coreTeams`.

**Add a person to the leadership or faculty:**

```js
{ name: "Full Name", role: "Treasurer" },
```

**Add the core team.** `coreTeams` is empty until you fill it in; the People
page shows "Introducing soon" until then. Add one block per team:

```js
export const coreTeams = [
  {
    team: "Tech",
    members: [
      { name: "Full Name", role: "Tech Lead" },
      { name: "Another Name" },
    ],
  },
  {
    team: "Design",
    members: [{ name: "Full Name", role: "Design Lead" }],
  },
];
```

**Optional details** for any person — add any of these inside their `{ }`:

```js
{
  name: "Full Name",
  role: "Tech Lead",
  photo: "/people/full-name.webp",       // main photo, shown in black & white
  photo2: "/people/full-name-fun.webp",  // second photo: the card flips to it on hover
  funFact: "Has broken 14 Arduinos.",    // shown on the back if there's no photo2
  year: "3rd year, IT",
  bio: "Builds IoT things and breaks them on purpose.",
  linkedin: "https://www.linkedin.com/in/…",
  github: "https://github.com/…",
  instagram: "https://instagram.com/…",
},
```

**Photos:** put the file in `public/people/` (create the folder the first
time) and write its path starting with `/people/`. Square photos look best,
at least 600 × 600 px, ideally `.webp` or `.jpg` under 200 KB. Without a photo
the site shows the person's initials.

**The flip:** hovering a person's card turns it over (like the UW Design Show
site). The front is `photo` in black and white; the back is `photo2` in
colour — a candid, fun or "at work" shot works best. No `photo2`? The back
shows `funFact`, or the person's role, in handwriting.

**New session?** Change `session` at the bottom of the file, e.g. `"2027–28"`.

---

## Events and notices — `src/data/announcements.js`

Add a new block anywhere in the list; the site sorts by date automatically.

```js
{
  id: "ai-workshop-dec-2026",         // unique, lowercase, dashes; used in links
  type: "Workshop",                   // Workshop, Hackathon, Competition, Talk, Drive, Notice, Recruitment
  title: "Intro to Machine Learning",
  summary: "Train your first model in two hours. No experience needed.",
  body: [                             // optional: shown when someone opens the event
    "Bring a laptop with Python installed.",
    "We'll use a real PAJAV dataset.",
  ],
  date: "2026-12-05",                 // YYYY-MM-DD, or "2026-12", or null for "date to be announced"
  time: "2:00 – 4:00 PM",             // optional; used for the "Add to calendar" button
  venue: "Room 812, Block 8",         // optional
  element: "tech",                    // optional: prithvi, agni, jal, aakash, vayu, tech
  tags: ["AI/ML", "Beginner friendly"],
  image: "/posters/ml-workshop.webp", // optional poster in public/posters/
  link: { label: "Register", href: "https://forms.gle/…" },   // optional button
},
```

- Upcoming events appear under **Current & upcoming**; once the date passes
  they move to **Past** by themselves.
- Add `pinned: true,` to keep an important notice at the top.
- The home page shows the three most relevant entries.
- **Add to calendar** appears automatically for upcoming events with a full
  date. Write the time like `2:00 – 4:00 PM` or `10 AM - 1 PM`.

---

## Projects — `src/data/projects.js`

```js
{
  id: "smart-bins",
  title: "Smart bins",
  status: "active",                  // active = building now, idea = idea pool, done = shipped
  element: "prithvi",
  summary: "Bins that report when they're full, so collection runs only when needed.",
  stack: ["IoT", "ESP32"],           // optional
  sdg: "SDG 11",                     // optional
  lead: "Full Name",                 // optional
  lookingFor: ["Hardware", "Design"],// optional: shown as "Looking for"
  image: "/projects/smart-bins.webp",// optional; without it a cover is drawn in the element's colour
  when: "Mar 2027",                  // optional, for finished projects
  links: [{ label: "Repository", href: "https://github.com/…" }],
},
```

Entries marked `// SAMPLE` are example ideas. Replace or delete them once
real proposals come in.

---

## Showcase — `src/data/showcase.js`

```js
{
  id: "hackathon-poster-2026",
  title: "Hackathon poster",
  note: "December 2026.",
  image: "/posters/hackathon-2026.webp",
  alt: "Describe what's in the image for people who can't see it",
  credits: ["Designer Name"],
},
```

---

## Recruitment — `src/data/site.js`

```js
recruitment: {
  status: "open",                          // "open" or "closed"
  title: "Core members 2027",
  formUrl: "https://forms.gle/…",
  deadline: "2027-08-15",                  // after this day, Apply buttons hide by themselves
  closedMessage: "Applications have closed…",
},
```

With `status: "open"` the home page and Join page show **Apply now**.
After the deadline they switch to the closed message automatically. Post a
matching notice in `announcements.js` so it shows on the Events page too.

---

## Links and social media — `src/data/site.js`

Fill in `email` and the `social` links. Empty ones (`""`) are hidden, so
there are never dead icons.

---

## Live events (hackathon / fest websites)

See `src/events/README.md`. In short: copy `src/events/_starter`, design the
event's own page, then set `LIVE_EVENT` in `src/events/live.js` to the folder
name. A **Live now** strip appears across the main site and links into the
event's world. It switches itself off the day after the event ends.

---

## Images — `public/`

- Anything in `public/` is available at `/` + its name: `public/posters/x.webp`
  → `/posters/x.webp`.
- Keep files small: under 300 KB for posters, 200 KB for photos. Export as
  `.webp` (Squoosh.app does this for free in the browser).
- Use lowercase names with dashes, no spaces: `ml-workshop-2026.webp`.

---

## Checklist before you commit

- [ ] Every new entry is copied from an existing one and ends with `},`
- [ ] Dates are `YYYY-MM-DD`
- [ ] Image paths start with `/` and the file is really in `public/`
- [ ] `npm run dev` shows no red error (if you're editing on your computer)
