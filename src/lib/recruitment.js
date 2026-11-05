import { site } from "../data/site";
import { endOf, longDate } from "./format";

// Open only while status is "open" and the deadline (if any) hasn't passed.
export function recruitment(now = new Date()) {
  const r = site.recruitment;
  const end = endOf(r.deadline);
  const open = r.status === "open" && (!end || now <= end);
  return { ...r, open, deadlineText: r.deadline ? longDate(r.deadline) : "" };
}
