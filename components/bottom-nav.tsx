"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Home, Coffee, ShoppingBag, ShoppingCart, Info } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const TABS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/menu", label: "Menu", icon: Coffee },
  { href: "/shop", label: "Shop", icon: ShoppingBag },
  { href: "/cart/menu", label: "Cart", icon: ShoppingCart, isCart: true },
  { href: "/about", label: "About", icon: Info },
];

export function BottomNav() {
  const pathname = usePathname();
  const { menuCart, shopCart } = useCart();
  const cartCount = menuCart.reduce((n, l) => n + l.qty, 0) + shopCart.reduce((n, l) => n + l.qty, 0);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/90 backdrop-blur-lg safe-bottom">
      <div className="mx-auto flex max-w-[430px] items-center justify-between px-2 py-2">
        {TABS.map((tab) => {
          const active =
            tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href.split("/").slice(0, 2).join("/"));
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="relative flex flex-1 flex-col items-center gap-1 py-1.5"
            >
              {active && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute -top-2 h-1 w-6 rounded-full bg-orange"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <div className="relative">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                    active ? "bg-orange text-white" : "text-white/50"
                  }`}
                >
                  <Icon size={18} />
                </div>
                {tab.isCart && cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-purple text-[10px] font-bold text-white"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </div>
              <span className={`text-[11px] font-medium ${active ? "text-orange" : "text-white/50"}`}>
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
