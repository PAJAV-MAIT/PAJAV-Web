import {
  bigInitiatives,
  competeList,
  contributionPath,
  pillars,
  prizePolicy,
  regularActivities,
  workshopFormats,
} from "../data/programs";
import { CheckIcon } from "../components/Icons";
import { Label, More, PageTitle } from "../components/ui";

const pillar = (id) => pillars.find((p) => p.id === id);

function Checklist({ items }) {
  return (
    <ul className="checklist">
      {items.map((t) => (
        <li key={t}>
          <CheckIcon />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Programmes() {
  return (
    <>
      <PageTitle title="Programmes">
        Learn the technology. Understand the problem. Improve the solution together. Here's how PAJAV builds,
        teaches and competes.
      </PageTitle>

      <section id="build" className="section section--tight" aria-labelledby="build-title">
        <div className="wrap">
          <Label>01 Build</Label>
          <div className="split">
            <div className="split__side">
              <h2 id="build-title" className="split__title">
                {pillar("build").line}
              </h2>
              <p className="split__text">{pillar("build").about}</p>
              <More to="/projects">See the projects</More>
            </div>
            <div className="two">
              <div>
                <h3 className="h-sub">What building looks like</h3>
                <Checklist items={pillar("build").points} />
              </div>
              <div>
                <h3 className="h-sub">How we start</h3>
                <p className="muted">
                  Two or three well-led projects first, chosen on real-world relevance, SDG fit and feasibility. More
                  as leads and contributors come in. Every project has a lead, a milestone and a way to test whether
                  it works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="section" aria-labelledby="learn-title">
        <div className="wrap">
          <Label>02 Learn & contribute</Label>
          <div className="split">
            <div className="split__side">
              <h2 id="learn-title" className="split__title">
                Workshops & open source
              </h2>
              <p className="split__text">
                Workshops connect sustainability, technical skills and live PAJAV projects. Open to every MAIT student,
                not just members.
              </p>
            </div>
            <div>
              <div className="formats">
                {workshopFormats.map((f) => (
                  <article key={f.name} className="format">
                    <h3>{f.name}</h3>
                    <p>For {f.for}</p>
                    <ol className="numlist">
                      {f.steps.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ol>
                  </article>
                ))}
              </div>

              <h3 className="h-sub" style={{ marginTop: 40 }}>
                Your path to a first contribution
              </h3>
              <ol className="path">
                {contributionPath.map((s, i) => (
                  <li key={s}>
                    <b aria-hidden="true">{i + 1}</b>
                    {s}
                  </li>
                ))}
              </ol>
              <p className="muted" style={{ marginTop: 16, maxWidth: "62ch" }}>
                Maintainers review every contribution, give feedback and credit contributors. Public repositories come
                with documentation, contribution guidelines and a licence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="compete" className="section section--tight" aria-labelledby="compete-title">
        <div className="wrap">
          <Label>03 Compete & showcase</Label>
          <div className="split">
            <div className="split__side">
              <h2 id="compete-title" className="split__title">
                Hackathons & competitions
              </h2>
              <p className="split__text">Turning engineering practice into opportunities.</p>
              <More to="/events">Upcoming events</More>
            </div>
            <div className="two">
              <div>
                <h3 className="h-sub">How we compete</h3>
                <Checklist items={competeList} />
              </div>
              <div className="policy">
                <h3>Fair prize policy</h3>
                {prizePolicy.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="rhythm-title">
        <div className="wrap">
          <Label>Events</Label>
          <div className="split">
            <div className="split__side">
              <h2 id="rhythm-title" className="split__title">
                The year at PAJAV
              </h2>
              <p className="split__text">
                Meaningful outcomes over event count. A big event happens only when we can run it well.
              </p>
            </div>
            <div className="two">
              <div>
                <h3 className="h-sub">Every semester</h3>
                <Checklist items={regularActivities} />
              </div>
              <div>
                <h3 className="h-sub">Bigger goals</h3>
                <Checklist items={bigInitiatives} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
