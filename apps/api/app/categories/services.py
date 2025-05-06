from app.dependencies import SessionDep
from app.categories.models import Category, CategoryCreate, CategoryPaginated
from sqlmodel import select
from sqlalchemy.sql.expression import func
from typing import List
from app.categories.exceptions import DuplicateCategoryError
from app.utils import find_resource
from app.core import ResponseMessage
from math import ceil


async def get_categories_service(db: SessionDep) -> List[Category]:
    """
    Retrieve a list of all categories.

    Args:
        db (SessionDep): Database session dependency.

    Returns:
        List[Category]: List of found categories.
    """
    statement = select(Category)
    return db.exec(statement).all()


async def get_categories_paginated_service(
    db: SessionDep, offset: int = 0, limit: int = 4
) -> CategoryPaginated:
    """
    Retrieve a paginated list of categories.

    Args:
        db (SessionDep): Database session dependency.
        offset (int, optional): Offset for pagination. Defaults to 0.
        limit (int, optional): Number of categories to retrieve. Defaults to 4.

    Returns:
        CategoryPaginated: Paginated list of categories.
    """
    offset = max(0, offset)
    limit = max(1, limit)
    count_statement = select(func.count()).select_from(Category)
    total_count = db.exec(count_statement).one()
    paginated_statement = select(Category).offset(offset).limit(limit)
    content = db.exec(paginated_statement).all()

    return build_pagination_metadata(
        content=content, total_items=total_count, offset=offset, limit=limit
    )


async def create_category_service(
    db: SessionDep, category_data: CategoryCreate
) -> ResponseMessage:
    """
    Create a new category in the database.

    Args:
        db (SessionDep): Database session dependency.
        category_data (CategoryCreate): Data for the category to create.

    Returns:
        ResponseMessage: Success message.

    Raises:
        HTTPException: If the category name is already registered (409).
    """

    is_repeat_category = find_resource(
        Category, db, [func.lower(Category.name) == func.lower(category_data.name)]
    )

    if is_repeat_category:
        raise DuplicateCategoryError()

    category_to_db = Category.model_validate(category_data.model_dump())
    db.add(category_to_db)
    db.commit()
    db.refresh(category_to_db)

    return {"message": f"Category {category_to_db.name} successfully created"}


def build_pagination_metadata(
    content: List[Category], total_items: int, offset: int, limit: int
) -> CategoryPaginated:
    total_pages = ceil(total_items / limit) if total_items > 0 else 1
    current_page = offset // limit + 1 if total_items > offset else 1
    has_prev = current_page > 1
    has_next = current_page < total_pages
    prev_page = current_page - 1 if has_prev else None
    next_page = current_page + 1 if has_next else None

    return CategoryPaginated(
        content=content,
        total_pages=total_pages,
        total_items=total_items,
        offset=offset,
        limit=limit,
        current_page=current_page,
        has_prev=has_prev,
        has_next=has_next,
        prev_page=prev_page,
        next_page=next_page,
    )
