// People components.
//   Portrait   — UW designers grid: square tile that flips on hover/focus to a
//                second photo (`photo2`), name in bold below.
//   LeaderCard — ABC leader card: rounded, name over the image; flips too.
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

export function Portrait({ person, onOpen }) {
  return (
    <li className="portrait">
      <button type="button" onClick={() => onOpen(person)} data-el={elementFor(person.name)}>
        <Flip person={person} />
        <span className="portrait__cap">
          <span className="portrait__name">{person.name}</span>
          <span className="portrait__role">{person.role}</span>
        </span>
      </button>
    </li>
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
