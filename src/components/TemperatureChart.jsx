import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function TemperatureChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/kinneret_temperature_yearly.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const chartData = {
    labels: data.map((d) => d.year),
    datasets: [
      {
        label: "Average Temperature (°C)",
        data: data.map((d) => d.temperature),
        borderColor: "#f97316",
        backgroundColor: "#fdba74",
        fill: false,
        tension: 0.3,
        pointRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Yearly Average Temperature – Kinneret (2010–2023)",
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `Year ${ctx.label}: ${ctx.raw} °C`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Average Temperature (°C)",
        },
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow border border-orange-100">
      <h2 className="text-xl font-semibold text-orange-800 mb-2">🌡️ Average Yearly Temperature</h2>
      <Line data={chartData} options={chartOptions} />
      <p className="text-gray-500 text-sm mt-4">
        Data shows the annual average of daily air temperatures near the Sea of Galilee, based on Open-Meteo historical data.
      </p>
    </div>
  );
}
