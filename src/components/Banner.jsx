import React from 'react';
import banner1 from '../images/banner1.jpeg';
import banner2 from '../images/banner2.jpeg';
import banner3 from '../images/banner3.jpeg';
import banner4 from '../images/banner4.webp';
import banner5 from '../images/banner5.webp';

const Banner = () => {
    const images = [banner1, banner2, banner3, banner4, banner5];
  return (
    <div>
        <div className="relative">
          <img src={images && images[Math.floor(Math.random() * images.length)]} alt="banner" className='w-full h-80 object-cover'/>
       </div>
         <h2 className='absolute z-8 top-40 left-1/3 text-red-700 text-5xl font-sans italic font-semibold mx-auto'>Yummy and tasty receipes</h2>
      
    </div>
  )
}

export default Banner
