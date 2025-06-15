import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MapPage() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center px-4 py-10">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Interactive Map</h1>
        <p className="text-blue-700 text-center max-w-2xl mb-8">
          This map will display real-time water sources across Israel,
          including levels, status, and forecast layers.
        </p>

        <div className="w-full h-[500px] max-w-5xl bg-white border border-blue-200 rounded-xl shadow-inner flex items-center justify-center text-blue-400">
          {/* Map will go here */}
          [Map placeholder – coming soon]
        </div>
      </main>

      <Footer />
    </div>
  );
}