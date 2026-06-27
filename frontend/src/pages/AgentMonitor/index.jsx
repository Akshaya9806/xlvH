import AgentCard from "../../components/agents/AgentCard";
import AgentMetrics from "../../components/agents/AgentMetrics";
import "../../styles/agents.css";

const agents = [
  { name: "Planner", status: "Running", runtime: "1.2s" },
  { name: "Trigger", status: "Completed", runtime: "0.9s" },
  { name: "Search", status: "Running", runtime: "2.5s" },
  { name: "Research", status: "Waiting", runtime: "-" },
  { name: "Qualification", status: "Waiting", runtime: "-" },
  { name: "Recommendation", status: "Waiting", runtime: "-" },
  { name: "Report", status: "Waiting", runtime: "-" },
];

export default function AgentMonitor() {
  return (
    <div className="agents-page">

      <h1>Agent Monitor</h1>

      <AgentMetrics />

      <div className="agent-grid">

        {agents.map((agent) => (
          <AgentCard
            key={agent.name}
            agent={agent}
          />
        ))}

      </div>

    </div>
  );
}