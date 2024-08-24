import React from 'react'
import './NavBar.css'
import { useState } from 'react';
const NavBar = () => {

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleAccount = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
   <nav>
      <div className='NavLeft'>
       <label htmlFor="">MarketPlace</label>
       <button>Explore </button>
      </div>
      <div className='NavRight'>
        <button className='HC'>Home</button>
        <button className='HC'>Contact us</button>
        <button className='imageButton'>
            <img src="cart.png" alt="" className='cartImage'/>
        </button>
        <button className='imageButton' id="Account" onClick={handleAccount}>
         <img src="user.png" alt="" className='userImage' />
        </button>
      </div>
      {showProfileMenu && <ProfileMenu/>}
    </nav>
  )
}
export const ProfileMenu=()=>{
  return(
    <div className='profileMenu'>
     <div className='part-1'>
      <label htmlFor="">Account</label>
      <img src="user.png" alt="" className='profileImage'/>
      <label htmlFor="">Prathap Venkatesan</label>
      <label htmlFor="">prathap2venkatesan@gmail.com</label>
     </div>
     <div className='part-2'>
      <button>
      <img src="settings.png" alt="" className='Image' />
        settings</button>
      <button>
      <img src="user.png" alt="" className='Image' />
        Account</button>
      <button>
      <img src="high-score.png" alt="" className='Image' />
        Market Score</button>
      <button>
      <img src="logout.png" alt="" className='Image' />
        Log out</button>
     </div>
    </div>
  )
}
export default NavBar
