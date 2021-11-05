import React from "react";
import "./Prices.css";
import { priceDataOne } from "../../data/priceData";
import Card from "../Card";

const Prices = () => {
  return (
    <div className="pricesSection">
      <div className="pricesContainer">
        <h1>Prices</h1>
        <div className="prices">
          {priceDataOne.map((service) => {
            return <Card item={service} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Prices;
