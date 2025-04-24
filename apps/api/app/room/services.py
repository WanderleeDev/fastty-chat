from fastapi import HTTPException, status
from typing import List
from sqlmodel import select
from app.dependencies import SessionDep
from app.room.models import Room, RoomCreate
from app.core import ResponseMessage
from app.utils import find_resource


async def highlighted_rooms_service(db: SessionDep) -> List[Room]:
    """
    Retrieve a list of highlighted rooms.

    Args:
        db (SessionDep): Database session dependency.

    Returns:
        List[Room]: List of highlighted rooms.
    """
    statement = select(Room).where(Room.rating >= 5).limit(20)
    return db.exec(statement).all()



async def create_room_service(room_data: RoomCreate,  db: SessionDep) -> ResponseMessage:    
    """
        Create a new room

        Args:
            room_data (RoomCreate): Data for the room to create.
            db (SessionDep): Database session dependency.

        Returns:
            ResponseMessage: Success message.

        Raises:
            HTTPException: If the room name is already registered (409).
    """

    is_repeat_title = find_resource(Room, db, [Room.title == room_data.title])

    if is_repeat_title:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail=f"A room with the name {room_data.title} has already been registered")

    room_to_db = Room.model_validate(room_data.model_dump())
    db.add(room_to_db)
    db.commit()
    db.refresh(room_to_db)

    return  {"message": f"Successfully {room_data.title} created room"}
