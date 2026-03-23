import Image from "next/image";

export const UseCasesPageHero = () => (
  <section className="pt-24 pb-12 lg:py-32 lg:pt-44">
    <div className="container flex flex-col items-center gap-6 text-center">
      <h1 className="text-foreground max-w-3xl text-4xl md:text-5xl lg:text-6xl">
        Your drafts, docs, &<br />projects. Simplified.
      </h1>
      <p className="text-muted-foreground max-w-2xl text-base md:text-lg font-serif">
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
