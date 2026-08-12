"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-10-03T00:00:00");

export default function Countdown() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const msPerDay = 1000 * 60 * 60 * 24;
    const diff = WEDDING_DATE.getTime() - Date.now();
    setDays(Math.max(0, Math.ceil(diff / msPerDay)));
  }, []);

  if (days === null) {
    return (
      <div className="h-[clamp(1.9rem,4.4dvh,2.35rem)]" aria-hidden />
    );
  }

  return (
    <div
      className="animate-fade-up inline-flex h-[clamp(1.9rem,4.4dvh,2.35rem)] items-center gap-2 rounded-full border border-gold-light/70 bg-white/40 px-[clamp(0.75rem,2.5dvw,1.25rem)] text-taupe shadow-[0_1px_2px_rgba(58,53,46,0.06)] backdrop-blur-sm"
      style={{ animationDelay: "0.45s" }}
    >
      <span className="animate-pulse-soft h-1.5 w-1.5 rounded-full bg-terracotta" />
      <span className="font-serif text-[clamp(0.85rem,2dvh,1rem)] leading-none text-ink">
        {days}
      </span>
      <span className="text-[clamp(0.55rem,1.5dvh,0.7rem)] leading-none uppercase tracking-[0.2em]">
        {days === 1 ? "day to go" : "days to go"}
      </span>
    </div>
  );
}
