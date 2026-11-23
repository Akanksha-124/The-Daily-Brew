import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'the_daily_brew_bag_v1';
const ORDERS_STORAGE_KEY = 'the_daily_brew_orders_v1';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Error loading bag from localStorage', e);
      return [];
    }
  });

  const [coupon, setCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem(ORDERS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Sync with LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save bag to localStorage', e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    } catch (e) {
      console.error('Failed to save orders to localStorage', e);
    }
  }, [orders]);

  // Add to Bag
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  // Remove from Bag
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Update Quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Clear Bag
  const clearCart = () => {
    setCartItems([]);
    setCoupon(null);
    setCouponError('');
  };

  // Apply Coupon Code
  const applyCoupon = (code) => {
    const cleanCode = (code || '').trim().toUpperCase();
    setCouponError('');

    if (!cleanCode) {
      setCouponError('Please enter a coupon code.');
      return false;
    }

    if (cleanCode === 'BREW10') {
      setCoupon({
        code: 'BREW10',
        discountPercent: 10,
        flatDiscount: 0,
        description: '10% Privilege Discount'
      });
      return true;
    }

    if (cleanCode === 'FIRST50') {
      if (subtotal < 299) {
        setCouponError('Coupon FIRST50 requires a minimum order of ₹299.');
        return false;
      }
      setCoupon({
        code: 'FIRST50',
        discountPercent: 0,
        flatDiscount: 50,
        description: '₹50 Welcome Privilege'
      });
      return true;
    }

    setCouponError('Invalid or expired privilege code. Try BREW10 or FIRST50.');
    return false;
  };

  const removeCoupon = () => {
    setCoupon(null);
    setCouponError('');
  };

  // Record Demo Order
  const addOrder = (orderData) => {
    const newOrder = {
      ...orderData,
      id: `TDB-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      status: 'Order Placed'
    };
    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  // Financial Calculations
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // 5% GST
  const gstRate = 0.05;
  const gstAmount = Math.round(subtotal * gstRate);

  // Delivery: Free for orders above ₹500, else ₹60
  const deliveryFee = subtotal === 0 || subtotal >= 500 ? 0 : 60;

  // Calculate discount
  let discountAmount = 0;
  if (coupon) {
    if (coupon.discountPercent > 0) {
      discountAmount = Math.round((subtotal * coupon.discountPercent) / 100);
    } else if (coupon.flatDiscount > 0) {
      discountAmount = Math.min(coupon.flatDiscount, subtotal);
    }
  }

  const grandTotal = Math.max(0, subtotal + gstAmount + deliveryFee - discountAmount);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItemsCount,
        subtotal,
        gstRate,
        gstAmount,
        deliveryFee,
        coupon,
        couponError,
        applyCoupon,
        removeCoupon,
        discountAmount,
        grandTotal,
        orders,
        addOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

