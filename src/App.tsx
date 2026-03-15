import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowLeft, ArrowRight, Play } from 'lucide-react';
import SmoothScrollProvider from './components/layout/SmoothScrollProvider';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FAQ from './components/sections/FAQ';
import CartSidebar from './components/layout/CartSidebar';
import { useCartStore } from './store/useCartStore';

import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const NoiseOverlay = () => (
  <div 
    className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none z-0"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '128px 128px'
    }}
  />
);

export default function App() {
  const container = useRef<HTMLDivElement>(null);
  const addItem = useCartStore((state) => state.addItem);
  const { t } = useTranslation();

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // 4. Infinite Marquee
    gsap.to('.marquee-content', {
      xPercent: -50,
      ease: 'none',
      duration: 20,
      repeat: -1,
    });

    if (prefersReducedMotion) {
      gsap.set('.reveal-text', { y: 0, opacity: 1 });
      gsap.set('.reveal-img', { scale: 1, opacity: 1 });
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
        { scale: 1.2 },
        {
          scale: 1,
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

  }, { scope: container });

  return (
    <SmoothScrollProvider>
      <div ref={container} className="min-h-screen bg-muted text-fg font-sans selection:bg-fg selection:text-bg flex justify-center">
        
        {/* Main Wrapper for Ultra-Wide Screens */}
        <div className="w-full max-w-[1920px] bg-bg border-x border-border flex flex-col shadow-2xl">
          
          <Navbar />
          <CartSidebar />

          {/* Hero Section */}
          <section className="border-b border-border flex justify-center items-center overflow-hidden py-16 md:py-32 3xl:py-48 bg-muted">
            <div className="overflow-hidden pb-4">
              <h1 className="hero-title text-[35vw] md:text-[28vw] 3xl:text-[25vw] font-serif leading-[0.75] tracking-[-0.08em] -ml-[2vw] text-fg">
                {t('hero.title')}
              </h1>
            </div>
          </section>

          {/* Marquee Section */}
          <section className="border-b border-border overflow-hidden flex whitespace-nowrap py-3 md:py-4 3xl:py-6 bg-fg text-bg text-[10px] md:text-xs 3xl:text-sm uppercase tracking-[0.2em] font-medium">
            <div className="marquee-content flex items-center w-max">
              {[1, 2, 3, 4].map((set) => (
                <div key={set} className="flex gap-8 3xl:gap-12 items-center pr-8 3xl:pr-12">
                  {(t('marquee', { returnObjects: true }) as string[]).map((text, i) => (
                    <div key={i} className="flex gap-8 3xl:gap-12 items-center">
                      <span>{text}</span>
                      <span className="w-1.5 h-1.5 3xl:w-2 3xl:h-2 bg-bg rounded-full"></span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Section 1: Video / About */}
          <section id="manifesto" className="relative grid grid-cols-1 md:grid-cols-4 border-b border-border">
            <NoiseOverlay />
            <div className="p-4 md:p-6 3xl:p-10 border-b md:border-b-0 md:border-r border-border text-[10px] md:text-xs 3xl:text-sm uppercase font-medium whitespace-pre-line">
              {t('manifesto.title')}
            </div>
            <div className="p-4 md:p-6 3xl:p-10 border-b md:border-b-0 md:border-r border-border text-[10px] md:text-xs 3xl:text-sm uppercase font-medium whitespace-pre-line">
              {t('manifesto.subtitle')}
            </div>
            <div className="col-span-1 md:col-span-2 p-8 md:p-16 3xl:p-24 flex flex-col items-center justify-center">
              <div className="reveal-text w-full max-w-lg 3xl:max-w-2xl text-[10px] md:text-[11px] 3xl:text-xs uppercase text-center mb-16 3xl:mb-24 leading-[1.8] font-medium tracking-wider">
                {t('manifesto.text1')}<br/><br/>
                {t('manifesto.text2')}
              </div>
              <div className="relative w-full aspect-[16/9] bg-fg cursor-pointer group overflow-hidden border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1920" 
                  alt="Video Thumbnail"
                  className="reveal-img w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 3xl:w-28 3xl:h-28 border border-bg rounded-full flex items-center justify-center group-hover:scale-110 transition-transform bg-fg/20 backdrop-blur-sm">
                    <Play className="w-8 h-8 3xl:w-10 3xl:h-10 text-bg fill-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Featured Publications (Books as Art) */}
          <section id="lancamentos" className="relative border-b border-border bg-bg">
            <NoiseOverlay />
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Header Column */}
              <div className="lg:col-span-3 p-8 md:p-12 3xl:p-16 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between">
                <div className="text-[10px] md:text-xs 3xl:text-sm uppercase font-medium tracking-widest whitespace-pre-line">
                  {t('featured.title')}
                </div>
                <div className="hidden lg:block text-[9px] 3xl:text-[10px] uppercase tracking-[0.2em] text-fg/40 font-medium">
                  {t('featured.subtitle')}
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2">
                {/* Book 1 */}
                <div className="group border-b md:border-b-0 md:border-r border-border flex flex-col">
                  <div className="w-full aspect-[4/5] overflow-hidden bg-muted border-b border-border">
                    <img src="https://images.unsplash.com/photo-1621360841013-c76831f1b360?auto=format&fit=crop&q=80&w=1200" alt="A Poética do Espaço" className="reveal-img w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" loading="lazy" />
                  </div>
                  <div className="p-8 md:p-12 3xl:p-16 flex flex-col flex-grow justify-between bg-bg">
                    <div>
                      <h3 className="font-serif text-3xl md:text-4xl 3xl:text-5xl mb-4 italic tracking-tight">{t('books.poetica.title')}</h3>
                      <p className="text-xs 3xl:text-sm uppercase tracking-widest font-medium mb-6">{t('books.poetica.author')}</p>
                      <p className="text-sm 3xl:text-base leading-relaxed text-fg/70 mb-8 max-w-md">
                        {t('books.poetica.desc')}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-8 border-t border-border/10">
                      <div className="text-[9px] 3xl:text-[10px] font-mono uppercase text-fg/50 tracking-widest">
                        {t('featured.tiragem')}: 100 ex.
                      </div>
                      <button 
                        onClick={() => addItem({
                          id: 'poetica-espaco',
                          title: 'A Poética do Espaço',
                          author: 'Gaston Bachelard',
                          price: 180.00,
                          image: 'https://images.unsplash.com/photo-1621360841013-c76831f1b360?auto=format&fit=crop&q=80&w=1200'
                        })}
                        className="text-[10px] 3xl:text-xs uppercase tracking-widest font-medium hover:italic transition-all flex items-center gap-2"
                      >
                        {t('featured.acquire')} <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Book 2 */}
                <div className="group flex flex-col">
                  <div className="w-full aspect-[4/5] overflow-hidden bg-muted border-b border-border">
                    <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=1200" alt="Arquitetura da Sombra" className="reveal-img w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" loading="lazy" />
                  </div>
                  <div className="p-8 md:p-12 3xl:p-16 flex flex-col flex-grow justify-between bg-bg">
                    <div>
                      <h3 className="font-serif text-3xl md:text-4xl 3xl:text-5xl mb-4 italic tracking-tight">{t('books.arquitetura.title')}</h3>
                      <p className="text-xs 3xl:text-sm uppercase tracking-widest font-medium mb-6">{t('books.arquitetura.author')}</p>
                      <p className="text-sm 3xl:text-base leading-relaxed text-fg/70 mb-8 max-w-md">
                        {t('books.arquitetura.desc')}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-8 border-t border-border/10">
                      <div className="text-[9px] 3xl:text-[10px] font-mono uppercase text-fg/50 tracking-widest">
                        {t('featured.tiragem')}: 50 ex.
                      </div>
                      <button 
                        onClick={() => addItem({
                          id: 'arquitetura-sombra',
                          title: 'Arquitetura da Sombra',
                          author: "Jun'ichirō Tanizaki",
                          price: 150.00,
                          image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=1200'
                        })}
                        className="text-[10px] 3xl:text-xs uppercase tracking-widest font-medium hover:italic transition-all flex items-center gap-2"
                      >
                        {t('featured.acquire')} <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Publications Index (Table) */}
          <section className="relative grid grid-cols-1 md:grid-cols-4 border-b border-border bg-muted">
            <NoiseOverlay />
            <div className="p-4 md:p-6 3xl:p-10 border-b md:border-b-0 md:border-r border-border text-[10px] md:text-xs 3xl:text-sm uppercase font-medium whitespace-pre-line">
              {t('publications.title')}
            </div>
            <div className="col-span-1 md:col-span-3 flex flex-col">
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-12 border-b border-border text-[9px] 3xl:text-[10px] uppercase tracking-widest font-medium p-4 3xl:p-8 text-fg/50">
                <div className="col-span-1">{t('publications.ref')}</div>
                <div className="col-span-5">{t('publications.book_title')}</div>
                <div className="col-span-4">{t('publications.author')}</div>
                <div className="col-span-2 text-right">{t('publications.status')}</div>
              </div>
              
              {/* Table Rows */}
              {(t('table', { returnObjects: true }) as { ref: string, title: string, author: string, status: string }[]).map((item, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-12 border-b border-border group cursor-pointer hover:bg-fg hover:text-bg transition-colors duration-300">
                  <div className="col-span-1 p-4 3xl:p-8 md:border-r border-border/20 text-[10px] 3xl:text-xs font-mono">{item.ref}</div>
                  <div className="col-span-5 p-4 3xl:p-8 md:border-r border-border/20 font-serif text-xl md:text-2xl 3xl:text-4xl italic">{item.title}</div>
                  <div className="col-span-4 p-4 3xl:p-8 md:border-r border-border/20 text-xs 3xl:text-sm uppercase tracking-wider flex items-center">{item.author}</div>
                  <div className="col-span-2 p-4 3xl:p-8 text-[10px] 3xl:text-xs uppercase tracking-widest flex justify-between md:justify-end items-center gap-4">
                    <span className={item.status === 'Esgotado' ? 'opacity-50 line-through' : ''}>{item.status}</span>
                    <ArrowUpRight className="w-4 h-4 3xl:w-5 3xl:h-5 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Massive Quote */}
          <section className="relative border-b border-border py-24 md:py-48 3xl:py-64 px-6 md:px-12 3xl:px-24 flex justify-center items-center text-center">
            <NoiseOverlay />
            <h2 
              className="reveal-text text-4xl md:text-6xl lg:text-8xl 3xl:text-9xl font-serif font-light leading-[1.1] tracking-tight max-w-6xl 3xl:max-w-[120rem]"
              dangerouslySetInnerHTML={{ __html: t('quote.text') }}
            />
          </section>

          {/* Section 4: Featured Content */}
          <section id="acervo" className="grid grid-cols-1 md:grid-cols-4 border-b border-border">
            <div className="p-4 md:p-6 3xl:p-10 border-b md:border-b-0 md:border-r border-border flex flex-col justify-between">
              <div className="text-[10px] md:text-xs 3xl:text-sm uppercase font-medium whitespace-pre-line">{t('acervo.title')}</div>
              <div className="flex gap-4 mt-8 md:mt-0">
                <div className="w-10 h-10 3xl:w-14 3xl:h-14 border border-border rounded-full flex items-center justify-center cursor-pointer hover:bg-fg hover:text-bg transition-colors">
                  <ArrowLeft className="w-4 h-4 3xl:w-5 3xl:h-5" />
                </div>
                <div className="w-10 h-10 3xl:w-14 3xl:h-14 border border-border rounded-full flex items-center justify-center cursor-pointer hover:bg-fg hover:text-bg transition-colors">
                  <ArrowRight className="w-4 h-4 3xl:w-5 3xl:h-5" />
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {(t('gallery', { returnObjects: true }) as { title: string }[]).map((item, i) => {
                const images = [
                  'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
                  'https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&q=80&w=800',
                  'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800'
                ];
                return (
                <div key={i} className={`group cursor-pointer border-b lg:border-b-0 ${i !== 2 ? 'lg:border-r border-border' : ''} p-6 3xl:p-10 flex flex-col`}>
                  <div className="w-full aspect-[3/4] overflow-hidden bg-muted mb-6 3xl:mb-10">
                    <img src={images[i]} className="reveal-img w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex justify-between items-end mt-auto">
                    <p className="text-[10px] 3xl:text-xs uppercase font-medium tracking-wider max-w-[150px] 3xl:max-w-[200px]">{item.title}</p>
                    <span className="text-[9px] 3xl:text-[10px] font-mono border border-border px-2 py-1 3xl:px-4 3xl:py-2 rounded-full group-hover:bg-fg group-hover:text-bg transition-colors">{t('acervo.view')}</span>
                  </div>
                </div>
              )})}
            </div>
          </section>

          {/* Section 5: Text Block & Reservations */}
          <section id="reservas" className="grid grid-cols-1 md:grid-cols-4 border-b border-border bg-muted">
            <div className="p-4 md:p-6 3xl:p-10 border-b md:border-b-0 md:border-r border-border flex flex-col items-start justify-between min-h-[250px] 3xl:min-h-[350px]">
              <div className="text-[10px] md:text-xs 3xl:text-sm uppercase font-medium whitespace-pre-line">
                {t('reservations.title')}
              </div>
              <button className="mt-8 border border-border rounded-full px-8 py-3 3xl:px-12 3xl:py-4 text-[10px] 3xl:text-xs uppercase font-medium hover:bg-fg hover:text-bg transition-colors tracking-widest">
                {t('reservations.button')}
              </button>
            </div>
            <div className="col-span-1 md:col-span-3 p-8 md:p-16 lg:p-24 3xl:p-32 flex justify-center">
              <p className="reveal-text font-serif text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl leading-[1.4] max-w-4xl 3xl:max-w-6xl text-justify">
                <span dangerouslySetInnerHTML={{ __html: t('reservations.text1') }} />
                <br/><br/>
                <span dangerouslySetInnerHTML={{ __html: t('reservations.text2') }} />
              </p>
            </div>
          </section>

          <FAQ />

          <Footer />

        </div>
      </div>
    </SmoothScrollProvider>
  );
}
