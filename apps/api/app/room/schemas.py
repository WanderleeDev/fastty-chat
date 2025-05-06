from pydantic import BaseModel, Field, ConfigDict
from app.core import Timestamp
from typing import Optional
from uuid import UUID


class RoomBase(BaseModel):
    title: str = Field(min_length=3, max_length=150)
    description: Optional[str] = Field(default=None, max_length=500)
    image: Optional[str] = Field(default=None)
    category: str = Field(min_length=3, max_length=150)


class RoomCreate(RoomBase):
    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "title": "Games x all",
                "description": "Games, cheats, etc",
                "image": "https://www.nintendo.com/successor/en-us/sns2.png",
                "category": "Gaming",
            }
        }
    )


class RoomUpdate(BaseModel):
    title: Optional[str] = Field(default=None, min_length=3, max_length=150)
    description: Optional[str] = Field(default=None, max_length=500)
    image: Optional[str] = Field(default=None)
    category: Optional[str] = Field(default=None, min_length=3, max_length=150)
    participants: Optional[int] = Field(default=None, ge=0)
    rating: Optional[int] = Field(default=None, ge=0)


class RoomResponse(RoomBase, Timestamp):
    id: UUID
    participants: int = Field(default=0, ge=0)
    rating: int = Field(default=0, ge=0)

    model_config = ConfigDict(
        from_attributes=True,
        json_schema_extra={
            "example": {
                "id": "123e4567-e89b-12d3-a456-426614174000",
                "title": "Room Title",
                "description": "Room Description",
                "image": "Room Image",
                "category": "Room Category",
                "participants": 0,
                "rating": 0,
                "created_at": "2022-01-01T00:00:00",
                "updated_at": "2022-01-01T00:00:00",
            }
        },
    )
