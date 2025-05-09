from fastapi import HTTPException, status
from app.core import ResponseMessage
from app.dependencies import SessionDep
from app.users.models import User
from app.users.schemas import UserCreate, UserUpdate
from app.users.exceptions import (
    UserNotFoundError,
    UserAlreadyExistsError,
    UserCreationError,
    UserUpdateError,
)
from app.users.dependencies import UserRepositoryDep
from database import handle_error
from typing import List
from uuid import UUID


async def get_users_service(
    offset: int, limit: int, repository: UserRepositoryDep
) -> List[User]:
    """
    Retrieve a paginated list of all registered users.

    Args:
        offset (int): Number of users to skip (pagination).
        limit (int): Maximum number of users to return.

    Returns:
        List[User]: List of found users.
    """
    try:
        return await repository.get_list(offset, limit)
    except Exception as e:
        handle_error(e)


async def get_user_service(user_id: UUID, repository: UserRepositoryDep):
    """
    Retrieve a user by ID.

    Args:
        user_id (UUID): ID of the user to retrieve.
        repository (UserRepositoryDep): User repository dependency.

    Raises:
        UserNotFoundError: If the user is not found.

    Returns:
        User: Found user.
    """
    try:
        user = await repository.get_by_id(user_id)

        if user is None:
            raise UserNotFoundError(user_id)

        return user
    except Exception as e:
        handle_error(e)


async def create_user_service(
    user_data: UserCreate, repository: UserRepositoryDep
) -> ResponseMessage:
    try:
        is_repeat_user = await repository.find_by_email(user_data.email)

        if is_repeat_user:
            raise UserAlreadyExistsError(email=user_data.email)

        user_to_db = user_data.model_dump(exclude_unset=True, exclude_none=True)

        result = await repository.create(user_to_db)

        if result is None:
            raise UserCreationError()

        return {"message": "Successfully created user"}
    except Exception as e:
        handle_error(e)


async def update_user_service(
    user_id: UUID, user_data: UserUpdate, repository: UserRepositoryDep
) -> ResponseMessage:
    user_to_update = user_data.model_dump(exclude_none=True, exclude_unset=True)

    if not user_to_update:
        raise UserUpdateError()

    try:
        result = await repository.update(user_id, user_to_update)

        if result is None:
            raise UserUpdateError(
                f"El usuario con el {str(user_id)} proporcionado no existe."
            )

        return {"message": "Successfully updated user"}
    except Exception as e:
        handle_error(e)


async def delete_user_service(user_id: UUID, repository: UserRepositoryDep) -> ResponseMessage:
    try:
        has_deleted_user = await repository.delete(user_id)
        if not has_deleted_user:
            raise UserNotFoundError(user_id)
        return {"message": "Successfully deleted user"}
    except Exception as e:
        handle_error(e)
