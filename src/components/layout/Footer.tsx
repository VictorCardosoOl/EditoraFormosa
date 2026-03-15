import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && href !== '#') {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const socialLinks = [
    { name: 'Instagram', tooltip: 'Visit our Instagram', url: '#' },
    { name: 'Twitter (X)', tooltip: 'Visit our Twitter', url: '#' },
    { name: 'LinkedIn', tooltip: 'Visit our LinkedIn', url: '#' }
  ];

  const navLinks = [
    { name: 'O Manifesto', href: '#manifesto' },
    { name: 'Lançamentos', href: '#lancamentos' },
    { name: 'Acervo Visual', href: '#acervo' },
    { name: 'Reservas', href: '#reservas' },
    { name: 'Termos de Uso', href: '#' }
  ];

  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden border-t border-black">
      
      {/* 1. Noise Texture Overlay - More prominent for brutalism */}
      <div className="absolute inset-0 opacity-[0.12] mix-blend-screen pointer-events-none z-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 2. Massive Background Typography */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none flex justify-center translate-y-[25%] z-0 opacity-20">
        <span className="font-serif text-[22vw] leading-none text-white/[0.05] whitespace-nowrap tracking-tighter">
          FORMOSA
        </span>
      </div>

      {/* 3. Main Grid Layout - Stark borders for brutalism */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Col 1: Identity */}
        <div className="p-8 md:p-12 lg:p-16 3xl:p-24 border-b md:border-b-0 md:border-r border-white/15 flex flex-col justify-between min-h-[400px] 3xl:min-h-[500px]">
          <div>
            <h3 className="font-serif text-4xl md:text-5xl 3xl:text-6xl text-white tracking-tight font-light">Fundação<br/>Formosa</h3>
            <p className="font-serif italic text-white/50 mt-8 text-lg 3xl:text-xl leading-relaxed max-w-xs">
              A arte da encadernação manual e o peso da palavra impressa.
            </p>
          </div>
          <div className="text-[10px] 3xl:text-xs uppercase tracking-[0.2em] mt-12 text-white/40 font-medium">
            Est. 2026
          </div>
        </div>

        {/* Col 2: Local / CTA */}
        <div className="p-8 md:p-12 lg:p-16 3xl:p-24 border-b md:border-b-0 lg:border-r border-white/15 flex flex-col justify-between min-h-[400px] 3xl:min-h-[500px]">
          <div>
            <div className="text-[10px] 3xl:text-xs uppercase tracking-[0.2em] mb-10 text-white/40 font-medium">Localização</div>
            <p className="text-sm 3xl:text-base leading-loose text-white/80 font-mono uppercase tracking-wide">
              Rua da Matriz, 42<br />
              São Paulo SP<br />
              01000-000<br />
              Brasil
            </p>
          </div>
          <a href="#" className="group inline-flex items-center justify-between border-b border-white/20 pb-4 mt-12 hover:border-white transition-colors w-full">
            <span className="text-[10px] 3xl:text-xs uppercase tracking-[0.2em] text-white font-medium">Agendar Visita</span>
            <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
          </a>
        </div>

        {/* Col 3: Social */}
        <div className="p-8 md:p-12 lg:p-16 3xl:p-24 border-b md:border-b-0 lg:border-r border-white/15 flex flex-col justify-between min-h-[400px] 3xl:min-h-[500px]">
          <div>
            <div className="text-[10px] 3xl:text-xs uppercase tracking-[0.2em] mb-10 text-white/40 font-medium">Conectar</div>
            <div className="flex flex-col gap-0">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.url} className="group relative flex items-center justify-between border-b border-white/10 py-4 hover:border-white transition-colors">
                  <span className="text-xs 3xl:text-sm uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">{social.name}</span>
                  {/* Tooltip */}
                  <span className="absolute left-1/3 bottom-full mb-2 bg-white text-black text-[9px] 3xl:text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 translate-y-2 group-hover:translate-y-0">
                    {social.tooltip}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
          <a href="mailto:info@fundacaoformosa.org" className="group flex items-center justify-between border-b border-white/20 pb-4 mt-12 hover:border-white transition-colors w-full">
            <span className="text-[10px] 3xl:text-xs uppercase tracking-[0.2em] text-white font-medium">Email Us</span>
            <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </a>
        </div>

        {/* Col 4: Menu / Credits */}
        <div className="p-8 md:p-12 lg:p-16 3xl:p-24 flex flex-col justify-between min-h-[400px] 3xl:min-h-[500px]">
          <div>
            <div className="text-[10px] 3xl:text-xs uppercase tracking-[0.2em] mb-10 text-white/40 font-medium">Navegação</div>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  href={link.href} 
                  key={link.name} 
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-sm 3xl:text-base text-white/60 hover:text-white transition-all duration-300 hover:translate-x-2 w-fit font-serif italic"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="text-[9px] 3xl:text-[10px] uppercase tracking-[0.2em] mt-12 text-white/30 flex flex-col gap-3 font-medium">
            <span>© 2026 Fundação Formosa</span>
            <span>Design por Especialista UX</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
