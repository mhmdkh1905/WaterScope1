import React from 'react';

const SectionHeader = ({ title, description }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold mb-4 text-gray-800">{title}</h2>
    <p className="text-lg text-gray-600">{description}</p>
  </div>
);

export default SectionHeader;
