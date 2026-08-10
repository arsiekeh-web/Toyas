export type MenuItem = {
  id: string;
  name: string;
  desc: string;
  price: number;
  category: "signature" | "seasonal" | "hojicha";
  badge?: string;
  image: string;
};

export type ShopItem = {
  id: string;
  name: string;
  desc: string;
  price: number;
  category: "homeware" | "snacks" | "gifts";
  badge?: string;
  image: string;
};

// SINGLE SOURCE OF TRUTH — every screen (menu, cart, dashboard) reads from
// this file. Never hardcode a name or price anywhere else.

export const MENU_ITEMS: MenuItem[] = [
  { id: "salted-caramel", name: "Toyas Signature Salted Caramel", desc: "Sweet, salty, and earthy perfection.", price: 280, category: "signature", badge: "Best Seller", image: "/images/menu/salted-caramel.jpg" },
  { id: "strawberry-blush", name: "Strawberry Blush", desc: "Fruity sweetness meets vibrant matcha.", price: 280, category: "signature", image: "/images/menu/strawberry-blush.jpg" },
  { id: "strawberry-shortcake", name: "Strawberry Shortcake", desc: "A dessert in a cup, rich and creamy.", price: 350, category: "signature", image: "/images/menu/strawberry-shortcake.jpg" },
  { id: "vanilla-classic", name: "Vanilla Classic", desc: "The everyday staple. Vanilla bean syrup, macadamia milk, matcha.", price: 280, category: "signature", badge: "New", image: "/images/menu/vanilla-classic.jpg" },
  { id: "vanilla-cold-foam", name: "Vanilla Cold Foam", desc: "Iced Americano-style matcha topped with a thick sweet vanilla cream foam.", price: 325, category: "signature", badge: "New", image: "/images/menu/vanilla-cold-foam.jpg" },
  { id: "blueberry-bombshell", name: "Blueberry Bombshell", desc: "Muddled blueberries, a splash of lavender, oat milk, and rich matcha.", price: 325, category: "signature", badge: "Limited", image: "/images/menu/blueberry-bombshell.jpg" },
  { id: "coconut-cloud", name: "Coconut Cloud", desc: "Pure coconut water blend with ceremonial matcha. Hydration meets buzz.", price: 280, category: "signature", image: "/images/menu/coconut-cloud.jpg" },
  { id: "banana-bread", name: "Banana Bread", desc: "Tastes exactly like it sounds. Caramelized banana, cinnamon, oat milk, matcha. A dessert in a cup.", price: 325, category: "seasonal", badge: "Dough Collab", image: "/images/menu/banana-bread.jpg" },
  { id: "sierra-gold", name: "Sierra Gold", desc: "Local honey, a blend of lavender, soy milk, premium matcha. Bright and premium.", price: 280, category: "seasonal", image: "/images/menu/sierra-gold.jpg" },
  { id: "mango-sticky-rice", name: "Mango Sticky Rice", desc: "Coconut cream, fresh mango syrup, topped with our signature vibrant matcha. A dessert in a cup.", price: 325, category: "seasonal", image: "/images/menu/mango-sticky-rice.jpg" },
  { id: "lemon-meringue", name: "Lemon Meringue", desc: "Sparkling zesty vanilla, matcha foam. Zesty, refreshing, highly carbonated.", price: 325, category: "seasonal", image: "/images/menu/lemon-meringue.jpg" },
  { id: "salted-caramel-hojicha", name: "Salted Caramel Hojicha", desc: "Earthy, roasted, nutty flavor balanced with sweet caramel and oat milk.", price: 250, category: "hojicha", image: "/images/menu/hojicha.jpg" },
];

export const MENU_ADDONS = [
  { id: "go-pro", name: "Go PRO (protein)", price: 80 },
  { id: "extra-syrup", name: "Extra Syrup Pump", price: 30 },
];

export const SHOP_ITEMS: ShopItem[] = [
  { id: "dutch-oven", name: "Sunset Dutch Oven", desc: "Heavyweight cast iron for those slow Sunday stews. Cooks evenly, looks incredibly aesthetic on your stove.", price: 850, category: "homeware", badge: "Community Fav", image: "/images/shop/dutch-oven.jpg" },
  { id: "hot-honey", name: "Mama's Hot Honey", desc: "Sweet heat infused with local scotch bonnets.", price: 120, category: "snacks", image: "/images/shop/hot-honey.jpg" },
  { id: "tropics-bouquet", name: "Tropics Bouquet", desc: "Vibrant local blooms to brighten up any space.", price: 250, category: "gifts", badge: "Staff Pick", image: "/images/shop/bouquet.jpg" },
  { id: "snack-tins", name: "Vibe Snack Tins", desc: "Plantain chips, roasted groundnuts, and sweet treats in reusable tins.", price: 95, category: "snacks", image: "/images/shop/snack-tins.jpg" },
  { id: "canvas-tote", name: "Heavy Canvas Tote", desc: "Carry the vibe everywhere. Perfect for market runs.", price: 150, category: "gifts", image: "/images/shop/tote.jpg" },
];

export const BUSINESS_INFO = {
  name: "Toyas",
  tagline: "Your Favorite Wellness and Lifestyle Store",
  bio: "We're not just a health store. We're a vibe. Born in Freetown, built for the culture. Toyas is about feeling good, moving right, and staying fresh. No clinical nonsense, just pure, high-energy wellness delivered with that Krio-cool edge.",
  address: "109E Wilkinson Road, Freetown",
  phone: "+232 72 841 726",
  whatsapp: "23272841726",
  hours: [
    { day: "Mon", time: "9am – 7pm" },
    { day: "Tue", time: "2pm – 7pm" },
    { day: "Wed – Fri", time: "9am – 7pm" },
    { day: "Sat – Sun", time: "11am – 8pm" },
  ],
};
