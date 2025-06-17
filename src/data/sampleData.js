export const waterLevelData = [
  { month: 'Jan 2020', level: -213.2, rainfall: 45, temperature: 18 },
  { month: 'Feb 2020', level: -213.1, rainfall: 52, temperature: 19 },
  { month: 'Mar 2020', level: -212.8, rainfall: 38, temperature: 22 },
  { month: 'Apr 2020', level: -212.5, rainfall: 25, temperature: 26 },
  { month: 'May 2020', level: -212.8, rainfall: 12, temperature: 30 },
  { month: 'Jun 2020', level: -213.1, rainfall: 3, temperature: 33 },
  { month: 'Jul 2020', level: -213.5, rainfall: 1, temperature: 35 },
  { month: 'Aug 2020', level: -213.8, rainfall: 2, temperature: 34 },
  { month: 'Sep 2020', level: -213.6, rainfall: 8, temperature: 31 },
  { month: 'Oct 2020', level: -213.3, rainfall: 22, temperature: 27 },
  { month: 'Nov 2020', level: -212.9, rainfall: 41, temperature: 23 },
  { month: 'Dec 2020', level: -212.6, rainfall: 55, temperature: 19 }
];

export const arimaForecast = [
  { period: 'Jan 2024', actual: -212.8, forecast: -212.7, upperBound: -212.2, lowerBound: -213.2 },
  { period: 'Feb 2024', actual: -212.5, forecast: -212.4, upperBound: -211.8, lowerBound: -213.0 },
  { period: 'Mar 2024', actual: null, forecast: -212.1, upperBound: -211.4, lowerBound: -212.8 },
  { period: 'Apr 2024', actual: null, forecast: -211.9, upperBound: -211.1, lowerBound: -212.7 },
  { period: 'May 2024', actual: null, forecast: -212.2, upperBound: -211.3, lowerBound: -213.1 },
  { period: 'Jun 2024', actual: null, forecast: -212.6, upperBound: -211.6, lowerBound: -213.6 }
];

export const pcaData = [
  { component: 'PC1', variance: 45.2, description: 'Seasonal Patterns' },
  { component: 'PC2', variance: 28.7, description: 'Temperature Effects' },
  { component: 'PC3', variance: 15.8, description: 'Rainfall Correlation' },
  { component: 'PC4', variance: 7.3, description: 'Human Activity' },
  { component: 'PC5', variance: 3.0, description: 'Other Factors' }
];
