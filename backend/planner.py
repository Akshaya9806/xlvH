import json

from services.gemini_service import gemini_service
from prompts.planner_prompt import PLANNER_PROMPT
from state import AgentState


class Planner:

    def run(self, state: AgentState):

        prompt = PLANNER_PROMPT.format(
            query=state["user_query"]
        )

        response = gemini_service.generate(prompt)

        print("\n========== RAW GEMINI RESPONSE ==========")
        print(response)
        print("=========================================\n")

        # Clean Gemini response
        cleaned_response = (
            response
            .replace("```json", "")
            .replace("```", "")
            .strip()
        )

        try:
            result = json.loads(cleaned_response)

            state["task"] = result.get("task") or "Lead Discovery"
            state["domain"] = result.get("business_domain") or "All Industries"
            state["status"] = "Planning Complete"

            state["workflow_logs"].append(
                "Planner completed successfully."
            )

            # Store planner outputs if they exist
            state["current_agent"] = "Planner Agent"

            if "execution_plan" in result:
                state["execution_plan"] = result["execution_plan"]

            if "target_persona" in result:
                state["target_persona"] = result.get("target_persona") or "Decision Maker"

            if "business_trigger" in result:
                state["business_trigger"] = result.get("business_trigger") or "general_search"

        except Exception as e:

            print("\nPlanner Parsing Error\n")
            print(e)

            state["status"] = "Planning Failed"

            state["workflow_logs"].append(
                f"Planner parsing failed: {str(e)}"
            )

        return state