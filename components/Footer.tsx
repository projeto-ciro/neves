"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section, Container } from "@/components/ui/section";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { label: "Início", href: "/#inicio" },
    { label: "Sobre", href: "/#sobre" },
    { label: "Programa", href: "/#programa" },
    { label: "Depoimentos", href: "/#depoimentos" },
    { label: "Contato", href: "/#contato" },
  ];

  return (
    <footer ref={ref} className="bg-black text-white border-t border-white/10">
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo e Descrição */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-4 lg:col-span-1"
            >
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo.png"
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

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="w-10 h-10 bg-white/10 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 touch-target"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Rápidos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-cyan-400 transition-colors text-sm link-underline touch-target inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contato */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-white/70 text-sm">contato@cironeves.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-white/70 text-sm">(11) 99999-9999)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-white/70 text-sm">São Paulo, SP</span>
                </div>
              </div>
            </motion.div>

            {/* Programa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Programa</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Desafio Você + Magra</li>
                <li>• Reprogramação Metabólica</li>
                <li>• Acompanhamento Personalizado</li>
                <li>• Grupo de Apoio Exclusivo</li>
              </ul>
            </motion.div>
          </div>

          {/* Linha divisória */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-white/70 text-sm"
              >
                © 2024 Ciro Neves. Todos os direitos reservados.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex space-x-6 text-sm text-white/70"
              >
                <a href="#" className="hover:text-cyan-400 transition-colors link-underline">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-cyan-400 transition-colors link-underline">
                  Termos de Uso
                </a>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </footer>
  );
}
