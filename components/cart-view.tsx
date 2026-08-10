"use client";

import Link from "next/link";
import { Minus, Plus, X, MessageCircle } from "lucide-react";
import { formatLe } from "@/lib/format";
import { BUSINESS_INFO } from "@/lib/data";

type CartLine = { id: string; name: string; price: number; qty: number };

export function CartView({
  title,
  subtitle,
  emptyLabel,
  emptyHref,
  lines,
  onUpdateQty,
  onRemove,
  serviceFee,
}: {
  title: string;
  subtitle: string;
  emptyLabel: string;
  emptyHref: string;
  lines: CartLine[];
  onUpdateQty: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  serviceFee: number;
}) {
  const subtotal = lines.reduce((sum, l) => sum + l.price * l.qty, 0);
  const total = lines.length > 0 ? subtotal + serviceFee : 0;

  const waMessage = encodeURIComponent(
    `Hi Toyas! I'd like to order:\n${lines.map((l) => `- ${l.name} x${l.qty} (${formatLe(l.price * l.qty)})`).join("\n")}\n\nTotal: ${formatLe(total)}`
  );

  return (
    <div className="px-4 pt-6">
      <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
        {title}
      </h1>
      <p className="mt-1 text-sm text-white/60">{subtitle}</p>

      {lines.length === 0 ? (
        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-white/20 py-10 text-center">
          <p className="text-sm text-white/50">Your cart is empty.</p>
          <Link href={emptyHref} className="rounded-full bg-orange px-5 py-2 text-sm font-semibold text-white">
            {emptyLabel}
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-3">
            {lines.map((line) => (
              <div key={line.id} className="rounded-2xl border border-white/10 bg-surface p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-white">{line.name}</h3>
                    <p className="mt-1 text-sm font-bold text-orange-light">{formatLe(line.price)}</p>
                  </div>
                  <button onClick={() => onRemove(line.id)} className="text-white/40">
                    <X size={18} />
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={() => onUpdateQty(line.id, line.qty - 1)}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-4 text-center text-sm text-white">{line.qty}</span>
                  <button
                    onClick={() => onUpdateQty(line.id, line.qty + 1)}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-purple/40 bg-surface p-4">
            <h3 className="font-bold text-white">The Damage</h3>
            <div className="mt-3 space-y-1.5 text-sm">
              <div className="flex justify-between text-white/70">
                <span>Subtotal</span>
                <span>{formatLe(subtotal)}</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Service Fee</span>
                <span>{formatLe(serviceFee)}</span>
              </div>
              <div className="mt-2 flex justify-between border-t border-white/10 pt-2 text-base font-bold text-white">
                <span>Total</span>
                <span className="text-orange-light">{formatLe(total)}</span>
              </div>
            </div>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-orange py-3.5 font-semibold text-white active:scale-95"
            >
              <MessageCircle size={18} />
              Checkout via WhatsApp
            </a>
            <p className="mt-2 text-center text-[11px] text-white/40">We&apos;ll finalize details &amp; delivery on WhatsApp.</p>
          </div>
        </>
      )}
    </div>
  );
}
