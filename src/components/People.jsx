// People components.
//   LeaderCard — ABC leader card: rounded, name over the image; flips on hover.
// Without photos the front shows initials and the back shows the role in
// handwriting, so the flip still works before photos arrive.
import { elementFor, initials } from "../lib/format";

function Flip({ person }) {
  return (
    <span className="flip" aria-hidden="true">
      <span className="flip__inner">
        <span className="flip__face flip__front">
          {person.photo ? (
            <img src={person.photo} alt="" loading="lazy" />
          ) : (
            <span className="flip__initials">{initials(person.name)}</span>
          )}
        </span>
        <span className="flip__face flip__back">
          {person.photo2 ? (
            <img src={person.photo2} alt="" loading="lazy" />
          ) : (
            <span className="flip__note">{person.funFact || person.role}</span>
          )}
        </span>
      </span>
    </span>
  );
}

export function LeaderCard({ person, onOpen }) {
  return (
    <button type="button" className="leader" data-el={elementFor(person.name)} onClick={() => onOpen(person)}>
      <Flip person={person} />
      <span className="leader__cap">
        <span className="leader__name">{person.name}</span>
        <span className="leader__role">{person.role}</span>
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
