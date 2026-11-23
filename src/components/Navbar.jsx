import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar({ onOpenCart }) {
  const { totalItemsCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Menu', path: '/menu' },
    { name: 'Our Story', path: '/story' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FFFEFA]/95 backdrop-blur-md border-b border-[#D9C6A5]/40 shadow-subtle py-3.5'
          : 'bg-[#F7F3EB]/90 backdrop-blur-sm border-b border-[#D9C6A5]/25 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="group flex flex-col items-start text-left">
            <span className="font-serif text-xl sm:text-2xl md:text-[26px] tracking-[0.18em] font-normal text-espresso-950 uppercase group-hover:text-walnut-800 transition-colors">
              THE DAILY BREW
            </span>
            <span className="text-[9px] tracking-[0.28em] uppercase text-taupe-500 font-sans font-medium -mt-0.5">
              BOUTIQUE CAFÉ & KITCHEN
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-luxury font-sans font-medium transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-espresso-950 font-semibold'
                      : 'text-espresso-800/80 hover:text-espresso-950'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-champagne-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons: Shopping Bag & Order CTA */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            
            {/* Minimal Shopping Bag Trigger */}
            <button
              onClick={onOpenCart}
              aria-label="Open Shopping Bag"
              className="relative p-2 text-espresso-950 hover:text-walnut-700 transition-colors group flex items-center gap-2"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-espresso-900 text-champagne-200 text-[10px] font-sans font-bold w-4 h-4 rounded-full flex items-center justify-center border border-champagne-300 shadow-sm animate-in zoom-in-50">
                    {totalItemsCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline-block text-[11px] uppercase tracking-luxury font-medium text-espresso-800">
                Bag
              </span>
            </button>

            {/* Order Button */}
            <Link
              to="/menu"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-luxe bg-espresso-950 hover:bg-espresso-900 text-softwhite text-xs uppercase tracking-luxury font-medium transition-all shadow-subtle hover:scale-[1.02]"
            >
              <span>Order Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-champagne-300" />
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="lg:hidden p-2 text-espresso-950 hover:text-walnut-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-champagne-300/40 bg-softwhite px-6 pt-5 pb-8 space-y-4 shadow-modal animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm uppercase tracking-luxury py-2 transition-colors border-b border-ivory-200 ${
                    isActive
                      ? 'text-espresso-950 font-semibold pl-2 border-champagne-400'
                      : 'text-espresso-800 hover:text-espresso-950'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4">
            <Link
              to="/menu"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-luxe bg-espresso-950 text-softwhite text-xs uppercase tracking-luxury font-medium shadow-subtle"
            >
              <span>Explore Full Menu</span>
              <ArrowRight className="w-4 h-4 text-champagne-300" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

