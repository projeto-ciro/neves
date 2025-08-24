"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WHATSAPP_URL = "https://wa.me/5583999210852";
const VIDEO_URL = process.env.NEXT_PUBLIC_VIDEO_URL as string;

export default function MetabolicSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="metodo"
      ref={ref}
      className="scroll-mt-28 pt-16 pb-6 md:py-20 bg-gradient-to-br from-gray-50 to-cyan-50"
    >
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

              {/* Etapas */}
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
                    <p className="text-gray-600">
                      Identificamos exatamente onde seu metabolismo está travado
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Protocolo Personalizado</h4>
                    <p className="text-gray-600">
                      Plano feito sob medida para o seu corpo e rotina
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Acompanhamento Contínuo</h4>
                    <p className="text-gray-600">
                      Monitoramos seus resultados e ajustamos o protocolo conforme necessário
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Botão WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-6"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Conheça o Método
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Vídeo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video
                src={VIDEO_URL}
                controls
                playsInline
                preload="metadata"
                poster="/images/video-thumb.png"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
