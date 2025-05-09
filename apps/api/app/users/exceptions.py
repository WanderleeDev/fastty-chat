from typing import Optional
from uuid import UUID
from fastapi import HTTPException, status
from sqlalchemy.exc import IntegrityError, SQLAlchemyError


class UserAlreadyExistsError(HTTPException):
    """
    Exception raised when a user with the same email already exists.
    """

    def __init__(self, email: str):
        super().__init__(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"User with email {email} already exists",
        )


class UserNotFoundError(HTTPException):
    """
    Exception raised when a user is not found.
    """

    def __init__(self, user_id=Optional[UUID]):
        super().__init__(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=(
                f"User not found"
                if user_id is None
                else f"User with ID {str(user_id)} not found"
            ),
        )


class UserCreationError(HTTPException):
    """
    Exception raised when there are issues creating a user.
    """

    def __init__(
        self, reason: Optional[str] = "Failed to create the user in the database"
    ):
        super().__init__(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=reason
        )


class UserUpdateError(HTTPException):
    """
    Exception raised when there are issues updating a user.
    """

    def __init__(self, reason: Optional[str] = "No fields to update"):
        super().__init__(status_code=status.HTTP_400_BAD_REQUEST, detail=reason)


class UserDatabaseError(HTTPException):
    """
    Generic database-related error for user operations.
    """

    def __init__(self, original_error: Exception):
        if isinstance(original_error, IntegrityError):
            status_code = status.HTTP_409_CONFLICT
            detail = "Database integrity error"
        elif isinstance(original_error, SQLAlchemyError):
            status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
            detail = "Database operation failed"
        else:
            status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
            detail = "An unexpected database error occurred"

        super().__init__(
            status_code=status_code, detail=f"{detail}: {str(original_error)}"
        )


def handle_db_error(error: Exception):
    """
    Convierte errores de base de datos en excepciones HTTP manejables.
    """
    if isinstance(error, HTTPException):
        raise error

    raise UserDatabaseError(error)
