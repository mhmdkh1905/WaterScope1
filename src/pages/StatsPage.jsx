import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegressionChart from "../components/RegressionChart";
import Weather3DRegression from "../components/Weather3DRegression";

export default function StatsPage() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center px-4 py-10">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Statistical Analysis</h1>
        <p className="text-blue-700 text-center max-w-2xl mb-8">
          Analyze statistical relationships between environmental variables such as rainfall, temperature, and water levels.
        </p>

        <div className="w-full max-w-4xl space-y-8">
          <div className="bg-white rounded-xl p-6 shadow border border-blue-100 text-center text-blue-500">
            <RegressionChart />
            <Weather3DRegression />
          </div>
          <div className="bg-white rounded-xl p-6 shadow border border-blue-100 text-center text-blue-500">
            [ANOVA Results Placeholder]
          </div>
          <div className="bg-white rounded-xl p-6 shadow border border-blue-100 text-center text-blue-500">
            [PCA Visualization Placeholder]
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
