import React, { useState } from "react";
import { useCity } from "../context/CityContext";
import { useWeather } from "../context/WeatherContext";
function Main() {
  const { cities } = useCity();
  const { weather, fetchWeatherData } = useWeather();
  const [selectedCity, setSelectedCity] = useState("");
  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);

    // Call the function from context to fetch weather data for the selected city
    fetchWeatherData(selectedCity);
  };
  const getWeekdayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const todayDate = getTodayDate();

  return (
    <div className="main">
      <div className="header">
        <h1 className="header__title">Weather Forecast</h1>
      </div>
      <select
        className="citiesSelect"
        onChange={handleCityChange}
        value={selectedCity}
      >
        <option value="" disabled selected>
          Select a City
        </option>
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      <div>
        {weather ? (
          <div>
            {/* <h2>Weather in {weather.location.name}</h2>
            <p>Temperature: {weather.current.temp_c} °C</p>
            <p>Condition: {weather.current.condition.text}</p>
            Add more details as needed */}
            <div className="card">
              {weather.forecast.forecastday.map((e) => (
                <div className={`card_body ${e.date === todayDate ? 'today' : ''}`}>
                  <h5>{getWeekdayName(e.date)}</h5>
                  <img src={e.day.condition.icon} />
                  <span key={e.date}>
                    {" "}
                    <b>{Math.round(e.day.maxtemp_c)} °C</b> | {Math.round(e.day.mintemp_f)} °C
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Select a city to see the weather.</p>
        )}
      </div>
    </div>
  );
}

export default Main;
