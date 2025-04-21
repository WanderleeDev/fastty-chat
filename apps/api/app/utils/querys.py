from sqlmodel import SQLModel, Session, select
from typing import Type, Optional

def find_resource(model: Type[SQLModel], session: Session, filters: list) -> Optional[SQLModel]:
    query = select(model)

    for q in filters:
        query = query.where(q)

    result = session.exec(query).one_or_none()

    return result

def equals_ignore_case(model: Type[SQLModel], session: Session, field: str, value: str) -> Optional[SQLModel]:
    query = select(model).where(func.lower(getattr(model, field)) == func.lower(value))
    return session.exec(query).one_or_none()