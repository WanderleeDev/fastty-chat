from sqlmodel import SQLModel, Field
from datetime import datetime
from typing import Optional
from sqlalchemy import event

class BaseModel(SQLModel):
    created_at: datetime = Field(default_factory=datetime.now)
    edited_at: Optional[datetime] = Field(default=None)

@event.listens_for(SQLModel, "before_update", propagate=True)
def set_edited_at(mapper, connection, target):
    if hasattr(target, "edited_at"):
        target.edited_at = datetime.now()


class ResponseMessage(SQLModel):
    message: str = Field(min_length=1, max_length=100)

    model_config = {
        "json_schema_extra": {
            "example": {
                "message": "message example"
            }
        }
    }
