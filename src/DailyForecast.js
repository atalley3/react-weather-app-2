import React from "react";
import DayTimeUpdate from "./DayTimeUpdate";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  let day;
  let icon = props.forecast.icon;
  let iconAlt = props.forecast.iconalt;
  let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  let minTemp = props.forecast.tempMin;
  let maxTemp = props.forecast.tempMax;
  if (!props.day) {
    day = <DayTimeUpdate full={false} dt={props.forecast.dt} />;
  } else {
    day = props.day;
  }

  return (
    <div className="DailyForecast">
      <div className="day">{day}</div>
      <div>
        <img src={iconUrl} alt={iconAlt} />
      </div>
      <div className="temp">
        {minTemp}ºF / {maxTemp}ºF
      </div>
    </div>
  );
}
