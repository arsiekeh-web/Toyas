"use client";

import { useCart } from "@/lib/cart-context";
import { CartView } from "@/components/cart-view";

export default function ShopCartPage() {
  const { shopCart, updateShopQty, removeFromShopCart } = useCart();
  return (
    <CartView
      title="The Stash"
      subtitle="Your cart is looking heavy. Let's get this bag secured."
      emptyLabel="Keep Shopping"
      emptyHref="/shop"
      lines={shopCart}
      onUpdateQty={updateShopQty}
      onRemove={removeFromShopCart}
      serviceFee={20}
    />
  );
}
