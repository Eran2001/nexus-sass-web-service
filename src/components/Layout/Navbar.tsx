
import React from 'react';
import { Search, Bell, Menu, FileOutput } from 'lucide-react';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white/80 px-4 md:px-8 backdrop-blur">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="text-slate-500 lg:hidden p-2 rounded-md hover:bg-gray-100">
          <Menu size={20} />
        </button>
        <h2 className="text-lg font-semibold text-slate-900 hidden sm:block">Dashboard Overview</h2>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="h-10 w-48 md:w-64 rounded-lg border-0 bg-slate-100 pl-10 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-500 transition-all"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100 transition-colors">
            <Bell size={20} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>
          
          <button className="flex items-center gap-2 rounded-lg bg-emerald-600 px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-600/20">
            <FileOutput size={16} className="hidden sm:inline" />
            <span>Export Report</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
