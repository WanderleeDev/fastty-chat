from sqlalchemy import Column, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func

Base = declarative_base()


class TimestampMixin:
    """
    Mixin to add timestamps to models.
    """

    created_at = Column(DateTime, default=func.now(), nullable=False)
    updated_at = Column(DateTime, default=None, nullable=True, onupdate=func.now())
