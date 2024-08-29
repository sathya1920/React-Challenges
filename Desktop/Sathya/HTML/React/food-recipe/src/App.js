import './App.css';
import React, { useState } from 'react'
import Products from './Products';


function App() {
  const [search, setSearch] = useState('');
  const [data,setData] = useState([]);
  let YOUR_APP_KEY = "56b09823e04045b663443621d9014218";
  let YOUR_APP_ID = "ea8a35b4";
  let numberOfResults = 50;
  const submitHandler = (e)=>{
    e.preventDefault();
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&number=${numberOfResults}`)
    .then((res)=>res.json()
    ).then(
      (result) => setData(result.hits))

    
  }
  
  return (
    <>
    <div className='row'>
      <div className='col-md'>
      <center>
        <h1 className='text-success mt-5'>Food Recipe Using ReactJS</h1>
        <form onSubmit={submitHandler}>
          <input className='form-control w-25 mt-3' type='text' value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder='Seach food recipe here...' />
          <button className='btn btn-success mt-3' type='Submit'>Submit</button>
        </form>
        <Products data={data} />
      </center>
      </div>
    </div>
      </>
  );
}

export default App;
