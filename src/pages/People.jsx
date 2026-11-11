import { useState } from "react";
import { coreTeams, faculty, leadership, session } from "../data/team";
import { showcase } from "../data/showcase";
import { Portrait } from "../components/People";
import PersonDialog from "../components/PersonDialog";
import { Label, PageTitle } from "../components/ui";

const logoContributors = showcase.find((work) => work.id === "logo")?.credits || [];
const donationPosterContributors = showcase.find((work) => work.id === "donation-poster")?.credits || [];

const credits = [
  {
    title: "The PAJAV Logo",
    contributors: logoContributors,
  },
  {
    title: "Donation Drive Poster",
    contributors: donationPosterContributors,
  },
  {
    title: "Green Map",
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
                {credit.contributors?.length > 0 && (
                  <ul className="credits__contributors">
                    {credit.contributors.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>

      <PersonDialog person={person} onClose={() => setPerson(null)} />
    </>
  );
}
