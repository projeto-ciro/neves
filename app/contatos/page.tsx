"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Mail, Phone, MessageSquare, MapPin, Clock, Send } from "lucide-react";

export default function ContatosPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Por favor, preencha todos os campos obrigatórios.",
      });
      return;
    }

    setFormStatus({
      submitted: true,
      success: true,
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-background text-foreground pt-20 md:pt-24 overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900/20 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Entre em <span className="text-cyan-500">Contato</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Estou aqui para ajudar você a iniciar sua jornada de transformação.
            Preencha o formulário abaixo ou utilize um dos canais de contato
            direto.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulário de Contato */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Envie uma Mensagem
              </h2>

              {formStatus.submitted && (
                <div
                  className={`p-4 mb-6 rounded-lg ${
                    formStatus.success
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">Selecione</option>
                    <option value="diagnostico">Agendar Diagnóstico</option>
                    <option value="duvidas">Dúvidas sobre o Programa</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                    required
                  />
                </div>

                <div className="flex items-center gap-3">
                  <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>

                  {formStatus.submitted && formStatus.success && (
                    <span className="text-sm text-green-600">
                      Enviado! Em breve entrarei em contato.
                    </span>
                  )}
                </div>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl mb-8">
                <Image
                  src="/images/contact-consultation.png"
                  alt="Consultório Ciro Neves"
                  width={500}
                  height={300}
                  className="object-cover rounded-2xl"
                />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Informações de Contato
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Telefone
                    </h3>
                    <p className="text-gray-600">(21) 99999-9999</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Disponível para chamadas e WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Email
                    </h3>
                    <p className="text-gray-600">contato@seudominio.com</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Resposta em até 24h úteis
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      WhatsApp
                    </h3>
                    <p className="text-gray-600">(21) 99999-9999</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Atendimento rápido no horário comercial
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Localização
                    </h3>
                    <p className="text-gray-600">João Pessoa — PB</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Atendimento presencial e online
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Horário de Atendimento
                    </h3>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-600">Sábado: 9h às 13h</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Consultas com hora marcada
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Redes Sociais
                </h3>
                <div className="flex space-x-4">
                  {/* ícones */}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Simplificado */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">
              Dúvidas Frequentes
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Como funciona a primeira consulta?
                </h3>
                <p className="text-gray-600">
                  Na primeira consulta, realizamos uma avaliação completa do seu
                  histórico de saúde, hábitos alimentares e objetivos. Também
                  fazemos medições e análises para entender seu metabolismo
                  atual. A partir disso, desenvolvemos um plano personalizado.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Quanto tempo leva para ver resultados?
                </h3>
                <p className="text-gray-600">
                  Os resultados variam de pessoa para pessoa, mas a maioria dos
                  clientes começa a notar mudanças nas primeiras 2-3 semanas.
                  Resultados mais significativos geralmente são visíveis após
                  6-8 semanas seguindo o programa corretamente.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  O programa inclui exercícios físicos?
                </h3>
                <p className="text-gray-600">
                  Sim, o programa inclui recomendações de atividades físicas
                  adaptadas à sua condição atual e objetivos. Trabalhamos com
                  uma abordagem gradual e sustentável, focando em exercícios que
                  você possa incorporar à sua rotina.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Preciso usar suplementos?
                </h3>
                <p className="text-gray-600">
                  Não necessariamente. Nosso foco principal é na alimentação
                  real e hábitos saudáveis. Em alguns casos, podemos recomendar
                  suplementos específicos, mas sempre como complemento a uma
                  alimentação balanceada, nunca como substitutos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
