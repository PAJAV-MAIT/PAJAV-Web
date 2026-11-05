// Settings for one event. Copy this whole folder, rename it (e.g.
// "hackathon-2026"), edit these values, then build the event's own world
// in Page.jsx and style.css. See src/events/README.md.

export default {
  title: "Event name",
  short: "Event", // short name for the menu link, e.g. "HackMAIT"
  tagline: "One line that makes students want to come.",

  startsOn: "2026-12-12", // YYYY-MM-DD
  endsOn: "2026-12-13", // same as startsOn for a one-day event
  announceFrom: "", // optional: banner appears from this date ("" = as soon as it's switched on)

  venue: "MAIT, Rohini",
  registerUrl: "", // registration form link, if any

  // Optional: if the event's website lives somewhere else — another deployed
  // site, or a static build dropped into /public/worlds/<name>/ — put the
  // link here and the main site sends people straight there.
  externalUrl: "",

  // Colours of the thin "Live" strip on the main site, to match the event.
  strip: { bg: "#0f2232", fg: "#eef4e6", accent: "#ef7a22" },
};
