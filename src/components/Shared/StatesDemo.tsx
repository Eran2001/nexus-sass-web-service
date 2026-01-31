
import React from 'react';
import { 
  FolderOpen, 
  MoreHorizontal, 
  Plus, 
  AlertCircle, 
  CloudOff, 
  RotateCcw,
  Loader2,
  X
} from 'lucide-react';

const StatesDemo: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-16">
      <div className="space-y-3">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">States: Empty, Loading, & Error</h1>
        <p className="text-slate-500 font-medium text-lg max-w-3xl">
          Demonstration of common UI patterns for different application states. These ensure clarity and guidance for users at all times.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {/* 1. Empty State */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-900 tracking-tight">1. Empty State</h2>
            <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full">No Data</span>
          </div>
          <div className="bg-white rounded-[2rem] border border-gray-100 shadow-2xl overflow-hidden flex flex-col min-h-[500px]">
            <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-slate-50/30">
              <h3 className="font-extrabold text-slate-900">Weekly Reports</h3>
              <button className="text-slate-400 hover:text-slate-900"><MoreHorizontal size={20} /></button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center space-y-8">
              <div className="size-36 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 animate-pulse">
                <FolderOpen size={72} strokeWidth={1} />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-black text-slate-900 tracking-tight">No reports found</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-[280px] mx-auto">
                  Kickstart your productivity by creating your first weekly report. It only takes a minute to get set up.
                </p>
              </div>
              <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3 px-8 rounded-2xl transition-all shadow-xl shadow-emerald-600/20">
                <Plus size={20} />
                <span>Create Report</span>
              </button>
            </div>
          </div>
        </section>

        {/* 2. Loading State */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-900 tracking-tight">2. Loading State</h2>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full">Fetching</span>
          </div>
          <div className="bg-white rounded-[2rem] border border-gray-100 shadow-2xl overflow-hidden flex flex-col min-h-[500px]">
             <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-slate-50/30">
                <h3 className="font-extrabold text-slate-900">Team Members</h3>
                <div className="size-6 bg-slate-100 rounded-full animate-pulse"></div>
             </div>
             <div className="p-0">
                <div className="flex px-6 py-4 bg-slate-50 border-b border-gray-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <div className="w-1/2">Name</div>
                  <div className="w-1/4">Role</div>
                  <div className="w-1/4 text-right">Status</div>
                </div>
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="px-6 py-6 flex items-center gap-4 border-b border-gray-50 last:border-0">
                    <div className="size-10 rounded-full bg-slate-100 animate-pulse shrink-0"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-3/4 bg-slate-100 rounded-full animate-pulse"></div>
                      <div className="h-3 w-1/2 bg-slate-50 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-16 h-7 bg-slate-100 rounded-full animate-pulse"></div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 3. Error State */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-900 tracking-tight">3. Error State</h2>
            <span className="px-3 py-1 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest rounded-full">Failure</span>
          </div>
          <div className="bg-white rounded-[2rem] border border-gray-100 shadow-2xl overflow-hidden flex flex-col min-h-[500px]">
            <div className="p-6 border-b border-gray-50 bg-slate-50/30">
              <h3 className="font-extrabold text-slate-900">Document Upload</h3>
            </div>
            <div className="p-8 space-y-8 flex flex-col flex-1">
               <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex gap-4 items-start animate-in zoom-in duration-300">
                  <AlertCircle className="text-red-500 mt-1 shrink-0" size={24} />
                  <div className="space-y-2">
                    <h4 className="text-base font-black text-red-900 tracking-tight">Upload Failed</h4>
                    <p className="text-sm text-red-700 font-medium leading-relaxed">
                      Network connection lost during transfer. Please check your internet and try again.
                    </p>
                    <div className="flex gap-4 pt-1">
                      <button className="text-xs font-black uppercase tracking-widest text-red-800 hover:underline">Retry Upload</button>
                      <button className="text-xs font-bold text-red-600 hover:text-red-800">Contact Support</button>
                    </div>
                  </div>
               </div>

               <div className="flex flex-col gap-3 flex-1">
                  <label className="text-sm font-extrabold text-slate-900 uppercase tracking-widest text-[11px]">Upload File</label>
                  <div className="flex-1 border-4 border-dashed border-red-100 bg-red-50/20 rounded-[1.5rem] flex flex-col items-center justify-center p-10 gap-4 text-center group cursor-pointer hover:bg-red-50 transition-all">
                    <div className="size-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                      <CloudOff size={28} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-black text-slate-900 tracking-tight">Click to retry or drag and drop</p>
                      <p className="text-xs font-bold text-slate-400">SVG, PNG, JPG or GIF (max. 3MB)</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs text-red-600 font-black uppercase tracking-widest bg-red-50 px-3 py-1.5 rounded-full ring-1 ring-red-100">
                      <RotateCcw size={14} className="animate-spin" />
                      Upload interrupted
                    </span>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </div>

      {/* Inline states section */}
      <section className="space-y-8 pt-10 border-t border-gray-100">
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">Inline State Examples</h3>
        <div className="flex flex-wrap gap-12">
          {/* Button Loading */}
          <div className="space-y-3">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Button Loading</span>
            <button className="flex items-center gap-3 bg-emerald-600/80 text-white font-black py-4 px-10 rounded-2xl cursor-wait shadow-xl shadow-emerald-600/10">
              <Loader2 className="animate-spin" size={20} />
              <span>Processing...</span>
            </button>
          </div>

          {/* Input Error */}
          <div className="space-y-3 w-full max-w-sm">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Input Validation Error</span>
            <div className="relative group">
              <input 
                type="email" 
                defaultValue="invalid-email@" 
                className="w-full h-14 pl-6 pr-12 rounded-2xl border-2 border-red-500 bg-red-50 text-red-900 font-bold outline-none" 
              />
              <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500" size={20} />
            </div>
            <p className="text-xs font-bold text-red-600">Please enter a valid email address.</p>
          </div>

          {/* Toast Example */}
          <div className="space-y-3">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Toast Notification</span>
            <div className="flex items-center gap-4 p-5 bg-slate-900 text-white rounded-2xl shadow-2xl border border-white/10 animate-in slide-in-from-bottom-2 duration-500">
              <div className="size-10 bg-orange-500 rounded-xl flex items-center justify-center text-white shrink-0">
                <AlertCircle size={22} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold truncate">Low disk space remaining.</p>
                <p className="text-[10px] font-medium text-slate-400">95% of your workspace limit reached.</p>
              </div>
              <button className="p-1 hover:bg-white/10 rounded-lg transition-colors ml-4 shrink-0">
                <X size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatesDemo;
