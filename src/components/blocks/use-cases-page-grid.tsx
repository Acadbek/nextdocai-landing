import Image from "next/image";
import {
  FilePen,
  NotebookPen,
  TrendingUp,
  BookOpen,
  FileText,
  FileSpreadsheet,
  ShieldCheck,
  FileSearch,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";

const ICON_STYLE = { color: "var(--brand)" };

const ITEMS = [
  {
    Icon: FilePen,
    title: "Write Proposals for clients",
    description:
      "Reuse winning proposals, adapt scope, pricing, and tone for each client. Transform your past success into future wins.",
    image: "/images/proposal-preview.svg",
  },
  {
    Icon: NotebookPen,
    title: "Turn meeting notes into structured reports",
    description: "Customize every detail to match your unique style.",
    image: "/images/meeting-notes.svg",
  },
  {
    Icon: TrendingUp,
    title: "Create an investor pitch from your business plan",
    description:
      "Turn long-form plans into clear, investor-ready pitch documents. Get funding-ready presentations fast.",
    image: "/images/usecase-investor.svg",
  },
  {
    Icon: BookOpen,
    title: "Create research papers from reference files",
    description:
      "Combine PDFs, notes, and citations into a structured academic document.",
    image: "/images/research-papers.svg",
  },
  {
    Icon: FileText,
    title: "Create client ready reports for project files",
    description:
      "Turn notes, data, and references into polished reports clients can sign off. Professional deliverables in minutes.",
    image: "/images/use-case-card-2.svg",
  },
  {
    Icon: FileSpreadsheet,
    title: "Generate product docs from scattered notes",
    description:
      "Convert ideas, specs, and research into structured product documentation.",
    image: "/images/download-notes.svg",
  },
  {
    Icon: ShieldCheck,
    title: "Update policies without rewriting everything",
    description:
      "Upload old policies and let AI handle updates, clarity, and formatting.",
    image: "/images/policies-img.svg",
  },
  {
    Icon: FileSearch,
    title: "Summarize long documents",
    description:
      "Generate abstracts or executive summaries from dense material.",
    image: "/images/summarise-image.svg",
  },
];

export const UseCasesPageGrid = () => (
  <section className="py-20 lg:py-28">
    <div className="container">
      {/* Header */}
      <div className="flex items-center gap-3 max-md:hidden">
        <DashedLine className="text-muted-foreground flex-1" />
        <span className="bg-background text-muted-foreground shrink-0 font-mono text-sm tracking-wide">
          USE CASES
        </span>
        <DashedLine className="text-muted-foreground flex-1" />
      </div>

      <div className="mt-8 lg:mt-12 text-center">
        <h2 className="text-2xl tracking-tight md:text-3xl lg:text-4xl">
          Built to handle everyday document work
        </h2>
        <p className="text-muted-foreground mt-3 text-base font-serif">
          Explore common use cases and see how NextDoc fits into real-world
          workflows.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14">
        {ITEMS.map(({ Icon, title, description, image }) => (
          <div
            key={title}
            className="flex flex-col gap-4 rounded-2xl border bg-card overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full bg-muted/40 overflow-hidden rounded-t-2xl" style={{ aspectRatio: "4/3" }}>
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain object-center p-6"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-6 pt-2">
              <div
                className="flex size-9 items-center justify-center rounded-lg"
                style={{ backgroundColor: "color-mix(in oklch, var(--brand) 12%, transparent)" }}
              >
                <Icon className="size-4" strokeWidth={1.5} style={ICON_STYLE} />
              </div>
              <div>
                <h3 className="text-base">{title}</h3>
                <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed font-serif">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
