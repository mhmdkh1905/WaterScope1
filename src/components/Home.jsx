import React from 'react';
import { TrendingUp, Droplets, Thermometer, Wind } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 min-h-screen py-20 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Weather Impact on <span className="text-blue-600">Israel's Water Sources</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Advanced environmental monitoring system analyzing the complex relationships
          between weather patterns and water resources across Israel, with specialized focus on
          the Sea of Galilee.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <Card
          icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
          title="Trend Analysis"
          desc="Linear regression models"
          borderColor="border-blue-100"
        />
        <Card
          icon={<Droplets className="w-6 h-6 text-green-600" />}
          title="Water Quality"
          desc="PCA & Kriging analysis"
          borderColor="border-green-100"
        />
        <Card
          icon={<Thermometer className="w-6 h-6 text-orange-500" />}
          title="Climate Data"
          desc="Time series monitoring"
          borderColor="border-orange-100"
        />
        <Card
          icon={<Wind className="w-6 h-6 text-purple-500" />}
          title="Forecasting"
          desc="ARIMA predictions"
          borderColor="border-purple-100"
        />
      </div>
    </div>
  );
};

const Card = ({ icon, title, desc, borderColor }) => (
  <div className={`bg-white rounded-xl p-6 text-center shadow-sm ${borderColor} border`}>
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-md font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-500 mt-1">{desc}</p>
  </div>
);

export default Home;