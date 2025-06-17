import React from 'react';

const ChartContainer = ({ title, children, className = "" }) => (
  <div className={`bg-white p-6 rounded-xl shadow-lg ${className}`}>
    {title && <h3 className="text-2xl font-bold mb-6 text-gray-800">{title}</h3>}
    {children}
  </div>
);

export default ChartContainer;
