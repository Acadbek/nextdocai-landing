import Image from "next/image";

import { Check, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const SECTIONS = [
  {
    title: "Create documents from prompts",
    checks: [
      "Describe what you want in plain language",
      "Add files or notes to give AI context",
      "Generate clear, well-structured documents in minutes",
    ],
    image: "/images/service_img_1.svg",
    imageAlt: "Create document from prompt",
  },
  {
    title: "Chat & research while you write",
    checks: [
      "Ask questions directly inside your document",
      "Get instant answers without switching tabs or tools",
      "Refine ideas and explore insights as you write",
    ],
    image: "/images/features-chat.svg",
    imageAlt: "Chat and research preview",
  },
  {
    title: "Rewrite documents with the help of AI",
    checks: [
      "Upload existing documents to get started",
      "Tell AI how you want it rewritten or improved",
      "Get a clearer, more polished version in seconds",
    ],
    image: "/images/features-recreate.svg",
    imageAlt: "Recreate with AI",
  },
  {
    title: "Create multiple docs from one project",
    checks: [
      "Generate proposals, reports, pitches, and summaries",
      "Use shared project context across all documents",
      "Avoid repeating the same information again and again",
    ],
    image: "/images/features-multiple-doc.svg",
    imageAlt: "Multiple documents from one project",
  },
  {
    title: "Fix, refine, or restyle any section",
    checks: [
      "Make content clearer, shorter, or more detailed",
      "Adjust tone to sound more professional or concise",
      "Improve specific sections instantly, without rewriting everything",
    ],
    image: "/images/features-fix-refine.svg",
    imageAlt: "Fix and refine sections",
  },
];

function ShowcaseCard({
  title,
  checks,
  image,
  imageAlt,
  reverse,
}: {
  title: string;
  checks: string[];
  image: string;
  imageAlt: string;
  reverse: boolean;
}) {
  return (
    <div className="container py-10 lg:py-16">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Text */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl tracking-tight md:text-3xl lg:text-4xl">
            {title}
          </h2>
          <ul className="flex flex-col gap-3">
            {checks.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-serif">
                <span
                  className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "oklch(0.65 0.18 86.47 / 0.15)" }}
                >
                  <Check className="size-2.5" style={{ color: "oklch(0.65 0.18 86.47)" }} />
                </span>
                {c}
              </li>
            ))}
          </ul>
          <div>
            <Button
              className="rounded-full gap-2"
              style={{ backgroundColor: "oklch(0.145 0 0)", color: "white" }}
            >
              Try now <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>

        {/* Image */}
        <div
          className="relative overflow-hidden rounded-2xl border"
          style={{
            background:
              "radial-gradient(ellipse at 90% 90%, oklch(0.65 0.18 86.47 / 0.25) 0%, transparent 55%), white",
          }}
        >
          <Image
            src={image}
            alt={imageAlt}
            width={580}
            height={420}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export function FeaturesPageShowcase() {
  return (
    <section className="border-t">
      {SECTIONS.map((s, i) => (
        <div key={i} className={i < SECTIONS.length - 1 ? "border-b" : ""}>
          <ShowcaseCard {...s} reverse={i % 2 === 1} />
        </div>
      ))}
    </section>
  );
}
