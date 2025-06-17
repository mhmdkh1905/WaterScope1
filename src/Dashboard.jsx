import React, { useState } from 'react';
import { Waves } from 'lucide-react';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Sections
import Overview from './sections/Overview';
import ARIMAForecast from './sections/ARIMAForecast';
import PCAAnalysis from './sections/PCAAnalysis';
import KrigingModel from './sections/KrigingModel';
import TrendAnalysis from './sections/TrendAnalysis';
import ClimateImpact from './sections/ClimateImpact';

// Sample Data
import { waterLevelData, arimaForecast, pcaData } from './data/sampleData';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview waterLevelData={waterLevelData} />;
      case 'arima':
        return <ARIMAForecast arimaForecast={arimaForecast} />;
      case 'pca':
        return <PCAAnalysis pcaData={pcaData} />;
      case 'kriging':
        return <KrigingModel />;
      case 'trends':
        return <TrendAnalysis waterLevelData={waterLevelData} />;
      case 'climate':
        return <ClimateImpact waterLevelData={waterLevelData} />;
      default:
        return <Overview waterLevelData={waterLevelData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <div className="flex">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
