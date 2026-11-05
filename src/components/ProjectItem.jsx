import { Fragment } from "react";
import { Link } from "react-router-dom";
import ElementTag from "./ElementTag";
import { statusLabel } from "../data/projects";
import { teams } from "../data/team";

const teamId = Object.fromEntries(teams.map((t) => [t.name, t.id]));

export default function ProjectItem({ project }) {
  return (
    <li className="project" id={project.id} data-el={project.element}>
      <div className="project__meta">
        <ElementTag id={project.element} />
        <span>
          {statusLabel[project.status]}
          {project.when ? `, ${project.when}` : ""}
        </span>
      </div>
      <h3 className="project__title">{project.title}</h3>
      <p className="project__summary">{project.summary}</p>

      {project.status === "active" && typeof project.progress === "number" && (
        <div className="progress">
          <div
            className="progress__track"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={project.progress}
            aria-label={`${project.title} progress`}
          >
            <div className="progress__fill" style={{ width: `${project.progress}%` }} />
          </div>
          <span>{project.progress}%</span>
        </div>
      )}

      {project.teams?.length > 0 && (
        <p className="project__teams">
          <span className="project__label">{project.teams.length > 1 ? "Teams: " : "Team: "}</span>
          {project.teams.map((t, i) => (
            <Fragment key={t}>
              {i > 0 && ", "}
              {teamId[t] ? <Link to={`/people#team-${teamId[t]}`}>{t}</Link> : t}
            </Fragment>
          ))}
        </p>
      )}

      {project.links?.length > 0 && (
        <div className="project__links">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </li>
  );
}
