import React from "react";

export default function CorrectDate(props) {
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

let day =days[ props.date.getDay()];
let month = months[props.date.getMonth()];
let year = props.date.getFullYear();
     year = year.toString().substr(-2);

let hours = props.date.getHours();
let minutes = props.date.getMinutes();

 if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>{day} | {month} {year} | {hours}:{minutes}</div>
  );
}
