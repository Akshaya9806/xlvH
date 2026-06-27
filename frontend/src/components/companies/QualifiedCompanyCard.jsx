import "./../../styles/companies.css";

export default function QualifiedCompanyCard({ company }) {
  return (
    <div className="qualified-card">

      <div className="qualified-header">

        <h2>{company.name}</h2>

        <span className="score">

          {company.score || 95}%

        </span>

      </div>

      <p>

        <strong>Reason</strong>

      </p>

      <p>

        {company.reason ||
          "Matches ICP and business triggers."}

      </p>

      <div className="tags">

        <span>AI</span>

        <span>Series C</span>

        <span>High Priority</span>

      </div>

    </div>
  );
}