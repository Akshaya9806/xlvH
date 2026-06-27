import "./../../styles/recommendations.css";

export default function RecommendationDetails({ recommendation }) {

  return (

    <div className="details-card">

      <h2>

        Recommendation Details

      </h2>

      <p>

        <strong>Company</strong>

      </p>

      <p>

        {recommendation.company}

      </p>

      <br/>

      <p>

        <strong>Business Trigger</strong>

      </p>

      <p>

        {recommendation.trigger || "Recently raised funding"}

      </p>

      <br/>

      <p>

        <strong>Target Persona</strong>

      </p>

      <p>

        {recommendation.persona || "CTO"}

      </p>

      <br/>

      <p>

        <strong>Execution Plan</strong>

      </p>

      <ul>

        <li>Personalized Email</li>

        <li>LinkedIn Outreach</li>

        <li>Schedule Demo</li>

      </ul>

    </div>

  );

}