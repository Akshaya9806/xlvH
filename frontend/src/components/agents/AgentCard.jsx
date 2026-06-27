import "../../styles/agents.css";

export default function AgentCard({ agent }) {
  return (
    <div className="agent-box">

      <h2>{agent.name}</h2>

      <p>Status</p>

      <span className="running">

        {agent.status}

      </span>

      <p>

        Runtime

      </p>

      <h3>

        {agent.runtime}

      </h3>

    </div>
  );
}