const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Accepts "YYYY-MM-DD", "YYYY-MM" or null.
export function parseDate(value) {
  if (!value) return null;
  const [y, m, d] = value.split("-").map(Number);
  return { year: y, month: m, day: d || null, time: new Date(y, m - 1, d || 1).getTime() };
}

export function dateParts(value, label) {
  if (label) return { big: label[0], small: label[1], tba: true };
  const p = parseDate(value);
  if (!p) return { big: "Soon", small: "Date to be announced", tba: true };
  if (!p.day) return { big: MONTHS[p.month - 1], small: String(p.year), tba: false };
  return { big: String(p.day), small: `${MONTHS[p.month - 1]} ${p.year}`, tba: false };
}

export function longDate(value) {
  const p = parseDate(value);
  if (!p) return "Date to be announced";
  const month = new Date(p.year, p.month - 1, 1).toLocaleString("en-IN", { month: "long" });
  return p.day ? `${p.day} ${month} ${p.year}` : `${month} ${p.year}`;
}

// Undated notices count as upcoming; dated ones are upcoming until the day ends.
export function isUpcoming(value, now = new Date()) {
  const p = parseDate(value);
  if (!p) return true;
  const end = p.day
    ? new Date(p.year, p.month - 1, p.day, 23, 59, 59)
    : new Date(p.year, p.month, 0, 23, 59, 59);
  return end >= now;
}

export function sortNotices(list) {
  return [...list].sort((a, b) => {
    if (!!b.pinned - !!a.pinned) return !!b.pinned - !!a.pinned;
    const ta = parseDate(a.date)?.time ?? Infinity;
    const tb = parseDate(b.date)?.time ?? Infinity;
    return tb - ta;
  });
}

export function initials(name) {
  const parts = name.replace(/^Dr\.?\s+/i, "").trim().split(/\s+/);
  return ((parts[0]?.[0] || "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

const EL = ["prithvi", "agni", "jal", "aakash", "vaayu"];
export function elementFor(name) {
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return EL[h % EL.length];
}
