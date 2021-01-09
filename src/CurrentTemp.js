import React from "react";
import "./App.css"

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

      <ul>
        <li className="current-temperature">
       <span className="temperature"> {tempData.temperature}</span>
        
          <span className="units">
            <span href="/" className="active">
              C°{" "}
            </span>
            |<span href="/">F° </span>
          </span>
        </li>

        <li className="description">
          <div >
          {tempData.condition}
          <img  src={tempData.imgUrl} alt="cloudy" className="weatherIcon"/>
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
        <li className="minMax">
          <span>max {tempData.max}</span>°
        </li>
        <li>
          <span>min{tempData.min}</span>°
        </li>
      </ul>
   
  );
}