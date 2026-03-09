import { ArrowRight, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-stone-950 text-stone-400 overflow-hidden border-t border-stone-900">
      
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
        <span className="font-serif text-[18vw] leading-none text-stone-900/50 whitespace-nowrap tracking-tighter">
          VILLA
        </span>
      </div>

      {/* 3. Main Grid Layout */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Col 1: Identity */}
        <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-stone-800/50 flex flex-col justify-between min-h-[350px]">
          <div>
            <h3 className="font-serif text-4xl text-stone-200 tracking-tight">Fundação Villa</h3>
            <p className="font-serif italic text-stone-500 mt-6 text-xl leading-relaxed">
              A arte da encadernação manual e o peso da palavra impressa.
            </p>
          </div>
          <div className="text-[10px] uppercase tracking-widest mt-12 text-stone-500">
            Est. 2026
          </div>
        </div>

        {/* Col 2: Local / CTA */}
        <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 lg:border-r border-stone-800/50 flex flex-col justify-between min-h-[350px]">
          <div>
            <div className="text-[10px] uppercase tracking-widest mb-8 text-stone-500">Localização</div>
            <p className="text-sm leading-loose text-stone-300">
              Rua da Matriz, 42<br />
              São Paulo SP 01000-000<br />
              Brasil
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-stone-200 hover:text-white transition-colors mt-12 group w-fit">
            Agendar Visita 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>

        {/* Col 3: Social */}
        <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 lg:border-r border-stone-800/50 flex flex-col justify-between min-h-[350px]">
          <div>
            <div className="text-[10px] uppercase tracking-widest mb-8 text-stone-500">Conectar</div>
            <div className="flex flex-col gap-5">
              <a href="#" className="inline-flex items-center gap-4 text-sm hover:text-white transition-colors group w-fit">
                <Instagram className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" /> 
                <span className="group-hover:translate-x-1 transition-transform duration-300">Instagram</span>
              </a>
              <a href="#" className="inline-flex items-center gap-4 text-sm hover:text-white transition-colors group w-fit">
                <Twitter className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" /> 
                <span className="group-hover:translate-x-1 transition-transform duration-300">Twitter (X)</span>
              </a>
              <a href="#" className="inline-flex items-center gap-4 text-sm hover:text-white transition-colors group w-fit">
                <Linkedin className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" /> 
                <span className="group-hover:translate-x-1 transition-transform duration-300">LinkedIn</span>
              </a>
            </div>
          </div>
          <a href="mailto:info@fundacaovilla.org" className="inline-flex items-center gap-3 text-xs tracking-widest mt-12 hover:text-white transition-colors group w-fit">
            <Mail className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
            info@fundacaovilla.org
          </a>
        </div>

        {/* Col 4: Menu / Credits */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[350px]">
          <div>
            <div className="text-[10px] uppercase tracking-widest mb-8 text-stone-500">Navegação</div>
            <nav className="flex flex-col gap-4">
              {['O Manifesto', 'Acervo Visual', 'Lançamentos', 'Reservas', 'Termos de Uso'].map((link) => (
                <a 
                  href="#" 
                  key={link} 
                  className="text-sm text-stone-300 hover:text-white transition-all duration-300 hover:translate-x-2 w-fit"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
          <div className="text-[10px] uppercase tracking-widest mt-12 text-stone-600 flex flex-col gap-2">
            <span>© 2026 Fundação Villa</span>
            <span>Design por Especialista UX</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
