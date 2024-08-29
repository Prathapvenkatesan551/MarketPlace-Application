import React, { useState } from "react";
import './NewLap.css'

export const LapCard = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleViewDetailsClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="LapCard">
      <img src="" alt="Laptop" className="lapImage"/>
      <div>
        <p>Lap Model</p>
        <p>Windows 10</p>
        <p>Gen</p>
        <p>Price</p>
      </div>
      <div className="lapButtons">
        <button className="ATC">Add to Cart</button>
        <button className="VD" onClick={handleViewDetailsClick}>View Details</button>
      </div>

      
      {showPopup && (
        <div className="popupOverlay">
          <div className="popupContent">
            <h2>Lap Model Details</h2>
            <p>Operating System: Windows 10</p>
            <p>Generation: Gen</p>
            <p>Price: Price</p>
            <p>Additional Details...</p>
            <button onClick={handleClosePopup} className="closePopupButton">Close</button>
          </div>
        </div>
      )}
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

