import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function DisplayTitle({ children, className, as: Component = "h1" }: TypographyProps) {
  return (
    <Component 
      className={cn(
        "font-bold leading-tight tracking-tight",
        "text-[clamp(2.5rem,5vw,4rem)]", // 40px → 64px
        className
      )}
    >
      {children}
    </Component>
  );
}

export function Title({ children, className, as: Component = "h2" }: TypographyProps) {
  return (
    <Component 
      className={cn(
        "font-bold leading-tight tracking-tight",
        "text-[clamp(1.875rem,4vw,3rem)]", // 30px → 48px
        className
      )}
    >
      {children}
    </Component>
  );
}

export function Subtitle({ children, className, as: Component = "h3" }: TypographyProps) {
  return (
    <Component 
      className={cn(
        "font-semibold leading-tight",
        "text-[clamp(1.25rem,3vw,2rem)]", // 20px → 32px
        className
      )}
    >
      {children}
    </Component>
  );
}

export function Lead({ children, className, as: Component = "p" }: TypographyProps) {
  return (
    <Component 
      className={cn(
        "leading-relaxed",
        "text-[clamp(1.125rem,2.5vw,1.5rem)]", // 18px → 24px
        className
      )}
    >
      {children}
    </Component>
  );
}

export function Body({ children, className, as: Component = "p" }: TypographyProps) {
  return (
    <Component 
      className={cn(
        "leading-relaxed",
        "text-[clamp(0.875rem,2vw,1.125rem)]", // 14px → 18px
        className
      )}
    >
      {children}
    </Component>
  );
}

