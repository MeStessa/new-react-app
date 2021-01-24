import React from "react";
import './App.css';
import CurrentTemp from "./CurrentTemp";
import "bootstrap/dist/css/bootstrap.css";

function App() {

  return (
    <div className="App">
    <div className="container">
   <div className="block">
            
    <CurrentTemp defaultCity="Moscow"/> 
         
  </div>
  </div>
    
  <div className="coded-by">
   <a href="https://github.com/MeStessa/new-react-app" target="_blank"  rel="noreferrer">
 Open-source code on GitHub
   </a>  by Marina Mukhina
   </div> 
  </div>
  );
}

export default App;
