import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { UseCasesPageGrid } from "@/components/blocks/use-cases-page-grid";
import { UseCasesPageHero } from "@/components/blocks/use-cases-page-hero";
import { UseCasesPageSteps } from "@/components/blocks/use-cases-page-steps";
import { UseCasesPageTestimonials } from "@/components/blocks/use-cases-page-testimonials";

export default function UseCasesPage() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <UseCasesPageHero />
        <UseCasesPageSteps />
        <UseCasesPageGrid />
      </Background>
      <Background variant="bottom">
        <UseCasesPageTestimonials />
        <FAQ title="We've got answers to your questions!" />
      </Background>
    </>
  );
}
