import React from 'react';
import { Plus, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    addToast(`Added "${product.name}" to your shopping bag.`);
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative bg-[#FFFEFA] border border-[#D9C6A5]/40 rounded-luxe overflow-hidden shadow-subtle hover:shadow-card transition-editorial cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Product Photograph with zoom */}
        <div className="relative aspect-[4/3] overflow-hidden bg-ivory-200">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80';
            }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            {product.badge && (
              <span className="px-2.5 py-1 rounded-[2px] bg-espresso-950/90 text-champagne-200 text-[10px] uppercase tracking-wider font-semibold backdrop-blur-sm">
                {product.badge}
              </span>
            )}
          </div>

          {/* Dietary Indicator (Veg/Non-Veg) */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-[2px] shadow-sm">
            <span
              className={`block w-2.5 h-2.5 rounded-full ${
                product.isVeg ? 'bg-emerald-600 ring-2 ring-emerald-100' : 'bg-rose-700 ring-2 ring-rose-100'
              }`}
              title={product.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
            />
          </div>

          {/* Quick View Button on Hover */}
          <div className="absolute inset-0 bg-espresso-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-3.5 py-1.5 rounded-luxe bg-softwhite text-espresso-950 text-xs uppercase tracking-luxury font-medium shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Eye className="w-3.5 h-3.5" /> Quick View
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-2">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-serif text-lg sm:text-xl font-normal text-espresso-950 group-hover:text-walnut-700 transition-colors line-clamp-1">
              {product.name}
            </h3>
            <span className="font-sans font-semibold text-sm sm:text-base text-espresso-950 shrink-0">
              ₹{product.price}
            </span>
          </div>

          <p className="text-xs text-taupe-500 font-light leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 pb-5 pt-1 border-t border-ivory-200/60 flex items-center justify-between text-xs text-taupe-400">
        <span className="font-light text-[11px]">{product.prepTime}</span>
        
        <button
          onClick={handleAdd}
          className="px-3.5 py-1.5 rounded-luxe bg-ivory-200/80 hover:bg-espresso-950 hover:text-softwhite text-espresso-950 text-xs font-medium tracking-luxury uppercase transition-all flex items-center gap-1 shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add to Bag</span>
        </button>
      </div>
    </div>
  );
}

