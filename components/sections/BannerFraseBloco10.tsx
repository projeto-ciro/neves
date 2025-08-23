// components/sections/BannerFraseBloco10.tsx
"use client";

import { Section } from "@/components/ui/section";
import BannerFullBleed from "@/components/BannerFullBleed";

export default function BannerFraseBloco10() {
  return (
    <Section className="py-0 -mt-12">
      <BannerFullBleed
        src="/banner-1.png"
        alt="NÃO É SOBRE APENAS EMAGRECER, É SOBRE SE REENCONTRAR. COMECE AGORA."
        heightClass="h-[clamp(260px,40vw,620px)]" // altura um pouco maior também
        flush
      />
    </Section>
  );
}
