import { NavLink, Link } from "react-router-dom";

import Burger from "./Burger";

import { navLinks } from "../constants";

import logo from "/logo.svg";
import basket from "/basket.svg";

const Navbar = () => {
  const underlineStyles =
    "after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:bg-green after:transition-all after:duration-300";

  const menu = navLinks.map((link, i) => {
    return (
      <li
        className={`relative hover:after:w-full ${underlineStyles} after:w-0`}
        key={i}
      >
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${underlineStyles} font-bold text-green sm:text-black sm:after:w-full`
              : null
          }
          to={link.href}
        >
          {link.name}
        </NavLink>
      </li>
    );
  });

  return (
    <header className="header sticky bg-white z-10 top-0 border-b-[1px] border-divider">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="garden logo" />
            </Link>
          </div>

          <nav className="menu hidden sm:block">
            <ul className="menu-list flex gap-8">{menu}</ul>
          </nav>

          <div className="basket flex gap-2 xs:gap-4 items-center cursor-pointer">
            <img
              className="scale-[.8] xs:scale-100"
              src={basket}
              alt="basket"
            />
            <Burger
              list={menu}
              menuColor="bg-white border"
              menuPosition="mt-10 -mr-2"
              color="bg-black"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
