from typing import Any, Dict, Generic, TypeVar, List, Optional
from uuid import UUID
from abc import abstractmethod, ABC


T = TypeVar("T")


class Repository(Generic[T], ABC):
    """
    Base repository interface for all repositories in the application.
    """

    @abstractmethod
    async def get_by_id(self, id: UUID) -> Optional[T]:
        raise NotImplementedError()

    @abstractmethod
    async def get_first_by_filters(
        self, filters: Optional[List[Any]] = None, strict: bool = True
    ) -> Optional[T]:
        raise NotImplementedError()

    @abstractmethod
    async def get_many_by_filters(
        self, filters: Optional[List[Any]] = None, strict: bool = True
    ) -> List[T]:
        raise NotImplementedError()

    @abstractmethod
    async def get_list(self, offset=0, limit=10) -> List[T]:
        raise NotImplementedError()

    @abstractmethod
    async def create(self, entity: Dict[str, Any]) -> Optional[T]:
        raise NotImplementedError()

    @abstractmethod
    async def update(self, id: UUID, entity: Dict[str, Any]) -> Optional[T]:
        raise NotImplementedError()

    @abstractmethod
    async def delete(self, id: UUID) -> bool:
        raise NotImplementedError()
