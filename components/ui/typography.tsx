// components/ui/typography.tsx
"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Usa o tipo de tags do React sem depender de JSX global
type AsTag = keyof import("react").JSX.IntrinsicElements;

type TypographyProps = {
  children: ReactNode;
  className?: string;
  as?: AsTag;
};

/** Título grande da página (h1 por padrão) */
export function DisplayTitle({
  children,
  className,
  as: Component = "h1",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl",
        className
      )}
    >
      {children}
    </Component>
  );
}

/** Heading padrão de seção (h2 por padrão) */
export function Heading({
  children,
  className,
  as: Component = "h2",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </Component>
  );
}

/** Lead/Body: parágrafo de destaque */
export function Lead({
  children,
  className,
  as: Component = "p",
}: TypographyProps) {
  return (
    <Component className={cn("text-lg text-muted-foreground", className)}>
      {children}
    </Component>
  );
}

/** Texto mais discreto */
export function Muted({
  children,
  className,
  as: Component = "p",
}: TypographyProps) {
  return (
    <Component className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </Component>
  );
}

/* ============================
   ALIASES de compatibilidade
   (mantêm import { Title, Subtitle, Body } funcionando)
   ============================ */

// Title -> usa Heading (h2)
export const Title = Heading;

// Subtitle -> usa Muted por padrão (p), mas com peso um pouco maior
export function Subtitle({
  children,
  className,
  as: Component = "p",
}: TypographyProps) {
  return (
    <Component className={cn("text-base text-muted-foreground", className)}>
      {children}
    </Component>
  );
}

// Body -> usa Lead (p) como “corpo” mais legível
export const Body = Lead;
