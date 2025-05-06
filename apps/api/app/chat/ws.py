from typing import Dict, List
from fastapi import WebSocket


class WebSocketManager:
    def __init__(self):
        self.rooms: Dict[str, List[WebSocket]] = {}

    async def connect(self, room: str, websocket: WebSocket):
        """
        Add a websocket to a room if it does not exist in the room list and create the room if it does not exist
        """
        await websocket.accept()

        if room not in self.rooms:
            self.rooms[room] = []

        self.rooms[room].append(websocket)

    def disconnect(self, room: str, websocket: WebSocket):
        """
        Remove a websocket from a room if it exists in the room list and remove the room if it is empty
        """
        if websocket in self.rooms.get(room, []):
            try:
                self.rooms[room].remove(websocket)
            except ValueError:
                pass

            if not self.rooms.get(room):
                self.rooms.pop(room, None)

    async def ping_pong(self, room: str):
        """
        Send a ping to all the users in a room
        """
        if room in self.rooms:
            for connection in self.rooms[room]:
                await connection.send_text("ping")

    async def broadcast(self, room: str, message: str):
        """
        Send a message to all the users in a room
        """
        if room in self.rooms:
            for connection in self.rooms[room]:
                await connection.send_text(message)

    def get_quantity_users_in_room(self, room: str) -> int:
        """Get the quantity of users in a room"""
        return len(self.rooms.get(room, []))

    def get_users_in_room(self, room: str) -> List[WebSocket]:
        """Get a list of all the users that are in a room"""
        return self.rooms.get(room, [])
