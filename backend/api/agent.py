from fastapi import APIRouter

from graph import graph
from models.request import UserRequest

router = APIRouter()


@router.post("/run")
def run_workflow(request: UserRequest):

    initial_state = {
        "user_query": request.user_query,
        "task": "",
        "current_agent": "",
        "domain": "",
        "icp": {},
        "triggers": [],
        "companies": [],
        "qualified_companies": [],
        "recommendations": [],
        "final_report": None,
        "workflow_logs": [],
        "status": "Started"
    }

    return graph.invoke(initial_state)