"use client";
import { Section, Container } from "@/components/ui/section";
import { Title, Body } from "@/components/ui/typography";

export default function MetodoBloco02() {
  return (
    <Section id="metodo" className="scroll-mt-28">
      <Container>
        <Title className="text-white">
          Emagrecimento rápido e saudável <span className="text-cyan-400">após os 40</span>
        </Title>
        <Body className="text-white/80 mt-4 max-w-3xl">
          Sim, isso é possível e eu posso te ajudar!
          <br /><br />
          <strong>O que é a Reprogramação Metabólica?</strong><br />
          É um método inteligente que restaura o funcionamento natural do seu corpo para que ele volte a queimar gordura como fazia antes dos 40.
        </Body>
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-white/80">
          <li>😊 Humor estabilizado – menos ansiedade, mais bem-estar</li>
          <li>⚡ Mais disposição – você acorda leve e com energia</li>
          <li>❤ Autoestima elevada</li>
          <li>🔥 Queima de gordura acelerada mesmo em repouso</li>
          <li>🔥 Metabolismo ativado – seu corpo queima gordura até dormindo</li>
          <li>🍊 Intestino regulado – adeus inchaço, gases e constipação</li>
        </ul>
        <a
          href="https://wa.me/55SEUNUMERO?text=Quero%20começar%20agora"
          target="_blank"
          rel="noopener"
          className="inline-block mt-8 bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400"
        >
          QUERO COMEÇAR AGORA
        </a>
      </Container>
    </Section>
  );
}
