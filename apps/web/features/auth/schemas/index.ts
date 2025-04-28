import { z } from "zod";
import { emailRegex, passwordRegex } from "@/utils/regexObj";

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "email is required" })
    .email({ message: "Invalid email" })
    .regex(emailRegex, {
      message: "Invalid email format. Example: example@domain.com",
    }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(passwordRegex, {
      message:
        "At least uppercase letters, lowercase letters, numbers and at least one special character",
    }),
});

export const registerFormSchema = loginFormSchema
  .extend({
    name: z
      .string()
      .min(1, { message: "Name is required" })
      .max(50, { message: "Name must be at most 50 characters long" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const recoveryFormSchema = loginFormSchema.pick({
  email: true,
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;
export type RegisterFormValues = z.infer<typeof registerFormSchema>;
export type RecoveryFormValues = z.infer<typeof recoveryFormSchema>;

export const loginFormDefaultValues = {
  email: "",
  password: "",
};

export const registerFormDefaultValues = {
  name: "",
  password: "",
  email: "",
  confirmPassword: "",
};

export const recoveryFormDefaultValues = {
  email: "",
};
