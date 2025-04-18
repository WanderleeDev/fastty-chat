from fastapi import APIRouter
from app.chat.model import Chat, ChatCreate, ChatUpdate

chat_router= APIRouter()

@chat_router.get("/{user_id}", response_model=list[Chat], status_code=200)
async def read_all_chat_by_user():
    pass

@chat_router.get("/{user_id}", response_model=list[Chat], status_code=200)
async def read_one_chat_by_user(user_id: int):
    pass
