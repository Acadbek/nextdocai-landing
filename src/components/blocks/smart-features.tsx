import {
  Sparkles,
  LayoutTemplate,
  PenLine,
  Share2,
  FolderOpen,
  History,
  RefreshCw,
  Download,
} from "lucide-react";

import { DashedLine } from "../dashed-line";
import { Card, CardContent } from "@/components/ui/card";

const topFeatures = [
  {
    icon: Sparkles,
    title: "Choose Your AI",
    description:
      "Switch between AI models per document to balance quality, speed, or creativity.",
  },
  {
    icon: LayoutTemplate,
    title: "Built in Structure",
    description:
      "Auto table of contents, section flow, and word budgeting — so documents stay clear.",
  },
  {
    icon: PenLine,
    title: "Full Editing Control",
    description:
      "Rewrite sections, reorder content, or refine tone — without regenerating the whole document.",
  },
  {
    icon: Share2,
    title: "Ready to Share",
    description:
      "Download polished documents as Word, PDF, or HTML — ready to send or present.",
  },
];

const bottomFeatures = [
  {
    icon: FolderOpen,
    title: "Use your files as knowledge",
    description:
      "Upload your own files and let AI use them as context when generating documents.",
  },
  {
    icon: History,
    title: "Never lose a version",
    description:
      "Every edit is saved automatically — restore any previous version with one click.",
  },
  {
    icon: RefreshCw,
    title: "Regenerate what you need",
    description:
      "Rewrite sections, reorder content, or refine tone — without touching the whole doc.",
  },
  {
    icon: Download,
    title: "Export ready, client ready",
    description:
      "Download polished documents as Word, PDF, or HTML — ready to send or present.",
  },
];

const FeatureItem = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="flex-1 p-6 lg:p-8">
    <div className="mb-4 inline-flex">
      <Icon className="size-6" strokeWidth={1.5} style={{ color: "oklch(0.65 0.18 86.47)" }} />
    </div>
    <h3 className="text-foreground text-base font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);

export const SmartFeatures = () => {
  return (
    <section id="smart-features" className="py-20 lg:py-28">
      <div className="container">
        {/* Top dashed line */}
        <div className="flex items-center gap-3 max-md:hidden">
          <DashedLine className="text-muted-foreground flex-1" />
          <span className="text-muted-foreground shrink-0 font-mono text-sm tracking-wide">
            BUILT FOR EVERY WORKFLOW
          </span>
          <DashedLine className="text-muted-foreground flex-1" />
        </div>

        {/* Header */}
        <div className="mt-8 lg:mt-12 flex items-start justify-between gap-8">
          <div className="mx-auto grid max-w-4xl items-center gap-3 md:gap-0 lg:grid-cols-2 w-full">
            <h2 className="text-2xl tracking-tight md:text-3xl lg:text-4xl">
              A smarter way to work <br /> with Documents
            </h2>
            <p className="text-muted-foreground leading-snug font-serif">
              Discover powerful capabilities that make document creation faster,
              smarter, and more flexible than ever.
            </p>
          </div>
        </div>

        {/* Features Card */}
        <Card className="mt-6 bg-transparent border-none shadow-none md:mt-8 lg:mt-10">
          <CardContent className="flex flex-col p-0">
            {/* Top row */}
            <div className="flex max-md:flex-col">
              {topFeatures.map((feature, i) => (
                <div key={i} className="flex flex-1 max-md:flex-col">
                  <FeatureItem {...feature} />
                  {i < topFeatures.length - 1 && (
                    <>
                      <div className="relative hidden md:block">
                        <DashedLine orientation="vertical" />
                      </div>
                      <div className="relative block md:hidden">
                        <DashedLine orientation="horizontal" />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Separator */}
            <div className="relative">
              <DashedLine orientation="horizontal" />
            </div>

            {/* Bottom row */}
            <div className="flex max-md:flex-col">
              {bottomFeatures.map((feature, i) => (
                <div key={i} className="flex flex-1 max-md:flex-col">
                  <FeatureItem {...feature} />
                  {i < bottomFeatures.length - 1 && (
                    <>
                      <div className="relative hidden md:block">
                        <DashedLine orientation="vertical" />
                      </div>
                      <div className="relative block md:hidden">
                        <DashedLine orientation="horizontal" />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
