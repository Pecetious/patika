import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const CityContext = createContext();
const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const url = "https://turkiyeapi.dev/api/v1/provinces";
    axios.get(url).then((response) => {
      setCities(response.data.data);
      // console.log(response.data.data);
    });
  }, []);
  const values = { cities, setCities };
  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};
const useCity = () => useContext(CityContext);
export { useCity, CityProvider };
