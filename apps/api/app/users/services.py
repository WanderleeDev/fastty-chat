from sqlalchemy import select, insert, update
from fastapi import HTTPException, status
from app.core import ResponseMessage
from app.dependencies import SessionDep
from app.utils import find_resource, is_equals
from app.users.models import User
from app.users.schemas import UserResponse, UserCreate, UserUpdate
from typing import List
from uuid import UUID


async def get_users_service(
    db: SessionDep, offset: int, limit: int
) -> List[UserResponse]:
    """
    Retrieve a paginated list of all registered users.

    Args:
        db (SessionDep): Database session dependency.
        offset (int): Number of users to skip (pagination).
        limit (int): Maximum number of users to return.

    Returns:
        List[UserResponse]: List of found users.
    """
    statement = select(User).offset(offset).limit(limit)
    result = await db.execute(statement)
    return result.scalars().all()


async def get_user_service(db: SessionDep, user_id: UUID) -> UserResponse:
    """
    Retrieve a user by their unique ID.

    Args:
        db (SessionDep): Database session dependency.
        user_id (UUID): Unique identifier of the user.

    Returns:
        UserResponse: The found user instance.

    Raises:
        HTTPException: If the user does not exist (404).
    """
    user = await db.get(User, user_id)

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )

    return user


async def create_user_service(db: SessionDep, user_data: UserCreate) -> ResponseMessage:
    """
    Create a new user in the database.

    Args:
        db (SessionDep): Database session dependency.
        user_data (UserCreate): Data for the user to create.

    Returns:
        ResponseMessage: Success message.

    Raises:
        HTTPException: If the email is already registered (409).
    """
    is_repeat_user = await find_resource(User, db, [User.email == user_data.email])

    if is_repeat_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="The email has already been registered",
        )

    user_to_db = User(**user_data.model_dump(exclude_unset=True, exclude_none=True))
    db.add(user_to_db)
    await db.commit()
    await db.refresh(user_to_db)

    return {"message": "Successfully created user"}


async def update_user_service(
    db: SessionDep, user_id: UUID, user_data: UserUpdate
) -> ResponseMessage:
    """
    Update an existing user in the database.

    Args:
        db (SessionDep): Database session dependency.
        user_id (UUID): Unique identifier of the user to update.
        user_data (UserUpdate): Data to update in the user.

    Returns:
        ResponseMessage: Success message.

    Raises:
        HTTPException: If the user does not exist (404) or no fields to update (400).
    """
    has_changes = False
    user = await db.get(User, user_id)

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )

    user_data_formatter = user_data.model_dump(exclude_unset=True, exclude_none=True)

    if not user_data_formatter:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="No fields to update"
        )

    for key, value in user_data_formatter.items():
        current_value = getattr(user, key)

        if not is_equals(current_value, value, case_sensitive=True):
            has_changes = True
            setattr(user, key, value)
    

    if not has_changes:
        return {"message": "Values are the same. No changes to update"}

    await db.commit()
    await db.refresh(user)

    return {"message": "Successfully updated user"}


async def delete_user_service(db: SessionDep, user_id: UUID) -> ResponseMessage:
    """
    Delete an existing user from the database.

    Args:
        db (SessionDep): Database session dependency.
        user_id (UUID): Unique identifier of the user to delete.

    Returns:
        ResponseMessage: Success message.

    Raises:
        HTTPException: If the user does not exist (404).
    """
    user_to_db = await find_resource(User, db, [User.id == user_id])

    if not user_to_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )

    await db.delete(user_to_db)
    await db.commit()

    return {"message": "Successfully deleted user"}
