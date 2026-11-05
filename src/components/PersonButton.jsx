import Avatar from "./Avatar";

export default function PersonButton({ person, detail, onOpen, highlight }) {
  return (
    <button type="button" className="person" onClick={() => onOpen(person)}>
      <Avatar person={person} />
      <span>
        <span className="person__name">{highlight ? highlight(person.name) : person.name}</span>
        {detail && <span className="person__role">{detail}</span>}
      </span>
    </button>
  );
}
