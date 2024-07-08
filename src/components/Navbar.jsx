import React from 'react';
import Logo from '../images/ RecipeLogo.png';

const Navbar = () => {
  return (
    <div className='flex justify-center items-center bg-black'>
        <img src={Logo}  alt="Receipe Logo" className='w-20 h-30 '/>
        <h1 className='text-6xl bold text-red-700 font-serif'>Flavours Recipe App</h1>
      
    </div>
  )
}

export default Navbar
