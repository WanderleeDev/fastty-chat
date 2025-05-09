from sqlalchemy.orm import mapped_column, Mapped
from app.core import BaseModel
from sqlalchemy import String


class User(BaseModel):
    __tablename__ = "users"

    name: Mapped[str] = mapped_column(String(100), nullable=False)
    email: Mapped[str] = mapped_column(
        String(100), nullable=True, unique=True, index=True
    )
    password: Mapped[str] = mapped_column(String(100), nullable=True)
