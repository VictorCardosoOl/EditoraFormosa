import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowLeft, ArrowRight, Play } from 'lucide-react';
import SmoothScrollProvider from './components/layout/SmoothScrollProvider';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FAQ from './components/sections/FAQ';

gsap.registerPlugin(ScrollTrigger);

const NoiseOverlay = () => (
  <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none z-0">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

export default function App() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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

    // 4. Infinite Marquee
    gsap.to('.marquee-content', {
      xPercent: -50,
      ease: 'none',
      duration: 20,
      repeat: -1,
    });

  }, { scope: container });

  return (
    <SmoothScrollProvider>
      <div ref={container} className="min-h-screen bg-[#f4f4f4] text-black font-sans selection:bg-black selection:text-white flex justify-center">
        
        {/* Main Wrapper for Ultra-Wide Screens */}
        <div className="w-full max-w-[1920px] bg-white border-x border-black flex flex-col shadow-2xl">
          
          <Navbar />

          {/* Hero Section */}
          <section className="border-b border-black flex justify-center items-center overflow-hidden py-16 md:py-32 3xl:py-48 bg-[#f4f4f4]">
            <div className="overflow-hidden pb-4">
              <h1 className="hero-title text-[35vw] md:text-[28vw] 3xl:text-[25vw] font-serif leading-[0.75] tracking-[-0.08em] -ml-[2vw] text-black">
                Formosa
              </h1>
            </div>
          </section>

          {/* Marquee Section */}
          <section className="border-b border-black overflow-hidden flex whitespace-nowrap py-3 md:py-4 3xl:py-6 bg-black text-white text-[10px] md:text-xs 3xl:text-sm uppercase tracking-[0.2em] font-medium">
            <div className="marquee-content flex items-center">
              {[1, 2].map((set) => (
                <div key={set} className="flex gap-8 3xl:gap-12 items-center pr-8 3xl:pr-12">
                  {[
                    "A ARTE DA ENCADERNAÇÃO MANUAL",
                    "O PESO DA PALAVRA IMPRESSA",
                    "EDIÇÕES ESTRITAMENTE LIMITADAS",
                    "MANIFESTO DIGITAL 2026"
                  ].map((text, i) => (
                    <div key={i} className="flex gap-8 3xl:gap-12 items-center">
                      <span>{text}</span>
                      <span className="w-1.5 h-1.5 3xl:w-2 3xl:h-2 bg-white rounded-full"></span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Section 1: Video / About */}
          <section className="relative grid grid-cols-1 md:grid-cols-4 border-b border-black">
            <NoiseOverlay />
            <div className="p-4 md:p-6 3xl:p-10 border-b md:border-b-0 md:border-r border-black text-[10px] md:text-xs 3xl:text-sm uppercase font-medium">
              O Manifesto<br/>Digital
            </div>
            <div className="p-4 md:p-6 3xl:p-10 border-b md:border-b-0 md:border-r border-black text-[10px] md:text-xs 3xl:text-sm uppercase font-medium">
              Chamada para originais<br/>Até 15 Setembro, 2026
            </div>
            <div className="col-span-1 md:col-span-2 p-8 md:p-16 3xl:p-24 flex flex-col items-center justify-center">
              <div className="reveal-text w-full max-w-lg 3xl:max-w-2xl text-[10px] md:text-[11px] 3xl:text-xs uppercase text-center mb-16 3xl:mb-24 leading-[1.8] font-medium tracking-wider">
                LEITORES DE TODAS AS IDADES, DE TODOS OS PAÍSES DO MUNDO: VOCÊS SÃO CONVIDADOS A ENVIAR UM TESTAMENTO DE ARTE FEITO PARA SER LIDO.<br/><br/>
                ESCREVA SEU TESTAMENTO EM SEU PRÓPRIO IDIOMA E ESCREVA O QUÃO ABERTAMENTE DESEJAR. O LIVRO NÃO É APENAS UM CONTÊINER DE IDEIAS, MAS UM OBJETO DE PERMANÊNCIA EM UM MUNDO EFÊMERO.
              </div>
              <div className="relative w-full aspect-[16/9] bg-black cursor-pointer group overflow-hidden border border-black">
                <img 
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1920" 
                  alt="Video Thumbnail"
                  className="reveal-img w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 3xl:w-28 3xl:h-28 border border-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform bg-black/20 backdrop-blur-sm">
                    <Play className="w-8 h-8 3xl:w-10 3xl:h-10 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Featured Publications (Books as Art) */}
          <section className="relative border-b border-black bg-white">
            <NoiseOverlay />
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Header Column */}
              <div className="lg:col-span-3 p-8 md:p-12 3xl:p-16 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between">
                <div className="text-[10px] md:text-xs 3xl:text-sm uppercase font-medium tracking-widest">
                  Obras em<br/>Destaque
                </div>
                <div className="hidden lg:block text-[9px] 3xl:text-[10px] uppercase tracking-[0.2em] text-black/40 font-medium">
                  Edições Limitadas
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2">
                {/* Book 1 */}
                <div className="group border-b md:border-b-0 md:border-r border-black flex flex-col">
                  <div className="w-full aspect-[4/5] overflow-hidden bg-[#f4f4f4] border-b border-black">
                    <img src="https://images.unsplash.com/photo-1621360841013-c76831f1b360?auto=format&fit=crop&q=80&w=1200" alt="A Poética do Espaço" className="reveal-img w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-8 md:p-12 3xl:p-16 flex flex-col flex-grow justify-between bg-white">
                    <div>
                      <h3 className="font-serif text-3xl md:text-4xl 3xl:text-5xl mb-4 italic tracking-tight">A Poética do Espaço</h3>
                      <p className="text-xs 3xl:text-sm uppercase tracking-widest font-medium mb-6">Gaston Bachelard</p>
                      <p className="text-sm 3xl:text-base leading-relaxed text-black/70 mb-8 max-w-md">
                        Uma exploração fenomenológica da arquitetura e do espaço íntimo. Encadernação manual em linho cru com costura aparente.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-8 border-t border-black/10">
                      <div className="text-[9px] 3xl:text-[10px] font-mono uppercase text-black/50 tracking-widest">
                        Tiragem: 100 ex.
                      </div>
                      <button className="text-[10px] 3xl:text-xs uppercase tracking-widest font-medium hover:italic transition-all flex items-center gap-2">
                        Adquirir Obra <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Book 2 */}
                <div className="group flex flex-col">
                  <div className="w-full aspect-[4/5] overflow-hidden bg-[#f4f4f4] border-b border-black">
                    <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=1200" alt="Arquitetura da Sombra" className="reveal-img w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-8 md:p-12 3xl:p-16 flex flex-col flex-grow justify-between bg-white">
                    <div>
                      <h3 className="font-serif text-3xl md:text-4xl 3xl:text-5xl mb-4 italic tracking-tight">Arquitetura da Sombra</h3>
                      <p className="text-xs 3xl:text-sm uppercase tracking-widest font-medium mb-6">Jun'ichirō Tanizaki</p>
                      <p className="text-sm 3xl:text-base leading-relaxed text-black/70 mb-8 max-w-md">
                        Um ensaio sobre a estética japonesa e a valorização do escuro. Impresso em papel de algodão 120g com tipografia em chumbo.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-8 border-t border-black/10">
                      <div className="text-[9px] 3xl:text-[10px] font-mono uppercase text-black/50 tracking-widest">
                        Tiragem: 50 ex.
                      </div>
                      <button className="text-[10px] 3xl:text-xs uppercase tracking-widest font-medium hover:italic transition-all flex items-center gap-2">
                        Adquirir Obra <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Publications Index (Table) */}
          <section className="relative grid grid-cols-1 md:grid-cols-4 border-b border-black bg-[#f4f4f4]">
            <NoiseOverlay />
            <div className="p-4 md:p-6 3xl:p-10 border-b md:border-b-0 md:border-r border-black text-[10px] md:text-xs 3xl:text-sm uppercase font-medium">
              Índice de<br/>Publicações
            </div>
            <div className="col-span-1 md:col-span-3 flex flex-col">
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-12 border-b border-black text-[9px] 3xl:text-[10px] uppercase tracking-widest font-medium p-4 3xl:p-8 text-black/50">
                <div className="col-span-1">Ref</div>
                <div className="col-span-5">Título da Obra</div>
                <div className="col-span-4">Autor</div>
                <div className="col-span-2 text-right">Status</div>
              </div>
              
              {/* Table Rows */}
              {[
                { ref: '001', title: 'A Poética do Espaço', author: 'Gaston Bachelard', status: 'Disponível' },
                { ref: '002', title: 'Silêncio Visual', author: 'Coletivo Anônimo', status: 'Esgotado' },
                { ref: '003', title: 'Arquitetura da Sombra', author: "Jun'ichirō Tanizaki", status: 'Disponível' },
                { ref: '004', title: 'O Peso da Tinta', author: 'Helena Martins', status: 'Pré-venda' },
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-12 border-b border-black group cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
                  <div className="col-span-1 p-4 3xl:p-8 md:border-r border-black/20 text-[10px] 3xl:text-xs font-mono">{item.ref}</div>
                  <div className="col-span-5 p-4 3xl:p-8 md:border-r border-black/20 font-serif text-xl md:text-2xl 3xl:text-4xl italic">{item.title}</div>
                  <div className="col-span-4 p-4 3xl:p-8 md:border-r border-black/20 text-xs 3xl:text-sm uppercase tracking-wider flex items-center">{item.author}</div>
                  <div className="col-span-2 p-4 3xl:p-8 text-[10px] 3xl:text-xs uppercase tracking-widest flex justify-between md:justify-end items-center gap-4">
                    <span className={item.status === 'Esgotado' ? 'opacity-50 line-through' : ''}>{item.status}</span>
                    <ArrowUpRight className="w-4 h-4 3xl:w-5 3xl:h-5 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Massive Quote */}
          <section className="relative border-b border-black py-24 md:py-48 3xl:py-64 px-6 md:px-12 3xl:px-24 flex justify-center items-center text-center">
            <NoiseOverlay />
            <h2 className="reveal-text text-4xl md:text-6xl lg:text-8xl 3xl:text-9xl font-serif font-light leading-[1.1] tracking-tight max-w-6xl 3xl:max-w-[120rem]">
              "A materialidade do papel exige uma <span className="italic">leitura lenta</span>. É um antídoto contra a amnésia digital."
            </h2>
          </section>

          {/* Section 4: Featured Content */}
          <section className="grid grid-cols-1 md:grid-cols-4 border-b border-black">
            <div className="p-4 md:p-6 3xl:p-10 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between">
              <div className="text-[10px] md:text-xs 3xl:text-sm uppercase font-medium">Acervo<br/>Visual</div>
              <div className="flex gap-4 mt-8 md:mt-0">
                <div className="w-10 h-10 3xl:w-14 3xl:h-14 border border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-colors">
                  <ArrowLeft className="w-4 h-4 3xl:w-5 3xl:h-5" />
                </div>
                <div className="w-10 h-10 3xl:w-14 3xl:h-14 border border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4 3xl:w-5 3xl:h-5" />
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800', title: 'Arquiteturas Patriarcais' },
                { img: 'https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&q=80&w=800', title: 'A Sutil Arte da Sedução' },
                { img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800', title: 'Uma Quimera de Salto' }
              ].map((item, i) => (
                <div key={i} className={`group cursor-pointer border-b lg:border-b-0 ${i !== 2 ? 'lg:border-r border-black' : ''} p-6 3xl:p-10 flex flex-col`}>
                  <div className="w-full aspect-[3/4] overflow-hidden bg-[#f4f4f4] mb-6 3xl:mb-10">
                    <img src={item.img} className="reveal-img w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex justify-between items-end mt-auto">
                    <p className="text-[10px] 3xl:text-xs uppercase font-medium tracking-wider max-w-[150px] 3xl:max-w-[200px]">{item.title}</p>
                    <span className="text-[9px] 3xl:text-[10px] font-mono border border-black px-2 py-1 3xl:px-4 3xl:py-2 rounded-full group-hover:bg-black group-hover:text-white transition-colors">VER OBRA</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Text Block & Reservations */}
          <section className="grid grid-cols-1 md:grid-cols-4 border-b border-black bg-[#f4f4f4]">
            <div className="p-4 md:p-6 3xl:p-10 border-b md:border-b-0 md:border-r border-black flex flex-col items-start justify-between min-h-[250px] 3xl:min-h-[350px]">
              <div className="text-[10px] md:text-xs 3xl:text-sm uppercase font-medium">
                Visitas em Grupo e<br/>Workshop de Arte
              </div>
              <button className="mt-8 border border-black rounded-full px-8 py-3 3xl:px-12 3xl:py-4 text-[10px] 3xl:text-xs uppercase font-medium hover:bg-black hover:text-white transition-colors tracking-widest">
                AGENDAR VISITA
              </button>
            </div>
            <div className="col-span-1 md:col-span-3 p-8 md:p-16 lg:p-24 3xl:p-32 flex justify-center">
              <p className="reveal-text font-serif text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl leading-[1.4] max-w-4xl 3xl:max-w-6xl text-justify">
                A Editora Formosa foi renomeada para Fundação de Arte Contemporânea como parte do desejo de consolidar todos os interesses em arte e cultura sob uma única rubrica: <span className="italic">Formosa</span>.
                <br/><br/>
                A Fundação continuará sendo uma embaixadora global, mantendo seu compromisso de oferecer exposições, eventos e programas educacionais gratuitos, a fim de garantir a acessibilidade à arte em sua forma mais pura e tátil.
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
