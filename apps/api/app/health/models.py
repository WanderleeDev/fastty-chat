from sqlmodel import SQLModel


class HealthCheckResponse(SQLModel):
    status: str
    message: str

    model_config = {
        "json_schema_extra": {
            "example": {"status": "ok", "message": "Application is fully functional"}
        }
    }
