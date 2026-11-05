import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TITLES = {
  "/": "PAJAV — IT Society, MAIT",
  "/announcements": "Noticeboard — PAJAV",
  "/projects": "Projects — PAJAV",
  "/showcase": "Showcase — PAJAV",
  "/people": "People — PAJAV",
  "/about": "About — PAJAV",
  "/join": "Join — PAJAV",
};

// Scroll to top on navigation (or to #hash when present) and set the title.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = TITLES[pathname] || "Page not found — PAJAV";
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
