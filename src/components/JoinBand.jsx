import { Link } from "react-router-dom";
import { site } from "../data/site";
import { ExternalIcon } from "./Icons";

export default function JoinBand() {
  return (
    <div className="wrap join-band">
      <h2>Small actions, big impact. Bring yours.</h2>
      <div>
        <p>
          Coders, designers, writers, organisers — every team takes newcomers. Fill in the form and
          pick where you want to start.
        </p>
        <div className="hero__actions">
          <a className="btn btn--bright" href={site.joinForm} target="_blank" rel="noreferrer">
            Fill the membership form <ExternalIcon />
          </a>
          <Link className="btn btn--on-night" to="/join">
            How joining works
          </Link>
        </div>
      </div>
    </div>
  );
}
