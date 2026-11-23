import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-espresso-950 text-ivory-100 border-t border-espresso-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-espresso-900/80">
          
          {/* Brand Philosophy */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl tracking-[0.2em] font-normal text-softwhite uppercase block">
                THE DAILY BREW
              </span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-champagne-300 font-sans block mt-0.5">
                A LUXURY BOUTIQUE CAFÉ & KITCHEN
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-taupe-300 leading-relaxed font-light pr-4">
              A Parisian-inspired sanctuary celebrating single-origin shade-grown coffees, handmade Italian pasta, and morning viennoiserie baked before sunrise.
            </p>
            <div className="pt-2 text-xs text-champagne-300/80 italic font-serif">
              “A Little Luxury in Every Moment.”
            </div>
          </div>

          {/* Quick Curations */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-luxury text-champagne-300 font-semibold">
              The Menu
            </h4>
            <ul className="space-y-2.5 text-xs text-taupe-200 font-light">
              <li>
                <Link to="/menu" className="hover:text-champagne-200 transition-colors">Specialty Coffee</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-champagne-200 transition-colors">Signature Beverages</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-champagne-200 transition-colors">Artisan Pasta</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-champagne-200 transition-colors">Morning Viennoiserie</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-champagne-200 transition-colors">Exquisite Desserts</Link>
              </li>
            </ul>
          </div>

          {/* Café & Boutique Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-luxury text-champagne-300 font-semibold">
              The Boutique
            </h4>
            <ul className="space-y-2.5 text-xs text-taupe-200 font-light">
              <li>
                <Link to="/story" className="hover:text-champagne-200 transition-colors">Our Story & Ethos</Link>
              </li>
              <li>
                <Link to="/experiences" className="hover:text-champagne-200 transition-colors">Experiences & Rituals</Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-champagne-200 transition-colors">Privilege Offers</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-champagne-200 transition-colors">Flagship Café</Link>
              </li>
              <li>
                <Link to="/checkout" className="hover:text-champagne-200 transition-colors">Private Catering</Link>
              </li>
            </ul>
          </div>

          {/* Café Hours & Location */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-luxury text-champagne-300 font-semibold">
              Café Hours & Location
            </h4>
            <div className="space-y-3 text-xs text-taupe-200 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-champagne-400 shrink-0 mt-0.5" />
                <span>42 Heritage Boulevard, 12th Main, Indiranagar, Bengaluru, KA 560038</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-champagne-400 shrink-0" />
                <span>+91 98765 43210 / +91 80 4123 5678</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-champagne-400 shrink-0 mt-0.5" />
                <div>
                  <p>Monday – Friday: 7:30 AM – 10:30 PM</p>
                  <p>Saturday – Sunday: 8:00 AM – 11:30 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-taupe-400 font-light">
          <p>© {new Date().getFullYear()} The Daily Brew. All rights reserved. Handcrafted with reverence for the bean.</p>
          <div className="flex items-center space-x-6 text-champagne-300">
            <a href="#instagram" aria-label="Instagram" className="hover:text-white transition-colors">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="#facebook" aria-label="Facebook" className="hover:text-white transition-colors">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href="#twitter" aria-label="Twitter" className="hover:text-white transition-colors">
              <TwitterIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

