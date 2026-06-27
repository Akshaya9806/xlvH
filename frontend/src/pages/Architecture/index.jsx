import "../../styles/architecture.css";

export default function Architecture() {
  return (
    <div className="architecture">

      <h1>Platform Architecture</h1>

      <div className="architecture-box">

        <div className="node">

          React Frontend

        </div>

        ↓

        <div className="node">

          FastAPI Backend

        </div>

        ↓

        <div className="node">

          LangGraph

        </div>

        ↓

        <div className="node">

          Planner Agent

        </div>

        ↓

        <div className="node">

          Trigger Agent

        </div>

        ↓

        <div className="node">

          Search Agent

        </div>

        ↓

        <div className="node">

          Research Agent

        </div>

        ↓

        <div className="node">

          Qualification Agent

        </div>

        ↓

        <div className="node">

          Recommendation Agent

        </div>

        ↓

        <div className="node">

          Report Agent

        </div>

      </div>

    </div>
  );
}