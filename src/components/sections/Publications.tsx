import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function Publications() {
  const publications = [
    { ref: '001', title: 'A Poética do Espaço', author: 'Gaston Bachelard', status: 'Disponível', action: 'Comprar' },
    { ref: '002', title: 'Silêncio Visual', author: 'Coletivo Anônimo', status: 'Esgotado', action: 'Waitlist' },
    { ref: '003', title: 'Arquitetura da Sombra', author: "Jun'ichirō Tanizaki", status: 'Disponível', action: 'Comprar' },
    { ref: '004', title: 'O Peso da Tinta', author: 'Helena Martins', status: 'Pré-venda', action: 'Reservar' },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 border-b border-border bg-muted">
      <div className="p-4 md:p-6 3xl:p-10 border-b md:border-b-0 md:border-r border-border text-[10px] md:text-xs 3xl:text-sm uppercase font-medium">
        Índice de<br/>Publicações
      </div>
      <div className="col-span-1 md:col-span-3 flex flex-col overflow-x-auto">
        <div className="min-w-[800px] md:min-w-0">
          {/* Table Header */}
          <div className="grid grid-cols-12 border-b border-border text-[9px] 3xl:text-[10px] uppercase tracking-widest font-medium p-4 3xl:p-8 text-fg/50">
            <div className="col-span-1">Ref</div>
            <div className="col-span-5">Título da Obra</div>
            <div className="col-span-3">Autor</div>
            <div className="col-span-3 text-right">Status</div>
          </div>
          
          {/* Table Rows */}
          {publications.map((item, i) => (
            <div key={i} className="grid grid-cols-12 border-b border-border group hover:bg-fg hover:text-bg transition-colors duration-300">
              <div className="col-span-1 p-4 3xl:p-8 border-r border-border/20 text-[10px] 3xl:text-xs font-mono flex items-center">{item.ref}</div>
              <div className="col-span-5 p-4 3xl:p-8 border-r border-border/20 font-serif text-xl md:text-2xl 3xl:text-4xl italic flex items-center">{item.title}</div>
              <div className="col-span-3 p-4 3xl:p-8 border-r border-border/20 text-xs 3xl:text-sm uppercase tracking-wider flex items-center">{item.author}</div>
              <div className="col-span-3 p-4 3xl:p-8 text-[10px] 3xl:text-xs uppercase tracking-widest flex justify-between items-center gap-4">
                <span className={item.status === 'Esgotado' ? 'opacity-50 line-through' : ''}>{item.status}</span>
                
                {/* Ação de Conversão */}
                <div className="flex items-center gap-4">
                  <Button 
                    variant={item.status === 'Esgotado' ? 'ghost' : 'outline'} 
                    size="sm" 
                    className={`opacity-0 group-hover:opacity-100 transition-opacity ${item.status === 'Esgotado' ? 'border-bg/20 text-bg/50 hover:bg-bg/10' : 'border-bg text-bg hover:bg-bg hover:text-fg'}`}
                  >
                    {item.action}
                  </Button>
                  <ArrowUpRight className="w-4 h-4 3xl:w-5 3xl:h-5 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block" aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
