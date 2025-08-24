"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, Utensils, ClipboardCheck, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CalculatorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const calculatorCards = [
    {
      title: "Avaliação Completa",
      desc: "Exames, medidas e análise metabólica para personalizar o seu plano.",
      icon: ClipboardCheck,
    },
    {
      title: "Treino Inteligente",
      desc: "Protocolos práticos com vídeos explicativos e ajustes constantes.",
      icon: Dumbbell,
    },
    {
      title: "Plano Alimentar",
      desc: "Estratégia de alimentação simples, lista de compras e rotina ajustada.",
      icon: Utensils,
    },
    {
      title: "Suporte Exclusivo",
      desc: "Acompanhamento no WhatsApp, grupo motivacional e plantão de dúvidas.",
      icon: Users,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-14 md:py-20 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="container mx-auto px-4 scale-100 md:scale-90 lg:scale-85">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-bold text-white mb-3"
          >
            O que você vai receber{" "}
            <span className="text-cyan-400">na prática</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-gray-300 max-w-xl mx-auto"
          >
            Resultados reais com acompanhamento completo e estratégico:
          </motion.p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-stretch">
          {calculatorCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                className="flex"
              >
                <div className="rounded-2xl p-[2px] bg-gradient-to-br from-cyan-500/40 via-cyan-400/20 to-transparent flex-1">
                  <Card className="h-full bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-cyan-500/20">
                    <CardContent className="p-6 flex flex-col text-center items-center flex-1">
                      {/* Ícone */}
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 mb-4">
                        <Icon className="w-7 h-7" />
                      </div>

                      {/* Título */}
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {card.title}
                      </h3>

                      {/* Descrição */}
                      <p className="text-sm text-gray-300 leading-relaxed flex-1">
                        {card.desc}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold px-8 py-4 rounded-full text-base md:text-lg"
          >
            <Link
              href="https://wa.me/5583999210852"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero meu Plano Agora
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
