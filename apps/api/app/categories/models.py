from typing import List, Optional
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

class CategoryPaginated(SQLModel):
    content: List[Category] = Field(default=[])
    total_pages: int = Field(default=0)
    current_page: int = Field(default=0)
    total_items: int = Field(default=0)
    offset: int = Field(default=0)
    limit: int = Field(default=4)
    prev_page: Optional[int] = Field(default=None)
    next_page: Optional[int] = Field(default=None)
    has_prev: bool = Field(default=False)
    has_next: bool = Field(default=False)

    model_config = {
        "json_schema_extra": {
            "example": {
                "content": [
                    {
                        "id": "123e4567-e89b-12d3-a456-426614174000",
                        "name": "Category Name",
                        "created_at": "2025-04-21T00:00:00.000Z",
                        "updated_at": "2025-04-21T00:00:00.000Z"
                    }
                ],
                "pages": 2,
                "current_page": 1,
                "total_items": 8,
                "offset": 0,
                "limit": 4,
                "prev_page": 0,
                "next_page": 2,
                "has_prev": False,
                "has_next": True
            }

        }
    }


class CategoryCreate(CategoryBase):
    pass