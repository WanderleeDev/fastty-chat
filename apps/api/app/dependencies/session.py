from typing import Annotated
from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession
from database import async_session
import logging


async def get_session():
    async with async_session() as session:
        try:
            yield session
        except Exception as e:
            logging.error(f"Database operation failed: {str(e)}")
            await session.rollback()
            raise
        finally:
            await session.close()


SessionDep = Annotated[AsyncSession, Depends(get_session)]
