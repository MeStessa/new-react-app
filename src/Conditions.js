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
    <div className="float-left ">
  
            <RecieveDate date={props.data.date}/>
 </div>

 <div className="row">
    
    
    <div className="col-8">  
 <ShowUnits celsius={props.data.temp}/>    </div>
  <div className="col"> <WeekIcon code={props.data.icon}/> </div></div>

  <div className="row">
      <div className="col">
<span><i class="fas fa-arrow-up"></i> </span> {Math.round(props.data.temp_max)}°
 / <span><i class="fas fa-arrow-down"></i> </span> {Math.round(props.data.temp_min)}° 
  <i class="fas fa-thermometer-quarter"></i>  {""}
   <br/>Feels like {Math.round(props.data.feelslike)} C°
  </div>
 
  <span className=" col CurrentDescription">{props.data.description}
<br/>
   {" "} <i class="fas fa-tint"></i> {""}
    Humidity: {props.data.humidity}% <br/>
 <i class="fas fa-wind"></i>   Wind Speed: {props.data.wind}km/h     </span> 
   </div>

    </div>
    );
}