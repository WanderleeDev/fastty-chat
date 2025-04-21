from fastapi import HTTPException, status

class DuplicateCategoryError(HTTPException):
    message: str = "The caegoria in question already exists"

    def __init__(self, detail: str = message):
        super().__init__(status_code=status.HTTP_409_CONFLICT, detail=detail)