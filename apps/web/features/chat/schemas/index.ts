import z from "zod";

export const joinChatFormSchema = z.object({
  pin: z
    .array(z.string().min(1), { required_error: "Pin is required" })
    .length(4, { message: "Pin must be 4 digits long" }),
});

export const createChatFormSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  isPrivate: z.boolean(),
});

export const chatBoxSchema = z.object({
  message: z.string().min(1, "El mensaje no puede estar vacío"),
});

export type JoinChatFormValues = z.infer<typeof joinChatFormSchema>;
export type CreateChatFormValues = z.infer<typeof createChatFormSchema>;
export type ChatBoxValues = z.infer<typeof chatBoxSchema>;

export const joinChatDefaultValues: JoinChatFormValues = {
  pin: Array(4).fill(""),
};

export const createChatDefaultValues: CreateChatFormValues = {
  title: "",
  description: "",
  isPrivate: false,
};
