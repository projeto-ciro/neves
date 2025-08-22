"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProgramSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: "📚",
      title: "Material Didático Completo",
      description: "Guias, e-books e vídeo-aulas para você estudar no seu ritmo"
    },
    {
      icon: "👥",
      title: "Grupo de Apoio Exclusivo",
      description: "Comunidade ativa com pessoas que têm os mesmos objetivos que você"
    },
    {
      icon: "🎯",
      title: "Acompanhamento Personalizado",
      description: "Suporte direto comigo e minha equipe durante toda sua jornada"
    },
    {
      icon: "📱",
      title: "App Exclusivo",
      description: "Plataforma digital para acompanhar seu progresso e receber orientações"
    }
  ];

  return (
    <section id="programa" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900"
              >
                Nosso <span className="text-cyan-500">Programa</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Um programa de 21 dias desenvolvido especificamente para pessoas acima de 40 anos 
                que querem emagrecer de forma saudável e duradoura, sem dietas restritivas ou 
                exercícios extremos.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Baseado em ciência e com resultados comprovados por mais de 2.000 pessoas que 
                já transformaram suas vidas através da reprogramação metabólica.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button 
                size="lg" 
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-6"
              >
                Quero Participar do Programa
              </Button>
            </motion.div>
          </motion.div>

          {/* Card Ilustrativo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
              <CardContent className="p-8">
                <div className="aspect-[4/5] rounded-xl overflow-hidden relative mb-6">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                    backgroundImage: "url(\"/images/modelo-page4.png\")"
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent"></div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Desafio Você + Magra
                </h3>
                <p className="text-gray-600 text-center">
                  21 dias para transformar seu metabolismo e sua vida
                </p>
              </CardContent>
            </Card>

            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
          </motion.div>
        </div>

        {/* O que você vai receber */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            O que você vai receber na prática
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

