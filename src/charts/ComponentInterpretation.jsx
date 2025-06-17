import React from 'react';

const ComponentInterpretation = ({ data }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Component Interpretation</h3>
    <div className="space-y-4">
      {data.map((component, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-purple-600">{component.component}</span>
            <span className="text-sm text-gray-500">{component.variance}% variance</span>
          </div>
          <p className="text-gray-700">{component.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ComponentInterpretation;
