import { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  // Animações GSAP
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      // Anima a coluna da esquerda (Sticky)
      gsap.from('.faq-sticky', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });

      // Anima os itens da direita com stagger
      gsap.from('.faq-item', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.faq-list',
          start: 'top 75%',
        }
      });
    }
  }, { scope: containerRef });

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 border-b border-border bg-bg">
      
      {/* COLUNA ESQUERDA (Sticky) */}
      <div className="lg:col-span-4 3xl:col-span-3 p-8 md:p-16 lg:p-24 3xl:p-32 border-b lg:border-b-0 lg:border-r border-border">
        <div className="faq-sticky sticky top-32">
          <div className="text-[10px] md:text-xs 3xl:text-sm uppercase tracking-widest font-medium mb-8">
            {t('faq.support')}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl leading-[0.9] tracking-tight mb-12" dangerouslySetInnerHTML={{ __html: t('faq.title') }} />
          <button className="border border-border rounded-full px-8 py-3 3xl:px-12 3xl:py-4 text-[10px] 3xl:text-xs uppercase font-medium hover:bg-fg hover:text-bg transition-colors tracking-widest">
            {t('faq.contact')}
          </button>
        </div>
      </div>

      {/* COLUNA DIREITA (Lista) */}
      <div className="lg:col-span-8 3xl:col-span-9 faq-list flex flex-col">
        {(t('faq.items', { returnObjects: true }) as { question: string, answer: string }[]).map((item, idx) => (
          <div key={idx} className="faq-item border-b border-border last:border-b-0">
            <button
              onClick={() => toggleItem(idx)}
              className="w-full p-8 md:p-12 lg:p-16 3xl:p-24 flex justify-between items-center text-left group"
              aria-expanded={openIndex === idx}
            >
              <span className="font-serif text-2xl md:text-3xl 3xl:text-4xl pr-8 group-hover:opacity-60 transition-opacity duration-300">
                {item.question}
              </span>
              <span 
                className={`flex-shrink-0 w-10 h-10 3xl:w-14 3xl:h-14 border border-border rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === idx ? 'bg-fg text-bg rotate-180' : 'bg-transparent text-fg group-hover:bg-fg group-hover:text-bg'
                }`}
              >
                {openIndex === idx ? (
                  <Minus className="w-4 h-4 3xl:w-6 3xl:h-6" />
                ) : (
                  <Plus className="w-4 h-4 3xl:w-6 3xl:h-6" />
                )}
              </span>
            </button>
            
            {/* Área de Resposta (Expandable com Grid Trick) */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-8 md:px-12 lg:px-16 3xl:px-24 pb-8 md:pb-12 lg:pb-16 3xl:pb-24 text-sm md:text-base 3xl:text-lg leading-relaxed max-w-3xl text-fg/70">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
