"use client";

import Image from "next/image";
import clsx from "clsx";

type Props = {
  src: string;
  alt: string;
  /**
   * Altura do banner (Tailwind). Ex.: "h-56 md:h-80"
   * Padrão: responsivo via clamp.
   */
  heightClass?: string;
  /**
   * Quando true, reduz o espaçamento com as seções vizinhas.
   * (aperta em cima e embaixo)
   */
  flush?: boolean;
  /**
   * Se quiser passar classes extras.
   */
  className?: string;
};

/**
 * Full‑bleed real:
 * - ocupa 100% da viewport (w-screen)
 * - centraliza fora do container com left/right 50% e margens negativas
 * - object-cover para não deixar “faixas”
 * - flush reduz a distância às seções adjacentes
 */
export default function BannerFullBleed({
  src,
  alt,
  heightClass = "h-[clamp(180px,26vw,420px)]",
  flush = true,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]",
        flush && "-mt-6 md:-mt-8 -mb-6 md:-mb-8",
        className
      )}
    >
      <div className={clsx("relative", heightClass)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
      </div>
    </div>
  );
}
