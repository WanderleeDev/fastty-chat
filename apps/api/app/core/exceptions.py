from fastapi import HTTPException, status


class NotFoundError(HTTPException):
    message: str = "User not found"

    def __init__(self, detail: str = message):
        super().__init__(status_code=status.HTTP_404_NOT_FOUND, detail=detail)
