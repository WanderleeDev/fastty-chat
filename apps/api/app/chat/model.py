from sqlmodel import Field
from app.core import BaseModel
from uuid import UUID, uuid4

class ChatBase(BaseModel):
    content: str = Field(max_length=255)
    user_id: UUID = Field(foreign_key="user.id")
    room_id: UUID = Field(foreign_key="room.id")


class Chat(ChatBase):
    id: UUID = Field(default_factory=uuid4, primary_key=True)


class ChatCreate(ChatBase):
    pass


class ChatUpdate(ChatBase):
    pass
