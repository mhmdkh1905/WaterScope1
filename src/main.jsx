import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Dashboard from './sections/Dashboard';
import Overview from './sections/Overview';
import ARIMAForecast from './sections/ARIMAForecast';
import PCAAnalysis from './sections/PCAAnalysis';
import KrigingModel from './sections/KrigingModel';
import TrendAnalysis from './sections/TrendAnalysis';
import ClimateImpact from './sections/ClimateImpact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          { index: true, element: <Overview /> },
          { path: 'overview', element: <Overview /> },
          { path: 'arima-forecast', element: <ARIMAForecast /> },
          { path: 'pca-analysis', element: <PCAAnalysis /> },
          { path: 'kriging-model', element: <KrigingModel /> },
          { path: 'trend-analysis', element: <TrendAnalysis /> },
          { path: 'climate-impact', element: <ClimateImpact /> },
        ],
      },
    ],
  },
]);

export default function Main() {
  return <RouterProvider router={router} />;
}