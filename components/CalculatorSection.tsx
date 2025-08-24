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
    <section ref={ref} className="py-10 md:py-14 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-3">
        <div className="text-center mb-8 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold text-white mb-2"
          >
            O que você vai receber <span className="text-cyan-400">na prática</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-gray-300 max-w-md mx-auto"
          >
            Detalhes dos benefícios inclusos:
          </motion.p>
        </div>

        {/* Cards mais compactos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-8">
          {calculatorCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 rounded-lg h-full max-w-[260px] mx-auto">
                <CardContent className="p-2 md:p-3 flex flex-col items-center text-center h-full">
                  {/* Imagem menor */}
                  <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden mb-2">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 20vw"
                      priority={index === 0}
                    />
                  </div>

                  {/* Título menor */}
                  <h3 className="text-xs md:text-sm font-semibold text-white mb-1">
                    {card.title}
                  </h3>

                  {/* Texto menor */}
                  <div className="text-gray-300 leading-snug space-y-0.5">
                    {card.lines.map((line, i) => (
                      <p key={i} className="text-[11px] md:text-xs">
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
            size="sm"
            className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold text-xs md:text-sm px-5 md:px-7 py-2.5 md:py-3 rounded-full"
          >
            <Link href="https://wa.me/5583999210852" target="_blank" rel="noopener noreferrer">
              Eu Quero
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
