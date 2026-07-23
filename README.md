# 💧 WaterScope

An interactive water-data analytics dashboard for exploring trends, forecasts, climate-related patterns, statistical analysis, and geographic water information through charts and maps.

[![GitHub Repository](https://img.shields.io/badge/GitHub%20Repository-181717?style=for-the-badge\&logo=github)](https://github.com/mhmdkh1905/WaterScope1)


[![Live Demo](https://img.shields.io/badge/Live%20Demo-22c55e?style=for-the-badge)](https://water-scope1.vercel.app/)


---

## Overview

WaterScope is a web-based data-analysis platform designed to present water-related information through interactive dashboards, statistical analysis, forecasting, charts, and geographic maps.

The application organizes different types of analysis into dedicated pages, allowing users to move between:

* General water-data overview
* ARIMA-based forecasting
* Principal Component Analysis
* Trend analysis
* Climate-impact analysis
* Interactive geographic maps
* Raw or processed data exploration

The project combines multiple visualization libraries to present complex analytical results in a clear and accessible interface.

---

## Table of Contents

* [Overview](#overview)
* [Main Features](#main-features)
* [Application Pages](#application-pages)
* [Technology Stack](#technology-stack)
* [Project Structure](#project-structure)
* [My Contribution](#my-contribution)
* [Getting Started](#getting-started)
* [Available Scripts](#available-scripts)
* [Screenshots](#screenshots)
* [Future Improvements](#future-improvements)
* [Author](#author)

---

## Main Features

### Water Data Overview

* Presents general water-related information
* Displays summary statistics and visual indicators
* Organizes key analytical results in a dashboard format
* Provides navigation to deeper analysis pages

### ARIMA Forecasting

* Includes a dedicated forecasting page
* Presents time-series forecasting results
* Supports visualization of historical and predicted values
* Helps users inspect possible future water-data patterns

### PCA Analysis

* Includes a dedicated Principal Component Analysis page
* Supports exploration of relationships between variables
* Helps simplify and visualize multidimensional data
* Presents analytical results through charts and visual components

### Trend Analysis

* Displays changes in water-related measurements over time
* Uses charts to present increases, decreases, and recurring patterns
* Supports comparison of time-based data
* Helps users identify long-term behavior

### Climate-Impact Analysis

* Includes a dedicated climate-impact page
* Presents relationships between climate-related factors and water data
* Uses data visualizations to communicate analytical findings
* Helps users explore possible environmental influences

### Geographic Visualization

* Displays water-related information on an interactive map
* Uses Leaflet and React Leaflet
* Supports geographic exploration of data
* Provides location-based visual context

### Data Exploration

* Includes a separate data page
* Allows users to inspect the data used by the application
* Supports transparent presentation of analytical information
* Complements the visualization and forecasting pages

### Shared Application Layout

* Reusable header and footer
* Consistent navigation across pages
* Responsive page structure
* Central application layout using React Router
* Tailwind CSS-based interface styling

---

## Application Pages

| Route            | Page           | Purpose                                 |
| ---------------- | -------------- | --------------------------------------- |
| `/`              | Home           | Main landing page                       |
| `/home`          | Home           | Alternative home route                  |
| `/overView`      | Overview       | Water-data summary and dashboard        |
| `/arimaForcast`  | ARIMA Forecast | Time-series forecasting                 |
| `/PCAAnalysis`   | PCA Analysis   | Principal Component Analysis            |
| `/trendAnalysis` | Trend Analysis | Time-based pattern exploration          |
| `/climateImpact` | Climate Impact | Climate and water relationship analysis |
| `/map`           | Map            | Geographic data visualization           |
| `/data`          | Data           | Data exploration and presentation       |

> Route names currently follow the implementation in the repository. They can later be standardized to lowercase kebab-case, such as `/overview`, `/arima-forecast`, and `/pca-analysis`.

---

## Technology Stack

| Technology       | Purpose                                  |
| ---------------- | ---------------------------------------- |
| React 19         | Component-based user interface           |
| Vite             | Development server and production builds |
| React Router     | Client-side routing                      |
| Tailwind CSS     | Utility-first styling                    |
| Chart.js         | Interactive chart rendering              |
| React Chart.js 2 | React integration for Chart.js           |
| Plotly.js        | Advanced interactive visualizations      |
| React Plotly.js  | React integration for Plotly             |
| Recharts         | React-based data charts                  |
| Leaflet          | Interactive maps                         |
| React Leaflet    | React integration for Leaflet            |
| Lucide React     | Interface icons                          |
| date-fns adapter | Date support for Chart.js                |

---

## Project Structure

```text
src/
├── components/
│   ├── Home.jsx
│   ├── OverView.jsx
│   ├── ArimaForcast.jsx
│   ├── PCAAnalysis.jsx
│   ├── TrendAnalysis.jsx
│   ├── ClimateImpact.jsx
│   └── Data.jsx
├── layouts/
│   ├── Header.jsx
│   └── Footer.jsx
├── pages/
│   └── MapPage.jsx
├── App.jsx
├── main.jsx
└── index.css
```

### Main Responsibilities

| File or Folder             | Purpose                              |
| -------------------------- | ------------------------------------ |
| `components/Home`          | Main landing-page content            |
| `components/OverView`      | General water-data overview          |
| `components/ArimaForcast`  | ARIMA forecast visualization         |
| `components/PCAAnalysis`   | PCA-related analysis                 |
| `components/TrendAnalysis` | Trend visualization                  |
| `components/ClimateImpact` | Climate-impact analysis              |
| `components/Data`          | Data display and exploration         |
| `pages/MapPage`            | Interactive geographic visualization |
| `layouts/Header`           | Shared application navigation        |
| `layouts/Footer`           | Shared application footer            |
| `App.jsx`                  | Main layout wrapper                  |
| `main.jsx`                 | Router and application entry point   |

---

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js 18 or newer
* npm

### Clone the Repository

```bash
git clone https://github.com/mhmdkh1905/WaterScope1.git
cd WaterScope1
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

The application should be available at:

```text
http://localhost:5173
```

---

## Available Scripts

### Start Development Server

```bash
npm run dev
```

Runs the application using the Vite development server.

### Create Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview Production Build

```bash
npm run preview
```

Runs the production build locally for testing.

### Run Linter

```bash
npm run lint
```

Checks the codebase for linting issues.

---

## Data Source

Add information here about the dataset used by WaterScope.

Example structure:

```text
Dataset name:
Dataset source:
Geographic coverage:
Time period:
Main variables:
License:
```

Do not add a data-source claim until the exact dataset and source are confirmed.

---

## Analytical Methods

WaterScope includes pages dedicated to several forms of analysis:

### ARIMA

Used for presenting time-series forecasting results.

### Principal Component Analysis

Used for exploring multidimensional relationships and reducing the complexity of multiple variables.

### Trend Analysis

Used for identifying changes and patterns over time.

### Climate-Impact Analysis

Used for examining relationships between climate-related measurements and water data.

> The README should describe only the calculations that are actually implemented. Add model parameters, evaluation metrics, and methodology once they are confirmed from the project code or analysis process.

---

## Future Improvements

* Standardize route names and component naming
* Correct `ArimaForcast` to `ArimaForecast`
* Correct `OverView` to `Overview`
* Add a custom 404 page
* Add loading and error states
* Add filters for date, location, and water indicators
* Add downloadable chart images
* Add CSV or Excel export
* Add data-source citations
* Add explanations for each analytical model
* Add forecasting evaluation metrics
* Add map legends and filters
* Improve mobile and tablet layouts
* Add accessibility improvements
* Add automated component tests
* Add end-to-end tests
* Add a deployed live demo
* Add TypeScript
* Add documentation for datasets and preprocessing

---

## Repository Topics

Recommended GitHub topics:

```text
react
vite
javascript
tailwindcss
water-data
data-analysis
data-visualization
arima
pca
forecasting
climate-analysis
plotly
chartjs
dashboard
```

---

## Repository Description

```text
Interactive water-data analytics dashboard with forecasting, PCA, trend analysis, climate-impact insights, charts, and geographic maps.
```

---

## Author

**Mohammad Khateeb**

* [GitHub](https://github.com/mhmdkh1905)
* [LinkedIn](https://www.linkedin.com/in/mohammad-khateeb-891332303)
* [Email](mailto:mhmd52kh@gmail.com)

---

## License

This project was developed for educational and portfolio purposes.
