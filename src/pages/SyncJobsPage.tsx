import { RefreshCw, CheckCircle, Clock, XCircle } from "lucide-react";
const jobs = [
  { id: "j1", connection: "GitHub → OpenClaw Config", status: "completed" as const, items: 12, duration: "8s", startedAt: "5 min ago" },
  { id: "j2", connection: "Notion → Agent Templates", status: "completed" as const, items: 3, duration: "2s", startedAt: "15 min ago" },
  { id: "j3", connection: "Slack → Alert Channel", status: "failed" as const, items: 0, duration: "12s", startedAt: "1 hour ago" },
  { id: "j4", connection: "S3 → Log Archive", status: "running" as const, items: 4200, duration: "—", startedAt: "running now" },
  { id: "j5", connection: "GitHub → OpenClaw Config", status: "completed" as const, items: 8, duration: "5s", startedAt: "2 hours ago" },
];
function StatusBadge({ status }: { status: string }) {
  if (status === "completed") return <span className="badge badge-green"><CheckCircle size={10}/> Completed</span>;
  if (status === "running") return <span className="badge badge-teal"><Clock size={10}/> Running</span>;
  return <span className="badge badge-red"><XCircle size={10}/> Failed</span>;
}
export default function SyncJobsPage() {
  return (<div style={{padding:"var(--space-6)",maxWidth:1000,margin:"0 auto",paddingTop:"calc(var(--header-height) + var(--space-6))"}}>
    <h1 style={{display:"flex",alignItems:"center",gap:"var(--space-2)",fontSize:"var(--font-size-xl)",fontWeight:700,marginBottom:"var(--space-6)"}}><RefreshCw size={20}/> Sync Jobs</h1>
    <div style={{display:"flex",flexDirection:"column",gap:"var(--space-3)"}}>{jobs.map(j=>(<div key={j.id} className="card" style={{padding:"var(--space-4)",display:"flex",alignItems:"center",gap:"var(--space-4)"}}>
      <div style={{flex:1}}><strong style={{display:"block"}}>{j.connection}</strong><span style={{fontSize:"var(--font-size-xs)",color:"var(--color-text-tertiary)"}}>{j.items} items · {j.duration}</span></div>
      <StatusBadge status={j.status}/>
      <span style={{fontSize:"12px",color:"var(--color-text-tertiary)"}}>{j.startedAt}</span>
    </div>))}</div>
  </div>);
}
