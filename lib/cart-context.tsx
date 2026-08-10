"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CartLine = { id: string; name: string; price: number; qty: number };

type CartContextType = {
  menuCart: CartLine[];
  shopCart: CartLine[];
  addToMenuCart: (item: { id: string; name: string; price: number }) => void;
  addToShopCart: (item: { id: string; name: string; price: number }) => void;
  updateMenuQty: (id: string, qty: number) => void;
  updateShopQty: (id: string, qty: number) => void;
  removeFromMenuCart: (id: string) => void;
  removeFromShopCart: (id: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

function addOrIncrement(cart: CartLine[], item: { id: string; name: string; price: number }): CartLine[] {
  const existing = cart.find((l) => l.id === item.id);
  if (existing) {
    return cart.map((l) => (l.id === item.id ? { ...l, qty: l.qty + 1 } : l));
  }
  return [...cart, { ...item, qty: 1 }];
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [menuCart, setMenuCart] = useState<CartLine[]>([]);
  const [shopCart, setShopCart] = useState<CartLine[]>([]);

  return (
    <CartContext.Provider
      value={{
        menuCart,
        shopCart,
        addToMenuCart: (item) => setMenuCart((c) => addOrIncrement(c, item)),
        addToShopCart: (item) => setShopCart((c) => addOrIncrement(c, item)),
        updateMenuQty: (id, qty) =>
          setMenuCart((c) => (qty <= 0 ? c.filter((l) => l.id !== id) : c.map((l) => (l.id === id ? { ...l, qty } : l)))),
        updateShopQty: (id, qty) =>
          setShopCart((c) => (qty <= 0 ? c.filter((l) => l.id !== id) : c.map((l) => (l.id === id ? { ...l, qty } : l)))),
        removeFromMenuCart: (id) => setMenuCart((c) => c.filter((l) => l.id !== id)),
        removeFromShopCart: (id) => setShopCart((c) => c.filter((l) => l.id !== id)),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
