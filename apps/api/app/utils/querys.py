from typing import Optional
from sqlalchemy import select
from app.dependencies.session import SessionDep
from sqlalchemy.orm import DeclarativeMeta


async def find_resource(
    model: DeclarativeMeta, db: SessionDep, filters: list
) -> Optional[DeclarativeMeta]:
    query = select(model)

    for q in filters:
        query = query.where(q)

    result = await db.execute(query)

    return result.scalars().first()
