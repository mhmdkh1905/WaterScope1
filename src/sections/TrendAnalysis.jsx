import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import trendData from "../data/trend_yearly_kinneret.json";
import rainfallData from "../data/rainfall_kinneret_kvuza_yearly.json";
import temperatureData from "../data/kinneret_temperature_yearly.json";
import humidityData from "../data/humidity_vs_water_level_fitted.json";

const TrendAnalysis = () => {
  const slope = -0.04101;
  const intercept = -209.88379;
  const r2 = 0.2549;

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Trend Analysis of Water Level
      </h2>
      <p className="text-gray-600 mb-6">
        This chart shows the long-term trend of the Sea of Galilee water level.
        A linear regression model was used to estimate the general direction
        over time.
      </p>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={trendData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="level"
            stroke="#3b82f6"
            name="Actual Level"
          />
          <Line
            type="monotone"
            dataKey="fitted"
            stroke="#f97316"
            strokeDasharray="4 4"
            name="Trend Line"
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-6 text-gray-700 space-y-2">
        <p>
          <strong>Equation:</strong> level = {slope} × time_index + {intercept}
        </p>
        <p>
          <strong>R² Score:</strong> {r2}
        </p>
        <p className="text-gray-700 mt-4">
          The trend line shows a gradual long-term {" "}
          <span className="font-semibold text-red-600">decline</span> in the
          water level of the Sea of Galilee. According to the regression model,
          the level has decreased by approximately {" "}
          <span className="font-semibold">4.1 cm per year</span> since 1966.
          This suggests a potential long-term impact of climate changes or
          increased water usage over the decades.
        </p>
      </div>

      {/* Rainfall Chart */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">🌧 Rainfall (mm)</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={rainfallData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={(date) => new Date(date).getFullYear()} />
            <YAxis />
            <Tooltip labelFormatter={(label) => `Year: ${new Date(label).getFullYear()}`} />
            <Line type="monotone" dataKey="rainfall" stroke="#16a34a" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-gray-600 mt-3">
          This chart presents the annual rainfall around the Sea of Galilee. Tracking rainfall trends over time can help evaluate changes in water inflow into the lake and detect potential long-term shifts in regional precipitation patterns.
        </p>
      </div>

      {/* Temperature Chart */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">🌡 Temperature (°C)</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={temperatureData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="temperature" stroke="#dc2626" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-gray-600 mt-3">
          This chart shows the average yearly temperature in the region. Higher temperatures can lead to more evaporation and influence the lake’s water balance.
        </p>
      </div>

      {/* Humidity Chart */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">💨 Humidity (%)</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={humidityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="humidity" stroke="#0ea5e9" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-gray-600 mt-3">
          This chart shows the average annual humidity near the Sea of Galilee. Humidity levels affect evaporation rates, which can indirectly influence water levels.
        </p>
      </div>
    </div>
  );
};

export default TrendAnalysis;
