import React from "react";
import './App.css';




export default function Forecast(){

    return  (
               <div className="Forecast">

        <h3>Week Forecast</h3>

        <div className="row">
          <div className="col">
            <p>14 Jan</p>
          </div>
          <div className="col">
            <p>15 Jan</p>
          </div>
          <div className="col">
            <p>16 Jan</p>
          </div>
          <div className="col">
            <p>17 Jan</p>
          </div>
          <div className="col">
            <p>28 Jan</p>
          </div></div> 
          <div className="row">
               <div className="col">
            <p>15°/11°</p>
          </div>
          <div className="col">
            <p>11°/11°</p>
          </div>
          <div className="col">
            <p>12°/14°</p>
          </div>
          <div className="col">
            <p>12°/11°</p>
          </div>
          <div className="col">
            <p>12°/9°</p>
          </div></div> 
            
            </div>
        );
}