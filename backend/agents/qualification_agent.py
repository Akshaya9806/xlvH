from state import AgentState
from services.qualification_service import qualification_service


def qualification_agent(state: AgentState):

    state["current_agent"] = "Qualification Agent"

    qualified = qualification_service.qualify(
        state["companies"],
        state["target_persona"]
    )

    state["qualified_companies"] = qualified

    state["workflow_logs"].append(
        f"{len(qualified)} companies qualified."
    )

    return state