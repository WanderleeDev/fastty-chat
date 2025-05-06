from typing import Annotated
from fastapi import Depends
from fastapi.security import OAuth2PasswordRequestForm

AuthFormDataDep = Annotated[OAuth2PasswordRequestForm, Depends()]
