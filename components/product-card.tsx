"use client";

import { motion } from "motion/react";
import { formatLe } from "@/lib/format";

export function ProductCard({
  name,
  desc,
  price,
  badge,
  onAdd,
  accent = "orange",
}: {
  name: string;
  desc: string;
  price: number;
  badge?: string;
  onAdd: () => void;
  accent?: "orange" | "purple";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-surface"
    >
      <div className={`relative aspect-[16/10] bg-gradient-to-br ${accent === "orange" ? "from-orange/40" : "from-purple/40"} to-black`}>
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-green px-2 py-0.5 text-[10px] font-bold uppercase text-black">
            {badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white">{name}</h3>
        <p className="mt-1 text-xs text-white/60">{desc}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-bold text-orange-light">{formatLe(price)}</span>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onAdd}
            className="rounded-full bg-orange px-4 py-2 text-xs font-semibold text-white"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
