"use client";
import { Section, Container } from "@/components/ui/section";
import { Title, Body } from "@/components/ui/typography";

export default function SobreCiroBloco09() {
  return (
    <Section id="sobre" className="scroll-mt-28">
      <Container className="text-center space-y-6">
        <Title className="text-white">Quem é seu mentor: Ciro Neves</Title>
        <Body className="text-white/80 max-w-3xl mx-auto">
          Sou Ciro Neves, personal trainer com mais de 20 anos de experiência e especialista em emagrecimento para mulheres acima dos 40 anos...
        </Body>
        <a
          href="https://wa.me/55SEUNUMERO?text=Quero%20falar%20com%20o%20Ciro"
          target="_blank"
          rel="noopener"
          className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400"
        >
          Falar com o Ciro no WhatsApp
        </a>
      </Container>
    </Section>
  );
}
