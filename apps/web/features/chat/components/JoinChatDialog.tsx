"use client";

import { Button, Field, Icon, PinInput, Text } from "@chakra-ui/react";
import MainLogo from "../../../components/shared/MainLogo";
import BaseDialog from "../../../components/shared/BaseDialog";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  JoinChatFormValues,
  joinChatFormSchema,
  joinChatDefaultValues,
} from "../schemas";
import Send from "@/components/icons/Send";
import Connect from "@/components/icons/Connect";

export default function JoinChatDialog() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, errors },
    reset,
  } = useForm<JoinChatFormValues>({
    resolver: zodResolver(joinChatFormSchema),
    defaultValues: joinChatDefaultValues,
  });

  const onSubmit = handleSubmit(async (data: JoinChatFormValues) => {
    console.log(data);
    try {
    } catch (error) {
      console.error(error);
    } finally {
      reset();
    }
  });

  return (
    <BaseDialog
      closable={true}
      hasCancel={true}
      as={"form"}
      onSubmit={onSubmit}
      titleDialog={<MainLogo textExtension="connection" />}
      bodyDialog={
        <>
          <Text>Enter your connection code</Text>
          <Field.Root
            invalid={!!errors.pin}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Controller
              control={control}
              name="pin"
              render={({ field }) => (
                <PinInput.Root
                  type="alphanumeric"
                  value={field.value}
                  onValueChange={(e) => field.onChange(e.value)}
                >
                  <PinInput.HiddenInput />
                  <PinInput.Control>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <PinInput.Input key={index} index={index} />
                    ))}
                  </PinInput.Control>
                </PinInput.Root>
              )}
            />
            <Field.ErrorText>{errors.pin?.message}</Field.ErrorText>
          </Field.Root>
        </>
      }
      triggerButton={
        <Button colorPalette={"teal"} variant={"solid"} size={"xl"}>
          Join Chat Room
          <Icon>
            <Send />
          </Icon>
        </Button>
      }
      submitButton={
        <Button
          disabled={!isValid || isSubmitting}
          loading={isSubmitting}
          loadingText="Connecting..."
          type="submit"
          colorPalette={"teal"}
          variant={"solid"}
          size={"xl"}
        >
          Connect
          <Icon>
            <Connect />
          </Icon>
        </Button>
      }
    />
  );
}
