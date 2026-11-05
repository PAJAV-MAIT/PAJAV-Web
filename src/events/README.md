# Event worlds

Every event PAJAV hosts — a hackathon, a fest, a workshop week — can have its
own website with its own look, living inside this folder. On ordinary days
nothing shows on the main site. When an event is switched on, a thin
**Live now / Coming up** strip appears at the top of every page, and a
**Live** link appears in the menu. Both lead into the event's world.

## Make a new event (about 5 minutes)

1. **Copy** the folder `src/events/_starter` and rename the copy, for example
   `src/events/hackathon-2026`. Use lowercase letters, numbers and dashes.
2. **Edit** `event.js` in the new folder: title, tagline, dates, venue,
   registration link, and the strip colours.
3. **Design** the event in `Page.jsx` and `style.css`. This page has no PAJAV
   header or footer — it's a world of its own. Keep every CSS rule under one
   class (rename `.ev-starter` to e.g. `.ev-hackathon-2026` in both files) so
   the event's styles never leak into the main site.
4. **Preview** it while you work: open `/e/hackathon-2026?preview`.
   A small "Preview" badge shows it isn't live yet.
5. **Switch it on**: open `src/events/live.js` and set

   ```js
   export const LIVE_EVENT = "hackathon-2026";
   ```

   Commit and deploy. The strip and menu link appear on the main site.

6. **Switching off** happens by itself the day after `endsOn`. To switch off
   early, set `LIVE_EVENT = ""`.

The event's world stays reachable at `/e/<folder>?preview` afterwards, so old
events can be linked from the Events page as an archive.

## Already have the event's website somewhere else?

If a team built the event site with another tool (Next.js, plain HTML,
Framer, Webflow…):

- **Hosted elsewhere** — put its address in `externalUrl` in `event.js`, e.g.
  `externalUrl: "https://hack.pajav.in"`. The strip and `/live` send people there.
- **Static files** — copy the built files into `public/worlds/<name>/`
  (so `public/worlds/hackathon-2026/index.html` exists) and set
  `externalUrl: "/worlds/hackathon-2026/index.html"`. It's served as-is,
  untouched by the main site. Inside that static site, link files relative
  to that folder.

In both cases you still need the folder with `event.js` (for the title, dates
and strip colours); `Page.jsx` can stay as the starter.

## Useful links

| Address | What it does |
| --- | --- |
| `/live` | Goes to whatever event is live; home page if none |
| `/e/<folder>` | The event's world (only while it's live) |
| `/e/<folder>?preview` | The event's world any time, with a preview badge |

Folders starting with `_` (like `_starter`) are examples; they work with
`?preview` but you'd normally copy rather than switch them on.
