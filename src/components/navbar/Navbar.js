import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ navClickHandler }) => {
  return (
    <div id="nav" className="navbarContainer section animated">
      <Link to="/" className="logo">
        <h1 className="logoText">LASH EMPRESS LA</h1>
      </Link>
      <div className="menuItemsContainer">
        <i className="fas fa-bars bars" onClick={navClickHandler}></i>
        <ul className="menuItems">
          <li className="menuItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="menuItem">
            <Link to="/my-work">MY WORK</Link>
          </li>
          <li className="menuItem">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="menuItem">
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
