// components/CalculadorasCta.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CalculadorasCta() {
  return (
    <section className="relative py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-6 py-8 md:px-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Quer entender melhor seu corpo?
            </h3>
            <p className="text-muted-foreground">
              Use as nossas calculadoras de <span className="text-cyan-400 font-medium">TMB, IMC e Frequência Cardíaca</span> e veja seus números agora.
            </p>
          </div>

          <motion.div initial={{ scale: 0.96, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <Button asChild className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-6">
              <Link href="https://wa.me/5583999210852" target="_blank" rel="noopener noreferrer">
                <Calculator className="mr-2 h-5 w-5" />
                Eu Quero
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
