// Editorial profile cards for the People page.
import { useState } from "react";
import { elementFor, initials } from "../lib/format";

export function LeaderCard({ person, onOpen }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <article className="leader" data-el={elementFor(person.name)} data-flipped={flipped}>
      <button
        type="button"
        className="leader__flip"
        aria-label={`${flipped ? "Show portrait of" : "Flip profile for"} ${person.name}`}
        aria-pressed={flipped}
        onClick={() => setFlipped((current) => !current)}
      >
        <span className="flip__inner">
          <span className="flip__face flip__front">
            {person.photo ? (
              <img src={person.photo} alt="" loading="lazy" />
            ) : (
              <span className="leader__initials">{initials(person.name)}</span>
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
      </button>
      <button type="button" className="leader__cap" onClick={() => onOpen(person)}>
        <span className="leader__name">{person.name}</span>
        <span className="leader__role">{person.role}</span>
      </button>
    </article>
  );
}

export function Portrait({ person, onOpen }) {
  return (
    <li>
      <LeaderCard person={person} onOpen={onOpen} />
    </li>
  );
}
