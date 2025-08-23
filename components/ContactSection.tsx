"use client";

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="w-full bg-gradient-to-b from-blue-50 to-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Entre em Contato
        </h2>

        {/* Subtítulo */}
        <p className="text-lg text-gray-600 mb-8">
          Quer participar do desafio ou tirar dúvidas? Nossa equipe está pronta
          para ajudar você!
        </p>

        {/* Botão WhatsApp */}
        <a
          href="https://wa.me/5583999210852"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-md transition-colors duration-200"
        >
          Falar no WhatsApp
        </a>

        {/* Email como opção secundária */}
        <p className="mt-6 text-gray-500">
          Ou envie um email para{" "}
          <a
            href="mailto:cironevespersonal@gmail.com"
            className="text-blue-600 hover:underline"
          >
            cironevespersonal@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
