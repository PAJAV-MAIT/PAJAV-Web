import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { coordinators, personByName, studentMembers, teams } from "../data/team";
import PersonButton from "../components/PersonButton";
import PersonDialog from "../components/PersonDialog";
import { SearchIcon } from "../components/Icons";

const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

function highlighter(q) {
  if (!q) return null;
  return (name) => {
    const i = norm(name).indexOf(norm(q));
    if (i < 0) return name;
    return (
      <>
        {name.slice(0, i)}
        <mark className="mark">{name.slice(i, i + q.length)}</mark>
        {name.slice(i + q.length)}
      </>
    );
  };
}

export default function People() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "";
  const [view, setView] = useState("teams");
  const [person, setPerson] = useState(null);

  const match = (name) => !q || norm(name).includes(norm(q.trim()));
  const hl = highlighter(q.trim());
  const setQ = (value) => {
    const next = new URLSearchParams(params);
    if (value) next.set("q", value);
    else next.delete("q");
    setParams(next, { replace: true });
  };

  const visibleTeams = teams
    .map((t) => ({ ...t, shown: t.members.filter(match) }))
    .filter((t) => t.shown.length > 0);
  const visiblePeople = studentMembers.filter((p) => match(p.name));

  return (
    <>
      <header className="page-head wrap">
        <h1>People</h1>
        <p>
          {studentMembers.length} students in {teams.length} teams, with two faculty coordinators.
          Select anyone to see the teams they're part of.
        </p>
      </header>

      <section className="section" style={{ borderTop: 0, paddingTop: 0 }} aria-labelledby="leads">
        <div className="wrap">
          <h2 id="leads" className="sr-only">
            Coordinators
          </h2>
          <div className="coord-group">
            <h3 className="coord-group__title">Faculty coordinators</h3>
            <div className="coord-grid">
              {coordinators.faculty.map((c) => (
                <PersonButton
                  key={c.name}
                  person={personByName[c.name]}
                  detail="Department of IT"
                  onOpen={setPerson}
                />
              ))}
            </div>
          </div>
          <div className="coord-group">
            <h3 className="coord-group__title">Student coordinators</h3>
            <div className="coord-grid">
              {coordinators.students.map((c) => {
                const p = personByName[c.name];
                return (
                  <PersonButton
                    key={c.name}
                    person={p}
                    detail={p.teams.length ? `Also in ${p.teams.join(", ")}` : c.role}
                    onOpen={setPerson}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="members">
        <div className="wrap">
          <div className="section__head">
            <h2 id="members" className="section__title">
              Members
            </h2>
          </div>

          <div className="toolbar">
            <label className="search">
              <span className="sr-only">Search members by name</span>
              <SearchIcon />
              <input
                type="search"
                value={q}
                placeholder="Search by name"
                onChange={(e) => setQ(e.target.value)}
              />
            </label>
            <div className="segmented" role="group" aria-label="Group members">
              <button type="button" aria-pressed={view === "teams"} onClick={() => setView("teams")}>
                By team
              </button>
              <button type="button" aria-pressed={view === "all"} onClick={() => setView("all")}>
                A to Z
              </button>
            </div>
          </div>

          {view === "teams" ? (
            <div className="team-list">
              {visibleTeams.map((t) => (
                <section key={t.id} id={`team-${t.id}`} aria-labelledby={`t-${t.id}`}>
                  <div className="team__head">
                    <h3 id={`t-${t.id}`} className="team__name">
                      {t.name}
                    </h3>
                    <span className="team__count">
                      {t.members.length} {t.members.length === 1 ? "member" : "members"}
                    </span>
                  </div>
                  <p className="team__about">{t.about}</p>
                  <ul className="team__members">
                    {t.shown.map((name) => (
                      <li key={name}>
                        <PersonButton
                          person={personByName[name]}
                          onOpen={setPerson}
                          highlight={hl}
                          detail={
                            personByName[name].teams.length > 1
                              ? `Also in ${personByName[name].teams.filter((x) => x !== t.name).join(", ")}`
                              : null
                          }
                        />
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          ) : (
            <ul className="directory">
              {visiblePeople.map((p) => (
                <li key={p.id}>
                  <PersonButton
                    person={p}
                    onOpen={setPerson}
                    highlight={hl}
                    detail={[...p.roles, ...p.teams].join(", ")}
                  />
                </li>
              ))}
            </ul>
          )}

          {visiblePeople.length === 0 && (
            <p className="empty">
              Nobody matches “{q}”. Check the spelling or{" "}
              <button type="button" className="notice__toggle" style={{ marginTop: 0 }} onClick={() => setQ("")}>
                clear the search
              </button>
              .
            </p>
          )}
        </div>
      </section>

      <PersonDialog person={person} onClose={() => setPerson(null)} />
    </>
  );
}

