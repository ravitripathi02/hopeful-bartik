import React from "react";
import Cards from "../components/Cards/Cards";
import BarChart from "../components/BarChart/CustomBarChart";
import RevenueChart from "../components/LineChart/RevenueChart";
import MapChart from "../components/MapChart/MapChart";
import Table from "../components/Table/Table";
import DonutChart from "../components/DonutChart/DonutChart";
import {useDeviceType} from "../hooks/useDevice"; // Assuming this hook returns 'mobile', 'tablet', or 'desktop'

function Home() {
  const device = useDeviceType();
  
  const twoColumn = device === "mobile" ? "1fr" : "1fr 1fr";
  const mainSideColumn = device === "mobile" ? "1fr" : "75% 25%";

  return (
    <div style={{ display: "flex", gap: "1rem", flexDirection: "column", padding: "1.5rem" }}>
      <h1>eCommerce</h1>

      {/* Cards + BarChart */}
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: twoColumn }}>
        <div>
          <Cards />
        </div>
        <div style={{ display: "flex", background: "var(--tab-bg-color)", borderRadius: "10px" }}>
          <BarChart />
        </div>
      </div>

      {/* RevenueChart + MapChart */}
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: mainSideColumn }}>
        <div style={{ width: "100%", display: "flex" }}>
          <RevenueChart />
        </div>
        <div style={{ width: device === "mobile" ? "100%" : "94%", display: "flex", background: "var(--tab-bg-color)", borderRadius: "10px" }}>
          <MapChart />
        </div>
      </div>

      {/* Table + DonutChart */}
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: mainSideColumn }}>
        <div style={{ display: "flex", width: "100%" }}>
          <Table />
        </div>
        <div style={{ width: device === "mobile" ? "100%" : "94%", display: "flex", background: "var(--tab-bg-color)", borderRadius: "10px" }}>
          <DonutChart />
        </div>
      </div>
    </div>
  );
}

export default Home;
