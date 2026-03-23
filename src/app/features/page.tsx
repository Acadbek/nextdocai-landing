import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { FeaturesPageHero } from "@/components/blocks/features-page-hero";
import { FeaturesPageShowcase } from "@/components/blocks/features-page-showcase";
import { UseCasesPageTestimonials } from "@/components/blocks/use-cases-page-testimonials";

export default function FeaturesPage() {
  return (
    <>
      <Background>
        <FeaturesPageHero />
        <FeaturesPageShowcase />
      </Background>
      <Background variant="bottom">
        <UseCasesPageTestimonials />
        <FAQ title="We've got answers to your questions!" className="lg:pb-32" />
      </Background>
    </>
  );
}
