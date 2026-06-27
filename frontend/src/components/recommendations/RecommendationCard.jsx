import "./../../styles/recommendations.css";

export default function RecommendationCard({ recommendation }) {

  return (
    <div className="recommendation-card">

      <div className="recommendation-top">

        <h2>
          {recommendation.company || recommendation.company_name || "Unknown Company"}
        </h2>

        <span className="priority high">

          HIGH

        </span>

      </div>

      <div className="score-box">

        <h3>

          Opportunity Score

        </h3>

        <h1>

          {recommendation.score || recommendation.opportunity_score || 90}%

        </h1>

      </div>

      <div className="recommendation-section">

        <strong>Reason</strong>

        <p>

          {recommendation.reason ||
            "Strong ICP match based on hiring, funding and technology stack."}

        </p>

      </div>

      <div className="recommendation-section">

        <strong>Suggested Action</strong>

        <p>

          {recommendation.action ||
            "Initiate personalized outreach and schedule discovery meeting."}

        </p>

      </div>

    </div>
  );

}