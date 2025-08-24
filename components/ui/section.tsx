import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      // REMOVE o padding global (era: "py-12 md:py-16")
      className={cn("py-0", className)}
    >
      {children}
    </section>
  );
}

export function Container({ children, className }: ContainerProps) {
  return (
    // Sem recuo lateral no mobile pra imagem colar nas bordas
    <div className={cn("container mx-auto px-0 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
