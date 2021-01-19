import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
 import Loader from 'react-loader-spinner';
 import Conditions from "./Conditions";
 


export default function CurrentTemp(props) {

  const [request, setRequest]= useState(false);
  const[weather, setWeather]=useState({});
  const[city, setCity]=useState(props.defaultCity);

  function getWeather(response){
   
     setWeather({
      city:response.data.name,
      date: new Date (response.data.dt  * 1000),
      temp: response.data.main.temp,
      temp_min:response.data.main.temp_min,
      temp_max: response.data.main.temp_max,
      feelslike:response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon
    });
   setRequest(true);
  }
  function search(){
  let apiKey="2abf5cd5bdf12c255e9d60ca40791365";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(getWeather);

  }

   function handleSubmit(event){
   event.preventDefault();
   search();
  
  }
  function handleCityChange(event){
    setCity (event.target.value);

  }
  
    if (request){
      
       return (
         
         
<div className=" CurrentTemp">
       
        <form onSubmit={handleSubmit}>
          <input 
            type="search"
            placeholder=" Enter the city "
            size="20"
            autoFocus={true}
            className="search-input"
           onChange={handleCityChange}/>
          <input  className="btn" type="submit" value= "Search" />
        
        </form>
         <input className="btn  current-button" type="submit" value= "Current"/>
         <Conditions data={weather}/>
        </div>)
        ;
        
    }
    
else{
search();

 return(
      <Loader
         type="TailSpin"
         color="#ffffff"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
     );
 }
 }
