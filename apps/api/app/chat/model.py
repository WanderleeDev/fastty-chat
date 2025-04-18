from sqlmodel import Field
from app.core import BaseModel
import uuid

class ChatBase(BaseModel):
    content: str = Field(max_length=255)
    user_id: uuid.UUID = Field(foreign_key="user.id")
    room_id: uuid.UUID = Field(foreign_key="room.id")


class Chat(ChatBase):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)


class ChatCreate(ChatBase):
    pass


class ChatUpdate(ChatBase):
    pass
