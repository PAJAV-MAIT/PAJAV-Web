// Small shared building blocks.
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFitText from "../lib/useFitText";
import { ArrowIcon } from "./Icons";
import { elementById } from "../data/elements";

// ABC-style "Learn more ●" link. Internal paths use the router.
export function More({ to, children, external }) {
  const inner = (
    <>
      {children}
      <span className="more__dot" aria-hidden="true">
        <ArrowIcon />
      </span>
    </>
  );
  if (external || /^https?:/.test(to)) {
    return (
      <a className="more" href={to} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link className="more" to={to}>
      {inner}
    </Link>
  );
}

// ABC small label with a rule
export function Label({ children }) {
  return <p className="label">{children}</p>;
}

// Coloured element tag
export function ElementTag({ id }) {
  const el = elementById[id];
  if (!el) return null;
  return (
    <span className="tag tag--el" data-el={el.id}>
      {el.name}
    </span>
  );
}

// UW giant page title with back navigation
export function PageTitle({ title, children, backTo = "/", backLabel = "Back to Home" }) {
  const ref = useRef(null);
  const navigate = useNavigate();
  useFitText(ref, ".fit-line");

  const handleBack = (e) => {
    e.preventDefault();
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate(backTo);
    }
  };

  return (
    <header className="page-title wrap">
      <Link to={backTo} onClick={handleBack} className="back-link" aria-label={backLabel}>
        <span aria-hidden="true">←</span> {backLabel}
      </Link>
      <h1 ref={ref}>
        <span className="fit-line">{title}</span>
      </h1>
      {children && <p>{children}</p>}
    </header>
  );
}

// Poster-style taped note
export function Note({ children, className = "" }) {
  return <p className={`note ${className}`}>{children}</p>;
}
