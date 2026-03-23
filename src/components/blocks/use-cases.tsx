import Image from "next/image";
import Link from "next/link";
import {
  NotebookPen,
  FileText,
  TrendingUp,
  BookOpen,
  FileSearch,
  ShieldCheck,
  FilePen,
} from "lucide-react";

import { DashedLine } from "../dashed-line";

const ICON_STYLE = { color: "var(--brand)" };

const smallItems = [
  { icon: NotebookPen, title: "Meeting notes → reports" },
  { icon: FileText, title: "Client → ready reports" },
  { icon: TrendingUp, title: "Build investor pitches" },
  { icon: BookOpen, title: "Product documentation" },
  { icon: FileSearch, title: "Summarize documents" },
  { icon: ShieldCheck, title: "Update policies easily" },
];

export const UseCases = () => {
  return (
    <section id="use-cases" className="overflow-hidden py-20 lg:py-28">
      <div className="container">
        {/* Header */}
        <div className="flex items-center gap-3 max-md:hidden">
          <DashedLine className="text-muted-foreground flex-1" />
          <span className="text-brand shrink-0 font-mono text-sm tracking-widest uppercase">
            USE CASES
          </span>
          <DashedLine className="text-muted-foreground flex-1" />
        </div>

        <div className="mt-8 lg:mt-12 text-center">
          <h2 className="text-2xl tracking-tight md:text-3xl lg:text-4xl">
            Endless ways to use it
          </h2>
          <p className="text-muted-foreground mt-3 text-base font-serif">
            Pick a real-world use case and see how NextDoc AI gets the work done.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container mt-8 lg:mt-12">
        <DashedLine orientation="horizontal" className="scale-x-105" />

        <div className="flex max-md:flex-col">
          {/* Left large card */}
          <div className="relative flex flex-1 flex-col justify-between px-0 py-6 md:px-6 md:py-8">
            <div>
              <FilePen className="mb-4 size-8" strokeWidth={1.5} style={ICON_STYLE} />
              <Link href="#" className="group inline-flex items-center gap-2">
                <h3 className="text-xl font-semibold tracking-tight transition-opacity group-hover:opacity-60">
                  Rewrite proposals for new clients
                </h3>
                <span className="translate-x-0 text-lg transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border">
              <Image
                src="/images/proposal-preview.svg"
                alt="Proposal preview"
                width={900}
                height={600}
                className="w-full object-cover object-top-left scale-[1.3]"
              />
            </div>

            <DashedLine
              orientation="vertical"
              className="absolute top-0 right-0 max-md:hidden"
            />
            <DashedLine
              orientation="horizontal"
              className="absolute inset-x-0 bottom-0 md:hidden"
            />
          </div>

          {/* Right grid - 2x3 */}
          <div className="flex-1 grid grid-cols-2 max-md:grid-cols-1">
            {smallItems.map((item, i) => {
              const Icon = item.icon;
              const isLastRow = i >= smallItems.length - 2;
              const isRightCol = i % 2 === 1;
              return (
                <div
                  key={i}
                  className="relative flex flex-col gap-4 px-6 py-6 md:py-8"
                >
                  <Icon className="size-7" strokeWidth={1.5} style={ICON_STYLE} />
                  <Link href="#" className="group inline-flex items-center gap-2">
                    <h3 className="text-base font-semibold transition-opacity group-hover:opacity-60">
                      {item.title}
                    </h3>
                    <span className="translate-x-0 transition-transform group-hover:translate-x-1">→</span>
                  </Link>

                  {!isRightCol && (
                    <DashedLine
                      orientation="vertical"
                      className="absolute top-0 right-0 max-md:hidden"
                    />
                  )}
                  {!isLastRow && (
                    <DashedLine
                      orientation="horizontal"
                      className="absolute inset-x-0 bottom-0"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <DashedLine orientation="horizontal" className="scale-x-105" />
      </div>
    </section>
  );
};
