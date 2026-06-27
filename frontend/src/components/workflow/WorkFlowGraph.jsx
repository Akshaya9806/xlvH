import { useWorkflow } from "../../context/WorkflowContext";

export default function WorkflowGraph() {
  const { workflow } = useWorkflow();

  return (
    <div className="workflow-card">
      <h2>Workflow Execution</h2>

      <p>
        <strong>Current Agent:</strong>{" "}
        {workflow?.current_agent || "Not Started"}
      </p>

      <p>
        <strong>Execution Plan:</strong>
      </p>

      <ul>
        {workflow?.execution_plan?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
}