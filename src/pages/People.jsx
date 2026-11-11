import { useState } from "react";
import { coreTeams, faculty, leadership, session } from "../data/team";
import { Portrait } from "../components/People";
import PersonDialog from "../components/PersonDialog";
import { Label, PageTitle } from "../components/ui";

const credits = [
  {
    title: "Website & Engineering",
    description: "Frontend React/Vite development, Three.js 3D globe, hosting & CI/CD.",
  },
  {
    title: "Logo & Brand Identity",
    description: "Wordmark, element iconography, typography & brand guidelines.",
  },
  {
    title: "Posters & Print",
    description: "Recruitment posters, event banners, orientation mailers.",
  },
  {
    title: "Portraits & Photography",
    description: "Studio member portraits, event documentation.",
  },
  {
    title: "Logistics & Event Setup",
    description: "Auditorium AV setup, registration desk, refreshments.",
  },
];

export default function People() {
  const [person, setPerson] = useState(null);

  return (
    <>
      <PageTitle title="PEOPLE">
        Meet the people behind PAJAV — the student leaders, passionate teams and faculty mentors working together to
        turn ideas into impact.
      </PageTitle>

      <section className="section section--tight people-section" aria-labelledby="lead-title">
        <div className="wrap">
          <Label>Leadership Team</Label>
          <h2 id="lead-title" className="sr-only">
            Leadership team
          </h2>
          <ul className="leaders">
            {leadership.map((p) => (
              <Portrait key={p.name} person={{ ...p, department: "Leadership Team" }} onOpen={setPerson} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight people-section" aria-labelledby="fac-title">
        <div className="wrap">
          <Label>Faculty Coordinators</Label>
          <h2 id="fac-title" className="sr-only">
            Faculty coordinators
          </h2>
          <ul className="leaders">
            {faculty.map((p) => (
              <Portrait key={p.name} person={{ ...p, department: "Faculty Coordinators" }} onOpen={setPerson} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight people-section" aria-labelledby="core-title">
        <div className="wrap">
          <Label>PAJAV Teams</Label>
          <h2 id="core-title" className="people__core-title">
            Core Team {session}
          </h2>
          {coreTeams.map((t) => (
            <div key={t.team} className="people__department">
              <h3>{t.team}</h3>
              <p className="people__department-description">{t.description}</p>
              <ul className="leaders">
                {t.members.map((m) => (
                  <Portrait key={m.name} person={{ ...m, team: t.team }} onOpen={setPerson} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="credits-block" aria-labelledby="credits-title">
        <div className="wrap">
          <h2 id="credits-title">Credits</h2>
          <div className="credits">
            {credits.map((credit) => (
              <section key={credit.title} className="credits__item">
                <h3>{credit.title}</h3>
                <p>{credit.description}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <PersonDialog person={person} onClose={() => setPerson(null)} />
    </>
  );
}
