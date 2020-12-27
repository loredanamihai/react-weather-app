import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
    });
  }

  function search() {
    const apiKey = "89c8092fae86c61da5e71acd50a1415f";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">        
              <input type="search" 
              placeholder="Enter a city..." 
              className="form-control change" 
              autoFocus="on"
              onChange={handleCityChange}/>
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn form-button" />
                <i className="fas fa-search"></i>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
        
  } else {
    search();

    return "Loading...";
  } 
}