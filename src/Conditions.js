import React from "react";
import CurrentTemp from "./CurrentTemp";
 import RecieveDate from "./RecieveDate";

export default function Conditions(props){
    return (
   <div className="Conditions">
          <div className="row col">
            
          <h1 className="city"> {props.data.city}</h1> 
           <RecieveDate date={props.data.date}/>
            <div className="row col">
       <span className="temperature"> {Math.round(props.data.temp)}</span> 
        
          <span className="units">
            <span href="/" className="active">
              C°{" "}
            </span>
            |<span href="/">F° </span>
          </span>
        </div>
        
        <div className="minMax">
          <span>max </span> {Math.round(props.data.temp_max)}°
      
         /  <span>min </span> {Math.round(props.data.temp_min)}° 
         </div>
</div>
<ul>
        <li className="description">
          <div>
         {props.data.description}
        <img src={props.data.icon} alt={props.data.description} />
        </div>
          Feels like {Math.round(props.data.feelslike)} C°
        </li>
        <li className="description"> 
        Wind Speed: {props.data.wind}km/h 
        </li>
        <li className="description">
          Humidity: {props.data.humidity}%
          
        </li>
        </ul>
        </div>
    );
}