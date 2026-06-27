from state import AgentState


TRIGGERS = {
    "funding": [
        "raised funding",
        "series a",
        "series b",
        "investment",
        "venture capital"
    ],
    "hiring": [
        "hiring",
        "job opening",
        "careers",
        "recruiting"
    ],
    "expansion": [
        "new office",
        "expansion",
        "global expansion"
    ],
    "product": [
        "product launch",
        "launch",
        "released",
        "new product"
    ],
    "partnership": [
        "partnership",
        "collaboration",
        "strategic alliance"
    ]
}


def trigger_agent(state: AgentState):

    query = state["user_query"].lower()

    detected = []

    for trigger, keywords in TRIGGERS.items():

        for keyword in keywords:

            if keyword in query:
                detected.append(trigger)
                break

    if not detected:
        detected.append("general_search")

    state["triggers"] = detected

    state["current_agent"] = "Trigger Agent"

    state["workflow_logs"].append(
        f"Trigger Agent detected: {', '.join(detected)}"
    )

    return state