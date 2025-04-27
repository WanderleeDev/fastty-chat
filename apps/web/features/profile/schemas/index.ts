import { z } from "zod";

export const profileFormSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email(),
  bio: z.string().min(1).max(1000),
});

export const profileFormDefaultValues = {
  name: "",
  email: "",
  bio: "",
};

export type Profile = ProfileFormValues & {
  id: string;
  image: string;
};

export type ProfileFormValues = z.infer<typeof profileFormSchema>;
