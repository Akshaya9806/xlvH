import "./../../styles/reports.css";

export default function ReportViewer({ report }) {

  if (!report) {
    return (
      <div className="report-card">

        <h2>No Report Generated</h2>

        <p>
          Run the workflow to generate a report.
        </p>

      </div>
    );
  }

  return (

    <div className="report-card">

      <h1>📄 AI Generated Report</h1>

      <pre>

        {report}

      </pre>

    </div>

  );

}