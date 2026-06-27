from services.gemini_service import gemini_service

response = gemini_service.generate(
    "Say hello in one sentence."
)

print(response)