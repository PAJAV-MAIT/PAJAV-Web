import { Link } from "react-router-dom";
import { site } from "../data/site";
import { navItems } from "./Navbar";
import { SocialIcon } from "./Icons";

const LABELS = { instagram: "Instagram", linkedin: "LinkedIn", github: "GitHub", whatsapp: "WhatsApp" };

export default function Footer() {
  const social = Object.entries(site.social).filter(([, href]) => href);

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-card">
          <div className="footer-brand">
            <img src="/logo-160.webp" alt="" width="58" height="58" loading="lazy" />
            <div>
              <strong>{site.name}</strong>
              <p>
                {site.what}, {site.affiliation}, {site.instituteShort}. {site.motto}.
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
              <li>
                <Link to="/join">Join PAJAV</Link>
              </li>
              <li>
                <a href={site.departmentSite} target="_blank" rel="noreferrer">
                  IT Department, MAIT
                </a>
              </li>
            </ul>
          </div>

          {social.length > 0 && (
            <div>
              <h2>Follow</h2>
              <div className="socials">
                {social.map(([key, href]) => (
                  <a key={key} href={href} target="_blank" rel="noreferrer" aria-label={LABELS[key] || key}>
                    <SocialIcon name={key} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="footer-base">
          <span className="footer-base__mait">
            <img src="/mait.webp" alt="MAIT logo" width="42" height="35" loading="lazy" />
            {site.institute}, {site.address}
          </span>
          <span>© {new Date().getFullYear()} {site.fullName}</span>
        </div>
      </div>
    </footer>
  );
}
