from state import AgentState
from services.research_service import research_service


def research_agent(state: AgentState):

    state["current_agent"] = "Research Agent"

    enriched = research_service.enrich(
        state["companies"]
    )

    state["companies"] = enriched

    state["workflow_logs"].append(
        f"Research completed for {len(enriched)} companies."
    )

    return state