import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { ProductShowcase } from "@/components/blocks/product-showcase";
import { SmartFeatures } from "@/components/blocks/smart-features";
import { UseCases } from "@/components/blocks/use-cases";
import { Hero } from "@/components/blocks/hero";
import { HowItWorks } from "@/components/blocks/how-it-works";
// import { Logos } from "@/components/blocks/logos";
import { Pricing } from "@/components/blocks/pricing";
// import { ResourceAllocation } from "@/components/blocks/resource-allocation";
// import { Testimonials } from "@/components/blocks/testimonials";

export default function Home() {
  return (
    <>
      <Background>
        <Hero />
        <HowItWorks />
        {/* <Logos /> */}
        <Features />
        <ProductShowcase />
        <SmartFeatures />
        <UseCases />
        {/* <ResourceAllocation /> */}
      </Background>
      <Background variant="bottom">
        <Pricing />
        <FAQ />
      </Background>
    </>
  );
}
