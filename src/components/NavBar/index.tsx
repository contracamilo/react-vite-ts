import { useState, FC } from "react";
import { NavLink } from "react-router-dom";
import { useViewport } from "../../hooks/useViewport";
import classNames from "classnames";
import "./navbar.scss";
import HamburgerMenuButton from "./ham-menu";
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon: FC = () => {
  return <FaShoppingCart />;
};


const navLinksLeft = [
  { to: "/", text: "All" },
  { to: "/clothes", text: "Clothes" },
  { to: "/electronics", text: "Electronics" },
  { to: "/furniture", text: "Furniture" },
  { to: "/toys", text: "Toys" },
  { to: "/others", text: "Others" },
];

const navLinksRight = [
  { to: "/orders", text: "My orders" },
  { to: "/account", text: "My account" },
  { to: "/login", text: "Sign in" },
];

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { isMobile, isDesktop } = useViewport();
  const activeStyle = "underline";

  const showMenu = (value: boolean) => {
    setShowMobileMenu(value);
  };

  const displayClass = showMobileMenu ? "mobile-navbar--active" : "";

  return (
    <>
      {isMobile && <HamburgerMenuButton onClick={showMenu} />}

      <div
        className={classNames(`navbar ${displayClass}`, {
          "mobile-navbar": isMobile,
        })}
      >
        <nav
          className={classNames({
            "flex justify-between": isDesktop,
          })}
        >
          <ul
            className={classNames({
              "flex justify-around navbar-list items-center": isDesktop,
            })}
          >
            <li className="navbar-brand">
              <NavLink to="/">Shopii</NavLink>
            </li>

            {navLinksLeft.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? activeStyle : "undefined"
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul
            className={classNames({
              "flex justify-around navbar-list items-center": isDesktop,
            })}
          >
            {isDesktop && (<li className="">jose@platzi.com</li>)}

            {navLinksRight.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? activeStyle : "undefined"
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}

            <li className="navbar-cart"><CartIcon /> {"(0)"}</li>
          </ul>
        </nav>
      </div>
    </>
  )
};

export default NavBar;
