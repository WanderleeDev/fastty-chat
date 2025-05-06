"use client";

import Send from "@/components/icons/Send";
import { HStack, Input, IconButton } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { chatBoxSchema, ChatBoxValues } from "../schemas";

export default function MessageComposer() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(chatBoxSchema),
    defaultValues: {
      message: "",
    },
    mode: "all",
  });

  const onSubmit = handleSubmit((data: ChatBoxValues) => {
    console.log(data);
  });

  return (
    <HStack p="4" borderTopWidth="1px" as={"form"} onSubmit={onSubmit}>
      <Controller
        control={control}
        name="message"
        render={({ field }) => (
          <Input placeholder="Escribe un mensaje..." border="none" {...field} />
        )}
      />

      <IconButton type="submit" colorPalette={"teal"}>
        <Send />
      </IconButton>
    </HStack>
  );
}
