from fastapi import APIRouter
from app.dependencies import SessionDep
from app.room.models import Room, RoomCreate
from typing import List
from app.room.services import highlighted_rooms_service, create_room_service
from app.core import ResponseMessage

room_router = APIRouter()

@room_router.get("/highlights", response_model=List[Room], status_code=200)
async def read_highlighted_rooms(db: SessionDep):
    """
        Return the top 20 rooms by rating
    """
        
    return await highlighted_rooms_service(db)


@room_router.post("/", response_model=ResponseMessage, status_code=201)
async def create_room(room_data: RoomCreate,  db: SessionDep):    
    """
        Create a new room
    """

    return await create_room_service(room_data, db)
