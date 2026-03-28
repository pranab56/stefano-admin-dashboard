"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const salesData = [
  { month: "Jan", exclusive: 180000, marketplace: 40000 },
  { month: "Feb", exclusive: 240000, marketplace: 55000 },
  { month: "Mar", exclusive: 195000, marketplace: 50000 },
  { month: "Apr", exclusive: 285000, marketplace: 65000 },
  { month: "May", exclusive: 310000, marketplace: 70000 },
  { month: "Jun", exclusive: 275000, marketplace: 60000 },
  { month: "Jul", exclusive: 400000, marketplace: 85000 },
  { month: "Aug", exclusive: 425000, marketplace: 92000 },
  { month: "Sep", exclusive: 385000, marketplace: 88000 },
  { month: "Oct", exclusive: 455000, marketplace: 102000 },
  { month: "Nov", exclusive: 495000, marketplace: 110000 },
  { month: "Dec", exclusive: 585000, marketplace: 125000 },
];

const categoryData = [
  { name: "Category A", value: 35, color: "#D3AB50" },
  { name: "Category B", value: 25, color: "#2C2E33" },
  { name: "Category C", value: 20, color: "#6C757D" },
  { name: "Category D", value: 15, color: "#E0E0E0" },
  { name: "Category E", value: 5, color: "#F5F5F5" },
];

const commissionData = [
  { month: "Jan", exclusive: 9200, marketplace: 4200 },
  { month: "Feb", exclusive: 12000, marketplace: 5800 },
  { month: "Mar", exclusive: 9800, marketplace: 5100 },
  { month: "Apr", exclusive: 14500, marketplace: 6800 },
  { month: "May", exclusive: 15800, marketplace: 7400 },
  { month: "Jun", exclusive: 13800, marketplace: 6200 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6  pb-5">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[#1E1F26]">Analytics</h1>
        <p className="text-sm text-gray-400 font-medium">Platform performance metrics and insights</p>
      </div>

      {/* Main Performance Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-[#1E1F26] mb-8">Sales Performance: Exclusive vs Marketplace</h2>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F2F2F2" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
                ticks={[0, 150000, 300000, 450000, 600000]}
              />
              <Tooltip
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                formatter={(value) => <span className="text-sm font-medium text-[#6B7280]">{value === 'exclusive' ? 'Exclusive Seller' : 'Marketplace Sellers'}</span>}
              />
              <Line
                type="monotone"
                dataKey="exclusive"
                stroke="#D3AB50"
                strokeWidth={2}
                dot={{ r: 4, fill: '#D3AB50', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="marketplace"
                stroke="#2C2E33"
                strokeWidth={2}
                dot={{ r: 4, fill: '#2C2E33', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Grid for Bottom Two Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales by Category */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-[#1E1F26] mb-6">Sales by Category</h2>
          <div className="h-[300px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={0}
                  dataKey="value"
                  label={({ cx, cy, midAngle, outerRadius, value }) => {
                    const radius = (outerRadius || 0) + 20;
                    const angle = midAngle || 0;
                    const x = cx + radius * Math.cos(-angle * (Math.PI / 180));
                    const y = cy + radius * Math.sin(-angle * (Math.PI / 180));
                    return (
                      <text x={x} y={y} fill="#9CA3AF" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" fontSize="12">
                        {value}
                      </text>
                    );
                  }}
                  labelLine={{ stroke: '#E5E7EB', strokeWidth: 1 }}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Commission Revenue Comparison */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-[#1E1F26] mb-6">Commission Revenue Comparison</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={commissionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F2F2F2" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  ticks={[0, 4000, 8000, 12000, 16000]}
                />
                <Tooltip />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="square"
                  formatter={(value) => <span className="text-sm font-medium text-[#6B7280]">{value === 'exclusive' ? 'Exclusive (5%)' : 'Marketplace (10%)'}</span>}
                />
                <Bar dataKey="exclusive" fill="#D3AB50" radius={[4, 4, 0, 0]} barSize={32} />
                <Bar dataKey="marketplace" fill="#2C2E33" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Key Metrics Summary */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-[#1E1F26] mb-8">Key Metrics Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-400">Avg. Exclusive Sale</p>
            <p className="text-3xl font-bold text-[#D3AB50]">$3,842</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-400">Avg. Marketplace Sale</p>
            <p className="text-3xl font-bold text-[#2C2E33]">$1,256</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-400">Conversion Rate</p>
            <p className="text-3xl font-bold text-[#1E1F26]">68.5%</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-400">Total Commission</p>
            <p className="text-3xl font-bold text-[#D3AB50]">$142,369</p>
          </div>
        </div>
      </div>
    </div>
  );
}
