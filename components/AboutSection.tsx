"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
              <Image
                src="/images/modelo-triste.png"
                alt="Mulher sorrindo - Transformação de vida"
                fill
                className="object-cover"
              />
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
          </motion.div>

          {/* Conteúdo */}
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
                className="text-4xl md:text-5xl font-bold text-gray-900"
              >
                Emagrecimento com <span className="text-cyan-500">saúde</span>,
                <br />
                autoestima e <span className="text-cyan-500">energia</span>
                <br />
                após os <span className="text-cyan-500">40 anos</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Após os 40 anos, nosso metabolismo muda drasticamente. O que funcionava antes, 
                não funciona mais. Por isso desenvolvi um método específico que trabalha com 
                a reprogramação metabólica, respeitando as necessidades do seu corpo nesta fase da vida.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Não é sobre dietas restritivas ou exercícios extremos. É sobre entender como 
                seu corpo funciona e dar a ele exatamente o que precisa para voltar a queimar 
                gordura de forma natural e saudável.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <Button 
                size="lg" 
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-6"
              >
                Conheça o Método
              </Button>

              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <span className="text-cyan-500">✓</span>
                  <span>Sem efeito sanfona</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-cyan-500">✓</span>
                  <span>Resultados duradouros</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-cyan-500">✓</span>
                  <span>Método científico</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

