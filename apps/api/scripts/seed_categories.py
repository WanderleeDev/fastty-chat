from app.dependencies import SessionDep, get_session
from app.categories import Category


categories = [
    "all",
    "gaming",
    "music",
    "sports",
    "tech",
    "art",
    "languages",
    "movies",
    "books",
]


def create_categories(db: SessionDep):
    try:
        for category in categories:
            category_to_db = Category.model_validate({"name": category})
            db.add(category_to_db)
            print(f"category {category} created successfully")

        db.commit()
    except Exception as e:
        print(f"Error creating category: {str(e)}")
        db.rollback()

    with get_session as db:
        create_categories(db)
