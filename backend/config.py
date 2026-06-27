import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    APP_NAME = os.getenv("APP_NAME", "XLVentures AI Agent")
    APP_ENV = os.getenv("APP_ENV", "development")

    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")

    MODEL_NAME = os.getenv("MODEL_NAME", "gemini-2.5-flash")

    DATABASE_URL = os.getenv(
        "DATABASE_URL",
        "sqlite:///database/xlventures.db"
    )


config = Config()