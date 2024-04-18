import { NavLink, Link } from "react-router-dom";

import Burger from "./Burger";

import { navLinks } from "../constants";

import logo from "/logo.svg";
import cart from "/cart.svg";
import { useCartQuantity } from "../hooks/useCartQuantity";

const Navbar = () => {
  const { quantity } = useCartQuantity();
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
    <header className="header sticky bg-white z-50 top-0 border-b-[1px] border-divider">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div className="logo">
            <Link to="/">
              <img
                onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                src={logo}
                alt="garden logo"
              />
            </Link>
          </div>

          <nav className="menu hidden sm:block">
            <ul className="menu-list flex gap-8">{menu}</ul>
          </nav>

          <div className="flex gap-2 xs:gap-4 items-center cursor-pointer">
            <Link to="shopping-cart" className="cart relative">
              <img className="scale-[.8] xs:scale-100" src={cart} alt="cart" />
              <div
                className={`added-products absolute ${
                  quantity > 0 ? "flex" : "hidden"
                } items-center justify-center text-[14px] p-4 top-2 left-0 w-7 h-7 rounded-full bg-green text-white`}
              >
                {quantity}
              </div>
            </Link>

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
