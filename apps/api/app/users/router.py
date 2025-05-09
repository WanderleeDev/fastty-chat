from fastapi import APIRouter
from app.dependencies import SessionDep
from app.users.schemas import UserCreate, UserResponse, UserUpdate
from app.core.schemas import ResponseMessage
from app.users.dependencies import UserRepositoryDep
from app.users.services import (
    get_user_service,
    get_users_service,
    create_user_service,
    update_user_service,
    delete_user_service,
)
from typing import List
from uuid import UUID


user_router = APIRouter()


@user_router.get("", response_model=List[UserResponse], status_code=200)
async def read_users(repository: UserRepositoryDep, offset: int = 0, limit: int = 10):
    """
    Return a paginated list of users
    """
    return await get_users_service(offset, limit, repository)


@user_router.get("/{user_id}", response_model=UserResponse, status_code=200)
async def read_user(user_id: UUID, repository: UserRepositoryDep):
    """
    Return a user by ID
    """
    return await get_user_service(user_id, repository)


@user_router.post("", status_code=201, response_model=ResponseMessage)
async def create_user(user_data: UserCreate, repository: UserRepositoryDep):
    """
    Create a new user
    """
    return await create_user_service(user_data, repository)


@user_router.patch("/{user_id}", status_code=200, response_model=ResponseMessage)
async def update_user(
    user_id: UUID, user_data: UserUpdate, repository: UserRepositoryDep
):
    """
    Update an existing user
    """
    return await update_user_service(user_id, user_data, repository)


@user_router.delete("/{user_id}", status_code=200, response_model=ResponseMessage)
async def delete_user(user_id: UUID, db: SessionDep):
    """
    Delete an existing user
    """
    return await delete_user_service(db, user_id)
