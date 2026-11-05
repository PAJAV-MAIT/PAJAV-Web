import { useState } from "react";
import { Link } from "react-router-dom";
import { elements } from "../data/elements";
import { site } from "../data/site";
import { announcements } from "../data/announcements";
import { projects } from "../data/projects";
import { coordinators, people, studentMembers, teams } from "../data/team";
import { sortNotices } from "../lib/format";
import NoticeItem from "../components/NoticeItem";
import ProjectItem from "../components/ProjectItem";
import PersonButton from "../components/PersonButton";
import PersonDialog from "../components/PersonDialog";

const accentStyle = (id) =>
  id ? { "--accent": `var(--el-${id})`, "--accent-ink": `var(--el-${id}-ink)` } : undefined;

function Hero() {
  const [active, setActive] = useState(null);
  const el = elements.find((e) => e.id === active);
  const related = el ? projects.filter((p) => p.element === el.id && p.status !== "done") : [];

  return (
    <section className="hero wrap" style={accentStyle(active)} aria-labelledby="hero-title">
      <h1 id="hero-title" className="sr-only">
        PAJAV: Prithvi, Agni, Jal, Aakash, Vaayu. {site.affiliation}, {site.institute}.
      </h1>

      <p className="hero__affil">
        <img src="/mait.webp" alt="" width="34" height="28" />
        {site.affiliation}, {site.instituteShort}
      </p>

      <div className="elements" data-active={active || undefined} role="group" aria-label="The five elements">
        {elements.map((e) => (
          <button
            key={e.id}
            type="button"
            className="element-key"
            data-el={e.id}
            aria-pressed={active === e.id}
            onClick={() => setActive((a) => (a === e.id ? null : e.id))}
          >
            <span className="element-key__letter" aria-hidden="true">
              {e.letter}
            </span>
            <span className="element-key__deva" lang="hi">
              {e.devanagari}
            </span>
            <span className="element-key__en">
              {e.name}, {e.english}
            </span>
          </button>
        ))}
      </div>

      <div className="hero__body">
        <div>
          <p className="hero__tagline">{site.tagline}.</p>
          <p className="hero__lede">
            We're the IT department's society for the five elements. Students who use code,
            campaigns and community work to keep earth, fire, water, sky and air in balance.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--solid" to="/announcements">
              See what's on
            </Link>
            <Link className="btn" to="/join">
              Join PAJAV
            </Link>
          </div>
        </div>

        <div className="element-panel" aria-live="polite">
          {el ? (
            <>
              <p className="element-panel__name">
                {el.name}
                <span lang="hi">{el.devanagari}</span>
              </p>
              <p className="element-panel__domain">{el.domain}</p>
              <p className="element-panel__blurb">{el.blurb}</p>
              {related.length > 0 && (
                <ul>
                  {related.map((p) => (
                    <li key={p.id}>
                      <Link to={`/projects#${p.id}`}>{p.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <p className="element-panel__hint">
              Each letter of PAJAV is an element of nature. Pick one to see what we do for it.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [person, setPerson] = useState(null);
  const notices = sortNotices(announcements).slice(0, 4);
  const workbench = [
    ...projects.filter((p) => p.status === "active"),
    ...projects.filter((p) => p.status === "planned"),
  ].slice(0, 6);
  const leads = [...coordinators.students, ...coordinators.faculty].map((c) =>
    people.find((p) => p.name === c.name)
  );

  return (
    <>
      <Hero />

      <section className="section" aria-labelledby="notices-title">
        <div className="wrap">
          <div className="section__head">
            <div>
              <h2 id="notices-title" className="section__title">
                Noticeboard
              </h2>
              <p className="section__lede">Events, calls for members and society news.</p>
            </div>
            <Link className="text-link" to="/announcements">
              All notices
            </Link>
          </div>
          <ul className="notices">
            {notices.map((n) => (
              <NoticeItem key={n.id} notice={n} compact />
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="work-title">
        <div className="wrap">
          <div className="section__head">
            <div>
              <h2 id="work-title" className="section__title">
                On the workbench
              </h2>
              <p className="section__lede">
                What's in progress and what's next. Each project is filed under the element it
                serves.
              </p>
            </div>
            <Link className="text-link" to="/projects">
              All projects
            </Link>
          </div>
          <ul className="projects">
            {workbench.map((p) => (
              <ProjectItem key={p.id} project={p} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="people-title">
        <div className="wrap two-col">
          <div>
            <h2 id="people-title" className="section__title">
              The people
            </h2>
            <p className="stat-line">
              <strong>{studentMembers.length} students</strong> across{" "}
              <strong>{teams.length} teams</strong>, guided by two faculty coordinators.
            </p>
            <p style={{ marginTop: 20 }}>
              <Link className="text-link" to="/people">
                Meet everyone
              </Link>
            </p>
          </div>
          <div className="coord-grid">
            {leads.map((p) => (
              <PersonButton key={p.id} person={p} detail={p.roles[0]} onOpen={setPerson} />
            ))}
          </div>
        </div>
      </section>

      <PersonDialog person={person} onClose={() => setPerson(null)} />
    </>
  );
}
