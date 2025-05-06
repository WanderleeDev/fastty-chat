from app.core import PasswordValidationError
import re


def validate_password(password: str) -> str:
    regex = r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"

    if not re.match(regex, password):
        raise PasswordValidationError()
    return password
