import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Programmes from "./pages/Programmes";
import People from "./pages/People";
import About from "./pages/About";
import Join from "./pages/Join";
import NotFound from "./pages/NotFound";
import EventWorld, { LiveRedirect } from "./events/EventWorld";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Event worlds live outside the main layout */}
        <Route path="/e/:slug" element={<EventWorld />} />
        <Route path="/live" element={<LiveRedirect />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="projects" element={<Projects />} />
          <Route path="programmes" element={<Programmes />} />
          <Route path="people" element={<People />} />
          <Route path="about" element={<About />} />
          <Route path="join" element={<Join />} />

          {/* older addresses */}
          <Route path="announcements" element={<Navigate to="/events" replace />} />
          <Route path="showcase" element={<Navigate to="/projects#showcase" replace />} />
          <Route path="team" element={<Navigate to="/people" replace />} />
          <Route path="programs" element={<Navigate to="/programmes" replace />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
