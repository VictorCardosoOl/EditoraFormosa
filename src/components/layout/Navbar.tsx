import { Plus } from 'lucide-react';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Navbar() {
  const { scrollDirection, isAtTop } = useScrollDirection();
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.nav-logo', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2
    });
  }, { scope: navRef });

  // Hide the navbar if scrolling down and not at the top
  const isHidden = scrollDirection === 'down' && !isAtTop;

  return (
    <header 
      ref={navRef}
      className={`grid grid-cols-1 md:grid-cols-4 border-b border-black text-[10px] md:text-xs 3xl:text-sm uppercase tracking-wider font-medium sticky top-0 bg-white z-50 transition-transform duration-300 ease-in-out ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="p-4 md:p-5 3xl:p-8 border-b md:border-b-0 md:border-r border-black flex items-center justify-between group cursor-pointer hover:bg-black hover:text-white transition-colors">
        <span className="nav-logo inline-block">Editora Formosa</span>
        <Plus className="w-4 h-4 3xl:w-5 3xl:h-5 group-hover:rotate-90 transition-transform" />
      </div>
      <div className="p-4 md:p-5 3xl:p-8 border-b md:border-b-0 md:border-r border-black hidden md:flex items-center">
        The instructions of the press<br/>The art of bookmaking
      </div>
      <div className="p-4 md:p-5 3xl:p-8 border-b md:border-b-0 md:border-r border-black hidden md:flex items-center">
        25.04.2026<br/>— 15.09.2026
      </div>
      <div className="p-4 md:p-5 3xl:p-8 flex justify-between items-center">
        <span className="hidden lg:inline">Fundação para a arte contemporânea</span>
        <span className="lg:hidden">Fundação Formosa</span>
        <span className="border border-black px-2 py-1 3xl:px-3 3xl:py-1.5 rounded-full text-[9px] 3xl:text-[10px]">PT</span>
      </div>
    </header>
  );
}
