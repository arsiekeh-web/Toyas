"use client";

import { useCart } from "@/lib/cart-context";
import { CartView } from "@/components/cart-view";

export default function MenuCartPage() {
  const { menuCart, updateMenuQty, removeFromMenuCart } = useCart();
  return (
    <CartView
      title="Your Matcha Stash"
      subtitle="Checking out the liquid gold before we hit up the WhatsApp line."
      emptyLabel="Explore the Menu"
      emptyHref="/menu"
      lines={menuCart}
      onUpdateQty={updateMenuQty}
      onRemove={removeFromMenuCart}
      serviceFee={20}
    />
  );
}
