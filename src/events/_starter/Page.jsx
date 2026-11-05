// The event's own world. It renders on its own — no PAJAV header or footer —
// so you can design it any way you like. Replace everything below.
//
// You receive `event` (the settings from event.js) as a prop.
// Keep every style inside the `.ev-starter` class (see style.css) so this
// event's look never leaks into the main site. When you copy this folder,
// rename the class too (e.g. `.ev-hackathon-2026`).

import { Link } from "react-router-dom";
import "./style.css";

export default function Page({ event }) {
  return (
    <div className="ev-starter">
      <header className="ev-starter__top">
        <Link to="/">← PAJAV</Link>
        {event.registerUrl && (
          <a className="ev-starter__btn" href={event.registerUrl} target="_blank" rel="noreferrer">
            Register
          </a>
        )}
      </header>

      <main className="ev-starter__hero">
        <p className="ev-starter__when">
          {event.startsOn}
          {event.endsOn && event.endsOn !== event.startsOn ? ` → ${event.endsOn}` : ""} · {event.venue}
        </p>
        <h1>{event.title}</h1>
        <p className="ev-starter__tag">{event.tagline}</p>
      </main>

      <section className="ev-starter__section">
        <h2>Schedule</h2>
        <p>Add your schedule, tracks, prizes, speakers, FAQ — whatever this event needs.</p>
      </section>
    </div>
  );
}
