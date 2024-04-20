import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.35 }}
        className="footer"
      >
        <Contact />
      </motion.footer>
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
