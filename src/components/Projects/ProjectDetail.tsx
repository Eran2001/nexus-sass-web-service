
import React from 'react';
import { 
  Info, 
  History, 
  Trash2, 
  Edit3, 
  ChevronRight, 
  Calendar, 
  Flag,
  Users,
  FileText,
  Download,
  Plus,
  Table as TableIcon,
  FileDigit
} from 'lucide-react';

const ProjectDetail: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm font-bold">
        <span className="text-slate-500 cursor-pointer hover:text-emerald-600 transition-colors">Dashboard</span>
        <ChevronRight size={14} className="text-slate-400" />
        <span className="text-slate-500 cursor-pointer hover:text-emerald-600 transition-colors">Projects</span>
        <ChevronRight size={14} className="text-slate-400" />
        <span className="text-slate-900">Project Alpha</span>
      </nav>

      {/* Hero Header */}
      <div className="flex flex-col md:flex-row justify-between gap-6 md:items-start">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Project Alpha - Q3 Marketing Launch</h1>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-widest border border-emerald-100 shadow-sm">In Progress</span>
          </div>
          <p className="text-slate-500 font-medium">ID: #PROJ-2023-001 • Created on Oct 12, 2023</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-slate-700 text-sm font-bold hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all">
            <Trash2 size={18} />
            <span>Delete</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 rounded-xl text-white text-sm font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 active:scale-95">
            <Edit3 size={18} />
            <span>Edit Record</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Col - General Info & Activity */}
        <div className="lg:col-span-2 space-y-8">
          {/* General Info Card */}
          <section className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between bg-slate-50/30">
              <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <Info size={18} className="text-emerald-600" />
                <span>General Information</span>
              </h2>
              <button className="text-emerald-600 text-sm font-bold hover:underline">View Details</button>
            </div>
            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project Owner</span>
                <div className="flex items-center gap-3 mt-1">
                  <img src="https://picsum.photos/seed/sarah/32/32" className="size-8 rounded-full border border-gray-100 shadow-sm" alt="Sarah" />
                  <span className="text-sm font-bold text-slate-900">Sarah Jenkins</span>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Timeline</span>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar size={16} className="text-slate-400" />
                  <span className="text-sm font-bold text-slate-900">Oct 15 - Dec 20, 2023</span>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Budget Utilization</span>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[65%] rounded-full shadow-inner"></div>
                  </div>
                  <span className="text-sm font-bold text-slate-900 whitespace-nowrap">$12,500 / $20,000</span>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Priority Level</span>
                <div className="flex items-center gap-2 mt-1">
                  <Flag size={16} className="text-orange-500" />
                  <span className="text-sm font-bold text-slate-900">High Priority</span>
                </div>
              </div>
              <div className="sm:col-span-2 pt-6 border-t border-dashed border-gray-100">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">Description</span>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Executing the go-to-market strategy for the new Q3 product lineup. Includes digital ad spend, influencer partnerships, and a launch event in San Francisco. Focus on maximizing conversion rates for the initial cohort.
                </p>
              </div>
            </div>
          </section>

          {/* Activity Timeline Card */}
          <section className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
             <div className="px-6 py-4 border-b border-gray-50 bg-slate-50/30">
                <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  <History size={18} className="text-emerald-600" />
                  <span>Activity History</span>
                </h2>
             </div>
             <div className="p-8">
                <div className="relative border-l-2 border-slate-100 ml-3 space-y-12">
                  <div className="relative pl-10">
                    <div className="absolute -left-[11px] top-1 size-5 rounded-full bg-white border-4 border-emerald-600"></div>
                    <div className="space-y-1">
                      <p className="text-sm text-slate-900 font-bold">Status updated to <span className="text-emerald-600">In Progress</span></p>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
                        <img src="https://picsum.photos/seed/sarah/16/16" className="size-4 rounded-full" alt="" />
                        <span>Sarah Jenkins</span>
                        <span className="text-slate-300">•</span>
                        <span>2 hours ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute -left-[11px] top-1 size-5 rounded-full bg-white border-4 border-slate-200"></div>
                    <div className="space-y-1">
                      <p className="text-sm text-slate-900 font-bold">New document attached: <span className="text-emerald-600 cursor-pointer hover:underline">Q3_Budget_Final.xlsx</span></p>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
                        <img src="https://picsum.photos/seed/mike/16/16" className="size-4 rounded-full" alt="" />
                        <span>Mike Ross</span>
                        <span className="text-slate-300">•</span>
                        <span>Yesterday at 4:30 PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute -left-[11px] top-1 size-5 rounded-full bg-white border-4 border-slate-200"></div>
                    <div className="space-y-1">
                      <p className="text-sm text-slate-900 font-bold">Project created</p>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
                        <span>System Admin</span>
                        <span className="text-slate-300">•</span>
                        <span>Oct 12, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </section>
        </div>

        {/* Right Col - Team & Documents */}
        <div className="space-y-8">
          {/* Team Members Card */}
          <section className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between bg-slate-50/30">
              <h2 className="text-base font-extrabold text-slate-900">Team Members</h2>
              <button className="size-8 flex items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm border border-gray-100 hover:bg-emerald-50 transition-colors">
                <Plus size={18} />
              </button>
            </div>
            <div className="p-3 space-y-1">
              {[
                { name: 'Sarah Jenkins', role: 'Owner', seed: 'sarah' },
                { name: 'Mike Ross', role: 'Editor', seed: 'mike' },
                { name: 'Jessica Pearson', role: 'Viewer', seed: 'jess' },
              ].map(member => (
                <div key={member.name} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <img src={`https://picsum.photos/seed/${member.seed}/32/32`} className="size-9 rounded-full border-2 border-white shadow-sm" alt="" />
                    <div>
                      <p className="text-sm font-extrabold text-slate-900">{member.name}</p>
                      <p className="text-xs font-bold text-slate-400 tracking-wider uppercase">{member.role}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-emerald-600 transition-all" />
                </div>
              ))}
            </div>
          </section>

          {/* Documents Card */}
          <section className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between bg-slate-50/30">
              <h2 className="text-base font-extrabold text-slate-900">Documents</h2>
              <button className="text-xs font-black text-emerald-600 uppercase tracking-widest hover:underline">View All</button>
            </div>
            <div className="p-3 space-y-2">
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all cursor-pointer group">
                <div className="size-11 rounded-xl bg-red-50 flex items-center justify-center text-red-500 shadow-sm">
                  <FileText size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate">Marketing_Specs_v2.pdf</p>
                  <p className="text-xs font-bold text-slate-400">2.4 MB • 1 day ago</p>
                </div>
                <button className="p-2 text-slate-300 hover:text-emerald-600 transition-colors">
                   <Download size={18} />
                </button>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all cursor-pointer group">
                <div className="size-11 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-sm">
                  <TableIcon size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate">Q3_Budget_Final.xlsx</p>
                  <p className="text-xs font-bold text-slate-400">840 KB • 2 days ago</p>
                </div>
                <button className="p-2 text-slate-300 hover:text-emerald-600 transition-colors">
                   <Download size={18} />
                </button>
              </div>
            </div>
            <div className="p-4 bg-slate-50/50 mt-auto">
               <button className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-xs font-black text-slate-400 uppercase tracking-widest hover:border-emerald-500 hover:text-emerald-600 transition-all flex items-center justify-center gap-2">
                  <Plus size={16} />
                  Upload New File
               </button>
            </div>
          </section>

          {/* Tags Card */}
          <section className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden p-6 space-y-4">
            <h2 className="text-base font-extrabold text-slate-900 uppercase tracking-widest text-[11px] text-slate-500">Project Tags</h2>
            <div className="flex flex-wrap gap-2">
              {['Marketing', 'Q3', 'Enterprise', 'Strategy'].map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 text-xs font-bold border border-slate-100">
                  {tag}
                </span>
              ))}
              <button className="px-3 py-1.5 rounded-lg border-2 border-dashed border-slate-200 text-slate-400 text-xs font-bold hover:border-emerald-500 hover:text-emerald-600 transition-all">
                + Add Tag
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
