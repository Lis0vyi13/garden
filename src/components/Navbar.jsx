import { NavLink } from "react-router-dom";

import { navLinks } from "../constants";

import logo from "/logo.svg";
import basket from "/basket.svg";

const Navbar = () => {
  const underlineStyles =
    "after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:bg-green after:transition-all after:duration-300";

  return (
    <header className="header sticky bg-white z-10 top-0 border-b-[1px] border-divider">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="garden logo" />
            </a>
          </div>

          <nav className="menu">
            <ul className="menu-list flex gap-8">
              {navLinks.map((link, i) => {
                return (
                  <li
                    className={`relative hover:after:w-full ${underlineStyles} after:w-0`}
                    key={i}
                  >
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? `${underlineStyles} after:w-full` : null
                      }
                      to={link.href}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="basket cursor-pointer">
            <img src={basket} alt="basket" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
