import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DataPage() {
  const dataFiles = [
    {
      name: "Rainfall Data",
      filename: "rainfall.json",
      description: "Monthly and yearly rainfall records in Israel",
    },
    {
      name: "Temperature Data",
      filename: "temperature.json",
      description: "Historical average temperatures and trends",
    },
    {
      name: "Water Levels - Sea of Galilee",
      filename: "water_levels.json",
      description: "Daily and seasonal water levels of the Kinneret",
    },
  ];

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow px-4 py-10 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Data Files
        </h1>
        <p className="text-blue-700 text-center mb-10 max-w-2xl mx-auto">
          Browse and download datasets used in this project. All files are in JSON format and can be viewed or used for further analysis.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataFiles.map((file, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow border border-blue-100 p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-teal-700">
                  {file.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {file.description}
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href={`/data/${file.filename}`}
                  target="_blank"
                  className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700"
                >
                  View
                </a>
                <a
                  href={`/data/${file.filename}`}
                  download
                  className="text-sm bg-green-600 text-white px-3 py-1.5 rounded hover:bg-green-700"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
