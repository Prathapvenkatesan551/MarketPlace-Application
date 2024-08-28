import React from "react";
import "./NewMobile.css";
import { useState } from "react";

export const MobileCard = ({ onViewDetails }) => {
  return (
    <div className="MCard">
      <img src="iphone.jpg" alt="iPhone" className="mobileImage" />
      <div>
        <h3>iPhone 15 (Purple Blue)</h3>
        <h4>15% offer - Rs 70,000</h4>
        <p>128GB RAM | 48 + 12 MP | 1 year warranty for in-box accessories</p>
      </div>
      <div className="cardButtons">
        <button className="ATC">Add to cart</button>
        <button className="VD" onClick={onViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
};
const NewMobile = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleViewDetails = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="NewMobiles">
      {[...Array(16)].map((_, index) => (
        <MobileCard key={index} onViewDetails={handleViewDetails} />
      ))}
      {isPopupOpen && (
        <div className="popupOverlay">
          <div className="popupContent">
            <h2>iPhone 15 (Purple Blue)</h2>
            <p>Detailed information about the iPhone 15...</p>
            <button className="BookButton">Book now</button>
            <button className="closeButton" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewMobile;
