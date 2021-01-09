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
          <img className="degree-icon" src="images/degree.png" alt="" />
          <span className="units">
            <a href="/" className="active">
              C°{" "}
            </a>
            |<a href="/">F° </a>
          </span>
        </li>

        <li className="description">
          <div >
          {tempData.condition}
          <img  src={tempData.imgUrl} alt="" className="weatherIcon"/>
        </div>
          Feels like {tempData.feelslike} C°
          <img className="indice-icon" src="images/indice.png" alt="" />
        </li>
        <li className="description">
          Wind <img className="wind-icon" src="images/wind.png" alt="" />
          <span>{tempData.wind} </span>km/h
        </li>
        <li className="description">
          Humidity {tempData.humidity}
          <img className="humidity-icon" src="images/humid.png" alt="" />
          <span>95</span>%
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