import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from '../components/SocialIcons';
import { useToast } from '../context/ToastContext';

export default function ContactPage() {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    addToast('Your inquiry has been relayed to our head barista and concierge.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pb-24 bg-[#F7F3EB]">
      
      {/* Header */}
      <div className="bg-espresso-950 text-softwhite py-16 sm:py-24 relative overflow-hidden text-center border-b border-espresso-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-luxury text-champagne-300 font-semibold inline-block">
            CAFÉ CONCIERGE
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-softwhite">
            Visit Us or Inquire
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-taupe-300 font-light leading-relaxed">
            We welcome conversations regarding private café bookings, coffee bean catering, press inquiries, or simply welcoming you to our tables.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        
        {/* Placeholder disclaimer notice as required */}
        <div className="p-3 bg-champagne-100/60 rounded-luxe border border-champagne-300/40 text-xs text-espresso-900 text-center font-medium max-w-2xl mx-auto">
          Note: Address, phone number, and hours below are editable demonstration placeholders for The Daily Brew.
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Café Details */}
          <div className="space-y-8">
            <div>
              <span className="text-xs uppercase tracking-luxury text-champagne-600 font-semibold block mb-1">
                FLAGSHIP BOUTIQUE
              </span>
              <h2 className="font-serif text-3xl font-normal text-espresso-950 mb-3">
                The Daily Brew Flagship Café
              </h2>
              <p className="text-sm text-taupe-600 font-light leading-relaxed">
                Located on a quiet heritage boulevard with floor-to-ceiling arched windows and a serene shaded garden courtyard. High-speed fiber internet and power points are available for creators.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-luxe bg-white border border-champagne-300/40 shadow-subtle">
                <div className="w-10 h-10 rounded-full bg-ivory-100 border border-champagne-300/40 flex items-center justify-center text-espresso-950 shrink-0">
                  <MapPin className="w-5 h-5 text-champagne-600" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-normal text-espresso-950">Boutique Address</h4>
                  <p className="text-xs text-taupe-600 font-light mt-0.5 leading-relaxed">
                    42 Heritage Boulevard, 12th Main, Indiranagar, Bengaluru, Karnataka 560038
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-luxe bg-white border border-champagne-300/40 shadow-subtle">
                <div className="w-10 h-10 rounded-full bg-ivory-100 border border-champagne-300/40 flex items-center justify-center text-espresso-950 shrink-0">
                  <Phone className="w-5 h-5 text-champagne-600" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-normal text-espresso-950">Concierge Desk</h4>
                  <p className="text-xs text-taupe-600 font-light mt-0.5">
                    +91 98765 43210 / +91 80 4123 5678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-luxe bg-white border border-champagne-300/40 shadow-subtle">
                <div className="w-10 h-10 rounded-full bg-ivory-100 border border-champagne-300/40 flex items-center justify-center text-espresso-950 shrink-0">
                  <Mail className="w-5 h-5 text-champagne-600" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-normal text-espresso-950">Electronic Mail</h4>
                  <p className="text-xs text-taupe-600 font-light mt-0.5">
                    concierge@thedailybrew.cafe / orders@thedailybrew.cafe
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-luxe bg-white border border-champagne-300/40 shadow-subtle">
                <div className="w-10 h-10 rounded-full bg-ivory-100 border border-champagne-300/40 flex items-center justify-center text-espresso-950 shrink-0">
                  <Clock className="w-5 h-5 text-champagne-600" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-normal text-espresso-950">Café Hours</h4>
                  <p className="text-xs text-taupe-600 font-light mt-0.5">
                    Monday – Friday: 7:30 AM – 10:30 PM <br />
                    Saturday – Sunday: 8:00 AM – 11:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xs uppercase tracking-luxury text-champagne-600 font-semibold mb-3">
                Follow Our Journal
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="#instagram"
                  className="w-10 h-10 rounded-full bg-white border border-champagne-300/40 flex items-center justify-center text-espresso-950 hover:bg-espresso-950 hover:text-softwhite transition-all shadow-subtle"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="#facebook"
                  className="w-10 h-10 rounded-full bg-white border border-champagne-300/40 flex items-center justify-center text-espresso-950 hover:bg-espresso-950 hover:text-softwhite transition-all shadow-subtle"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="#twitter"
                  className="w-10 h-10 rounded-full bg-white border border-champagne-300/40 flex items-center justify-center text-espresso-950 hover:bg-espresso-950 hover:text-softwhite transition-all shadow-subtle"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form & Interactive Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 sm:p-10 rounded-luxe border border-champagne-300/40 shadow-card">
              <h3 className="font-serif text-2xl font-normal text-espresso-950 mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-taupe-500 font-light mb-6">
                Direct your message to our café team. We respond with care within 24 hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-luxe bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-serif text-lg text-emerald-950">Inquiry Received</h4>
                  <p className="text-xs text-emerald-800 font-light">
                    Thank you for reaching out to The Daily Brew. Our café team will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-5 py-2 rounded-luxe bg-emerald-800 text-white text-xs uppercase tracking-luxury font-medium"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-luxury font-medium text-espresso-950 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lady Clara Ravenscroft"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-luxe bg-ivory-50 border border-champagne-300/60 text-xs text-espresso-950 placeholder-taupe-400 focus:outline-none focus:border-espresso-950"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-luxury font-medium text-espresso-950 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="clara@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-luxe bg-ivory-50 border border-champagne-300/60 text-xs text-espresso-950 placeholder-taupe-400 focus:outline-none focus:border-espresso-950"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-luxury font-medium text-espresso-950 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Table Reservation or Event Catering"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-luxe bg-ivory-50 border border-champagne-300/60 text-xs text-espresso-950 placeholder-taupe-400 focus:outline-none focus:border-espresso-950"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-luxury font-medium text-espresso-950 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How may our café team assist you today?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-luxe bg-ivory-50 border border-champagne-300/60 text-xs text-espresso-950 placeholder-taupe-400 focus:outline-none focus:border-espresso-950"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-luxe bg-espresso-950 hover:bg-espresso-900 text-softwhite text-xs uppercase tracking-luxury font-medium transition-all shadow-subtle flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <Send className="w-3.5 h-3.5 text-champagne-300" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Map Placeholder */}
            <div className="rounded-luxe overflow-hidden border border-champagne-300/40 bg-white shadow-subtle p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-serif text-base text-espresso-950">Café Map Location</span>
                <span className="text-[10px] uppercase tracking-luxury text-taupe-400">Indiranagar Flagship</span>
              </div>
              <div className="aspect-[16/9] rounded-[4px] overflow-hidden bg-ivory-200 relative border border-ivory-300 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1000&q=80"
                  alt="The Daily Brew Map Location Preview"
                  className="w-full h-full object-cover filter brightness-90"
                />
                <div className="absolute inset-0 bg-espresso-950/30 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-espresso-950 text-champagne-300 flex items-center justify-center shadow-lg border border-champagne-300/60 mb-2 animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-white font-serif text-base drop-shadow">The Daily Brew Flagship</span>
                  <span className="text-champagne-200 text-xs drop-shadow font-light">42 Heritage Boulevard, Indiranagar</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

