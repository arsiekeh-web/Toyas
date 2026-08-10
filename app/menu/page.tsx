"use client";

import { useState } from "react";
import { MENU_ITEMS, MENU_ADDONS } from "@/lib/data";
import { formatLe } from "@/lib/format";
import { ProductCard } from "@/components/product-card";
import { useCart } from "@/lib/cart-context";

const SECTIONS = [
  { key: "signature" as const, title: "Signature Matcha" },
  { key: "seasonal" as const, title: "Seasonal Drops" },
  { key: "hojicha" as const, title: "Hojicha (Roasted Matcha)" },
];

export default function MenuPage() {
  const { addToMenuCart } = useCart();
  const [added, setAdded] = useState<string | null>(null);

  return (
    <div className="px-4 pt-6">
      <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
        The Matcha Menu
      </h1>
      <p className="mt-1 text-sm text-white/60">Pure energy. No jitters. One curated selection of ceremonial grade matcha drinks, built for the Freetown lifestyle.</p>

      {added && (
        <div className="mt-3 rounded-xl bg-green/20 px-4 py-2 text-xs font-medium text-green">
          Added {added} to your cart
        </div>
      )}

      {SECTIONS.map((section) => {
        const items = MENU_ITEMS.filter((i) => i.category === section.key);
        if (items.length === 0) return null;
        return (
          <div key={section.key} className="mt-8">
            <h2 className="mb-3 text-lg font-bold text-orange-light">{section.title}</h2>
            <div className="grid grid-cols-1 gap-4">
              {items.map((item) => (
                <ProductCard
                  key={item.id}
                  name={item.name}
                  desc={item.desc}
                  price={item.price}
                  badge={item.badge}
                  accent="purple"
                  onAdd={() => {
                    addToMenuCart({ id: item.id, name: item.name, price: item.price });
                    setAdded(item.name);
                    setTimeout(() => setAdded(null), 1800);
                  }}
                />
              ))}
            </div>
          </div>
        );
      })}

      <div className="mt-8 rounded-2xl border border-white/10 bg-surface p-4">
        <h3 className="font-bold text-white">Boost Your Cup</h3>
        <div className="mt-2 space-y-2">
          {MENU_ADDONS.map((addon) => (
            <div key={addon.id} className="flex items-center justify-between text-sm text-white/70">
              <span>{addon.name}</span>
              <span className="font-semibold text-orange-light">+{formatLe(addon.price)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
