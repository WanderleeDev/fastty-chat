from sqlmodel import SQLModel, Session, select
from typing import Type, Optional

def find_resource(model: Type[SQLModel], session: Session, filters: list) -> Optional[SQLModel]:
    query = select(model)

    for q in filters:
        query = query.where(q)

    result = session.exec(query).one_or_none()

    return result