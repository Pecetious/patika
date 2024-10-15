import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalData, getCountries } from "../redux/statisticsSlice";
import Card from "./Card";

function Header() {
  const totalData = useSelector((state) => state.statistics.totalData);
  const countryData = useSelector((state) => state.statistics.countryData);
  const status = useSelector((state) => state.statistics.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalData());
    dispatch(getCountries());
  }, [dispatch]);

  // Handle loading and error states
  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Failed to load data.</p>;

  return (
    <div>
      <h1>COVID 19 TRACKER</h1>
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {totalData ? ( // Show totalData if available
          <>
            <Card
              title="Infected"
              value={totalData.totalCases}
              description="Number of active cases of COVID-19"
              color="#ADD8E6"
            />
            <Card
              title="Recovered"
              value={totalData.totalRecovered}
              description="Number of recoveries from COVID-19"
              color="#90EE90"
            />
            <Card
              title="Deaths"
              value={totalData.totalDeaths}
              description="Number of deaths caused by COVID-19"
              color="#FFC0CB"
            />
            <Card
              title="Active"
              value={(
                parseInt(totalData.totalCases) -
                parseInt(totalData.totalDeaths) -
                parseInt(totalData.totalRecovered)
              ).toLocaleString()}
              description="Number of currently active cases"
              color="#F0E68C"
            />
          </>
        ) : countryData ? ( // Show countryData if totalData is not available
          <>
            <Card
              title="Infected"
              value={countryData.totalCases}
              description="Number of active cases of COVID-19"
              color="#ADD8E6"
            />
            <Card
              title="Recovered"
              value={countryData.totalRecovered}
              description="Number of recoveries from COVID-19"
              color="#90EE90"
            />
            <Card
              title="Deaths"
              value={countryData.totalDeaths}
              description="Number of deaths caused by COVID-19"
              color="#FFC0CB"
            />
            <Card
              title="Active"
              value={countryData.activeCases}
              description="Number of currently active cases"
              color="#F0E68C"
            />
          </>
        ) : (
          <p>No data available.</p> // Informative message
        )}
      </div>
    </div>
  );
}

export default Header;
