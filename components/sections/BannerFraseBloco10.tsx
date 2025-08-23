"use client";
import { Section, Container } from "@/components/ui/section";
import { Title } from "@/components/ui/typography";

export default function BannerFraseBloco10() {
  return (
    <Section className="bg-gradient-to-r from-cyan-500 to-purple-600 py-16">
      <Container className="text-center">
        <Title className="text-white">
          NÃO É SOBRE APENAS EMAGRECER, <br /> É SOBRE SE REENCONTRAR. <br /> COMECE AGORA.
        </Title>
      </Container>
    </Section>
  );
}
