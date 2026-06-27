from google import genai
from google.genai.errors import ClientError

from config import config


class GeminiService:

    def __init__(self):
        self.client = genai.Client(
            api_key=config.GEMINI_API_KEY
        )

        self.model = config.MODEL_NAME

    def generate(self, prompt: str):

        try:
            response = self.client.models.generate_content(
                model=self.model,
                contents=prompt
            )

            return response.text

        except ClientError as e:
            return f"Gemini API Error: {e}"

        except Exception as e:
            return f"Unexpected Error: {e}"


gemini_service = GeminiService()