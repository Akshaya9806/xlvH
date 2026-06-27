import "../../styles/agents.css";

export default function AgentMetrics() {
  return (
    <div className="metrics-card">

      <h2>System Metrics</h2>

      <div className="metric">

        CPU Usage

        <strong>24%</strong>

      </div>

      <div className="metric">

        Memory

        <strong>512 MB</strong>

      </div>

      <div className="metric">

        Active Agents

        <strong>7</strong>

      </div>

      <div className="metric">

        Success Rate

        <strong>99%</strong>

      </div>

    </div>
  );
}