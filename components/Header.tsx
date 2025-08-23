"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5583999210852";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Ciro Neves Logo"
            width={320}
            height={96}
            className="h-16 md:h-20 w-auto transition-transform hover:scale-105"
            priority
          />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white/80 hover:text-white transition-colors">
            Início
          </Link>
          <Link href="/sobre" className="text-white/80 hover:text-white transition-colors">
            Sobre
          </Link>
          <Link href="/#programa" className="text-white/80 hover:text-white transition-colors">
            Programa
          </Link>
          <Link href="/#depoimentos" className="text-white/80 hover:text-white transition-colors">
            Depoimentos
          </Link>
          <Link href="/calculadoras" className="text-white/80 hover:text-white transition-colors">
            Calculadoras
          </Link>
          <Link href="/contatos" className="text-white/80 hover:text-white transition-colors">
            Contato
          </Link>
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
          >
            Participe do Desafio
          </a>
        </div>

        {/* Botão Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/sobre"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/#programa"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Programa
              </Link>
              <Link
                href="/#depoimentos"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Depoimentos
              </Link>
              <Link
                href="/calculadoras"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Calculadoras
              </Link>
              <Link
                href="/contatos"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors mt-4 text-center"
                onClick={() => setIsOpen(false)}
              >
                Participe do Desafio
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
