"use server";

import { z } from "zod";
import { Resend } from "resend";
import { contactSchema, type ContactState } from "@/lib/contact-schema";

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? ""),
  };

  // Honeypot: real visitors never see this field, but bots fill in everything
  if (formData.get("company")) {
    return { status: "success", message: "Thanks! Your message is on its way." };
  }

  // 1. Validate on the server: never trust what the browser sends
  const result = contactSchema.safeParse(values);
  if (!result.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors: z.flattenError(result.error).fieldErrors,
      values,
    };
  }

  // 2. Make sure the server is configured
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is missing");
    return { status: "error", message: "The form isn't set up yet. Please email me directly.", values };
  }

  // 3. Send the email
  const { name, email, message } = result.data;
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `${message}\n\n- ${name} (${email})`,
  });

  if (error) {
    console.error("Contact form: Resend error", error);
    return { status: "error", message: "Something went wrong. Please email me directly instead.", values };
  }

  return { status: "success", message: `Thanks, ${name}! I'll reply to ${email} soon.` };
}
