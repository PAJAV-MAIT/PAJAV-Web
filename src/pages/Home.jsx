import { useRef, useState } from "react";
import useFitText from "../lib/useFitText";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import { elements } from "../data/elements";
import { announcements } from "../data/announcements";
import { projects } from "../data/projects";
import { benefits, pillars } from "../data/programs";
import { faculty, leadership } from "../data/team";
import { isUpcoming, sortByDate } from "../lib/format";
import { ElementIcon } from "../components/Icons";
import { Label, More, Note } from "../components/ui";
import EventItem from "../components/EventItem";
import ProjectTile from "../components/ProjectTile";
import { LeaderCard } from "../components/People";
import PersonDialog from "../components/PersonDialog";
import Lightbox from "../components/Lightbox";
import JoinActions from "../components/JoinActions";
import Globe from "../components/Globe";

const BENEFIT_ICONS = ["tech", "prithvi", "agni", "aakash", "jal", "vayu"];

function Hero() {
  const words = useRef(null);
  useFitText(words, ".hero__word");

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__fabric" aria-hidden="true" />
      <div className="wrap">
        <h1 id="hero-title" className="hero__words" ref={words}>
          <span className="hero__word">
            <span>
              Build
              <em>.</em>
            </span>
            <small>real projects for real problems</small>
          </span>
          <span className="hero__word">
            <span>
              Learn
              <em>.</em>
            </span>
            <small>workshops, even from zero</small>
          </span>
          <span className="hero__word">
            <span>
              Compete
              <em>.</em>
            </span>
            <small>hackathons & demo days</small>
          </span>
        </h1>

        <div className="hero__foot">
          <div>
            <p className="hero__intro">
              <strong>PAJAV</strong> is the {site.what.toLowerCase()} of the {site.affiliation}, {site.instituteShort}.
              We learn by building <span className="hl">real-world solutions</span> with AI/ML, IoT and the web,
              aimed at the UN Sustainable Development Goals.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/events">
                See what's on
              </Link>
              <Link className="btn" to="/projects">
                Explore projects
              </Link>
            </div>
          </div>
          <Note className="hero__note">{site.motto}</Note>
        </div>

        <nav className="anchors" aria-label="On this page">
          <span>On this page</span>
          <a href="#about" onClick={(e) => scrollTo(e, "about")}>About us</a>
          <a href="#pillars" onClick={(e) => scrollTo(e, "pillars")}>What we do</a>
          <a href="#events" onClick={(e) => scrollTo(e, "events")}>Events</a>
          <a href="#projects" onClick={(e) => scrollTo(e, "projects")}>Projects</a>
          <a href="#people" onClick={(e) => scrollTo(e, "people")}>People</a>
        </nav>
      </div>
    </section>
  );
}

