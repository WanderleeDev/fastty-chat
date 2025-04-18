from fastapi import APIRouter
from fastapi.security import OAuth2PasswordBearer

from app.dependencies import AuthFormDataDep

auth_router= APIRouter()

oauth_scheme = OAuth2PasswordBearer(tokenUrl="token")

@auth_router.post("/token")
async def login(form_data: AuthFormDataDep):
    return form_data
