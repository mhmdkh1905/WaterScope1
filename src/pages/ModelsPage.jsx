import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ModelsPage() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow px-4 py-10 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Model Insights
        </h1>
        <p className="text-blue-700 text-center mb-10 max-w-2xl mx-auto">
          Learn about the models used to analyze weather and water source relationships — including logistic population models, kriging spatial interpolation, ARIMA forecasting, and more.
        </p>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
            <h2 className="text-xl font-semibold text-teal-700 mb-2">📈 Logistic Model</h2>
            <p className="text-gray-600">
              The logistic model is used to simulate population or capacity growth that stabilizes at a carrying limit. In our case, it can simulate the upper bound of water storage under seasonal rainfall conditions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
            <h2 className="text-xl font-semibold text-teal-700 mb-2">🌍 Kriging (Spatial Interpolation)</h2>
            <p className="text-gray-600">
              Kriging is used to estimate water levels across areas with few measurement points. It creates continuous prediction surfaces based on geospatial statistics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
            <h2 className="text-xl font-semibold text-teal-700 mb-2">📊 ARIMA Forecasting</h2>
            <p className="text-gray-600">
              ARIMA is a time-series forecasting model used to predict future water levels or rainfall patterns based on past data, trends, and seasonality.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
