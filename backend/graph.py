from langgraph.graph import StateGraph, END

from state import AgentState

from agents.planner_agent import planner_agent
from agents.search_agent import search_agent

from agents.trigger_agent import trigger_agent

from agents.research_agent import research_agent

from agents.qualification_agent import qualification_agent

from agents.recommendation_agent import recommendation_agent

from agents.report_agent import report_agent

builder = StateGraph(AgentState)

builder.add_node("qualification", qualification_agent)

builder.add_node("report", report_agent)

builder.add_node("recommendation", recommendation_agent)

builder.add_node("planner", planner_agent)
builder.add_node("trigger", trigger_agent)

builder.add_node("search", search_agent)
builder.add_node("research", research_agent)

builder.set_entry_point("planner")

builder.add_edge("planner", "trigger")
builder.add_edge("trigger", "search")
builder.add_edge("search", "research")
builder.add_edge("research", "qualification")
builder.add_edge("qualification", "recommendation")
builder.add_edge("recommendation", "report")
builder.add_edge("research", END)

graph = builder.compile()