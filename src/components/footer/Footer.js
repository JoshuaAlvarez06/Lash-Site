import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerSection section">
      <div className="footerContainer">
        <h3>Contact Me Here</h3>
        <ul className="socials">
          <li className="social">
            <a href="tel:562-850-3423">
              <i className="fas fa-phone-square"></i>
            </a>
          </li>
          <li className="social">
            <a
              href="https://www.instagram.com/lashempressla/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram-square"></i>
            </a>
          </li>
          <li className="social">
            <a href="mailto:lashempressla@gmail.com">
              <i className="fas fa-envelope-square"></i>
            </a>
          </li>
        </ul>
        <p>LASH EMPRESS LA</p>
      </div>
    </div>
  );
};

export default Footer;
