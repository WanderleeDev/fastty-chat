from logging import Logger
from typing import Any, TypeVar, Type, List, Optional, override, Dict
from uuid import UUID
from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import or_, and_, select, update, delete
from app.core.models import BaseModel
from app.core.interfaces import Repository


ModelType = TypeVar("ModelType", bound=BaseModel)


class SQLAlchemyRepository(Repository[ModelType]):
    """
    SQLAlchemy implementation of the Repository interface.
    """

    def __init__(self, db: AsyncSession, model: Type[ModelType]):
        self._db = db
        self._model = model

    @override
    async def get_by_id(self, id: UUID) -> Optional[ModelType]:
        """
        Get a single entity by its ID.

        Args:
            id (UUID): ID of the entity to retrieve.

        Returns:
            Optional[ModelType]: Entity matching the ID.
        """
        return await self._db.get(self._model, str(id))

    @override
    async def get_first_by_filters(
        self, filters: List[Any] = None, strict: bool = True
    ) -> Optional[ModelType]:
        """
        Get a single entity by its filters.

        Args:
            filters (List[Any]): List of filters to apply.
            strict (bool): Whether to use AND or OR for combining filters.

        Returns:
            Optional[ModelType]: Entity matching the filters.
        """
        if not filters:
            return None

        format_filters = and_(*filters) if strict else or_(*filters)
        statement = select(self._model).where(format_filters).limit(1)
        result = await self._db.execute(statement)
        return result.scalars().first()

    @override
    async def get_many_by_filters(
        self,
        filters: Optional[List[Any]] = None,
        strict: bool = True,
        offset: int = 0,
        limit: int = 10,
    ) -> List[ModelType]:
        """
        Get a list of entities by their filters.

        Args:
            filters (Optional[List[Any]]): List of filters to apply.
            strict (bool): Whether to use AND or OR for combining filters.
            offset (int): Number of entities to skip.
            limit (int): Maximum number of entities to return.

        Returns:
            List[ModelType]: List of entities matching the filters.
        """
        if not filters:
            return []

        format_filters = and_(*filters) if strict else or_(*filters)
        statement = (
            select(self._model).where(format_filters).offset(offset).limit(limit)
        )
        result = await self._db.execute(statement)
        return result.scalars().all()

    @override
    async def get_list(self, offset=0, limit=10) -> List[ModelType]:
        """
        Get a list of entities with pagination.

        Args:
            offset (int): Number of entities to skip.
            limit (int): Maximum number of entities to return.

        Returns:
            List[ModelType]: List of entities with pagination.
        """
        statement = select(self._model).offset(offset).limit(limit)
        result = await self._db.execute(statement)
        return result.scalars().all()

    @override
    async def create(self, entity: Dict[str, Any]) -> Optional[ModelType]:
        """
        Create a new entity.

        Args:
            entity (ModelType): Entity to create.

        Returns:
            Optional[ModelType]: Created entity.
        """
        try:
            new_entity = self._model(**entity)
            self._db.add(new_entity)
            await self._db.commit()
            await self._db.refresh(new_entity)
            return new_entity
        except IntegrityError:
            await self._db.rollback()
            return None

    @override
    async def update(self, id: UUID, entity: Dict[str, Any]) -> Optional[ModelType]:
        """
        Update an existing entity.

        Args:
            id (UUID): ID of the entity to update.
            entity (T): Entity to update.

        Returns:
            Optional[T]: Updated entity.
        """
        statement = (
            update(self._model)
            .where(self._model.id == str(id))
            .values(**entity)
            .returning(self._model)
        )

        result = await self._db.execute(statement)
        await self._db.commit()
        return result.fetchone()

    @override
    async def delete(self, id: UUID) -> bool:
        """
        Delete an existing entity.

        Args:
            id (UUID): ID of the entity to delete.

        Returns:
            bool: True if the entity was deleted, False otherwise.
        """
        statement = delete(self._model).where(self._model.id == str(id))
        result = await self._db.execute(statement)
        await self._db.commit()
        return result.rowcount > 0
