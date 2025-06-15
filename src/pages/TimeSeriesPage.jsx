import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import KinneretChart from "../components/KinneretChart";
import TemperatureChart from "../components/TemperatureChart";

export default function TimeSeriesPage() {
	return (
		<div className="bg-blue-50 min-h-screen flex flex-col">
			<Header />
			<main className="flex-grow flex flex-col items-center px-4 py-10">
				<h1 className="text-3xl font-bold text-blue-800 mb-4">
					Time-Series Charts
				</h1>
				<p className="text-blue-700 text-center max-w-2xl mb-8">
					Visualize how water levels in the Sea of Galilee change over time.
				</p>

				{/* Water Level Chart */}
				<div className="w-full max-w-4xl mb-10">
					<KinneretChart />
				</div>

				{/* Temperature Chart */}
				<div className="w-full max-w-4xl mb-10">
					<TemperatureChart />
				</div>
			</main>
			<Footer />
		</div>
	);
}
