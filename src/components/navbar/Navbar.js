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
          <div className="dropdown">
            <Link className="dropbtn menuItem" to="/my-work">
              MY WORK
              <i className="fa fa-caret-down"></i>
            </Link>
            <div className="dropdown-content">
              <Link to="/my-work">WORK</Link>
              <Link to="/prices">PRICES</Link>
            </div>
          </div>
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
