import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Contact from "./Contact";
import ScrollToTopButton from "./ScrollToTopButton";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-20">
        <main className="main">
          <Outlet />
        </main>
        <footer className="footer">
          <Contact />
        </footer>
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Layout;
