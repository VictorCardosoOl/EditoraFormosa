import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { useTranslation } from 'react-i18next';

export default function CartSidebar() {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, totalItems, totalPrice } = useCartStore();
  const { t } = useTranslation();

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-fg/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleCart}
      />

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-bg z-[70] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest font-medium">{t('cart.title')} ({totalItems})</span>
          </div>
          <button onClick={toggleCart} className="p-2 hover:bg-fg hover:text-bg transition-colors rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-fg/50">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
              <p className="text-xs uppercase tracking-widest">{t('cart.empty')}</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-border/10 pb-6">
                <div className="w-20 aspect-[3/4] bg-muted overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif italic text-lg leading-tight">{item.title}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-fg/50 mt-1">{item.author}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-border rounded-full overflow-hidden">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 hover:bg-fg hover:text-bg transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-[10px] font-mono px-2">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-fg hover:text-bg transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="font-mono text-xs">R$ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)} className="self-start p-1 text-fg/30 hover:text-fg transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-muted">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs uppercase tracking-widest font-medium">{t('cart.subtotal')}</span>
              <span className="font-mono text-sm">R$ {totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-fg text-bg py-4 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-bg hover:text-fg border border-border transition-colors">
              {t('cart.checkout')}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
