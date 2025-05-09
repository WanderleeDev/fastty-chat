import re


def validate_password(password: str) -> str:
    regex = r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"

    if not re.match(regex, password):
        raise ValueError(
            "The password must have at least 8 characters, uppercase letters, lowercase letters, numbers and at least one special character"
        )
    return password
