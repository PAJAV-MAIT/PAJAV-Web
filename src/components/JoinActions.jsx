// "Apply now" when recruitment is open; otherwise a calm pointer to what's
// open to everyone. Driven by site.recruitment in src/data/site.js.
import { Link } from "react-router-dom";
import { recruitment } from "../lib/recruitment";
import { ExternalIcon } from "./Icons";

export default function JoinActions({ light = false }) {
  const r = recruitment();
  const primary = light ? "btn btn--light" : "btn btn--primary";
  const secondary = light ? "btn btn--ghost-light" : "btn";
  return (
    <div className="hero__actions">
      {r.open ? (
        <a className={primary} href={r.formUrl} target="_blank" rel="noreferrer">
          Apply now <ExternalIcon />
        </a>
      ) : (
        <Link className={primary} to="/events">
          See what's on
        </Link>
      )}
      <Link className={secondary} to="/join">
        {r.open ? "How joining works" : "How to join"}
      </Link>
    </div>
  );
}
