// The simple doorway from the main site into a live event's world.
// Only renders when src/events/live.js names an event that isn't over.
import { Link } from "react-router-dom";
import { entryHref, getLiveEvent } from "../events/registry";
import { dateRange } from "../lib/format";

export default function LiveStrip() {
  const ev = getLiveEvent();
  if (!ev) return null;
  const href = entryHref(ev);
  const external = /^https?:/.test(href) || href.startsWith("/worlds/");
  const style = {
    "--live-bg": ev.strip?.bg,
    "--live-fg": ev.strip?.fg,
    "--live-accent": ev.strip?.accent,
  };
  const content = (
    <>
      <span className="pulse" aria-hidden="true" />
      <strong>{ev.phase === "live" ? "Live now" : "Coming up"}</strong>
      <span>
        {ev.title}, {dateRange(ev.startsOn, ev.endsOn)}
      </span>
      <span className="live-strip__go">Enter the event</span>
    </>
  );
  return (
    <div className="live-strip" style={style}>
      {external ? <a href={href}>{content}</a> : <Link to={href}>{content}</Link>}
    </div>
  );
}
