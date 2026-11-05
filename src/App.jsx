import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Announcements from "./pages/Announcements";
import Projects from "./pages/Projects";
import Showcase from "./pages/Showcase";
import People from "./pages/People";
import About from "./pages/About";
import Join from "./pages/Join";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="projects" element={<Projects />} />
          <Route path="showcase" element={<Showcase />} />
          <Route path="people" element={<People />} />
          {/* old URL from the first version of the site */}
          <Route path="team" element={<People />} />
          <Route path="about" element={<About />} />
          <Route path="join" element={<Join />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
