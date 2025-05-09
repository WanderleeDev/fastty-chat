from fastapi import Depends
from typing import Annotated
from app.users.repository import UserRepository
from app.dependencies.session import SessionDep


async def get_user_repository(db: SessionDep) -> UserRepository:
    return UserRepository(db)


UserRepositoryDep = Annotated[UserRepository, Depends(get_user_repository)]
