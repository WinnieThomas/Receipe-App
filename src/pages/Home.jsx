import React from 'react'
import Banner from '../components/Banner';
import Receipe from '../components/Receipe';


function Home() {
  return (
    <div className='text-red-400 text-3xl'>
      <Banner/>
      <Receipe/>
    </div>
  )
}

export default Home;

