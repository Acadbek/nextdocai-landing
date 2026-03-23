"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Describe your document",
    description:
      "Tell the AI what kind of document you need — a report, proposal, blog post, or anything else.",
  },
  {
    number: "02",
    title: "AI generates a draft",
    description:
      "Our AI instantly creates a professional first draft tailored to your tone, audience, and goals.",
  },
  {
    number: "03",
    title: "Edit, refine & share",
    description:
      "Polish the content with smart suggestions, collaborate with your team, and share securely.",
  },
];

export const HowItWorks = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="container mx-auto flex flex-col items-center gap-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-brand text-sm font-mono uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="text-foreground max-w-2xl text-3xl font-semibold tracking-tight lg:text-5xl">
            From idea to polished document in seconds
          </h2>
          <p className="text-muted-foreground max-w-xl text-base font-serif">
            Watch how easy it is to create professional documents with AI — no
            templates, no blank-page anxiety.
          </p>
        </div>

        {/* Video */}
        <div className="relative w-full max-w-4xl p-2 bg-primary rounded-4xl dark:bg-gray-950">
          <div className="overflow-hidden rounded-3xl">
            {!playing ? (
              <>
                {/* Thumbnail */}
                <div className="relative aspect-video w-full bg-linear-to-br from-gray-900 to-gray-800">
                  <img
                    src="https://placehold.co/1280x720/1a1a2e/ffffff?text=Product+Demo"
                    alt="Product demo thumbnail"
                    className="h-full w-full object-cover opacity-60"
                  />
                  {/* Play button */}
                  <button
                    onClick={() => setPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group"
                    aria-label="Play demo video"
                  >
                    <div className="flex size-20 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform duration-300 motion-safe:group-hover:scale-110">
                      <Play aria-hidden="true" className="size-8 fill-black text-black translate-x-0.5" />
                    </div>
                  </button>
                </div>
              </>
            ) : (
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Product demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  sandbox="allow-scripts allow-same-origin allow-presentation"
                />
              </div>
            )}
          </div>
        </div>

        {/* Steps */}
        {/* <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-3 rounded-2xl border bg-card p-6 shadow-sm"
            >
              <span className="text-primary text-4xl font-bold leading-none">
                {step.number}
              </span>
              <h3 className="text-foreground text-lg font-semibold">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
