from state import AgentState
from services.recommendation_service import recommendation_service


def recommendation_agent(state: AgentState):

    state["current_agent"] = "Recommendation Agent"

    recommendations = recommendation_service.generate(
        state["qualified_companies"]
    )

    state["recommendations"] = recommendations

    state["workflow_logs"].append(
        f"Generated {len(recommendations)} recommendations."
    )

    return state