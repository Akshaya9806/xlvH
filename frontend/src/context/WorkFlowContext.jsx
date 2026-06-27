import { createContext, useContext, useState } from "react";
import { runWorkflow } from "../services/workflowApi";

const WorkflowContext = createContext();

export function WorkflowProvider({ children }) {

  const [workflow, setWorkflow] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const executeWorkflow = async (query) => {

    if (!query.trim()) return;

    try {

      setLoading(true);

      setError("");

      const result = await runWorkflow(query);

      setWorkflow(result);

    } catch (err) {

      setError("Backend Error");

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  return (

    <WorkflowContext.Provider
      value={{
        workflow,
        loading,
        error,
        executeWorkflow,
      }}
    >
      {children}
    </WorkflowContext.Provider>

  );

}

export function useWorkflow() {

  return useContext(WorkflowContext);

}