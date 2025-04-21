from app.core import BaseModel
from sqlmodel import Field, SQLModel
from uuid import UUID, uuid4

class CategoryBase(SQLModel):
    name: str = Field(min_length=3, max_length=50, unique=True)


class Category(BaseModel,CategoryBase, table=True):
    id: UUID = Field(
        default_factory= uuid4, 
        primary_key=True
    )

    model_config = {
        "json_schema_extra": {
            "example": {
                "id": "123e4567-e89b-12d3-a456-426614174000",
                "name": "Category Name",
                "created_at": "2025-04-21T00:00:00.000Z",
                "updated_at": "2025-04-21T00:00:00.000Z"
            }
        }
    }

class CategoryCreate(CategoryBase):
    pass