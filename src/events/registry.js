// Finds every event folder automatically — you never need to edit this file.
// Each folder in src/events/ with an `event.js` becomes an event.
import { LIVE_EVENT } from "./live";
import { endOf, startOf } from "../lib/format";

const configs = import.meta.glob("./*/event.js", { eager: true });
const pages = import.meta.glob("./*/Page.jsx");

const folderOf = (path) => path.split("/")[1];

export const events = Object.fromEntries(
  Object.entries(configs).map(([path, mod]) => {
    const slug = folderOf(path);
    const page = pages[`./${slug}/Page.jsx`];
    return [slug, { slug, ...mod.default, loadPage: page || null }];
  })
);

// Phase of an event relative to today: "announce" (before it starts),
// "live" (on the day(s)), or "over".
export function phaseOf(ev, now = new Date()) {
  const start = startOf(ev.startsOn);
  const end = endOf(ev.endsOn || ev.startsOn);
  if (end && now > end) return "over";
  if (start && now < start) return "announce";
  return "live";
}

// The event the main site should point to right now, or null.
export function getLiveEvent(now = new Date()) {
  const ev = events[LIVE_EVENT];
  if (!LIVE_EVENT || !ev) return null;
  const phase = phaseOf(ev, now);
  if (phase === "over") return null;
  const from = startOf(ev.announceFrom);
  if (from && now < from) return null;
  return { ...ev, phase };
}

// Where the "Enter" link goes: an outside site / static folder, or /e/<slug>.
export const entryHref = (ev) => ev.externalUrl || `/e/${ev.slug}`;
