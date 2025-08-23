"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CalculatorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const calculatorCards = [
    {
      title: "Análise Metabólica",
      description:
        "Descubra seu tipo metabólico e como otimizar sua queima de gordura",
      icon: "🔬",
      image: "/images/analise-metabolica.png",
    },
    {
      title: "Plano Personalizado",
      description:
        "Receba um protocolo específico baseado no seu perfil metabólico",
      icon: "📋",
      image: "/images/plano-personalizado.png",
    },
    {
      title: "Acompanhamento",
      description:
        "Monitore seus progressos e ajuste seu plano conforme necessário",
      icon: "📊",
      image: "/images/acompanhamento.png",
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
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Calculadora que vai te{" "}
            <span className="text-cyan-400">ajudar a conhecer</span>
            <br />
            <span className="text-cyan-400">seu metabolismo</span>
          </motion.h2>

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Entenda como seu corpo funciona e descubra o protocolo ideal para reativar
            sua queima de gordura de forma natural e saudável
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {calculatorCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  {/* Imagem do card */}
                  <div className="aspect-[3/2] rounded-xl mb-6 overflow-hidden relative">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${card.image}')` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{card.description}</p>
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
          {/* Leva para a página /calculadoras */}
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
