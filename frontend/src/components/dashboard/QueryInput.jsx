import { useState } from "react";
import { useWorkflow } from "../../context/WorkflowContext";

export default function QueryInput() {
  const [query, setQuery] = useState("");

  const { executeWorkflow, loading } = useWorkflow();

  return (
    <div className="query-card">
      <h2>Business Query</h2>

      <textarea
        rows="5"
        placeholder="Example:
Find Series C AI Infrastructure companies hiring ML Engineers"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        disabled={loading}
        onClick={() => executeWorkflow(query)}
      >
        {loading ? "Running..." : "Run Workflow"}
      </button>
    </div>
  );
}