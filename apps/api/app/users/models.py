from app.users.exceptions import PasswordValidationError
from sqlmodel import SQLModel, Field
from pydantic import EmailStr, field_validator
from uuid import uuid4, UUID
import re


class UserBase(SQLModel):
    name: str = Field(min_length=3, max_length=30)
    age: int = Field(ge=0, le=100)
    email: EmailStr = Field(sa_column_kwargs={"unique": True})


class User(UserBase, table=True):
    id: UUID = Field(
        default_factory= uuid4, 
        primary_key=True
    )


    model_config = {
        "json_schema_extra": {
            "example": {
                "id": "123e4567-e89b-12d3-a456-426614174000",
                "name": "Wanderlee Max",
                "age": 30,
                "email": "wanderlee.max@example.com",
                "created_at": "2023-01-01T00:00:00.000000",
                "edited_at": "2023-01-01T00:00:00.000000"
            }
        }
    }


class UserCreate(UserBase):
    password: str = Field()

    @field_validator("password")
    def validate_password(cls, password):
        regex = r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"

        if not re.match(regex, password):
            raise PasswordValidationError()

        return password
    

    model_config = {
        "json_schema_extra": {
            "example": {
                "name": "Wanderlee Max",
                "age": 30,
                "email": "wanderlee.max@example.com",
                "password": "MyP@ssw0rd"
            }
        }
    }


class UserUpdate(UserBase):
    model_config = {
        "json_schema_extra": {
            "example": {
                "name": "New Name",
                "age": 35,
                "email": "new.email@example.com"
            }
        }
    }
