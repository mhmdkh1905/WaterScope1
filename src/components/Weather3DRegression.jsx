import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

export default function Weather3DRegression() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/merged_weather_data.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const rainfall = data.map((d) => d.rainfall);
  const temperature = data.map((d) => d.temperature);
  const level = data.map((d) => d.level);
  const years = data.map((d) => d.year);

  const predictedLevel = data.map(
    (d) => 0.0027 * d.rainfall + 0.2713 * d.temperature - 218.7779
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
      <h2 className="text-xl font-semibold text-blue-800 mb-2">
        🌐 3D Regression: Water Level vs Rainfall & Temperature
      </h2>
      <p className="text-gray-600 text-sm mb-4">
        This 3D chart compares actual water levels (blue dots) with values predicted by a linear model (red diamonds). It helps visualize how rainfall and temperature jointly influence lake levels.
      </p>
      <Plot
        data={[
          {
            x: rainfall,
            y: temperature,
            z: level,
            text: years.map((year) => `Year: ${year}`),
            mode: "markers",
            type: "scatter3d",
            marker: {
              size: 5,
              color: level,
              colorscale: "Blues",
              opacity: 0.85,
            },
            name: "Observed Water Levels",
            hovertemplate:
              "Year: %{text}<br>Rainfall: %{x} mm<br>Temperature: %{y} °C<br>Water Level: %{z} m",
          },
          {
            x: rainfall,
            y: temperature,
            z: predictedLevel,
            mode: "markers",
            type: "scatter3d",
            marker: {
              size: 4,
              color: "red",
              symbol: "diamond",
            },
            name: "Model Prediction",
            hovertemplate:
              "Predicted Water Level: %{z} m<br>Rainfall: %{x} mm<br>Temperature: %{y} °C",
          },
        ]}
        layout={{
          autosize: true,
          height: 600,
          margin: { l: 0, r: 0, b: 0, t: 30 },
          scene: {
            xaxis: { title: "X: Rainfall (mm)" },
            yaxis: { title: "Y: Temperature (°C)" },
            zaxis: { title: "Z: Water Level (m)" },
          },
          legend: {
            x: 0,
            y: 1.1,
            orientation: "h",
            bgcolor: "rgba(255,255,255,0.8)",
          },
        }}
        style={{ width: "100%" }}
      />

      <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded text-sm text-gray-700">
        <p>
          This regression model estimates lake level based on two weather variables:
        </p>
        <ul className="list-disc list-inside ml-2 mt-1">
          <li><strong>X-axis (Rainfall)</strong> — yearly total rainfall in millimeters</li>
          <li><strong>Y-axis (Temperature)</strong> — yearly average air temperature in Celsius</li>
          <li><strong>Z-axis (Water Level)</strong> — observed or predicted lake level in meters</li>
        </ul>
        <p className="mt-2">
          The regression equation is:
        </p>
        <p className="italic text-blue-800">
          Water Level = 0.0027 × Rainfall + 0.2713 × Temperature – 218.7779
        </p>
        <p className="mt-2">
          The model's R² score is <strong>0.092</strong>, meaning it explains about 9.2% of the variation in lake levels. This suggests that additional factors (like evaporation or water use) may play a significant role.
        </p>
      </div>
    </div>
  );
}
