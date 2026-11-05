import { useState } from "react";
import { Link } from "react-router-dom";
import { elements, techTag } from "../data/elements";
import { projects, statusLabel } from "../data/projects";
import { showcase } from "../data/showcase";
import { workflow, workflowNotes } from "../data/programs";
import ProjectTile from "../components/ProjectTile";
import Lightbox from "../components/Lightbox";
import { Label, PageTitle } from "../components/ui";

const STATUSES = ["active", "idea", "done"];
const ORDER = { active: 0, idea: 1, done: 2 };

export default function Projects() {
  const [status, setStatus] = useState("");
  const [el, setEl] = useState("");
  const [zoom, setZoom] = useState(null);

  const list = projects
    .filter((p) => (!status || p.status === status) && (!el || p.element === el))
    .sort((a, b) => ORDER[a.status] - ORDER[b.status]);

  const usedElements = [...elements, techTag].filter((e) => projects.some((p) => p.element === e.id));

  return (
    <>
      <PageTitle title="Projects">
        Software, hardware and data projects that tackle real problems — each filed under the element it helps.
        Ideas in the pool are waiting for a lead and contributors.
      </PageTitle>

      <section className="section dark" aria-label="Project grid">
        <div className="wrap">
          <div className="subnav" role="group" aria-label="Filter projects">
            <button type="button" aria-pressed={!status && !el} onClick={() => {
                setStatus("");
                setEl("");
              }}>
              All {projects.length}
            </button>
            {STATUSES.map((s) => (
              <button key={s} type="button" aria-pressed={status === s} onClick={() => setStatus(status === s ? "" : s)}>
                {statusLabel[s]}
              </button>
            ))}
            <span className="subnav__sep" aria-hidden="true" />
            {usedElements.map((e) => (
              <button
                key={e.id}
                type="button"
                data-el={e.id}
                aria-pressed={el === e.id}
                onClick={() => setEl(el === e.id ? "" : e.id)}
              >
                {e.name}
              </button>
            ))}
          </div>

          <ul className="pgrid">
            {list.map((p, i) => (
              <ProjectTile key={p.id} project={p} tall={i === 0 && (list.length + 1) % 4 === 0} />
            ))}
          </ul>
          {list.length === 0 && <p className="empty-dark">No projects match those filters yet.</p>}
        </div>
      </section>

      <section className="section" aria-labelledby="flow-title">
        <div className="wrap">
          <Label>How a project happens</Label>
          <div className="split">
            <div className="split__side">
              <h2 id="flow-title" className="split__title">
                From problem to tested solution
              </h2>
              <p className="split__text">Got an idea? It goes through these six steps.</p>
            </div>
            <div>
              <ol className="flow">
                {workflow.map(([title, text]) => (
                  <li key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </li>
                ))}
              </ol>
              <div className="callouts">
                {workflowNotes.map((n) => (
                  <p key={n} className="callout">
                    {n}
                  </p>
                ))}
              </div>
              <div className="hero__actions">
                <Link className="btn btn--primary" to="/join#pitch">
                  Pitch a project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="showcase" className="section section--tight" aria-labelledby="showcase-title">
        <div className="wrap">
          <Label>Showcase</Label>
          <h2 id="showcase-title" className="split__title" style={{ marginBottom: 24 }}>
            Made by members
          </h2>
          <ul className="works">
            {showcase.map((w) => (
              <li key={w.id} className="work" id={w.id}>
                <button
                  type="button"
                  className={`work__frame${w.id === "logo" ? " work__frame--contain" : ""}`}
                  onClick={() => setZoom(w)}
                  aria-label={`Enlarge ${w.title}`}
                >
                  <img src={w.image} alt={w.alt} loading="lazy" />
                </button>
                <h3>{w.title}</h3>
                <p>
                  {w.note}
                  {w.credits.length > 0 && ` By ${w.credits.join(", ")}.`}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Lightbox item={zoom} onClose={() => setZoom(null)} />
    </>
  );
}
