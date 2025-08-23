import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20 md:pt-24 overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900/20 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-500">
                Ciro Neves
              </h1>
              <p className="text-xl md:text-2xl font-medium text-foreground/80">
                Especialista em Emagrecimento e Reprogramação Metabólica
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Há mais de 15 anos ajudando pessoas acima dos 40 anos a
                recuperarem sua saúde, autoestima e qualidade de vida através
                de métodos científicos e personalizados.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600">
                  <a href="https://wa.me/5583999210852" target="_blank" rel="noopener noreferrer">Conheça meu Método</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10"
                >
                  <a href="https://wa.me/5583999210852" target="_blank" rel="noopener noreferrer">Entre em Contato</a>
                </Button>
              </div>
            </div>
            <div className="relative w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/ciro-professional.png"
                alt="Ciro Neves - Especialista em Emagrecimento"
                width={400}
                height={500}
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biografia Section */}
      <section className="py-16 md:py-24 bg-white text-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Minha <span className="text-cyan-500">História</span>
            </h2>

            <div className="space-y-6 text-lg">
              <p>
                Minha jornada na área de nutrição e emagrecimento começou há mais de 15 anos,
                quando percebi que muitas pessoas acima dos 40 anos enfrentavam dificuldades
                para emagrecer usando métodos convencionais. Foi então que decidi me especializar
                em metabolismo e nutrição para esta faixa etária específica.
              </p>

              <p>
                Formado em Nutrição pela Universidade Federal do Rio de Janeiro, com especialização
                em Fisiologia do Exercício e Metabolismo, dediquei minha carreira a entender as
                particularidades hormonais, metabólicas e comportamentais das pessoas nessa fase da vida.
              </p>

              <p>
                Hoje, aplico protocolos que respeitam o corpo e a rotina do paciente, com foco em
                consistência, previsibilidade de resultados e qualidade de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Minha <span className="text-cyan-500">Metodologia</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-cyan-500">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Análise Metabólica</h3>
              <p className="text-gray-600">
                Avaliação completa do seu metabolismo, histórico de saúde e hábitos alimentares
                para identificar os bloqueios metabólicos que impedem o emagrecimento.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-cyan-500">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Plano Personalizado</h3>
              <p className="text-gray-600">
                Desenvolvimento de um plano alimentar e de atividades físicas totalmente
                personalizado, respeitando suas preferências e necessidades específicas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-cyan-500">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Acompanhamento Contínuo</h3>
              <p className="text-gray-600">
                Ajustes semanais e monitoramento de métricas para garantir consistência,
                segurança e previsibilidade dos resultados.
              </p>
            </div>
          </div>

          {/* === IMAGEM AJUSTADA (ficava enorme) === */}
          <div className="mt-16 max-w-[800px] mx-auto rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/transformation-results.png"
              alt="Resultados e acompanhamento"
              width={800}
              height={400}
              className="h-auto rounded-2xl mx-auto"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600">
              <a href="https://wa.me/5583999210852" target="_blank" rel="noopener noreferrer">Participe do Desafio</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Workspace Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Meu <span className="text-cyan-500">Espaço</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Criei um ambiente acolhedor e profissional para receber meus clientes.
                Um espaço onde você se sentirá confortável para compartilhar suas
                dificuldades e objetivos, e onde trabalharemos juntos para alcançar
                a transformação que você deseja.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 1 110-16 8 8 0 010 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Atendimento humanizado e individualizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 1 110-16 8 8 0 010 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Equipamentos modernos para avaliação</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 1 110-16 8 8 0 010 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Localização central e de fácil acesso</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/office-workspace.png"
                alt="Consultório Ciro Neves"
                width={600}
                height={350}
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pronto para começar?
          </h2>
        <p className="text-lg text-gray-600 mt-4">
            Vamos construir um plano direto ao ponto para você voltar a se sentir bem no próprio corpo.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600">
              <a href="https://wa.me/5583999210852" target="_blank" rel="noopener noreferrer">Eu Quero</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10"
            >
              <Link href="/#programa">Conhecer Programa</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
