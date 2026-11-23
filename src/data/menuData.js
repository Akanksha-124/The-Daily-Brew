// THE DAILY BREW — Complete Luxury Boutique Café Catalogue
// All photographs are curated high-resolution DSLR culinary imagery from verified Unsplash CDNs

export const CATEGORIES = [
  { id: 'all', name: 'All Collections' },
  { id: 'coffee', name: 'Specialty Coffee' },
  { id: 'signature-beverages', name: 'Signature Beverages' },
  { id: 'snacks', name: 'Gourmet Snacks' },
  { id: 'pasta', name: 'Artisan Pasta' },
  { id: 'desserts', name: 'Exquisite Desserts' },
  { id: 'bakery', name: 'Morning Bakery' },
];

export const PRODUCTS = [
  // ===================== SPECIALTY COFFEE =====================
  {
    id: 'coffee-1',
    name: 'Spanish Latte',
    category: 'coffee',
    price: 220,
    isVeg: true,
    badge: 'Signature',
    rating: 4.9,
    prepTime: '4-6 mins',
    calories: '195 kcal',
    description: 'Double ristretto poured over velvety textured milk, infused with sweetened condensed milk and dusted with Ceylon cinnamon.',
    detailedDescription: 'Our flagship morning beverage. High-elevation Ethiopian Arabica extracted as a rich double ristretto, layered gracefully over textured whole milk and artisan condensed milk. A silky balance of intense espresso notes and rounded, caramelized sweetness.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Double Ristretto Espresso', 'Condensed Milk', 'Micro-Foam Whole Milk', 'Ceylon Cinnamon']
  },
  {
    id: 'coffee-2',
    name: 'Caramel Macchiato',
    category: 'coffee',
    price: 240,
    isVeg: true,
    badge: 'Bestseller',
    rating: 4.8,
    prepTime: '4-5 mins',
    calories: '220 kcal',
    description: 'Steamed milk stained with dark roast espresso, pure Madagascar vanilla bean syrup, and hand-drizzled salted caramel.',
    detailedDescription: 'Freshly steamed milk marbled with micro-foam and Madagascar vanilla essence, marked with a double shot of dark-roasted espresso and finished with slow-cooked sea-salt caramel drizzle.',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Dark Espresso', 'Steamed Whole Milk', 'Madagascar Vanilla', 'Sea-Salt Caramel']
  },
  {
    id: 'coffee-3',
    name: 'Classic Cappuccino',
    category: 'coffee',
    price: 180,
    isVeg: true,
    badge: 'Classic',
    rating: 4.9,
    prepTime: '3-4 mins',
    calories: '120 kcal',
    description: 'Equal harmonies of intense espresso, silky steamed milk, and dense micro-foam crowned with exquisite rosette latte art.',
    detailedDescription: 'The purist’s benchmark. Single-origin Chikmagalur Arabica brewed to golden perfection, combined in precise 1:1:1 harmony with steamed dairy and a cloud of velvety foam in warm ceramic porcelain.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Single-Origin Arabica', 'Silky Steamed Dairy', 'Dense Micro-foam']
  },
  {
    id: 'coffee-4',
    name: 'Hazelnut Latte',
    category: 'coffee',
    price: 230,
    isVeg: true,
    rating: 4.7,
    prepTime: '4-5 mins',
    calories: '210 kcal',
    description: 'Fresh espresso and silky steamed milk enriched with roasted Piedmont hazelnut extract and a hint of raw demerara.',
    detailedDescription: 'Warm, nutty comfort in a cup. A smooth double espresso melds seamlessly with steamed milk infused with cold-pressed roasted hazelnut syrup, leaving a lingering praline finish on the palate.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Double Espresso', 'Steamed Dairy', 'Roasted Hazelnut Extract', 'Raw Demerara']
  },
  {
    id: 'coffee-5',
    name: 'Vanilla Cold Brew',
    category: 'coffee',
    price: 210,
    isVeg: true,
    badge: 'Craft Brew',
    rating: 4.9,
    prepTime: '2 mins',
    calories: '95 kcal',
    description: '18-hour slow cold-steeped Arabica served over crystal ice, topped with handcrafted sweet vanilla cream foam.',
    detailedDescription: 'Coarsely ground shade-grown beans steeped in filtered mountain water for 18 hours to eliminate acidity and unlock natural cacao notes. Floated with cold vanilla-infused sweet foam that cascades slowly into the glass.',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=85',
    ingredients: ['18-Hour Cold Brew Extract', 'Sweetened Cream Float', 'Vanilla Pod Essence', 'Clear Ice']
  },
  {
    id: 'coffee-6',
    name: 'Mocha Frappe',
    category: 'coffee',
    price: 250,
    isVeg: true,
    badge: 'Indulgent',
    rating: 4.8,
    prepTime: '5-6 mins',
    calories: '310 kcal',
    description: 'Blended espresso with single-origin Ghanaian chocolate, fresh cream, crushed ice, and Belgian cocoa nibs.',
    detailedDescription: 'A rich iced blended indulgence. Espresso pulled fresh and blended with 70% dark Ghanaian cocoa ganache, whole cream, and shaved ice, garnished with lightly sweetened whipped cream and bittersweet cocoa curls.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Espresso', 'Dark Ghanaian Cocoa Ganache', 'Dairy Cream', 'Belgian Cocoa Curls']
  },
  {
    id: 'coffee-7',
    name: 'Classic Americano',
    category: 'coffee',
    price: 150,
    isVeg: true,
    rating: 4.6,
    prepTime: '3 mins',
    calories: '10 kcal',
    description: 'Double shot of single-origin Arabica poured over 92°C artisanal hot water, preserving a delicate golden crema.',
    detailedDescription: 'Pure, unadorned coffee elegance. Hand-dialed double espresso extracted directly over hot water to preserve the delicate crema, highlighting subtle tasting notes of toasted almond, honey, and dried orange peel.',
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Double Espresso Shot', 'Filtered 92°C Hot Water', 'Natural Crema']
  },

  // ===================== SIGNATURE BEVERAGES =====================
  {
    id: 'bev-1',
    name: 'Strawberry Matcha Latte',
    category: 'signature-beverages',
    price: 260,
    isVeg: true,
    badge: 'Artisan',
    rating: 4.9,
    prepTime: '5-6 mins',
    calories: '185 kcal',
    description: 'Ceremonial grade Uji matcha whisked with bamboo chasen, poured over oat milk and house-made wild strawberry compote.',
    detailedDescription: 'A visually arresting tricolor creation. Stone-ground first-harvest Japanese matcha from Uji whisked to a vibrant froth, layered gracefully over creamy oat milk and crushed mountain strawberries simmered with lemon peel.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Ceremonial Uji Matcha', 'Oat Milk', 'Wild Strawberry Reduction', 'Lemon Zest']
  },
  {
    id: 'bev-2',
    name: 'Blueberry Iced Tea',
    category: 'signature-beverages',
    price: 190,
    isVeg: true,
    rating: 4.7,
    prepTime: '3-4 mins',
    calories: '90 kcal',
    description: 'First-flush Darjeeling black tea brewed cold, shaken with wild organic blueberries, fresh mint, and Sicilian lemon juice.',
    detailedDescription: 'Exceptionally crisp and refreshing. Hand-picked Darjeeling leaves steeped cold, shaken vigorously with crushed organic blueberries, torn spearmint, and freshly squeezed lemon juice over hand-carved ice cubes.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Darjeeling Black Tea', 'Wild Blueberry Purée', 'Fresh Mint', 'Sicilian Lemon']
  },
  {
    id: 'bev-3',
    name: 'Mango Passion Cooler',
    category: 'signature-beverages',
    price: 210,
    isVeg: true,
    badge: 'Seasonal',
    rating: 4.8,
    prepTime: '3-4 mins',
    calories: '135 kcal',
    description: 'Pure Alphonso mango pulp infused with tart purple passion fruit, sparkling mineral water, and garden basil.',
    detailedDescription: 'Sunshine captured in fine glassware. Ripe Ratnagiri Alphonso mango blended with aromatic passionfruit pulp, topped with chilled effervescent sparkling water and fresh bruised holy basil leaves.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Alphonso Mango Nectar', 'Passion Fruit Seeds', 'San Pellegrino Sparkling', 'Sweet Basil']
  },
  {
    id: 'bev-4',
    name: 'Classic Hot Chocolate',
    category: 'signature-beverages',
    price: 220,
    isVeg: true,
    badge: 'Bestseller',
    rating: 4.9,
    prepTime: '5-6 mins',
    calories: '280 kcal',
    description: 'Melted Belgian 64% Valrhona dark chocolate callets whisked with whole milk, topped with toasted marshmallow cream.',
    detailedDescription: 'Decadent European drinking chocolate. Rich dark Valrhona callets melted directly into warm whole cream with a pinch of sea salt, served with house-whipped marshmallow cream toasted lightly with a culinary torch.',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=85',
    ingredients: ['64% Dark Belgian Chocolate', 'Whole Cream Milk', 'Maldon Flaky Salt', 'Marshmallow Cream']
  },
  {
    id: 'bev-5',
    name: 'Iced Brown Sugar Latte',
    category: 'signature-beverages',
    price: 230,
    isVeg: true,
    rating: 4.8,
    prepTime: '4 mins',
    calories: '190 kcal',
    description: 'Espresso shaken with caramelized muscovado sugar, cinnamon bark essence, and chilled oat milk over hand-cut ice.',
    detailedDescription: 'Double espresso shaken briskly in a Boston cocktail shaker with slow-caramelized brown sugar and warm spices, strained over dense ice and finished with silky barista oat milk.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Double Espresso', 'Muscovado Brown Sugar', 'Cinnamon Essence', 'Barista Oat Milk']
  },
  {
    id: 'bev-6',
    name: 'Rose Milk Latte',
    category: 'signature-beverages',
    price: 240,
    isVeg: true,
    rating: 4.7,
    prepTime: '4 mins',
    calories: '175 kcal',
    description: 'Distilled Damascus rose petal extract gently infused with warm textured milk, blonde espresso, and candied rose petals.',
    detailedDescription: 'An aromatic Middle Eastern-inspired specialty. Mild blonde roasted espresso married with steamed milk steeped in organic rose water and beetroot blush, finished with edible dried Damascus rose petals.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Blonde Espresso', 'Damascus Rose Infusion', 'Velvet Milk', 'Edible Rose Buds']
  },

  // ===================== GOURMET SNACKS =====================
  {
    id: 'snack-1',
    name: 'Loaded Peri Peri Fries',
    category: 'snacks',
    price: 220,
    isVeg: true,
    badge: 'Popular',
    rating: 4.7,
    prepTime: '8-10 mins',
    calories: '340 kcal',
    description: 'Hand-cut russet potato batons fried twice, tossed in smoky African bird’s eye chili spice and warm melted cheddar drizzle.',
    detailedDescription: 'Crisp on the outside, fluffy within. Golden russet fries dusted in our house-blended peri peri spice blend, topped with creamy aged white cheddar sauce, scallions, and pickled red jalapeño rings.',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Double-Fried Russet Potatoes', 'Smoked Peri Peri Spice', 'Warm Cheddar Sauce', 'Scallions']
  },
  {
    id: 'snack-2',
    name: 'Cheesy Garlic Bread',
    category: 'snacks',
    price: 190,
    isVeg: true,
    rating: 4.8,
    prepTime: '6-8 mins',
    calories: '290 kcal',
    description: 'Stone-baked sourdough baguette slathered with confit garlic compound butter, fresh parsley, and bubbling mozzarella.',
    detailedDescription: 'Artisan sourdough baguette sliced thick, brushed generously with slow-roasted confit garlic and salted French butter, blanketed with melted fior di latte mozzarella and baked until blistered and golden.',
    image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Rustic Sourdough', 'Confit Garlic Butter', 'Fior di Latte Mozzarella', 'Flat-Leaf Parsley']
  },
  {
    id: 'snack-3',
    name: 'Truffle Mushroom Toast',
    category: 'snacks',
    price: 280,
    isVeg: true,
    badge: "Chef's Special",
    rating: 4.9,
    prepTime: '8-10 mins',
    calories: '260 kcal',
    description: 'Sautéed wild cremini & shiitake mushrooms on toasted sourdough, white truffle oil, whipped ricotta, and aged parmesan.',
    detailedDescription: 'Our signature savory starter. Thick-cut seeded sourdough toasted in olive oil, spread with lemon-whipped whole-milk ricotta, topped with pan-seared wild woodland mushrooms, black truffle oil, and 24-month Parmigiano Reggiano.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Seeded Sourdough', 'Wild Forest Mushrooms', 'Whipped Ricotta', 'White Truffle Oil', 'Parmigiano']
  },
  {
    id: 'snack-4',
    name: 'Crispy Chicken Strips',
    category: 'snacks',
    price: 290,
    isVeg: false,
    badge: 'Crispy',
    rating: 4.8,
    prepTime: '10-12 mins',
    calories: '380 kcal',
    description: 'Buttermilk-brined chicken breast tenders coated in seasoned Japanese panko, served with smoked paprika honey dip.',
    detailedDescription: 'Tender chicken breast strips marinated for 12 hours in buttermilk and fresh herbs, dreadged in crisp panko breadcrumbs, fried to a golden crunch and served with our signature smoked paprika honey mustard aioli.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Buttermilk-Brined Chicken', 'Golden Panko Crust', 'Smoked Paprika Dip', 'Fresh Herbs']
  },
  {
    id: 'snack-5',
    name: 'Classic Veg Sandwich',
    category: 'snacks',
    price: 210,
    isVeg: true,
    rating: 4.6,
    prepTime: '6-8 mins',
    calories: '240 kcal',
    description: 'Crisp English cucumber, vine-ripened tomatoes, pickled red onion, mint chutney, and herb cream on sourdough bread.',
    detailedDescription: 'The elevated classic. Farm-fresh English cucumber and sweet heirloom tomatoes layered with house-made coriander-mint pesto, mild white cheddar, and peppery arugula between two golden slices of sourdough.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Artisan Sourdough', 'Vine Tomatoes', 'English Cucumber', 'Coriander Mint Pesto']
  },
  {
    id: 'snack-6',
    name: 'Pesto Grilled Sandwich',
    category: 'snacks',
    price: 260,
    isVeg: true,
    badge: 'Bestseller',
    rating: 4.9,
    prepTime: '8-10 mins',
    calories: '320 kcal',
    description: 'Fresh Genovese basil pesto, buffalo mozzarella, sun-dried tomatoes, and balsamic glaze pressed in artisanal ciabatta.',
    detailedDescription: 'Crusty ciabatta bread pressed hot on the panini grill until cheese melts into threads. Filled with mortar-and-pestle basil pesto, creamy buffalo mozzarella, sweet sun-dried tomatoes, and Modena aged balsamic glaze.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Italian Ciabatta', 'Basil Genovese Pesto', 'Buffalo Mozzarella', 'Sun-Dried Tomatoes']
  },
  {
    id: 'snack-7',
    name: 'Cheese Jalapeno Poppers',
    category: 'snacks',
    price: 230,
    isVeg: true,
    rating: 4.7,
    prepTime: '7-9 mins',
    calories: '280 kcal',
    description: 'Crispy golden spheres stuffed with sharp Monterey Jack, cream cheese, and fire-roasted jalapeño peppers with garlic dip.',
    detailedDescription: 'Hand-shaped croquettes filled with a molten core of melted aged Monterey Jack, smooth cream cheese, and diced roasted jalapeño peppers, fried golden brown and served alongside our roasted garlic cilantro dip.',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Monterey Jack Cheese', 'Fire-Roasted Jalapeño', 'Panko Crumb', 'Garlic Aioli']
  },

  // ===================== ARTISAN PASTA =====================
  {
    id: 'pasta-1',
    name: 'Creamy Alfredo Pasta',
    category: 'pasta',
    price: 320,
    isVeg: true,
    badge: 'Classic',
    rating: 4.8,
    prepTime: '12-14 mins',
    calories: '450 kcal',
    description: 'Fettuccine tossed in a velvet reduction of cultured butter, heavy cream, garlic confit, and 24-month Parmigiano-Reggiano.',
    detailedDescription: 'Crafted following Roman tradition. Bronze-die fettuccine cooked al dente, tossed emulsified with sweet cultured butter, rich cream, freshly grated Parmigiano-Reggiano, and cracked Telicherry black peppercorns.',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Bronze-Die Fettuccine', 'Cultured Butter', 'Double Heavy Cream', 'Parmigiano-Reggiano']
  },
  {
    id: 'pasta-2',
    name: 'Spicy Arrabbiata Pasta',
    category: 'pasta',
    price: 290,
    isVeg: true,
    rating: 4.7,
    prepTime: '10-12 mins',
    calories: '360 kcal',
    description: 'Penne rigate tossed in slow-simmered San Marzano plum tomatoes, garlic cloves, red pepper flakes, and fresh torn basil.',
    detailedDescription: 'Bright, fiery, and deeply comforting. Penne pasta cloaked in an authentic sauce of Italian San Marzano tomatoes simmered with extra virgin olive oil, slivered garlic, Calabrian chili flakes, and sweet garden basil.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281720?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Penne Rigate', 'San Marzano Tomatoes', 'Calabrian Chili', 'Extra Virgin Olive Oil']
  },
  {
    id: 'pasta-3',
    name: 'Pink Sauce Pasta',
    category: 'pasta',
    price: 330,
    isVeg: true,
    badge: 'Popular',
    rating: 4.9,
    prepTime: '12-14 mins',
    calories: '410 kcal',
    description: 'The exquisite marriage of slow-cooked plum tomato pomodoro and velvet cream, finished with herbs and shaved grana.',
    detailedDescription: 'The best of both worlds. A harmonious blend of acidic San Marzano tomato sauce and velvety parmesan cream reduction, tossed with rigatoni pasta and garnished with fresh microgreens.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Rigatoni Pasta', 'Pomodoro Sauce', 'Velvet Cream', 'Grana Padano']
  },
  {
    id: 'pasta-4',
    name: 'Pesto Basil Pasta',
    category: 'pasta',
    price: 340,
    isVeg: true,
    badge: "Chef's Special",
    rating: 4.9,
    prepTime: '11-13 mins',
    calories: '390 kcal',
    description: 'Linguine coated in freshly pounded Ligurian basil pesto, toasted pine nuts, extra virgin olive oil, and pecorino romano.',
    detailedDescription: 'Hand-harvested sweet basil leaves pounded with roasted Mediterranean pine nuts, cold-pressed olive oil, and sharp Pecorino Romano, coating each ribbon of linguine with vibrant herbaceous perfume.',
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Linguine Ribbons', 'Fresh Basil Pesto', 'Toasted Pine Nuts', 'Pecorino Romano']
  },
  {
    id: 'pasta-5',
    name: 'Creamy Mushroom Pasta',
    category: 'pasta',
    price: 350,
    isVeg: true,
    badge: 'Luxe',
    rating: 4.9,
    prepTime: '12-15 mins',
    calories: '420 kcal',
    description: 'Wild forest porcini, shiitake, and button mushrooms deglazed in white grape, simmered in herb cream with truffle essence.',
    detailedDescription: 'Earthy woodland depth. Three varieties of wild mushrooms seared until caramelized, finished in a silky cream sauce infused with fresh thyme, roasted garlic, and a drizzle of white truffle oil over tagliatelle.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Tagliatelle', 'Wild Porcini & Shiitake', 'Thyme Herb Cream', 'White Truffle Essence']
  },
  {
    id: 'pasta-6',
    name: 'Chicken Alfredo Pasta',
    category: 'pasta',
    price: 390,
    isVeg: false,
    badge: 'Hearty',
    rating: 4.8,
    prepTime: '13-15 mins',
    calories: '510 kcal',
    description: 'Herb-marinated grilled chicken breast slices folded into rich parmesan cream fettuccine with cracked black pepper.',
    detailedDescription: 'Tender free-range chicken breast grilled with rosemary and garlic, sliced over a generous bowl of fettuccine pasta enveloped in our signature rich, buttery Parmigiano-Reggiano sauce.',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Grilled Rosemary Chicken', 'Fettuccine', 'Aged Parmigiano Cream', 'Black Pepper']
  },

  // ===================== EXQUISITE DESSERTS =====================
  {
    id: 'dessert-1',
    name: 'Belgian Chocolate Brownie',
    category: 'desserts',
    price: 190,
    isVeg: true,
    rating: 4.8,
    prepTime: '3-4 mins',
    calories: '320 kcal',
    description: 'Dense, fudgy brownie baked with 70% Callebaut dark chocolate, walnut chunks, and warm chocolate fudge drizzle.',
    detailedDescription: 'Rich, intensely chocolatey, and crackled on top. Baked with pure Callebaut dark chocolate and browned French butter, with roasted walnut crumbles and a warm chocolate glaze.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=85',
    ingredients: ['70% Callebaut Chocolate', 'Brown Butter', 'Toasted Walnuts', 'Fudge Glaze']
  },
  {
    id: 'dessert-2',
    name: 'Lotus Biscoff Cheesecake',
    category: 'desserts',
    price: 280,
    isVeg: true,
    badge: 'Bestseller',
    rating: 4.9,
    prepTime: '2 mins',
    calories: '370 kcal',
    description: 'Smooth cream cheese infused with spiced speculoos spread, buttery Lotus biscuit crust, and melted cookie butter drip.',
    detailedDescription: 'A modern dessert sensation. A crunchy spiced speculoos biscuit crust filled with silky, rich cream cheese swirled with Biscoff spread, crowned with a glossy cookie butter drip and whole biscuit.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Speculoos Biscoff', 'Philadelphia Cream Cheese', 'Crushed Biscuit Crust']
  },
  {
    id: 'dessert-3',
    name: 'Classic Tiramisu',
    category: 'desserts',
    price: 290,
    isVeg: true,
    badge: "Chef's Special",
    rating: 5.0,
    prepTime: '2 mins',
    calories: '310 kcal',
    description: 'Savoiardi ladyfingers soaked in our signature espresso, layered with airy mascarpone zabaione and Valrhona cocoa.',
    detailedDescription: 'Prepared using traditional Treviso methodology. Delicate Italian savoiardi ladyfingers dipped in freshly pulled espresso, layered with cloud-like whipped mascarpone cream and dusted generously with bittersweet cocoa powder.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Italian Savoiardi', 'The Daily Brew Espresso', 'Mascarpone Cream', 'Valrhona Cocoa']
  },
  {
    id: 'dessert-4',
    name: 'New York Cheesecake',
    category: 'desserts',
    price: 270,
    isVeg: true,
    badge: 'Classic',
    rating: 4.8,
    prepTime: '2 mins',
    calories: '350 kcal',
    description: 'Slow-baked dense and velvety cheesecake on graham cracker crust, scented with lemon zest and Madagascar vanilla.',
    detailedDescription: 'The timeless standard. Traditional slow water-bath baked cheesecake delivering a dense, luscious texture and delicate tang, balanced with a buttery graham crust and natural vanilla bean.',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Real Cream Cheese', 'Graham Cracker Crust', 'Madagascar Vanilla Bean', 'Lemon Zest']
  },
  {
    id: 'dessert-5',
    name: 'Chocolate Lava Cake',
    category: 'desserts',
    price: 240,
    isVeg: true,
    badge: 'Warm',
    rating: 4.9,
    prepTime: '5-6 mins',
    calories: '390 kcal',
    description: 'Warm chocolate fondant with a molten flow of 60% dark chocolate ganache, dusted with confectioner’s sugar.',
    detailedDescription: 'Served warm straight from the oven. Gently pierce the delicate cake shell to release a cascading river of bittersweet Belgian chocolate ganache. Pure culinary theater.',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=85',
    ingredients: ['60% Dark Ganache Core', 'Moist Chocolate Sponge', 'Confectioner Powder']
  },
  {
    id: 'dessert-6',
    name: 'Red Velvet Pastry',
    category: 'desserts',
    price: 220,
    isVeg: true,
    rating: 4.7,
    prepTime: '2 mins',
    calories: '290 kcal',
    description: 'Moist crimson buttermilk sponge layers laced with subtle cocoa, filled with silky vanilla-bean cream cheese frosting.',
    detailedDescription: 'Vibrant and delicate. Three layers of tender cocoa-scented crimson buttermilk cake enveloped in tangy sweet vanilla cream cheese frosting, finished with cake crumbs and white chocolate pearls.',
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Buttermilk Sponge', 'Vanilla Cream Cheese', 'Cocoa Lacing', 'White Chocolate']
  },
  {
    id: 'dessert-7',
    name: 'Blueberry Cheesecake',
    category: 'desserts',
    price: 280,
    isVeg: true,
    rating: 4.8,
    prepTime: '2 mins',
    calories: '340 kcal',
    description: 'Cold-set velvety cream cheesecake topped with whole wild Canadian blueberries simmered in natural lemon syrup.',
    detailedDescription: 'Silky, cool cream cheese mousse atop a golden biscuit crust, crowned with our house-simmered compote of whole wild blueberries that burst with sweet-tart natural flavor.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Cream Cheese Mousse', 'Wild Blueberry Compote', 'Butter Biscuit Base']
  },

  // ===================== MORNING BAKERY =====================
  {
    id: 'bakery-1',
    name: 'Butter Croissant',
    category: 'bakery',
    price: 160,
    isVeg: true,
    badge: 'Fresh Daily',
    rating: 4.9,
    prepTime: '2 mins',
    calories: '220 kcal',
    description: 'Traditional French viennoiserie laminated with 84% butterfat Normandy butter for 36 airy, golden, flaky layers.',
    detailedDescription: 'Rolled and folded patiently by hand each morning before dawn. Crispy golden exterior that shatters delicately with each bite, yielding to a light, honeycomb interior scented with pure French butter.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Normandy 84% Butter', 'French T55 Flour', 'Slow Cold Ferment']
  },
  {
    id: 'bakery-2',
    name: 'Chocolate Croissant',
    category: 'bakery',
    price: 190,
    isVeg: true,
    badge: 'Bestseller',
    rating: 4.9,
    prepTime: '2 mins',
    calories: '260 kcal',
    description: 'Pain au chocolat filled with two parallel batons of bittersweet 55% French baking chocolate in crisp golden pastry.',
    detailedDescription: 'The classic Parisian breakfast treat. Our signature laminated croissant dough rolled around two sticks of premium semi-sweet dark chocolate, baked until puffed and lightly caramelized on top.',
    image: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Laminated Butter Pastry', 'Two 55% Chocolate Batons', 'Egg Wash Glaze']
  },
  {
    id: 'bakery-3',
    name: 'Cinnamon Roll',
    category: 'bakery',
    price: 180,
    isVeg: true,
    badge: 'Warm',
    rating: 4.8,
    prepTime: '3 mins',
    calories: '290 kcal',
    description: 'Soft pillowy brioche dough swirled with aromatic Ceylon cinnamon and brown sugar, topped with cream cheese glaze.',
    detailedDescription: 'Tender brioche rolled tight with brown demerara sugar, softened butter, and fragrant ground Ceylon cinnamon, baked until pull-apart soft and drenched in warm vanilla cream cheese frosting.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Brioche Dough', 'Ceylon Cinnamon', 'Demerara Sugar', 'Cream Cheese Glaze']
  },
  {
    id: 'bakery-4',
    name: 'Almond Danish',
    category: 'bakery',
    price: 210,
    isVeg: true,
    badge: 'Artisan',
    rating: 4.9,
    prepTime: '2 mins',
    calories: '280 kcal',
    description: 'Flaky pastry diamond filled with rich almond frangipane paste, topped with toasted sliced almonds and powdered sugar.',
    detailedDescription: 'A pastry chef’s masterpiece. Golden laminated dough filled with almond frangipane cream, scattered with crisp toasted almond flakes, and dusted with a snow-white veil of powdered sugar.',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=85',
    ingredients: ['Laminated Dough', 'Almond Frangipane', 'Toasted Flaked Almonds', 'Icing Sugar']
  }
];

