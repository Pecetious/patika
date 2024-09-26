import { createContext, useContext, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);

  // Function to fetch weather data based on city
  const fetchWeatherData = (city) => {
    const apiKey = "29c450f7ed3446fd8ac142024232310";
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;

    axios
      .get(url)
      .then((response) => {
        setWeather(response.data); // Set the fetched weather data
        console.log(response.data.forecast.forecastday); // Log the fetched data
      })
      .catch((err) => console.error("Error fetching weather data:", err.message));
  };

  const values = { weather, setWeather, fetchWeatherData }; // Include the fetch function

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

const useWeather = () => useContext(WeatherContext);

export { useWeather, WeatherProvider };
