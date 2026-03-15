import { Play } from 'lucide-react';

export function Manifesto() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 border-b border-border">
      <div className="p-4 md:p-6 3xl:p-10 border-b md:border-b-0 md:border-r border-border text-[10px] md:text-xs 3xl:text-sm uppercase font-medium">
        O Manifesto<br/>Digital
      </div>
      <div className="p-4 md:p-6 3xl:p-10 border-b md:border-b-0 md:border-r border-border text-[10px] md:text-xs 3xl:text-sm uppercase font-medium">
        Chamada para originais<br/>Até 15 Setembro, 2026
      </div>
      <div className="col-span-1 md:col-span-2 p-8 md:p-16 3xl:p-24 flex flex-col items-center justify-center">
        <div className="reveal-text w-full max-w-lg 3xl:max-w-2xl text-[10px] md:text-[11px] 3xl:text-xs uppercase text-center mb-16 3xl:mb-24 leading-[1.8] font-medium tracking-wider">
          LEITORES DE TODAS AS IDADES, DE TODOS OS PAÍSES DO MUNDO: VOCÊS SÃO CONVIDADOS A ENVIAR UM TESTAMENTO DE ARTE FEITO PARA SER LIDO.<br/><br/>
          ESCREVA SEU TESTAMENTO EM SEU PRÓPRIO IDIOMA E ESCREVA O QUÃO ABERTAMENTE DESEJAR. O LIVRO NÃO É APENAS UM CONTÊINER DE IDEIAS, MAS UM OBJETO DE PERMANÊNCIA EM UM MUNDO EFÊMERO.
        </div>
        <button 
          className="relative w-full aspect-[16/9] bg-fg cursor-pointer group overflow-hidden border border-border focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/50"
          aria-label="Reproduzir vídeo do manifesto"
        >
          <img 
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1920" 
            alt="Páginas de um livro antigo"
            className="reveal-img w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity grayscale"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 3xl:w-28 3xl:h-28 border border-bg rounded-full flex items-center justify-center group-hover:scale-110 transition-transform bg-fg/20 backdrop-blur-sm">
              <Play className="w-8 h-8 3xl:w-10 3xl:h-10 text-bg fill-white ml-1" aria-hidden="true" />
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}
