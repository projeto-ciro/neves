"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WHATSAPP_URL =
  "https://wa.me/5583999210852?text=Ol%C3%A1%20Ciro!%20Quero%20conhecer%20o%20m%C3%A9todo.";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" ref={ref} className="pt-20 pb-10 bg-white">
      {/* escala normal no mobile, reduzida no desktop */}
      <div className="container mx-auto px-4 scale-100 md:scale-90">
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
                alt="Transformação com reprogramação metabólica"
                fill
                className="object-cover"
                priority
              />
            </div>
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
                Após os 40 anos, nosso metabolismo muda drasticamente. O que
                funcionava antes, não funciona mais. Por isso desenvolvi um
                método específico que trabalha com a reprogramação metabólica,
                respeitando as necessidades do seu corpo nesta fase da vida.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 md:space-y-8"
            >
              {/* botão voltou ao alinhamento padrão */}
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-6"
                asChild
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Falar com Ciro no WhatsApp"
                >
                  Confira agora
                </a>
              </Button>

              <div className="mt-6 md:mt-8 flex items-center space-x-4 text-sm text-gray-500">
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
