import { useState } from "react";
import { announcements } from "../data/announcements";
import { isUpcoming, sortByDate } from "../lib/format";
import EventItem from "../components/EventItem";
import Lightbox from "../components/Lightbox";
import { Label, PageTitle } from "../components/ui";

const TYPES = [...new Set(announcements.map((a) => a.type))].sort();

const norm = (s) => s.toLowerCase();

export default function Events() {
  const [type, setType] = useState("");
  const [q, setQ] = useState("");
  const [zoom, setZoom] = useState(null);

  const matches = (a) =>
    (!type || a.type === type) &&
    (!q.trim() ||
      norm([a.title, a.summary, a.type, ...(a.tags || []), ...(a.body || [])].join(" ")).includes(norm(q.trim())));

  const list = sortByDate(announcements).filter(matches);
  // pinned notices stay in the top group even after their date
  const upcoming = list.filter((a) => a.pinned || isUpcoming(a.date));
  const past = list.filter((a) => !a.pinned && !isUpcoming(a.date));
  const filtered = type || q;

  return (
    <>
      <PageTitle title="Events">
        Workshops, hackathons, talks, drives and notices. Open a row to see the details and add it to your calendar.
      </PageTitle>

      <section className="section section--tight" aria-label="All events">
        <div className="wrap">
          <Label>Calendar</Label>
          <div className="split">
            <div className="split__side">
              <h2 className="split__title">Upcoming events</h2>
              <p className="split__text">
                Most PAJAV events are open to every MAIT student, member or not. New ones appear here first.
              </p>
            </div>

            <div>
              <div className="ev-controls" role="search">
                <label className="field">
                  Filter by type
                  <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">All types</option>
                    {TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="field field--grow">
                  Search
                  <input
                    type="search"
                    value={q}
                    placeholder="AI, hackathon, drive…"
                    onChange={(e) => setQ(e.target.value)}
                  />
                </label>
                {filtered && (
                  <button
                    type="button"
                    className="reset"
                    onClick={() => {
                      setType("");
                      setQ("");
                    }}
                  >
                    Reset
                  </button>
                )}
              </div>

              <h3 className="group-title">Current & upcoming</h3>
              <ul className="events" style={{ borderTop: "1px solid var(--navy)" }}>
                {upcoming.map((a) => (
                  <EventItem key={a.id} item={a} onZoom={setZoom} />
                ))}
              </ul>
              {upcoming.length === 0 && (list.length > 0 || !filtered) && (
                <div className="empty">
                  <strong>{filtered ? "Nothing upcoming matches that." : "Nothing scheduled right now."}</strong>
                  {filtered ? "Try another type or clear the search." : "New workshops and hackathons are announced here first."}
                </div>
              )}

              {past.length > 0 && (
                <>
                  <h3 className="group-title">Past</h3>
                  <ul className="events" style={{ borderTop: "1px solid var(--navy)" }}>
                    {past.map((a) => (
                      <EventItem key={a.id} item={a} onZoom={setZoom} />
                    ))}
                  </ul>
                </>
              )}
              {filtered && list.length === 0 && (
                <div className="empty">
                  <strong>No events match “{q || type}”.</strong>
                  Try another word or reset the filters.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Lightbox item={zoom} onClose={() => setZoom(null)} />
    </>
  );
}
