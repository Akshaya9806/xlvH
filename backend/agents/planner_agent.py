from state import AgentState
from planner import Planner


planner = Planner()


def planner_agent(state: AgentState):

    return planner.run(state)