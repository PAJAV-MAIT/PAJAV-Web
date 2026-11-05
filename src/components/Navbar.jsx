import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CloseIcon, MenuIcon } from "./Icons";

export const navItems = [
  { to: "/announcements", label: "Noticeboard" },
  { to: "/projects", label: "Projects" },
  { to: "/showcase", label: "Showcase" },
  { to: "/people", label: "People" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes or Esc is pressed.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap site-header__bar">
        <Link to="/" className="brand" aria-label="PAJAV home">
          <img src="/logo-160.webp" alt="" width="44" height="44" />
          <span className="brand__name">
            PAJAV
            <span className="brand__sub">IT Society, MAIT</span>
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
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/join" className="btn btn--solid">
            Join PAJAV
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
