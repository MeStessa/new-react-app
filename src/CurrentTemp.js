import React from "react";
import "./App.css"
import "bootstrap/dist/css/bootstrap.css";


export default function CurrentTemp() {
  let tempData = {
    condition: "Cloudy",
    imgUrl: "https://www.3bmeteo.com/images/set_icone/7/67-67/48n.png",
    temperature: "9",
    feelslike: "8",
    wind: "1",
    humidity: "95",
    max: "9",
    min: "7"
  };

  return (

      <ul className=" CurrentTemp">
        
          <div className="row col">
            
          <h1 className="city">Milan</h1> 
           
            <div className="row col">
       <span className="temperature"> {tempData.temperature}</span> 
        
          <span className="units">
            <span href="/" className="active">
              C°{" "}
            </span>
            |<span href="/">F° </span>
          </span>
        </div>
        
        <div className="minMax">
          <span>max {tempData.max}</span>°
      
         /  <span>min {tempData.min}</span>° 
         </div>
</div>
        <li className="description">
          <div >
          {tempData.condition}
          <img  src={tempData.imgUrl} alt="cloudy" className="weather-icon"/>
        </div>
          Feels like {tempData.feelslike} C°
        </li>
        <li className="description"> 
          <span> Wind {tempData.wind} </span>km/h
        </li>
        <li className="description">
          Humidity {tempData.humidity}
          <span></span>%
        </li>
      </ul>
   
  );
}