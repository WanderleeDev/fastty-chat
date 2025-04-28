"use client";

import { Controller, useForm } from "react-hook-form";
import {
  type RegisterFormValues,
  registerFormDefaultValues,
  registerFormSchema,
} from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput } from "@/components/ui/password-input";
import { Flex, Field, Input, Button } from "@chakra-ui/react";

export default function RegisterForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: registerFormDefaultValues,
    mode: "all",
  });

  const onSubmit = handleSubmit(async (data: RegisterFormValues) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      reset();
    }
  });

  return (
    <Flex as="form" direction="column" gap={6} onSubmit={onSubmit}>
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <Field.Root invalid={!!errors.name}>
            <Field.Label fontSize={"sm"} htmlFor="name" color="teal.500">
              Name
            </Field.Label>
            <Input
              id="name"
              size={"lg"}
              focusRingColor="teal.600"
              {...field}
              placeholder="Your name"
            />
            <Field.ErrorText fontSize={"xs"}>
              {errors.name?.message}
            </Field.ErrorText>
          </Field.Root>
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Field.Root invalid={!!errors.email}>
            <Field.Label fontSize={"sm"} htmlFor="email" color="teal.500">
              Email
            </Field.Label>
            <Input
              id="email"
              size={"lg"}
              focusRingColor="teal.600"
              {...field}
              placeholder="Your username"
            />
            <Field.ErrorText fontSize={"xs"}>
              {errors.email?.message}
            </Field.ErrorText>
          </Field.Root>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Field.Root invalid={!!errors.password}>
            <Field.Label fontSize={"sm"} htmlFor="password" color="teal.500">
              Password
            </Field.Label>
            <PasswordInput
              size={"lg"}
              focusRingColor="teal.600"
              id="password"
              {...field}
              placeholder="Your password"
            />
            <Field.ErrorText fontSize={"xs"}>
              {errors.password?.message}
            </Field.ErrorText>
          </Field.Root>
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field }) => (
          <Field.Root invalid={!!errors.confirmPassword}>
            <Field.Label
              fontSize={"sm"}
              htmlFor="confirmPassword"
              color="teal.500"
            >
              Confirm Password
            </Field.Label>
            <PasswordInput
              size={"lg"}
              focusRingColor="teal.600"
              id="confirmPassword"
              {...field}
              placeholder="Confirm your password"
            />
            <Field.ErrorText fontSize={"xs"}>
              {errors.confirmPassword?.message}
            </Field.ErrorText>
          </Field.Root>
        )}
      />

      <Button
        mt={4}
        disabled={!isValid || isSubmitting}
        loading={isSubmitting}
        loadingText="Signing up..."
        overflow={"hidden"}
        colorPalette={"teal"}
        variant={"solid"}
        size={"xl"}
        type="submit"
      >
        Sign up
      </Button>
    </Flex>
  );
}
