import React from "react";
import WeekIcon from "./WeekIcon";
import "./ForecastPreview.css"

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }

  return (
    <div className="ForecastPreview row col-sm">
     
       <div className="col-7">
     
     <ul>
              <li>{hours()}</li>
    ____
       <li><strong>{temperature()}</strong></li>
            </ul>
          </div>
           <div className="col-5 NextHoursIcon"><WeekIcon code={props.data.weather[0].icon} />
          </div>
          </div>);}
