"use client";

import { Controller, useForm } from "react-hook-form";
import {
  type RecoveryFormValues,
  recoveryFormSchema,
  recoveryFormDefaultValues,
} from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Flex, Field, Input, Button } from "@chakra-ui/react";

export default function RecoveryForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm<RecoveryFormValues>({
    resolver: zodResolver(recoveryFormSchema),
    defaultValues: recoveryFormDefaultValues,
    mode: "all",
  });

  const onSubmit = handleSubmit(async (data: RecoveryFormValues) => {
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

      <Button
        disabled={!isValid || isSubmitting}
        loading={isSubmitting}
        loadingText="Requesting help..."
        overflow={"hidden"}
        colorPalette={"teal"}
        variant={"solid"}
        size={"xl"}
        type="submit"
      >
        Request Help
      </Button>
    </Flex>
  );
}
