import React from "react";
 import RecieveDate from "./RecieveDate";
import WeekIcon from "./WeekIcon";
export default function Conditions(props){
    return (
   <div className="Conditions" >
         
            
          <h1 className="city"> {props.data.city}</h1> 
           <RecieveDate date={props.data.date}/>
           
       <span className="temperature"> {Math.round(props.data.temp)}</span> 
        
          <span className="units">
            <span href="/" className="active">
              C°{" "}
            </span>
            |<span href="/">F° </span>
          </span>
   
       
    

<ul>
        <li className="description">
            <div className="float-left">
            <WeekIcon code={props.data.icon}/> 
            </div>
        
          Feels like {Math.round(props.data.feelslike)} C°
        </li>
        <li className="description"> 
        Wind Speed: {props.data.wind}km/h 
        </li>
        <li className="description">
          Humidity: {props.data.humidity}%
          
        </li>
        <li>    <div className="minMax">
          <span>max </span> {Math.round(props.data.temp_max)}°
      
         /  <span>min </span> {Math.round(props.data.temp_min)}° 
         </div></li>
        </ul>
        </div>
    );
}