import React, { useState } from "react";

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const KrigingModel = () => {
  const [selectedMonth, setSelectedMonth] = useState("Jan");

  const imagePath = `/kriging_outputs/rainfall_${selectedMonth}.png`;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">🌧️ Rainfall Kriging Visualization – Lake Kinneret</h2>

      <label htmlFor="month-select" className="block text-lg mb-2 font-medium">
        Select Month:
      </label>
      <select
        id="month-select"
        className="mb-6 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {months.map((month) => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>

      <div className="border rounded-lg shadow overflow-hidden">
        <img
          src={imagePath}
          alt={`Rainfall Kriging - ${selectedMonth}`}
          className="w-full object-contain"
        />
      </div>

      <p className="mt-6 text-gray-700 leading-relaxed">
        This map displays interpolated rainfall data across key Kinneret beaches using the
        <strong> Ordinary Kriging</strong> geostatistical method.
        Data was collected for the 12 months of 2024–2025 at Amnun, Gofra, and Gai Beaches.
      </p>
    </div>
  );
};

export default KrigingModel;
