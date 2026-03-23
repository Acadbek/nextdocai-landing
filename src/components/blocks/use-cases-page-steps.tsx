const STEPS = [
  {
    number: "1",
    title: "Work on real documents",
    description: "Create, rewrite, and refine full documents—not just short AI responses.",
  },
  {
    number: "2",
    title: "Context-aware writing",
    description: "AI understands your files, notes, and project context while generating content.",
  },
  {
    number: "3",
    title: "Full control, always",
    description: "Edit specific sections, track versions, and guide how AI helps at every step.",
  },
  {
    number: "4",
    title: "Client-ready output",
    description: "Export polished documents in formats ready to share, review, or present.",
  },
];

export const UseCasesPageSteps = () => (
  <section className="py-20 lg:py-28">
    <div className="container flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="max-w-2xl text-3xl lg:text-4xl">
          Built for real document workflows
        </h2>
        <p className="text-muted-foreground max-w-xl text-base font-serif">
          Create, refine, and manage documents with AI that understands context
          and gives you full control.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="flex flex-col gap-4 rounded-2xl border bg-card p-6"
          >
            <span
              className="text-4xl leading-none"
              style={{ color: "var(--brand)" }}
            >
              {step.number}
            </span>
            <h3 className="text-lg">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-serif">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
