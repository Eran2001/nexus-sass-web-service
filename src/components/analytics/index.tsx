import React from "react";
import {
  BarChart3,
  Users,
  MousePointerClick,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

/* -------------------- LOCAL DATA -------------------- */

const KPI_DATA = [
  {
    id: 1,
    title: "Page Views",
    value: "186,420",
    trend: "14%",
    up: true,
    icon: <BarChart3 size={20} />,
  },
  {
    id: 2,
    title: "Active Sessions",
    value: "32,814",
    trend: "6%",
    up: true,
    icon: <Users size={20} />,
  },
  {
    id: 3,
    title: "Conversion Rate",
    value: "4.8%",
    trend: "0.9%",
    up: true,
    icon: <MousePointerClick size={20} />,
  },
  {
    id: 4,
    title: "Revenue / User",
    value: "$42.60",
    trend: "1.2%",
    up: false,
    icon: <DollarSign size={20} />,
  },
];

const TRAFFIC_SOURCES = [
  { label: "Organic Search", value: 62 },
  { label: "Direct", value: 18 },
  { label: "Referrals", value: 12 },
  { label: "Social Media", value: 8 },
];

const KEY_INSIGHTS = [
  { label: "Avg. Session Duration", value: "3m 42s" },
  { label: "Bounce Rate", value: "38%" },
  { label: "Returning Users", value: "41%" },
  { label: "Avg. Pages / Session", value: "5.6" },
];

const TOP_CUSTOMERS = [
  { name: "Acme Corp", plan: "Enterprise", rev: "$24,000", gr: "+18%" },
  { name: "Nova Ltd", plan: "Pro", rev: "$12,600", gr: "+11%" },
  { name: "Zenify", plan: "Pro", rev: "$9,400", gr: "+6%" },
];

/* -------------------- COMPONENTS -------------------- */
type AnalyticsCardProps = {
  item: (typeof KPI_DATA)[number];
};

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ item }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center justify-between mb-4">
      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
        {item.title}
      </p>
      <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
        {item.icon}
      </div>
    </div>

    <div className="flex items-end gap-3">
      <h3 className="text-3xl font-black text-slate-900">{item.value}</h3>
      <span
        className={`flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${
          item.up ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
        }`}
      >
        {item.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
        {item.trend}
      </span>
    </div>
  </div>
);

/* -------------------- PAGE -------------------- */

const AnalyticsManagement = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Analytics Overview
        </h1>
        <p className="text-sm text-slate-500">
          Detailed insights into user behavior and revenue performance
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_DATA.map((item) => (
          <AnalyticsCard key={item.id} item={item} />
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Traffic Sources */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-extrabold text-slate-900 mb-6">
            Traffic Sources
          </h3>

          <div className="space-y-5">
            {TRAFFIC_SOURCES.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-slate-600">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {item.value}%
                  </span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-600 rounded-full"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-extrabold text-slate-900 mb-6">
            Key Insights
          </h3>

          <ul className="space-y-4">
            {KEY_INSIGHTS.map((item) => (
              <li key={item.label} className="flex justify-between text-sm">
                <span className="font-medium text-slate-500">{item.label}</span>
                <span className="font-bold text-slate-900">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50">
          <h3 className="text-lg font-extrabold text-slate-900">
            Top Performing Customers
          </h3>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
            <tr>
              <th className="text-left px-6 py-3">Customer</th>
              <th className="text-left px-6 py-3">Plan</th>
              <th className="text-right px-6 py-3">Revenue</th>
              <th className="text-right px-6 py-3">Growth</th>
            </tr>
          </thead>
          <tbody>
            {TOP_CUSTOMERS.map((row) => (
              <tr
                key={row.name}
                className="border-t border-gray-50 hover:bg-slate-50"
              >
                <td className="px-6 py-4 font-semibold text-slate-900">
                  {row.name}
                </td>
                <td className="px-6 py-4 text-slate-500">{row.plan}</td>
                <td className="px-6 py-4 text-right font-bold text-slate-900">
                  {row.rev}
                </td>
                <td className="px-6 py-4 text-right text-emerald-600 font-bold">
                  {row.gr}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsManagement;
