

export const fetchApi= async(query,limit)=>{
  // const query='chicken';
  // const limit =10;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=${limit}&`;
  console.log(url);
  try{
     await fetch(url)
    .then(response =>{
      if(response.ok){
        const jsonResponse = response.json();
      
        return jsonResponse;
      }
      else{
        throw new Error('Could not fetch');
      }
    }).then(data=>{ const receipes = data.hits;
      console.log(receipes);
    })
  }
  catch(e){
    console.log(e);
  }
}