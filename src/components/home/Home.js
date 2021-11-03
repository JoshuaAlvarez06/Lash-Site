import React from "react";
import { infoDataOne } from "../../data/infoData";
import Hero from "../hero/Hero";
import InfoSection from "../infoSection/InfoSection";

const Home = () => {
  return (
    <div className="homeContainer section">
      <Hero />
      <InfoSection infoData={infoDataOne} />
    </div>
  );
};

export default Home;
