import React, { useState } from "react";
import "./NavBar.css";
import { currentAccount } from "./Login";
import { Navigate, useNavigate } from "react-router-dom";
const NavBar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showExploreMenu, setShowExploreMenu] = useState(false);

  const handleAccount = () => {
    setShowProfileMenu(!showProfileMenu);
  };
  const handleExplore = () => {
    setShowExploreMenu(!showExploreMenu);
  };

  return (
    <nav>
      <div className="NavLeft">
        <label>MarketPlace</label>
        <button onClick={handleExplore}>Explore</button>
      </div>
      <div className="NavRight">
        <button className="HC">Home</button>
        <button className="HC">Contact us</button>
        <button className="imageButton">
          <img src="cart.png" alt="Cart" className="cartImage" />
        </button>
        <button className="imageButton" id="Account" onClick={handleAccount}>
          <img src={currentAccount.Dp} alt="User" className="userImage" />
        </button>
      </div>
      <div className={showProfileMenu ? "profileMenu active" : "profileMenu"}>
        {showProfileMenu && <ProfileMenu />}
        
      </div>
      {showExploreMenu && <ExploreMenu />}
    </nav>
  );
};

export const ProfileMenu = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/Login");
    window.location.reload();
  };
  return (
    <div className="profileMenuContent">
      <div className="part-1">
        <label>Account</label>
        <img src={currentAccount.Dp} alt="Profile" className="profileImage" />
        <label>{currentAccount.accountName}</label>
        <label>{currentAccount.email}</label>
      </div>
      <div className="part-2">
        <button>
          <img src="settings.png" alt="Settings" className="Image" />
          Settings
        </button>
        <button>
          <img src="user.png" alt="Account" className="Image" />
          Account
        </button>
        <button>
          <img src="high-score.png" alt="Market Score" className="Image" />
          Market Score
        </button>
        <button onClick={handleLogout}>
          <img src="logout.png" alt="Log out" className="Image" />
          Log out
        </button>
      </div>
    </div>
  );
};

export const ExploreMenu = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/Login");
    window.location.reload();
  };
  return (
    <div className="ExploreMenuContent">
      
     <button>Sell Product</button>
     <button>Explore sellers review</button>
     <button>Top ratings</button>
    </div>
  );
};

export default NavBar;
