from app.dependencies import SessionDep
from app.categories.models import Category, CategoryCreate
from sqlmodel import select
from sqlalchemy.sql.expression import func
from typing import List
from app.categories.exceptions import DuplicateCategoryError
from app.utils import find_resource

from app.core import ResponseMessage

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



async def create_category_service(db: SessionDep, category_data: CategoryCreate) -> ResponseMessage:
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

    is_repeat_category = find_resource(Category, db, [func.lower(Category.name) == func.lower(category_data.name)])

    if is_repeat_category:
        raise DuplicateCategoryError()

    category_to_db = Category.model_validate(category_data.model_dump())
    db.add(category_to_db)
    db.commit()
    db.refresh(category_to_db)

    return {"message": f"Category {category_to_db.name} successfully created"}