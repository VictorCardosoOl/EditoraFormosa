import { Button } from '../ui/Button';

export function Reservations() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 border-b border-border bg-muted">
      <div className="p-4 md:p-6 3xl:p-10 border-b md:border-b-0 md:border-r border-border flex flex-col items-start justify-between min-h-[250px] 3xl:min-h-[350px]">
        <div className="text-[10px] md:text-xs 3xl:text-sm uppercase font-medium">
          Visitas em Grupo e<br/>Workshop de Arte
        </div>
        <Button className="mt-8">
          AGENDAR VISITA
        </Button>
      </div>
      <div className="col-span-1 md:col-span-3 p-8 md:p-16 lg:p-24 3xl:p-32 flex justify-center">
        <p className="reveal-text font-serif text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl leading-[1.4] max-w-4xl 3xl:max-w-6xl text-justify">
          A Editora da Villa foi renomeada para Fundação de Arte Contemporânea como parte do desejo de consolidar todos os interesses em arte e cultura sob uma única rubrica: <span className="italic">Villa</span>.
          <br/><br/>
          A Fundação continuará sendo uma embaixadora global, mantendo seu compromisso de oferecer exposições, eventos e programas educacionais gratuitos, a fim de garantir a acessibilidade à arte em sua forma mais pura e tátil.
        </p>
      </div>
    </section>
  );
}
