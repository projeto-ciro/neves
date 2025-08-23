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
// import ContactSection from "@/components/ContactSection";    // se existir

import BannerFullBleed from "@/components/BannerFullBleed";

// >>> IMPORTS NOVOS (apenas acrescentar, sem renomear nada seu)
import MetodoBloco02 from "@/components/sections/MetodoBloco02";
import VideoBloco03 from "@/components/sections/VideoBloco03";
import CTAFraseBloco04 from "@/components/sections/CTAFraseBloco04";
import Metodo3PilaresBloco05 from "@/components/sections/Metodo3PilaresBloco05";
import ProgramaBloco06 from "@/components/sections/ProgramaBloco06";
import OQueRecebeBloco07 from "@/components/sections/OQueRecebeBloco07";
// DepoimentosBloco08 NÃO inserido pois você já usa <TestimonialsSection />
// SobreCiroBloco09 NÃO inserido pois você já usa <AboutSection />
import BannerFraseBloco10 from "@/components/sections/BannerFraseBloco10";
import PresenteBloco11 from "@/components/sections/PresenteBloco11";

export default function Home() {
  return (
    /**
     * Compensação do header fixo:
     * h-20 ~ 80px (mobile) e h-24 ~ 96px (>= md).
     */
    <main className="min-h-screen bg-background text-foreground pt-20 md:pt-24 overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section id="inicio" className="scroll-mt-24">
        <HeroSection />
      </section>

      {/* === B02, B03, B04 — adicionados logo após o Hero === */}
      <MetodoBloco02 />
      <VideoBloco03 />
      <CTAFraseBloco04 />

      {/* PÁGINA 2 — Sobre (equivale ao B09) */}
      <section id="sobre" className="scroll-mt-24">
        <AboutSection />
      </section>

      {/* BANNER 1 — full-bleed */}
      <section className="py-0">
        <BannerFullBleed
          src="/banner-1.png"
          alt="É mais do que emagrecer: é sobre ter +saúde e disposição."
          heightClass="h-[clamp(200px,28vw,420px)]"
          flush
        />
      </section>

      {/* PÁGINA 3 — Programa/Metabólico (ancorado como #programa) */}
      <section id="programa" className="scroll-mt-24">
        <MetabolicSection />
      </section>

      {/* === B05, B06, B07 — método 3 pilares, headline do programa e o que recebe === */}
      <Metodo3PilaresBloco05 />
      <ProgramaBloco06 />
      <OQueRecebeBloco07 />

      {/* BANNER 2 — full-bleed */}
      <section className="py-0">
        <BannerFullBleed
          src="/banner-2.png"
          alt="Não é apenas emagrecer, é se reencontrar."
          heightClass="h-[clamp(200px,28vw,420px)]"
          flush
        />
      </section>

      {/* PÁGINA 4 — Benefícios */}
      <section id="beneficios" className="scroll-mt-24">
        <BenefitsSection />
      </section>

      {/* Depoimentos, Calculadoras, Ebook */}
      <section id="depoimentos" className="scroll-mt-24">
        <TestimonialsSection />
      </section>

      <section id="calculadoras" className="scroll-mt-24">
        <CalculatorSection />
      </section>

      <section id="ebook" className="scroll-mt-24">
        <EbookSection />
      </section>

      {/* === B10 — banner/frase oficial do PDF === */}
      <BannerFraseBloco10 />

      {/* === B11 — presente/lead magnet (mantém seu EbookSection acima) === */}
      <PresenteBloco11 />

      {/* <section id="contato" className="scroll-mt-24">
        <ContactSection />
      </section> */}

      <Footer />
    </main>
  );
}
