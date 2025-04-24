from typing import Optional
from sqlmodel import Field, SQLModel
from app.core import BaseModel
from uuid import  UUID, uuid4
    
class Room(BaseModel, table=True):
    id: UUID = Field(default_factory=uuid4, primary_key=True)
    title: str = Field(min_length=1, max_length=255, unique=True)
    image: Optional[str] = Field(default=None)
    category: str = Field(min_length=1, max_length=255)
    participants: int = Field(default=0, gt=0)
    rating: Optional[int] = Field(default=None, ge=0)


    model_config = {
        "json_schema_extra": {
            "example": {
                "id": "123e4567-e89b-12d3-a456-426614174000",
                "title": "Room 1",
                "image": "https://example.com/room1.jpg",
                "category": "gaming",
                "participants": 10,
                "rating": 5,
                "created_at": "2023-01-01T00:00:00.000Z",
                "edited_at": "2023-01-01T00:00:00.000Z"
            }
        }
    }


class RoomUpdate(SQLModel):
    title: Optional[str] = Field(default=None, min_length=1, max_length=255)
    image: Optional[str] = Field(default=None)
    category: Optional[str] = Field(default=None ,min_length=1, max_length=255)
    participants: Optional[int] = Field(default=None, ge=0)


class RoomCreate(SQLModel):
    title: str = Field(min_length=1, max_length=255, unique=True)
    image: Optional[str] = Field(default=None)
    category: str = Field(min_length=1, max_length=255)
