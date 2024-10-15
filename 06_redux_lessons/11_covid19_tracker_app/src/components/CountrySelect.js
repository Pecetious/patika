import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryData } from "../redux/statisticsSlice";
function CountrySelect() {
  const countries = useSelector((state) => state.statistics.countries);
  const dispatch = useDispatch();
  const handleChange = (country) => {
    dispatch(getCountryData(country));
  };
  return (
    <div className="country_select">
      {countries.length > 1 ? (
        <select defaultValue="" onChange={(e) => handleChange(e.target.value)}>
          <option value="" disabled>
            Select a Country
          </option>
          {countries &&
            countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
        </select>
      ) : (
        <p>Loading Countries...</p>
      )}
    </div>
  );
}

export default CountrySelect;
