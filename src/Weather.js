import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: "Wednesday | Dec 20 | 17:03",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
    });
  }

  if (weatherData.ready) {
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
        <h1>{weatherData.city}, {weatherData.country}</h1>
        <h6>{weatherData.date}</h6>
        <div className="row mt-3">
          <div className="col-6 center">     
            <span className="text-capitalize ">{weatherData.description}</span>        
            <div className="clearfix">
              <img 
                src={weatherData.iconUrl} 
                alt={weatherData.description} 
                 />                                    
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>              
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
        </div>
    );
  } else {
    const apiKey = "89c8092fae86c61da5e71acd50a1415f";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  } 
}