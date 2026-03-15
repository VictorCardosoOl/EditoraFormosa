import { ArrowLeft, ArrowRight } from 'lucide-react';

export function Featured() {
  const items = [
    { img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800', title: 'Arquiteturas Patriarcais' },
    { img: 'https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&q=80&w=800', title: 'A Sutil Arte da Sedução' },
    { img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800', title: 'Uma Quimera de Salto' }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 border-b border-border">
      <div className="p-4 md:p-6 3xl:p-10 border-b md:border-b-0 md:border-r border-border flex flex-col justify-between">
        <div className="text-[10px] md:text-xs 3xl:text-sm uppercase font-medium">Acervo<br/>Visual</div>
        <div className="flex gap-4 mt-8 md:mt-0">
          <button className="w-10 h-10 3xl:w-14 3xl:h-14 border border-border rounded-full flex items-center justify-center cursor-pointer hover:bg-fg hover:text-bg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black" aria-label="Anterior">
            <ArrowLeft className="w-4 h-4 3xl:w-5 3xl:h-5" />
          </button>
          <button className="w-10 h-10 3xl:w-14 3xl:h-14 border border-border rounded-full flex items-center justify-center cursor-pointer hover:bg-fg hover:text-bg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black" aria-label="Próximo">
            <ArrowRight className="w-4 h-4 3xl:w-5 3xl:h-5" />
          </button>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <a key={i} href="#" className={`group cursor-pointer border-b lg:border-b-0 ${i !== 2 ? 'lg:border-r border-border' : ''} p-6 3xl:p-10 flex flex-col focus-visible:outline-none focus-visible:bg-fg/5`}>
            <div className="w-full aspect-[3/4] overflow-hidden bg-muted mb-6 3xl:mb-10">
              <img 
                src={item.img} 
                alt={`Capa da obra ${item.title}`}
                className="reveal-img w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="flex justify-between items-end mt-auto">
              <p className="text-[10px] 3xl:text-xs uppercase font-medium tracking-wider max-w-[150px] 3xl:max-w-[200px]">{item.title}</p>
              <span className="text-[9px] 3xl:text-[10px] font-mono border border-border px-2 py-1 3xl:px-4 3xl:py-2 rounded-full group-hover:bg-fg group-hover:text-bg transition-colors">VER OBRA</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
