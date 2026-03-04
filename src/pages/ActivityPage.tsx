import { Clock } from "lucide-react";
import { Card, Badge } from "@geenius-ui/react-css";

const events = [
  { time: "11:05", type: "sync", msg: "GitHub → OpenClaw Config: 12 items synced" },
  { time: "10:55", type: "sync", msg: "S3 → Log Archive: 4,200 items archived" },
  { time: "10:45", type: "error", msg: "Slack → Alert Channel: Connection timeout" },
  { time: "10:30", type: "sync", msg: "Notion → Agent Templates: 3 items synced" },
  { time: "10:15", type: "sync", msg: "GitHub → OpenClaw Config: 8 items synced" },
];

export default function ActivityPage() {
  return (<div style={{ padding: "var(--space-6)", maxWidth: 900, margin: "0 auto", paddingTop: "calc(var(--header-height) + var(--space-6))" }}>
    <h1 style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--font-size-xl)", fontWeight: 700, marginBottom: "var(--space-6)" }}><Clock size={20} /> Activity</h1>
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>{events.map((e, i) => (<Card key={i} padding="sm" className="activity-event" >
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-text-tertiary)", width: 50 }}>{e.time}</span>
      <Badge variant={e.type === "error" ? "error" : "info"}>{e.type}</Badge>
      <span style={{ flex: 1, fontSize: "var(--font-size-sm)" }}>{e.msg}</span>
    </Card>))}</div>
  </div>);
}
