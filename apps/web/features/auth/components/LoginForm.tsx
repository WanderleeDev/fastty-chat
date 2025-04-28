"use client";

import { Input, Button, Flex, Field } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import ChakraLink from "@/components/shared/ChakraLink";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type LoginFormValues,
  loginFormDefaultValues,
  loginFormSchema,
} from "../schemas";

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: loginFormDefaultValues,
    mode: "all",
  });

  const onSubmit = handleSubmit(async (data: LoginFormValues) => {
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

      <ChakraLink
        ml="auto"
        focusRingColor="teal.600"
        color="teal.500"
        href="/auth/recovery"
        fontSize="xs"
      >
        Forgot password?
      </ChakraLink>

      <Button
        disabled={!isValid || isSubmitting}
        loading={isSubmitting}
        loadingText="Logging in..."
        overflow={"hidden"}
        colorPalette={"teal"}
        variant={"solid"}
        size={"xl"}
        type="submit"
      >
        Log in
      </Button>
    </Flex>
  );
}
