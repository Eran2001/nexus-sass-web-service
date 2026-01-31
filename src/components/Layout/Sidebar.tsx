
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FolderKanban, 
  FileText, 
  Settings, 
  LogOut,
  Layers,
  HelpCircle,
  AlertCircle
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  const navItems = [
    { name: 'Overview', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Analytics', path: '/analytics', icon: <FileText size={20} /> },
    { name: 'Customers', path: '/users', icon: <Users size={20} /> },
    { name: 'Reports', path: '/states', icon: <FileText size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className={`bg-white border-r border-gray-200 transition-all duration-300 ease-in-out fixed inset-y-0 left-0 z-50 lg:relative ${isOpen ? 'w-64 translate-x-0' : 'w-20 -translate-x-full lg:translate-x-0'} overflow-hidden`}>
      <div className="flex flex-col h-full py-6 px-4">
        {/* Logo */}
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 shrink-0">
            <Layers size={24} />
          </div>
          {isOpen && (
            <div className="flex flex-col min-w-0">
              <h1 className="text-base font-bold leading-tight text-slate-900 truncate">Nexus SaaS</h1>
              <p className="text-xs font-medium text-slate-500 truncate">Enterprise Suite</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group
                ${isActive 
                  ? 'bg-emerald-50 text-emerald-600 font-semibold' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
              `}
            >
              <span className="shrink-0">{item.icon}</span>
              {isOpen && <span className="text-sm">{item.name}</span>}
            </NavLink>
          ))}
        </nav>

        {/* User Footer */}
        <div className="mt-auto pt-6 border-t border-gray-200">
           <div className={`flex items-center gap-3 px-2 ${!isOpen && 'justify-center'}`}>
            <img 
              src="https://picsum.photos/seed/user1/40/40" 
              className="h-9 w-9 rounded-full border border-gray-200 shadow-sm shrink-0" 
              alt="User" 
            />
            {isOpen && (
              <div className="flex flex-col min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">Tom Cook</p>
                <p className="text-xs text-slate-500 truncate">Admin</p>
              </div>
            )}
            {isOpen && (
               <button className="ml-auto text-slate-400 hover:text-slate-600 p-1">
                <LogOut size={18} />
              </button>
            )}
          </div>
          {isOpen && (
            <NavLink
              to="/help"
              className="flex items-center gap-3 px-3 py-2 mt-4 text-slate-500 hover:text-slate-900 transition-colors text-sm"
            >
              <HelpCircle size={18} />
              <span>Help Center</span>
            </NavLink>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
