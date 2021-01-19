import React from "react";
 import RecieveDate from "./RecieveDate";
import WeekIcon from "./WeekIcon";
import ShowUnits from "./ShowUnits";
export default function Conditions(props){
    return (
   <div className="Conditions" >
         
            
          <h1 className="city"> {props.data.city}</h1> 
           <RecieveDate date={props.data.date}/>
             <ShowUnits celsius={props.data.temp}/>

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