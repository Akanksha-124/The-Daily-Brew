import React from 'react';
import { Gift, CheckCircle2, ArrowRight } from 'lucide-react';
import { SPECIAL_OFFERS } from '../data/menuData';
import { Link } from 'react-router-dom';

export default function OffersPage() {
  return (
    <div className="min-h-screen pb-24 bg-[#F7F3EB]">
      
      {/* Header */}
      <div className="bg-espresso-950 text-softwhite py-16 sm:py-24 relative overflow-hidden text-center border-b border-espresso-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-luxury text-champagne-300 font-semibold inline-block">
            PRIVILEGES & COMBOS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-softwhite">
            Special Offers & Combos
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-taupe-300 font-light leading-relaxed">
            Curated pairings and privilege discounts tailored for your daily morning espresso, midday meetings, and weekend patisserie indulgences.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        
        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPECIAL_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-luxe overflow-hidden border border-champagne-300/40 shadow-subtle hover:shadow-card transition-editorial flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-ivory-200">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <span className="inline-block px-2.5 py-1 rounded-[2px] bg-champagne-200/80 text-espresso-950 text-[10px] uppercase tracking-luxury font-semibold">
                    {offer.badge}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-espresso-950">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-taupe-600 font-light leading-relaxed">
                    {offer.subtitle}
                  </p>
                  <div className="p-2.5 rounded-[2px] bg-ivory-100 border border-champagne-300/30 text-xs text-espresso-900 font-semibold">
                    Privilege Code: <span className="text-champagne-600 font-bold">{offer.code}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  to="/menu"
                  className="w-full py-2.5 rounded-luxe bg-espresso-950 hover:bg-espresso-900 text-softwhite text-xs uppercase tracking-luxury font-medium transition-all shadow-subtle flex items-center justify-center gap-2"
                >
                  <span>Order and Apply Code</span>
                  <ArrowRight className="w-3.5 h-3.5 text-champagne-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* How to Redeem Privilege Codes */}
        <div className="bg-white rounded-luxe p-8 sm:p-12 border border-champagne-300/40 shadow-card">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs uppercase tracking-luxury text-champagne-600 font-semibold block">
              EFFORTLESS REDEMPTION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-espresso-950">
              How to Apply Your Privileges
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="font-serif text-3xl text-champagne-500 font-normal">01</span>
              <h4 className="font-serif text-lg text-espresso-950 font-normal">Select Your Creations</h4>
              <p className="text-xs text-taupe-500 font-light leading-relaxed">
                Browse our specialty coffees, artisanal pastas, and morning bakery items and add them to your shopping bag.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-serif text-3xl text-champagne-500 font-normal">02</span>
              <h4 className="font-serif text-lg text-espresso-950 font-normal">Enter Privilege Code</h4>
              <p className="text-xs text-taupe-500 font-light leading-relaxed">
                In your Shopping Bag or Checkout summary, type <strong>BREW10</strong> for 10% off or <strong>FIRST50</strong> for ₹50 off above ₹299.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-serif text-3xl text-champagne-500 font-normal">03</span>
              <h4 className="font-serif text-lg text-espresso-950 font-normal">Enjoy Your Little Luxury</h4>
              <p className="text-xs text-taupe-500 font-light leading-relaxed">
                Your discount applies instantly to your final total. Savor every single note and flavor.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-ivory-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-xs sm:text-sm text-espresso-900 font-medium">
                Valid on both White-Glove Home Delivery and Storefront Pickup orders.
              </span>
            </div>
            <Link
              to="/menu"
              className="px-6 py-3 rounded-luxe bg-espresso-950 hover:bg-espresso-900 text-softwhite text-xs uppercase tracking-luxury font-medium transition-all shadow-subtle flex items-center gap-2"
            >
              <span>Explore The Menu</span>
              <ArrowRight className="w-3.5 h-3.5 text-champagne-300" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

