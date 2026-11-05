import Avatar from "./Avatar";
import Dialog from "./Dialog";
import { teams } from "../data/team";

const LINKS = [
  ["linkedin", "LinkedIn"],
  ["github", "GitHub"],
  ["instagram", "Instagram"],
];

export default function PersonDialog({ person, onClose }) {
  const personTeams = person ? teams.filter((t) => person.teams.includes(t.name)) : [];
  const links = person ? LINKS.filter(([k]) => person[k]) : [];

  return (
    <Dialog open={!!person} onClose={onClose} label={person?.name || "Member"}>
      {person && (
        <>
          <div className="profile__top">
            <Avatar person={person} />
            <div>
              <h2 className="profile__name">{person.name}</h2>
              {(person.year || person.roles.length > 0) && (
                <p className="profile__year">{[person.roles.join(", "), person.year].filter(Boolean).join(", ")}</p>
              )}
            </div>
          </div>

          {person.bio && (
            <div className="profile__section">
              <p>{person.bio}</p>
            </div>
          )}

          {personTeams.length > 0 && (
            <div className="profile__section">
              <h3>{personTeams.length === 1 ? "Team" : `Teams (${personTeams.length})`}</h3>
              <ul className="profile__roles">
                {personTeams.map((t) => (
                  <li key={t.id}>{t.name}</li>
                ))}
              </ul>
            </div>
          )}

          {links.length > 0 && (
            <div className="profile__section">
              <h3>Find them on</h3>
              <div className="profile__links">
                {links.map(([k, label]) => (
                  <a key={k} href={person[k]} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </Dialog>
  );
}
