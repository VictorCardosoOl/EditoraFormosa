import { Plus, ShoppingBag, Moon, Sun } from 'lucide-react';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState, useEffect } from 'react';
import { useCartStore } from '../../store/useCartStore';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { scrollDirection, isAtTop } = useScrollDirection();
  const navRef = useRef<HTMLElement>(null);
  const { totalItems, toggleCart } = useCartStore();
  const [isDark, setIsDark] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt');
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set('.nav-logo', { y: 0, opacity: 1 });
      return;
    }

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
      className={`grid grid-cols-1 md:grid-cols-4 border-b border-border text-[10px] md:text-xs 3xl:text-sm uppercase tracking-wider font-medium sticky top-0 bg-bg z-50 transition-transform duration-300 ease-in-out ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="p-4 md:p-5 3xl:p-8 border-b md:border-b-0 md:border-r border-border flex items-center justify-between group cursor-pointer hover:bg-fg hover:text-bg transition-colors">
        <span className="nav-logo inline-block">{t('nav.title')}</span>
        <Plus className="w-4 h-4 3xl:w-5 3xl:h-5 group-hover:rotate-90 transition-transform" />
      </div>
      <div className="p-4 md:p-5 3xl:p-8 border-b md:border-b-0 md:border-r border-border hidden md:flex items-center whitespace-pre-line">
        {t('nav.subtitle')}
      </div>
      <div className="p-4 md:p-5 3xl:p-8 border-b md:border-b-0 md:border-r border-border hidden md:flex items-center whitespace-pre-line">
        {t('nav.dates')}
      </div>
      <div className="p-4 md:p-5 3xl:p-8 flex justify-between items-center gap-4">
        <span className="hidden lg:inline">{t('nav.foundation')}</span>
        <span className="lg:hidden">{t('nav.foundation_short')}</span>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDark(!isDark)} className="flex items-center gap-2 hover:opacity-70 transition-opacity" aria-label="Toggle Dark Mode">
            {isDark ? <Sun className="w-4 h-4 3xl:w-5 3xl:h-5" /> : <Moon className="w-4 h-4 3xl:w-5 3xl:h-5" />}
          </button>
          <button onClick={toggleCart} className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <ShoppingBag className="w-4 h-4 3xl:w-5 3xl:h-5" />
            {totalItems > 0 && (
              <span className="bg-fg text-bg text-[9px] 3xl:text-[10px] w-4 h-4 3xl:w-5 3xl:h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button onClick={toggleLanguage} className="border border-border px-2 py-1 3xl:px-3 3xl:py-1.5 rounded-full text-[9px] 3xl:text-[10px] hover:bg-fg hover:text-bg transition-colors">
            {t('nav.lang')}
          </button>
        </div>
      </div>
    </header>
  );
}
