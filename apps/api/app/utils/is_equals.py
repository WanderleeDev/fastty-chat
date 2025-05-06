def is_equals(value1: str, value2: str, case_sensitive: bool = False) -> bool:
    """
    Check if two strings are equal, with an option to ignore case.

    Args:
        value1 (str): The first string to compare.
        value2 (str): The second string to compare.
        case_sensitive (bool, optional): If True, the comparison is case-sensitive. Defaults to False.

    Returns:
        bool: True if the strings are equal, False otherwise.
    """

    if case_sensitive:
        return value1 == value2

    return value1.casefold() == value2.casefold()
