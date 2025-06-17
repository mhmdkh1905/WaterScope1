import React from 'react';

const StatCard = ({ icon: Icon, value, label, description, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
    <div className="flex items-center justify-between mb-4">
      <Icon className={`${color} w-8 h-8`} />
      <span className="text-2xl font-bold text-gray-800">{value}</span>
    </div>
    <h3 className="font-semibold text-gray-700">{label}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

export default StatCard;
