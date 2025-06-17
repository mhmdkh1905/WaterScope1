import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsCards from '../components/StatsCards';
import WaterLevelChart from '../charts/WaterLevelChart';

const Overview = ({ waterLevelData }) => {
  return (
    <div className="space-y-8">
      <HeroSection />
      <StatsCards />
      <WaterLevelChart data={waterLevelData} />
    </div>
  );
};

export default Overview;
