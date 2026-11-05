import { useState } from "react";
import { announcements } from "../data/announcements";
import { isUpcoming, sortNotices } from "../lib/format";
import NoticeItem from "../components/NoticeItem";

const TYPES = ["All", ...new Set(announcements.map((a) => a.type))];

export default function Announcements() {
  const [type, setType] = useState("All");
  const list = sortNotices(announcements).filter((a) => type === "All" || a.type === type);
  const upcoming = list.filter((a) => a.pinned || isUpcoming(a.date));
  const past = list.filter((a) => !a.pinned && !isUpcoming(a.date));

  return (
    <>
      <header className="page-head wrap">
        <h1>Noticeboard</h1>
        <p>Events, membership calls and society news from PAJAV. Pinned notices stay at the top.</p>
      </header>

      <div className="wrap" style={{ paddingBottom: "clamp(56px, 8vw, 96px)" }}>
        <div className="filters" role="group" aria-label="Filter by type">
          {TYPES.map((t) => {
            const count =
              t === "All" ? announcements.length : announcements.filter((a) => a.type === t).length;
            return (
              <button
                key={t}
                type="button"
                className="chip"
                aria-pressed={type === t}
                onClick={() => setType(t)}
              >
                {t} <span className="chip__count">{count}</span>
              </button>
            );
          })}
        </div>

        {upcoming.length > 0 && (
          <section className="list-group" aria-labelledby="upcoming">
            <h2 id="upcoming" className="list-group__title">
              Current and upcoming
            </h2>
            <ul className="notices">
              {upcoming.map((n) => (
                <NoticeItem key={n.id} notice={n} expandable />
              ))}
            </ul>
          </section>
        )}

        {past.length > 0 && (
          <section className="list-group" aria-labelledby="past">
            <h2 id="past" className="list-group__title">
              Past
            </h2>
            <ul className="notices">
              {past.map((n) => (
                <NoticeItem key={n.id} notice={n} expandable />
              ))}
            </ul>
          </section>
        )}

        {list.length === 0 && <p className="empty">No notices of this type yet.</p>}
      </div>
    </>
  );
}
