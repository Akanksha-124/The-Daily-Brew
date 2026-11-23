import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Clock, MapPin, Store, Truck, Coffee, ArrowRight, Sparkles, ChefHat } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';

export default function OrderConfirmationPage() {
  const { orderId } = useParams();
  const { orders } = useCart();
  const [currentOrder, setCurrentOrder] = useState(null);
  const [trackingStage, setTrackingStage] = useState(1); // 1 to 4

  useEffect(() => {
    // Find order
    const found = orders.find((o) => o.id === orderId) || orders[0];
    if (found) {
      setCurrentOrder(found);
    }

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D9C6A5', '#30231D', '#BF9E6B', '#F7F3EB'],
      });
    } catch (e) {
      console.warn('Confetti could not be triggered', e);
    }

    // Simulate demo order tracking progression
    const timer1 = setTimeout(() => setTrackingStage(2), 3500);
    const timer2 = setTimeout(() => setTrackingStage(3), 8000);
    const timer3 = setTimeout(() => setTrackingStage(4), 14000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [orderId, orders]);

  if (!currentOrder) {
    return (
      <div className="min-h-screen bg-[#F7F3EB] py-24 px-4 flex items-center justify-center text-center">
        <div className="max-w-md bg-white p-8 rounded-luxe border border-champagne-300/40 shadow-card space-y-4">
          <h2 className="font-serif text-2xl text-espresso-950">No Order Record Found</h2>
          <p className="text-xs text-taupe-500 font-light">
            You can browse our collections and place a fresh demonstration order anytime.
          </p>
          <div className="pt-2">
            <Link
              to="/menu"
              className="inline-block px-6 py-3 rounded-luxe bg-espresso-950 text-softwhite text-xs uppercase tracking-luxury font-medium"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const steps = [
    { num: 1, title: 'Order Placed', desc: 'Received & sent to head barista' },
    { num: 2, title: 'Preparing Your Order', desc: 'Brewing single-origin & tossing pasta' },
    {
      num: 3,
      title: currentOrder.orderType === 'delivery' ? 'Out for Delivery' : 'Ready for Pickup',
      desc: currentOrder.orderType === 'delivery' ? 'Courier en route with insulated case' : 'Available at Indiranagar counter'
    },
    { num: 4, title: 'Delivered', desc: 'Savor your little moments of luxury' },
  ];

  return (
    <div className="min-h-screen pb-24 bg-[#F7F3EB]">
      
      {/* Header Banner */}
      <div className="bg-espresso-950 text-softwhite py-16 sm:py-20 relative overflow-hidden text-center border-b border-espresso-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="w-16 h-16 rounded-full bg-champagne-300 text-espresso-950 mx-auto flex items-center justify-center shadow-lg animate-in zoom-in-75">
            <CheckCircle2 className="w-9 h-9 stroke-[1.8]" />
          </div>
          <span className="text-xs uppercase tracking-luxury text-champagne-300 font-semibold block">
            DEMONSTRATION ORDER CONFIRMATION
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-softwhite">
            Thank You, {currentOrder.customer.name.split(' ')[0]}.
          </h1>
          <p className="max-w-lg mx-auto text-xs sm:text-sm text-taupe-300 font-light leading-relaxed">
            Your culinary selection has been gracefully received. Our kitchen team and baristas are preparing your order with reverence.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        
        {/* Order Tracking Timeline */}
        <div className="bg-white p-6 sm:p-10 rounded-luxe border border-champagne-300/40 shadow-card space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ivory-200 pb-4">
            <div>
              <span className="text-[10px] uppercase tracking-luxury text-taupe-400 block">Unique Reference</span>
              <h3 className="font-serif text-xl sm:text-2xl text-espresso-950 font-semibold">
                Order #{currentOrder.id}
              </h3>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-ivory-100 border border-champagne-300/30 text-xs text-espresso-900">
              <Clock className="w-3.5 h-3.5 text-champagne-600" />
              <span>Est. Preparation: {currentOrder.estimatedTime}</span>
            </div>
          </div>

          {/* Demonstration Disclaimer Tag */}
          <div className="text-[11px] text-taupe-500 italic bg-ivory-50 p-3 rounded-[2px] border border-ivory-200">
            * Note: This simulated timeline visualizes our real-time order lifecycle demonstration.
          </div>

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative">
            {steps.map((s) => {
              const isPast = trackingStage > s.num;
              const isCurrent = trackingStage === s.num;
              return (
                <div key={s.num} className="flex sm:flex-col items-center sm:items-center text-left sm:text-center gap-4 sm:gap-2">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 transition-all ${
                      isPast || isCurrent
                        ? 'bg-espresso-950 text-champagne-200 shadow-md ring-4 ring-champagne-200/50'
                        : 'bg-ivory-200 text-taupe-400'
                    }`}
                  >
                    {isPast ? '✓' : s.num}
                  </div>
                  <div>
                    <h4 className={`text-xs font-serif font-medium ${isCurrent ? 'text-espresso-950 font-bold' : 'text-espresso-800'}`}>
                      {s.title}
                    </h4>
                    <p className="text-[10px] text-taupe-500 font-light mt-0.5 max-w-[140px] sm:mx-auto">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Order Details & Receipt */}
        <div className="bg-white p-6 sm:p-10 rounded-luxe border border-champagne-300/40 shadow-card space-y-8">
          
          <h3 className="font-serif text-2xl text-espresso-950 border-b border-ivory-200 pb-4">
            Order Receipt & Manifest
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-taupe-600 font-light">
            <div>
              <h4 className="text-[11px] uppercase tracking-luxury text-champagne-600 font-semibold mb-2">
                Guest & Contact
              </h4>
              <p className="text-espresso-950 font-medium text-sm">{currentOrder.customer.name}</p>
              <p>{currentOrder.customer.phone}</p>
              <p>{currentOrder.customer.email}</p>
            </div>

            <div>
              <h4 className="text-[11px] uppercase tracking-luxury text-champagne-600 font-semibold mb-2">
                {currentOrder.orderType === 'delivery' ? 'Delivery Destination' : 'Storefront Collection'}
              </h4>
              {currentOrder.orderType === 'delivery' ? (
                <div>
                  <p className="text-espresso-950 font-medium">{currentOrder.deliveryDetails.houseNumber}, {currentOrder.deliveryDetails.street}</p>
                  <p>{currentOrder.deliveryDetails.area}, {currentOrder.deliveryDetails.city} – {currentOrder.deliveryDetails.pincode}</p>
                  {currentOrder.deliveryDetails.instructions && (
                    <p className="italic mt-1">Instructions: "{currentOrder.deliveryDetails.instructions}"</p>
                  )}
                </div>
              ) : (
                <div>
                  <p className="text-espresso-950 font-medium">{currentOrder.pickupDetails.outlet}</p>
                  <p>Date: {currentOrder.pickupDetails.date} at {currentOrder.pickupDetails.time}</p>
                </div>
              )}
            </div>
          </div>

          {/* Itemized List */}
          <div className="border-t border-ivory-200 pt-6 space-y-3">
            <h4 className="text-[11px] uppercase tracking-luxury text-champagne-600 font-semibold mb-3">
              Selected Creations
            </h4>
            <div className="divide-y divide-ivory-200">
              {currentOrder.items.map((item) => (
                <div key={item.id} className="py-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-[2px] object-cover bg-ivory-200 shrink-0"
                    />
                    <div>
                      <span className="font-serif font-normal text-espresso-950 block text-sm">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-taupe-400 font-light">Quantity: {item.quantity}</span>
                    </div>
                  </div>
                  <span className="font-semibold text-espresso-950 font-sans">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Summary */}
          <div className="border-t border-ivory-200 pt-4 space-y-1.5 text-xs text-taupe-600 font-light">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium text-espresso-950 font-sans">₹{currentOrder.pricing.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>GST (5% Hospitality Tax)</span>
              <span className="font-medium text-espresso-950 font-sans">₹{currentOrder.pricing.gstAmount}</span>
            </div>
            <div className="flex justify-between">
              <span>Fulfilment Fee</span>
              <span className="font-medium text-espresso-950 font-sans">
                {currentOrder.pricing.deliveryFee === 0 ? 'Complimentary' : `₹${currentOrder.pricing.deliveryFee}`}
              </span>
            </div>
            {currentOrder.pricing.discountAmount > 0 && (
              <div className="flex justify-between text-emerald-800 font-medium">
                <span>Privilege Discount ({currentOrder.pricing.couponCode})</span>
                <span className="font-sans">-₹{currentOrder.pricing.discountAmount}</span>
              </div>
            )}
            <div className="flex justify-between pt-3 border-t border-champagne-300/40 text-base font-semibold text-espresso-950 font-sans">
              <span>Total Amount Paid</span>
              <span>₹{currentOrder.pricing.grandTotal}</span>
            </div>
            <div className="text-[11px] text-taupe-400 font-light pt-1">
              Payment Method: <span className="uppercase font-medium text-espresso-950">{currentOrder.paymentMethod}</span> (Demo Authorized)
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-6 border-t border-ivory-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/menu"
              className="w-full sm:w-auto px-8 py-3.5 rounded-luxe bg-espresso-950 hover:bg-espresso-900 text-softwhite text-xs uppercase tracking-luxury font-medium transition-all shadow-subtle flex items-center justify-center gap-2"
            >
              <span>Continue Exploring</span>
              <ArrowRight className="w-4 h-4 text-champagne-300" />
            </Link>
            <Link
              to="/"
              className="w-full sm:w-auto text-center text-xs uppercase tracking-luxury text-espresso-900 hover:text-walnut-700 font-medium py-2"
            >
              Return to Homepage
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

