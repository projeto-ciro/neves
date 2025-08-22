// app/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Seções do seu site
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";           // Página 2
import MetabolicSection from "@/components/MetabolicSection";   // Página 3
import BenefitsSection from "@/components/BenefitsSection";     // Página 4
import TestimonialsSection from "@/components/TestimonialsSection";
import CalculatorSection from "@/components/CalculatorSection";
import EbookSection from "@/components/EbookSection";
// Se você ainda não tem ContactSection, pode comentar a import abaixo
// import ContactSection from "@/components/ContactSection";

import BannerFullBleed from "@/components/BannerFullBleed";

export default function Home() {
  return (
    /**
     * Correção #1: compensação do header fixo.
     * h-20 ~ 80px no mobile e h-24 ~ 96px em telas maiores.
     */
    <main className="min-h-screen bg-background text-foreground pt-20 md:pt-24 overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section id="inicio" className="scroll-mt-24">
        <HeroSection />
      </section>

      {/* PÁGINA 2 */}
      <section id="sobre" className="scroll-mt-24">
        <AboutSection />
      </section>

      {/* === BANNER 1 — full-bleed e com distância reduzida === */}
      <section className="py-0">
        <BannerFullBleed
          src="/banner-1.png"
          alt="É mais do que emagrecer: é sobre ter +saúde e disposição."
          heightClass="h-[clamp(200px,28vw,420px)]"
          flush   // reduz o espaçamento acima/abaixo
        />
      </section>

      {/* PÁGINA 3 */}
      <section id="programa" className="scroll-mt-24">
        <MetabolicSection />
      </section>

      {/* === BANNER 2 — full-bleed e com distância reduzida === */}
      <section className="py-0">
        <BannerFullBleed
          src="/banner-2.png"
          alt="Não é apenas emagrecer, é se reencontrar."
          heightClass="h-[clamp(200px,28vw,420px)]"
          flush
        />
      </section>

      {/* PÁGINA 4 */}
      <section id="beneficios" className="scroll-mt-24">
        <BenefitsSection />
      </section>

      {/* Depoimentos, Calculadoras, Ebook, Contato (se existir) */}
      <section id="depoimentos" className="scroll-mt-24">
        <TestimonialsSection />
      </section>

      <section id="calculadoras" className="scroll-mt-24">
        <CalculatorSection />
      </section>

      <section id="ebook" className="scroll-mt-24">
        <EbookSection />
      </section>

      {/* <section id="contato" className="scroll-mt-24">
        <ContactSection />
      </section> */}

      <Footer />
    </main>
  );
}
