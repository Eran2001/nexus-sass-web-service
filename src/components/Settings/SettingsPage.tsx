
import React from 'react';
import { 
  User, 
  Lock, 
  CreditCard, 
  Users, 
  Bell, 
  Mail, 
  Phone, 
  Globe, 
  Clock as ClockIcon,
  ChevronDown,
  Camera,
  Check
} from 'lucide-react';

const SettingsPage: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500 pb-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Settings</h1>
        <p className="text-slate-500 font-medium text-lg">Manage your account settings and preferences.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Sidebar Sub-nav */}
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-8 sticky top-6">
          <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-xl flex items-center gap-4">
            <img src="https://picsum.photos/seed/user1/64/64" className="size-14 rounded-2xl object-cover shadow-sm border border-gray-100" alt="John" />
            <div className="min-w-0">
              <h3 className="text-base font-black text-slate-900 truncate">John Doe</h3>
              <p className="text-sm font-bold text-slate-400 truncate">john.doe@nexus.com</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            {[
              { name: 'General', icon: <User size={20} />, active: true },
              { name: 'Security', icon: <Lock size={20} />, active: false },
              { name: 'Billing', icon: <CreditCard size={20} />, active: false },
              { name: 'Team', icon: <Users size={20} />, active: false },
              { name: 'Notifications', icon: <Bell size={20} />, active: false },
            ].map(item => (
              <button key={item.name} className={`
                flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold transition-all
                ${item.active ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-600/20' : 'text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-md'}
              `}>
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Settings Main Content */}
        <main className="flex-1 space-y-10 w-full min-w-0">
          {/* Profile Banner Section */}
          <section className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden group">
            <div className="h-40 bg-gradient-to-br from-emerald-500 to-emerald-700 relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse"></div>
            </div>
            <div className="px-10 pb-10 relative">
              <div className="flex flex-col sm:flex-row items-end sm:items-center -mt-14 mb-6 gap-6">
                <div className="relative group/avatar">
                  <div className="size-28 rounded-3xl border-8 border-white bg-white overflow-hidden shadow-2xl group-hover/avatar:scale-[1.02] transition-transform">
                    <img src="https://picsum.photos/seed/user1/112/112" className="w-full h-full object-cover" alt="Profile" />
                  </div>
                  <button className="absolute -bottom-1 -right-1 p-2.5 bg-white border border-gray-200 rounded-2xl text-emerald-600 shadow-xl hover:scale-110 transition-all">
                    <Camera size={18} />
                  </button>
                </div>
                <div className="flex-1 pb-2">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">John Doe</h2>
                  <p className="text-base font-bold text-slate-400">Product Designer • San Francisco, CA</p>
                </div>
                <button className="h-11 px-6 rounded-2xl bg-white border border-gray-200 text-slate-700 text-sm font-bold hover:bg-slate-50 transition-all mb-2">
                  Change Cover
                </button>
              </div>
            </div>
          </section>

          {/* Personal Info Form */}
          <section className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden">
            <div className="px-10 py-6 border-b border-gray-50 flex items-center justify-between bg-slate-50/30">
              <h3 className="text-xl font-black text-slate-900">Personal Information</h3>
            </div>
            <div className="p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-extrabold text-slate-900">First Name</label>
                  <input type="text" defaultValue="John" className="w-full h-14 px-6 rounded-2xl border-gray-100 bg-slate-50/50 text-slate-900 font-bold focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-extrabold text-slate-900">Last Name</label>
                  <input type="text" defaultValue="Doe" className="w-full h-14 px-6 rounded-2xl border-gray-100 bg-slate-50/50 text-slate-900 font-bold focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-extrabold text-slate-900">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors" size={20} />
                    <input type="email" defaultValue="john.doe@nexus.com" className="w-full h-14 pl-14 pr-6 rounded-2xl border-gray-100 bg-slate-50/50 text-slate-900 font-bold focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-extrabold text-slate-900">Phone Number</label>
                  <div className="relative group">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors" size={20} />
                    <input type="tel" defaultValue="+1 (555) 000-0000" className="w-full h-14 pl-14 pr-6 rounded-2xl border-gray-100 bg-slate-50/50 text-slate-900 font-bold focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-sm font-extrabold text-slate-900">Bio</label>
                  <textarea rows={4} defaultValue="Product designer with 5+ years of experience in SaaS and Enterprise applications." className="w-full p-6 rounded-2xl border-gray-100 bg-slate-50/50 text-slate-900 font-medium focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none resize-none" />
                  <p className="text-xs font-bold text-slate-400 text-right uppercase tracking-widest">0/500 characters</p>
                </div>
              </div>
            </div>
          </section>

          {/* Preferences & Email Notification Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Preferences Section */}
            <section className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl flex flex-col h-full">
              <div className="px-10 py-6 border-b border-gray-50 bg-slate-50/30">
                <h3 className="text-lg font-black text-slate-900">Preferences</h3>
              </div>
              <div className="p-10 space-y-8 flex-1">
                <div className="space-y-3">
                  <label className="text-sm font-extrabold text-slate-900">Language</label>
                  <div className="relative">
                    <Globe size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <select className="w-full h-14 pl-14 pr-12 rounded-2xl border-gray-100 bg-slate-50/50 text-slate-900 font-bold focus:border-emerald-500 focus:bg-white appearance-none transition-all outline-none">
                      <option>English (US)</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                    <ChevronDown size={20} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-extrabold text-slate-900">Timezone</label>
                  <div className="relative">
                    <ClockIcon size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <select className="w-full h-14 pl-14 pr-12 rounded-2xl border-gray-100 bg-slate-50/50 text-slate-900 font-bold focus:border-emerald-500 focus:bg-white appearance-none transition-all outline-none">
                      <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                      <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                    </select>
                    <ChevronDown size={20} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </section>

            {/* Notifications Section */}
            <section className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl flex flex-col h-full">
               <div className="px-10 py-6 border-b border-gray-50 bg-slate-50/30">
                <h3 className="text-lg font-black text-slate-900">Email Notifications</h3>
              </div>
              <div className="p-10 space-y-8 flex-1">
                {[
                  { title: 'Product Updates', desc: 'Receive emails about new features.', checked: true },
                  { title: 'Security Alerts', desc: 'Get notified about suspicious logins.', checked: true },
                  { title: 'Marketing Emails', desc: 'Receive offers and promotions.', checked: false },
                ].map(item => (
                  <div key={item.title} className="flex items-center justify-between group">
                    <div>
                      <p className="text-sm font-black text-slate-900">{item.title}</p>
                      <p className="text-xs font-bold text-slate-400 mt-1">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={item.checked} className="sr-only peer" />
                      <div className="w-14 h-8 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-xl after:h-6 after:w-6 after:transition-all peer-checked:bg-emerald-600 shadow-inner"></div>
                    </label>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Footer Save Row */}
          <div className="flex items-center justify-end gap-6 pt-10 border-t border-gray-100">
            <button className="h-14 px-10 rounded-2xl bg-white border border-gray-200 text-slate-700 text-sm font-bold hover:bg-slate-50 transition-all">
              Cancel
            </button>
            <button className="h-14 px-12 rounded-2xl bg-emerald-600 text-white text-sm font-black shadow-2xl shadow-emerald-600/20 hover:bg-emerald-700 hover:scale-105 transition-all active:scale-95 flex items-center gap-2">
              <Check size={20} />
              Save Changes
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
