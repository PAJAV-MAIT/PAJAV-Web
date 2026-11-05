import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TITLES = {
  "/": "PAJAV — Build. Learn. Compete. | IT Society, MAIT",
  "/events": "Events — PAJAV",
  "/projects": "Projects — PAJAV",
  "/programmes": "Programmes — PAJAV",
  "/people": "People — PAJAV",
  "/about": "About — PAJAV",
  "/join": "Join — PAJAV",
};

// Scroll to top on navigation (or to #hash when present) and set the title.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    document.title = TITLES[pathname] || "Page not found — PAJAV";
    if (hash) {
      // wait a frame so the page has rendered
      requestAnimationFrame(() => {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo(0, 0);
        }
      });
      return;
    }
    // When on a page/route without hash (e.g. returning to landing page), scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, hash]);

  // Handle browser back/forward buttons when hash or history pop occurs
  useEffect(() => {
    const handlePopState = () => {
      const currentHash = window.location.hash;
      if (!currentHash) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(decodeURIComponent(currentHash.slice(1)));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  return null;
}
