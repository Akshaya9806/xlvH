import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Workflow from "./pages/Workflow";
import Companies from "./pages/Companies";
import QualifiedCompanies from "./pages/QualifiedCompanies";
import Recommendations from "./pages/Recommendations";
import Reports from "./pages/Reports";
import AgentMonitor from "./pages/AgentMonitor";
import Architecture from "./pages/Architecture";
import Settings from "./pages/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/workflow" element={<Workflow />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/qualified" element={<QualifiedCompanies />} />
      <Route path="/recommendations" element={<Recommendations />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/agents" element={<AgentMonitor />} />
      <Route path="/architecture" element={<Architecture />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}