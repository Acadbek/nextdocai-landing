import Image from "next/image";
import React from "react";

import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Pricing } from "@/components/blocks/pricing";
import { PricingLogos } from "@/components/blocks/pricing-logos";

const Page = () => {
  return (
    <Background>
      {/* Hero */}
      <Pricing
        className="py-28 lg:pt-44 lg:pb-10"
        title="Simple, Scalable pricing"
        subtitle="Choose the plan that's right for you and your team."
      />

      {/* Trusted by 20k+ */}
      <div className="container max-w-5xl pb-10 flex flex-col mt-10 items-center gap-3 text-center">
        <Image
          src="/images/avatars-row.png"
          alt="Customers"
          width={160}
          height={40}
          className="h-10 w-auto"
        />
        <p className="text-muted-foreground text-sm font-serif">
          Trusted by <span className="text-foreground">20k+</span> Customers Across the Globe
        </p>
      </div>

      {/* Logo marquee */}
      <PricingLogos />

      {/* FAQ */}
      <FAQ className="lg:pb-32" />
    </Background>
  );
};

export default Page;
