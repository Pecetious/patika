import { useEffect } from "react";
import "./App.css";
import { getWeatherData } from "./redux/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProvinces } from "./redux/provincesSlice";
function App() {
  const dispatch = useDispatch();
  const { weatherData } = useSelector((state) => state.weather);
  const { provinces } = useSelector((state) => state.provinces);
  useEffect(() => {
    dispatch(getWeatherData("Adana"));
    dispatch(getProvinces());
  }, [dispatch]);
  const handleChange = (pr) => {
    dispatch(getWeatherData(pr.toLocaleString()));
  };
  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString); // Convert the string to a Date object
    const options = { weekday: "short" }; // Display day in short form (e.g., "Wed")
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <div className="App">
      <div className="content_card">
        {weatherData && (
          <div className="weather_card">
            <h5 className="title">
              {weatherData.location.name}, {weatherData.location.country}
            </h5>
            <div className="weather_data">
              {weatherData.forecast.forecastday.map((day) => (
                <div key={day.date}>
                  <p>{getDayOfWeek(day.date)}</p>
                  <div className="weather_img_container">
                    <img
                      src={day.day.condition.icon}
                      alt={day.day.condition.text}
                      width="50px"
                      height="50px"
                    />
                    <p>{day.day.condition.text}</p>
                  </div>
                  <div className="weather_text_container">
                    <p>{Math.round(day.day.avgtemp_c)}°C</p>
                    <p>Avg Humidity: {day.day.avghumidity} %</p>
                    <p>Precip: {day.day.totalprecip_mm} mm</p>
                    <p>Wind Speed: {day.day.avgvis_km} KM</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {provinces && (
          <select
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          >
            <option value="" disabled>
              Select a Province
            </option>
            {provinces.map((pr) => (
              <option value={pr.name}>{pr.name}</option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}

export default App;
