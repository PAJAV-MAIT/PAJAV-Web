import { Link } from "react-router-dom";
import { elements } from "../data/elements";
import { site } from "../data/site";

const mission = [
  [
    "Sustainability education & awareness",
    "Teaching individuals, communities and institutions why conservation matters and how to live sustainably.",
  ],
  [
    "Natural resource conservation",
    "Advocating for and carrying out measures that protect forests, rivers, clean air and biodiversity.",
  ],
  [
    "Renewable energy & green innovation",
    "Supporting the move to clean energy and technology that works with the environment, not against it.",
  ],
  [
    "Community engagement",
    "Getting communities to protect and restore their own local ecosystems.",
  ],
  [
    "Collaboration & policy advocacy",
    "Working with governments, non-profits and businesses on policies for a greener future.",
  ],
];

const values = [
  ["Sustainability", "Long-term ecological balance through responsible use of resources."],
  ["Conservation", "Protecting natural habitats, biodiversity and endangered species."],
  ["Innovation", "Green technology and renewable energy, built by people who can code."],
  ["Community", "Empowering individuals and local groups to take meaningful action."],
  ["Education", "Spreading what we know about climate change, pollution and eco-friendly living."],
];

export default function About() {
  return (
    <>
      <header className="page-head wrap">
        <h1>About PAJAV</h1>
        <p>
          {site.fullName} is the official society of the Department of Information Technology at{" "}
          {site.institute}. Our name is the five elements that sustain life.
        </p>
      </header>

      <section className="section" style={{ borderTop: 0, paddingTop: 0 }} aria-label="Motto">
        <div className="wrap two-col">
          <p className="motto">{site.tagline}.</p>
          <div className="prose">
            <p>
              Nature rests on a balance of five elements: Prithvi (earth), Agni (fire), Jal
              (water), Aakash (space) and Vaayu (air). Industrialisation, deforestation, pollution
              and climate change have disturbed that balance.
            </p>
            <p>
              PAJAV was founded to help restore it, combining scientific methods with traditional
              ecological wisdom. We run drives and campaigns, build technology that measures and
              saves resources, and get more people to look after the places they live in.
            </p>
            <p>
              Every action counts — planting a tree, reducing waste, saving water or backing clean
              energy.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="domains">
        <div className="wrap">
          <div className="section__head">
            <div>
              <h2 id="domains" className="section__title">
                Five domains of work
              </h2>
              <p className="section__lede">
                Every project and event on this site is filed under one of these, or under Tech when
                it serves them all.
              </p>
            </div>
            <Link className="text-link" to="/projects">
              Projects by element
            </Link>
          </div>
          <ul className="domains">
            {elements.map((e) => (
              <li key={e.id} className="domain" data-el={e.id}>
                <span className="domain__letter" aria-hidden="true">
                  {e.letter}
                </span>
                <div>
                  <h3 className="domain__name">
                    {e.name} <span lang="hi">{e.devanagari}</span>
                  </h3>
                  <p className="domain__sub">{e.domain}</p>
                  <p className="domain__blurb">{e.blurb}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="vision">
        <div className="wrap two-col">
          <h2 id="vision" className="section__title">
            Vision
          </h2>
          <p className="prose" style={{ fontSize: "1.2rem" }}>
            A world where people live in harmony with nature, conserving and using the five
            elements in balance — with traditional wisdom and modern science working together for
            the generations to come.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="mission">
        <div className="wrap two-col">
          <div>
            <h2 id="mission" className="section__title">
              Mission
            </h2>
            <p className="section__lede">A movement for environmental awareness and action, through:</p>
          </div>
          <dl className="defs">
            {mission.map(([t, d]) => (
              <div key={t}>
                <dt>{t}</dt>
                <dd>{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="values">
        <div className="wrap two-col">
          <h2 id="values" className="section__title">
            What we value
          </h2>
          <dl className="defs">
            {values.map(([t, d]) => (
              <div key={t}>
                <dt>{t}</dt>
                <dd>{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
