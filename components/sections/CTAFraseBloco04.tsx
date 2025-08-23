"use client";
import { Section, Container } from "@/components/ui/section";
import { Title, Body } from "@/components/ui/typography";

export default function CTAFraseBloco04() {
  return (
    <Section>
      <Container className="text-center space-y-6">
        <Title className="text-gray-900">
          “Não espere mais. <br /> Dê o primeiro passo e transforme sua vida!”
        </Title>

        <div className="grid sm:grid-cols-3 gap-6 mt-6">
          <div>
            <h4 className="font-semibold text-cyan-700">Método Personalizado</h4>
            <Body className="text-gray-700">Adaptado ao seu metabolismo, idade e rotina.</Body>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-700">Suporte Diário</h4>
            <Body className="text-gray-700">Você nunca mais vai se sentir sozinha nessa jornada.</Body>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-700">Resultados Reais</h4>
            <Body className="text-gray-700">De 3kg a 9kg eliminados com saúde e leveza.</Body>
          </div>
        </div>

        <Body className="text-gray-700 max-w-3xl mx-auto">
          Emagreça com saúde, autoestima e energia após os 40 anos.
        </Body>
      </Container>
    </Section>
  );
}
