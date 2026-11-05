import { Link } from "react-router-dom";
import { benefits } from "../data/programs";
import { leadership } from "../data/team";
import { recruitment } from "../lib/recruitment";
import { ElementIcon, ExternalIcon } from "../components/Icons";
import { Label, PageTitle } from "../components/ui";

const BENEFIT_ICONS = ["tech", "prithvi", "agni", "aakash", "jal", "vayu"];

export default function Join() {
  const r = recruitment();

  return (
    <>
      <PageTitle title="Join">
        Different skills, same goal. Here's how to get involved — some of it needs no membership at all.
      </PageTitle>

      <section className="section section--tight" aria-labelledby="status-title">
        <div className="wrap">
          <div className="status-card">
            <div>
              <span className="status-pill">{r.open ? `Open until ${r.deadlineText}` : "Applications closed"}</span>
              <h2 id="status-title">{r.title}</h2>
              <p>
                {r.open
                  ? "Core members build and shape the society: they lead projects, run workshops and represent PAJAV at hackathons."
                  : r.closedMessage}
              </p>
            </div>
            {r.open ? (
              <a className="btn btn--light" href={r.formUrl} target="_blank" rel="noreferrer">
                Apply now <ExternalIcon />
              </a>
            ) : (
              <Link className="btn btn--light" to="/events">
                See open events
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="anyone-title">
        <div className="wrap">
          <Label>Open to everyone</Label>
          <div className="split">
            <div className="split__side">
              <h2 id="anyone-title" className="split__title">
                No membership needed
              </h2>
              <p className="split__text">Every MAIT student can do these today.</p>
            </div>
            <ul className="flow flow--plain">
              <li>
                <h3>Come to a workshop</h3>
                <p>Pick one from the events page. Beginners are expected and welcome.</p>
              </li>
              <li>
                <h3>Contribute to a project</h3>
                <p>Open-source repos come with starter issues and maintainers who review your work.</p>
              </li>
              <li>
                <h3>Show your work</h3>
                <p>Bring your project to a showcase or demo day and get feedback.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="get-title">
        <div className="wrap">
          <Label>As a core member</Label>
          <div className="split">
            <div className="split__side">
              <h2 id="get-title" className="split__title">
                What you get
              </h2>
            </div>
            <ul className="benefits">
              {benefits.map(([title, text], i) => (
                <li key={title} className="benefit" data-el={BENEFIT_ICONS[i]}>
                  <h3>
                    <span className="dot" aria-hidden="true">
                      <ElementIcon id={BENEFIT_ICONS[i]} />
                    </span>
                    {title}
                  </h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="pitch" className="section" aria-labelledby="pitch-title">
        <div className="wrap">
          <Label>Got an idea?</Label>
          <div className="split">
            <div className="split__side">
              <h2 id="pitch-title" className="split__title">
                Pitch a project
              </h2>
            </div>
            <div>
              <p className="lead-text">
                Seen a problem on campus or in your community that technology could fix? Tell any member of the
                leadership team — {leadership.map((p) => p.name).join(", ").replace(/, ([^,]*)$/, " or $1")}. Good
                proposals go into the idea pool and through our six-step project workflow.
              </p>
              <div className="hero__actions">
                <Link className="btn btn--primary" to="/projects">
                  See the idea pool
                </Link>
                <Link className="btn" to="/people">
                  Meet the team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
