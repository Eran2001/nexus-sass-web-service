
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ChevronRight, Save, CloudUpload, X } from 'lucide-react';

const CreateTask: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[800px] mx-auto space-y-8 animate-in slide-in-from-bottom-6 duration-700">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm font-bold">
        <div className="flex items-center gap-1 text-slate-500 cursor-pointer hover:text-emerald-600 transition-colors">
          <Home size={16} />
          <span>Home</span>
        </div>
        <ChevronRight size={14} className="text-slate-400" />
        <span className="text-slate-500 cursor-pointer hover:text-emerald-600 transition-colors">Projects</span>
        <ChevronRight size={14} className="text-slate-400" />
        <span className="text-slate-900">Create Task</span>
      </nav>

      <div className="space-y-3">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Create New Task</h1>
        <p className="text-slate-500 text-lg font-medium max-w-xl">
          Fill in the details below to assign a new task to your team. Fields marked with an asterisk (*) are required.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
        <form className="space-y-8">
          {/* Task Name */}
          <div className="space-y-2">
            <label className="text-sm font-extrabold text-slate-900" htmlFor="task-name">
              Task Name <span className="text-red-500">*</span>
            </label>
            <input 
              id="task-name"
              type="text" 
              placeholder="e.g., Q3 Financial Review"
              className="w-full h-14 bg-slate-50/50 rounded-2xl border-gray-100 px-6 text-base font-medium focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none"
            />
            <p className="text-slate-400 text-xs font-bold tracking-wide">A concise name for the task dashboard.</p>
          </div>

          {/* Priority & Assignee Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-extrabold text-slate-900" htmlFor="priority">Priority</label>
              <select 
                id="priority" 
                className="w-full h-14 bg-slate-50/50 rounded-2xl border-gray-100 px-6 text-base font-bold focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none cursor-pointer appearance-none"
              >
                <option value="">Select priority level</option>
                <option value="high">🔥 High Priority</option>
                <option value="medium">⚡ Medium Priority</option>
                <option value="low">🌊 Low Priority</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-extrabold text-slate-900" htmlFor="assignee">Assignee</label>
              <select 
                id="assignee" 
                className="w-full h-14 bg-slate-50/50 rounded-2xl border-gray-100 px-6 text-base font-bold focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none cursor-pointer appearance-none"
              >
                <option value="">Select a team member</option>
                <option value="sarah">Sarah Connor</option>
                <option value="john">John Doe</option>
                <option value="jane">Jane Smith</option>
              </select>
            </div>
          </div>

          {/* Due Date */}
          <div className="space-y-2">
            <label className="text-sm font-extrabold text-slate-900" htmlFor="due-date">Due Date</label>
            <input 
              id="due-date" 
              type="date" 
              className="w-full h-14 bg-slate-50/50 rounded-2xl border-gray-100 px-6 text-base font-bold focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none cursor-pointer"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-extrabold text-slate-900" htmlFor="description">Description</label>
            <textarea 
              id="description" 
              placeholder="Describe the scope of work, objectives, and any relevant details..."
              rows={6}
              className="w-full bg-slate-50/50 rounded-2xl border-gray-100 p-6 text-base font-medium focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none resize-none"
            />
            <div className="flex justify-between items-center text-xs font-bold text-slate-400">
              <span>Describe the scope of work.</span>
              <span>0/500</span>
            </div>
          </div>

          {/* Attachments */}
          <div className="space-y-3">
            <span className="text-sm font-extrabold text-slate-900">Attachments</span>
            <div className="border-4 border-dashed border-slate-100 bg-slate-50/30 rounded-3xl p-12 flex flex-col items-center justify-center gap-4 hover:border-emerald-400 hover:bg-emerald-50 transition-all cursor-pointer group">
              <div className="size-16 rounded-full bg-white shadow-md flex items-center justify-center text-slate-400 group-hover:text-emerald-600 group-hover:scale-110 transition-all">
                <CloudUpload size={32} />
              </div>
              <div className="text-center">
                <p className="text-lg font-black text-slate-900">Click to upload or drag and drop</p>
                <p className="text-sm font-bold text-slate-400 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-4 pt-8 border-t border-gray-50">
            <button 
              type="button" 
              onClick={() => navigate(-1)}
              className="h-14 px-8 rounded-2xl bg-white border border-gray-200 text-slate-700 text-sm font-bold hover:bg-slate-50 hover:border-gray-300 transition-all"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="h-14 px-8 rounded-2xl bg-emerald-600 text-white text-sm font-black flex items-center gap-3 shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all active:scale-95"
            >
              <Save size={20} />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
