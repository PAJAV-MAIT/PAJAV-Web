import Dialog from "./Dialog";
import { elementFor, initials } from "../lib/format";

const LINKS = [
  ["linkedin", "LinkedIn"],
  ["github", "GitHub"],
  ["instagram", "Instagram"],
];

export function Avatar({ person }) {
  return (
    <span className="avatar" data-el={elementFor(person.name)} aria-hidden="true">
      {person.photo ? <img src={person.photo} alt="" /> : initials(person.name)}
    </span>
  );
}

export default function PersonDialog({ person, onClose }) {
  const links = person ? LINKS.filter(([k]) => person[k]) : [];
  return (
    <Dialog open={!!person} onClose={onClose} label={person?.name || "Member"}>
      {person && (
        <>
          <div className="profile__top">
            <Avatar person={person} />
            <div>
              <h2 className="profile__name">{person.name}</h2>
              <p className="profile__role">{[person.role, person.team, person.year].filter(Boolean).join(", ")}</p>
            </div>
          </div>
          {(person.bio || links.length > 0) && (
            <div className="profile__more">
              {person.bio && <p>{person.bio}</p>}
              {links.length > 0 && (
                <div className="profile__links">
                  {links.map(([k, label]) => (
                    <a key={k} href={person[k]} target="_blank" rel="noreferrer">
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </Dialog>
  );
}
