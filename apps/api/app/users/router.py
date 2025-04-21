from fastapi import APIRouter
from app.dependencies import SessionDep
from app.users.models import User, UserCreate, UserUpdate
from app.core.models import ResponseMessage
from app.users.services import get_user_service, get_users_service, create_user_service, update_user_service, delete_user_service
from typing import List
from uuid import UUID


user_router = APIRouter()


@user_router.get("", response_model=List[User], status_code=200)
async def read_users(db: SessionDep, offset: int = 0, limit: int = 10):
    """
        Return a paginated list of users
    """
    return  await get_users_service(db, offset, limit)


@user_router.get("/{user_id}", response_model=User, status_code=200)
async def read_user(user_id: UUID, db: SessionDep):
    """
        Return a user by ID
    """
    return await get_user_service(db, user_id)


@user_router.post("", status_code=201, response_model=ResponseMessage)
async def create_user(user_data: UserCreate, db: SessionDep):
    """
        Create a new user
    """
    return await create_user_service(db, user_data)


@user_router.patch("/{user_id}", status_code=200, response_model=ResponseMessage)
async def update_user(user_id: UUID, user_data: UserUpdate, db: SessionDep):
    """
        Update an existing user
    """
    return await update_user_service(db, user_id, user_data)


@user_router.delete("/{user_id}", status_code=200, response_model=ResponseMessage)
async def delete_user(user_id: UUID, db: SessionDep):
    """
        Delete an existing user
    """
    return await delete_user_service(db, user_id)
