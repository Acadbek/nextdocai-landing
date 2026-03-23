const FEATURES = [
  {
    title: "Choose the right AI for the job",
    description: "Switch between AI models to balance quality, speed, or creativity depending on your task. Use faster models for quick drafts.",
  },
  {
    title: "Edit freely with version history",
    description: "Automatic version history lets you restore, compare, or roll back drafts at any time, so you can edit and experiment freely.",
  },
  {
    title: "Use your files as knowledge",
    description: "Upload PDFs, docs, and notes. AI reads them, understands them, and uses them while writing to make documents more precise.",
  },
  {
    title: "Structure comes built-in",
    description: "Auto table of contents, section flow, and word budgeting — so documents stay clear and professional from start to finish.",
  },
  {
    title: "Regenerate only what you need",
    description: "Update specific sections, change structure, or refine tone without re-generating the entire document — stay in control.",
  },
  {
    title: "Export ready, client-ready",
    description: "Download polished documents in Word, PDF, or HTML formats, ready to share with your team, send, or present to clients.",
  },
];

export function FeaturesPageHero() {
  return (
    <section className="pt-28 lg:pt-44 pb-16 lg:pb-24">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <h1 className="text-4xl tracking-tight md:text-5xl lg:text-6xl mb-6">
            Powerful features, built<br />for real work
          </h1>
          <p className="text-muted-foreground font-serif text-base lg:text-lg leading-relaxed max-w-xl">
            NextDoc brings together document creation, rewriting, summarization,
            and structured workflows — turn raw information into clear,
            client-ready documents faster.
          </p>
        </div>

        {/* 6 feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border rounded-2xl overflow-hidden bg-border">
          {FEATURES.map((f, i) => (
            <div key={i} className="bg-background p-6 lg:p-8 flex flex-col gap-3">
              <div
                className="size-2 rounded-full shrink-0"
                style={{ backgroundColor: "oklch(0.65 0.18 86.47)" }}
              />
              <h3 className="text-base font-medium leading-snug">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-serif">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
