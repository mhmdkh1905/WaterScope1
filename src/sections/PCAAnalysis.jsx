import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ComponentChart from '../charts/ComponentChart';
import ComponentInterpretation from '../charts/ComponentInterpretation';

const PCAAnalysis = ({ pcaData }) => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <SectionHeader 
          title="Principal Component Analysis"
          description="PCA reveals the main factors driving water level variations by reducing dimensionality and identifying key patterns in the ecosystem data."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ComponentChart data={pcaData} />
          <ComponentInterpretation data={pcaData} />
        </div>
      </div>
    </div>
  );
};

export default PCAAnalysis;
