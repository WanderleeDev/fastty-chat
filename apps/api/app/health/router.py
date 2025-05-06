from fastapi import APIRouter
from app.health.models import HealthCheckResponse

health_router = APIRouter()


@health_router.get("", response_model=HealthCheckResponse, status_code=200)
async def health_check():
    """
    Health check endpoint from monitoring
    """
    return {"status": "ok", "message": "Application is fully functional"}
