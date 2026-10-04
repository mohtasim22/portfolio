"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { sendMessage } from "@/app/actions/contact";
import { initialContactState } from "@/lib/contact-schema";
import { buttonStyles } from "@/components/ui/button";

const inputStyles =
  "w-full rounded-xl border-2 border-edge bg-page px-4 py-3 text-ink shadow-pop-sm outline-none placeholder:text-muted focus-visible:ring-4 focus-visible:ring-pop-blue/40 aria-invalid:border-red-600 dark:aria-invalid:border-red-400";

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors?.length) return null;
  return (
    <p id={id} className="mt-1.5 text-sm font-semibold text-red-600 dark:text-red-400">
      {errors[0]}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendMessage, initialContactState);
  const errors = state.fieldErrors;

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-[22px] border-2 border-edge bg-card p-6 text-ink shadow-pop-lg">
        <p className="font-display text-2xl font-extrabold">Message sent!</p>
        <p className="mt-2 text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="relative grid gap-4 rounded-[22px] border-2 border-edge bg-card p-5 text-ink shadow-pop-lg sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-display font-bold">Name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            defaultValue={state.values?.name}
            aria-invalid={!!errors?.name}
            aria-describedby={errors?.name ? "name-error" : undefined}
            className={inputStyles}
          />
          <FieldError id="name-error" errors={errors?.name} />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block font-display font-bold">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={state.values?.email}
            aria-invalid={!!errors?.email}
            aria-describedby={errors?.email ? "email-error" : undefined}
            className={inputStyles}
          />
          <FieldError id="email-error" errors={errors?.email} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-display font-bold">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="What are you building, or what's broken?"
          defaultValue={state.values?.message}
          aria-invalid={!!errors?.message}
          aria-describedby={errors?.message ? "message-error" : undefined}
          className={`${inputStyles} resize-y`}
        />
        <FieldError id="message-error" errors={errors?.message} />
      </div>

      {/* Honeypot: hidden from people, irresistible to bots */}
      <div aria-hidden className="absolute -left-[9999px] top-0">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className={`${buttonStyles({ variant: "primary" })} disabled:cursor-wait disabled:opacity-70`}
        >
          <Send className="size-4" />
          {pending ? "Sending..." : "Send message"}
        </button>
        {state.status === "error" && (
          <p role="alert" className="font-semibold text-red-600 dark:text-red-400">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
