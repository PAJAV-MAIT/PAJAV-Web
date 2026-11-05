// UW-style project tile: dark card with cover + title; on hover or keyboard
// focus it flips to a light card with the description. On touch screens the
// description simply sits under the cover (see .ptile in index.css).
import { ElementIcon } from "./Icons";
import { elementById } from "../data/elements";
import { statusLabel } from "../data/projects";

export default function ProjectTile({ project, tall = false }) {
  const el = elementById[project.element];
  const meta = [statusLabel[project.status], project.when].filter(Boolean).join(", ");

  return (
    <li className={`ptile${tall ? " ptile--tall" : ""}`} id={project.id} data-el={project.element}>
      <div className="ptile__inner" tabIndex={0} role="group" aria-label={`${project.title}. ${meta}`}>
        {project.image ? (
          <div className="ptile__cover">
            <img src={project.image} alt="" loading="lazy" />
          </div>
        ) : (
          <div className="ptile__cover ptile__cover--art" data-letter={el?.letter || "P"} aria-hidden="true">
            <ElementIcon id={project.element} />
          </div>
        )}
        <div className="ptile__cap">
          <h3 className="ptile__title">{project.title}</h3>
          <p className="ptile__meta">
            {meta}
            {el ? `, ${el.name}` : ""}
          </p>
        </div>

        <div className="ptile__reveal">
          <span className="ptile__status">
            {statusLabel[project.status]}
            {project.sdg ? `, ${project.sdg}` : ""}
          </span>
          <p>{project.summary}</p>
          {project.lookingFor?.length > 0 && (
            <p className="ptile__looking">
              <strong>Looking for:</strong> {project.lookingFor.join(", ")}
            </p>
          )}
          {project.links?.length > 0 && (
            <div className="ptile__links">
              {project.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          )}
          {project.stack?.length > 0 && (
            <div className="ptile__chips">
              {project.stack.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
