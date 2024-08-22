import React from 'react'
import './NavBar.css'
const NavBar = () => {
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
        <button className='imageButton'>
         <img src="user.png" alt="" className='userImage' />
        </button>
      </div>
    </nav>
  )
}

export default NavBar
