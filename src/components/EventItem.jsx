// ABC-style event row: date + tags + title, "+" expands the details.
import { useId, useState } from "react";
import { ElementTag } from "./ui";
import { CalendarIcon, ExternalIcon } from "./Icons";
import { calendarLinks, isUpcoming, longDate, shortDate } from "../lib/format";

export default function EventItem({ item, onZoom, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const cal = isUpcoming(item.date) ? calendarLinks(item) : null;

  return (
    <li className="event" id={item.id} data-el={item.element}>
      <button
        type="button"
        className="event__head"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
      >
        <span>
          <span className="event__meta">
            <span className="event__date">{shortDate(item.date)}</span>
            {item.pinned && <span className="tag tag--pin">Pinned</span>}
            <span className="tag">{item.type}</span>
            {item.element && <ElementTag id={item.element} />}
            {item.tags?.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </span>
          <span className="event__title">{item.title}</span>
          <span className="event__summary" style={{ display: "block" }}>
            {item.summary}
          </span>
        </span>
        <span className="plus" aria-hidden="true" />
      </button>

      <div id={id} className="event__body" hidden={!open}>
        <div>
          {item.body?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {(item.date || item.time || item.venue) && (
            <dl className="facts">
              <dt>Date</dt>
              <dd>{longDate(item.date)}</dd>
              {item.time && (
                <>
                  <dt>Time</dt>
                  <dd>{item.time}</dd>
                </>
              )}
              {item.venue && (
                <>
                  <dt>Venue</dt>
                  <dd>{item.venue}</dd>
                </>
              )}
            </dl>
          )}
          {(item.link || cal) && (
            <div className="event__actions">
              {item.link && (
                <a className="btn btn--primary" href={item.link.href} target="_blank" rel="noreferrer">
                  {item.link.label} <ExternalIcon />
                </a>
              )}
              {cal && (
                <details className="cal">
                  <summary>
                    <CalendarIcon /> Add to calendar
                  </summary>
                  <ul>
                    <li>
                      <a href={cal.google} target="_blank" rel="noreferrer">
                        Google Calendar
                      </a>
                    </li>
                    <li>
                      <a href={cal.ics} download={`${item.id}.ics`}>
                        Apple or Outlook (.ics)
                      </a>
                    </li>
                  </ul>
                </details>
              )}
            </div>
          )}
        </div>
        {item.image && (
          <button
            type="button"
            className="event__poster"
            onClick={() => onZoom?.({ image: item.image, alt: item.imageAlt || "", title: item.title })}
            aria-label={`Enlarge poster for ${item.title}`}
          >
            <img src={item.image} alt={item.imageAlt || ""} loading="lazy" />
          </button>
        )}
      </div>
    </li>
  );
}
