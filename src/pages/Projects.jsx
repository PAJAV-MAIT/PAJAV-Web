import { useState } from "react";
import { elements, techTag } from "../data/elements";
import { projects, statusLabel } from "../data/projects";
import ProjectItem from "../components/ProjectItem";

const FILTERS = [...elements, techTag];
const ORDER = ["active", "planned", "done"];

export default function Projects() {
  const [el, setEl] = useState(null);
  const list = projects.filter((p) => !el || p.element === el);

  return (
    <>
      <header className="page-head wrap">
        <h1>Projects</h1>
        <p>
          What PAJAV is building, planning and has finished. Filter by the element a project serves.
        </p>
      </header>

      <div className="wrap" style={{ paddingBottom: "clamp(56px, 8vw, 96px)" }}>
        <div className="filters" role="group" aria-label="Filter by element">
          <button type="button" className="chip" aria-pressed={!el} onClick={() => setEl(null)}>
            All <span className="chip__count">{projects.length}</span>
          </button>
          {FILTERS.map((f) => {
            const count = projects.filter((p) => p.element === f.id).length;
            if (!count) return null;
            return (
              <button
                key={f.id}
                type="button"
                className="chip"
                data-el={f.id}
                aria-pressed={el === f.id}
                onClick={() => setEl(el === f.id ? null : f.id)}
              >
                {f.name}
                {f.id !== "tech" && <span className="sr-only"> ({f.english})</span>}
                <span className="chip__count">{count}</span>
              </button>
            );
          })}
        </div>

        {ORDER.map((status) => {
          const group = list.filter((p) => p.status === status);
          if (!group.length) return null;
          return (
            <section key={status} className="list-group" aria-labelledby={`g-${status}`}>
              <h2 id={`g-${status}`} className="list-group__title">
                {statusLabel[status]}
              </h2>
              <ul className="projects">
                {group.map((p) => (
                  <ProjectItem key={p.id} project={p} />
                ))}
              </ul>
            </section>
          );
        })}

        {list.length === 0 && <p className="empty">No projects under this element yet.</p>}
      </div>
    </>
  );
}
