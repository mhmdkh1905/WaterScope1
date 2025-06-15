import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import TimeSeriesPage from "./pages/TimeSeriesPage";
import StatsPage from "./pages/StatsPage";
import ModelsPage from "./pages/ModelsPage";
import DataPage from "./pages/DataPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/timeseries" element={<TimeSeriesPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/data" element={<DataPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);