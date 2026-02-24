import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import ConnectionsPage from "./pages/ConnectionsPage";
import SyncJobsPage from "./pages/SyncJobsPage";
import ActivityPage from "./pages/ActivityPage";
import SchedulesPage from "./pages/SchedulesPage";
import SettingsPage from "./pages/SettingsPage";
function Layout() { return (<><Header /><Outlet /></>); }
export default function App() {
  return (<BrowserRouter><Routes><Route element={<Layout />}>
    <Route path="/" element={<ConnectionsPage />} /> <Route path="/sync-jobs" element={<SyncJobsPage />} />
    <Route path="/activity" element={<ActivityPage />} /> <Route path="/schedules" element={<SchedulesPage />} />
    <Route path="/settings" element={<SettingsPage />} />
  </Route></Routes></BrowserRouter>);
}
