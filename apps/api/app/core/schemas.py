from pydantic import BaseModel, Field, ConfigDict, UUID4
from typing import Optional
from datetime import datetime


class ResponseMessage(BaseModel):
    message: str = Field(
        min_length=1,
        max_length=100,
        description="Descriptive message about the operation result",
    )

    model_config = ConfigDict(
        from_attributes=True,
        json_schema_extra={"example": {"message": "Created successfully"}},
    )


class PydanticBaseModel(BaseModel):
    id: UUID4 = Field(description="Unique identifier")
    created_at: datetime = Field(description="Creation date")
    updated_at: Optional[datetime] = Field(default=None, description="Update date")

    model_config = ConfigDict(
        from_attributes=True,
        json_schema_extra={
            "example": {
                "created_at": "2022-01-01T00:00:00",
                "updated_at": "2022-01-01T00:00:00",
            }
        },
    )
