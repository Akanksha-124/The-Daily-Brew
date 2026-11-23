import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, Tag, ShoppingBag, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    totalItemsCount,
    subtotal,
    gstRate,
    gstAmount,
    deliveryFee,
    coupon,
    couponError,
    applyCoupon,
    removeCoupon,
    discountAmount,
    grandTotal,
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');

  if (!isOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (applyCoupon(inputCoupon)) {
      setInputCoupon('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-espresso-950/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFEFA] shadow-modal border-l border-champagne-300/40 flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-ivory-200 flex items-center justify-between bg-ivory-50">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-espresso-950" />
              <div>
                <h3 className="font-serif text-xl font-normal text-espresso-950">Your Shopping Bag</h3>
                <span className="text-[10px] uppercase tracking-luxury text-taupe-500 font-sans block">
                  {totalItemsCount} {totalItemsCount === 1 ? 'Creation' : 'Creations'} Selected
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-ivory-200 text-espresso-950 transition-colors"
              aria-label="Close Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Bag Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-ivory-200">
            {cartItems.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-ivory-200/80 mx-auto flex items-center justify-center text-taupe-400">
                  <ShoppingBag className="w-8 h-8 stroke-[1.2]" />
                </div>
                <h4 className="font-serif text-xl text-espresso-950">Your Bag is Empty</h4>
                <p className="text-xs text-taupe-500 font-light max-w-xs mx-auto">
                  Immerse yourself in our collection of single-origin roasts, artisan pastas, and French viennoiserie.
                </p>
                <div className="pt-2">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-luxe bg-espresso-950 text-softwhite text-xs uppercase tracking-luxury font-medium"
                  >
                    Browse Collections
                  </button>
                </div>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="py-4 flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-[4px] object-cover bg-ivory-200 shrink-0 border border-ivory-300"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-base font-normal text-espresso-950 truncate">
                      {item.name}
                    </h4>
                    <span className="text-xs font-semibold text-espresso-900 block mt-0.5">
                      ₹{item.price} each
                    </span>
                    
                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-champagne-300/60 rounded-[2px] bg-ivory-50">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-champagne-100 text-espresso-950 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center font-sans font-semibold text-xs text-espresso-950">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-champagne-100 text-espresso-950 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-taupe-400 hover:text-red-700 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <span className="font-sans font-semibold text-sm text-espresso-950 shrink-0">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* Footer & Calculations */}
          {cartItems.length > 0 && (
            <div className="border-t border-ivory-200 bg-ivory-50/70 p-6 space-y-4">
              
              {/* Promo Code Input */}
              <div>
                {coupon ? (
                  <div className="flex items-center justify-between p-2.5 rounded-luxe bg-emerald-50 border border-emerald-200 text-xs text-emerald-950">
                    <div className="flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="font-semibold">{coupon.code}</span>
                      <span className="text-emerald-700 font-light">({coupon.description})</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-xs text-red-700 hover:underline font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Privilege Code (BREW10 or FIRST50)"
                      value={inputCoupon}
                      onChange={(e) => setInputCoupon(e.target.value)}
                      className="flex-1 px-3.5 py-2 rounded-luxe bg-white border border-champagne-300/70 text-xs text-espresso-950 placeholder-taupe-400 focus:outline-none focus:border-espresso-950"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-luxe bg-espresso-900 text-softwhite text-xs uppercase tracking-luxury font-medium hover:bg-espresso-950 transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponError && (
                  <p className="text-[11px] text-red-600 mt-1 font-medium">{couponError}</p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-taupe-600 font-light">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-espresso-950">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (5% Hospitality Tax)</span>
                  <span className="font-medium text-espresso-950">₹{gstAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>White-Glove Delivery</span>
                  <span className="font-medium text-espresso-950">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-700 font-medium">Complimentary</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>
                {deliveryFee > 0 && (
                  <p className="text-[10px] text-taupe-500 italic">
                    Add ₹{500 - subtotal} more for complimentary delivery.
                  </p>
                )}
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-medium">
                    <span>Privilege Savings</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-champagne-300/40 text-sm font-semibold text-espresso-950 font-sans">
                  <span>Final Total</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>

              {/* Proceed to Checkout */}
              <Link
                to="/checkout"
                onClick={onClose}
                className="w-full py-3.5 rounded-luxe bg-espresso-950 hover:bg-espresso-900 text-softwhite text-xs uppercase tracking-luxury font-medium transition-all shadow-subtle flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 text-champagne-300" />
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

