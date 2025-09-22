import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#222" },
  { name: "Affiliate", value: 135.18, color: "#B7F5D8" },
  { name: "Sponsored", value: 154.02, color: "#B7C7F5" },
  { name: "E-mail", value: 48.96, color: "#B7E6F5" },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const total = data.reduce((sum, entry) => sum + entry.value, 0);
    const entry = payload[0]; // PieTooltip passes only hovered slice
    return (
      <div style={{
        background: "black",
        color: "white",
        padding: "10px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        fontSize: "14px"
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{
            display: "inline-block",
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: entry.payload.color, // color from data
            marginRight: 8
          }}></span>
          {/* <span style={{ flex: 1 }}>{entry.name}</span> */}
          <span style={{ fontWeight: 500 }}>
            ({((entry.value / total) * 100).toFixed(1)}%)
          </span>
        </div>
      </div>
    );
  }
  return null;
};

function DonutChart() {
  return (
    <div style={{
      borderRadius: "16px",
      padding: "1.5rem",
      width: "100%",
      fontFamily: "Inter, sans-serif",
      background: "var(--tab-bg-color)"
    }}>
      <div style={{ fontWeight: 600, fontSize: "16px", marginBottom: "1rem" }}>Total Sales</div>
      <PieChart width={140} height={140} style={{ margin: "0 auto" }}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={60}
          dataKey="value"
          startAngle={90}
          endAngle={450}
          cornerRadius={5} // rounded edges on slices
        >
          {data.map((entry, idx) => (
            <Cell key={`cell-${idx}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
	<div style={{ marginTop: "1rem" }}>
        {data.map((item, idx) => (
          <div key={item.name} style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
            <span style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: item.color,
              marginRight: 8
            }}></span>
            <span style={{ flex: 1 }}>{item.name}</span>
            <span style={{ fontWeight: 500 }}>${item.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DonutChart;
