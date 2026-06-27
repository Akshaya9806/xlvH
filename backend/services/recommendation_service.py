class RecommendationService:

    def generate(self, companies):

        recommendations = []

        for company in companies:

            if company["qualification_score"] >= 90:

                recommendations.append({

                    "company": company["name"],

                    "priority": "HIGH",

                    "confidence": 95,

                    "reason": [
                        "Industry matches target domain",
                        "Recently raised funding",
                        "Decision makers identified",
                        "Company qualified with high score"
                    ],

                    "recommended_action":
                        f"Reach out to the {company['target_persona']} with a personalized AI solution proposal."

                })

        return recommendations


recommendation_service = RecommendationService()