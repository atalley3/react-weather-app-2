import React from "react";
import "./CurrentWeather.css";
import DayTimeUpdate from "./DayTimeUpdate";

export default function CurrentWeather(props) {
  let icon = props.info.icon;
  let iconAlt = props.info.iconAlt;
  let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  let wind = props.info.wind;
  let dt = props.info.dt;
  return (
    <div className="CurrentWeather">
      <img src={iconUrl} alt={iconAlt} id="icon" />
      <div className="temp">
        {Math.round(props.info.temperature)}
        <span>ºF</span>
      </div>
      <div className="Details">
        <ul>
          <li>Humidity: {Math.round(props.info.humidity)}%</li>
          <li>Wind: {Math.round(wind)} MPH</li>
        </ul>
      </div>
      <div className="Description">
        <div className="cityName">{props.city}</div>
        <div className="DayTime">
          <small>Last Updated:</small>
          <DayTimeUpdate dt={dt} full={true} />
        </div>
        <div>{props.info.description}</div>
      </div>
    </div>
  );
}