export default function Home() {
  const [person, setPerson] = useState(null);
  const [zoom, setZoom] = useState(null);

  // pinned first, then upcoming, then the most recent past ones
  const sorted = sortByDate(announcements);
  const current = sorted.filter((a) => a.pinned || isUpcoming(a.date));
  const latest = [...current, ...sorted.filter((a) => !current.includes(a))].slice(0, 3);

  const showcaseProjects = [
    ...projects.filter((p) => p.status === "active"),
    ...projects.filter((p) => p.status === "idea"),
    ...projects.filter((p) => p.status === "done"),
  ].slice(0, 7);

  return (
    <>
      <Hero />

      {/* ABC: side label + intro, plus the five elements */}
      <section id="about" className="section" aria-labelledby="about-title">
        <div className="wrap">
          <Label>About</Label>
          <div className="split">
            <div className="split__side">
              <h2 id="about-title" className="split__title">
                What PAJAV stands for
              </h2>
              <p className="split__text">
                Prithvi, Agni, Jal, Aakash, Vayu — the five elements. Every project we take on helps one of them.
              </p>
            </div>
            <div>
              <p className="lead-text">{site.intro}</p>
              <p className="lead-text muted">
                Our ambition: to be the society at MAIT where you can learn and build something even if you're
                starting from zero — and get chances to compete and win.
              </p>
              <ul className="element-row">
                {elements.map((e) => (
                  <li key={e.id} className="element-chip" data-el={e.id} data-letter={e.letter}>
                    <span className="element-chip__icon" aria-hidden="true">
                      <ElementIcon id={e.id} />
                    </span>
                    <p className="element-chip__name">
                      {e.name}
                      <span lang="hi">{e.devanagari}</span>
                    </p>
                    <span className="element-chip__domain">
                      {e.english}: {e.domain}
                    </span>
                    <p>{e.blurb}</p>
                  </li>
                ))}
              </ul>
              <div className="inst-card">
                <img src="/mait.webp" alt="MAIT logo" width="64" height="53" loading="lazy" />
                <p>
                  An official society of the {site.affiliation}, {site.institute}, in line with NEP 2020.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABC pillars */}
      <section id="pillars" className="section section--tight" aria-labelledby="pillars-title">
        <div className="wrap">
          <Label>What we do</Label>
          <div className="split">
            <div className="split__side">
              <h2 id="pillars-title" className="split__title">
                Three pillars
              </h2>
              <p className="split__text">
                Every event we run moves at least one of these forward — learning, building, or showing the work.
              </p>
              <More to="/programmes">All programmes</More>
            </div>
            <div className="pillars">
              {pillars.map((p) => (
                <article key={p.id} className="pillar">
                  <h3 className="pillar__name">{p.name}</h3>
                  <p className="pillar__line">{p.line}</p>
                  <ol className="numlist">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ol>
                  <p className="pillar__outcome">
                    <strong>Outcome</strong>
                    {p.outcome}
                  </p>
                  <More to={p.to}>Learn more</More>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABC events */}
      <section id="events" className="section section--tight" aria-labelledby="events-title">
        <div className="wrap">
          <Label>Events</Label>
          <div className="split">
            <div className="split__side">
              <h2 id="events-title" className="split__title">
                What's on
              </h2>
              <p className="split__text">
                Workshops, hackathons, talks and drives. New ones are announced here first.
              </p>
              <More to="/events">View all events</More>
            </div>
            <ul className="events" style={{ borderTop: "1px solid var(--navy)" }}>
              {latest.map((a) => (
                <EventItem key={a.id} item={a} onZoom={setZoom} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* UW dark project grid */}
      <section id="projects" className="section dark" aria-labelledby="projects-title">
        <div className="wrap">
          <Label>Projects</Label>
          <div className="split" style={{ marginBottom: 28 }}>
            <div className="split__side">
              <h2 id="projects-title" className="split__title">
                On the workbench
              </h2>
            </div>
            <div>
              <p className="lead-text">
                From real-world problems to tested solutions. Each project shows what it does and who it needs.
              </p>
              <div style={{ marginTop: 18 }}>
                <More to="/projects">All projects</More>
              </div>
            </div>
          </div>
          <ul className="pgrid">
            {showcaseProjects.map((p, i) => (
              <ProjectTile key={p.id} project={p} tall={i === 0 && (showcaseProjects.length + 1) % 4 === 0} />
            ))}
          </ul>
        </div>
      </section>

      {/* Why join */}
      <section className="section" aria-labelledby="why-title">
        <div className="wrap">
          <Label>Why PAJAV</Label>
          <div className="split">
            <div className="split__side">
              <h2 id="why-title" className="split__title">
                What you get
              </h2>
              <p className="split__text">Different skills, same goal. Here's what members take away.</p>
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

      {/* ABC leadership */}
      <section id="people" className="section section--tight" aria-labelledby="people-title">
        <div className="wrap">
          <Label>People</Label>
          <div className="split">
            <div className="split__side">
              <h2 id="people-title" className="split__title">
                Leadership team
              </h2>
              <p className="split__text">
                Guided by {faculty.map((f) => f.name).join(", ").replace(/, ([^,]*)$/, " and $1")}.
              </p>
              <More to="/people">Meet everyone</More>
            </div>
            <ul className="leaders">
              {leadership.map((p) => (
                <li key={p.name}>
                  <LeaderCard person={p} onOpen={setPerson} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ABC closing statement + globe */}
      <section className="section" aria-labelledby="closing-title">
        <div className="wrap closing">
          <div>
            <Label>Strong roots</Label>
            <h2 id="closing-title">
              {site.closer.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p>
              The Sustainable Development Goals are global. We start with problems we can see — on our campus and in
              our city — and build solutions that can travel.
            </p>
            <p>
              <strong>{site.tagline2}</strong> Coders, designers, hardware tinkerers, writers and organisers: you don't
              need to be an expert, you need to want to build something that matters.
            </p>
            <JoinActions />
          </div>
          <div className="orbit">
            <Globe />
            <Note>{site.promise}</Note>
          </div>
        </div>
      </section>

      <PersonDialog person={person} onClose={() => setPerson(null)} />
      <Lightbox item={zoom} onClose={() => setZoom(null)} />
    </>
  );
}
