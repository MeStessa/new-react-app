import React from "react";
 import RecieveDate from "./RecieveDate";
import WeekIcon from "./WeekIcon";
import ShowUnits from "./ShowUnits";
import "./Conditions.css"
export default function Conditions(props){
    return (
   <div className="Conditions" >
  
    <h1 className="city"> {props.data.city}</h1> 
     <button className="btn  current-button" type="submit" ><i class="fas fa-map-pin"></i></button>
    <div className="float-left">

            <RecieveDate date={props.data.date}/>
 </div>
 <div className="row">
 <div className=" CurrentIcon row col-sm-5">
             <WeekIcon code={props.data.icon}/> </div>
             <div className="row col-sm-7">
             <ShowUnits celsius={props.data.temp}/>
    </div></div>
     <div className="minMax">
     <span><i class="fas fa-arrow-up"></i> </span> {Math.round(props.data.temp_max)}°
 / <span><i class="fas fa-arrow-down"></i> </span> {Math.round(props.data.temp_min)}° 
    </div>
              <div className=" col-6">
             
 </div>
<ul classname="row">
 <li className="description">
 <div className="float-right col">
  </div> <i class="fas fa-thermometer-quarter"></i> {""}
   Feels like {Math.round(props.data.feelslike)} C°
  </li>
   <li className="description"> <i class="fas fa-wind"></i>{" "}
    Wind Speed: {props.data.wind}km/h 
    </li>
    <li className="description"><i class="fas fa-tint"></i> {""}
    Humidity: {props.data.humidity}%   </li>
   <li> 
</li>
    </ul>
    </div>
    );
}