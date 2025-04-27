import Send from "@/components/icons/Send";
import { HStack, Input, IconButton } from "@chakra-ui/react";

export default function MessageInput() {
  return (
    <HStack p="4" borderTopWidth="1px">
      <Input placeholder="Escribe un mensaje..." border="none" />

      <IconButton>
        <Send />
      </IconButton>
    </HStack>
  );
}
