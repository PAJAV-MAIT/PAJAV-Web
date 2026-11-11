// Editorial profile cards for the People page.
import { elementFor, initials } from "../lib/format";

export function LeaderCard({ person, onOpen }) {
  return (
    <button
      type="button"
      className="leader"
      data-el={elementFor(person.name)}
      onClick={() => onOpen(person)}
      aria-label={`View ${person.name}, ${person.role}`}
    >
      <span className="leader__portrait" aria-hidden="true">
        {person.photo ? (
          <img src={person.photo} alt="" loading="lazy" />
        ) : (
          <span className="leader__initials">{initials(person.name)}</span>
        )}
      </span>
      <span className="leader__cap">
        <span className="leader__name">{person.name}</span>
        <span className="leader__role">{person.role}</span>
        {(person.department || person.team || person.year) && (
          <span className="leader__meta">
            {[person.department || person.team, person.year].filter(Boolean).join(" · ")}
          </span>
        )}
      </span>
    </button>
  );
}

export function Portrait({ person, onOpen }) {
  return (
    <li>
      <LeaderCard person={person} onOpen={onOpen} />
    </li>
  );
}
