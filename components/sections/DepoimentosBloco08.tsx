"use client";
import { Section, Container } from "@/components/ui/section";
import { Title, Body } from "@/components/ui/typography";

export default function DepoimentosBloco08() {
  return (
    <Section id="depoimentos" className="scroll-mt-28">
      <Container>
        <Title className="text-white text-center">Depoimentos das alunas</Title>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <Body className="text-white/80">“Em 21 dias, perdi 5kg e me sinto com mais energia do que nunca!”</Body>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <Body className="text-white/80">“Voltei a gostar do que vejo no espelho, autoestima lá em cima!”</Body>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <Body className="text-white/80">“O acompanhamento diário me ajudou a não desistir.”</Body>
          </div>
        </div>
      </Container>
    </Section>
  );
}
