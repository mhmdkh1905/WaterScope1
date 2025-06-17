import React from 'react';
import StatCard from './StatCard';
import { useStatsData } from '../hooks/useStatsData';

const StatsCards = () => {
  const stats = useStatsData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsCards;
