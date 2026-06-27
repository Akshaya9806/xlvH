import "./../../styles/dashboard.css";

import QueryInput from "../../components/dashboard/QueryInput";
import WorkflowGraph from "../../components/workflow/WorkflowGraph";
import WorkflowTimeline from "../../components/workflow/WorkflowTimeline";
import SystemStats from "../../components/dashboard/SystemStats";
import AgentMonitorCard from "../../components/agents/AgentMonitorCard";
import { useWorkflow } from "../../context/WorkflowContext";

export default function Dashboard() {
  const { workflow, loading, error } = useWorkflow();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>AI Sales Intelligence Platform</h1>
        <p>Powered by LangGraph Agents</p>
      </div>

      <QueryInput />

      {loading && (
        <div className="loading">
          Running workflow...
        </div>
      )}

      {error && (
        <div className="error">
          {error}
        </div>
      )}

      <SystemStats />

      <WorkflowGraph />

      <div className="two-column">
        <AgentMonitorCard />
        <WorkflowTimeline />
      </div>

      {workflow && (
        <div className="workflow-summary">
          <h2>Latest Workflow</h2>

          <p>
            <strong>Task:</strong> {workflow.task}
          </p>

          <p>
            <strong>Current Agent:</strong> {workflow.current_agent}
          </p>

          <p>
            <strong>Domain:</strong> {workflow.domain}
          </p>

          <p>
            <strong>Status:</strong> {workflow.status}
          </p>
        </div>
      )}
    </div>
  );
}