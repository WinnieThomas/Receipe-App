import React, { useState } from 'react';
import ReceipeCard from './ReceipeCard';
import { fetchApi } from '../utils/FetchAPI';

function Receipe() {
    const [query,setQuery] = useState('Chicken');
    const [limit,setLimit] = useState(10);
    const [receipes,setReceipes] = useState([]);

    function handleInputChange(e){
        setQuery(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        const result = fetchApi(query,limit);
        setReceipes(result);
    }

    function handleShowMore(){
        setLimit(prev=>prev+10);
    }

  return (
    <div className='bg-black'>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Search with Ingredients...' onChange={handleInputChange} required='false' />
            <button type='submit'>Submit</button>
        </form>
        <div>
            {
                receipes.length > 0 &&
                (
                   <>
                   {receipes.map((item,index)=>{
                     return <ReceipeCard item={item} index={index}/>
                   })}
                   </>
                )
            }
        </div>
        <button onClick ={handleShowMore}>Show More</button>
    </div>
  )
}

export default Receipe