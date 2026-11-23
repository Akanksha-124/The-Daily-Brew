# THE DAILY BREW — Luxury Boutique Café & Kitchen
> "A Little Luxury in Every Moment."

An exceptionally elegant, editorial-style boutique café and gourmet ordering e-commerce application. Crafted with an aesthetic inspired by luxury European coffee salons and Parisian patisseries.

---

## ☕ Features & Architecture

- **Visual Brand Identity**: Refined European palette consisting of Warm Ivory (`#F7F3EB`), Soft Champagne (`#D9C6A5`), Espresso (`#30231D`), Deep Walnut (`#49372D`), and Soft White (`#FFFEFA`).
- **Typography**: Editorial hierarchy using *Cormorant Garamond* (headings) and *Manrope* / *DM Sans* (body).
- **Culinary Catalogue**: 37 verified creations across Specialty Coffee, Signature Beverages, Gourmet Snacks, Artisan Pasta, French Patisserie, and Morning Viennoiserie.
- **DSLR Food Photography**: High-resolution authentic imagery showcasing textured ceramic bowls, delicate latte art, glossy patisserie, and sunlit grand salon interiors.
- **Interactive Shopping Bag**:
  - Live bag counter in navigation.
  - Quantity controls and item removal.
  - Subtotal, 5% GST hospitality tax, and complimentary delivery calculation.
  - Privilege discount codes (`BREW10` for 10% off, `FIRST50` for ₹50 off above ₹299).
  - LocalStorage persistence across browser refreshes.
- **Boutique Checkout Experience**:
  - White-Glove Home Delivery vs. Storefront Pickup toggle.
  - Complete customer contact and delivery address validation.
  - Clearly labelled **Demo Payment Gateway** (UPI, Card, Net Banking, COD).
  - Clean modular architecture ready for Razorpay backend webhook integration.
- **Order Confirmation & Live Tracking**:
  - Unique receipt reference ID.
  - Itemized order manifest and pricing breakdown.
  - Simulated 4-stage live tracking timeline (*Order Placed → Preparing → Out for Delivery → Delivered*).
  - Confetti celebration upon placement.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom editorial extensions
- **Routing**: React Router DOM (v6)
- **Icons**: Lucide React
- **Animations & Effects**: Canvas Confetti & CSS smooth transitions
- **State & Persistence**: React Context API & Browser LocalStorage

---

## 🚀 Getting Started

### Prerequisites
Node.js (v18 or higher recommended) and npm.

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
The compiled, optimized output will be located in the `dist/` directory.

---

## 📦 Lovable Import Compatibility

This repository is strictly structured for 1-click import into **Lovable**:
1. Standard React + Vite file tree with `src/`, `public/`, and `index.html`.
2. Clean `package.json` with zero unsupported native dependencies.
3. Fully portable components, mock data in `src/data/menuData.js`, and LocalStorage state persistence.
4. No hardcoded backend secrets or keys.

---

## 📜 License
Private & Proprietary — Designed for The Daily Brew.

