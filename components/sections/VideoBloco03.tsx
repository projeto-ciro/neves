"use client";
import { Section, Container } from "@/components/ui/section";
import { Subtitle } from "@/components/ui/typography";

export default function VideoBloco03() {
  return (
    <Section>
      <Container>
        <Subtitle className="text-center text-white mb-4">
          Dê um play neste vídeo
        </Subtitle>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/SEU_VIDEO_ID"
            title="Reprogramação Metabólica — Ciro Neves"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Container>
    </Section>
  );
}
