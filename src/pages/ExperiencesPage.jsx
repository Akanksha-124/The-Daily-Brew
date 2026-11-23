import React from 'react';
import { Coffee, Utensils, Sparkles, Clock, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExperiencesPage() {
  const experiences = [
    {
      title: 'The Single-Origin Pour-Over Ritual',
      time: 'Daily, 8:00 AM – 12:00 PM',
      category: 'Specialty Coffee',
      description: 'A sensory journey through light-roasted microlots from Chikmagalur. Watch our master baristas grind, bloom, and brew at precise 92°C temperatures using Hario V60 drippers.',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85'
    },
    {
      title: 'The Parisian Morning Viennoiserie',
      time: 'Daily, 7:30 AM – 11:30 AM',
      category: 'Artisan Bakery',
      description: 'Experience French breakfast ritual. Warm Normandy butter croissants, pain au chocolat, and almond danish served straight from morning baking ovens alongside velvety cappuccinos.',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85'
    },
    {
      title: 'Afternoon Italian Pasta Degustation',
      time: 'Daily, 12:30 PM – 4:00 PM',
      category: 'Scratch Kitchen',
      description: 'Bronze-die fettuccine, fresh truffle tagliatelle, and slow-simmered arrabbiata prepared live with aged Parmigiano Reggiano and extra virgin olive oil in our open kitchen.',
      image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=85'
    },
    {
      title: 'Twilight Patisserie & Espresso Lounge',
      time: 'Daily, 5:00 PM – 10:00 PM',
      category: 'Sweet Indulgence',
      description: 'As twilight falls, dim warm chandeliers light up our café lounge. Enjoy handcrafted Belgian chocolate brownies, Lotus Biscoff cheesecakes, and Spanish lattes.',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85'
    }
  ];

  return (
    <div className="min-h-screen pb-24 bg-[#F7F3EB]">
      
      {/* Header */}
      <div className="bg-espresso-950 text-softwhite py-16 sm:py-24 relative overflow-hidden text-center border-b border-espresso-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-luxury text-champagne-300 font-semibold inline-block">
            CAFÉ & RITUALS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-softwhite">
            Curated Experiences
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-taupe-300 font-light leading-relaxed">
            Immerse yourself in bespoke culinary moments designed for coffee lovers, pastry connoisseurs, and leisurely seekers of refined hospitality.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-luxe overflow-hidden border border-champagne-300/40 shadow-subtle hover:shadow-card transition-editorial flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-ivory-200 img-zoom">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 space-y-3">
                  <div className="flex items-center justify-between text-xs text-taupe-500 font-light">
                    <span className="text-[10px] uppercase tracking-luxury text-champagne-600 font-semibold">
                      {exp.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-champagne-500" />
                      <span>{exp.time}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-espresso-950">
                    {exp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-taupe-600 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury text-espresso-950 font-semibold hover:text-walnut-700 transition-colors"
                >
                  <span>Experience on the Menu</span>
                  <ArrowRight className="w-3.5 h-3.5 text-champagne-600" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

