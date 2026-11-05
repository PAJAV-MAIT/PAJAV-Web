import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found wrap">
      <h1>Lost in Aakash</h1>
      <p>There's no page at this address. It may have moved when the site was rebuilt.</p>
      <div className="hero__actions">
        <Link className="btn btn--primary" to="/">
          Go to the home page
        </Link>
        <Link className="btn" to="/events">
          See events
        </Link>
      </div>
    </section>
  );
}
