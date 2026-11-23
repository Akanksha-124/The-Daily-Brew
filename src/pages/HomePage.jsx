import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Coffee, Utensils, Sparkles, Heart, Award, ChevronRight, Star, Clock, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, SPECIAL_OFFERS, TESTIMONIALS, CAFE_GALLERY } from '../data/menuData';
import ProductCard from '../components/ProductCard';
import { useToast } from '../context/ToastContext';

export default function HomePage({ onQuickView, onOpenCart }) {
  const navigate = useNavigate();
  const { addToast } = useToast();

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Curated selections
  const signatureItems = PRODUCTS.filter((p) => p.badge === 'Signature' || p.badge === 'Bestseller').slice(0, 4);
  const coffeeItems = PRODUCTS.filter((p) => p.category === 'coffee').slice(0, 4);
  const kitchenItems = PRODUCTS.filter((p) => p.category === 'pasta' || p.category === 'snacks').slice(0, 4);
  const sweetItems = PRODUCTS.filter((p) => p.category === 'desserts' || p.category === 'bakery').slice(0, 4);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      addToast('Please provide a valid email address.', 'error');
      return;
    }
    setNewsletterSubscribed(true);
    addToast('Welcome to The Daily Brew Gazette. Your 10% privilege code is BREW10.');
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden bg-[#F7F3EB]">
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Subtle Ambient Vignette Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=85"
            alt="The Daily Brew Café Ambience"
            className="w-full h-full object-cover filter brightness-[0.4] saturate-[0.85] scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/60 to-espresso-950/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 text-softwhite pt-10">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-champagne-300/40 bg-espresso-950/70 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
            <span className="text-[11px] uppercase tracking-luxury text-champagne-200 font-sans font-medium">
              A LUXURY BOUTIQUE CAFÉ & KITCHEN
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-softwhite leading-[1.08]">
            Slow Down. <br />
            <span className="italic font-light text-champagne-300">
              Sip Something Beautiful.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-ivory-200/90 font-light leading-relaxed font-sans">
            Thoughtfully crafted coffee, exquisite flavours and beautiful moments. Discover your everyday escape at The Daily Brew.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
            <Link
              to="/menu"
              className="w-full sm:w-auto px-8 py-4 rounded-luxe bg-champagne-300 hover:bg-champagne-200 text-espresso-950 text-xs uppercase tracking-luxury font-semibold transition-all shadow-hover flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <span>Explore Our Menu</span>
              <ArrowRight className="w-4 h-4 text-espresso-950" />
            </Link>
            <button
              onClick={() => {
                const el = document.getElementById('signature-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-luxe bg-espresso-950/80 hover:bg-espresso-900 text-ivory-100 text-xs uppercase tracking-luxury font-medium border border-champagne-300/40 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <span>Order Your Favourites</span>
            </button>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 opacity-60">
          <span className="text-[9px] uppercase tracking-luxury text-champagne-300">Scroll to Immerse</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-champagne-400 to-transparent animate-pulse" />
        </div>

      </section>

      {/* ===================== SECTION A: OUR PHILOSOPHY ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-luxury text-champagne-600 font-semibold block">
              OUR PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-espresso-950 leading-tight">
              An Architectural Reverence for Coffee & Solace.
            </h2>
            <div className="w-12 h-[1px] bg-champagne-400" />
            <p className="text-sm sm:text-base text-taupe-600 leading-relaxed font-light">
              Founded on the belief that everyday moments deserve genuine luxury. We source only high-elevation, shade-grown Arabica from single-origin plantations in Chikmagalur and Coorg, slow-roasting in micro-batches to unlock terroir notes of cacao and wild honey.
            </p>
            <p className="text-sm sm:text-base text-taupe-600 leading-relaxed font-light">
              Here, morning viennoiserie is rolled by hand with Normandy butter before dawn, and handmade pastas are tossed to order in heirloom bronze dies. No shortcuts, no compromises.
            </p>
            <div className="pt-2">
              <Link
                to="/story"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury text-espresso-950 font-semibold border-b border-espresso-950 pb-1 hover:text-walnut-700 hover:border-walnut-700 transition-colors"
              >
                <span>Read The Full Chronicle</span>
                <ArrowRight className="w-3.5 h-3.5 text-champagne-600" />
              </Link>
            </div>
          </div>

          {/* Right Dual Editorial Imagery */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center">
            <div className="col-span-7 rounded-luxe overflow-hidden shadow-card border border-champagne-300/40 img-zoom">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85"
                alt="Barista brewing single-origin coffee"
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
            <div className="col-span-5 space-y-4">
              <div className="rounded-luxe overflow-hidden shadow-subtle border border-champagne-300/40 img-zoom">
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=85"
                  alt="Freshly baked butter croissants"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
              <div className="p-4 rounded-luxe bg-white border border-champagne-300/40 text-center space-y-1">
                <span className="font-serif text-2xl font-normal text-espresso-950 block">100%</span>
                <span className="text-[10px] uppercase tracking-luxury text-taupe-500 font-medium block">
                  Shade-Grown Arabica
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===================== SECTION B: SIGNATURE SELECTION ===================== */}
      <section id="signature-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-champagne-300/40 pb-6">
          <div>
            <span className="text-xs uppercase tracking-luxury text-champagne-600 font-semibold block mb-1">
              CURATED MASTERPIECES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-espresso-950">
              Signature Selection
            </h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury font-semibold text-espresso-950 hover:text-walnut-700 transition-colors group"
          >
            <span>View Complete Catalogue</span>
            <ChevronRight className="w-4 h-4 text-champagne-600 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {signatureItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

      </section>

      {/* ===================== SECTION C: THE ART OF COFFEE ===================== */}
      <section className="bg-espresso-950 text-ivory-100 py-24 sm:py-32 relative overflow-hidden border-y border-espresso-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-luxury text-champagne-300 font-semibold block">
                SPECIALTY ROASTERY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-softwhite leading-tight">
                The Art of Single-Origin Coffee.
              </h2>
              <div className="w-12 h-[1px] bg-champagne-400" />
              <p className="text-sm sm:text-base text-taupe-300 leading-relaxed font-light">
                Every espresso pulled at The Daily Brew honors the delicate science of water chemistry, extraction yield, and grind micron distribution. From our velvety Spanish Latte with condensed milk to the 18-hour cold brew, taste coffee in its purest, most elegant expression.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-espresso-900">
                <div>
                  <h4 className="font-serif text-2xl text-champagne-300">92°C</h4>
                  <p className="text-xs text-taupe-400 font-light mt-1">Precision Brewing Temp</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-champagne-300">18 Hours</h4>
                  <p className="text-xs text-taupe-400 font-light mt-1">Slow Steeped Cold Brew</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-luxe bg-champagne-300 hover:bg-champagne-200 text-espresso-950 text-xs uppercase tracking-luxury font-semibold transition-all shadow-subtle"
                >
                  <span>Explore Coffee Rituals</span>
                  <ArrowRight className="w-3.5 h-3.5 text-espresso-950" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coffeeItems.map((product) => (
                <div
                  key={product.id}
                  onClick={() => onQuickView(product)}
                  className="p-5 rounded-luxe bg-espresso-900/60 border border-espresso-800 hover:border-champagne-400/50 transition-editorial cursor-pointer group space-y-4"
                >
                  <div className="aspect-[4/3] rounded-[4px] overflow-hidden bg-espresso-950">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-lg text-softwhite group-hover:text-champagne-200 transition-colors">
                      {product.name}
                    </h3>
                    <span className="font-sans font-semibold text-sm text-champagne-300">
                      ₹{product.price}
                    </span>
                  </div>
                  <p className="text-xs text-taupe-400 font-light line-clamp-2">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ===================== SECTION D: FROM OUR KITCHEN ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-champagne-300/40 pb-6">
          <div>
            <span className="text-xs uppercase tracking-luxury text-champagne-600 font-semibold block mb-1">
              ARTISAN SCRATCH KITCHEN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-espresso-950">
              From Our Kitchen
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-taupe-500 font-light max-w-sm">
            Handmade pasta tossed al dente, Ligurian pestos, and artisanal sourdough sandwiches crafted to order.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {kitchenItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

      </section>

      {/* ===================== SECTION E: SOMETHING SWEET ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-champagne-300/40 pb-6">
          <div>
            <span className="text-xs uppercase tracking-luxury text-champagne-600 font-semibold block mb-1">
              FRENCH PATISSERIE & DESSERTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-espresso-950">
              Something Sweet
            </h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury font-semibold text-espresso-950 hover:text-walnut-700 transition-colors group"
          >
            <span>View All Patisserie</span>
            <ChevronRight className="w-4 h-4 text-champagne-600 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {sweetItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

      </section>

      {/* ===================== SECTION F: THE DAILY EXPERIENCE ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-luxury text-champagne-600 font-semibold block">
            CAFÉ & ATMOSPHERE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-espresso-950">
            The Daily Experience
          </h2>
          <p className="text-sm text-taupe-600 font-light leading-relaxed">
            Herringbone oak floors, soaring arched windows, and natural sunlight. A tranquil European sanctuary designed for slow mornings and quiet afternoon conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAFE_GALLERY.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-luxe overflow-hidden bg-ivory-200 shadow-subtle border border-champagne-300/30"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-luxury text-champagne-300 font-semibold">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg font-normal text-softwhite">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ===================== SECTION G: SPECIAL OFFERS ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-luxe bg-white border border-champagne-300/40 shadow-card">
          <div className="max-w-2xl mb-10 space-y-3">
            <span className="text-xs uppercase tracking-luxury text-champagne-600 font-semibold block">
              PRIVILEGES & COMBINATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-espresso-950">
              Curated Offerings & Privileges
            </h2>
            <p className="text-xs sm:text-sm text-taupe-500 font-light">
              Elevate your daily visit with tailored combinations crafted for mornings, working lunches, and leisurely weekend treats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIAL_OFFERS.map((offer) => (
              <div
                key={offer.id}
                className="p-6 rounded-luxe bg-ivory-50 border border-champagne-300/40 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-1 rounded-[2px] bg-champagne-200/80 text-espresso-950 text-[10px] uppercase tracking-luxury font-semibold">
                    {offer.badge}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-espresso-950">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-taupe-600 font-light leading-relaxed">
                    {offer.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-champagne-300/40 flex items-center justify-between">
                  <div className="text-xs font-semibold text-espresso-900 font-sans">
                    Use: <span className="text-champagne-600 font-bold">{offer.code}</span>
                  </div>
                  <Link
                    to="/menu"
                    className="text-xs uppercase tracking-luxury font-semibold text-espresso-950 hover:text-walnut-700 transition-colors"
                  >
                    Redeem →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION H: CUSTOMER EXPERIENCES ===================== */}
      <section className="bg-ivory-200/60 py-20 border-y border-champagne-300/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
            <span className="text-xs uppercase tracking-luxury text-champagne-600 font-semibold block">
              GUEST EXPERIENCES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-espresso-950">
              Kind Words From Patrons
            </h2>
            <p className="text-xs text-taupe-500 font-light">
              Demonstration sample reflections from patrons of our Indiranagar flagship boutique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-luxe bg-white border border-champagne-300/40 shadow-subtle space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-champagne-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-champagne-400 text-champagne-400" />
                    ))}
                  </div>
                  <p className="font-serif text-base sm:text-lg text-espresso-950 font-normal italic leading-relaxed">
                    “{t.comment}”
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-ivory-200">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-champagne-300"
                  />
                  <div>
                    <h4 className="font-serif font-normal text-sm text-espresso-950">{t.name}</h4>
                    <span className="text-[10px] uppercase tracking-wider text-taupe-400 block">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== SECTION I: NEWSLETTER ===================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="p-8 sm:p-14 rounded-luxe bg-espresso-950 text-softwhite border border-espresso-900 shadow-modal space-y-6">
          <span className="text-xs uppercase tracking-luxury text-champagne-300 font-semibold block">
            THE DAILY BREW GAZETTE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-softwhite">
            Receive Our Curated Tasting Notes.
          </h2>
          <p className="text-xs sm:text-sm text-taupe-300 font-light max-w-lg mx-auto leading-relaxed">
            Subscribe to receive private coffee harvest releases, seasonal patisserie previews, and an immediate 10% welcome privilege.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              disabled={newsletterSubscribed}
              className="flex-1 px-4 py-3 rounded-luxe bg-espresso-900/80 border border-champagne-300/40 text-xs text-softwhite placeholder-taupe-400 focus:outline-none focus:border-champagne-300"
            />
            <button
              type="submit"
              disabled={newsletterSubscribed}
              className="px-6 py-3 rounded-luxe bg-champagne-300 hover:bg-champagne-200 text-espresso-950 text-xs uppercase tracking-luxury font-semibold transition-all shrink-0"
            >
              {newsletterSubscribed ? 'Subscribed' : 'Subscribe'}
            </button>
          </form>

          {newsletterSubscribed && (
            <p className="text-xs text-champagne-300 animate-in fade-in">
              Thank you for subscribing. Use code <strong>BREW10</strong> for 10% off your first order!
            </p>
          )}
        </div>
      </section>

    </div>
  );
}

