import React, { useState } from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";
import Navbar from "./components/Layout/Navbar";
import LoginPage from "./components/Auth/LoginPage";
import DashboardOverview from "./components/Dashboard/DashboardOverview";
import UserManagement from "./components/Users/UserManagement";
import ProjectDetail from "./components/Projects/ProjectDetail";
import CreateTask from "./components/Tasks/CreateTask";
import SettingsPage from "./components/Settings/SettingsPage";
import StatesDemo from "./components/Shared/StatesDemo";
import AnalyticsManagement from "./components/analytics";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar
        isOpen={isSidebarOpen}
        toggle={() => setSidebarOpen(!isSidebarOpen)}
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10 no-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login";

  if (isAuthPage) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    );
  }

  return (
    <MainLayout>
      <Routes>
        <Route path="/dashboard" element={<DashboardOverview />} />
        <Route path="/analytics" element={<AnalyticsManagement />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/tasks/create" element={<CreateTask />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/states" element={<StatesDemo />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </MainLayout>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
