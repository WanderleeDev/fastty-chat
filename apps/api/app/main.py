from typing import List
from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import Config
from contextlib import asynccontextmanager
from database import init_db
from app.health import health_router
from app.users import user_router
from app.chat import chat_router
from app.auth import auth_router
from app.categories import category_router
from app.room import room_router

class WebSocketClient:
    def _init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def send_message(self, message: str,  websocket: WebSocket):
        await websocket.send_text(message)

    async def broadcast(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(message)

ws_client = WebSocketClient()

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

@app.websocket("/ws",)
async def websocket_endpoint(websocket: WebSocket):
    """
    Punto de conexión WebSocket para chat en tiempo real.

    URL: ws://<dominio>/api/{version}/ws

    Protocolo: Solo mensajes de texto.

    Ejemplo de uso:
    ```js
    const ws = new WebSocket("ws://localhost:8000/api/v1/ws");
    ws.onmessage = (event) => console.log(event.data);
    ws.send("Hola mundo");
    ```
    """
    await websocket.accept()

    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message text was {data}")




app.include_router(health_router, prefix="/health", tags=["health check"])
app.include_router(user_router, prefix="/users", tags=["users"])
app.include_router(chat_router, prefix="/chats", tags=["chats"])
app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(category_router, prefix="/categories", tags=["categories"])
app.include_router(room_router, prefix="/rooms", tags=["rooms"])
