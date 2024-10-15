import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CountrySelect from "./CountrySelect";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function Contents() {
  const totalData = useSelector((state) => state.statistics.totalData);
  const countryData = useSelector((state) => state.statistics.countryData);
  const [dataSource, setDataSource] = useState(null);

  // Function to return a value or 0 if it's invalid
  const getValue = (value) => {
    return value && value !== "n/a" ? parseInt(value) : 0;
  };

  useEffect(() => {
    const chartData = countryData || totalData;

    if (chartData) {
      setDataSource({
        labels: ["Infected", "Recovered", "Deaths", "Active"],
        datasets: [
          {
            label: countryData
              ? `COVID-19 Statistics for ${countryData.country}`
              : "Global COVID-19 Statistics",
            data: [
              getValue(chartData.totalCases),
              getValue(chartData.totalRecovered),
              getValue(chartData.totalDeaths),
              getValue(chartData.totalCases) -
                getValue(chartData.totalRecovered) -
                getValue(chartData.totalDeaths), // Active cases
            ],
            backgroundColor: ["#ADD8E6", "#90EE90", "#FFC0CB", "#F0E68C"],
            borderWidth: 1,
          },
        ],
      });
    }
  }, [totalData, countryData]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            // Format the tooltip label to show full number
            const value = context.raw;
            return `${context.dataset.label}: ${value.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => {
            return value.toLocaleString(); // Format Y-axis ticks
          },
        },
      },
    },
  };

  return (
    <div className="contents">
      <CountrySelect />
      {dataSource ? (
        <div style={{ marginTop: "30px" }}>
          <Bar data={dataSource} options={options} />
        </div>
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
}

export default Contents;
