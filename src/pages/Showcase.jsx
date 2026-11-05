import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { showcase } from "../data/showcase";
import Dialog from "../components/Dialog";

function Credits({ names, team }) {
  return (
    <p className="credits">
      <span>{team ? `${team} team: ` : "By "}</span>
      {names.map((n, i) => (
        <Fragment key={n}>
          {i > 0 && ", "}
          <Link to={`/people?q=${encodeURIComponent(n)}`}>{n}</Link>
        </Fragment>
      ))}
    </p>
  );
}

export default function Showcase() {
  const [zoom, setZoom] = useState(null);

  return (
    <>
      <header className="page-head wrap">
        <h1>Showcase</h1>
        <p>Designs, writing and builds by PAJAV members, credited to the people who made them.</p>
      </header>

      <div className="wrap" style={{ paddingBottom: "clamp(56px, 8vw, 96px)" }}>
        <div className="showcase">
          {showcase.map((w) =>
            w.kind === "quote" ? (
              <figure key={w.id} className="work" id={w.id}>
                <blockquote className="work__quote">{w.text}</blockquote>
                <figcaption>
                  <div className="work__title">{w.title}</div>
                  {w.note && <p className="work__note">{w.note}</p>}
                  <Credits names={w.credits} team={w.team} />
                </figcaption>
              </figure>
            ) : (
              <figure
                key={w.id}
                id={w.id}
                className={`work${w.original ? " work--poster" : ""}`}
              >
                <button
                  type="button"
                  className="work__frame"
                  onClick={() => setZoom(w)}
                  aria-label={`Enlarge ${w.title}`}
                >
                  <img src={w.image} alt={w.alt} loading="lazy" />
                </button>
                <figcaption>
                  <div className="work__title">{w.title}</div>
                  {w.note && <p className="work__note">{w.note}</p>}
                  <Credits names={w.credits} team={w.team} />
                </figcaption>
              </figure>
            )
          )}
        </div>

        <div className="add-work">
          <p>Made something for PAJAV? Send it to the website team to get it on this page.</p>
          <Link className="btn" to="/people#team-website">
            Find the website team
          </Link>
        </div>
      </div>

      <Dialog
        open={!!zoom}
        onClose={() => setZoom(null)}
        label={zoom?.title || "Image"}
        className="lightbox"
      >
        {zoom && (
          <figure style={{ margin: 0 }}>
            <img src={zoom.original || zoom.image} alt={zoom.alt} />
            <figcaption>
              <strong>{zoom.title}</strong>
              {zoom.note}
              {zoom.original && (
                <>
                  {" "}
                  <a href={zoom.original} download>
                    Download original
                  </a>
                </>
              )}
            </figcaption>
          </figure>
        )}
      </Dialog>
    </>
  );
}
