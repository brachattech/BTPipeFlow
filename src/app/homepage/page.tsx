// app/shell/page.tsx
import ProgressTracker from "../ProgressTracker";

export default function ShellHomePage() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
      <div className="bt-card">
        <h2 style={{ margin: 0 }}>Pipeline Progress Tracker</h2>
        <p style={{ marginTop: 8, color: "#6b7280" }}>
          Clique nas tarefas para atualizar o progresso.
        </p>
      </div>

      <div style={{ flex: 1, minHeight: 0 }} className="bt-card">
        <ProgressTracker />
      </div>
    </div>
  );
}
