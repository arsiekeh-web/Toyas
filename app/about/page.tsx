import { MapPin, Clock, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

const TEAM = [
  { name: "Mariam", role: "Chief Yapper" },
  { name: "Kelfala", role: "Vibe Curator" },
  { name: "Fatu", role: "Wellness Guru" },
];

export default function AboutPage() {
  return (
    <div className="px-4 pt-6">
      <h1 className="text-3xl font-bold leading-tight text-white" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
        We&apos;re not just a health store. We&apos;re a vibe.
      </h1>
      <p className="mt-3 text-sm text-white/70">{BUSINESS_INFO.bio}</p>

      <div className="mt-6 rounded-2xl border border-orange/30 bg-surface p-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-orange-light">
          <MapPin size={14} /> Our Spot
        </div>
        <p className="mt-2 text-sm text-white">{BUSINESS_INFO.address}</p>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded-full bg-orange px-4 py-2 text-xs font-semibold text-white"
        >
          Get Directions
        </a>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-surface p-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white/60">
          <Clock size={14} /> Open Hours
        </div>
        <div className="mt-3 space-y-1.5">
          {BUSINESS_INFO.hours.map((h) => (
            <div key={h.day} className="flex justify-between text-sm">
              <span className="text-white/70">{h.day}</span>
              <span className="text-white">{h.time}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, "")}`}
        className="mt-4 flex items-center gap-3 rounded-2xl bg-purple p-4 text-purple-light"
      >
        <Phone size={16} />
        <div>
          <p className="text-xs uppercase tracking-wide opacity-70">Hit Us Up</p>
          <p className="font-semibold">{BUSINESS_INFO.phone}</p>
        </div>
      </a>

      <h2 className="mt-8 mb-3 text-lg font-bold text-white">Meet the Squad</h2>
      <div className="grid grid-cols-3 gap-2">
        {TEAM.map((member) => (
          <div key={member.name} className="rounded-xl bg-surface p-3 text-center">
            <div className="mx-auto mb-2 aspect-square w-full rounded-lg bg-gradient-to-br from-purple to-orange/40" />
            <p className="text-xs font-semibold text-white">{member.name}</p>
            <p className="text-[10px] text-white/50">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
