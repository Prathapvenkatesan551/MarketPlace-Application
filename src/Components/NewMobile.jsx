import React from "react";
import "./NewMobile.css";
import { useState ,useEffect} from "react";
import { GetNewMobiles } from "../BackendService/AccountService";

export const MobileCard = ({ onViewDetails ,mobileName}) => {
  return (
    <div className="MCard">
      <img src="iphone.jpg" alt="iPhone" className="mobileImage" />
      <div>
        <h3>{mobileName}</h3>
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

  const [getNewMobiles,setNewMobiles]=useState([]);
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
      {getNewMobiles.map((mobiles, index) => (
        <MobileCard key={index} onViewDetails={handleViewDetails}
        mobileName={mobiles.mobileName}
        
        />

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
