from fastapi import HTTPException, status

class PasswordValidationError(HTTPException):
    message: str = "The password must have at least 8 characters, uppercase letters, lowercase letters, numbers and at least one special character"

    def __init__(self, detail: str = message):
        super().__init__(status_code=status.HTTP_400_BAD_REQUEST, detail=detail)