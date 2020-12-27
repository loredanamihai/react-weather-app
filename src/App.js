import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return  (
    <div className="App"> 
    <div className="container">
      <div className="weather-app">
        <Weather />
      </div>
      <footer>This project is coded by Loredana Mihai and is {" "}
        <a 
        href="https://github.com/loredanamihai/react-weather-app"
        rel="noreferrer"
        target="_blank"
        >
          open-sourced on GitHub
        </a>        
      </footer>
      </div>
    </div> 
  );    

}


