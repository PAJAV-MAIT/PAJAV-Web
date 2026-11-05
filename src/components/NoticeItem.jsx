import { useId, useState } from "react";
import { Link } from "react-router-dom";
import ElementTag from "./ElementTag";
import { ExternalIcon } from "./Icons";
import { dateParts, longDate } from "../lib/format";
import { site } from "../data/site";

const resolveHref = (href) => (href === "JOIN_FORM" ? site.joinForm : href);

export default function NoticeItem({ notice, expandable = false, compact = false }) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();
  const d = dateParts(notice.date, notice.dateLabel);
  const hasDetails =
    expandable && (notice.body?.length || notice.venue || notice.time || notice.image || notice.contacts);

  return (
    <li className="notice" id={notice.id} data-el={notice.element}>
      <div className={`notice__date${d.tba ? " notice__date--tba" : ""}`}>
        <span className="notice__day">{d.big}</span>
        <span className="notice__month">{d.small}</span>
      </div>

      <div>
        <div className="notice__meta">
          {notice.pinned && <span className="pin">Pinned</span>}
          <span className="notice__type">{notice.type}</span>
          {notice.element && <ElementTag id={notice.element} />}
          {notice.venue && !compact && <span>{notice.venue}</span>}
        </div>
        <h3 className="notice__title">
          {compact ? <Link to={`/announcements#${notice.id}`}>{notice.title}</Link> : notice.title}
        </h3>
        <p className="notice__summary">{notice.summary}</p>

        {hasDetails && (
          <>
            <button
              type="button"
              className="notice__toggle"
              aria-expanded={open}
              aria-controls={detailsId}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? "Hide details" : "Show details"}
            </button>
            <div id={detailsId} className="notice__details" hidden={!open}>
              {notice.body?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {(notice.date || notice.time || notice.venue || notice.contacts) && (
                <dl className="facts">
                  {notice.date && (
                    <>
                      <dt>Date</dt>
                      <dd>{longDate(notice.date)}</dd>
                    </>
                  )}
                  {notice.time && (
                    <>
                      <dt>Time</dt>
                      <dd>{notice.time}</dd>
                    </>
                  )}
                  {notice.venue && (
                    <>
                      <dt>Venue</dt>
                      <dd>{notice.venue}</dd>
                    </>
                  )}
                  {notice.contacts && (
                    <>
                      <dt>Contact</dt>
                      <dd>{notice.contacts.join(", ")}</dd>
                    </>
                  )}
                </dl>
              )}
              {notice.image && (
                <img
                  className="notice__poster"
                  src={notice.image}
                  alt={notice.imageAlt || ""}
                  loading="lazy"
                />
              )}
            </div>
          </>
        )}

        {notice.link && !compact && (
          <p style={{ marginTop: 12 }}>
            <a
              className="text-link"
              href={resolveHref(notice.link.href)}
              target="_blank"
              rel="noreferrer"
            >
              {notice.link.label} <ExternalIcon />
            </a>
          </p>
        )}
      </div>

      {notice.image && (
        <div className="notice__thumb">
          <img src={notice.image} alt="" loading="lazy" />
        </div>
      )}
    </li>
  );
}
