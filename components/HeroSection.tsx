"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Section, Container } from "@/components/ui/section";
import { DisplayTitle, Lead } from "@/components/ui/typography";

export default function HeroSection() {
  return (
    <Section 
      id="inicio" 
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden pt-24"
    >
      {/* Background Pattern with gradient and noise */}
      <div className="absolute inset-0 gradient-radial"></div>
      <div className="absolute inset-0 noise-texture"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* Conteúdo Textual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <DisplayTitle className="text-white leading-tight">
                  <span className="text-cyan-400">EMAGRECIMENTO</span>
                  <br />
                  <span className="text-white">RÁPIDO E SAUDÁVEL</span>
                  <br />
                  <span className="text-cyan-400">APÓS OS 40</span>
                </DisplayTitle>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Lead className="text-gray-300 max-w-lg">
                  Transforme seu corpo e sua vida com o método comprovado de reprogramação metabólica
                </Lead>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6"
            >
              <Button 
                variant="cta"
                size="lg" 
                className="text-lg px-8 py-6 rounded-full"
                asChild
              >
                <a href="/#desafio">Participe do Desafio Você + Magra</a>
              </Button>
              
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-2 border-black"
                    />
                  ))}
                </div>
                <span>+2.000 pessoas já transformaram suas vidas</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Imagem do Ciro */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Foto do Ciro */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/ciro.png"
                  alt="Ciro Neves - Personal Trainer e Especialista em Emagrecimento"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </Section>
  );
}

