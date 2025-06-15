import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardLink from "../components/CardLink";

import { Map, LineChart, BarChart, Settings, Database } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 text-center">
          WaterScope 🌍
        </h1>
        <p className="text-lg text-blue-700 max-w-2xl mb-10 text-center">
          Explore how weather affects Israel's water sources — with a special focus on the Sea of Galilee.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
          <CardLink
            to="/map"
            icon={Map}
            title="Interactive Map"
            description="View water sources and spatial forecasts."
          />
          <CardLink
            to="/timeseries"
            icon={LineChart}
            title="Time-Series Charts"
            description="Explore changes in water levels and rainfall over time."
          />
          <CardLink
            to="/stats"
            icon={BarChart}
            title="Statistical Analysis"
            description="Analyze correlations between environmental variables."
          />
          <CardLink
            to="/models"
            icon={Settings}
            title="Model Insights"
            description="Explanations and demos of ecological models."
          />
          <CardLink
            to="/data"
            icon={Database}
            title="Data Files"
            description="Access downloadable or visualized datasets."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}