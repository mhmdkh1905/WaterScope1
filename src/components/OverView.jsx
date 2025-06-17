// OverView.jsx
import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

import waterLevelData from "../data/kinneret_monthly_avg_2024.json";
import rainfallData from "../data/rainfall_2024_by_month.json";

const OverView = () => {
	return (
		<div className="bg-blue-50 min-h-screen py-16 px-4">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold text-gray-800">
					Sea of Galilee Analysis
				</h2>
				<p className="text-gray-600 mt-2 text-sm">
					Comprehensive monitoring of Israel's primary freshwater reservoir
				</p>
			</div>

			{/* Stats Cards */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
				<StatCard
					title="Current Water Level"
					value="-208.12m"
					subtext="2.3m above red line"
					color="blue"
				/>
				<StatCard
					title="Water Temperature"
					value="24.8°C"
					subtext="Seasonal average"
					color="orange"
				/>
				<StatCard
					title="Rainfall"
					value="82 mm"
					subtext="Monthly average"
					color="green"
				/>
			</div>

			{/* Charts */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
				{/* Water Level Chart */}
				<div className="bg-white p-6 rounded-xl shadow">
					<h3 className="text-lg font-semibold text-blue-700 mb-4">
						🌊 Monthly Water Level (2024)
					</h3>
					<ResponsiveContainer width="100%" height={300}>
						<LineChart data={waterLevelData}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="month" />
							<YAxis
								domain={["dataMin - 0.2", "dataMax + 0.2"]}
								tickFormatter={(value) => value.toFixed(2)}
							/>
							<Tooltip />
							<Line
								type="monotone"
								dataKey="level"
								stroke="#3b82f6"
								strokeWidth={2}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>

				{/* Rainfall Chart */}
				<div className="bg-white p-6 rounded-xl shadow">
					<h3 className="text-lg font-semibold text-green-700 mb-4">
						🌧 Monthly Rainfall (2024)
					</h3>
					<ResponsiveContainer width="100%" height={300}>
						<LineChart data={rainfallData}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="month" />
							<YAxis />
							<Tooltip />
							<Line
								type="monotone"
								dataKey="rainfall"
								stroke="#10b981"
								strokeWidth={2}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
};

const StatCard = ({ title, value, subtext, color }) => {
	const colorMap = {
		blue: "text-blue-600 border-blue-200",
		orange: "text-orange-500 border-orange-200",
		green: "text-green-600 border-green-200",
	};

	const progressColor = {
		blue: "bg-blue-500",
		orange: "bg-orange-500",
		green: "bg-green-500",
	}[color];

	return (
		<div
			className={`bg-white border ${colorMap[color]} rounded-xl p-6 shadow-sm`}
		>
			<h4 className={`text-sm font-semibold ${colorMap[color]}`}>{title}</h4>
			<p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
			<p className="text-sm text-gray-500 mt-1">{subtext}</p>
			<div className="h-2 bg-gray-200 rounded-full mt-4">
				<div
					className={`h-full rounded-full ${progressColor}`}
					style={{ width: "70%" }}
				></div>
			</div>
		</div>
	);
};

const ChartCard = ({ title, children }) => (
	<div className="bg-white rounded-xl p-6 shadow-sm">
		<h4 className="text-md font-semibold text-gray-800 mb-4">{title}</h4>
		{children}
	</div>
);

export default OverView;
