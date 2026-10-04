import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "That name is too long."),
  email: z.email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters.")
    .max(2000, "Please keep it under 2,000 characters."),
});

type Fields = z.infer<typeof contactSchema>;

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: { [K in keyof Fields]?: string[] };
  values?: Fields;
};

export const initialContactState: ContactState = { status: "idle", message: "" };
