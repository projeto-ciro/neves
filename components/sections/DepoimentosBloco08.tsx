"use client";
import { Section, Container } from "@/components/ui/section";
import { Title, Body } from "@/components/ui/typography";

export default function DepoimentosBloco08() {
  return (
    <Section id="depoimentos" className="scroll-mt-28">
      <Container>
        <Title className="text-gray-900 text-center">Depoimentos das alunas</Title>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6">
            <Body className="text-gray-700">“Em 21 dias, perdi 5kg e me sinto com mais energia do que nunca!”</Body>
          </div>
          <div className="border rounded-xl p-6">
            <Body className="text-gray-700">“Voltei a gostar do que vejo no espelho, autoestima lá em cima!”</Body>
          </div>
          <div className="border rounded-xl p-6">
            <Body className="text-gray-700">“O acompanhamento diário me ajudou a não desistir.”</Body>
          </div>
        </div>
      </Container>
    </Section>
  );
}
