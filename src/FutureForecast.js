import React from "react";
import DailyForecast from "./DailyForecast";
import "./FutureForecast.css";

export default function FutureForecast(props) {
  let forecast = props.forecast;

  if ((forecast.length = 1)) {
    return (
      <div className="FutureForecast">
        <DailyForecast forecast={forecast[0]} day="Mon" />
        <DailyForecast forecast={forecast[0]} day="Tues" />
        <DailyForecast forecast={forecast[0]} day="Wed" />
        <DailyForecast forecast={forecast[0]} day="Thur" />
        <DailyForecast forecast={forecast[0]} day="Fri" />
        <DailyForecast forecast={forecast[0]} day="Sat" />
        <DailyForecast forecast={forecast[0]} day="Sun" />
      </div>
    );
  }
  if ((forecast.length = 8)) {
    return (
      <div className="FutureForecast">
        <DailyForecast forecast={forecast[1]} day={null} />
        <DailyForecast forecast={forecast[2]} day={null} />
        <DailyForecast forecast={forecast[3]} day={null} />
        <DailyForecast forecast={forecast[4]} day={null} />
        <DailyForecast forecast={forecast[5]} day={null} />
        <DailyForecast forecast={forecast[6]} day={null} />
        <DailyForecast forecast={forecast[7]} day={null} />
      </div>
    );
  }
}
