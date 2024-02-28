/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <picture className="containerLogo">
        <img
          className="logo"
          src="https://i.postimg.cc/WzG4Bx0F/Whats-App-Image-2024-02-27-at-9-36-24-AM.jpg"
          alt=""
        />
      </picture>
      <ul>
        <li className={pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={pathname === "/create-country" ? "active" : ""}>
          <Link to="/create-country">Create Country</Link>
        </li>
        <li className={pathname === "/manage-country" ? "active" : ""}>
          <Link to="/manage-country">Manage Country</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
