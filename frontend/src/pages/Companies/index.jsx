import { useWorkflow } from "../../context/WorkflowContext";
import CompanyCard from "../../components/companies/CompanyCard";

export default function Companies() {

  const { workflow } = useWorkflow();

  if (!workflow) {
    return (
      <h2>
        Run the workflow to discover companies.
      </h2>
    );
  }

  return (
    <div className="companies-page">

      <h1>Discovered Companies</h1>

      <div className="companies-grid">

        {workflow.companies.map((company, index) => (

          <CompanyCard

            key={index}

            company={company}

          />

        ))}

      </div>

    </div>
  );
}