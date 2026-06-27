import { useWorkflow } from "../../context/WorkflowContext";

export default function WorkflowTimeline() {
  const { workflow } = useWorkflow();

  return (
    <div className="timeline-card">
      <h2>Workflow Logs</h2>

      {workflow?.workflow_logs?.length ? (
        workflow.workflow_logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))
      ) : (
        <p>No workflow executed.</p>
      )}
    </div>
  );
}