"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CalculatorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Cada card com 3 linhas exatamente para padronizar a altura visual.
  const calculatorCards = [
    {
      title: "Avaliação Física",
      lines: [
        "Avaliação física e metabólica",
        "Modulação personalizada conforme seu perfil.",
      ],
      image: "/images/avaliacao_fisica.png",
      alt: "Avaliação física e metabólica",
    },
    {
      title: "Plano de treino",
      lines: [
        "Acesso ao app Personal,",
        "vídeos com execução correta",
        "e planilha + reavaliação.",
      ],
      image: "/images/plano_treino.png",
      alt: "Plano de treino com aplicativo",
    },
    {
      title: "Plano alimentar",
      lines: [
        "Guia de alimentação,",
        "hidratação e higiene do sono,",
        "organização e lista de compras.",
      ],
      image: "/images/plano_alimentar.png",
      alt: "Plano alimentar e lista de compras",
    },
    {
      title: "Suporte Total",
      lines: [
        "Suporte diário no WhatsApp,",
        "grupo exclusivo de alunas",
        "e plantão de dúvidas e incentivo.",
      ],
      image: "/images/suporte_total.png",
      alt: "Suporte total às alunas",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            O que você vai receber <span className="text-cyan-400">na prática</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Detalhes dos benefícios inclusos:
          </motion.p>
        </div>

        {/* 2 colunas no md, 4 colunas no lg */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {calculatorCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                {/* Layout interno padronizado e centralizado */}
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  {/* Imagem */}
                  <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-6">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Título com altura mínima para alinhar entre cards */}
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 min-h-[2.5rem] flex items-center justify-center">
                    {card.title}
                  </h3>

                  {/* Bloco de três linhas, todas com o mesmo espaçamento */}
                  <div className="text-gray-300 leading-relaxed space-y-1 min-h-[5.25rem] flex flex-col justify-center">
                    {card.lines.map((line, i) => (
                      <p key={i} className="text-sm md:text-base">
                        {line}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold text-lg px-12 py-6 rounded-full"
          >
            <Link href="/calculadoras" aria-label="Ir para a página de calculadoras">
              Acessar Calculadoras
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
