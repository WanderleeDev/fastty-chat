"use client";

import { HStack, Input, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiSend } from "react-icons/bi";

export default function MessageInput() {
  const [newMessage, setNewMessage] = useState("");
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
    }
  };

  return (
    <HStack p="4" borderTopWidth="1px">
      <Input
        placeholder="Escribe un mensaje..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        border="none"
      />

      <IconButton disabled={!newMessage.trim()}>
        <BiSend />
      </IconButton>
    </HStack>
  );
}
