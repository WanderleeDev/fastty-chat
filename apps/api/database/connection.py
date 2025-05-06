from app.core import Config
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

is_development = Config.ENVIRONMENT == "development"
uri_db = Config.DATABASE_URI

if not uri_db:
    raise ValueError("DATABASE_URL not defined")

engine = create_async_engine(
    uri_db.replace("postgresql", "postgresql+asyncpg"), echo=True
)

async_session = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)
