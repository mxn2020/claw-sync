import { Link2, Plus, CheckCircle, AlertCircle } from "lucide-react";
import { Button, Card, Badge } from "@geenius-ui/react-css";
import "./ConnectionsPage.css";

const connections = [
  { name: "GitHub → OpenClaw Config", source: "GitHub", target: "OpenClaw", status: "synced" as const, lastSync: "2 min ago", itemsSynced: 342 },
  { name: "Notion → Agent Templates", source: "Notion", target: "Marketplace", status: "synced" as const, lastSync: "15 min ago", itemsSynced: 28 },
  { name: "Slack → Alert Channel", source: "OpenClaw", target: "Slack", status: "warning" as const, lastSync: "1 hour ago", itemsSynced: 156 },
  { name: "S3 → Log Archive", source: "Claw Logs", target: "AWS S3", status: "synced" as const, lastSync: "5 min ago", itemsSynced: 18420 },
];

export default function ConnectionsPage() {
  return (<div className="conn-page">
    <div className="conn-header"><h1><Link2 size={20} /> Connections</h1><Button variant="primary" size="sm" icon={<Plus size={14} />}>New Connection</Button></div>
    <div className="conn-grid">{connections.map(c => (<Card key={c.name} padding="md" className="conn-card">
      <div className="conn-card-header">{c.status === "synced" ? <CheckCircle size={16} style={{ color: "var(--color-success)" }} /> : <AlertCircle size={16} style={{ color: "var(--color-warning)" }} />}<strong>{c.name}</strong></div>
      <div className="conn-card-flow"><Badge variant="info">{c.source}</Badge><span>→</span><Badge variant="info">{c.target}</Badge></div>
      <div className="conn-card-stats"><span>{c.itemsSynced.toLocaleString()} items synced</span><span>Last: {c.lastSync}</span></div>
    </Card>))}</div>
  </div>);
}
