"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

export default function MetabolicSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    // ↓ pb menor no mobile para colar na seção seguinte
    <section ref={ref} className="pt-16 pb-6 md:py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
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
                Reprogramação <span className="text-cyan-500">Metabólica</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Descubra como reativar seu metabolismo e voltar a queimar gordura
                de forma natural, mesmo após os 40 anos.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Análise Metabólica</h4>
                    <p className="text-gray-600">Identificamos exatamente onde seu metabolismo está travado</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Protocolo Personalizado</h4>
                    <p className="text-gray-600">Plano feito sob medida para o seu corpo e rotina</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Acompanhamento Contínuo</h4>
                    <p className="text-gray-600">Monitoramos seus resultados e ajustamos o protocolo conforme necessário</p>
                  </div>
                </div>
              </motion.div>
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
                Quero Reprogramar Meu Metabolismo
              </Button>
            </motion.div>
          </motion.div>

          {/* Vídeo/Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden relative group cursor-pointer">
              <div
                className="absolute inset-0 z-10 flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-cyan-500/90 backdrop-blur-sm text-white flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 md:w-10 md:h-10" />
                </div>
              </div>

              <img
                src="/images/video-thumb.png"
                alt="Vídeo sobre o método"
                className="w-full h-full object-cover"
              />

              {/* overlay hover */}
              <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
