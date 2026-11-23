import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Truck, Store, CreditCard, Smartphone, Building, Banknote, AlertCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const {
    cartItems,
    subtotal,
    gstRate,
    gstAmount,
    deliveryFee,
    coupon,
    discountAmount,
    grandTotal,
    addOrder,
  } = useCart();

  // If bag is empty, guide user back
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#F7F3EB] py-24 px-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-luxe border border-champagne-300/40 shadow-card text-center space-y-4">
          <h2 className="font-serif text-2xl text-espresso-950">Your Shopping Bag is Empty</h2>
          <p className="text-xs text-taupe-500 font-light">
            Please add your preferred specialty coffees or culinary creations before proceeding to checkout.
          </p>
          <div className="pt-2">
            <Link
              to="/menu"
              className="inline-block px-6 py-3 rounded-luxe bg-espresso-950 text-softwhite text-xs uppercase tracking-luxury font-medium"
            >
              Browse Catalogue
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const [orderType, setOrderType] = useState('delivery'); // 'delivery' | 'pickup'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    // Delivery fields
    houseNumber: '',
    street: '',
    area: '',
    city: 'Bengaluru',
    pincode: '',
    deliveryNotes: '',
    // Pickup fields
    pickupDate: new Date().toISOString().split('T')[0],
    pickupTime: '11:00 AM',
    // Payment method
    paymentMethod: 'upi',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.phone.trim()) {
      errs.phone = 'Mobile number is required.';
    } else if (!/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please provide a valid 10-digit mobile number.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!formData.email.includes('@')) {
      errs.email = 'Valid email address is required.';
    }

    if (orderType === 'delivery') {
      if (!formData.houseNumber.trim()) errs.houseNumber = 'House / Building is required.';
      if (!formData.street.trim()) errs.street = 'Street name is required.';
      if (!formData.area.trim()) errs.area = 'Locality / Area is required.';
      if (!formData.city.trim()) errs.city = 'City is required.';
      if (!formData.pincode.trim() || !/^\d{6}$/.test(formData.pincode)) {
        errs.pincode = 'Valid 6-digit PIN code is required.';
      }
    } else {
      if (!formData.pickupDate) errs.pickupDate = 'Pickup date is required.';
      if (!formData.pickupTime) errs.pickupTime = 'Pickup time is required.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      addToast('Please complete all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate order placement
    setTimeout(() => {
      const orderPayload = {
        customer: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        },
        orderType,
        deliveryDetails:
          orderType === 'delivery'
            ? {
                houseNumber: formData.houseNumber,
                street: formData.street,
                area: formData.area,
                city: formData.city,
                pincode: formData.pincode,
                instructions: formData.deliveryNotes,
              }
            : null,
        pickupDetails:
          orderType === 'pickup'
            ? {
                date: formData.pickupDate,
                time: formData.pickupTime,
                outlet: 'The Daily Brew Flagship — 42 Heritage Blvd, Indiranagar',
              }
            : null,
        paymentMethod: formData.paymentMethod,
        isDemoPayment: true,
        items: cartItems,
        pricing: {
          subtotal,
          gstRate,
          gstAmount,
          deliveryFee: orderType === 'delivery' ? deliveryFee : 0,
          discountAmount,
          couponCode: coupon ? coupon.code : null,
          grandTotal: orderType === 'delivery' ? grandTotal : grandTotal - deliveryFee,
        },
        estimatedTime: orderType === 'delivery' ? '30-40 minutes' : '15-20 minutes',
      };

      const placedOrder = addOrder(orderPayload);
      setIsSubmitting(false);
      navigate(`/order-confirmation/${placedOrder.id}`);
    }, 1200);
  };

  return (
    <div className="min-h-screen pb-24 bg-[#F7F3EB]">
      
      {/* Editorial Header */}
      <div className="bg-espresso-950 text-softwhite py-12 sm:py-16 relative overflow-hidden border-b border-espresso-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury text-champagne-300 hover:text-white transition-colors mb-3"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Return to Menu
            </Link>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-softwhite">
              Boutique Checkout
            </h1>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-taupe-300">
            <ShieldCheck className="w-4 h-4 text-champagne-400" />
            <span>256-Bit SSL Encrypted Protocol</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Transparent Demo Notice */}
        <div className="p-4 rounded-luxe bg-amber-50 border border-amber-200 text-xs text-amber-950 mb-8 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block uppercase tracking-wider text-[11px]">DEMONSTRATION CHECKOUT SYSTEM</span>
            <p className="font-light mt-0.5">
              This application operates in demonstration mode. No genuine charges will be debited from your card or bank account. The system is architected for secure backend payment gateway integration (e.g. Razorpay test/live webhooks).
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Guest Information & Delivery/Pickup */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* 1. Guest Information */}
            <div className="bg-white p-6 sm:p-8 rounded-luxe border border-champagne-300/40 shadow-subtle space-y-5">
              <div className="flex items-center justify-between border-b border-ivory-200 pb-4">
                <h3 className="font-serif text-xl text-espresso-950">1. Guest Information</h3>
                <span className="text-[10px] uppercase tracking-luxury text-taupe-400">Step 1 of 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-[11px] uppercase tracking-luxury font-medium text-espresso-950 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Maya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-luxe bg-ivory-50 border text-xs text-espresso-950 focus:outline-none focus:border-espresso-950 ${
                      errors.name ? 'border-red-500' : 'border-champagne-300/60'
                    }`}
                  />
                  {errors.name && <p className="text-[10px] text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-luxury font-medium text-espresso-950 mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-luxe bg-ivory-50 border text-xs text-espresso-950 focus:outline-none focus:border-espresso-950 ${
                      errors.phone ? 'border-red-500' : 'border-champagne-300/60'
                    }`}
                  />
                  {errors.phone && <p className="text-[10px] text-red-600 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-luxury font-medium text-espresso-950 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="maya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-luxe bg-ivory-50 border text-xs text-espresso-950 focus:outline-none focus:border-espresso-950 ${
                      errors.email ? 'border-red-500' : 'border-champagne-300/60'
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>
            </div>

            {/* 2. Order Fulfilment: Delivery vs. Pickup */}
            <div className="bg-white p-6 sm:p-8 rounded-luxe border border-champagne-300/40 shadow-subtle space-y-6">
              <div className="flex items-center justify-between border-b border-ivory-200 pb-4">
                <h3 className="font-serif text-xl text-espresso-950">2. Fulfilment Method</h3>
                <span className="text-[10px] uppercase tracking-luxury text-taupe-400">Step 2 of 3</span>
              </div>

              {/* Toggle Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setOrderType('delivery')}
                  className={`p-4 rounded-luxe border text-left transition-all flex items-center gap-3 ${
                    orderType === 'delivery'
                      ? 'border-espresso-950 bg-ivory-100/70 shadow-sm'
                      : 'border-champagne-300/40 bg-white hover:bg-ivory-50'
                  }`}
                >
                  <Truck className="w-5 h-5 text-espresso-950 shrink-0" />
                  <div>
                    <h4 className="font-serif text-base text-espresso-950">White-Glove Delivery</h4>
                    <p className="text-[10px] text-taupe-500 font-light">Dispatched to your residence</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setOrderType('pickup')}
                  className={`p-4 rounded-luxe border text-left transition-all flex items-center gap-3 ${
                    orderType === 'pickup'
                      ? 'border-espresso-950 bg-ivory-100/70 shadow-sm'
                      : 'border-champagne-300/40 bg-white hover:bg-ivory-50'
                  }`}
                >
                  <Store className="w-5 h-5 text-espresso-950 shrink-0" />
                  <div>
                    <h4 className="font-serif text-base text-espresso-950">Storefront Pickup</h4>
                    <p className="text-[10px] text-taupe-500 font-light">Collect from Indiranagar Flagship</p>
                  </div>
                </button>
              </div>

              {/* Delivery Address Fields */}
              {orderType === 'delivery' ? (
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-luxury font-medium text-espresso-950 mb-1">
                        House / Flat / Villa No. *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Penthouse 4B, Emerald Court"
                        value={formData.houseNumber}
                        onChange={(e) => setFormData({ ...formData, houseNumber: e.target.value })}
                        className={`w-full px-4 py-3 rounded-luxe bg-ivory-50 border text-xs text-espresso-950 focus:outline-none focus:border-espresso-950 ${
                          errors.houseNumber ? 'border-red-500' : 'border-champagne-300/60'
                        }`}
                      />
                      {errors.houseNumber && <p className="text-[10px] text-red-600 mt-1">{errors.houseNumber}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-luxury font-medium text-espresso-950 mb-1">
                        Street / Boulevard *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 100 Feet Road"
                        value={formData.street}
                        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                        className={`w-full px-4 py-3 rounded-luxe bg-ivory-50 border text-xs text-espresso-950 focus:outline-none focus:border-espresso-950 ${
                          errors.street ? 'border-red-500' : 'border-champagne-300/60'
                        }`}
                      />
                      {errors.street && <p className="text-[10px] text-red-600 mt-1">{errors.street}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-luxury font-medium text-espresso-950 mb-1">
                        Locality / Area *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Indiranagar"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className={`w-full px-4 py-3 rounded-luxe bg-ivory-50 border text-xs text-espresso-950 focus:outline-none focus:border-espresso-950 ${
                          errors.area ? 'border-red-500' : 'border-champagne-300/60'
                        }`}
                      />
                      {errors.area && <p className="text-[10px] text-red-600 mt-1">{errors.area}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-luxury font-medium text-espresso-950 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-luxe bg-ivory-50 border border-champagne-300/60 text-xs text-espresso-950 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-luxury font-medium text-espresso-950 mb-1">
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        placeholder="560038"
                        maxLength={6}
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        className={`w-full px-4 py-3 rounded-luxe bg-ivory-50 border text-xs text-espresso-950 focus:outline-none focus:border-espresso-950 ${
                          errors.pincode ? 'border-red-500' : 'border-champagne-300/60'
                        }`}
                      />
                      {errors.pincode && <p className="text-[10px] text-red-600 mt-1">{errors.pincode}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-luxury font-medium text-espresso-950 mb-1">
                        Gate / Delivery Instructions (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Leave with concierge or Ring door bell"
                        value={formData.deliveryNotes}
                        onChange={(e) => setFormData({ ...formData, deliveryNotes: e.target.value })}
                        className="w-full px-4 py-3 rounded-luxe bg-ivory-50 border border-champagne-300/60 text-xs text-espresso-950 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-luxe bg-ivory-50 border border-champagne-300/40 text-xs text-espresso-900 space-y-1">
                    <span className="font-semibold block font-serif text-sm">Collection Flagship Location</span>
                    <p className="text-taupe-600 font-light">The Daily Brew, 42 Heritage Boulevard, Indiranagar, Bengaluru 560038</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-luxury font-medium text-espresso-950 mb-1">
                        Pickup Date *
                      </label>
                      <input
                        type="date"
                        value={formData.pickupDate}
                        onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-luxe bg-ivory-50 border border-champagne-300/60 text-xs text-espresso-950 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-luxury font-medium text-espresso-950 mb-1">
                        Preferred Time *
                      </label>
                      <select
                        value={formData.pickupTime}
                        onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-luxe bg-ivory-50 border border-champagne-300/60 text-xs text-espresso-950 focus:outline-none"
                      >
                        <option>9:00 AM – 10:00 AM</option>
                        <option>10:00 AM – 11:00 AM</option>
                        <option>11:00 AM – 12:00 PM</option>
                        <option>12:00 PM – 1:00 PM</option>
                        <option>1:00 PM – 2:00 PM</option>
                        <option>4:00 PM – 5:00 PM</option>
                        <option>5:00 PM – 6:00 PM</option>
                        <option>7:00 PM – 8:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* 3. Demo Payment Selection */}
            <div className="bg-white p-6 sm:p-8 rounded-luxe border border-champagne-300/40 shadow-subtle space-y-5">
              <div className="flex items-center justify-between border-b border-ivory-200 pb-4">
                <h3 className="font-serif text-xl text-espresso-950">3. Demonstration Payment Method</h3>
                <span className="text-[10px] uppercase tracking-luxury text-taupe-400">Step 3 of 3</span>
              </div>

              <div className="space-y-3">
                {[
                  { id: 'upi', name: 'Instant UPI (Google Pay, PhonePe, Paytm)', icon: Smartphone },
                  { id: 'card', name: 'Credit or Debit Card (Visa, Mastercard, Amex)', icon: CreditCard },
                  { id: 'netbanking', name: 'Net Banking (All Major Financial Institutions)', icon: Building },
                  { id: 'cod', name: 'Pay at Counter / Cash on Delivery', icon: Banknote },
                ].map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <label
                      key={opt.id}
                      className={`flex items-center justify-between p-4 rounded-luxe border cursor-pointer transition-all ${
                        formData.paymentMethod === opt.id
                          ? 'border-espresso-950 bg-ivory-100/80 shadow-sm'
                          : 'border-champagne-300/40 hover:bg-ivory-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={opt.id}
                          checked={formData.paymentMethod === opt.id}
                          onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                          className="w-4 h-4 accent-espresso-950"
                        />
                        <span className="text-xs font-medium text-espresso-950">{opt.name}</span>
                      </div>
                      <Icon className="w-4 h-4 text-taupe-400" />
                    </label>
                  );
                })}
              </div>

            </div>

          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-luxe border border-champagne-300/40 shadow-card space-y-6 sticky top-28">
              
              <div className="border-b border-ivory-200 pb-4">
                <h3 className="font-serif text-2xl text-espresso-950">Order Summary</h3>
                <span className="text-[10px] uppercase tracking-luxury text-taupe-400">
                  {cartItems.length} Unique Items in Bag
                </span>
              </div>

              {/* Items List */}
              <div className="max-h-60 overflow-y-auto divide-y divide-ivory-200 pr-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded-[2px] object-cover bg-ivory-200 shrink-0"
                      />
                      <div className="truncate">
                        <span className="font-serif font-normal text-espresso-950 block truncate">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-taupe-400 font-light">Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <span className="font-semibold text-espresso-950 shrink-0 font-sans">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-2 text-xs text-taupe-600 font-light border-t border-ivory-200 pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-espresso-950 font-sans">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (5% Hospitality Tax)</span>
                  <span className="font-medium text-espresso-950 font-sans">₹{gstAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Fulfilment</span>
                  <span className="font-medium text-espresso-950 font-sans">
                    {orderType === 'pickup' ? (
                      <span className="text-emerald-700">Store Pickup (Free)</span>
                    ) : deliveryFee === 0 ? (
                      <span className="text-emerald-700">Complimentary</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-medium">
                    <span>Privilege Savings ({coupon?.code})</span>
                    <span className="font-sans">-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between pt-3 border-t border-champagne-300/40 text-base font-semibold text-espresso-950 font-sans">
                  <span>Total Payable</span>
                  <span>
                    ₹{orderType === 'delivery' ? grandTotal : grandTotal - deliveryFee}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-luxe bg-espresso-950 hover:bg-espresso-900 text-softwhite text-xs uppercase tracking-luxury font-medium transition-all shadow-subtle flex items-center justify-center gap-2 hover:scale-[1.01] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Processing Demo Order...</span>
                ) : (
                  <>
                    <span>Place Order (Demo)</span>
                    <ShieldCheck className="w-4 h-4 text-champagne-300" />
                  </>
                )}
              </button>

              <div className="text-center text-[10px] text-taupe-400 font-light space-y-1">
                <p>By placing this order, you experience our demonstration e-commerce flow.</p>
                <p>A simulated receipt and tracking timeline will be generated immediately.</p>
              </div>

            </div>
          </div>

        </form>

      </div>
    </div>
  );
}

