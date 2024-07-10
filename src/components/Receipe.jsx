import axios from 'axios';
import React, { useState,useEffect} from 'react';
import Loading from './Loading';
import ReceipeCard from './ReceipeCard';

// import { fetchApi } from '../utils/FetchAPI';


function Receipe() {
    const [search,setSearch] = useState('');
    const [query,setQuery] = useState('Chicken');
    const [limit,setLimit] = useState(10);
    const [receipes,setReceipes] = useState([]);
    const [loading, setLoading] = useState(false)

    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=${limit}&`;

    useEffect(()=>{
        setLoading(true);
        const fetchData= async()=>{
        try{
          const response = await axios.get(url);
           const data = response.data;
           const returnData = data.hits;
           setReceipes(returnData);
           setLoading(false);
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    }
    fetchData();
    },[url]);

  
   console.log(receipes);
  
//    const arrayDataItems = returnData?.map(item => 
//     <ul>
//      <li key={item.id}>
//       <p>{item.label}</p>
//       <span>{item.cuisineType}</span>
//     </li>
//     </ul>
//   )

//   console.log(arrayDataItems);

    function handleInputChange(e){
        setSearch(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        setQuery(search);
        setSearch('');
       
    }

    function handleShowMore(){
        setLimit(prev=>prev+10);
    }

    if (loading) {
        return (
            <Loading />
        )
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Search with Ingredients...' onChange={handleInputChange} />
            <button type='submit'>Submit</button>
            {
                receipes?.length > 0 ? (
                    <>
                        <div className='w-full  flex flex-wrap gap-10 px-0 lg:px-10 py-10'>
                            {
                                receipes?.map((item, index) => (
                                    <ReceipeCard recipe={item} key={index} />))
                            }
                        </div>

                        <div className='flex w-full items-center justify-center py-10'>

                            
                          <button onClick={handleShowMore}>More</button>
                            
                        </div>
                    </>
                ) : <div className='text-white w-full items-center justify-center py-10'>
                    <p className='text-center'>No Recipe Found</p>
                </div>
            }
       </form>
    </div>
  )
}

export default Receipe