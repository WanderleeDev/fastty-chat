from sqlmodel import SQLModel, create_engine
from app.core import Config

is_development = Config.ENVIRONMENT == "development"
uri_db = Config.DATABASE_URI

if not uri_db:
        raise ValueError("DATABASE_URL not defined")

# Synchronous connection
engine = create_engine(
    uri_db.replace("postgresql", "postgresql+psycopg2"), 
    echo=True
)

def init_db():
    if is_development:
        print("Creating database and tables")
        SQLModel.metadata.create_all(engine)

