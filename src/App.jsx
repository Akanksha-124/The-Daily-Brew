import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductDetailsModal from './components/ProductDetailsModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import StoryPage from './pages/StoryPage';
import ExperiencesPage from './pages/ExperiencesPage';
import OffersPage from './pages/OffersPage';
import ContactPage from './pages/ContactPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const handleQuickView = (product) => {
    setActiveModalProduct(product);
  };

  const handleCloseModal = () => {
    setActiveModalProduct(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F3EB] text-[#30231D] selection:bg-[#D9C6A5] selection:text-[#30231D] font-sans antialiased">
      <ScrollToTop />
      
      {/* Sticky Global Navigation */}
      <Navbar onOpenCart={() => setIsCartOpen(true)} />

      {/* Main Routed Content */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onQuickView={handleQuickView}
                onOpenCart={() => setIsCartOpen(true)}
              />
            }
          />
          <Route
            path="/menu"
            element={<MenuPage onQuickView={handleQuickView} />}
          />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/order-confirmation/:orderId"
            element={<OrderConfirmationPage />}
          />
          <Route
            path="/order-confirmation"
            element={<OrderConfirmationPage />}
          />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Shopping Bag Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Product Details Modal */}
      {activeModalProduct && (
        <ProductDetailsModal
          product={activeModalProduct}
          onClose={handleCloseModal}
        />
      )}

      {/* Luxury Editorial Footer */}
      <Footer />
    </div>
  );
}

