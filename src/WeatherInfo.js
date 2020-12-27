import React from "react";
import CorrectDate from "./CorrectDate";

export default function WeatherInfo (props){
  return (
    <div className = "WeatherInfo">
      <h1>{props.data.city}, {props.data.country}</h1>
        <h6>       
          <CorrectDate date = {props.data.date} />
        </h6> 
        <div className="row mt-3">
          <div className="col-6 center">     
            <span className="text-capitalize ">{props.data.description}</span>        
            <div className="clearfix">
              <img 
                src={props.data.iconUrl} 
                alt={props.data.description} 
                 />                                    
                <span className="temperature">{Math.round(props.data.temperature)}</span>
                <span className="unit">°C</span>              
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
        </div>
    );
    
}