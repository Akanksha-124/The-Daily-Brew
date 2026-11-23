import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, Coffee } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/menuData';
import ProductCard from '../components/ProductCard';

export default function MenuPage({ onQuickView }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);

  // Filtered catalogue
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Dietary filter
      if (vegOnly && !product.isVeg) {
        return false;
      }
      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchDesc = product.description.toLowerCase().includes(query);
        const matchIngredients = product.ingredients?.some((ing) => ing.toLowerCase().includes(query));
        return matchName || matchDesc || matchIngredients;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, vegOnly]);

  return (
    <div className="min-h-screen pb-24 bg-[#F7F3EB]">
      
      {/* Editorial Header */}
      <div className="bg-espresso-950 text-softwhite py-16 sm:py-24 relative overflow-hidden text-center border-b border-espresso-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-luxury text-champagne-300 font-semibold inline-block">
            THE CATALOGUE
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-softwhite">
            Our Menu & Collections
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-taupe-300 font-light leading-relaxed">
            From single-origin pour-overs and artisanal pasta to morning croissants laminated with Normandy butter. Prepared fresh to order.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        
        {/* Controls: Search, Category Pills & Veg Filter */}
        <div className="space-y-6">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-taupe-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search roasts, pasta, viennoiserie..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-luxe bg-white border border-champagne-300/60 text-xs text-espresso-950 placeholder-taupe-400 focus:outline-none focus:border-espresso-950 shadow-subtle"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-taupe-400 hover:text-espresso-950"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Dietary Toggle */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2.5 rounded-luxe border border-champagne-300/60 shadow-subtle">
                <input
                  type="checkbox"
                  checked={vegOnly}
                  onChange={(e) => setVegOnly(e.target.checked)}
                  className="w-4 h-4 accent-espresso-950 rounded cursor-pointer"
                />
                <span className="text-xs uppercase tracking-luxury font-medium text-espresso-900">
                  Vegetarian Selection Only
                </span>
              </label>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-champagne-300/40">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-luxe text-xs uppercase tracking-luxury font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-espresso-950 text-softwhite shadow-subtle'
                      : 'bg-white/70 text-espresso-900 hover:bg-white border border-champagne-300/40'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-taupe-500 font-light pt-2">
          <span>Displaying {filteredProducts.length} curated creations</span>
          {(selectedCategory !== 'all' || vegOnly || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setVegOnly(false);
                setSearchQuery('');
              }}
              className="text-espresso-950 hover:underline font-medium"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center bg-white rounded-luxe border border-champagne-300/40 p-8 space-y-3">
            <Coffee className="w-10 h-10 text-taupe-400 mx-auto stroke-[1.2]" />
            <h3 className="font-serif text-2xl text-espresso-950">No Creations Found</h3>
            <p className="text-xs text-taupe-500 font-light">
              We couldn't find any items matching your selected criteria. Try adjusting your search query or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

