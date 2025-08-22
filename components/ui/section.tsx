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
      className={cn("py-16 md:py-20", className)}
    >
      {children}
    </section>
  );
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

