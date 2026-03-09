import { ArrowRight, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white/80 overflow-hidden border-t border-black">
      
      {/* 1. Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none z-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 2. Massive Background Typography */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none flex justify-center translate-y-[20%] z-0">
        <span className="font-serif text-[18vw] leading-none text-white/[0.03] whitespace-nowrap tracking-tighter">
          VILLA
        </span>
      </div>

      {/* 3. Main Grid Layout */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Col 1: Identity */}
        <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-between min-h-[350px]">
          <div>
            <h3 className="font-serif text-4xl text-white tracking-tight">Fundação Villa</h3>
            <p className="font-serif italic text-white/60 mt-6 text-xl leading-relaxed">
              A arte da encadernação manual e o peso da palavra impressa.
            </p>
          </div>
          <div className="text-[9px] md:text-[10px] 3xl:text-xs uppercase tracking-widest mt-12 text-white/50 font-medium">
            Est. 2026
          </div>
        </div>

        {/* Col 2: Local / CTA */}
        <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 lg:border-r border-white/20 flex flex-col justify-between min-h-[350px]">
          <div>
            <div className="text-[9px] md:text-[10px] 3xl:text-xs uppercase tracking-widest mb-8 text-white/50 font-medium">Localização</div>
            <p className="text-sm leading-loose text-white/80">
              Rua da Matriz, 42<br />
              São Paulo SP 01000-000<br />
              Brasil
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-3 text-[10px] 3xl:text-xs uppercase tracking-widest text-white hover:text-white/70 transition-colors mt-12 group w-fit font-medium">
            Agendar Visita 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>

        {/* Col 3: Social */}
        <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 lg:border-r border-white/20 flex flex-col justify-between min-h-[350px]">
          <div>
            <div className="text-[9px] md:text-[10px] 3xl:text-xs uppercase tracking-widest mb-8 text-white/50 font-medium">Conectar</div>
            <div className="flex flex-col gap-5">
              <a href="#" className="inline-flex items-center gap-4 text-sm hover:text-white transition-colors group w-fit text-white/80">
                <Instagram className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" /> 
                <span className="group-hover:translate-x-1 transition-transform duration-300">Instagram</span>
              </a>
              <a href="#" className="inline-flex items-center gap-4 text-sm hover:text-white transition-colors group w-fit text-white/80">
                <Twitter className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" /> 
                <span className="group-hover:translate-x-1 transition-transform duration-300">Twitter (X)</span>
              </a>
              <a href="#" className="inline-flex items-center gap-4 text-sm hover:text-white transition-colors group w-fit text-white/80">
                <Linkedin className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" /> 
                <span className="group-hover:translate-x-1 transition-transform duration-300">LinkedIn</span>
              </a>
            </div>
          </div>
          <a href="mailto:info@fundacaovilla.org" className="inline-flex items-center gap-3 text-[10px] 3xl:text-xs uppercase tracking-widest mt-12 hover:text-white transition-colors group w-fit font-medium text-white/80">
            <Mail className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
            info@fundacaovilla.org
          </a>
        </div>

        {/* Col 4: Menu / Credits */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[350px]">
          <div>
            <div className="text-[9px] md:text-[10px] 3xl:text-xs uppercase tracking-widest mb-8 text-white/50 font-medium">Navegação</div>
            <nav className="flex flex-col gap-4">
              {['O Manifesto', 'Acervo Visual', 'Lançamentos', 'Reservas', 'Termos de Uso'].map((link) => (
                <a 
                  href="#" 
                  key={link} 
                  className="text-sm text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2 w-fit"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
          <div className="text-[9px] md:text-[10px] 3xl:text-xs uppercase tracking-widest mt-12 text-white/40 flex flex-col gap-2 font-medium">
            <span>© 2026 Fundação Villa</span>
            <span>Design por Especialista UX</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
