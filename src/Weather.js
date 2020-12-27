import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">        
            <input type="search" 
            placeholder="Enter a city..." 
            className="form-control change" 
            autoFocus="on"/>
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn form-button" />
              <i className="fas fa-search"></i>
          </div>
        </div>
      </form>
      <h1>Bucharest, RO</h1>
      <h6>Wednesday | Dec 20 | 17:03</h6>
      <div className="row">
        <div className="col-6">          
          <div className="clearfix">
            <i className="fas fa-cloud"></i>
            <span>Few Clouds</span>            
          </div>
          <div className="float-left">
            <span className="temperature">5</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 86%</li>
            <li>Wind: 3 km/h</li>
          </ul>
        </div>
      </div>
      </div>

  );
}