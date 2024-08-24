import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleAccount = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <nav>
      <div className="NavLeft">
        <label>MarketPlace</label>
        <button>Explore</button>
      </div>
      <div className="NavRight">
        <button className="HC">Home</button>
        <button className="HC">Contact us</button>
        <button className="imageButton">
          <img src="cart.png" alt="Cart" className="cartImage" />
        </button>
        <button className="imageButton" id="Account" onClick={handleAccount}>
          <img src="user.png" alt="User" className="userImage" />
        </button>
      </div>
      <div className={showProfileMenu ? 'profileMenu active' : 'profileMenu'}>
        {showProfileMenu && <ProfileMenu />}
      </div>
    </nav>
  );
};

export const ProfileMenu = () => {
  return (
    <div className="profileMenuContent">
      <div className="part-1">
        <label>Account</label>
        <img src="user.png" alt="Profile" className="profileImage" />
        <label>Prathap Venkatesan</label>
        <label>prathap2venkatesan@gmail.com</label>
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
        <button>
          <img src="logout.png" alt="Log out" className="Image" />
          Log out
        </button>
      </div>
    </div>
  );
};

export default NavBar;
