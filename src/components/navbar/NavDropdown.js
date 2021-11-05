import React from "react";
import { Link } from "react-router-dom";
import "./NavDropdown.css";
import lashEmpressLogo from "../../images/lashEmpressLogo.png";

const NavDropdown = ({ navClickHandler }) => {
  return (
    <div className="dropdownContainer section" onClick={navClickHandler}>
      <i className="fas fa-times icon" onClick={navClickHandler}></i>
      <ul className="dropdownItems">
        <li className="dropdownItem">
          <Link to="/">HOME</Link>
        </li>
        <li className="dropdownItem">
          <Link to="/my-work">MY WORK</Link>
        </li>
        <li className="dropdownItem">
          <Link to="/prices">PRICES</Link>
        </li>
        <li className="dropdownItem">
          <Link to="/contact">CONTACT</Link>
        </li>
        <li className="dropdownItem">
          <Link to="/faq">FAQ</Link>
        </li>
        <Link to="/">
          <img src={lashEmpressLogo} alt="Lash Empress Logo" />
        </Link>
      </ul>
    </div>
  );
};

export default NavDropdown;
