import { useWorkflow } from "../../context/WorkflowContext";

export default function SystemStats() {
  const { workflow } = useWorkflow();

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h3>Companies</h3>
        <h1>{workflow?.companies?.length || 0}</h1>
      </div>

      <div className="stat-card">
        <h3>Qualified</h3>
        <h1>{workflow?.qualified_companies?.length || 0}</h1>
      </div>

      <div className="stat-card">
        <h3>Recommendations</h3>
        <h1>{workflow?.recommendations?.length || 0}</h1>
      </div>

      <div className="stat-card">
        <h3>Status</h3>
        <h1>{workflow?.status || "Idle"}</h1>
      </div>
    </div>
  );
}