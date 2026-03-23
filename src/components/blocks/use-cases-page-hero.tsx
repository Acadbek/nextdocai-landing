import Image from "next/image";

export const UseCasesPageHero = () => (
  <section className="pt-24 pb-12 lg:py-32 lg:pt-44">
    <div className="container flex flex-col gap-6">
      <h1 className="text-foreground max-w-3xl text-4xl tracking-tight md:text-5xl lg:text-6xl">
        Your drafts, docs, projects. Simplified.
      </h1>
      <p className="text-muted-foreground max-w-xl text-base lg:text-lg font-serif leading-relaxed">
        From proposals to research papers, see how NextDoc handles everyday document work.
      </p>
    </div>

    <div className="container mt-14 lg:mt-20">
      <div className="overflow-hidden rounded-2xl lg:rounded-3xl border">
        <Image
          src="/images/main-doc.svg"
          alt="NextDoc dashboard"
          width={1164}
          height={658}
          className="w-full h-auto"
        />
      </div>
    </div>
  </section>
);
