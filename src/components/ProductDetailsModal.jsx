import React, { useState } from 'react';
import { X, Clock, Flame, ShieldCheck, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function ProductDetailsModal({ product, onClose }) {
  if (!product) return null;

  const { addToCart } = useCart();
  const { addToast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    addToast(`Added ${quantity} × "${product.name}" to your shopping bag.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-espresso-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-[#FFFEFA] w-full max-w-2xl rounded-luxe overflow-hidden shadow-modal border border-champagne-300/40 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-espresso-950 flex items-center justify-center shadow-md transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left: Product Image */}
          <div className="relative aspect-square md:aspect-auto h-64 md:h-full bg-ivory-200">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80';
              }}
            />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-[2px] bg-espresso-950 text-champagne-300 text-[10px] uppercase tracking-wider font-semibold shadow-sm">
                {product.badge}
              </span>
            )}
          </div>

          {/* Right: Product Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block w-3 h-3 rounded-full ${
                      product.isVeg ? 'bg-emerald-600' : 'bg-rose-700'
                    }`}
                  />
                  <span className="text-[11px] uppercase tracking-luxury text-taupe-500 font-medium">
                    {product.isVeg ? 'Vegetarian' : 'Contains Poultry'}
                  </span>
                </div>
                <span className="text-xs text-taupe-400 font-light">★ {product.rating}</span>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-espresso-950">
                  {product.name}
                </h2>
                <span className="font-sans text-xl font-semibold text-espresso-950 mt-1 block">
                  ₹{product.price}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-taupe-600 font-light leading-relaxed">
                {product.detailedDescription || product.description}
              </p>

              {/* Meta details */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-espresso-800">
                <div className="flex items-center gap-2 p-2.5 rounded-luxe bg-ivory-100 border border-champagne-300/30">
                  <Clock className="w-4 h-4 text-champagne-500" />
                  <span>Prep: {product.prepTime}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-luxe bg-ivory-100 border border-champagne-300/30">
                  <Flame className="w-4 h-4 text-champagne-500" />
                  <span>{product.calories}</span>
                </div>
              </div>

              {/* Ingredients */}
              {product.ingredients && (
                <div className="pt-2">
                  <span className="text-[10px] uppercase tracking-luxury text-taupe-500 font-bold block mb-1.5">
                    Artisan Ingredients
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.ingredients.map((ing, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-ivory-100 text-espresso-900 rounded-[2px] text-[10px] font-medium border border-champagne-300/30"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Quantity Selector & Add Button */}
            <div className="pt-4 border-t border-ivory-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-luxury text-espresso-900 font-medium">Quantity</span>
                <div className="flex items-center border border-champagne-300/60 rounded-luxe bg-ivory-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-champagne-100 text-espresso-950 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center font-sans font-semibold text-xs text-espresso-950">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-champagne-100 text-espresso-950 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full py-3.5 rounded-luxe bg-espresso-950 hover:bg-espresso-900 text-softwhite text-xs uppercase tracking-luxury font-medium transition-all shadow-subtle flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                <ShoppingBag className="w-4 h-4 text-champagne-300" />
                <span>Add to Bag — ₹{product.price * quantity}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

