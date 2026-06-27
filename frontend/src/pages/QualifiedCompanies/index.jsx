import { useWorkflow } from "../../context/WorkflowContext";

import QualifiedCompanyCard from "../../components/companies/QualifiedCompanyCard";

export default function QualifiedCompanies() {

  const { workflow } = useWorkflow();

  if (!workflow) {
    return (
      <h2>
        Run the workflow first.
      </h2>
    );
  }

  return (

    <div className="companies-page">

      <h1>Qualified Companies</h1>

      <div className="companies-grid">

        {workflow.qualified_companies.map(

          (company, index) => (

            <QualifiedCompanyCard

              key={index}

              company={company}

            />

          )

        )}

      </div>

    </div>

  );
}