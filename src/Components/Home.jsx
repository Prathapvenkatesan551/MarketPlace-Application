import React, { useState, useEffect } from 'react';
import './Home.css';
import MarketCards from './MarketCards';

const images = [
  'Diwali.jpg',
  'Blacksale.jpg',
  'Banner-1.jpg'
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 15000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='home'>
      <img src={images[currentImage]} alt={`Slide ${currentImage}`} className='banner-1' />
      <div className='scaleCont'>
        <h1>Buy Your New Products Here !</h1>
        <div className='scaleItems'>
      <MarketCards/>
      <MarketCards/>
      <MarketCards/>
      <MarketCards/>
      </div>
        </div>
        <div className='scaleCont'>
        <h1>Buy Your Renewed Products Here !</h1>
        <div className='scaleItems'>
      <MarketCards/>
      <MarketCards/>
      <MarketCards/>
      <MarketCards/>
      </div>
        </div>
    </div>
  );
}

export default Home;
