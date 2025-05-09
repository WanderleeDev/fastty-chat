from typing import Any


def is_equals(
    value1: Any, value2: Any, case_sensitive: bool = False, throw_error: bool = False
) -> bool:
    """
    Check if two values are equal, with an option to ignore case.

    Args:
        value1 (Any): The first value to compare.
        value2 (Any): The second value to compare.
        case_sensitive (bool, optional): If True, the comparison is case-sensitive. Defaults to False.
        throw_error (bool, optional): If True, raise a TypeError if the values are not of primitive types. Defaults to False.

    Returns:
        bool: True if the values are equal, False otherwise.
    """

    primitive_types = (int, float, str, bool)

    if not isinstance(value1, primitive_types) or not isinstance(
        value2, primitive_types
    ):
        if throw_error:
            raise TypeError(
                f"Both values must be of primitive types: {primitive_types}"
            )
        return False

    if isinstance(value1, str) and isinstance(value2, str) and case_sensitive:
        return (
            value1.casefold() == value2.casefold()
            if case_sensitive
            else value1 == value2
        )

    return value1 == value2
