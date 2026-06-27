from mock_data.companies import COMPANIES


class CompanyDiscoveryService:

    def search_companies(
        self,
        industry: str,
        trigger: str,
        country: str,
    ):

        industry = (industry or "").lower()
        trigger = (trigger or "").lower()
        country = (country or "").lower()

        results = []

        for company in COMPANIES:

            industry_match = (
                industry == ""
                or industry == "general"
                or industry in company["industry"].lower()
            )

            trigger_match = (
                trigger == ""
                or trigger == "any trigger"
                or trigger == "general_search"
                or trigger == company["trigger"].lower()
            )

            country_match = (
                country == ""
                or country == "global"
                or country in company["country"].lower()
            )

            if industry_match and trigger_match and country_match:
                results.append(company)

        return results


company_discovery_service = CompanyDiscoveryService()