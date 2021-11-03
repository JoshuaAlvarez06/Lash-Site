import React from "react";
import "./MyWork.css";
import { infoDataTwo } from "../../data/infoData";
import InfoSection from "../infoSection/InfoSection";

const MyWork = () => {
  return (
    <div className="myWorkSection section">
      <div className="myWorkContainer">
        {infoDataTwo.map((client, index) => {
          return (
            <div key={index} className="clientExample">
              {index === 0 && <h1 style={{ fontSize: "2.5rem" }}>My Work</h1>}
              <InfoSection infoData={client} noButton />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
