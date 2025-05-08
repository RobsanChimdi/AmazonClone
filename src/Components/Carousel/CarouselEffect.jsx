import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Required CSS
import img from "./img/data"; // Now importing default export
import  "./Carousel.css"
const CarouselEffect = () => {
  return (
    <div >
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}  // Fixed typo (was showIndicator)
        showThumbs={false}
      >
        {img.map((imageItem, index) => (
          <div key={index}>
            <img 
              src={imageItem} 
              alt={`Slide ${index + 1}`}  // Added alt for accessibility
            />
          </div>
        ))}
      </Carousel>
      <div className='hero_img'/>
    </div>
  );
};

export default CarouselEffect;