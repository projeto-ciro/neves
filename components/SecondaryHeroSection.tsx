"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function SecondaryHeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
         backgroundImage: "url(\"/images/modelo-video.png\")"        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/50 to-blue-900/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8"
          >
            Não deixe mais um dia passar
            <br />
            <span className="text-cyan-400">sem cuidar de você</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed"
          >
            Sua saúde e bem-estar não podem esperar. Comece hoje mesmo sua transformação 
            e descubra como é possível emagrecer de forma saudável após os 40 anos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <Button 
              size="lg" 
              className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold text-xl px-12 py-8 rounded-full"
            >
              Começar Minha Transformação Agora
            </Button>

            <div className="flex justify-center items-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <span className="text-cyan-400">✓</span>
                <span>Sem mensalidades</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-cyan-400">✓</span>
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-cyan-400">✓</span>
                <span>Suporte completo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl"></div>
    </section>
  );
}

