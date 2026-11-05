// People components.
//   PersonCard — Interactive 3D flip card. Hovering or tapping/clicking flips
//                the entire card to reveal member details, bio/fun facts,
//                and social links.
//   Portrait   — Grid item wrapper for PersonCard.
//   LeaderCard — Card wrapper for leadership on Home page.
import { useState } from "react";
import { elementFor, initials } from "../lib/format";
import { SocialIcon } from "./Icons";

export function PersonCard({ person, onOpen }) {
  const [flipped, setFlipped] = useState(false);
  const element = elementFor(person.name);

  const toggleFlip = (e) => {
    // Prevent flip if clicking directly on a link or modal button
    if (e.target.closest("a") || e.target.closest(".person-card__modal-btn")) return;
    setFlipped((f) => !f);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((f) => !f);
    }
  };

  const hasLinks = person.linkedin || person.github || person.instagram;

  return (
    <div
      className={`person-card ${flipped ? "is-flipped" : ""}`}
      data-el={element}
      onClick={toggleFlip}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      aria-label={`${person.name}, ${person.role}. Click to flip card.`}
    >
      <div className="person-card__inner">
        {/* FRONT FACE */}
        <div className="person-card__face person-card__front">
          <div className="person-card__visual">
            {person.photo ? (
              <img src={person.photo} alt={person.name} loading="lazy" />
            ) : (
              <span className="person-card__initials">{initials(person.name)}</span>
            )}
            <span className="person-card__tag" data-el={element}>
              {element}
            </span>
          </div>

          <div className="person-card__cap">
            <div>
              <h3 className="person-card__name">{person.name}</h3>
              <p className="person-card__role">{person.role}</p>
            </div>
            <div className="person-card__hint">
              <span className="person-card__hint-icon" aria-hidden="true">
                ↻
              </span>
              <span>Flip for details</span>
            </div>
          </div>
        </div>

        {/* BACK FACE */}
        <div className="person-card__face person-card__back">
          <div className="person-card__back-top">
            <span className="person-card__tag" data-el={element}>
              {element}
            </span>
            <h4 className="person-card__back-name">{person.name}</h4>
            <p className="person-card__back-role">{person.role}</p>
          </div>

          <div className="person-card__back-content">
            {person.bio ? (
              <p className="person-card__bio">{person.bio}</p>
            ) : person.funFact ? (
              <div className="person-card__fact-box">
                <span className="person-card__fact-label">Fun Fact</span>
                <p className="person-card__fact-text">“{person.funFact}”</p>
              </div>
            ) : (
              <div className="person-card__note">
                <p>
                  {person.team
                    ? `${person.team} Team contributor at Society PAJAV.`
                    : person.role.includes("Convenor") || person.role.includes("Head")
                    ? "Guiding Society PAJAV and mentoring students in Department of Information Technology, MAIT."
                    : "Leading student initiatives, competitions, and technical workshops across MAIT."}
                </p>
                <span className="person-card__dept">IT Department · MAIT</span>
              </div>
            )}

            {person.year && <p className="person-card__year">{person.year}</p>}

            {hasLinks && (
              <div className="person-card__socials" onClick={(e) => e.stopPropagation()}>
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="person-card__social-link"
                  >
                    <SocialIcon name="linkedin" />
                  </a>
                )}
                {person.github && (
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="person-card__social-link"
                  >
                    <SocialIcon name="github" />
                  </a>
                )}
                {person.instagram && (
                  <a
                    href={person.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="person-card__social-link"
                  >
                    <SocialIcon name="instagram" />
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="person-card__back-foot">
            {onOpen && (person.bio || hasLinks) && (
              <button
                type="button"
                className="person-card__modal-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpen(person);
                }}
              >
                Full Profile
              </button>
            )}
            <span className="person-card__flip-back">
              <span aria-hidden="true">⟲</span> Tap or click to flip back
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Portrait({ person, onOpen }) {
  return (
    <li className="person-grid-item">
      <PersonCard person={person} onOpen={onOpen} />
    </li>
  );
}

export function LeaderCard({ person, onOpen }) {
  return <PersonCard person={person} onOpen={onOpen} />;
}
