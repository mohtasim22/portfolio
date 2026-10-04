import { ContactForm } from "../ui/contact-form";

export function Contact() {
  return (
    <section id="contact" className="border-t-2 border-edge bg-pop-orange text-ink-dark">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-24 sm:px-8 lg:grid-cols-[1fr_minmax(0,520px)] lg:items-start">
        <div>
          <h2 className="max-w-[12ch] font-display text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
            Got an idea? Let&apos;s build it.
          </h2>
          <p className="mb-8 mt-5 max-w-[44ch] text-lg">
            Tell me what you&apos;re making or what&apos;s broken, and I&apos;ll reply with how I&apos;d
            approach it. Use the form, or reach me directly.
          </p>

          {/* keep your existing buttons <div> and the "Or email me directly" <p> here, unchanged */}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
