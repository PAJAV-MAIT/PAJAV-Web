import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CloseIcon, MenuIcon } from "./Icons";
import { entryHref, getLiveEvent } from "../events/registry";

export const navItems = [
  { to: "/events", label: "Events" },
  { to: "/projects", label: "Projects" },
  { to: "/programmes", label: "Programmes" },
  { to: "/people", label: "People" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const live = getLiveEvent();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const liveHref = live ? entryHref(live) : null;
  const liveLabel = live ? live.short || (live.phase === "live" ? "Live" : "Coming up") : "";

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="wrap site-header__bar">
        <Link to="/" className="brand" aria-label="PAJAV home">
          <img src="/logo-160.webp" alt="" width="46" height="46" />
          <span className="brand__name">
            PAJAV
            <span className="brand__sub">IT Department, MAIT</span>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav id="site-nav" className="nav" data-open={open} aria-label="Main">
          {live &&
            (liveHref.startsWith("/e/") ? (
              <Link className="nav__live" to={liveHref}>
                <span className="pulse" aria-hidden="true" /> {liveLabel}
              </Link>
            ) : (
              <a className="nav__live" href={liveHref}>
                <span className="pulse" aria-hidden="true" /> {liveLabel}
              </a>
            ))}
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/join" className="btn btn--primary">
            Join PAJAV
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
