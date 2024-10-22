import React from 'react'
import './MarketCards.css'
import PropTypes from 'prop-types'
import { currentAccount } from './Login'
import { Navigate, useNavigate } from 'react-router-dom'
const MarketCards = (props) => {
    const navigate=useNavigate();
    const handleClick = () => {
        if (props.product) {
          navigate(props.product);  // Navigate to the provided product path
        }
      };
  return (
    <div className='marketCard' onClick={handleClick}>
      <img src={props.imageSrc} alt=""  className='car'/>
      <label htmlFor="" className='carLable'>{props.label_1}</label>
      <label htmlFor="" className='offerLabel'>{props.label_2}</label>
    </div>
  )
}
export const NewProducts=()=>{
    let newProducts=[
        {
            label_1:"Mobiles for scale",
            label_2:"20% offer for new buyer",
            imageSrc:"mobile.png",
            product:"/NewMobiles"
        },
        {
            label_1:"Laptop for scale",
            label_2:"10% offer for new buyer",
            imageSrc:"laptop.jpg",
             product:"/NewLaptops"
        },
        {
            label_1:"Books for scale",
            label_2:"50% offer for new buyer",
            imageSrc:"books.jpg",
             product:"/NewBooks"
        },
        {
            label_1:"Furnitures for scale",
            label_2:"20% offer for new buyer",
            imageSrc:"furnitures.jpg",
             product:"/NewFurnitures"
        }
    ];
    return(
        <div className="newProducts"> 
            {newProducts.map((product, index) => (
                <MarketCards
                    key={index}
                    label_1={product.label_1}
                    label_2={product.label_2}
                    imageSrc={product.imageSrc}
                    product={product.product}
                />
            ))}
        </div>
    )
}
export const RenewedProducts=()=>{
    let newProducts=[
        {
            label_1:"Renewed Mobiles for scale",
            label_2:"Cost Reduced",
            imageSrc:"usedMobiles.jpg"
        },
        {
            label_1:"Renewed Laptop for scale",
            label_2:"Cost Reduced",
            imageSrc:"usedLaptops.jpg"
        },
        {
            label_1:"Used Books for scale",
            label_2:"Cost Reduced",
            imageSrc:"usedBooks.jpg"
        },
        {
            label_1:"Renewed Furnitures for scale",
            label_2:"Cost Reduced",
            imageSrc:"usedFurnitures.jpg"
        }
    ];
    return(
        <div className="renewedProducts"> 
            {newProducts.map((product, index) => (
                <MarketCards
                    key={index}
                    label_1={product.label_1}
                    label_2={product.label_2}
                    imageSrc={product.imageSrc}
                />
            ))}
        </div>
    )
}
export default MarketCards
