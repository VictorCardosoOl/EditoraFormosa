import { Plus } from 'lucide-react';

export function Header() {
  return (
    <header className="grid grid-cols-1 md:grid-cols-4 border-b border-border text-[10px] md:text-xs 3xl:text-sm uppercase tracking-wider font-medium sticky top-0 bg-bg z-50">
      <nav aria-label="Main Navigation" className="contents">
        <button 
          className="p-4 md:p-5 3xl:p-8 border-b md:border-b-0 md:border-r border-border flex items-center justify-between group cursor-pointer hover:bg-fg hover:text-bg transition-colors w-full text-left"
          aria-label="Toggle Menu"
          aria-expanded="false"
        >
          <span>Editora da Villa</span>
          <Plus className="w-4 h-4 3xl:w-5 3xl:h-5 group-hover:rotate-90 transition-transform" />
        </button>
        <div className="p-4 md:p-5 3xl:p-8 border-b md:border-b-0 md:border-r border-border hidden md:flex items-center">
          The instructions of the press<br/>The art of bookmaking
        </div>
        <div className="p-4 md:p-5 3xl:p-8 border-b md:border-b-0 md:border-r border-border hidden md:flex items-center">
          25.04.2026<br/>— 15.09.2026
        </div>
        <div className="p-4 md:p-5 3xl:p-8 flex justify-between items-center">
          <span className="hidden lg:inline">Fundação para a arte contemporânea</span>
          <span className="lg:hidden">Fundação Villa</span>
          <span className="border border-border px-2 py-1 3xl:px-3 3xl:py-1.5 rounded-full text-[9px] 3xl:text-[10px]" aria-label="Current Language: Portuguese">PT</span>
        </div>
      </nav>
    </header>
  );
}
