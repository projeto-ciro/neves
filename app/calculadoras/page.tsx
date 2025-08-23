"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PlayCircle, Calculator, Heart, Activity } from "lucide-react";
import { Section, Container } from "@/components/ui/section";
import { Title, Subtitle, Body } from "@/components/ui/typography";
import { GlassCard, GlassCardContent, GlassCardHeader } from "@/components/ui/glass-card";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------
   Título
------------------------------------------------------------------- */
function SectionTitle() {
  return (
    <div className="text-center space-y-6">
      <Title className="text-white">
        Calculadoras que vão te ajudar a conhecer
        <span className="text-cyan-400"> seu metabolismo</span>
      </Title>
      <Body className="text-white/70 max-w-2xl mx-auto">
        Resultados rápidos, em linguagem simples. Use as três para ter uma visão
        completa: metabolismo, frequência cardíaca e composição.
      </Body>
    </div>
  );
}

/* ------------------------------------------------------------------
   Hook para sincronizar a altura de um grupo de elementos (dinâmico)
------------------------------------------------------------------- */
function useSyncedMinHeight<T extends HTMLElement>() {
  const [minH, setMinH] = useState<number>(0);
  const itemsRef = useRef<T[]>([]);

  const register = (el: T | null, index: number) => {
    if (!el) return;
    itemsRef.current[index] = el;
  };

  useEffect(() => {
    if (!itemsRef.current.length) return;

    const ro = new ResizeObserver(() => {
      const max = Math.max(
        0,
        ...itemsRef.current
          .filter(Boolean)
          .map((el) => Math.ceil(el!.getBoundingClientRect().height))
      );
      setMinH(max);
    });

    itemsRef.current.forEach((el) => el && ro.observe(el));
    const onResize = () => ro.disconnect();
    window.addEventListener("orientationchange", onResize);
    window.addEventListener("resize", onResize);

    // primeira medição
    const max0 = Math.max(
      0,
      ...itemsRef.current
        .filter(Boolean)
        .map((el) => Math.ceil(el!.getBoundingClientRect().height))
    );
    setMinH(max0);

    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", onResize);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return { register, minH };
}

/* ------------------------------------------------------------------
   Barra de ações padronizada
------------------------------------------------------------------- */
function ActionRow() {
  return (
    <div className="mt-auto pt-5 border-t border-white/10 flex items-center justify-between gap-4">
      <a
        href="#"
        className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:opacity-80 link-underline touch-target"
        aria-label="Assistir vídeo explicativo"
      >
        <PlayCircle className="h-4 w-4" />
        <span>assista ao</span>
        <span className="underline font-medium">vídeo</span>
      </a>
      <Button variant="cta" className="w-[150px]" asChild>
        <a href="https://wa.me/5583999210852" target="_blank" rel="noopener noreferrer">
          assistir agora
        </a>
      </Button>
    </div>
  );
}

/* ------------------------------------------------------------------
   Card base com layout equidistante
------------------------------------------------------------------- */
function Box({
  icon,
  title,
  subtitle,
  form,
  result,
  actionRow,
  resultStyle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: React.ReactNode;
  form: React.ReactNode;
  result: React.ReactNode;
  actionRow?: React.ReactNode;
  resultStyle?: React.CSSProperties;
}) {
  return (
    <GlassCard className="flex flex-col h-full">
      <GlassCardHeader>
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 touch-target">
            {icon}
          </div>
          <div>
            <Subtitle as="h3" className="text-white">{title}</Subtitle>
            <Body className="text-cyan-400 font-medium">{subtitle}</Body>
          </div>
        </div>
      </GlassCardHeader>

      <GlassCardContent className="flex flex-col flex-grow">
        <div className="grid grid-rows-[auto_var(--result)_auto] gap-5 flex-grow">
          <div>{form}</div>
          <div style={resultStyle}>{result}</div>
          {actionRow ?? <ActionRow />}
        </div>
      </GlassCardContent>
    </GlassCard>
  );
}

/* ------------------------------------------------------------------
   Calculadora TMB
------------------------------------------------------------------- */
function CalcTMB({
  resultRef,
  minResultHeight,
}: {
  resultRef: (el: HTMLDivElement | null, index: number) => void;
  minResultHeight: number;
}) {
  const [sexo, setSexo] = useState<"F" | "M">("F");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const tmb = useMemo(() => {
    const i = parseFloat(idade);
    const p = parseFloat(peso);
    const a = parseFloat(altura);
    if (Number.isNaN(i) || Number.isNaN(p) || Number.isNaN(a)) return null;
    const base = 10 * p + 6.25 * a - 5 * i;
    return Math.max(0, Math.round(sexo === "M" ? base + 5 : base - 161));
  }, [sexo, idade, peso, altura]);

  const form = (
    <div className="space-y-4">
      <div>
        <Body as="span" className="mb-2 block text-white font-medium">Sexo</Body>
        <RadioGroup
          value={sexo}
          onValueChange={(v) => setSexo(v as "F" | "M")}
          className="flex gap-6"
        >
          <label className="flex items-center gap-2 cursor-pointer touch-target">
            <RadioGroupItem value="F" id="tmb-f" />
            <Body className="text-white/80">Feminino</Body>
          </label>
          <label className="flex items-center gap-2 cursor-pointer touch-target">
            <RadioGroupItem value="M" id="tmb-m" />
            <Body className="text-white/80">Masculino</Body>
          </label>
        </RadioGroup>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label htmlFor="idade" className="mb-2 block text-sm font-medium text-white">
            Idade (anos)
          </label>
          <Input
            id="idade"
            inputMode="numeric"
            placeholder="Ex.: 42"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            className="touch-target"
          />
        </div>
        <div>
          <label htmlFor="peso" className="mb-2 block text-sm font-medium text-white">
            Peso (kg)
          </label>
          <Input
            id="peso"
            inputMode="decimal"
            placeholder="Ex.: 72"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            className="touch-target"
          />
        </div>
        <div>
          <label htmlFor="altura" className="mb-2 block text-sm font-medium text-white">
            Altura (cm)
          </label>
          <Input
            id="altura"
            inputMode="decimal"
            placeholder="Ex.: 165"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            className="touch-target"
          />
        </div>
      </div>
    </div>
  );

  const result = (
    <div
      ref={(el) => resultRef(el, 0)}
      className="rounded-xl bg-white/5 border border-white/10 p-4"
    >
      <Body className="text-white/70">Sua TMB estimada:</Body>
      <AnimatePresence mode="wait">
        <motion.p
          key={tmb}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="text-2xl md:text-3xl font-bold text-cyan-400"
        >
          {tmb ? `${tmb} kcal/dia` : "—"}
        </motion.p>
      </AnimatePresence>
      <Body className="text-white/50 mt-2">
        * TMB é a energia mínima para manter funções vitais em repouso.
      </Body>
    </div>
  );

  return (
    <Box
      icon={<Calculator className="h-5 w-5" />}
      title="Calcule sua TMB"
      subtitle="Taxa Metabólica Basal"
      form={form}
      result={result}
      resultStyle={{ ["--result" as any]: `${minResultHeight}px` }}
    />
  );
}

/* ------------------------------------------------------------------
   Calculadora Frequência Cardíaca
------------------------------------------------------------------- */
function CalcFC({
  resultRef,
  minResultHeight,
}: {
  resultRef: (el: HTMLDivElement | null, index: number) => void;
  minResultHeight: number;
}) {
  const [idade, setIdade] = useState("");

  const fcMax = useMemo(() => {
    const i = parseFloat(idade);
    if (Number.isNaN(i) || i <= 0) return null;
    return Math.max(0, Math.round(220 - i));
  }, [idade]);

  const zonas = useMemo(() => {
    if (!fcMax) return null;
    return {
      queima: [Math.round(fcMax * 0.6), Math.round(fcMax * 0.7)],
      aerobica: [Math.round(fcMax * 0.7), Math.round(fcMax * 0.8)],
      anaerobica: [Math.round(fcMax * 0.8), Math.round(fcMax * 0.9)],
    };
  }, [fcMax]);

  const form = (
    <div className="space-y-4">
      <div>
        <label htmlFor="idade-fc" className="mb-2 block text-sm font-medium text-white">
          Idade (anos)
        </label>
        <Input
          id="idade-fc"
          inputMode="numeric"
          placeholder="Ex.: 42"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          className="touch-target"
        />
      </div>
    </div>
  );

  const result = (
    <div
      ref={(el) => resultRef(el, 1)}
      className="rounded-xl bg-white/5 border border-white/10 p-4 space-y-3"
    >
      <div>
        <Body className="text-white/70">FC Máxima:</Body>
        <AnimatePresence mode="wait">
          <motion.p
            key={fcMax}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-bold text-cyan-400"
          >
            {fcMax ? `${fcMax} bpm` : "—"}
          </motion.p>
        </AnimatePresence>
      </div>

      {zonas && (
        <div className="space-y-2">
          <Body className="text-white/70 font-medium">Zonas de treino:</Body>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-white/60">Queima gordura:</span>
              <span className="text-cyan-400">{zonas.queima[0]}-{zonas.queima[1]} bpm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Aeróbica:</span>
              <span className="text-cyan-400">{zonas.aerobica[0]}-{zonas.aerobica[1]} bpm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Anaeróbica:</span>
              <span className="text-cyan-400">{zonas.anaerobica[0]}-{zonas.anaerobica[1]} bpm</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Box
      icon={<Heart className="h-5 w-5" />}
      title="Frequência Cardíaca"
      subtitle="Zonas de Treino"
      form={form}
      result={result}
      resultStyle={{ ["--result" as any]: `${minResultHeight}px` }}
    />
  );
}

/* ------------------------------------------------------------------
   Calculadora IMC
------------------------------------------------------------------- */
function CalcIMC({
  resultRef,
  minResultHeight,
}: {
  resultRef: (el: HTMLDivElement | null, index: number) => void;
  minResultHeight: number;
}) {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const imc = useMemo(() => {
    const p = parseFloat(peso);
    const a = parseFloat(altura) / 100; // cm para metros
    if (Number.isNaN(p) || Number.isNaN(a) || a <= 0) return null;
    return parseFloat((p / (a * a)).toFixed(1));
  }, [peso, altura]);

  const categoria = useMemo(() => {
    if (!imc) return null;
    if (imc < 18.5) return { nome: "Abaixo do peso", cor: "text-blue-400" };
    if (imc < 25) return { nome: "Peso normal", cor: "text-green-400" };
    if (imc < 30) return { nome: "Sobrepeso", cor: "text-yellow-400" };
    return { nome: "Obesidade", cor: "text-red-400" };
  }, [imc]);

  const form = (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="peso-imc" className="mb-2 block text-sm font-medium text-white">
            Peso (kg)
          </label>
          <Input
            id="peso-imc"
            inputMode="decimal"
            placeholder="Ex.: 72"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            className="touch-target"
          />
        </div>
        <div>
          <label htmlFor="altura-imc" className="mb-2 block text-sm font-medium text-white">
            Altura (cm)
          </label>
          <Input
            id="altura-imc"
            inputMode="decimal"
            placeholder="Ex.: 165"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            className="touch-target"
          />
        </div>
      </div>
    </div>
  );

  const result = (
    <div
      ref={(el) => resultRef(el, 2)}
      className="rounded-xl bg-white/5 border border-white/10 p-4 space-y-3"
    >
      <div>
        <Body className="text-white/70">Seu IMC:</Body>
        <AnimatePresence mode="wait">
          <motion.p
            key={imc}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold text-cyan-400"
          >
            {imc ? imc : "—"}
          </motion.p>
        </AnimatePresence>
      </div>

      {categoria && (
        <div>
          <Body className="text-white/70">Categoria:</Body>
          <p className={`font-semibold ${categoria.cor}`}>
            {categoria.nome}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <Box
      icon={<Activity className="h-5 w-5" />}
      title="Índice de Massa Corporal"
      subtitle="IMC"
      form={form}
      result={result}
      resultStyle={{ ["--result" as any]: `${minResultHeight}px` }}
    />
  );
}

/* ------------------------------------------------------------------
   Página principal
------------------------------------------------------------------- */
export default function CalculadorasPage() {
  const { register, minH } = useSyncedMinHeight<HTMLDivElement>();

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden">
      <Header />

      {/* MAIS ESPAÇO ABAIXO DO HEADER + respiro no fim da seção */}
      <Section className="pt-36 sm:pt-40 lg:pt-44 pb-16 md:pb-20 relative overflow-hidden">
        {/* Background Pattern with gradient and noise */}
        <div className="absolute inset-0 gradient-radial"></div>
        <div className="absolute inset-0 noise-texture"></div>

        <Container className="relative z-10">
          <SectionTitle />

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-14 md:mt-16">
            <CalcTMB resultRef={register} minResultHeight={minH} />
            <CalcFC resultRef={register} minResultHeight={minH} />
            <CalcIMC resultRef={register} minResultHeight={minH} />
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
