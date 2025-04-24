import { HStack, Input, IconButton } from "@chakra-ui/react";
import React from "react";
import { BiSend } from "react-icons/bi";

export default function MessageInput() {
  const [newMessage, setNewMessage] = useState("");
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <HStack p="4" borderTopWidth="1px">
      <Input
        placeholder="Escribe un mensaje..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyUp={}
        onKeyPress={handleKeyPress}
        border="none"
      />

      <IconButton onClick={handleSendMessage} disabled={!newMessage.trim()}>
        <BiSend />
      </IconButton>
    </HStack>
  );
}
