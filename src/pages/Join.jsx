import { Link } from "react-router-dom";
import { site } from "../data/site";
import { teams } from "../data/team";
import { ExternalIcon } from "../components/Icons";

const OPEN_TEAMS = ["event-planner", "outreach", "website", "social-media", "poster", "report-preparation"];

export default function Join() {
  const open = teams.filter((t) => OPEN_TEAMS.includes(t.id));

  return (
    <>
      <header className="page-head wrap">
        <h1>Join PAJAV</h1>
        <p>
          Open to every student at {site.instituteShort}. Whether you code, design, write or
          organise, there's a team that needs you.
        </p>
        <div className="hero__actions">
          <a className="btn btn--solid" href={site.joinForm} target="_blank" rel="noreferrer">
            Fill the membership form <ExternalIcon />
          </a>
        </div>
      </header>

      <section className="section" aria-labelledby="how">
        <div className="wrap">
          <h2 id="how" className="section__title" style={{ marginBottom: 28 }}>
            How it works
          </h2>
          <ol className="steps">
            <li>
              <h3>Fill the form</h3>
              <p>Tell us who you are and which teams interest you. It takes a couple of minutes.</p>
            </li>
            <li>
              <h3>Hear from a coordinator</h3>
              <p>The student coordinators get in touch and add you to the members' group.</p>
            </li>
            <li>
              <h3>Pick up work</h3>
              <p>
                Join a team, help at the next drive, or start a project under one of the five
                elements.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="teams">
        <div className="wrap">
          <div className="section__head">
            <div>
              <h2 id="teams" className="section__title">
                Teams you can join
              </h2>
              <p className="section__lede">You can be part of more than one.</p>
            </div>
            <Link className="text-link" to="/people">
              See who's in each team
            </Link>
          </div>
          <dl className="defs" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "24px 40px" }}>
            {open.map((t) => (
              <div key={t.id}>
                <dt>{t.name}</dt>
                <dd>{t.about}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="give">
        <div className="wrap two-col">
          <h2 id="give" className="section__title">
            Not a student here?
          </h2>
          <div className="prose">
            <p>
              Organisations, NGOs and faculty who want to work with PAJAV on a drive or a project can
              reach the coordinators listed on the{" "}
              <Link to="/people">People page</Link>. Donations for drives are announced on the{" "}
              <Link to="/announcements">noticeboard</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
