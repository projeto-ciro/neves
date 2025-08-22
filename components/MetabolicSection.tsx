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
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
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
                <span className="text-cyan-500">Reprogramação</span>
                <br />
                Metabólica
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
                    <p className="text-gray-600">Criamos um plano específico para reativar sua queima de gordura</p>
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
                className="absolute inset-0 bg-cover bg-center"
                style={{
                backgroundImage: "url(\"/images/programacao-metabolica.png\")"
                }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center group-hover:bg-cyan-400 transition-colors">
                  <Play size={32} className="ml-1 text-white" />
                </div>
              </div>

              {/* Overlay hover */}
              <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

