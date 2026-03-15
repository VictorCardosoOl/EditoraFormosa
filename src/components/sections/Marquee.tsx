import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export function Marquee() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return; // Pausa a animação se o usuário preferir

    gsap.to('.marquee-content', {
      xPercent: -50,
      ease: 'none',
      duration: 20,
      repeat: -1,
    });
  }, { scope: container });

  return (
    <section ref={container} className="border-b border-border overflow-hidden flex whitespace-nowrap py-3 md:py-4 3xl:py-6 bg-fg text-bg text-[10px] md:text-xs 3xl:text-sm uppercase tracking-[0.2em] font-medium" aria-hidden="true">
      <div className="marquee-content flex gap-8 3xl:gap-12 items-center">
        <span>A ARTE DA ENCADERNAÇÃO MANUAL</span>
        <span className="w-1.5 h-1.5 3xl:w-2 3xl:h-2 bg-bg rounded-full"></span>
        <span>O PESO DA PALAVRA IMPRESSA</span>
        <span className="w-1.5 h-1.5 3xl:w-2 3xl:h-2 bg-bg rounded-full"></span>
        <span>EDIÇÕES ESTRITAMENTE LIMITADAS</span>
        <span className="w-1.5 h-1.5 3xl:w-2 3xl:h-2 bg-bg rounded-full"></span>
        <span>MANIFESTO DIGITAL 2026</span>
        <span className="w-1.5 h-1.5 3xl:w-2 3xl:h-2 bg-bg rounded-full"></span>
        {/* Duplicate for seamless loop */}
        <span>A ARTE DA ENCADERNAÇÃO MANUAL</span>
        <span className="w-1.5 h-1.5 3xl:w-2 3xl:h-2 bg-bg rounded-full"></span>
        <span>O PESO DA PALAVRA IMPRESSA</span>
        <span className="w-1.5 h-1.5 3xl:w-2 3xl:h-2 bg-bg rounded-full"></span>
        <span>EDIÇÕES ESTRITAMENTE LIMITADAS</span>
        <span className="w-1.5 h-1.5 3xl:w-2 3xl:h-2 bg-bg rounded-full"></span>
        <span>MANIFESTO DIGITAL 2026</span>
        <span className="w-1.5 h-1.5 3xl:w-2 3xl:h-2 bg-bg rounded-full"></span>
      </div>
    </section>
  );
}
