import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', actual: 18, projected: 20 },
  { name: 'Feb', actual: 20, projected: 24 },
  { name: 'Mar', actual: 19, projected: 22 },
  { name: 'Apr', actual: 21, projected: 28 },
  { name: 'May', actual: 15, projected: 18 },
  { name: 'Jun', actual: 20, projected: 24 },
];

const CustomBarChart = () => {
  return (
    <div
      style={{
        background: 'var(--tab-bg-color)',
        borderRadius: '12px',
        padding: '1.5rem',
        width: '100%',
        maxWidth: '600px',
      }}
    >
      <div style={{ fontWeight: 600, fontSize: '16px', marginBottom: '1rem' }}>
        Projections vs Actuals
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} barCategoryGap="30%" activeBar={false}>
          {/* only horizontal grid lines, no chart border */}
         <CartesianGrid
    vertical={false}
    stroke="#E5E7EB"
    // horizontalCoordinatesGenerator={({ yAxis }) => {
    //   // generate all horizontal ticks EXCEPT the very top one
    //   const ticks = yAxis.scale.ticks();
    //   return ticks.slice(0, -1).map((t) => yAxis.scale(t));
    // }}
  />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis
            tickFormatter={(v) => `${v}M`}
            domain={[0, 30]}
            ticks={[0, 10, 20, 30]}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => `${value}M`}
            cursor={{ fill: 'transparent' }}
          />
          <Bar dataKey="projected" fill="#7CA7D9" stackId="a" />
          <Bar dataKey="actual" fill="#CFE3F7" stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
