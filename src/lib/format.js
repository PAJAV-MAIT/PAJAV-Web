const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Accepts "YYYY-MM-DD", "YYYY-MM" or null.
export function parseDate(value) {
  if (!value) return null;
  const [y, m, d] = value.split("-").map(Number);
  return { year: y, month: m, day: d || null, time: new Date(y, m - 1, d || 1).getTime() };
}

export function shortDate(value) {
  const p = parseDate(value);
  if (!p) return "Date to be announced";
  return p.day ? `${p.day} ${MONTHS[p.month - 1]} ${p.year}` : `${MONTHS[p.month - 1]} ${p.year}`;
}

export function longDate(value) {
  const p = parseDate(value);
  if (!p) return "Date to be announced";
  const month = new Date(p.year, p.month - 1, 1).toLocaleString("en-IN", { month: "long" });
  return p.day ? `${p.day} ${month} ${p.year}` : `${month} ${p.year}`;
}

export function dateRange(from, to) {
  if (!to || to === from) return longDate(from);
  const a = parseDate(from);
  const b = parseDate(to);
  if (a && b && a.year === b.year && a.month === b.month && a.day && b.day) {
    const month = new Date(a.year, a.month - 1, 1).toLocaleString("en-IN", { month: "long" });
    return `${a.day}–${b.day} ${month} ${a.year}`;
  }
  return `${longDate(from)} – ${longDate(to)}`;
}

// End of the given date (or month) in local time.
export function endOf(value) {
  const p = parseDate(value);
  if (!p) return null;
  return p.day ? new Date(p.year, p.month - 1, p.day, 23, 59, 59) : new Date(p.year, p.month, 0, 23, 59, 59);
}

export function startOf(value) {
  const p = parseDate(value);
  return p ? new Date(p.year, p.month - 1, p.day || 1, 0, 0, 0) : null;
}

// Undated items count as upcoming; dated ones stay upcoming until the day ends.
export function isUpcoming(value, now = new Date()) {
  const end = endOf(value);
  return !end || end >= now;
}

export function sortByDate(list) {
  return [...list].sort((a, b) => {
    if (!!b.pinned !== !!a.pinned) return b.pinned ? 1 : -1;
    const ta = parseDate(a.date)?.time ?? Infinity;
    const tb = parseDate(b.date)?.time ?? Infinity;
    return tb - ta;
  });
}

export function initials(name) {
  const parts = name.replace(/^(dr|mr|mrs|ms|prof)\.?\s+/i, "").trim().split(/\s+/);
  return ((parts[0]?.[0] || "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

const EL = ["prithvi", "agni", "jal", "aakash", "vayu"];
export function elementFor(name) {
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return EL[h % EL.length];
}

export const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// ── Add to calendar (ABC events) ────────────────────────────────────────
// Parses times like "2:00 – 4:00 PM" or "10 AM - 1 PM". Falls back to all-day.
function parseTimes(time) {
  if (!time) return null;
  const m = time.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\s*[–-]\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)/i);
  if (!m) return null;
  const to24 = (h, min, ap) => {
    let hh = Number(h) % 12;
    if (ap.toLowerCase() === "pm") hh += 12;
    return [hh, Number(min || 0)];
  };
  const endAp = m[6];
  const startAp = m[3] || endAp;
  return { start: to24(m[1], m[2], startAp), end: to24(m[4], m[5], endAp) };
}

const pad = (n) => String(n).padStart(2, "0");

function stamps(item) {
  const p = parseDate(item.date);
  if (!p || !p.day) return null;
  const t = parseTimes(item.time);
  const ymd = `${p.year}${pad(p.month)}${pad(p.day)}`;
  if (!t) {
    const next = new Date(p.year, p.month - 1, p.day + 1);
    return { allDay: true, start: ymd, end: `${next.getFullYear()}${pad(next.getMonth() + 1)}${pad(next.getDate())}` };
  }
  return {
    allDay: false,
    start: `${ymd}T${pad(t.start[0])}${pad(t.start[1])}00`,
    end: `${ymd}T${pad(t.end[0])}${pad(t.end[1])}00`,
  };
}

export function calendarLinks(item) {
  const s = stamps(item);
  if (!s) return null;
  const details = [item.summary, ...(item.body || [])].join("\n\n");
  const location = item.venue || "MAIT, Rohini, Delhi";
  const google =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    `&text=${encodeURIComponent(item.title + " — PAJAV")}` +
    `&dates=${s.start}/${s.end}` +
    `&ctz=Asia/Kolkata` +
    `&details=${encodeURIComponent(details)}` +
    `&location=${encodeURIComponent(location)}`;
  const esc = (v) => v.replace(/[,;\\]/g, (c) => "\\" + c).replace(/\n/g, "\\n");
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//PAJAV//Events//EN",
    "BEGIN:VEVENT",
    `UID:${item.id}@pajav`,
    s.allDay ? `DTSTART;VALUE=DATE:${s.start}` : `DTSTART;TZID=Asia/Kolkata:${s.start}`,
    s.allDay ? `DTEND;VALUE=DATE:${s.end}` : `DTEND;TZID=Asia/Kolkata:${s.end}`,
    `SUMMARY:${esc(item.title + " — PAJAV")}`,
    `DESCRIPTION:${esc(details)}`,
    `LOCATION:${esc(location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  return { google, ics: "data:text/calendar;charset=utf-8," + encodeURIComponent(ics) };
}
