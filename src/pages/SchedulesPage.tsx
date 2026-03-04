import { Clock, Plus } from "lucide-react";
import { Button, Card, Badge } from "@geenius-ui/react-css";

const schedules = [
  { name: "GitHub Config Sync", cron: "*/5 * * * *", interval: "Every 5 min", enabled: true, nextRun: "in 3 min" },
  { name: "Notion Template Sync", cron: "0 */6 * * *", interval: "Every 6 hours", enabled: true, nextRun: "in 4h 45m" },
  { name: "S3 Log Archive", cron: "*/10 * * * *", interval: "Every 10 min", enabled: true, nextRun: "in 7 min" },
  { name: "Slack Alert Sync", cron: "0 * * * *", interval: "Every hour", enabled: false, nextRun: "—" },
];

export default function SchedulesPage() {
  return (<div style={{ padding: "var(--space-6)", maxWidth: 900, margin: "0 auto", paddingTop: "calc(var(--header-height) + var(--space-6))" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
      <h1 style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--font-size-xl)", fontWeight: 700 }}><Clock size={20} /> Schedules</h1>
      <Button variant="primary" size="sm" icon={<Plus size={14} />}>Add Schedule</Button>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>{schedules.map(s => (<Card key={s.name} padding="md" className={s.enabled ? "" : "disabled"}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-2)" }}>
        <strong>{s.name}</strong>
        <Badge variant={s.enabled ? "success" : "warning"}>{s.enabled ? "Active" : "Paused"}</Badge>
      </div>
      <div style={{ display: "flex", gap: "var(--space-4)", fontSize: "var(--font-size-xs)", color: "var(--color-text-tertiary)" }}>
        <span style={{ fontFamily: "var(--font-mono)" }}>{s.cron}</span>
        <span>{s.interval}</span>
        <span>Next: {s.nextRun}</span>
      </div>
    </Card>))}</div>
  </div>);
}
