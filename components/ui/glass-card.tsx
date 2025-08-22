import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  uniformHeight?: boolean;
}

export function GlassCard({ children, className, uniformHeight = true }: GlassCardProps) {
  return (
    <div 
      className={cn(
        "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg",
        "transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl",
        uniformHeight && "h-full flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
}

interface GlassCardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function GlassCardHeader({ children, className }: GlassCardHeaderProps) {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
}

interface GlassCardContentProps {
  children: ReactNode;
  className?: string;
}

export function GlassCardContent({ children, className }: GlassCardContentProps) {
  return (
    <div className={cn("flex-1", className)}>
      {children}
    </div>
  );
}

interface GlassCardFooterProps {
  children: ReactNode;
  className?: string;
}

export function GlassCardFooter({ children, className }: GlassCardFooterProps) {
  return (
    <div className={cn("mt-auto pt-4", className)}>
      {children}
    </div>
  );
}

