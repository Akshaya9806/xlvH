from typing import TypedDict, List, Dict, Any, Optional


class AgentState(TypedDict):
    # User Input
    user_query: str

    # Planner Output
    task: str
    current_agent: str

    # Business Context
    domain: str
    icp: Dict[str, Any]
    triggers: List[str]

    # Research Results
    companies: List[Dict[str, Any]]
    qualified_companies: List[Dict[str, Any]]

    # Recommendations
    recommendations: List[Dict[str, Any]]
    execution_plan: List[str]

    target_persona: str

    business_trigger: str

    contacts: List[Dict[str, Any]]

    memory: Dict[str, Any]

    errors: List[str]

    # Reports
    final_report: Optional[str]

    # Workflow Tracking
    workflow_logs: List[str]

    # Status
    status: str