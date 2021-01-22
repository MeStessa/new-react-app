import React, { useState } from "react";
import axios from "axios";
import './App.css';
import ForecastPreview from "./ForecastPreview";
import "bootstrap/dist/css/bootstrap.css";
import "./Forecast.css";
import Loader from 'react-loader-spinner';


export default function Forecast(props){
  const[dataLoaded, setDataLoaded] = useState(false);
  const[forecast, setForecast] = useState(null);
 
  function showDetails(response){
    setForecast(response.data);
    setDataLoaded(true);
    console.log(response.data)
}
  if (dataLoaded  && props.city === forecast.city.name) {
    
  return  (
    <div className="Forecast  container">
      <h3 className="ForecastTitle"><i class="far fa-clock"></i></h3>
      
    <ForecastPreview data={forecast.list[0]}/>
    <ForecastPreview data={forecast.list[1]}/>
    <ForecastPreview data={forecast.list[2]}/>
    <ForecastPreview data={forecast.list[3]}/>
    <ForecastPreview data={forecast.list[4]}/>
    </div>
        );
}

else{
  let apiKey = "e78ccf6f31ad51ffa9f2549f7ec140cb";
  let apiUrl= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showDetails) ;
  return (
      <Loader
         type="TailSpin"
         color="violet"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
     );
}
}