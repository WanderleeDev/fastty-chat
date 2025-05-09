from re import S
from fastapi import HTTPException, status
from sqlalchemy.exc import IntegrityError, SQLAlchemyError


class DatabaseError(HTTPException):
    """
    Generic database-related error for operations.
    """

    def __init__(self, error: Exception):
        match error:
            case IntegrityError():
                status_code = status.HTTP_409_CONFLICT
                detail = "Database integrity error"
            case SQLAlchemyError():
                status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
                detail = "Database operation failed"
            case _:
                status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
                detail = "An unexpected error occurred"

        super().__init__(
            status_code=status_code,
            detail=f"{detail}: {str(error)}",
        )


def handle_error(error: Exception):
    if isinstance(error, HTTPException):
        raise error

    raise DatabaseError(error)
