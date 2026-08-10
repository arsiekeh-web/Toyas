"use client";

import { motion } from "motion/react";
import { formatLe } from "@/lib/format";
import { BarChart } from "@/components/charts/bar-chart";
import { Bar } from "@/components/charts/bar";
import { BarXAxis } from "@/components/charts/bar-x-axis";
import { ChartTooltip } from "@/components/charts/tooltip";

// MOCKUP DATA — replace with real Bklit UI charts wired to live order data
// in the production build. Kept in realistic Le ranges intentionally.
const TOP_DRINKS = [
  { name: "Salted Caramel", short: "Salted", count: 18 },
  { name: "Strawberry Blush", short: "Strawberry", count: 14 },
  { name: "Mango Sticky Rice", short: "Mango", count: 11 },
  { name: "Vanilla Classic", short: "Vanilla", count: 9 },
];

const RECENT_ORDERS = [
  { id: "Online Order #492", tag: "SHOP", amount: 970 },
  { id: "Online Order #491", tag: "MENU", amount: 630 },
  { id: "Walk-in", tag: "MENU", amount: 280 },
];


export default function DashboardPage() {
  return (
    <div className="px-4 pt-6">
      <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
        Dashboard
      </h1>
      <p className="mt-1 text-xs uppercase tracking-wide text-white/40">Real-time yaps &amp; stats</p>

      <div className="mt-6 rounded-2xl border border-white/10 bg-surface p-4">
        <p className="text-xs text-white/50">Total Sales Today</p>
        <p className="mt-1 text-3xl font-bold text-orange-light">{formatLe(4250)}</p>
        <p className="mt-1 text-xs font-medium text-green">↑ 15% from yesterday</p>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-surface p-4">
        <p className="mb-3 text-sm font-semibold text-white">Revenue Split</p>
        <div className="flex h-3 overflow-hidden rounded-full bg-white/10">
          <div className="bg-orange" style={{ width: "65%" }} />
          <div className="bg-green" style={{ width: "35%" }} />
        </div>
        <div className="mt-2 flex justify-between text-xs">
          <span className="text-orange-light">Menu 65%</span>
          <span className="text-green">Shop 35%</span>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-surface p-4">
        <p className="mb-3 text-sm font-semibold text-white">Top Selling Drinks</p>
       <BarChart data={TOP_DRINKS} xDataKey="short" aspectRatio="2 / 1">
  <Bar dataKey="count" fill="#c1440e" />
  <BarXAxis />
  <ChartTooltip />
</BarChart>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-surface p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-white">Recent Orders</p>
          <span className="text-xs text-orange-light">View All</span>
        </div>
        <div className="space-y-2">
          {RECENT_ORDERS.map((o) => (
            <div key={o.id} className="flex items-center justify-between rounded-xl bg-black/30 p-3">
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    o.tag === "MENU" ? "bg-orange/30 text-orange-light" : "bg-purple/40 text-purple-light"
                  }`}
                >
                  {o.tag}
                </span>
                <span className="text-xs text-white/70">{o.id}</span>
              </div>
              <span className="text-sm font-semibold text-white">{formatLe(o.amount)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
