import React from "react";
import Styles from "./RevenueChart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", current: 10, previous: 15 },
  { month: "Feb", current: 12, previous: 12 },
  { month: "Mar", current: 8, previous: 10 },
  { month: "Apr", current: 15, previous: 13 },
  { month: "May", current: 20, previous: 18 },
  { month: "Jun", current: 25, previous: 22 }
];

// Custom tooltip with avatar
// const CustomTooltip = ({ active, payload }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div style={{ background: "#fff", padding: "10px", borderRadius: "8px", boxShadow: "0px 0px 5px #ccc", display: "flex", alignItems: "center" }}>
//         <img
//           src="https://i.pravatar.cc/40" // Replace with your avatar
//           alt="avatar"
//           style={{ borderRadius: "50%", marginRight: "10px" }}
//         />
//         <div>
//           <p>{`Current: $${payload[0].value}M`}</p>
//           <p>{`Previous: $${payload[1].value}M`}</p>
//         </div>
//       </div>
//     );
//   }
//   return null;
// };

export default function RevenueChart() {
  return (
    <div style={{
      background: "var(--tab-bg-color)",
      borderRadius: "12px",
      padding: "1.5rem",
      width: "100%"
    }}
    >
      <h3 style={{ marginBottom: "10px" }}>
        Revenue
        <span style={{color:"var(--primary-text-color"}}> | </span>
        <span style={{ fontWeight: "normal", fontSize: "12px" }}>
          <span className={Styles.circle} style={{ background: "#4A90E2" }}></span>Current Week</span> 
          <span style={{ fontWeight: "bold", fontSize: "12px", paddingRight: "12px" }}>$58,211</span>  
          <span style={{ fontWeight: "normal", fontSize: "12px" }}><span className={Styles.circle} style={{ background: "#000" }}></span>Previous Week</span> <span style={{ fontWeight: "bold", fontSize: "12px" }}>$68,768</span>
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `${value}M`} />
          {/* <Tooltip content={<CustomTooltip />} /> */}
          {/* <Legend /> */}
          <Line type="monotone" dataKey="current" stroke="#4A90E2" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="previous" stroke="#000" strokeWidth={2} dot={false} strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
