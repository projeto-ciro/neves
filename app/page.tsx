// app/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Seções existentes do seu site
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";           // Página 2
import MetabolicSection from "@/components/MetabolicSection";   // Página 3
import BenefitsSection from "@/components/BenefitsSection";     // Página 4
import TestimonialsSection from "@/components/TestimonialsSection";
import CalculatorSection from "@/components/CalculatorSection";
import EbookSection from "@/components/EbookSection";
// import ContactSection from "@/components/ContactSection";    // se/quando usar

// 🔹 Mantemos somente o B10 como banner final
import BannerFraseBloco10 from "@/components/sections/BannerFraseBloco10";

export default function Home() {
  return (
    /**
     * Compensação do header fixo
     * h-20 ~ 80px (mobile) e h-24 ~ 96px (>= md)
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

      {/* PÁGINA 3 */}
      <section id="programa" className="scroll-mt-24">
        <MetabolicSection />
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

      {/* 🔹 ÚNICO BANNER: B10 (usa /banner-1.png) */}
      <BannerFraseBloco10 />

      {/* <section id="contato" className="scroll-mt-24">
        <ContactSection />
      </section> */}

      <Footer />
    </main>
  );
}
