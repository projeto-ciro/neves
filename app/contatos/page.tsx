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
                    <p className="text-gray-600">+55 (83) 9 9921‑0852</p>
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
                    <p className="text-gray-600">cironevespersonal@gmail.com</p>
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
                    <p className="text-gray-600">+55 (83) 9 9921‑0852</p>
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
                    <p className="text-gray-600">
                      Rua Severino Alves Aires, nº 357, Bairro Miramar, João
                      Pessoa ‑ PB
                    </p>
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

              {/* Redes de Contato */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Redes de Contato
                </h3>
                <div className="flex space-x-4">
                  {/* Telefone (no lugar do Facebook) */}
                  <a
                    href="tel:+5583999210852"
                    aria-label="Ligar para Ciro Neves"
                    className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-cyan-500" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/cironevespersonal"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-5 w-5 text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.73.01 3.69.053.959.044 1.613.196 2.184.418a4.412 4.412 0 011.595 1.035 4.412 4.412 0 011.035 1.595c.222.571.374 1.225.418 2.184.043.96.053 1.261.053 3.69s-.01 2.73-.053 3.69c-.044.959-.196 1.613-.418 2.184a4.412 4.412 0 01-1.035 1.595 4.412 4.412 0 01-1.595 1.035c-.571.222-1.225.374-2.184.418-.96.043-1.261.053-3.69.053s-2.73-.01-3.69-.053c-.959-.044-1.613-.196-2.184-.418a4.412 4.412 0 01-1.595-1.035 4.412 4.412 0 01-1.035-1.595c-.222-.571-.374-1.225-.418-2.184-.043-.944-.052-1.23-.052-3.62s.01-2.676.052-3.62c.04-.873.186-1.346.31-1.66.162-.418.356-.716.67-1.03.314-.314.508-.612.67-1.03.124-.314.27-.787.31-1.66.043-.944.052-1.23.052-3.62s-.01-2.676-.052-3.62c-.04-.873-.186-1.346-.31-1.66-.162-.418-.356-.716-.67-1.03-.314-.124-.787-.27-1.66-.31-.944-.043-1.23-.052-3.62-.052zm0 3.3a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4zm6.3-.9a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  {/* WhatsApp (no lugar do Twitter) */}
                  <a
                    href="https://wa.me/5583999210852"
                    aria-label="WhatsApp"
                    className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-5 w-5 text-cyan-500"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M19.11 17.33c-.31-.16-1.83-.9-2.12-1-.28-.1-.48-.16-.68.16-.2.31-.78 1-.96 1.2-.18.2-.35.23-.66.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.84-1.72-2.15-.18-.31 0-.48.14-.63.14-.14.31-.35.47-.53.16-.18.2-.31.31-.51.1-.2.05-.38-.03-.53-.08-.16-.68-1.64-.93-2.24-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.53.08-.81.38-.28.31-1.07 1.04-1.07 2.53s1.1 2.94 1.25 3.15c.16.2 2.16 3.29 5.23 4.6.73.32 1.3.51 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.12-.28-.2-.59-.36z" />
                      <path d="M26.65 5.34C23.8 2.49 20.02 1 16 1 7.72 1 1 7.72 1 16c0 2.65.69 5.25 2 7.55L1 31l7.62-1.99C10.85 30.28 13.39 31 16 31c8.28 0 15-6.72 15-15 0-4.02-1.49-7.8-4.35-10.66zM16 28.89c-2.43 0-4.8-.66-6.86-1.92l-.49-.29-4.52 1.18 1.21-4.41-.3-.5C3.71 20.87 3.11 18.47 3.11 16 3.11 9 9 3.11 16 3.11c3.44 0 6.66 1.34 9.09 3.77C27.52 9.31 28.89 12.56 28.89 16c0 7-5.89 12.89-12.89 12.89z" />
                    </svg>
                  </a>

                  {/* E-mail (no lugar do YouTube) */}
                  <a
                    href="mailto:cironevespersonal@gmail.com"
                    aria-label="E-mail"
                    className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-cyan-500" />
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
