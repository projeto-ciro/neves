"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import React from "react";

const containerVariants = {
  off: { opacity: 0, y: 20 },
  on: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const itemVariants = {
  off: { opacity: 0, y: 20 },
  on: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BenefitsSection() {
  const reduce = useReducedMotion();

  const initialState = reduce ? undefined : "off";
  const whileInViewState = reduce ? undefined : "on";
  const viewport = reduce
    ? undefined
    : { once: true, amount: 0.2, margin: "0px 0px -10% 0px" };

  return (
    <section
      id="beneficios"
      className="pt-6 md:pt-12 pb-10 md:pb-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial={initialState}
          whileInView={whileInViewState}
          viewport={viewport}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Imagem */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full h-[480px] md:h-[560px] rounded-2xl overflow-hidden">
              <Image
                src="/images/modelo-page1.png"
                alt="Modelo demonstrando os benefícios do programa"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                priority={false}
              />
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div variants={itemVariants} className="space-y-6 md:space-y-6 lg:space-y-5">
            <motion.div variants={itemVariants}>
              <h2 className="font-bold tracking-tight text-[clamp(1.75rem,3vw,2.25rem)] text-gray-900">
                Benefícios do <span className="text-cyan-500">Programa</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 md:space-y-5">
              {/* Card 1 */}
              <motion.div variants={itemVariants}>
                <div className="border rounded-lg p-5 md:p-3 shadow-md hover:shadow-lg bg-white/60 backdrop-blur-sm border-gray-200/50 hover:bg-white/80">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 md:w-8 md:h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg md:text-base">⚡</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[clamp(1.1rem,2vw,1.35rem)] text-gray-900 mb-1">
                        Mais Energia e Disposição
                      </h4>
                      <p className="text-[clamp(0.8rem,1.5vw,0.95rem)] text-gray-600 leading-snug">
                        Sinta-se revigorado(a) e com energia para aproveitar cada momento do seu dia
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={itemVariants}>
                <div className="border rounded-lg p-5 md:p-3 shadow-md hover:shadow-lg bg-white/60 backdrop-blur-sm border-gray-200/50 hover:bg-white/80">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 md:w-8 md:h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg md:text-base">💪</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[clamp(1.1rem,2vw,1.35rem)] text-gray-900 mb-1">
                        Autoestima Elevada
                      </h4>
                      <p className="text-[clamp(0.8rem,1.5vw,0.95rem)] text-gray-600 leading-snug">
                        Recupere a confiança em si mesmo(a) e se sinta bem com seu corpo novamente
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={itemVariants}>
                <div className="border rounded-lg p-5 md:p-3 shadow-md hover:shadow-lg bg-white/60 backdrop-blur-sm border-gray-200/50 hover:bg-white/80">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 md:w-8 md:h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg md:text-base">🎯</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[clamp(1.1rem,2vw,1.35rem)] text-gray-900 mb-1">
                        Resultados Duradouros
                      </h4>
                      <p className="text-[clamp(0.8rem,1.5vw,0.95rem)] text-gray-600 leading-snug">
                        Mantenha seu peso ideal sem efeito sanfona, com mudanças sustentáveis
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div variants={itemVariants}>
                <div className="border rounded-lg p-5 md:p-3 shadow-md hover:shadow-lg bg-white/60 backdrop-blur-sm border-gray-200/50 hover:bg-white/80">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 md:w-8 md:h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg md:text-base">❤️</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[clamp(1.1rem,2vw,1.35rem)] text-gray-900 mb-1">
                        Saúde em Primeiro Lugar
                      </h4>
                      <p className="text-[clamp(0.8rem,1.5vw,0.95rem)] text-gray-600 leading-snug">
                        Melhore seus exames, durma melhor e tenha uma vida mais saudável
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
