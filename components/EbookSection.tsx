"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Download, CheckCircle } from "lucide-react";

export default function EbookSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "" });
      } else {
        alert('Erro ao enviar formulário. Tente novamente.');
      }
    } catch (error) {
      alert('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-cyan-500 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Capa do Ebook */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block">
              <div className="aspect-[3/4.5] w-80 mx-auto lg:mx-0 rounded-lg shadow-2xl overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url(\"/images/ebook.png\")"                 }}
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

            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Seu nome completo"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-white/90 border-white/30 text-gray-900 placeholder:text-gray-600"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Seu melhor e-mail"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-white/90 border-white/30 text-gray-900 placeholder:text-gray-600"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-black hover:bg-gray-800 text-white font-bold py-6 text-lg"
                      >
                        {isSubmitting ? "Enviando..." : "Baixar Ebook Gratuito"}
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Obrigado!</h3>
                      <p className="text-white/90">
                        Enviamos o ebook para seu e-mail. Verifique também a caixa de spam.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <p className="text-xs text-white/70 text-center mt-4">
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

