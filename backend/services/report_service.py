class ReportService:

    def generate(self, state):

        report = []

        report.append("=" * 60)
        report.append("XLVentures AI Lead Discovery Report")
        report.append("=" * 60)

        report.append("")
        report.append(f"User Query : {state['user_query']}")
        report.append("")

        report.append(f"Task : {state['task']}")
        report.append(f"Industry : {state['domain']}")
        report.append(f"Target Persona : {state['target_persona']}")
        report.append("")

        report.append("Qualified Companies")
        report.append("-" * 60)

        for company in state["qualified_companies"]:

            report.append(f"Company : {company['name']}")
            report.append(f"Industry : {company['industry']}")
            report.append(f"Country : {company['country']}")
            report.append(f"Score : {company['qualification_score']}")
            report.append("")

        report.append("Recommendations")
        report.append("-" * 60)

        for recommendation in state["recommendations"]:

            report.append(f"Company : {recommendation['company']}")
            report.append(f"Priority : {recommendation['priority']}")
            report.append(
                f"Action : {recommendation['recommended_action']}"
            )
            report.append("")

        return "\n".join(report)


report_service = ReportService()