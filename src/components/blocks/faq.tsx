import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Getting started",
    questions: [
      {
        question: "What exactly does NextDoc AI help me create?",
        answer:
          "NextDoc AI helps you create structured, professional documents — proposals, reports, investor pitches, research papers, client deliverables, and internal business docs. Start from a prompt, existing files, or notes, and the AI generates a well-organised document with the right sections, flow, and tone.",
      },
      {
        question: "Can I rewrite or improve my existing documents?",
        answer:
          "Absolutely. Upload an existing document and ask NextDoc AI to rewrite, refine, shorten, expand, or change the tone. It's perfect for refreshing old proposals, adapting content for new clients, or simply making things clearer and more professional.",
      },
    ],
  },
  {
    title: "Features",
    questions: [
      {
        question: "How is this different from using ChatGPT directly?",
        answer:
          "NextDoc AI is built for real document workflows — not just chat. It keeps your content structured, supports projects with multiple related documents, tracks version history, lets you chat with AI inside your document, and exports to Word, PDF, or Google Docs. Everything in one place, built around how documents actually work.",
      },
      {
        question: "Will the AI use my uploaded files and notes as context?",
        answer:
          "Yes. NextDoc AI reads and understands your reference files, notes, and project documents to generate more accurate, context-aware content. This is especially useful for business plans, technical reports, or anything research-heavy where generic output just won't cut it.",
      },
    ],
  },
  {
    title: "Privacy & security",
    questions: [
      {
        question: "Is my data secure and private?",
        answer:
          "Yes. Your documents are securely stored, access-controlled, and never shared with other users. You stay in full control of sharing permissions, version history, and exports. Your content is yours — full stop.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-20 lg:py-28", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto font-serif">
              If you can't find what you're looking for,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
