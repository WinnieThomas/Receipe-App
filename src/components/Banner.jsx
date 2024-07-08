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
    <img src={images && images[Math.floor(Math.random() * images.length)]} alt="banner" className='w-full h-80 object-cover relative'/>
    <h2 className='text-red-800 text-2xl font-sans italic font-semibold absolute z-8 top-40'>Yummy and tasty receipes</h2>
      
    </div>
  )
}

export default Banner
