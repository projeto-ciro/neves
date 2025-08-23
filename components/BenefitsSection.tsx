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
          {/* Imagem — aumentada para dar mais destaque */}
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
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="font-bold tracking-tight text-[clamp(1.875rem,4vw,3rem)] text-gray-900">
                Benefícios do <span className="text-cyan-500">Programa</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {/* Card 1 */}
              <motion.div variants={itemVariants}>
                <div className="border rounded-xl p-6 shadow-lg transition-all duration-300 hover:border-white/20 hover:shadow-xl bg-white/60 backdrop-blur-sm border-gray-200/50 hover:bg-white/80">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 touch-target">
                        <span className="text-white text-xl">⚡</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[clamp(1.25rem,3vw,2rem)] text-gray-900 mb-2">
                          Mais Energia e Disposição
                        </h4>
                        <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600">
                          Sinta-se revigorado(a) e com energia para aproveitar
                          cada momento do seu dia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={itemVariants}>
                <div className="border rounded-xl p-6 shadow-lg transition-all duration-300 hover:border-white/20 hover:shadow-xl bg-white/60 backdrop-blur-sm border-gray-200/50 hover:bg-white/80">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 touch-target">
                        <span className="text-white text-xl">💪</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[clamp(1.25rem,3vw,2rem)] text-gray-900 mb-2">
                          Autoestima Elevada
                        </h4>
                        <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600">
                          Recupere a confiança em si mesmo(a) e se sinta bem com
                          seu corpo novamente
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={itemVariants}>
                <div className="border rounded-xl p-6 shadow-lg transition-all duration-300 hover:border-white/20 hover:shadow-xl bg-white/60 backdrop-blur-sm border-gray-200/50 hover:bg-white/80">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 touch-target">
                        <span className="text-white text-xl">🎯</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[clamp(1.25rem,3vw,2rem)] text-gray-900 mb-2">
                          Resultados Duradouros
                        </h4>
                        <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600">
                          Mantenha seu peso ideal sem efeito sanfona, com
                          mudanças sustentáveis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div variants={itemVariants}>
                <div className="border rounded-xl p-6 shadow-lg transition-all duration-300 hover:border-white/20 hover:shadow-xl bg-white/60 backdrop-blur-sm border-gray-200/50 hover:bg-white/80">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 touch-target">
                        <span className="text-white text-xl">❤️</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[clamp(1.25rem,3vw,2rem)] text-gray-900 mb-2">
                          Saúde em Primeiro Lugar
                        </h4>
                        <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600">
                          Melhore seus exames, durma melhor e tenha uma vida
                          mais saudável
                        </p>
                      </div>
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
