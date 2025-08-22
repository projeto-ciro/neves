type BannerHeights = { base?: number; md?: number; lg?: number };

interface SectionBannerProps {
  src: string;
  alt?: string;
  /** foco vertical da arte. Ex.: "center 45%" ou apenas "45%" */
  positionY?: string;
  /** alturas em px por breakpoint */
  height?: BannerHeights;
  /** margin/padding extras */
  className?: string;
}

/**
 * Banner full‑bleed, fino e legível, sem distorcer.
 * Usa background + cover e permite ajustar o foco pela posição Y.
 */
export default function SectionBanner({
  src,
  alt = "",
  positionY = "45%",
  height = { base: 140, md: 160, lg: 180 },
  className = "",
}: SectionBannerProps) {
  const hBase = height.base ?? 170;
  const hMd = height.md ?? hBase;
  const hLg = height.lg ?? hMd;

  return (
    <div className={`relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen ${className}`}>
      <div
        role="img"
        aria-label={alt}
        className={`
          bg-no-repeat bg-cover
          h-[${hBase}px]
          md:h-[${hMd}px]
          lg:h-[${hLg}px]
        `}
        style={{
          backgroundImage: `url('${src}')`,
          backgroundPosition: `center ${positionY}`,
        }}
      />
    </div>
  );
}
