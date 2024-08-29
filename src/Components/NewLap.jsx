import React from "react";
import './NewLap.css'
const LapCard = () => {
  return (
    <div className="LapCard">
      <img src="" alt="" className="lapImage"/>
      <div>
        <p>lap model</p>
        <p>Windows 10</p>
        <p>gen</p>
        <p>price</p>
      </div>
      <div className="lapButtons">
        <button className="ATC">Add to Cart</button>
        <button className="VD">View Details</button>
      </div>
    </div>
  );
};
const NewLap = () => {
  return (
    <div className="NewLapCont">
      <LapCard />
      <LapCard />
      <LapCard />
      <LapCard />
      <LapCard />
    </div>
  );
};

export default NewLap;
