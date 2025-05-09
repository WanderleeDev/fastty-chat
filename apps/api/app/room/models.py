from uuid import uuid4
from sqlalchemy import Column, Integer, String, UUID
from app.core import Base, BaseModel


class Room(Base, BaseModel):
    __tablename__ = "rooms"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    title = Column(String, nullable=False, unique=True)
    description = Column(String, nullable=True, default=None)
    image = Column(String, nullable=True, default=None)
    category = Column(String, nullable=False)
    participants = Column(Integer, nullable=False, default=0)
    rating = Column(Integer, nullable=False, default=0)
