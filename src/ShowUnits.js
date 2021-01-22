import React , { useState }from "react";


export default function ShowUnits(props){
const [unit,setUnit]=useState ("celsius");

function showFahrenheit(event){
event.preventDefault();
setUnit("fahrenheit");
}
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

if (unit === "celsius"){
    return(
<div className="ShowUnits" >
 <div className="temperature"> {Math.round(props.celsius)}
<span className="units">
 <span href="/" className="active"> <i class="fas fa-thermometer-three-quarters"></i> C° </span>
            {" "}
 |<a href="/"  onClick={showFahrenheit}>F° </a>
</span></div>  </div>);
    }

else{
         return(
        <div className="ShowUnits" >
 <span className="temperature"> {Math.round(props.celsius  * 9/5) + 32} 
 </span>
 <span className="units">
 <i class="fas fa-thermometer-three-quarters"></i>{" "}
<span href="/"  >F° </span> |<a href="/" onClick={showCelsius} className="active">C° </a>
</span>
</div>
    );}
}