from typing import Optional
from sqlalchemy.ext.asyncio.session import AsyncSession
from app.users.models import User
from app.core import SQLAlchemyRepository


class UserRepository(SQLAlchemyRepository[User]):
    def __init__(self, db_session: AsyncSession):
        super().__init__(db_session, User)

    async def find_by_email(self, email: str) -> Optional[User]:
        return await self.get_first_by_filters([self._model.email == email])
