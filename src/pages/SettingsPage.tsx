import { Settings, Github, Coffee } from "lucide-react";
import { Button, Card, Input, Label } from "@geenius-ui/react-css";

export default function SettingsPage() {
  return (<div style={{ padding: "var(--space-6)", maxWidth: 640, margin: "0 auto", paddingTop: "calc(var(--header-height) + var(--space-6))" }}>
    <h1 style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--font-size-xl)", fontWeight: 700, marginBottom: "var(--space-6)" }}><Settings size={20} /> Settings</h1>
    <Card padding="lg">
      <h2 style={{ fontSize: "var(--font-size-sm)", fontWeight: 700, marginBottom: "var(--space-4)" }}>Sync Defaults</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        <div><Label>Max Retry Attempts</Label><Input type="number" defaultValue={3} /></div>
        <div><Label>Retry Delay (seconds)</Label><Input type="number" defaultValue={30} /></div>
      </div>
    </Card>
    <div style={{ marginTop: "var(--space-4)" }}>
      <Card padding="lg">
        <h2 style={{ fontSize: "var(--font-size-sm)", fontWeight: 700, marginBottom: "var(--space-4)" }}>About</h2>
        <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)", marginBottom: "var(--space-3)" }}>v0.1.0 · MIT License</p>
        <div style={{ display: "flex", gap: "var(--space-3)" }}>
          <a href="https://github.com/mxn2020/claw-sync" target="_blank" rel="noopener noreferrer"><Button variant="outline" size="sm" icon={<Github size={14} />}>GitHub</Button></a>
          <a href="https://buymeacoffee.com/mxn2020" target="_blank" rel="noopener noreferrer"><Button variant="outline" size="sm" icon={<Coffee size={14} />}>Support</Button></a>
        </div>
      </Card>
    </div>
  </div>);
}
