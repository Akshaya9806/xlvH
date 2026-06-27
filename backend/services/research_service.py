from mock_data.company_profiles import COMPANY_PROFILES


class ResearchService:

    def enrich(self, companies):

        enriched = []

        for company in companies:

            profile = COMPANY_PROFILES.get(company["name"], {})

            enriched.append({
                **company,
                **profile
            })

        return enriched


research_service = ResearchService()