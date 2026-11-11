import { useState } from "react";
import { coreTeams, faculty, leadership, session } from "../data/team";
import { showcase } from "../data/showcase";
import { Portrait } from "../components/People";
import PersonDialog from "../components/PersonDialog";
import { Label, PageTitle } from "../components/ui";

export default function People() {
  const [person, setPerson] = useState(null);

  // UW-style credits: everyone who made PAJAV happen, grouped by role
  const credits = [
    { title: "Leadership", people: leadership.map((p) => [p.name, p.role]) },
    { title: "Faculty", people: faculty.map((p) => [p.name, p.role]) },
    ...coreTeams.map((t) => ({ title: t.team, people: t.members.map((m) => [m.name, m.role]) })),
    ...showcase
      .filter((w) => w.credits.length)
      .map((w) => ({ title: w.title, people: w.credits.map((n) => [n]) })),
  ];

  return (
    <>
      <PageTitle title="People">
        Meet the people behind PAJAV — the student leaders, passionate teams and faculty mentors working together to
        turn ideas into impact.
      </PageTitle>

      <section className="section section--tight" aria-labelledby="lead-title">
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

      <section className="section section--tight" aria-labelledby="fac-title">
        <div className="wrap">
          <Label>Faculty Coordinators</Label>
          <h2 id="fac-title" className="sr-only">
            Faculty coordinators
          </h2>
          <ul className="leaders leaders--3">
            {faculty.map((p) => (
              <Portrait key={p.name} person={{ ...p, department: "Faculty Coordinators" }} onOpen={setPerson} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="core-title">
        <div className="wrap">
          <Label>PAJAV teams</Label>
          <h2 id="core-title" className="split__title people__core-title">
            Core Team {session}
          </h2>
          {coreTeams.map((t) => (
            <div key={t.team} className="people__department">
              <h3 className="split__title">
                {t.team}
              </h3>
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
            {credits.map((c) => (
              <section key={c.title}>
                <h3>{c.title}</h3>
                <ul>
                  {c.people.map(([name, role]) => (
                    <li key={name}>
                      {name}
                      {role && (
                        <>
                          <br />
                          <span>{role}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <PersonDialog person={person} onClose={() => setPerson(null)} />
    </>
  );
}
