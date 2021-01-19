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

 <span className="temperature"> {Math.round(props.celsius)}</span> 
      
 <span className="units">
 <span href="/" className="active">  C° </span>
            {" "}
 
 |<a href="/"  onClick={showFahrenheit}>F° </a>
</span>
        </div>
    );
    }

    else{
         return(
        <div className="ShowUnits" >

 <span className="temperature"> {Math.round(props.celsius  * 9/5) + 32}</span> 
      
 <span className="units">
 <a href="/" onClick={showCelsius} className="active">C° </a>
 
 |<span href="/"  >F° </span>
</span>
        </div>
    );
       // return (Math.round(props.celsius  * 9/5) + 32);
    }
}