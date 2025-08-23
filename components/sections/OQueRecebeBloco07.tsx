"use client";
import { Section, Container } from "@/components/ui/section";
import { Title, Body } from "@/components/ui/typography";

export default function OQueRecebeBloco07() {
  return (
    <Section>
      <Container>
        <Title className="text-gray-900 text-center">O que você vai receber na prática</Title>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="text-cyan-700 font-semibold">01 – Avaliação Física</h4>
            <Body className="text-gray-700">Avaliação física e metabólica avançada.</Body>
          </div>
          <div>
            <h4 className="text-cyan-700 font-semibold">02 – Plano de treino</h4>
            <Body className="text-gray-700">
              Acesso ao app, vídeos, planilha de controle + reavaliação no 15º treino.
            </Body>
          </div>
          <div>
            <h4 className="text-cyan-700 font-semibold">03 – Plano alimentar</h4>
            <Body className="text-gray-700">
              Guia prático de alimentação saudável + sono e hidratação.
            </Body>
          </div>
          <div>
            <h4 className="text-cyan-700 font-semibold">04 – Suporte total</h4>
            <Body className="text-gray-700">WhatsApp diário, grupo exclusivo, plantão de dúvidas.</Body>
          </div>
        </div>
      </Container>
    </Section>
  );
}
