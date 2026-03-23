import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";

const topItems = [
  {
    title: "Create from prompts",
    image: "/images/service_img_1.svg",
    imageClassName: "scale-[1.1] origin-top-left",
  },
  {
    title: "Fix, refine any section",
    image: "/images/service_img_2.svg",
    imageClassName: "",
  },
  {
    title: "Rewrite Docs with AI",
    image: "/images/service_img_4.svg",
    imageClassName: "",
  },
];

const bottomItems = [
  {
    title: "Summarize any document",
    image: "/images/service_img_3.svg",
    imageClassName: "",
  },
  {
    title: "Export and share instantly",
    image: "/images/service_img_5.svg",
    imageClassName: "",
  },
];

export const Features = () => {
  return (
    <section id="feature-modern-teams" className="py-20 lg:py-28">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="flex items-center gap-3 max-md:hidden">
          <DashedLine className="text-muted-foreground flex-1" />
          <span className="text-muted-foreground shrink-0 font-mono text-sm tracking-wide">
            DRAFT FAST. REFINE SMART.
          </span>
          <DashedLine className="text-muted-foreground flex-1" />
        </div>

        {/* Content */}
        <div className="mx-auto mt-8 grid max-w-4xl items-center gap-3 md:gap-0 lg:mt-12 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-3xl lg:text-4xl">
            Thoughtful AI, built into <br /> your writing
          </h2>
          <p className="text-muted-foreground leading-snug font-serif">
            Discover powerful capabilities that make document creation faster, smarter, and more flexible than ever built for teams who move fast and write with confidence.
          </p>
        </div>

        {/* Features Card */}
        <Card className="mt-6 rounded-3xl md:mt-8 lg:mt-10">
          <CardContent className="flex flex-col p-0">
            {/* Top row - 3 items */}
            <div className="flex max-md:flex-col">
              {topItems.map((item, i) => (
                <div key={i} className="flex flex-1 max-md:flex-col">
                  <div className="flex-1 p-3">
                    <div className="relative aspect-[1.8/1] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={`${item.title} interface`}
                        fill
                        className={`object-cover object-top-left ${item.imageClassName}`}
                      />
                      <div className="" />
                    </div>

                    <Link
                      href="#"
                      className="group flex items-center justify-between gap-4  pt-3 md:pt-4"
                    >
                      <h3 className="font-display max-w-60 text-xl leading-tight font-bold tracking-tight">
                        {item.title}
                      </h3>
                      <div className="rounded-full border p-2 transition-colors opacity-50 group-hover:opacity-100 group-hover:bg-brand" style={{ borderColor: "var(--brand)", backgroundColor: "color-mix(in oklch, var(--brand) 12%, transparent)" }}>
                        <ChevronRight className="size-5 transition-colors text-brand group-hover:text-white lg:size-6" />
                      </div>
                    </Link>
                  </div>
                  {i < topItems.length - 1 && (
                    <div className="relative hidden md:block">
                      <DashedLine orientation="vertical" />
                    </div>
                  )}
                  {i < topItems.length - 1 && (
                    <div className="relative block md:hidden">
                      <DashedLine orientation="horizontal" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Horizontal separator */}
            <div className="relative">
              <DashedLine orientation="horizontal" />
            </div>

            {/* Bottom row - 2 items */}
            <div className="flex max-md:flex-col">
              {bottomItems.map((item, i) => (
                <div key={i} className="flex flex-1 max-md:flex-col">
                  <div className="flex-1 p-3">
                    <div className="relative aspect-[1.8/1] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={`${item.title} interface`}
                        fill
                        className={`object-cover object-top-left ${item.imageClassName}`}
                      />
                      <div className="" />
                    </div>

                    <Link
                      href="#"
                      className="group flex items-center justify-between gap-4 pt-3 md:pt-4"
                    >
                      <h3 className="font-display max-w-60 text-xl leading-tight font-bold tracking-tight">
                        {item.title}
                      </h3>
                      <div className="rounded-full border p-2 transition-colors opacity-50 group-hover:opacity-100 group-hover:bg-brand" style={{ borderColor: "var(--brand)", backgroundColor: "color-mix(in oklch, var(--brand) 12%, transparent)" }}>
                        <ChevronRight className="size-5 transition-colors text-brand group-hover:text-white lg:size-6" />
                      </div>
                    </Link>
                  </div>
                  {i < bottomItems.length - 1 && (
                    <div className="relative hidden md:block">
                      <DashedLine orientation="vertical" />
                    </div>
                  )}
                  {i < bottomItems.length - 1 && (
                    <div className="relative block md:hidden">
                      <DashedLine orientation="horizontal" />
                    </div>
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
