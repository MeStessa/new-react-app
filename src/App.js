import React from "react";
import './App.css';

import CurrentTemp from "./CurrentTemp";
import Forecast from "./Forecast";
import HourForecast from "./HourForecast";
import "bootstrap/dist/css/bootstrap.css";

function App() {

  return (
    <div className="App">
      <div className="container">
          <div className="block">
            <div className="row">
         
         
         </div>
            <div className="row">
         <div className="col-sm">
              
            <CurrentTemp defaultCity="Moscow"/> </div>
             <div className="col-sm">
               <HourForecast/>
            </div>
         </div>
           <Forecast/>
             </div>
        </div>
      <p className="coded-by">
        <a href="https://github.com/MeStessa/new-react-app" target="_blank"  rel="noreferrer">
          Open-source code
        </a>
        by Marina Mukhina
      </p>
      ;
    </div>
  );
}

export default App;
