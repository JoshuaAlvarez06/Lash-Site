import React from "react";
import "./InfoSection.css";
import { Link } from "react-router-dom";

const InfoSection = ({ infoData, noButton }) => {
  return (
    <div className="infoSection section">
      <div className="infoContainer">
        <div className="columnLeft">
          <h1>{infoData.title}</h1>
          <p>{infoData.description}</p>
          {!noButton && <Link to={infoData.link}>{infoData.buttonText}</Link>}
        </div>
        <div className="columnRight">
          <img src={infoData.image} alt={infoData.alt} />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
