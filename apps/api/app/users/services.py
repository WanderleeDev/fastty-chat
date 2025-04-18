from fastapi import HTTPException, status
from typing import List
from sqlmodel import select
from uuid import UUID
from app.core import ResponseMessage
from app.dependencies import SessionDep
from app.utils import find_resource
from app.users.models import User, UserCreate, UserUpdate


async def get_users_service(db: SessionDep, offset: int, limit: int) -> List[User]:
    """Retrieve a paginated list of all registered users.

    Args:
        db (SessionDep): Database session dependency.
        offset (int): Number of users to skip (pagination).
        limit (int): Maximum number of users to return.

    Returns:
        List[User]: List of found users.
    """
    query = select(User).offset(offset).limit(limit)
    return db.exec(query).all()



async def get_user_service(db: SessionDep, user_id: UUID) -> User:
    """Retrieve a user by their unique ID.

    Args:
        db (SessionDep): Database session dependency.
        user_id (UUID): Unique identifier of the user.

    Returns:
        User: The found user instance.

    Raises:
        HTTPException: If the user does not exist (404).
    """
    user = find_resource(User, db, [User.id == user_id])

    if user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    return user



async def create_user_service(db: SessionDep, user_data: UserCreate) -> ResponseMessage:
    """Create a new user in the database.

    Args:
        db (SessionDep): Database session dependency.
        user_data (UserCreate): Data for the user to create.

    Returns:
        ResponseMessage: Success message.

    Raises:
        HTTPException: If the email is already registered (409).
    """
    is_repeat_user = find_resource(User, db, [User.email == user_data.email])

    if is_repeat_user:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="The email has already been registered")

    user_to_db = User.model_validate(user_data.model_dump())
    db.add(user_to_db)
    db.commit()
    db.refresh(user_to_db)

    return {"message": "Successfully created user"}



async def update_user_service(db: SessionDep, user_id: UUID, user_data: UserUpdate) -> ResponseMessage:
    """Update an existing user in the database.

    Args:
        db (SessionDep): Database session dependency.
        user_id (UUID): Unique identifier of the user to update.
        user_data (UserUpdate): Data to update in the user.

    Returns:
        ResponseMessage: Success message.

    Raises:
        HTTPException: If the user does not exist (404) or no fields to update (400).
    """
    user = find_resource(User, db, [User.id == user_id])

    if user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    user_data_formatter = user_data.model_dump(exclude_unset=True) 

    if not user_data_formatter:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="No fields to update")

    for key, value in user_data_formatter.items():
        setattr(user, key, value)

    db.commit()
    db.refresh(user)

    return {"message": "Successfully updated user"}



async def delete_user_service(db: SessionDep, user_id: UUID) -> ResponseMessage:
    """Delete an existing user from the database.

    Args:
        db (SessionDep): Database session dependency.
        user_id (UUID): Unique identifier of the user to delete.

    Returns:
        ResponseMessage: Success message.

    Raises:
        HTTPException: If the user does not exist (404).
    """
    user_to_db = find_resource(User, db , [User.id == user_id])

    if not user_to_db:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    db.delete(user_to_db)
    db.commit()

    return {"message": "Successfully deleted user"}
