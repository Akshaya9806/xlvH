from state import AgentState
from services.company_discovery_service import company_discovery_service


def search_agent(state: AgentState):

    state["current_agent"] = "Search Agent"

    companies = company_discovery_service.search_companies(
        industry=state.get("domain"),
        trigger=state.get("business_trigger"),
        country="India"
    )

    state["companies"] = companies

    state["workflow_logs"].append(
        f"Company Discovery found {len(companies)} companies."
    )

    return state