import { elementFor, initials } from "../lib/format";

export default function Avatar({ person }) {
  return (
    <span className="avatar" data-el={elementFor(person.name)} aria-hidden="true">
      {person.photo ? <img src={person.photo} alt="" loading="lazy" /> : initials(person.name)}
    </span>
  );
}
