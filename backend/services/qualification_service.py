class QualificationService:

    def qualify(self, companies, target_persona):

        qualified = []

        for company in companies:

            score = 0

            if company["industry"] == "Healthcare":
                score += 40

            if company["country"] == "India":
                score += 20

            if company["employee_count"] >= 50:
                score += 20

            if len(company["decision_makers"]) > 0:
                score += 20

            company["qualification_score"] = score
            company["target_persona"] = target_persona

            if score >= 70:
                company["qualification"] = "Qualified"
                qualified.append(company)
            else:
                company["qualification"] = "Not Qualified"

        return qualified


qualification_service = QualificationService()