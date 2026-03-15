import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useReveal(containerRef: RefObject<HTMLElement | null>) {
  useGSAP(() => {
    // Acessibilidade: Verifica se o usuário prefere movimento reduzido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set('.reveal-text, .hero-title', { opacity: 1, y: 0, yPercent: 0 });
      gsap.set('.reveal-img', { scale: 1, filter: 'brightness(1)' });
      return;
    }

    // 1. Hero Text Reveal
    gsap.from('.hero-title', {
      yPercent: 100,
      ease: 'power4.out',
      duration: 1.5,
      delay: 0.2,
    });

    // 2. Image Parallax & Reveal
    const images = gsap.utils.toArray<HTMLElement>('.reveal-img');
    images.forEach((img) => {
      gsap.fromTo(img, 
        { scale: 1.2, filter: 'brightness(0.5)' },
        {
          scale: 1,
          filter: 'brightness(1)',
          ease: 'power2.out',
          duration: 1.5,
          scrollTrigger: {
            trigger: img.parentElement,
            start: 'top 90%',
            end: 'center center',
            scrub: 1,
          }
        }
      );
    });

    // 3. Text Block Reveals
    const textBlocks = gsap.utils.toArray<HTMLElement>('.reveal-text');
    textBlocks.forEach((text) => {
      gsap.from(text, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: text,
          start: 'top 85%',
        }
      });
    });
  }, { scope: containerRef });
}
