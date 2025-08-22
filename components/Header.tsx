"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { label: "Início", href: "/#inicio" },
    { label: "Sobre", href: "/#sobre" },
    { label: "Programa", href: "/#programa" },
    { label: "Depoimentos", href: "/#depoimentos" },
    { label: "Calculadoras", href: "/calculadoras" },
    { label: "Contato", href: "/#contato" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo clicável */}
          <Link href="/" className="touch-target" aria-label="Ir para página inicial">
            <Image
              src="/images/logo.png"
              alt="Ciro Neves Logo"
              width={400}
              height={120}
              className="h-16 md:h-20 w-auto transition-transform hover:scale-105"
              priority
            />
          </Link>

          {/* Menu Hambúrguer */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-white hover:text-cyan-400 hover:bg-white/10 lg:hidden touch-target"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href + index}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="text-white/80 hover:text-cyan-400 transition-colors link-underline touch-target flex items-center"
              >
                {item.label}
              </motion.a>
            ))}
            <Button 
              variant="cta" 
              size="lg"
              asChild
            >
              <a href="/#desafio">Participe do Desafio</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Menu Lateral (Mobile) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop com blur */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-md border-l border-white/10 z-50 p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-8">
                <Link href="/" onClick={closeMenu} className="touch-target">
                  <Image
                    src="/images/logo.png"
                    alt="Ciro Neves Logo"
                    width={200}
                    height={60}
                    className="h-10 w-auto"
                    priority
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeMenu}
                  className="text-white hover:text-cyan-400 touch-target"
                  aria-label="Fechar menu"
                >
                  <X size={24} />
                </Button>
              </div>

              <nav className="flex flex-col space-y-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href + index}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    className="text-white/90 hover:text-cyan-400 transition-colors text-lg touch-target flex items-center"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <div className="absolute bottom-6 left-6 right-6">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href="/#desafio" onClick={closeMenu}>Participe do Desafio</a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
