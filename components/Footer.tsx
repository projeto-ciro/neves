"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section, Container } from "@/components/ui/section";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/cironevespersonal",
      label: "Instagram - @cironevespersonal",
      external: true,
    },
    {
      icon: Phone,
      href: "https://wa.me/5583999210852",
      label: "WhatsApp - (83) 9 9921-0852",
      external: true,
    },
    {
      icon: Mail,
      href: "mailto:cironevespersonal@gmail.com",
      label: "Email - cironevespersonal@gmail.com",
      external: true,
    },
  ] as const;

  return (
    <footer className="bg-black text-white">
      <Section className="pt-12 pb-8">
        <Container>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid gap-10 md:grid-cols-3"
          >
            {/* Logo + descrição */}
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo-footer.png"
                  alt="Logo Ciro Neves"
                  width={320}
                  height={96}
                  className="h-16 md:h-24 w-auto object-contain transition-transform hover:scale-105"
                  priority
                />
              </Link>

              <p className="text-white/70 text-sm leading-relaxed">
                Especialista em emagrecimento saudável para pessoas acima de 40 anos.
                Transformando vidas através da reprogramação metabólica.
              </p>

              <div className="flex items-center gap-4">
                {socialLinks.map(({ icon: Icon, href, label, external }) =>
                  external ? (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-cyan-400 transition-colors"
                    >
                      <Icon size={22} />
                    </a>
                  ) : (
                    <Link
                      key={label}
                      href={href}
                      aria-label={label}
                      className="text-white/80 hover:text-cyan-400 transition-colors"
                    >
                      <Icon size={22} />
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Contato */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contato</h4>
              <div className="space-y-3 text-white/80 text-sm">
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <a
                    href="mailto:cironevespersonal@gmail.com"
                    className="hover:text-cyan-400"
                  >
                    cironevespersonal@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  <a href="tel:+5583999210852" className="hover:text-cyan-400">
                    (83) 9 9921-0852
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1" />
                  <address className="not-italic">
                    Rua Severino Alves Aires, nº 357, Miramar
                    <br />
                    João Pessoa - PB
                  </address>
                </div>
              </div>
            </div>

            {/* Links rápidos */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Links</h4>
              <div className="grid grid-cols-2 gap-3 text-sm text-white/80">
                <Link href="/#inicio" className="hover:text-cyan-400 transition-colors">
                  Início
                </Link>
                <Link href="/#beneficios" className="hover:text-cyan-400 transition-colors">
                  Benefícios
                </Link>
                <Link href="/#metodo" className="hover:text-cyan-400 transition-colors">
                  Método
                </Link>
                <Link href="/calculadoras" className="hover:text-cyan-400 transition-colors">
                  Calculadoras
                </Link>
                <Link href="/#ebook" className="hover:text-cyan-400 transition-colors">
                  Ebook
                </Link>
                <Link href="/contatos" className="hover:text-cyan-400 transition-colors">
                  Contato
                </Link>
              </div>

              <div className="pt-4 text-xs text-white/60 space-x-4">
                <Link
                  href="/politica-de-privacidade"
                  className="hover:text-cyan-400 transition-colors link-underline"
                >
                  Política de Privacidade
                </Link>
                <Link
                  href="/termos-de-uso"
                  className="hover:text-cyan-400 transition-colors link-underline"
                >
                  Termos de Uso
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </footer>
  );
}
