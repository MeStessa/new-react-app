import React, { useState } from "react";
import "./App.css"
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
 import Loader from 'react-loader-spinner';
 import RecieveDate from "./RecieveDate";


export default function CurrentTemp() {

  const [request, setRequest]= useState(false);
  const[weather, setWeather]=useState({});
  

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
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    
    setRequest(true);
    
  }
  
    
    if (request){
      
       return (
         

      <ul className=" CurrentTemp text-capitalize ">
        
          <div className="row col">
            
          <h1 className="city"> {weather.city}</h1> 
           <RecieveDate date={weather.date}/>
            <div className="row col">
       <span className="temperature"> {Math.round(weather.temp)}</span> 
        
          <span className="units">
            <span href="/" className="active">
              C°{" "}
            </span>
            |<span href="/">F° </span>
          </span>
        </div>
        
        <div className="minMax">
          <span>max </span> {Math.round(weather.temp_max)}°
      
         /  <span>min </span> {Math.round(weather.temp_min)}° 
         </div>
</div>
        <li className="description">
          <div>
         {weather.description}
        <img src={weather.icon} alt={weather.description} />
        </div>
          Feels like {Math.round(weather.feelslike)} C°
        </li>
        <li className="description"> 
        Wind Speed: {weather.wind}km/h 
        </li>
        <li className="description">
          Humidity: {weather.humidity}%
          
        </li>
       
      </ul>
   
  );
    }
    
else{
 
  let apiKey="2abf5cd5bdf12c255e9d60ca40791365";
   let city="Moscow";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(getWeather);

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
