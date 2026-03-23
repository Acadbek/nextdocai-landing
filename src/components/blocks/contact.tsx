import { Check, Mail, Phone } from "lucide-react";

import { ContactForm } from "@/components/blocks/contact-form";
import { Globe } from "@/components/globe";

const HOW_WE_HELP = [
  "Add details about how to contact here",
  "Share your contact information",
  "Add details about how to contact here",
];

export default function Contact() {
  return (
    <section className="pt-28 lg:pt-44">
      {/* Header */}
      <div className="container pb-12 lg:pb-16">
        <h1 className="text-4xl tracking-tight md:text-5xl lg:text-6xl max-w-3xl mb-6">
          Need help with Nextdoc?
        </h1>
        <p className="text-muted-foreground max-w-xl text-base lg:text-lg font-serif leading-relaxed">
          Welcome to the NextDoc Support Center! We're ready to assist you if
          you have an issue or a question.
        </p>
      </div>

      {/* 2-col layout */}
      <div className="container pb-0">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <p className="text-muted-foreground text-sm tracking-wide font-mono">
              Get in touch
            </p>
            <h2 className="text-3xl lg:text-4xl">Let's Talk</h2>
            <p className="text-muted-foreground font-serif text-sm leading-relaxed">
              Whether you have a question, need technical assistance, or just
              want some guidance, our support team is here to help. We're
              available around the clock to provide quick and friendly support.
            </p>

            <div>
              <p className="mb-3 text-sm">How we can help:</p>
              <ul className="flex flex-col gap-2">
                {HOW_WE_HELP.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span
                      className="flex size-5 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "oklch(0.145 0 0)" }}
                    >
                      <Check className="size-3 text-white" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-sm">You can also contact us via:</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a
                  href="mailto:hello@nextdoc.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="size-4 shrink-0" />
                  hello@nextdoc.com
                </a>
                <a
                  href="tel:+919038372282"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="size-4 shrink-0" />
                  +91 9038372282
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="rounded-2xl border bg-card p-6 lg:p-8">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Globe — bottom right, ~50% visible */}
      <div className="overflow-hidden -mt-8" style={{ height: "340px" }}>
        <div style={{ width: "min(1080px, 90vw)", marginLeft: "auto" }}>
          <Globe />
        </div>
      </div>
    </section>
  );
}
