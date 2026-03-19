import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section id="product-showcase" className="py-20 lg:py-28">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-foreground max-w-2xl text-3xl tracking-tight lg:text-5xl">
            One place for all your documents.
          </h2>
          <p className="text-muted-foreground max-w-xl text-base font-serif">
            Write, refine, organize, and collaborate without switching tools.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-10 lg:mt-14 relative w-full rounded-2xl p-2 lg:rounded-3xl">
          <div className="overflow-hidden rounded-xl lg:rounded-2xl">
            <Image
              src="/images/main-doc.svg"
              alt="Product dashboard"
              width={1164}
              height={658}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
