import React from "react";

export default function DayTimeUpdate(props) {
  function formateDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let amOrPm = "AM";

    if (hours >= 12) {
      amOrPm = "PM";
    }
    if (hours > 12) {
      hours = hours - 12;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return (
      <span>
        {days[day]} {hours}:{minutes} {amOrPm}
      </span>
    );
  }

  function formateForecastDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return <span>{days[day]}</span>;
  }

  if (props.full) {
    return formateDate(props.dt);
  }
  if (!props.full) {
    return formateForecastDay(props.dt);
  }
}
