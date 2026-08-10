"use client";

import { useState } from "react";
import { SHOP_ITEMS } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { useCart } from "@/lib/cart-context";


const FILTERS = [
  { key: "all", label: "All" },
  { key: "homeware", label: "Homeware" },
  { key: "snacks", label: "Snacks" },
  { key: "gifts", label: "Gifts" },
] as const;

export default function ShopPage() {
  const { addToShopCart } = useCart();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");
  const [added, setAdded] = useState<string | null>(null);

  const items = filter === "all" ? SHOP_ITEMS : SHOP_ITEMS.filter((i) => i.category === filter);

  return (
    <div className="px-4 pt-6">
      <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
        The Shop
      </h1>
      <p className="mt-1 text-sm text-white/60">Curated homeware, snacks, and gifts for the main character in your life.</p>

      <div className="mt-4 flex gap-2 overflow-x-auto">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
              filter === f.key ? "border-orange bg-orange text-white" : "border-white/20 text-white/60"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {added && (
        <div className="mt-4 rounded-xl bg-green/20 px-4 py-2 text-xs font-medium text-green">
          Added {added} to your cart
        </div>
      )}

      <div className="mt-4 grid grid-cols-1 gap-4">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            desc={item.desc}
            price={item.price}
            badge={item.badge}
            accent="orange"
            onAdd={() => {
              addToShopCart({ id: item.id, name: item.name, price: item.price });
              setAdded(item.name);
              setTimeout(() => setAdded(null), 1800);
            }}
          />
        ))}
      </div>
    </div>
  );
}
