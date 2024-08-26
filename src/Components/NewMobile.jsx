import React from 'react'
import './NewMobile.css';


export const MobileCard=()=>{
  return(
    <div className='MCard'>
      <img src="iphone.jpg" alt="Not yet Fixed" className='mobileImage'/>
      <div>
       <h3>iphone-15 (Purple blue)</h3>
        <h4>15% offer - Rs 70,000</h4>
        <p>128GB ram | 48 + 12 Mp |1 year warranty for In-box accessories </p>

      </div>
      <div className='cardButtons'>
        <button className='ATC'>Add to cart</button>
        <button className='VD'>View Details</button>
      </div>
    </div>
  )
}
const NewMobile = () => {
  return (
    <div className='NewMobiles'>
      <MobileCard/>
      <MobileCard/>
      <MobileCard/>
      <MobileCard/>
      <MobileCard/>
      <MobileCard/>
      <MobileCard/>
      <MobileCard/>
      <MobileCard/>
      <MobileCard/>
      <MobileCard/>
      <MobileCard/>
      <MobileCard/>
      <MobileCard/>
      <MobileCard/>
    </div>
  )
}

export default NewMobile
