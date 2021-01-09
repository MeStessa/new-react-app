import React from "react";
import "./Search.css";


export default function Search() {
  return (
    <div className="Search">
        
      <form >
         
          <input 
            type="search"
            placeholder=" Enter the city "
            size="20"
            autoFocus="on"
             className="search-input"/>
           
          <button className="btn btn-dark "type="submit"> Search </button>
        
        <button className="btn btn-dark current-button" type="submit"> Your Location </button>
        </form>
        
    </div>
  );
}