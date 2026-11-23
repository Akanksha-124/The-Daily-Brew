import React from 'react';
import { ArrowRight, Coffee, Heart, Award, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StoryPage() {
  return (
    <div className="min-h-screen pb-24 bg-[#F7F3EB]">
      
      {/* Header */}
      <div className="bg-espresso-950 text-softwhite py-16 sm:py-24 relative overflow-hidden text-center border-b border-espresso-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-luxury text-champagne-300 font-semibold inline-block">
            HERITAGE & CRAFTSMANSHIP
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-softwhite">
            Our Story & Philosophy
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-taupe-300 font-light leading-relaxed">
            A quiet sanctuary dedicated to the timeless art of specialty coffee brewing, handmade Italian gastronomy, and thoughtful Parisian mornings.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        
        {/* Chapter 1: Reverence for the Bean */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-luxury text-champagne-600 font-semibold block">
              CHAPTER I
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-espresso-950 leading-tight">
              Single-Origin Terroir & Slow Roasting.
            </h2>
            <div className="w-12 h-[1px] bg-champagne-400" />
            <p className="text-sm text-taupe-600 font-light leading-relaxed">
              Our coffee journey begins in the high-elevation, mist-shrouded plantations of Chikmagalur and Coorg, where Arabica cherries ripen slowly under natural shade canopies. We work exclusively with multi-generational estates that practice sustainable forest farming and natural spring-water washing.
            </p>
            <p className="text-sm text-taupe-600 font-light leading-relaxed">
              Every harvest is roasted slowly in micro-batches in our dedicated roastery. We avoid dark, bitter scorching; our roasts highlight the bean's intrinsic terroir—subtle floral bouquets, rich cacao nibs, and wild stone-fruit sweetness.
            </p>
          </div>

          <div className="lg:col-span-6 rounded-luxe overflow-hidden shadow-card border border-champagne-300/40 img-zoom">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
              alt="Artisan coffee roastery and beans"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>

        {/* Chapter 2: The Scratch Kitchen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 rounded-luxe overflow-hidden shadow-card border border-champagne-300/40 img-zoom">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85"
              alt="Handmade fresh Italian pasta preparation"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-luxury text-champagne-600 font-semibold block">
              CHAPTER II
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-espresso-950 leading-tight">
              Honest Gastronomy, Zero Shortcuts.
            </h2>
            <div className="w-12 h-[1px] bg-champagne-400" />
            <p className="text-sm text-taupe-600 font-light leading-relaxed">
              In our kitchen, culinary honesty is sacred. We refuse pre-packaged sauces, artificial thickeners, and frozen dough. Our Genovese pesto is pounded fresh with sweet basil and pine nuts; our arrabbiata is simmered for hours using San Marzano plum tomatoes and cold-pressed olive oil.
            </p>
            <p className="text-sm text-taupe-600 font-light leading-relaxed">
              Our pastries follow traditional French viennoiserie techniques—laminated with 84% butterfat Normandy butter and baked fresh each morning to achieve airy, flaky layers that crumble delicately.
            </p>
          </div>
        </div>

        {/* The 4 Architectural Pillars */}
        <div className="p-8 sm:p-14 rounded-luxe bg-white border border-champagne-300/40 shadow-card">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-luxury text-champagne-600 font-semibold block">
              CORE TENETS
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-espresso-950">
              The Daily Brew Commitments
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <span className="font-serif text-3xl text-champagne-500 font-normal">01</span>
              <h4 className="font-serif text-xl text-espresso-950">Traceable Sourcing</h4>
              <p className="text-xs text-taupe-500 font-light leading-relaxed">
                Direct-trade partnerships ensuring coffee farmers receive fair living wages and support agroforestry.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-serif text-3xl text-champagne-500 font-normal">02</span>
              <h4 className="font-serif text-xl text-espresso-950">Scratch Kitchen</h4>
              <p className="text-xs text-taupe-500 font-light leading-relaxed">
                Every pasta dough, broth, and compound butter is hand-prepared daily without preservatives.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-serif text-3xl text-champagne-500 font-normal">03</span>
              <h4 className="font-serif text-xl text-espresso-950">Quiet Solace</h4>
              <p className="text-xs text-taupe-500 font-light leading-relaxed">
                High-ceilinged Parisian boutique cafés featuring natural timber, linen textures, and warm gentle sunlight.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-serif text-3xl text-champagne-500 font-normal">04</span>
              <h4 className="font-serif text-xl text-espresso-950">Conscious Luxury</h4>
              <p className="text-xs text-taupe-500 font-light leading-relaxed">
                100% plastic-free, biodegradable, and compostable packaging for all takeaway orders.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center pt-8 border-t border-ivory-200">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-luxe bg-espresso-950 hover:bg-espresso-900 text-softwhite text-xs uppercase tracking-luxury font-medium transition-all shadow-subtle hover:scale-[1.01]"
            >
              <span>Explore The Menu Creations</span>
              <ArrowRight className="w-4 h-4 text-champagne-300" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

