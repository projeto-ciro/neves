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
      <section className="pt-28 md:pt-32 pb-6 bg-gradient-to-b from-cyan-900/20 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            Entre em <span className="text-cyan-500">Contato</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-4">
            Estou aqui para ajudar você a iniciar sua jornada de transformação.
            Preencha o formulário abaixo ou utilize um dos canais de contato
            direto.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-white">
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
                  {/* Facebook */}
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-5 w-5 text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54V12h2.54V9.797c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-5 w-5 text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.73.01 3.69.053.959.044 1.613.196 2.184.418a4.412 4.412 0 011.595 1.035 4.412 4.412 0 011.035 1.595c.222.571.374 1.225.418 2.184.043.96.053 1.261.053 3.69s-.01 2.73-.053 3.69c-.044.959-.196 1.613-.418 2.184a4.412 4.412 0 01-1.035 1.595 4.412 4.412 0 01-1.595 1.035c-.571.222-1.225.374-2.184.418-.96.043-1.261.053-3.69.053s-2.73-.01-3.69-.053c-.959-.044-1.613-.196-2.184-.418a4.412 4.412 0 01-1.595-1.035 4.412 4.412 0 01-1.035-1.595c-.222-.571-.374-1.225-.418-2.184-.043-.944-.052-1.23-.052-3.62s.01-2.676.052-3.62c.04-.873.186-1.346.31-1.66.162-.418.356-.716.67-1.03.314-.314.508-.612.67-1.03.124-.314.27-.787.31-1.66.043-.944.052-1.23.052-3.62s-.01-2.676-.052-3.62c-.04-.873-.186-1.346-.31-1.66-.162-.418-.356-.716-.67-1.03-.314-.124-.787-.27-1.66-.31-.944-.043-1.23-.052-3.62-.052zm0 3.3a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4zm6.3-.9a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  {/* X / Twitter */}
                  <a
                    href="#"
                    aria-label="X (Twitter)"
                    className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-5 w-5 text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743A11.65 11.65 0 013.179 4.9a4.106 4.106 0 001.27 5.477 4.073 4.073 0 01-1.86-.513v.052a4.106 4.106 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-5 w-5 text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c-.44-1.652-1.74-2.952-3.392-3.391C14.584 1.5 12 1.5 12 1.5s-2.584 0-4.419.527C5.93 2.466 4.63 3.766 4.19 5.418 3.663 7.254 3.663 10 3.663 10s0 2.746.527 4.582c.44 1.651 1.74 2.952 3.392 3.39C9.416 18.5 12 18.5 12 18.5s2.584 0 4.419-.528c1.651-.438 2.952-1.739 3.39-3.39.528-1.835.528-4.581.528-4.581s0-2.746-.528-4.582ZM10 15V9l5.194 3L10 15z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
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
