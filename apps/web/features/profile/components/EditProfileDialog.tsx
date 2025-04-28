"use client";

import BaseDialog from "@/components/shared/BaseDialog";
import MainLogo from "@/components/shared/MainLogo";
import { Field, Input, Button } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ProfileFormValues,
  profileFormSchema,
  profileFormDefaultValues,
} from "../schemas";
import Edit from "@/components/icons/Edit";

interface Props {
  profile: ProfileFormValues;
}

export default function EditProfileDialog({ profile }: Props) {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, errors },
    reset,
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    values: profile,
    defaultValues: profileFormDefaultValues,
  });

  const onSubmit = handleSubmit(async (data: ProfileFormValues) => {
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
      onSubmit={onSubmit}
      closable={true}
      hasCancel={true}
      as={"form"}
      titleDialog={<MainLogo textExtension="room creation" />}
      bodyDialog={
        <Field.Root>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <>
                <Field.Label htmlFor="name">Name</Field.Label>
                <Input id="name" {...field} />
              </>
            )}
          />
          <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
          <Controller
            control={control}
            name="bio"
            render={({ field }) => (
              <>
                <Field.Label htmlFor="bio">Description</Field.Label>
                <Input id="bio" {...field} />
              </>
            )}
          />
          <Field.ErrorText>{errors.bio?.message}</Field.ErrorText>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <>
                <Field.Label htmlFor="email">Email</Field.Label>
                <Input id="email" {...field} />
              </>
            )}
          />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>
      }
      triggerButton={
        <Button
          overflow={"hidden"}
          colorPalette={"teal"}
          variant={"solid"}
          size={"xl"}
        >
          Edit Profile
          <Edit />
        </Button>
      }
      submitButton={
        <Button
          disabled={!isValid || isSubmitting}
          loading={isSubmitting}
          loadingText="Editing..."
          type="submit"
          colorPalette={"teal"}
          variant={"solid"}
          size={"lg"}
        >
          Edit
          <Edit />
        </Button>
      }
    />
  );
}
