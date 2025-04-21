from typing import List
from fastapi import APIRouter
from app.categories.models import Category, CategoryCreate
from app.dependencies import SessionDep
from app.categories.services import get_categories_service, create_category_service
from app.core import ResponseMessage

category_router = APIRouter()

@category_router.get("", response_model=List[Category], status_code=200)
async def read_all_categories(db: SessionDep):
    """
        Return a  list of categories
    """
    return await get_categories_service(db)


@category_router.post("", response_model=ResponseMessage, status_code=201)
async def create_category(category_data: CategoryCreate, db: SessionDep):
    """
        Create a new category
    """
    return await create_category_service(db, category_data)