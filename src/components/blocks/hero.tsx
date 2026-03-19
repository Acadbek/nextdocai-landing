"use client";

import { useState } from "react";

import { ArrowRight, FileImage, FileText, Hash, List, Settings2, Volume2, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

const OPTIONS = [
  { label: "Files & Images", Icon: FileImage },
  { label: "Type", Icon: FileText },
  { label: "TOC", Icon: List },
  { label: "Words", Icon: Hash },
  { label: "Tone", Icon: Volume2 },
  { label: "Model", Icon: Zap },
];

export const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="pt-24 pb-12 lg:py-32 lg:pt-44">
      <div className="container flex flex-col items-center justify-between gap-6 text-center md:gap-14">
        <div className="flex flex-1 flex-col items-center">
          <h1 className="text-foreground max-w-160 text-4xl md:text-4xl lg:text-6xl xl:whitespace-nowrap">
            Write smarter with <br /> AI Powered documents
          </h1>

          <p className="text-muted-foreground text-1xl mt-7 max-w-2xl md:text-md font-serif">
            Create professional documents, refine content with AI, manage projects, and share documents securely all in one powerful, easy-to-use platform.
          </p>

          {/* <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild>
              <a href="https://github.com/shadcnblocks/mainline-nextjs-template">
                Get started
              </a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="https://shadcnblocks.com"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Built by shadcnblocks.com
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div> */}
        </div>
      </div>

      <div className="flex justify-center mt-16 md:mt-28 px-3 sm:px-4 md:px-0">
        <div className="max-w-225 w-full rounded-3xl pt-2 border border-border dark:border-[oklch(0.65_0.18_86.47)] focus-within:border-[oklch(0.65_0.18_86.47)] focus-within:ring-1 focus-within:ring-[oklch(0.65_0.18_86.47)] transition-all bg-card relative pb-14">
          <textarea
            className="w-full min-h-22.5 md:min-h-37.5 border-none shadow-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 resize-none px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none"
            id="prompt"
            placeholder="Describe what you want this document to cover…"
          />

          <div className="absolute bottom-0 px-5 pb-3.5 flex items-center justify-between w-full gap-2 bg-card rounded-b-3xl z-20">
            {/* Mobile: single settings icon + dropdown */}
            <div className="relative md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-center h-6.75 w-6.75 rounded-md bg-primary/10 hover:bg-primary/20 active:scale-[0.95] transition-colors cursor-pointer"
                aria-label="Options"
              >
                <Settings2 className="w-4 h-4" style={{ color: "oklch(0.65 0.18 86.47)" }} />
              </button>
              {open && (
                <div className="absolute bottom-full left-0 mb-2 w-44 rounded-xl border border-border bg-popover shadow-lg py-1.5 z-30">
                  {OPTIONS.map(({ label, Icon }) => (
                    <button
                      key={label}
                      className="w-full text-left px-3 py-2 text-xs font-medium flex items-center gap-2.5 hover:bg-primary/5 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: "oklch(0.65 0.18 86.47)" }} />
                      <span className="text-foreground">{label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop: all buttons */}
            <div className="hidden md:flex items-center gap-2">
              {OPTIONS.map(({ label, Icon }) => (
                <button
                  key={label}
                  type="button"
                  className="rounded-full flex items-center justify-center gap-1.5 h-6.75 px-2.5 text-xs font-normal border transition-colors bg-primary/10 hover:bg-primary/20 active:scale-[0.97] cursor-pointer"
                  style={{ color: "oklch(0.65 0.18 86.47)", borderColor: "oklch(0.65 0.18 86.47)" }}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  {label}
                </button>
              ))}
            </div>

            <div>
              <button
                className="whitespace-nowrap ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 py-2 h-9 px-4 rounded-full text-sm font-semibold flex items-center justify-center gap-1.5 transition-all hover:opacity-90 active:scale-[0.97] cursor-pointer"
                style={{ backgroundColor: "oklch(0.65 0.18 86.47)", color: "white", border: "1.5px solid oklch(0.55 0.20 86.47)" }}
                type="submit"
              >
                Generate
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.057 1.14258L10.4264 2.78255C10.7398 4.1736 11.8261 5.25991 13.2172 5.57326L14.8571 5.94268L13.2172 6.31211C11.8261 6.62546 10.7398 7.71173 10.4264 9.1028L10.057 10.7428L9.68764 9.1028C9.37426 7.71173 8.288 6.62546 6.89693 6.31211L5.25694 5.94268L6.89693 5.57326C8.28793 5.25991 9.37426 4.1736 9.68764 2.78255L10.057 1.14258Z" fill="white" />
                  <path d="M4.57128 8L4.83515 9.17143C5.05897 10.165 5.83491 10.941 6.82849 11.1648L7.99992 11.4286L6.82849 11.6925C5.83491 11.9163 5.05897 12.6922 4.83515 13.6859L4.57128 14.8573L4.3074 13.6859C4.08358 12.6922 3.30765 11.9163 2.31404 11.6925L1.14263 11.4286L2.31404 11.1648C3.30765 10.941 4.08358 10.1651 4.3074 9.17143L4.57128 8Z" fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
