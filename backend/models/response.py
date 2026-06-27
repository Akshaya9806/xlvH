from pydantic import BaseModel
from typing import List, Dict, Any


class WorkflowResponse(BaseModel):
    status: str
    current_agent: str
    workflow_logs: List[str]
    companies: List[Dict[str, Any]]