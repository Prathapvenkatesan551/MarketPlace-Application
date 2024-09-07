import React from "react";
import "./NewMobile.css";
import { useState, useEffect } from "react";
import { GetNewMobiles } from "../BackendService/AccountService";

export const MobileCard = ({ onViewDetails, mobile }) => {
  return (
    <div className="MCard">
      <img src="iphone.jpg" alt="iPhone" className="mobileImage" />
      <div>
        <h3>{mobile.mobileName}</h3>
        
        <h4>15% offer - Rs {mobile.cost}</h4>
        <p>
          {mobile.ram}GB RAM |{mobile.rom}GB ROM | 48 + 12 MP |{" "}
          {mobile.warranty} year warranty for in-box accessories
        </p>
      </div>
      <div className="cardButtons">
        <button className="ATC">Add to cart</button>
        <button className="VD" onClick={() => onViewDetails(mobile)}>
          View Details
        </button>
      </div>
    </div>
  );
};
const NewMobile = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMobile, setPopupMobile] = useState({});

  const handleViewDetails = (mobile) => {
    setIsPopupOpen(true);
    setPopupMobile(mobile);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const [getNewMobiles, setNewMobiles] = useState([]);
  useEffect(() => {
    GetNewMobiles()
      .then((response) => {
        setNewMobiles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="NewMobiles">
      {getNewMobiles.map((mobile, index) => (
        <MobileCard
          key={index}
          onViewDetails={handleViewDetails}
          mobile={mobile}
        />
      ))}
      {isPopupOpen && (
        <div className="popupOverlay">
          <div className="M-popupContent">
            <div className="FullImages">
            <img src="" alt="" className="popupImage"/>
            <button className="BookButton">Book now</button>
            <button className="closeButton" onClick={handleClosePopup}>
              Close
            </button>
            </div>
            <table className="dataTable">
              <h2>Specifications</h2>
              <tbody>
                <tr>
                  <td>Mobile Brand</td>
                  <td>{popupMobile.mobileName}</td>
                </tr>
                <tr>
                  <td>Colour</td>
                  <td>{popupMobile.mobileColour}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{popupMobile.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{popupMobile.rom}</td>
                </tr>
                <tr>
                  <td>Warranty Claimable</td>
                  <td>{popupMobile.warranty} Year</td>
                </tr>
                <tr>
                  <td>Service Warranty</td>
                  <td>{popupMobile.warranty} Year</td>
                </tr>
                <tr>
                  <td>Standard Cost</td>
                  <td> 50,000 Rs</td>
                </tr>
                <tr>
                  <td>Applied offer 15%</td>
                  <td> 42,500 Rs</td>
                </tr>
              </tbody>
            </table>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default NewMobile;
