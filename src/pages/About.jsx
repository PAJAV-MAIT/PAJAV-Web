import { elements } from "../data/elements";
import { site } from "../data/site";
import { ElementIcon } from "../components/Icons";
import { Label, More, PageTitle } from "../components/ui";

export default function About() {
  return (
    <>
      <PageTitle title="About">
        {site.what} of the {site.affiliation}, {site.institute}. A place where students learn by building, and grow
        by competing.
      </PageTitle>

      <section className="section section--tight" aria-labelledby="vision-title">
        <div className="wrap">
          <Label>Foundation</Label>
          <div className="split">
            <div className="split__side">
              <h2 id="vision-title" className="split__title">
                Vision & mission
              </h2>
            </div>
            <div className="two">
              <div>
                <h3 className="h-sub">Vision</h3>
                <p className="lead-text" style={{ fontSize: "1.15rem" }}>
                  A student community known for developing capable engineers, meaningful technical projects and
                  competitive talent.
                </p>
              </div>
              <div>
                <h3 className="h-sub">Mission</h3>
                <p className="lead-text" style={{ fontSize: "1.15rem" }}>
                  Help students of every skill level spot real-world problems, learn the technology, build solutions
                  together and take their work beyond the classroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="usp-title">
        <div className="wrap">
          <Label>What makes us different</Label>
          <div className="split">
            <div className="split__side">
              <h2 id="usp-title" className="split__title">
                Learn, build and compete — in one place
              </h2>
              <p className="split__text">Three experiences that are usually disconnected.</p>
            </div>
            <div>
              <blockquote className="quote">
                “That's where I can learn and build something, even if I'm starting from zero.”
              </blockquote>
              <p className="muted">What we want every MAIT student to say about PAJAV.</p>
              <div className="triad">
                <div>
                  <strong>Learn</strong>
                  <p>Practical skills, even as a beginner.</p>
                </div>
                <div>
                  <strong>Build</strong>
                  <p>Real technical projects on meaningful problems.</p>
                </div>
                <div>
                  <strong>Compete</strong>
                  <p>Hackathons, competitions, demos and outside collaborations.</p>
                </div>
              </div>
              <div className="callouts">
                <p className="callout">
                  <strong>The SDGs are our starting direction, not a cage.</strong> We prioritise sustainability and
                  human development, and still back exceptional ideas outside the framework.
                </p>
                <p className="callout">
                  <strong>In line with NEP 2020.</strong> AI/ML, IoT and other emerging technologies applied to
                  real societal challenges, through events, workshops, competitions and awareness drives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="name-title">
        <div className="wrap">
          <Label>The name</Label>
          <div className="split">
            <div className="split__side">
              <h2 id="name-title" className="split__title">
                Five elements, five letters
              </h2>
              <p className="split__text">
                The logo puts a laptop at the centre of earth, fire, water, sky and air: technology serving the
                elements that sustain life.
              </p>
              <More to="/projects">Projects by element</More>
            </div>
            <ul className="element-row" style={{ marginTop: 0 }}>
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
          </div>
        </div>
      </section>
    </>
  );
}
