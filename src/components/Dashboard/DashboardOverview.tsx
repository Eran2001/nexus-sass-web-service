
import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  UserPlus, 
  MoreHorizontal,
  ChevronRight,
  AlertCircle,
  Clock,
  Briefcase,
  Ticket,
  CreditCard
} from 'lucide-react';
import { StatCardProps, Activity } from '../../types';

const StatCard: React.FC<StatCardProps> = ({ label, value, trend, isUp, icon }) => (
  <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-emerald-100">
    <div className="flex items-center justify-between mb-4">
      <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</p>
      <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
        {icon}
      </div>
    </div>
    <div className="flex items-end gap-3">
      <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{value}</h3>
      <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold ${isUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
        {isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
        {trend}
      </span>
    </div>
  </div>
);

const activities: Activity[] = [
  { id: '1', user: 'James R.', action: 'upgraded plan', meta: 'Pro Subscription', time: '2 mins ago', iconType: 'user' },
  { id: '2', user: 'Acme Corp', action: 'signed up', meta: 'New Account', time: '45 mins ago', iconType: 'domain' },
  { id: '3', user: 'Invoice #1024', action: 'paid', meta: '$2,400.00', time: '3 hours ago', iconType: 'billing' },
  { id: '4', user: 'Server Alert:', action: 'US-East', meta: 'High Latency', time: '5 hours ago', iconType: 'alert' },
  { id: '5', user: 'New Support Ticket', action: '', meta: 'Billing Inquiry', time: '6 hours ago', iconType: 'ticket' },
];

const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Revenue" value="$124,500" trend="12%" isUp={true} icon={<DollarSign size={20} />} />
        <StatCard label="Active Users" value="1,240" trend="5%" isUp={true} icon={<Users size={20} />} />
        <StatCard label="New Signups" value="85" trend="8%" isUp={true} icon={<UserPlus size={20} />} />
        <StatCard label="Churn Rate" value="2.1%" trend="0.4%" isUp={false} icon={<TrendingDown size={20} />} />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main Chart Section */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Revenue Trends</h3>
              <p className="text-sm text-slate-500">Last 6 Months Performance</p>
            </div>
            <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-400">
              <MoreHorizontal size={20} />
            </button>
          </div>

          <div className="flex items-end gap-3 mb-10">
            <span className="text-4xl font-black text-slate-900 tracking-tighter">$642,000</span>
            <span className="flex items-center gap-1 text-emerald-600 font-bold text-sm bg-emerald-50 px-2 py-0.5 rounded-full">
              <TrendingUp size={16} />
              15%
            </span>
            <span className="text-slate-400 text-sm font-medium">vs last period</span>
          </div>

          {/* Simple Mock Chart */}
          <div className="flex-1 min-h-[300px] relative mt-4">
             <div className="absolute inset-0 flex items-end justify-between px-2">
                {[40, 60, 45, 80, 70, 95].map((h, i) => (
                  <div key={i} className="w-[12%] group relative flex flex-col items-center">
                    <div 
                      className="w-full bg-emerald-600/10 rounded-t-xl transition-all group-hover:bg-emerald-600/20" 
                      style={{ height: `${h}%` }}
                    >
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        ${h * 10},000
                      </div>
                    </div>
                    <span className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}
                    </span>
                  </div>
                ))}
             </div>
             {/* Simple Line SVG Over the Bars */}
             <svg className="absolute inset-0 w-full h-[85%] pointer-events-none" preserveAspectRatio="none">
                <path d="M 50 180 Q 200 150 350 180 T 650 50" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
             </svg>
          </div>
        </div>

        {/* Activity Sidebar Section */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Recent Activity</h3>
            <button className="text-xs font-bold text-emerald-600 hover:text-emerald-700 tracking-wider uppercase">View All</button>
          </div>
          <div className="flex-1 overflow-y-auto p-2 no-scrollbar">
            {activities.map((item) => (
              <div key={item.id} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="size-11 shrink-0 rounded-full flex items-center justify-center bg-gray-50 text-slate-500 group-hover:bg-white group-hover:shadow-sm group-hover:text-emerald-600 transition-all">
                  {item.iconType === 'user' && <Users size={18} />}
                  {item.iconType === 'domain' && <Briefcase size={18} />}
                  {item.iconType === 'billing' && <CreditCard size={18} />}
                  {item.iconType === 'alert' && <AlertCircle size={18} />}
                  {item.iconType === 'ticket' && <Ticket size={18} />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate">{item.user} {item.action}</p>
                  <p className="text-xs text-slate-500 font-medium truncate">{item.meta} • {item.time}</p>
                </div>
                <ChevronRight className="text-slate-300 transition-transform group-hover:translate-x-1" size={16} />
              </div>
            ))}
          </div>
          <div className="p-4 bg-slate-50/50">
            <button className="w-full py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 shadow-sm transition-all">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
