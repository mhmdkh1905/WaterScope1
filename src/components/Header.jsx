// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-700">WaterScope</Link>
        <nav className="space-x-4 text-sm text-blue-600">
          <Link to="/map" className="hover:underline">Map</Link>
          <Link to="/timeseries" className="hover:underline">Time Series</Link>
          <Link to="/stats" className="hover:underline">Stats</Link>
          <Link to="/models" className="hover:underline">Models</Link>
          <Link to="/data" className="hover:underline">Data</Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;