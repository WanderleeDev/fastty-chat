from fastapi import APIRouter, Request, WebSocket, WebSocketDisconnect
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from app.chat.ws import WebSocketManager
from os import path

chat_router = APIRouter()
websocket_manager = WebSocketManager()
ping_pong = ("ping", "pong")
templates = Jinja2Templates(
    directory=path.join(path.dirname(__file__), "..", "templates")
)


@chat_router.get("", response_class=HTMLResponse)
def read_index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@chat_router.websocket("/ws/{room_name}")
async def websocket_endpoint(websocket: WebSocket, room_name: str):
    await websocket_manager.connect(room_name, websocket)

    try:
        while True:
            data = await websocket.receive_text()

            if data == ping_pong[0]:
                await websocket.send_text(ping_pong[1])
            else:
                await websocket_manager.broadcast(room_name, data)

    except WebSocketDisconnect:
        websocket_manager.disconnect(room_name, websocket)

        if websocket_manager.get_quantity_users_in_room(room_name) > 0:
            await websocket_manager.broadcast(
                room_name, f"A user left the room {room_name}"
            )
