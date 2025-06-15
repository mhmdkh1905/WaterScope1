import React, { useEffect, useState } from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(PointElement, LineElement, LinearScale, Title, Tooltip, Legend);

export default function RegressionChart() {
  const [dataPoints, setDataPoints] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 10;

  useEffect(() => {
    Promise.all([
      fetch("/data/rainfall_kinneret_kvuza_yearly.json").then((res) => res.json()),
      fetch("/data/kinneret_water_levels_yearly.json").then((res) => res.json()),
    ]).then(([rainfall, water]) => {
      const merged = rainfall.map((r) => {
        const match = water.find((w) => w.date === r.date);
        if (!match || !r.date) return null;

        const year = new Date(r.date).getFullYear();

        return {
          x: parseFloat(r.rainfall),
          y: parseFloat(match.level),
          year,
        };
      }).filter(Boolean);

      setDataPoints(merged);
    });
  }, []);

  const regressionLine = [];
  for (let x = 0; x <= 800; x += 10) {
    const y = 0.005 * x + (-213.157);
    regressionLine.push({ x, y });
  }

  const chartData = {
    datasets: [
      {
        label: "Observed Data",
        data: dataPoints,
        backgroundColor: "skyblue",
        pointRadius: 5,
      },
      {
        label: "Regression Line",
        data: regressionLine,
        borderColor: "#0f172a",
        borderWidth: 2,
        showLine: true,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Lagged Rainfall (mm)",
        },
        min: 0,
        max: 800,
      },
      y: {
        title: {
          display: true,
          text: "Water Level (m)",
        },
      },
    },
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Water Level vs Lagged Rainfall (Linear Regression)",
      },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const point = ctx.raw;
            return `Year: ${point.year ?? "N/A"}, Rainfall: ${point.x} mm, Level: ${point.y} m`;
          },
        },
      },
    },
  };

  const downloadCSV = () => {
    const headers = "Year,Rainfall (mm),Water Level (m)\n";
    const rows = dataPoints.map((d) => `${d.year},${d.x},${d.y}`).join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "regression_data.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const paginatedRows = dataPoints.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);
  const totalPages = Math.ceil(dataPoints.length / rowsPerPage);

  return (
    <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
      <h2 className="text-xl font-semibold text-blue-800 mb-2">
        📈 Regression Analysis
      </h2>
      <Scatter data={chartData} options={chartOptions} />
      <p className="text-gray-600 mt-4 text-sm">
        This model predicts the water level of the Sea of Galilee based on the previous year's rainfall.<br />
        The regression equation is: <br />
        <code>Water Level = 0.005 × Rainfall - 213.157</code><br />
        R² = <strong>0.193</strong> (weak–moderate predictive power)
      </p>

      <p className="text-gray-500 text-sm mt-6">
        <strong>Note:</strong> Rainfall values in the table below refer to the <em>previous year</em>, while water levels refer to the <em>current year</em>.<br />
        This reflects the natural lag between rainfall and its effect on water level.
      </p>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={downloadCSV}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm"
        >
          📁 Download CSV
        </button>

        <div className="text-sm text-gray-500">
          Page {currentPage + 1} of {totalPages}
        </div>
      </div>

      <div className="overflow-x-auto mt-2">
        <table className="min-w-full text-sm text-left border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">Year (Water Level)</th>
              <th className="px-4 py-2 border-b">Lagged Rainfall (mm)</th>
              <th className="px-4 py-2 border-b">Water Level (m)</th>
            </tr>
          </thead>
          <tbody>
            {paginatedRows.map((row, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-1 border-b">{row.year}</td>
                <td className="px-4 py-1 border-b">{row.x}</td>
                <td className="px-4 py-1 border-b">{row.y}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end gap-2 mt-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded"
          disabled={currentPage === 0}
        >
          ◀ Previous
        </button>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded"
          disabled={currentPage >= totalPages - 1}
        >
          Next ▶
        </button>
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded">
        <h3 className="text-md font-semibold text-blue-800 mb-1">📐 How This Model Works</h3>
        <p className="text-sm text-gray-700">
          This linear regression model tries to predict the <strong>water level</strong> based on the 
          <strong> previous year's rainfall</strong>. The model follows a simple formula:
        </p>
        <p className="text-sm text-gray-700 mt-2 italic">
          Water Level = 0.005 × Rainfall - 213.157
        </p>
        <p className="text-sm text-gray-700 mt-2">
          - <strong>0.005</strong> is the slope: it means every 1 mm increase in rainfall raises the lake by 0.005 meters (5 mm).<br />
          - <strong>R² = 0.193</strong> means the model explains 19.3% of the variation in water level — it shows some influence, but other factors matter too.
        </p>
      </div>
    </div>
  );
}
