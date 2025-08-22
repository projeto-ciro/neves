// components/ui/typography.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Tipagem robusta para o prop "as", sem depender do namespace global JSX.
 * Funciona mesmo com "skipLibCheck" e diferentes targets.
 */
type AsTag = keyof import("react").JSX.IntrinsicElements;

type TypographyProps = {
  children: ReactNode;
  className?: string;
  as?: AsTag;
};

export function DisplayTitle({
  children,
  className,
  as: Component = "h1",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function SectionTitle({
  children,
  className,
  as: Component = "h2",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function Subtitle({
  children,
  className,
  as: Component = "h3",
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function Paragraph({
  children,
  className,
  as: Component = "p",
}: TypographyProps) {
  return (
    <Component className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </Component>
  );
}

export function Lead({
  children,
  className,
  as: Component = "p",
}: TypographyProps) {
  return (
    <Component className={cn("text-xl text-muted-foreground", className)}>
      {children}
    </Component>
  );
}

export function Small({
  children,
  className,
  as: Component = "small",
}: TypographyProps) {
  return (
    <Component className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </Component>
  );
}

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
