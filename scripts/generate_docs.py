import base64
import os

def get_base64_img(img_path):
    with open(img_path, 'rb') as f:
        return base64.b64encode(f.read()).decode('utf-8')

desktop_b64 = get_base64_img('screenshots/desktop-view.png')
tablet_b64 = get_base64_img('screenshots/tablet-view.png')
mobile_b64 = get_base64_img('screenshots/mobile-view.png')

# 1. GENERATE THE 3-PAGE SUBMISSION DOC (Word-compatible HTML format)
doc_content = f"""<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset="utf-8">
  <title>The Daily Brew — Project Submission Document</title>
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>100</w:Zoom>
      <w:DoNotOptimizeForBrowser/>
    </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    @page {{
      size: A4;
      margin: 1in;
    }}
    body {{
      font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
      color: #30231D;
      background: #FFFFFF;
      line-height: 1.5;
      font-size: 11pt;
    }}
    h1 {{
      font-family: 'Georgia', 'Times New Roman', serif;
      font-size: 24pt;
      color: #1F1713;
      margin-top: 0;
      margin-bottom: 6pt;
    }}
    h2 {{
      font-family: 'Georgia', 'Times New Roman', serif;
      font-size: 15pt;
      color: #49372D;
      border-bottom: 1.5pt solid #D9C6A5;
      padding-bottom: 4pt;
      margin-top: 14pt;
      margin-bottom: 8pt;
    }}
    .page-break {{
      page-break-after: always;
      mso-special-character: line-break;
    }}
    .header-box {{
      background: #F7F3EB;
      border: 1pt solid #D9C6A5;
      padding: 18pt 24pt;
      margin-bottom: 20pt;
      border-radius: 4pt;
    }}
    .meta-table {{
      width: 100%;
      border-collapse: collapse;
      margin-top: 10pt;
    }}
    .meta-table td {{
      padding: 6pt 8pt;
      font-size: 11pt;
      border-bottom: 1pt solid #EAE4D9;
    }}
    .meta-table td.label {{
      font-weight: bold;
      color: #49372D;
      width: 32%;
    }}
    .prompt-box {{
      background: #FAF8F4;
      border: 1pt solid #D9C6A5;
      padding: 14pt 18pt;
      font-size: 9pt;
      line-height: 1.45;
      color: #30231D;
      white-space: pre-wrap;
      font-family: 'Calibri', Arial, sans-serif;
    }}
    .screenshot-container {{
      text-align: center;
      margin-bottom: 14pt;
    }}
    .screenshot-img {{
      max-width: 100%;
      height: auto;
      border: 1pt solid #D9C6A5;
      border-radius: 4pt;
      box-shadow: 0 2pt 8pt rgba(48,35,29,0.1);
    }}
    .screenshot-caption {{
      font-size: 9.5pt;
      color: #6E604F;
      font-weight: bold;
      margin-top: 4pt;
    }}
  </style>
</head>
<body>

  <!-- ================= PAGE 1: TITLE PAGE & PROJECT OVERVIEW ================= -->
  <div class="header-box">
    <div style="font-size: 10pt; text-transform: uppercase; letter-spacing: 2px; color: #8C7C6A; font-weight: bold; margin-bottom: 4pt;">
      ACADEMIC PROJECT SUBMISSION &bull; PROOF OF WORK
    </div>
    <h1>THE DAILY BREW</h1>
    <div style="font-size: 12pt; color: #6E604F; font-style: italic; margin-bottom: 14pt;">
      "A Little Luxury in Every Moment." &bull; A Luxury Boutique Café &amp; Gourmet Ordering Application
    </div>

    <table class="meta-table">
      <tr>
        <td class="label">Project Name:</td>
        <td><strong>THE DAILY BREW</strong></td>
      </tr>
      <tr>
        <td class="label">Tagline:</td>
        <td>"A Little Luxury in Every Moment."</td>
      </tr>
      <tr>
        <td class="label">Student Name:</td>
        <td><strong>[Your Name]</strong></td>
      </tr>
      <tr>
        <td class="label">Roll No. / Student ID:</td>
        <td><strong>[Your Roll Number / Student ID]</strong></td>
      </tr>
      <tr>
        <td class="label">Course / Subject:</td>
        <td>Full Stack Development / Generative AI Web Application</td>
      </tr>
      <tr>
        <td class="label">Live Website URL:</td>
        <td><strong><a href="https://the-daily-brew.lovable.app">https://the-daily-brew.lovable.app</a></strong></td>
      </tr>
      <tr>
        <td class="label">Platform / Tech Stack:</td>
        <td>Created with <strong>Lovable</strong> &bull; React &bull; Vite &bull; Tailwind CSS &bull; Lucide React &bull; LocalStorage</td>
      </tr>
    </table>
  </div>

  <h2>Project Overview</h2>
  <p>
    <strong>THE DAILY BREW</strong> is an editorial-style luxury boutique café and food ordering web application inspired by high-end Parisian coffee houses and European boutique gastronomy. Built with generous white space, bespoke color harmonies (warm ivory, soft champagne, rich espresso, deep walnut), and authentic commercial-grade DSLR culinary photography.
  </p>

  <h2>Key Features Implemented</h2>
  <ul>
    <li><strong>Full Culinary Catalogue:</strong> 37 menu products across Specialty Coffee, Signature Beverages, Gourmet Snacks, Artisan Pasta, Exquisite Desserts, and Morning Bakery.</li>
    <li><strong>Interactive Menu Engine:</strong> Real-time text search, category tabs, and a "Vegetarian Selection Only" filter.</li>
    <li><strong>Product Details Modal:</strong> Large photography, detailed tasting notes, preparation times, calorie counts, and artisan ingredient tags.</li>
    <li><strong>Luxury Shopping Bag:</strong> Item quantity controls, 5% GST hospitality tax, complimentary delivery above ₹500, working privilege coupons (<code>BREW10</code> &amp; <code>FIRST50</code>), and persistent storage in <code>localStorage</code>.</li>
    <li><strong>Checkout &amp; Demo Order Tracking:</strong> Home delivery vs. store pickup toggle, address validation, demo payment selection, and an animated 4-stage tracking timeline.</li>
  </ul>

  <div class="page-break"></div>

  <!-- ================= PAGE 2: THE EXACT DETAILED PROMPT ================= -->
  <h2>Master Prompt Specification</h2>
  <p style="font-size: 9.5pt; color: #6E604F; margin-bottom: 8pt;">
    <em>Below is the complete, unabridged prompt used to generate and engineer the entire application:</em>
  </p>

  <div class="prompt-box"># PROJECT: THE DAILY BREW
### A Luxury Boutique Café | Coffee, Kitchen &amp; Little Moments

Act as a world-class brand designer, luxury hospitality website designer, senior UI/UX designer and full-stack developer.

Transform THE DAILY BREW into an exceptionally elegant, sophisticated and premium café brand. Build a complete, functional, responsive café website and food-ordering application.

The website must look like an established luxury café or European boutique coffee house, not a generic restaurant template.

## 1. BRAND IDENTITY
Brand name: THE DAILY BREW
Brand positioning: Premium boutique café offering specialty coffee, handcrafted beverages, gourmet snacks, Italian pasta, artisan bakery and exquisite desserts.
Brand personality: Sophisticated, Timeless, Minimal, Warm, Elegant, Contemporary, Exclusive but welcoming.
Tagline: "A Little Luxury in Every Moment."

## 2. VISUAL DESIGN DIRECTION
Create an expensive-looking, editorial-style website inspired by luxury European cafés, Parisian coffee houses and contemporary boutique restaurants.
Colour palette:
- Warm ivory: #F7F3EB
- Soft champagne: #D9C6A5
- Espresso: #30231D
- Deep walnut: #49372D
- Muted taupe: #A99A88
- Soft white: #FFFEFA
Typography:
- Headings: Cormorant Garamond or Playfair Display.
- Body: DM Sans or Manrope.
- Use refined typography, elegant letter spacing and beautiful text hierarchy.
Design principles:
- Generous white space.
- Large editorial photography.
- Minimal navigation.
- Beautiful image compositions.
- Delicate borders and understated shadows.
- Elegant buttons with subtle hover effects.
- Refined transitions and micro-interactions.
- Sophisticated layouts with asymmetrical editorial sections.

Avoid:
- Bright colours, neon gradients, excessively rounded bubble cards, cartoon illustrations, emoji decorations, cheap-looking templates, excessive animations, overcrowded layouts, generic AI-generated food visuals.

## 3. PHOTOGRAPHY REQUIREMENTS
Use authentic, realistic, professional food and café photography.
Photography should look like professional restaurant photography taken using a DSLR camera.
Required photography:
- Beautiful cappuccino with detailed latte art.
- Espresso served in elegant ceramic cups.
- Iced Spanish latte in transparent glasses.
- Specialty matcha beverages.
- Beautifully plated Italian pasta.
- Gourmet sandwiches and artisan toast.
- Premium cheesecakes and chocolate desserts.
- Freshly baked croissants and pastries.
- Luxury café interiors with natural sunlight.
- Coffee preparation and barista photography.
Every product must have its own relevant photograph. Do not reuse the same photograph across different menu products.

## 4. WEBSITE NAVIGATION
Logo: THE DAILY BREW
Navigation: Home, Our Menu, Our Story, Experiences, Offers, Contact
Include: Minimal shopping bag icon, live cart quantity indicator, elegant mobile navigation, sticky navigation with subtle background transition.

## 5. HOMEPAGE
Hero section:
Headline: "Slow Down. Sip Something Beautiful."
Supporting text: "Thoughtfully crafted coffee, exquisite flavours and beautiful moments. Discover your everyday escape at The Daily Brew."
Buttons: Explore Our Menu, Order Your Favourites
Sections: Our Philosophy, Signature Selection, The Art of Coffee, From Our Kitchen, Something Sweet, The Daily Experience, Special Offers, Customer Experiences, Newsletter, Premium Footer.

## 6. MENU PRODUCTS (37 ITEMS)
COFFEE: Spanish Latte ₹220, Caramel Macchiato ₹240, Classic Cappuccino ₹180, Hazelnut Latte ₹230, Vanilla Cold Brew ₹210, Mocha Frappe ₹250, Classic Americano ₹150.
SIGNATURE BEVERAGES: Strawberry Matcha Latte ₹260, Blueberry Iced Tea ₹190, Mango Passion Cooler ₹210, Classic Hot Chocolate ₹220, Iced Brown Sugar Latte ₹230, Rose Milk Latte ₹240.
SNACKS: Loaded Peri Peri Fries ₹220, Cheesy Garlic Bread ₹190, Truffle Mushroom Toast ₹280, Crispy Chicken Strips ₹290, Classic Veg Sandwich ₹210, Pesto Grilled Sandwich ₹260, Cheese Jalapeno Poppers ₹230.
PASTA: Creamy Alfredo Pasta ₹320, Spicy Arrabbiata Pasta ₹290, Pink Sauce Pasta ₹330, Pesto Basil Pasta ₹340, Creamy Mushroom Pasta ₹350, Chicken Alfredo Pasta ₹390.
DESSERTS: Belgian Chocolate Brownie ₹190, Lotus Biscoff Cheesecake ₹280, Classic Tiramisu ₹290, New York Cheesecake ₹270, Chocolate Lava Cake ₹240, Red Velvet Pastry ₹220, Blueberry Cheesecake ₹280.
BAKERY: Butter Croissant ₹160, Chocolate Croissant ₹190, Cinnamon Roll ₹180, Almond Danish ₹210.

## 7. PRODUCT DETAILS MODAL
Display large product photograph, product name, detailed description, price, dietary information, quantity selector, and Add to Bag button.

## 8. SHOPPING BAG &amp; PRIVILEGES
Use "Shopping Bag" terminology. Subtotal, 5% GST hospitality tax, complimentary delivery calculation. Working coupons: BREW10 (10% off), FIRST50 (₹50 off orders above ₹299). LocalStorage persistence.

## 9. CHECKOUT &amp; DEMO ORDER TRACKING
Customer info validation. Delivery vs. Store pickup toggle. Demo payment options (UPI, Card, Net Banking, COD). Order confirmation with unique ID and simulated 4-stage tracking timeline.</div>

  <div class="page-break"></div>

  <!-- ================= PAGE 3: RESPONSIVE SCREENSHOTS PROOF OF WORK ================= -->
  <h2>Proof of Work &mdash; Responsive Homepage Screenshots</h2>
  <p style="font-size: 9.5pt; color: #6E604F; margin-bottom: 12pt;">
    <em>Actual screenshots captured via automated headless browser testing on Desktop (1440px), Tablet (768px), and Mobile (375px) viewports:</em>
  </p>

  <div class="screenshot-container">
    <img src="data:image/png;base64,{desktop_b64}" class="screenshot-img" style="max-height: 200pt;" alt="Desktop View">
    <div class="screenshot-caption">1. Desktop Viewport (1440 &times; 900) &mdash; Full Navigation &amp; Grand Editorial Hero</div>
  </div>

  <table style="width: 100%; border-collapse: collapse; margin-top: 10pt;">
    <tr>
      <td style="width: 55%; vertical-align: top; padding-right: 10pt;">
        <div class="screenshot-container">
          <img src="data:image/png;base64,{tablet_b64}" class="screenshot-img" style="max-height: 210pt;" alt="Tablet View">
          <div class="screenshot-caption">2. Tablet Viewport (768 &times; 1024 iPad)</div>
        </div>
      </td>
      <td style="width: 45%; vertical-align: top; padding-left: 10pt;">
        <div class="screenshot-container">
          <img src="data:image/png;base64,{mobile_b64}" class="screenshot-img" style="max-height: 210pt;" alt="Mobile View">
          <div class="screenshot-caption">3. Mobile Viewport (375 &times; 812 iPhone)</div>
        </div>
      </td>
    </tr>
  </table>

  <div style="margin-top: 14pt; padding-top: 8pt; border-top: 1pt solid #D9C6A5; text-align: center; font-size: 8.5pt; color: #8C7C6A;">
    THE DAILY BREW &bull; Academic Proof of Work &bull; Verified on Lovable Web Application
  </div>

</body>
</html>"""

