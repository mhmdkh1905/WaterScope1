import React from "react";
import rainfallData from "../data/rainfall_vs_water_level_fitted.json";
import temperatureData from "../data/temperature_vs_water_level_fitted.json";
import combinedHumidityData from "../data/combined_climate_model_with_humidity.json";
import humidityData from "../data/humidity_vs_water_level_fitted.json";
import ImpactPieChart from "../charts/ImpactPieChart";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const ClimateImpact = () => {
	return (
		<div className="bg-white p-8 rounded-xl shadow-lg space-y-12">
			<h2 className="text-3xl font-bold text-gray-800">
				Climate Impact on Water Levels
			</h2>
			<ImpactPieChart />
			{/* 🌧 Rainfall vs Water Level */}
			<section>
				<h3 className="text-xl font-semibold text-gray-700 mb-4">
					🌧 Rainfall vs. Water Level
				</h3>
				<ResponsiveContainer width="100%" height={400}>
					<LineChart data={rainfallData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="year" />
						<YAxis
							yAxisId="left"
							label={{
								value: "Water Level (m)",
								angle: -90,
								position: "insideLeft",
							}}
						/>
						<YAxis
							yAxisId="right"
							orientation="right"
							label={{
								value: "Rainfall (mm)",
								angle: -90,
								position: "insideRight",
							}}
						/>
						<Tooltip />
						<Legend />
						<Line
							yAxisId="left"
							type="monotone"
							dataKey="level"
							stroke="#2563eb"
							name="Water Level"
						/>
						<Line
							yAxisId="left"
							type="monotone"
							dataKey="fitted_level"
							stroke="#f59e0b"
							strokeDasharray="4 4"
							name="Trend Line"
						/>
						<Line
							yAxisId="right"
							type="monotone"
							dataKey="rainfall"
							stroke="#16a34a"
							name="Rainfall"
						/>
					</LineChart>
				</ResponsiveContainer>
				<div className="text-gray-600 mt-3 space-y-1">
					<p>
						<strong>Model used:</strong> Simple Linear Regression
					</p>
					<p>
						<strong>Description:</strong> Predicts water level based on yearly
						rainfall amounts.
					</p>
					<p>
						<strong>Equation:</strong>{" "}
						<code>level = 0.00297 × rainfall - 212.83</code>
					</p>
					<p>
						<strong>R²:</strong> 0.069 → The model explains ~7% of the variation
						in water level.
					</p>
					<p>
						<strong>Pearson’s r:</strong> 0.26 → Weak positive correlation
						between rainfall and water level.
					</p>
					<p>
						This model shows a weak relationship. Water level slightly increases
						with rainfall, but other factors likely dominate.
					</p>
				</div>
			</section>

			{/* 🌡 Temperature vs Water Level */}
			<section>
				<h3 className="text-xl font-semibold text-gray-700 mb-4">
					🌡 Temperature vs. Water Level
				</h3>
				<ResponsiveContainer width="100%" height={400}>
					<LineChart data={temperatureData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="year" />
						<YAxis
							yAxisId="left"
							label={{
								value: "Water Level (m)",
								angle: -90,
								position: "insideLeft",
							}}
						/>
						<YAxis
							yAxisId="right"
							orientation="right"
							label={{
								value: "Temperature (°C)",
								angle: -90,
								position: "insideRight",
							}}
						/>
						<Tooltip />
						<Legend />
						<Line
							yAxisId="left"
							type="monotone"
							dataKey="level"
							stroke="#2563eb"
							name="Water Level"
						/>
						<Line
							yAxisId="left"
							type="monotone"
							dataKey="fitted_level"
							stroke="#f97316"
							strokeDasharray="4 4"
							name="Trend Line"
						/>
						<Line
							yAxisId="right"
							type="monotone"
							dataKey="temperature"
							stroke="#dc2626"
							name="Temperature"
						/>
					</LineChart>
				</ResponsiveContainer>
				<div className="text-gray-600 mt-3 space-y-1">
					<p>
						<strong>Model used:</strong> Simple Linear Regression
					</p>
					<p>
						<strong>Description:</strong> Predicts water level based on average
						yearly temperature.
					</p>
					<p>
						<strong>Equation:</strong>{" "}
						<code>level = 0.344 × temp - 219.46</code>
					</p>
					<p>
						<strong>R²:</strong> 0.038 → The model explains ~3.8% of the
						variation in water level.
					</p>
					<p>
						<strong>Pearson’s r:</strong> 0.19 → Very weak correlation between
						temperature and water level.
					</p>
					<p>
						This suggests temperature alone is not a strong predictor of water
						level changes.
					</p>
				</div>
			</section>
			{/* 💨 Humidity vs Water Level */}
			<section>
				<h3 className="text-xl font-semibold text-gray-700 mb-4">
					💨 Humidity vs. Water Level
				</h3>
				<ResponsiveContainer width="100%" height={400}>
					<LineChart data={humidityData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="year" />
						<YAxis
							yAxisId="left"
							label={{
								value: "Water Level (m)",
								angle: -90,
								position: "insideLeft",
							}}
						/>
						<YAxis
							yAxisId="right"
							orientation="right"
							label={{
								value: "Humidity (%)",
								angle: -90,
								position: "insideRight",
							}}
						/>
						<Tooltip />
						<Legend />
						<Line
							yAxisId="left"
							type="monotone"
							dataKey="level"
							stroke="#2563eb"
							name="Water Level"
						/>
						<Line
							yAxisId="left"
							type="monotone"
							dataKey="fitted"
							stroke="#f97316"
							strokeDasharray="4 4"
							name="Fitted Level"
						/>
						<Line
							yAxisId="right"
							type="monotone"
							dataKey="humidity"
							stroke="#22c55e"
							name="Humidity"
						/>
					</LineChart>
				</ResponsiveContainer>

				<div className="text-gray-600 mt-3 space-y-1">
					<p>
						<strong>Model used:</strong> Simple Linear Regression
					</p>
					<p>
						<strong>Description:</strong> Predicts water level based on yearly
						average humidity.
					</p>
					<p>
						<strong>Equation:</strong>{" "}
						<code>level = -0.0642 × humidity + -207.40</code>
					</p>
					<p>
						<strong>R²:</strong> 0.014 → The model explains ~1.4% of the
						variation in water level.
					</p>
					<p>
						<strong>Pearson’s r:</strong> -0.12 → Very weak negative correlation
						between humidity and water level.
					</p>
					<p>
						Humidity alone does not strongly influence water levels. Other
						climatic and non-climatic factors are likely more significant.
					</p>
				</div>
			</section>

			{/* 🧠 Updated Combined Model: Rainfall + Temperature + Humidity → Water Level */}
			<section>
				<h3 className="text-xl font-semibold text-gray-700 mb-4">
					🧠 Combined Model: Rainfall + Temperature + Humidity → Water Level
				</h3>
				<ResponsiveContainer width="100%" height={400}>
					<LineChart data={combinedHumidityData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="year" />
						<YAxis
							label={{
								value: "Water Level (m)",
								angle: -90,
								position: "insideLeft",
							}}
						/>
						<Tooltip
							content={({ active, payload, label }) => {
								if (active && payload && payload.length > 0) {
									const data = payload[0].payload;
									return (
										<div className="bg-white border rounded-lg p-4 shadow text-sm space-y-1">
											<div>
												<strong className="text-gray-700">Year:</strong> {label}
											</div>
											<div>
												<strong className="text-blue-600">Water Level:</strong>{" "}
												{data.level} m
											</div>
											<div>
												<strong className="text-purple-600">
													Predicted Level:
												</strong>{" "}
												{data.fitted_level} m
											</div>
											<div>
												<strong className="text-green-600">Rainfall:</strong>{" "}
												{data.rainfall} mm
											</div>
											<div>
												<strong className="text-red-600">Temperature:</strong>{" "}
												{data.temperature} °C
											</div>
											<div>
												<strong className="text-sky-600">Humidity:</strong>{" "}
												{data.humidity} %
											</div>
										</div>
									);
								}
								return null;
							}}
						/>
						<Legend />
						<Line
							type="monotone"
							dataKey="level"
							stroke="#2563eb"
							name="Water Level"
						/>
						<Line
							type="monotone"
							dataKey="fitted_level"
							stroke="#9333ea"
							strokeDasharray="4 4"
							name="Predicted Level"
						/>
					</LineChart>
				</ResponsiveContainer>
				<div className="text-gray-600 mt-3 space-y-1">
					<p>
						<strong>Model used:</strong> Multiple Linear Regression
					</p>
					<p>
						<strong>Description:</strong> Predicts water level using rainfall,
						temperature, and humidity combined.
					</p>
					<p>
						<strong>Equation:</strong>{" "}
						<code>
							level = 0.0071 × rainfall - 0.0862 × temp - 0.4562 × humidity -
							181.36
						</code>
					</p>
					<p>
						<strong>R²:</strong> 0.337 → This model explains ~33.7% of the
						variation in water level.
					</p>
					<p>
						The addition of humidity improved the model significantly. However,
						it still indicates that climate alone does not fully explain water
						level changes.
					</p>
				</div>
			</section>
			{/* 🔚 Other Influencing Factors */}
			<section className="pt-10 border-t border-gray-200">
				<h3 className="text-2xl font-bold text-gray-800 mb-4">
					Other Factors Influencing the Sea of Galilee
				</h3>

				<div className="space-y-4 text-gray-700">
					<p>
						Our climate model, which combines <strong>rainfall</strong>,{" "}
						<strong>temperature</strong>, and <strong>humidity</strong>,
						explains approximately <strong>33.7%</strong> of the variation in
						water levels. While this is a meaningful improvement, it also shows
						that <strong>66% of the changes</strong> remain unexplained by
						weather alone.
					</p>

					<p>
						This indicates that <strong>other, non-climatic factors</strong>{" "}
						likely play a major role in the fluctuations of the Sea of Galilee’s
						water level:
					</p>

					<ul className="list-disc pl-6 space-y-3">
						<li>
							<strong>🚰 Water Pumping & Usage:</strong> Significant quantities
							are extracted for agriculture, urban supply, and industry. This
							human activity reduces levels regardless of rainfall.
						</li>
						<li>
							<strong>🚛 National Water Carrier:</strong> Israel’s main water
							distribution system draws directly from the lake, further
							influencing natural levels.
						</li>
						<li>
							<strong>📊 Government Policy:</strong> Water storage, export
							regulations, and emergency drought decisions also impact the lake.
						</li>
						<li>
							<strong>🌊 Subsurface Flows:</strong> Underground springs,
							seepage, and geological features may cause hidden inflows or
							outflows.
						</li>
					</ul>

					<p className="pt-2">
						These factors must be considered alongside weather when building any
						long-term strategy to understand or manage the lake’s water
						behavior.
					</p>

					{/* 📚 Data Sources
					<div className="pt-4">
						<h4 className="text-lg font-semibold text-gray-800">
							📚 Data Sources:
						</h4>
						<ul className="list-disc pl-6 text-sm text-gray-600 space-y-1">
							<li>
								Rainfall & Humidity Data:{" "}
								<a
									className="text-blue-600 underline"
									href="https://ims.gov.il/en/data_gov"
									target="_blank"
								>
									Israel Meteorological Service
								</a>
							</li>
							<li>
								Water Level Records:{" "}
								<a
									className="text-blue-600 underline"
									href="https://data.gov.il/dataset/kinneret-level"
									target="_blank"
								>
									Israel Water Authority
								</a>
							</li>
							<li>
								Combined Model Generated: Based on analysis in this system using
								linear regression (Google Colab)
							</li>
						</ul>
					</div> */}
				</div>
			</section>
		</div>
	);
};

export default ClimateImpact;
