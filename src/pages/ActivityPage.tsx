import { Activity } from "lucide-react";
const events = [
  { time: "11:10", type: "sync" as const, msg: "12 config files synced from GitHub" },
  { time: "11:05", type: "create" as const, msg: "New connection: S3 → Log Archive" },
  { time: "10:50", type: "error" as const, msg: "Slack webhook failed: 401 Unauthorized" },
  { time: "10:30", type: "sync" as const, msg: "3 templates synced from Notion" },
  { time: "10:15", type: "sync" as const, msg: "4,200 log entries archived to S3" },
];
export default function ActivityPage() {
  return (<div style={{padding:"var(--space-6)",maxWidth:900,margin:"0 auto",paddingTop:"calc(var(--header-height) + var(--space-6))"}}>
    <h1 style={{display:"flex",alignItems:"center",gap:"var(--space-2)",fontSize:"var(--font-size-xl)",fontWeight:700,marginBottom:"var(--space-6)"}}><Activity size={20}/> Activity</h1>
    <div style={{display:"flex",flexDirection:"column",gap:"var(--space-2)"}}>{events.map((e,i)=>(<div key={i} className="card" style={{padding:"var(--space-3) var(--space-4)",display:"flex",alignItems:"center",gap:"var(--space-3)"}}>
      <span style={{fontFamily:"var(--font-mono)",fontSize:"12px",color:"var(--color-text-tertiary)",width:50}}>{e.time}</span>
      <span className={`badge badge-${e.type==="error"?"red":"teal"}`}>{e.type}</span>
      <span style={{flex:1,fontSize:"var(--font-size-sm)"}}>{e.msg}</span>
    </div>))}</div>
  </div>);
}