with open('THE_DAILY_BREW_SUBMISSION_3_PAGE.doc', 'w', encoding='utf-8') as f:
    f.write(doc_content)

print("Created THE_DAILY_BREW_SUBMISSION_3_PAGE.doc successfully!")

# 2. GENERATE SCREENSHOTS 3-PAGE PDF HTML (1 Page Desktop, 1 Page Tablet, 1 Page Mobile)
screenshots_pdf_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>The Daily Brew — Homepage Screenshots Proof</title>
  <style>
    @page {{
      size: A4 portrait;
      margin: 12mm 15mm;
    }}
    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}
    body {{
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: #30231D;
      background: #FFFFFF;
    }}
    .page {{
      width: 100%;
      height: 270mm;
      page-break-after: always;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    }}
    .page:last-child {{
      page-break-after: avoid;
    }}
    .header-bar {{
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      border-bottom: 2px solid #D9C6A5;
      padding-bottom: 8px;
      margin-bottom: 12px;
    }}
    .header-title {{
      font-family: 'Georgia', serif;
      font-size: 16pt;
      color: #1F1713;
    }}
    .header-meta {{
      font-size: 9pt;
      color: #8C7C6A;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
    }}
    .image-frame {{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #F7F3EB;
      border: 1px solid #D9C6A5;
      border-radius: 6px;
      padding: 12px;
      overflow: hidden;
    }}
    .screenshot-img {{
      max-width: 100%;
      max-height: 215mm;
      object-fit: contain;
      border-radius: 4px;
      box-shadow: 0 4px 14px rgba(48,35,29,0.12);
      border: 1px solid #D9C6A5;
    }}
    .caption {{
      font-size: 9.5pt;
      color: #49372D;
      font-weight: 600;
      margin-top: 8px;
      text-align: center;
    }}
    .footer-bar {{
      border-top: 1px solid #EAE4D9;
      padding-top: 6px;
      font-size: 8pt;
      color: #A99A88;
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
    }}
  </style>
