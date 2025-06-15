import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { format } from "date-fns";

ChartJS.register(
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend
);

export default function KinneretChart() {
  const [waterData, setWaterData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [rainfallData, setRainfallData] = useState([]);

  useEffect(() => {
    fetch("/data/kinneret_levels.json").then((res) => res.json()).then(setWaterData);
    fetch("/data/forecast_kinneret.json").then((res) => res.json()).then(setForecastData);
    fetch("/data/rainfall_kinneret_kvuza_yearly.json").then((res) => res.json()).then(setRainfallData);
  }, []);

  if (!waterData.length || !forecastData.length || !rainfallData.length) {
    return <p className="text-blue-400">Loading chart...</p>;
  }

  const allDates = Array.from(
    new Set([
      ...waterData.map((d) => d.date),
      ...forecastData.map((d) => d.date),
      ...rainfallData.map((d) => d.date),
    ])
  ).sort();

  const waterValues = allDates.map((date) => {
    const match = waterData.find((d) => d.date === date);
    return match ? parseFloat(match.level) : null;
  });

  const forecastValues = allDates.map((date) => {
    const match = forecastData.find((d) => d.date === date);
    return match ? parseFloat(match.forecast_level) : null;
  });

  const rainfallDates = rainfallData.map((d) => d.date);
  const rainfallValues = rainfallData.map((d) => parseFloat(d.rainfall));

  const tooltipDate = (tooltipItems) => tooltipItems[0].label.split("T")[0];

  const baseOptions = {
    responsive: true,
    interaction: { mode: "index", intersect: false },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "year",
          displayFormats: { year: "yyyy" },
        },
        title: { display: true, text: "Date" },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: (tooltipItems) => {
            const date = new Date(tooltipItems[0].parsed.x);
            return format(date, date.getMonth() === 0 ? "yyyy" : "yyyy-MM");
          }
        }
      }
    },
  };

  const zoomThreshold = new Date();
  zoomThreshold.setFullYear(zoomThreshold.getFullYear() - 2);
  const zoomDates = allDates.filter((d) => new Date(d) >= zoomThreshold);

  const zoomedWater = zoomDates.map((date) => {
    const match = waterData.find((d) => d.date === date);
    return match ? parseFloat(match.level) : null;
  });

  const zoomedForecast = zoomDates.map((date) => {
    const match = forecastData.find((d) => d.date === date);
    return match ? parseFloat(match.forecast_level) : null;
  });

  return (
    <div className="space-y-10">
      {/* Full Historical Water Levels + Forecast */}
      <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">📉 Full Historical Water Levels + Forecast</h2>
        <Line
          data={{
            labels: allDates,
            datasets: [
              {
                label: "Observed Water Level",
                data: waterValues,
                borderColor: "#0ea5e9",
                tension: 0.3,
                pointRadius: 0,
              },
              {
                label: "ARIMA Forecast",
                data: forecastValues,
                borderColor: "#10b981",
                borderDash: [6, 4],
                tension: 0.3,
                pointRadius: 0,
              },
            ],
          }}
          options={{
            ...baseOptions,
            scales: {
              ...baseOptions.scales,
              y: { title: { display: true, text: "Water Level (m)" } },
            },
          }}
        />
        <p className="text-gray-600 mt-4 text-sm">
          This graph displays the observed historical water level of the Sea of Galilee, along with a 12-month ARIMA forecast for future levels.
        </p>
      </div>

      {/* Zoomed 2-Year Water Level + Forecast */}
      <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">🔍 Zoom: Last 2 Years + Forecast</h2>
        <Line
          data={{
            labels: zoomDates,
            datasets: [
              {
                label: "Observed (Last 2 Years)",
                data: zoomedWater,
                borderColor: "#3b82f6",
                tension: 0.3,
                pointRadius: 0,
              },
              {
                label: "ARIMA Forecast",
                data: zoomedForecast,
                borderColor: "#22c55e",
                borderDash: [6, 4],
                tension: 0.3,
                pointRadius: 0,
              },
            ],
          }}
          options={{
            ...baseOptions,
            scales: {
              ...baseOptions.scales,
              y: { title: { display: true, text: "Water Level (m)" } },
            },
          }}
        />
        <p className="text-gray-600 mt-4 text-sm">
          This zoomed-in chart highlights only the last 2 years of observed water level data, with the ARIMA forecast continuing forward.
        </p>
      </div>

      {/* Rainfall Yearly Chart */}
      <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">🌧️ Yearly Rainfall at Kinneret Kvutza</h2>
        <Bar
          data={{
            labels: rainfallDates,
            datasets: [
              {
                label: "Rainfall (mm)",
                data: rainfallValues,
                backgroundColor: "#38bdf8",
              },
            ],
          }}
          options={{
            ...baseOptions,
            scales: {
              ...baseOptions.scales,
              y: { title: { display: true, text: "Rainfall (mm)" }, suggestedMax: 800 },
            },
          }}
        />
        <p className="text-gray-600 mt-4 text-sm">
          This chart shows yearly rainfall totals recorded at the Kinneret Kvutza station.
        </p>
      </div>
    </div>
  );
}
