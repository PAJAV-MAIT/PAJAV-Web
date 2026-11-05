// Renders /e/<folder> — an event's own world, outside the main site's layout.
// Visible when the event is the live one, or with ?preview in the URL
// (handy while building it: /e/hackathon-2026?preview).
import { lazy, Suspense, useEffect, useMemo } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { events, getLiveEvent } from "./registry";

export default function EventWorld() {
  const { slug } = useParams();
  const { search } = useLocation();
  const ev = events[slug];
  const live = getLiveEvent();
  const preview = new URLSearchParams(search).has("preview");
  const allowed = ev && ev.loadPage && (preview || live?.slug === slug);

  const Page = useMemo(() => (allowed ? lazy(ev.loadPage) : null), [allowed, ev]);

  useEffect(() => {
    if (!allowed) return;
    document.title = ev.title;
    document.body.dataset.world = slug;
    window.scrollTo(0, 0);
    return () => {
      delete document.body.dataset.world;
    };
  }, [allowed, ev, slug]);

  if (!allowed) return <Navigate to="/" replace />;

  return (
    <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
      <Page event={ev} />
      {preview && live?.slug !== slug && (
        <div className="preview-badge" role="status">
          Preview — not live on the main site
        </div>
      )}
    </Suspense>
  );
}

// /live → the current event's world (or its external site), else home.
export function LiveRedirect() {
  const live = getLiveEvent();
  useEffect(() => {
    if (live?.externalUrl) window.location.replace(live.externalUrl);
  }, [live]);
  if (!live) return <Navigate to="/" replace />;
  if (live.externalUrl) return null;
  return <Navigate to={`/e/${live.slug}`} replace />;
}
