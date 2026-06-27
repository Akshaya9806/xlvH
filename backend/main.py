from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config import config
from api.routes import router

app = FastAPI(
    title=config.APP_NAME,
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "XLVentures AI Agent Platform Running 🚀",
        "environment": config.APP_ENV,
        "version": "1.0.0"
    }


app.include_router(router)