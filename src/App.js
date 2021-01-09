import React from "react";
import './App.css';
import Search from "./Search";
import CurrentTemp from "./CurrentTemp";
import Forecast from "./Forecast";
import axios from "axios";


function App() {

  return (
    <div className="App">
      <div className="container">
          <div className="block">
     
        
            <Search />
           
              <h1> Milan</h1>
      
      
     
           <CurrentTemp/>
             <Forecast/>
        
            <div className="row forecast-hour"></div>
          </div>
           </div>
        
      <p className="coded-by">
        <a href="https://github.com/MeStessa/Meteo-App" target="_blank">
          Open-source code
        </a>
        by Marina Mukhina
      </p>
      ;
    </div>
  );

    

}

export default App;
