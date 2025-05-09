from typing import Optional
from sqlalchemy import DateTime, func
from sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase
from sqlalchemy.sql import func
from sqlalchemy import String
from uuid import uuid4


class Base(DeclarativeBase):
    pass


class BaseModel(Base):
    """
    Base class for all models in the application.

    Includes common columns that are shared across all models, such as the `id`, `created_at` and `updated_at` columns.
    """

    __abstract__ = True

    id: Mapped[str] = mapped_column(
        String(36), primary_key=True, index=True, default=lambda: str(uuid4())
    )
    created_at: Mapped[DateTime] = mapped_column(
        DateTime, default=func.now(), nullable=False
    )
    updated_at: Mapped[Optional[DateTime]] = mapped_column(
        DateTime, default=None, nullable=True, onupdate=func.now()
    )
