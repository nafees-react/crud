import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

export default function Home() {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Kanpur");
  useEffect(() =>{
    const fetchAPI = async() =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=814b44c3d8169edf626a23975edad2f9`;
      if(search!='')
      {
        const response = await fetch(url);
        const result = await response.json();
        setCity(result.main);
      }else{

        setCity(null);

      }
    }
    fetchAPI();
  },[search])
  return (
    <div className="container">
  <h2>Live Weather React App</h2>
  <p>
    <input style={{width:'332px'}} 
    type="search"
    onChange={(event) => {
      setSearch(event.target.value);
    }} 
    placeholder="Enter City Name" 
    className="form-control" />
  </p>
  {!city ? (<p style={{color:'red'}}>No Data found..</p>) : 
  <>
  <div className="card" style={{width:'30%'}}>
    <div className="card-body">
      <h4 className="card-title">{search}</h4>
      <p className="card-text">Current Temp : {city.temp} &#8451;</p>
      <p className="card-link">Min : {city.temp_min} | Max : {city.temp_max}</p>
    </div>
  </div>
  </>
  } 
</div>
  );
}