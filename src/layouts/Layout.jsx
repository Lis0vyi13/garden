import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
