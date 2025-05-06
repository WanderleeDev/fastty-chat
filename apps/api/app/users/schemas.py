from pydantic import UUID4, BaseModel, EmailStr, Field, field_validator, ConfigDict
from typing import Optional
from app.core import Timestamp
from app.utils import validate_password


class UserBase(BaseModel):
    name: str = Field(
        min_length=3,
        max_length=30,
        description="Full name of the user",
    )
    email: EmailStr = Field(description="Primary email address for communication")
    password: str = Field(min_length=8, description="User password (min 8 characters)")


class UserCreate(UserBase):
    @field_validator("password")
    def base_validate_password(cls, password):
        return validate_password(password)

    model_config = ConfigDict(
        str_strip_whitespace=True,
        json_schema_extra={
            "example": {
                "name": "Wanderlee Max",
                "email": "wanderlee.max@example.com",
                "password": "MyP@ssw0rd",
            }
        },
    )


class UserUpdate(BaseModel):
    name: Optional[str] = Field(default=None, min_length=3, max_length=30)
    email: Optional[EmailStr] = Field(default=None)
    password: Optional[str] = Field(default=None, min_length=8)

    @field_validator("password")
    def update_validate_password(cls, password):
        if password is not None:
            return validate_password(password)
        return password

    model_config = ConfigDict(
        str_strip_whitespace=True,
        json_schema_extra={
            "example": {
                "name": "Wanderlee Max",
                "email": "wanderlee.max@example.com",
                "password": "MyP@ssw0rd",
            }
        },
    )


class UserResponse(Timestamp):
    id: UUID4 = Field(description="Unique identifier for the user")
    name: str = Field(
        min_length=3, max_length=30, description="Full name of the registered user"
    )
    email: EmailStr = Field(description="Registered primary email address")

    model_config = ConfigDict(
        from_attributes=True,
        extra="forbid",
        json_schema_extra={
            "example": {
                "id": "123e4567-e89b-12d3-a456-426614174000",
                "name": "Wanderlee Max",
                "email": "wanderlee.max@example.com",
                "created_at": "2022-01-01T00:00:00",
                "updated_at": "2022-01-01T00:00:00",
            }
        },
    )
