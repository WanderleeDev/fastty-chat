from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import Config
from app.health import health_router
from app.users import user_router

# from app.chat import chat_router
# from app.ai import ai_router
# from app.auth import auth_router
# from app.categories import category_router
# from app.room import room_router


app = FastAPI(
    version=Config.VERSION_APP,
    title=Config.TITLE_APP,
    description=Config.DESCRIPTION_APP,
    root_path=f"/api/{Config.VERSION_APP}",
)

origins = [
    "http://localhost:3000",  # Cliente
    "http://127.0.0.1:3000",  # Alternativa
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(health_router, prefix="/health", tags=["health check"])
app.include_router(user_router, prefix="/users", tags=["users"])
# app.include_router(chat_router, prefix="/chats", tags=["chats"])
# app.include_router(auth_router, prefix="/auth", tags=["auth"])
# app.include_router(category_router, prefix="/categories", tags=["categories"])
# app.include_router(room_router, prefix="/rooms", tags=["rooms"])
# app.include_router(ai_router, prefix="/ai", tags=["ai"])
