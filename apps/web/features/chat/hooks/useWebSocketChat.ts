import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useWebSocketChat(roomId: string) {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  const connectWebSocket = () => {
    const connection = new WebSocket(`ws://localhost:3000/chat/${roomId}`);

    connection.onopen = () => {
      console.log("Connected to WebSocket");
    };

    connection.onclose = () => {
      console.log("Disconnected from WebSocket");
    };

    connection.onmessage = (event) => {
      console.log("Message from server:", event.data);
    };

    setSocket(connection);

    return connection;
  };

  const {} = useQuery({
    queryKey: ["chat", roomId],
    queryFn: connectWebSocket,
    refetchInterval: 5000,
    staleTime: Infinity,
  });

  const sendMessageMutation = useMutation({
    mutationFn: async (message: string) => {
      if (!socket) return;

      socket.send(message);
    },
  });

  useEffect(() => {
    if (!socket) return;
  });
}
