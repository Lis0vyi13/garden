import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact/Contact";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <Contact />
      </footer>
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
