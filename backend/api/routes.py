from fastapi import APIRouter

from api.health import router as health_router
from api.agent import router as agent_router

router = APIRouter()

router.include_router(health_router)
router.include_router(agent_router)