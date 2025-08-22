"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      age: 45,
      result: "Perdeu 12kg em 21 dias",
      text: "Nunca pensei que fosse possível emagrecer de forma tão natural após os 40. O programa do Ciro mudou completamente minha relação com a comida e meu corpo.",
      rating: 5,
      imageName: "maria-silva"
    },
    {
      name: "Ana Costa",
      age: 52,
      result: "Perdeu 8kg e ganhou energia",
      text: "Estava sem energia há anos. Com o programa, não só emagreci como recuperei minha disposição. Me sinto 10 anos mais jovem!",
      rating: 5,
      imageName: "ana-costa"
    },
    {
      name: "Carla Santos",
      age: 48,
      result: "Perdeu 15kg em 2 meses",
      text: "O melhor de tudo é que não sinto que estou fazendo dieta. É um estilo de vida que realmente funciona e que consigo manter.",
      rating: 5,
      imageName: "carla-santos"
    },
    {
      name: "Lucia Oliveira",
      age: 43,
      result: "Perdeu 10kg e melhorou os exames",
      text: "Além de emagrecer, meus exames melhoraram muito. Meu médico ficou impressionado com os resultados em tão pouco tempo.",
      rating: 5,
      imageName: "lucia"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            O que dizem <span className="text-cyan-500">nossas alunas</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Mais de 2.000 pessoas já transformaram suas vidas. Veja alguns depoimentos reais
          </motion.p>
        </div>

        {/* Carrossel de Depoimentos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Foto */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden relative mb-4">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        // Para Carla (índice 2), usar 25.png; demais continuam no padrão 20/21/22/23
                        backgroundImage: `url("/images/profile-${testimonials[currentTestimonial].imageName}.png")`
                      }}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].age} anos</p>
                  <p className="text-cyan-600 font-semibold mt-2">{testimonials[currentTestimonial].result}</p>
                </div>

                {/* Depoimento */}
                <div className="md:col-span-2 space-y-4">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Controles do Carrossel */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-cyan-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
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
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-6"
          >
            Quero Ser a Próxima História de Sucesso
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
