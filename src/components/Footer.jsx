import { Link } from "react-router-dom";
import { site } from "../data/site";
import { navItems } from "./Navbar";

const SOCIAL_LABELS = {
  instagram: "Instagram",
  linkedin: "LinkedIn",
  facebook: "Facebook",
  github: "GitHub",
};

export default function Footer() {
  const social = Object.entries(site.social).filter(([, href]) => href);

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/logo-160.webp" alt="" width="64" height="64" loading="lazy" />
            <div>
              <strong>{site.name}</strong>
              <p>
                {site.tagline}. Prithvi, Agni, Jal, Aakash and Vaayu — the five elements we work
                to protect.
              </p>
            </div>
          </div>

          <div>
            <h2>Explore</h2>
            <ul>
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/join">Join PAJAV</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>Contact</h2>
            <ul>
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
              )}
              {social.map(([key, href]) => (
                <li key={key}>
                  <a href={href} target="_blank" rel="noreferrer">
                    {SOCIAL_LABELS[key] || key}
                  </a>
                </li>
              ))}
              <li>
                <a href={site.departmentSite} target="_blank" rel="noreferrer">
                  IT Department, MAIT
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__mait">
            <img src="/mait.webp" alt="MAIT logo" width="48" height="40" loading="lazy" />
            <span>
              {site.affiliation}, {site.institute}, {site.address}
            </span>
          </div>
          <span>© {new Date().getFullYear()} Society PAJAV</span>
        </div>
      </div>
    </footer>
  );
}
