import { Link, useLocation } from "react-router-dom";
import { RefreshCw, Link2, Activity, Clock, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import "./Header.css";
const links = [
  { to: "/", icon: Link2, label: "Connections" },
  { to: "/sync-jobs", icon: RefreshCw, label: "Sync Jobs" },
  { to: "/activity", icon: Activity, label: "Activity" },
  { to: "/schedules", icon: Clock, label: "Schedules" },
  { to: "/settings", icon: Settings, label: "Settings" },
];
export default function Header() {
  const loc = useLocation();
  return (<header className="cs-header"><div className="cs-header-inner">
    <Link to="/" className="cs-logo"><RefreshCw size={18}/><span>Claw<span className="gradient-text">Sync</span></span></Link>
    <nav className="cs-nav">{links.map(l=>(<Link key={l.to} to={l.to} className={`cs-nav-link ${loc.pathname===l.to?"active":""}`}><l.icon size={14}/><span>{l.label}</span></Link>))}</nav>
    <ThemeToggle />
  </div></header>);
}
