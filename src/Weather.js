import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import "./Weather.css";
import FutureForcast from "./FutureForecast";

export default function Weather() {
  let placeholderWeather = {
    temperature: 100,
    tempMax: 150,
    tempMin: 0,
    icon: "50d",
    humidity: 100,
    wind: 50,
    description: "whats happening?",
    dt: 882000000,
    iconAlt: "Ash",
  };
  let [city, setCity] = useState();
  let [weatherInfo, setWeatherInfo] = useState(placeholderWeather);
  let [location, setLocation] = useState({
    lat: 0,
    lon: 0,
    name: "Xanadu",
  });
  let [forecast, setForecast] = useState([placeholderWeather]);

  const apiKey = "bcdada43905d3c2d7aa9f45a7ce30f8b";
  let units = "imperial";
  const geoApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=${units}`;

  function handleResponse(response) {
    setWeatherInfo({
      temperature: response.data.current.temp,
      tempMax: response.data.daily[0].temp.max,
      tempMin: response.data.daily[0].temp.max,
      icon: response.data.current.weather[0].icon,
      iconAlt: response.data.current.weather[0].main,
      description: response.data.current.weather[0].description,
      humidity: response.data.current.humidity,
      wind: response.data.current.wind_speed,
      dt: response.data.current.dt,
    });
    let forecastArr = [placeholderWeather];
    let i = 1; //counter varible for while loop
    while (i < 8) {
      forecastArr.push({
        dt: response.data.daily[i].dt,
        tempMax: response.data.daily[i].temp.max,
        tempMin: response.data.daily[i].temp.min,
        iconAlt: response.data.daily[i].weather[0].main,
        icon: response.data.daily[i].weather[0].icon,
      });
      i++;
    }
    setForecast(forecastArr);
  }
  function getGeoLocation(response) {
    setLocation({
      lat: response.data[0].lat,
      lon: response.data[0].lon,
      name: response.data[0].name,
    });
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios.get(geoApiUrl).then(getGeoLocation);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <div className="weatherSearch">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoComplete="off"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form>
      </div>
      <CurrentWeather info={weatherInfo} city={location.name} />
      <FutureForcast forecast={forecast} />
    </div>
  );
}
