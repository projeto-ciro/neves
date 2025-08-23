"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function EbookSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-cyan-500 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Capa do Ebook — MAIOR no mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block w-full">
              <div className="relative mx-auto lg:mx-0 w-full max-w-md sm:max-w-lg h-[360px] sm:h-[420px] lg:h-[520px] rounded-lg shadow-2xl overflow-hidden">
                <Image
                  src="/images/ebook.png"
                  alt="Capa do ebook"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 40vw"
                  priority
                />
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-white"
              >
                Baixe nosso <span className="text-black">ebook</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-white/90 leading-relaxed"
              >
                <strong>Eu preparei um material muito especial para você!</strong>
                <br />
                <br />
                Um guia completo com os primeiros passos para reativar seu metabolismo
                e começar a emagrecer de forma saudável após os 40 anos.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4 text-white/90"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span>5 passos para reativar seu metabolismo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span>Alimentos que aceleram a queima de gordura</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span>Exercícios específicos para +40 anos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span>Cronograma de 7 dias para começar</span>
                </div>
              </motion.div>
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
                className="bg-black hover:bg-gray-800 text-white font-bold py-6 text-lg"
              >
                <a href="https://wa.me/5583999210852" target="_blank" rel="noopener noreferrer">
                  Baixar Ebook Gratuito
                </a>
              </Button>
              <p className="text-xs text-white/70 text-center mt-4">
                Clique para baixar o ebook via WhatsApp.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
