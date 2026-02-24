import { Settings, Github, Coffee } from "lucide-react";
export default function SettingsPage() {
  return (<div style={{padding:"var(--space-6)",maxWidth:640,margin:"0 auto",paddingTop:"calc(var(--header-height) + var(--space-6))"}}>
    <h1 style={{display:"flex",alignItems:"center",gap:"var(--space-2)",fontSize:"var(--font-size-xl)",fontWeight:700,marginBottom:"var(--space-6)"}}><Settings size={20}/> Settings</h1>
    <section className="card" style={{padding:"var(--space-5)",marginBottom:"var(--space-4)"}}>
      <h2 style={{fontSize:"var(--font-size-sm)",fontWeight:700,marginBottom:"var(--space-4)"}}>Sync Defaults</h2>
      <div style={{display:"flex",flexDirection:"column",gap:"var(--space-3)"}}>
        <div><label style={{fontSize:"var(--font-size-xs)",fontWeight:600,color:"var(--color-text-secondary)"}}>Max Retry Attempts</label><input className="input" type="number" defaultValue={3} style={{marginTop:4}} /></div>
        <div><label style={{fontSize:"var(--font-size-xs)",fontWeight:600,color:"var(--color-text-secondary)"}}>Retry Delay (seconds)</label><input className="input" type="number" defaultValue={30} style={{marginTop:4}} /></div>
      </div>
    </section>
    <section className="card" style={{padding:"var(--space-5)"}}>
      <h2 style={{fontSize:"var(--font-size-sm)",fontWeight:700,marginBottom:"var(--space-4)"}}>About</h2>
      <p style={{fontSize:"var(--font-size-xs)",color:"var(--color-text-secondary)",marginBottom:"var(--space-3)"}}>v0.1.0 · MIT License</p>
      <div style={{display:"flex",gap:"var(--space-3)"}}>
        <a href="https://github.com/mxn2020/claw-sync" className="btn btn-sm" target="_blank" rel="noopener noreferrer"><Github size={14}/> GitHub</a>
        <a href="https://buymeacoffee.com/mxn2020" className="btn btn-sm" target="_blank" rel="noopener noreferrer"><Coffee size={14}/> Support</a>
      </div>
    </section>
  </div>);
}
