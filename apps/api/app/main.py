from fastapi import FastAPI
from app.core.config import Config
from contextlib import asynccontextmanager
from database import init_db
from app.health import health_router
from app.users import user_router
from app.chat import chat_router
from app.auth import auth_router
from app.categories import category_router

@asynccontextmanager
async def life_span(app: FastAPI) -> None:
    init_db()
        
    yield

    print("🛑 Closing connections...")

app = FastAPI(
    version= Config.VERSION_APP,
    title= Config.TITLE_APP,
    description= Config.DESCRIPTION_APP,
    lifespan=life_span,
    root_path= f"/api/{Config.VERSION_APP}",
)



app.include_router(health_router, prefix="/health", tags=["health check"])
app.include_router(user_router, prefix="/users", tags=["users"])
app.include_router(chat_router, prefix="/chats", tags=["chats"])
app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(category_router, prefix="/categories", tags=["categories"])


