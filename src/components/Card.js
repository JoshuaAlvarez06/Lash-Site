import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="imageContainer">
        <img className="cardImage" src={item.image} alt={item.title} />
      </div>
      <div className="cardContent">
        <h3 className="cardTitle">{item.title}</h3>
        <p>{`$${item.price}`}</p>
      </div>
    </div>
  );
};

export default Card;
