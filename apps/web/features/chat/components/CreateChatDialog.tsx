"use client";

import MainLogo from "@/components/shared/MainLogo";
import { Controller, useForm } from "react-hook-form";
import {
  CreateChatFormValues,
  createChatFormSchema,
  createChatDefaultValues,
} from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import BaseDialog from "@/components/shared/BaseDialog";
import { Button, Field, Icon, Input, Switch } from "@chakra-ui/react";
import GlobeMessage from "@/components/icons/GlobeMessage";
import Send from "@/components/icons/Send";

export default function CreateChatDialog() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, errors },
    reset,
  } = useForm<CreateChatFormValues>({
    resolver: zodResolver(createChatFormSchema),
    defaultValues: createChatDefaultValues,
    mode: "all",
  });

  const onSubmit = handleSubmit(async (data) => {
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
      titleDialog={<MainLogo textExtension="room creation" />}
      bodyDialog={
        <Field.Root>
          <Controller
            control={control}
            name="title"
            render={({ field }) => (
              <>
                <Field.Label htmlFor="title">Title</Field.Label>
                <Input id="title" {...field} />
              </>
            )}
          />
          <Field.ErrorText>{errors.title?.message}</Field.ErrorText>

          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <>
                <Field.Label htmlFor="description">Description</Field.Label>
                <Input id="description" {...field} />
              </>
            )}
          />

          <Controller
            control={control}
            name="isPrivate"
            render={({ field }) => (
              <Switch.Root
                colorPalette={"teal"}
                name={field.name}
                checked={field.value}
                onCheckedChange={({ checked }) => field.onChange(checked)}
              >
                <Switch.HiddenInput />
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <Switch.Label>Private Chat</Switch.Label>
              </Switch.Root>
            )}
          />
        </Field.Root>
      }
      triggerButton={
        <Button
          overflow={"hidden"}
          colorPalette={"teal"}
          variant={"subtle"}
          size={"xl"}
        >
          Create Chat Room
          <Icon>
            <GlobeMessage />
          </Icon>
        </Button>
      }
      submitButton={
        <Button
          disabled={!isValid || isSubmitting}
          loading={isSubmitting}
          loadingText="Creating..."
          type="submit"
          colorPalette={"teal"}
          variant={"solid"}
          size={"xl"}
        >
          Create
          <Icon>
            <Send />
          </Icon>
        </Button>
      }
    />
  );
}
