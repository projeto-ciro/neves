"use client";
import { Section, Container } from "@/components/ui/section";
import { Title, Body } from "@/components/ui/typography";

export default function PresenteBloco11() {
  return (
    <Section>
      <Container className="text-center space-y-6">
        <Title className="text-gray-900">
          EU PREPAREI UM PRESENTE MUITO ESPECIAL PARA VOCÊ
        </Title>

        <Body className="text-gray-700 max-w-2xl mx-auto">
          Um guia direto e prático com tudo o que você precisa para começar a ajustar sua rotina,
          melhorar o sono, reduzir a ansiedade, desinchar e preparar seu corpo para reagir de verdade.
        </Body>

        <a
          href="https://wa.me/55SEUNUMERO?text=Quero%20receber%20o%20presente"
          target="_blank"
          rel="noopener"
          className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400"
        >
          Quero meu presente
        </a>
      </Container>
    </Section>
  );
}
