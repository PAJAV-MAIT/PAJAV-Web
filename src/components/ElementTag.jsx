import { elementById } from "../data/elements";

export default function ElementTag({ id }) {
  const el = elementById[id];
  if (!el) return null;
  return (
    <span className="el-tag" data-el={el.id}>
      {el.name}
      {el.id !== "tech" && <span className="sr-only"> ({el.english})</span>}
    </span>
  );
}
