"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <div>
      <AuroraBackground className="w-full px-4 pt-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold leading-tight text-white text-center"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {BUSINESS_INFO.tagline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 flex flex-col gap-3 w-full max-w-sm"
        >
          <Link
            href="/menu"
            className="rounded-full bg-purple px-6 py-4 text-center font-semibold text-purple-light shadow-lg shadow-purple/30 transition-transform active:scale-95"
          >
            Explore Menu
          </Link>
          <Link
            href="/shop"
            className="rounded-full bg-orange px-6 py-4 text-center font-semibold text-white shadow-lg shadow-orange/30 transition-transform active:scale-95"
          >
            Browse Shop
          </Link>
        </motion.div>
      </AuroraBackground>

      <div className="px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 grid grid-cols-2 gap-3"
        >
          <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-purple to-black" />
          <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-orange to-black" />
        </motion.div>

        <div className="mt-6 space-y-2 rounded-2xl bg-surface p-4 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-orange-light" />
            <span>Mon–Fri 9–7, Sat–Sun 11–8</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-orange-light" />
            <span>{BUSINESS_INFO.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}