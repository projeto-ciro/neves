"use client";
import { Section, Container } from "@/components/ui/section";
import { Title, Body } from "@/components/ui/typography";

export default function Metodo3PilaresBloco05() {
  return (
    <Section>
      <Container>
        <Title className="text-gray-900">O Método do Desafio Você + Magra</Title>
        <Body className="text-gray-700 mt-4 max-w-3xl">
          Baseado em 3 pilares fundamentais para o emagrecimento após os 40:
        </Body>

        <div className="mt-6 space-y-6">
          <div>
            <h4 className="text-cyan-700 font-semibold">🧪 1. Avaliação Metabólica Avançada</h4>
            <Body className="text-gray-700">Descubra como seu corpo funciona...</Body>
          </div>
          <div>
            <h4 className="text-cyan-700 font-semibold">📝 2. Plano Personalizado</h4>
            <Body className="text-gray-700">Treino + guia de alimentação adaptados à sua rotina...</Body>
          </div>
          <div>
            <h4 className="text-cyan-700 font-semibold">👩⚕ 3. Acompanhamento e Monitoramento</h4>
            <Body className="text-gray-700">Apoio contínuo, ajustes e reavaliações...</Body>
          </div>
        </div>
      </Container>
    </Section>
  );
}
