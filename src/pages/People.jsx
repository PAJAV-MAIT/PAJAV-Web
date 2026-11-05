import { useState } from "react";
import { coreTeams, faculty, leadership, session } from "../data/team";
import { showcase } from "../data/showcase";
import { Portrait } from "../components/People";
import PersonDialog from "../components/PersonDialog";
import { Label, Note, PageTitle } from "../components/ui";

export default function People() {
  const [person, setPerson] = useState(null);
  const hasCore = coreTeams.some((t) => t.members?.length);

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
        The students and faculty behind PAJAV, session {session}. Select anyone to see more.
      </PageTitle>

      <section className="section section--tight" aria-labelledby="lead-title">
        <div className="wrap">
          <Label>Leadership team</Label>
          <h2 id="lead-title" className="sr-only">
            Leadership team
          </h2>
          <ul className="people-grid people-grid--4">
            {leadership.map((p) => (
              <Portrait key={p.name} person={p} onOpen={setPerson} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="fac-title">
        <div className="wrap">
          <Label>Faculty coordinators</Label>
          <h2 id="fac-title" className="sr-only">
            Faculty coordinators
          </h2>
          <ul className="people-grid people-grid--3">
            {faculty.map((p) => (
              <Portrait key={p.name} person={p} onOpen={setPerson} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="core-title">
        <div className="wrap">
          <Label>Core team</Label>
          <h2 id="core-title" className="sr-only">
            Core team
          </h2>
          {hasCore ? (
            coreTeams.map((t) => (
              <div key={t.team} style={{ marginBottom: 40 }}>
                <h3 className="split__title" style={{ marginBottom: 16 }}>
                  {t.team}
                </h3>
                <ul className="people-grid">
                  {t.members.map((m) => (
                    <Portrait key={m.name} person={{ ...m, team: t.team }} onOpen={setPerson} />
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div className="soon">
              <Note>Introducing soon</Note>
              <p>
                The {session} core team has been selected. Names, teams and photos go up here as soon as the
                introductions are ready.
              </p>
            </div>
          )}
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
