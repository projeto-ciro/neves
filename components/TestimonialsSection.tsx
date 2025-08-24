"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5583999210852?text=Ol%C3%A1%20Ciro!%20Quero%20saber%20mais%20sobre%20o%20programa.";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      age: 45,
      result: "Perdeu 12kg em 21 dias",
      text:
        "Nunca pensei que fosse possível emagrecer de forma tão natural após os 40. O programa do Ciro mudou completamente minha relação com a comida e meu corpo.",
      rating: 5,
      imageName: "maria-silva",
    },
    {
      name: "Ana Costa",
      age: 52,
      result: "Perdeu 8kg e ganhou energia",
      text:
        "Estava sem energia há anos. Com o programa, não só emagreci como recuperei minha disposição. Me sinto 10 anos mais jovem!",
      rating: 5,
      imageName: "ana-costa",
    },
    {
      name: "Carla Santos",
      age: 48,
      result: "Perdeu 15kg em 2 meses",
      text:
        "O melhor de tudo é que não sinto que estou fazendo dieta. É um estilo de vida que realmente funciona e que consigo manter.",
      rating: 5,
      imageName: "carla-santos",
    },
    {
      name: "Lucia Oliveira",
      age: 43,
      result: "Perdeu 10kg e melhorou os exames",
      text:
        "Além de emagrecer, meus exames melhoraram muito. Meu médico ficou impressionado com os resultados em tão pouco tempo.",
      rating: 5,
      imageName: "lucia",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="depoimentos"
      ref={ref}
      className="pt-8 md:pt-12 pb-16 bg-gradient-to-br from-gray-50 to-cyan-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
          >
            O que dizem <span className="text-cyan-500">nossas alunas</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Mais de 2.000 pessoas já transformaram suas vidas.
            <span className="block">Veja alguns depoimentos</span>
          </motion.p>
        </div>

        {/* Carrossel de Depoimentos (mais compacto no desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-lg md:max-w-xl lg:max-w-2xl mx-auto"
        >
          <Card className="bg-white shadow-md rounded-xl">
            <CardContent className="p-4 md:p-5">
              <div className="grid md:grid-cols-3 gap-4 md:gap-5 items-center">
                {/* Foto */}
                <div className="text-center">
                  <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 mx-auto rounded-full overflow-hidden relative mb-2.5 ring-4 ring-cyan-500/15">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/profile-${testimonials[currentTestimonial].imageName}.png")`,
                      }}
                    />
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {testimonials[currentTestimonial].age} anos
                  </p>
                  <p className="text-cyan-600 font-semibold mt-1 text-xs md:text-sm">
                    {testimonials[currentTestimonial].result}
                  </p>
                </div>

                {/* Depoimento */}
                <div className="md:col-span-2 space-y-2.5">
                  <div className="flex space-x-1 mb-1.5">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>

                  <blockquote className="text-sm md:text-[15px] text-gray-700 leading-relaxed italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Controles */}
          <div className="flex justify-center items-center mt-5 space-x-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-8 h-8"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-cyan-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-8 h-8"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8"
        >
          <Button
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-4 rounded-full"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Quero Ser a Próxima História de Sucesso
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
