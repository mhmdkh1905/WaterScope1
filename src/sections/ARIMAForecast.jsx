import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ForecastChart from '../charts/ForecastChart';

const ARIMAForecast = ({ arimaForecast }) => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <SectionHeader 
          title="ARIMA Forecasting Model"
          description="AutoRegressive Integrated Moving Average (ARIMA) model for predicting future water levels based on historical patterns and seasonal trends."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ModelParameters />
          <ForecastAccuracy />
        </div>

        <ForecastChart data={arimaForecast} />
      </div>
    </div>
  );
};

const ModelParameters = () => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Model Parameters</h3>
    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">ARIMA Order:</span>
        <span className="text-blue-600">(2,1,2)</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Seasonal:</span>
        <span className="text-blue-600">(1,1,1)[12]</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">AIC Score:</span>
        <span className="text-blue-600">-234.7</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">RMSE:</span>
        <span className="text-blue-600">0.18m</span>
      </div>
    </div>
  </div>
);

const ForecastAccuracy = () => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Forecast Accuracy</h3>
    <div className="bg-green-50 p-4 rounded-lg">
      <div className="text-3xl font-bold text-green-600 mb-2">87.3%</div>
      <p className="text-gray-600">Model accuracy based on backtesting with 24-month validation period</p>
    </div>
  </div>
);

export default ARIMAForecast;
