import React from "react";
import {
  Search,
  ChevronDown,
  Download,
  UserPlus,
  Filter,
  Calendar,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { User, UserStatus } from "@/types";

const users: User[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    email: "sarah.j@saaspro.com",
    role: "Product Manager",
    status: UserStatus.ACTIVE,
    lastActive: "Oct 24, 2023",
    avatarUrl: "https://picsum.photos/seed/sarah/40/40",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "m.chen@saaspro.com",
    role: "Frontend Developer",
    status: UserStatus.PENDING,
    lastActive: "Oct 22, 2023",
    avatarUrl: "https://picsum.photos/seed/michael/40/40",
  },
  {
    id: "3",
    name: "Emily Davis",
    email: "emily.d@saaspro.com",
    role: "UX Designer",
    status: UserStatus.INACTIVE,
    lastActive: "Sep 15, 2023",
    avatarUrl: "https://picsum.photos/seed/emily/40/40",
  },
  {
    id: "4",
    name: "James Doe",
    email: "james.doe@saaspro.com",
    role: "Backend Engineer",
    status: UserStatus.ACTIVE,
    lastActive: "Oct 20, 2023",
    avatarUrl: "https://picsum.photos/seed/james/40/40",
  },
  {
    id: "5",
    name: "Anita Lopez",
    email: "a.lopez@saaspro.com",
    role: "Marketing Lead",
    status: UserStatus.ACTIVE,
    lastActive: "Oct 18, 2023",
    avatarUrl: "https://picsum.photos/seed/anita/40/40",
  },
];

const UserManagement: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-6 md:items-end">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-2">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>Team</span>
            <ChevronRight size={14} />
            <span className="text-slate-900">Members</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            User Management
          </h1>
          <p className="text-slate-500 mt-1 font-medium">
            View, update and manage system access.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all active:scale-95">
          <UserPlus size={18} />
          <span>Add New User</span>
        </button>
      </div>

      {/* Filters & Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
        {/* Toolbar */}
        <div className="p-5 border-b border-gray-50 flex flex-col lg:flex-row items-center justify-between gap-4 bg-slate-50/30">
          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
            <input
              type="text"
              placeholder="Search by name, email, or role..."
              className="w-full h-11 bg-white rounded-xl border-gray-200 pl-12 text-sm focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm outline-none"
            />
          </div>
          <div className="flex gap-2 w-full lg:w-auto overflow-x-auto no-scrollbar pb-1">
            <button className="flex h-11 items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shrink-0">
              <span>Status: All</span>
              <ChevronDown size={16} />
            </button>
            <button className="flex h-11 items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shrink-0">
              <span>Role: Any</span>
              <ChevronDown size={16} />
            </button>
            <button className="flex h-11 items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shrink-0">
              <Calendar size={16} />
              <span>Last 30 Days</span>
              <ChevronDown size={16} />
            </button>
            <div className="w-px h-8 bg-gray-200 self-center mx-1 shrink-0" />
            <button className="size-11 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all shrink-0">
              <Download size={20} />
            </button>
          </div>
        </div>

        {/* Table Body */}
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-gray-100 uppercase tracking-widest text-[10px] font-black text-slate-500">
                <th className="p-5 w-12 text-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 transition-all"
                  />
                </th>
                <th className="p-5">User</th>
                <th className="p-5">Role</th>
                <th className="p-5">Status</th>
                <th className="p-5">Last Active</th>
                <th className="p-5 w-16 text-center"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="group hover:bg-slate-50/50 transition-colors"
                >
                  <td className="p-5 text-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={user.avatarUrl}
                        className="size-11 rounded-full border border-gray-100 shadow-sm"
                        alt=""
                      />
                      <div>
                        <p className="text-sm font-extrabold text-slate-900">
                          {user.name}
                        </p>
                        <p className="text-xs font-medium text-slate-500">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <span className="text-sm font-bold text-slate-700">
                      {user.role}
                    </span>
                  </td>
                  <td className="p-5">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-black uppercase tracking-widest
                      ${
                        user.status === UserStatus.ACTIVE
                          ? "bg-emerald-50 text-emerald-700"
                          : user.status === UserStatus.PENDING
                            ? "bg-amber-50 text-amber-700"
                            : "bg-slate-100 text-slate-600"
                      }
                    `}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-5">
                    <span className="text-sm font-medium text-slate-500">
                      {user.lastActive}
                    </span>
                  </td>
                  <td className="p-5 text-center">
                    <button className="p-2 text-slate-300 hover:text-slate-600 hover:bg-white rounded-lg transition-all opacity-0 group-hover:opacity-100">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 border-t border-gray-50 flex items-center justify-between">
          <p className="text-sm font-medium text-slate-500">
            Showing <span className="text-slate-900 font-extrabold">1</span> to{" "}
            <span className="text-slate-900 font-extrabold">5</span> of{" "}
            <span className="text-slate-900 font-extrabold">24</span> results
          </p>
          <div className="flex items-center gap-1">
            <button className="p-2 border border-gray-200 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-all">
              <ChevronLeft size={20} />
            </button>
            <button className="size-10 flex items-center justify-center bg-emerald-600 text-white font-extrabold text-sm rounded-lg shadow-lg shadow-emerald-600/20 transition-all">
              1
            </button>
            <button className="size-10 flex items-center justify-center hover:bg-slate-100 text-slate-600 font-extrabold text-sm rounded-lg transition-all">
              2
            </button>
            <button className="size-10 flex items-center justify-center hover:bg-slate-100 text-slate-600 font-extrabold text-sm rounded-lg transition-all">
              3
            </button>
            <button className="p-2 border border-gray-200 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
