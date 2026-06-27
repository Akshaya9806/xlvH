from state import AgentState
from services.report_service import report_service


def report_agent(state: AgentState):

    state["current_agent"] = "Report Agent"

    state["final_report"] = report_service.generate(state)

    state["workflow_logs"].append(
        "Final report generated."
    )

    return state