// Special Promotional Offers
export const SPECIAL_OFFERS = [
  {
    id: 'offer-1',
    code: 'TWOBREW',
    title: 'Twin Coffee Ritual',
    subtitle: 'Purchase any two specialty coffees and receive 10% off your beverage total.',
    discountDesc: '10% OFF on Coffees',
    condition: 'Valid on all specialty hot and cold coffees',
    badge: 'Signature Perk',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'offer-2',
    code: 'PARISIAN',
    title: 'Parisian Morning Combination',
    subtitle: 'Classic Cappuccino paired with a warm French Butter Croissant for an exquisite morning routine.',
    discountDesc: 'Save ₹60 on Breakfast',
    condition: 'Available daily from 7:30 AM to 11:30 AM',
    badge: 'Morning Special',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'offer-3',
    code: 'PASTALUNCH',
    title: 'Artisan Pasta Lunch Pairing',
    subtitle: 'Order any handmade Italian pasta and enjoy a refreshing Blueberry Iced Tea for just ₹99.',
    discountDesc: 'Complimentary Beverage Upgrade',
    condition: 'Weekdays from 12:00 PM to 4:00 PM',
    badge: 'Lunch Ritual',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'offer-4',
    code: 'SWEETEND',
    title: 'Weekend Patisserie Indulgence',
    subtitle: 'Complimentary Belgian Chocolate Brownie with every orders above ₹599 on Saturdays & Sundays.',
    discountDesc: 'Complimentary Treat',
    condition: 'Saturdays & Sundays on all dine-in and delivery',
    badge: 'Weekend Special',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=85'
  }
];

// Sample Guest Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Lord Arthur Hastings',
    role: 'Architectural Historian',
    comment: 'The Daily Brew captures the tranquil, refined grace of a grand Viennese café. Their Spanish Latte and warm Almond Danish are peerless.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'Editorial Director, Luxe Living',
    comment: 'From the linen-textured ceramics to the al dente Truffle Mushroom Pasta, every single detail speaks the language of understated luxury.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Julian Vance',
    role: 'Connoisseur & Patron',
    comment: 'Their 18-hour Vanilla Cold Brew is pure poetry. Seamless ordering, warm staff, and an ambience that invites you to truly slow down.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

// Ambience & Interior Gallery matching reference photo #4
export const CAFE_GALLERY = [
  {
    id: 1,
    title: 'The Sunlit Grand Café',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 2,
    title: 'The Artisan Espresso Bar',
    category: 'Craftsmanship',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 3,
    title: 'Morning Viennoiserie Display',
    category: 'Patisserie',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 4,
    title: 'Marble Bistro Tables & Linen',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 5,
    title: 'Pour-Over Sensory Corner',
    category: 'Coffee Ritual',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 6,
    title: 'Twilight Ambience & Wine',
    category: 'Evening',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=85'
  }
];

