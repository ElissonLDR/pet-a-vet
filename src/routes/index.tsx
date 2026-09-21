import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { EdgeFilters, WHATS } from "@/components/landing/primitives";
import { HeroSection, PainSection, TruthSection } from "@/components/landing/sections-top";
import {
  BigTypeSection,
  IncludedSection,
  IntroSection,
  StepsSection,
} from "@/components/landing/sections-mid";
import {
  FaqSection,
  PlanSection,
  TestimonialsSection,
  WhoSection,
} from "@/components/landing/sections-bottom";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Certificado de viagem internacional para pets | Pet a Vet" },
      {
        name: "description",
        content:
          "Vacinas, microchip, sorologia de raiva e orientação para o certificado de viagem internacional do seu pet. Atendimento na Vila Madalena, São Paulo.",
      },
      {
        property: "og:title",
        content: "Certificado de viagem internacional para pets | Pet a Vet",
      },
      {
        property: "og:description",
        content:
          "Prepare seu pet para viajar ao exterior com apoio veterinário completo na Vila Madalena.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-pv-cream min-h-screen overflow-x-hidden">
      <EdgeFilters />
      <HeroSection />
      <TruthSection />
      <PainSection />
      <IntroSection />
      <BigTypeSection />
      <StepsSection />
      <IncludedSection />
      <PlanSection />
      <TestimonialsSection />
      <WhoSection />
      <FaqSection />

      <a
        href={WHATS}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="bg-pv-accent text-pv-cream-3 hover:bg-pv-deep pv-shadow-float fixed right-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-300"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
