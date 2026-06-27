import "./../../styles/companies.css";

export default function CompanyCard({ company }) {
  return (
    <div className="company-card">

      <div className="company-header">
        <h2>{company.name || "Unknown Company"}</h2>

        <span className="status">
          {company.status || "Discovered"}
        </span>
      </div>

      <div className="company-info">

        <p>
          <strong>Industry:</strong>{" "}
          {company.industry || "N/A"}
        </p>

        <p>
          <strong>Domain:</strong>{" "}
          {company.domain || "N/A"}
        </p>

        <p>
          <strong>Funding:</strong>{" "}
          {company.funding || "N/A"}
        </p>

        <p>
          <strong>Employees:</strong>{" "}
          {company.employees || "N/A"}
        </p>

      </div>

    </div>
  );
}