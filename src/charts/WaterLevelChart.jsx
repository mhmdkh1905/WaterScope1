import React from 'react';
import ChartContainer from '../components/ChartContainer';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const WaterLevelChart = ({ data }) => {
  return (
    <ChartContainer title="Water Level Trends">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1f2937', 
              border: 'none', 
              borderRadius: '8px',
              color: 'white'
            }} 
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="level" 
            stroke="#2563eb" 
            strokeWidth={3}
            dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
            name="Water Level (m)"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default WaterLevelChart;
