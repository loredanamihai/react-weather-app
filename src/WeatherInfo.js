import React from "react";
import CorrectDate from "./CorrectDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureUnits from "./TemperatureUnits";

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
              <WeatherIcon code={props.data.icon} alt={props.data.description} />
              <TemperatureUnits celsius={props.data.temperature} />                           
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