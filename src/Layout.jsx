import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JoinBand from "./components/JoinBand";
import ScrollManager from "./components/ScrollManager";

export default function Layout() {
  const { pathname } = useLocation();
  const showJoin = pathname !== "/join";

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <div className="night">
        <div className="strip" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        {showJoin && <JoinBand />}
        <Footer />
      </div>
    </>
  );
}