</head>
<body>

  <!-- PAGE 1: DESKTOP VIEW -->
  <div class="page">
    <div class="header-bar">
      <div>
        <h1 class="header-title">THE DAILY BREW — Proof of Work</h1>
        <span style="font-size: 9pt; color: #6E604F;">Homepage Screenshot &bull; Desktop Viewport (1440 &times; 900)</span>
      </div>
      <div class="header-meta">PAGE 1 / 3 &bull; DESKTOP VIEW</div>
    </div>

    <div class="image-frame">
      <img src="data:image/png;base64,{desktop_b64}" class="screenshot-img" alt="Desktop Screenshot">
      <div class="caption">Desktop View (1440px) &bull; Navigation Bar, Hero Section &amp; Curated Collections</div>
    </div>

    <div class="footer-bar">
      <span>THE DAILY BREW &bull; Created with Lovable</span>
      <span>Proof of Work for Academic Evaluation</span>
    </div>
  </div>

  <!-- PAGE 2: TABLET VIEW -->
  <div class="page">
    <div class="header-bar">
      <div>
        <h1 class="header-title">THE DAILY BREW — Proof of Work</h1>
        <span style="font-size: 9pt; color: #6E604F;">Homepage Screenshot &bull; Tablet Viewport (768 &times; 1024 iPad)</span>
      </div>
      <div class="header-meta">PAGE 2 / 3 &bull; TABLET VIEW</div>
    </div>

    <div class="image-frame">
      <img src="data:image/png;base64,{tablet_b64}" class="screenshot-img" alt="Tablet Screenshot">
      <div class="caption">Tablet View (768px iPad) &bull; Responsive 2-Column Grid &amp; Compact Header</div>
    </div>

    <div class="footer-bar">
      <span>THE DAILY BREW &bull; Created with Lovable</span>
      <span>Proof of Work for Academic Evaluation</span>
    </div>
  </div>

  <!-- PAGE 3: MOBILE VIEW -->
  <div class="page">
    <div class="header-bar">
      <div>
        <h1 class="header-title">THE DAILY BREW — Proof of Work</h1>
        <span style="font-size: 9pt; color: #6E604F;">Homepage Screenshot &bull; Mobile Viewport (375 &times; 812 iPhone)</span>
      </div>
      <div class="header-meta">PAGE 3 / 3 &bull; MOBILE VIEW</div>
    </div>

    <div class="image-frame">
      <img src="data:image/png;base64,{mobile_b64}" class="screenshot-img" alt="Mobile Screenshot">
      <div class="caption">Mobile View (375px iPhone) &bull; Touch-Friendly Stack &amp; Mobile Drawer Navigation</div>
    </div>

    <div class="footer-bar">
      <span>THE DAILY BREW &bull; Created with Lovable</span>
      <span>Proof of Work for Academic Evaluation</span>
    </div>
  </div>

</body>
</html>"""

with open('THE_DAILY_BREW_SCREENSHOTS_3_PAGE_PROOF.html', 'w', encoding='utf-8') as f:
    f.write(screenshots_pdf_html)

print("Created THE_DAILY_BREW_SCREENSHOTS_3_PAGE_PROOF.html successfully!")
