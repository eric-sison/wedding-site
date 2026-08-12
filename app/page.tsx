import type { CSSProperties } from "react";
import Image from "next/image";
import photo from "../public/rica_sison.webp";
import Countdown from "./countdown";

const WEDDING_TITLE = "Rica & Eric's Wedding";
const WEDDING_DETAILS =
  "Save the date! Formal invitation with more details to follow.";
const WEDDING_LOCATION = "SG Farm, Tupi";
const CALENDAR_URL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
  WEDDING_TITLE,
)}&dates=20261003/20261004&details=${encodeURIComponent(
  WEDDING_DETAILS,
)}&location=${encodeURIComponent(WEDDING_LOCATION)}`;

function Sprig({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      aria-hidden
      className={className}
      style={style}
    >
      <path
        d="M60 190 C58 140 62 100 60 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 150 C45 140 30 145 18 130"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 110 C75 100 90 105 100 90"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 70 C48 60 34 62 24 50"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 40 C72 30 84 32 92 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <ellipse
        cx="18"
        cy="130"
        rx="10"
        ry="5"
        transform="rotate(-30 18 130)"
        stroke="currentColor"
        strokeWidth="1"
      />
      <ellipse
        cx="100"
        cy="90"
        rx="10"
        ry="5"
        transform="rotate(20 100 90)"
        stroke="currentColor"
        strokeWidth="1"
      />
      <ellipse
        cx="24"
        cy="50"
        rx="10"
        ry="5"
        transform="rotate(-20 24 50)"
        stroke="currentColor"
        strokeWidth="1"
      />
      <ellipse
        cx="92"
        cy="20"
        rx="9"
        ry="4.5"
        transform="rotate(25 92 20)"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main
      className="bg-grain relative flex h-full flex-1 justify-center overflow-hidden bg-cream"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 50% -10%, rgba(166,138,100,0.14), transparent 55%), radial-gradient(ellipse at 50% 110%, rgba(111,122,79,0.12), transparent 55%)",
      }}
    >
      <Sprig
        className="animate-drift pointer-events-none absolute -left-6 -top-4 h-40 w-24 text-olive/25 sm:h-64 sm:w-36"
        style={{ ["--drift-rot" as string]: "-8deg" }}
      />
      <Sprig
        className="animate-drift pointer-events-none absolute -bottom-6 -right-6 h-40 w-24 rotate-180 text-gold/25 sm:h-64 sm:w-36"
        style={{ ["--drift-rot" as string]: "8deg", animationDelay: "1.2s" }}
      />

      <div className="relative z-10 flex h-full w-full max-w-xl flex-col items-center justify-center gap-[clamp(0.35rem,1.2dvh,0.9rem)] px-6 py-[clamp(0.25rem,1dvh,0.5rem)] sm:px-10">
        <div className="flex flex-col items-center gap-[clamp(0.15rem,0.6dvh,0.4rem)] text-center">
          <div
            className="animate-fade-up flex h-[clamp(1.75rem,4.5dvh,3rem)] w-[clamp(1.75rem,4.5dvh,3rem)] items-center justify-center rounded-full border border-gold-light bg-white/50 font-serif text-[clamp(0.6rem,1.5dvh,0.9rem)] tracking-wide text-gold shadow-[0_1px_3px_rgba(58,53,46,0.08)] backdrop-blur-sm"
            style={{ animationDelay: "0s" }}
          >
            R &amp; E
          </div>

          <div
            className="animate-fade-up flex items-center gap-[clamp(0.5rem,1.5dvw,0.75rem)]"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="animate-grow-line h-px w-6 bg-gold-light sm:w-8" />
            <p className="text-[clamp(0.55rem,1.6dvh,0.7rem)] font-medium uppercase tracking-[0.35em] text-gold">
              Save the Date
            </p>
            <span className="animate-grow-line h-px w-6 bg-gold-light sm:w-8" />
          </div>

          <h1
            className="animate-fade-up font-script py-1 text-[clamp(2.2rem,7.5dvh,4.5rem)] leading-normal text-ink"
            style={{ animationDelay: "0.2s" }}
          >
            Eric &amp; Rica
          </h1>
        </div>

        <div
          className="animate-fade-up -rotate-2 rounded-sm bg-white/70 p-[clamp(0.3rem,0.8dvh,0.6rem)] shadow-[0_20px_45px_-20px_rgba(58,53,46,0.35)] ring-1 ring-black/5 transition-transform duration-500 ease-out hover:rotate-0"
          style={{ animationDelay: "0.3s" }}
        >
          <Image
            src={photo}
            alt="Rica and Eric"
            preload
            className="h-[clamp(10rem,45dvh,29rem)] w-auto rounded-xs object-cover"
          />
        </div>

        <div
          className="animate-fade-up flex flex-col items-center gap-[clamp(0.2rem,0.7dvh,0.45rem)] text-center"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center gap-[clamp(0.4rem,1.2dvw,0.75rem)] text-gold-light">
            <span className="h-px w-8 bg-current sm:w-10" />
            <span className="h-1.5 w-1.5 rotate-45 border border-current" />
            <span className="h-px w-8 bg-current sm:w-10" />
          </div>

          <p className="font-serif text-[clamp(1.1rem,3.4dvh,1.5rem)] text-ink italic">
            October 3, 2026
          </p>
          <p className="text-[clamp(0.6rem,1.7dvh,0.8rem)] uppercase tracking-[0.2em] text-taupe">
            {WEDDING_LOCATION}
          </p>

          <div className="mt-[clamp(0.15rem,0.6dvh,0.5rem)] flex flex-wrap items-center justify-center gap-3">
            <Countdown />

            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-up inline-flex h-[clamp(1.9rem,4.4dvh,2.35rem)] items-center gap-2 rounded-full bg-ink px-[clamp(1rem,3dvw,1.5rem)] text-[clamp(0.7rem,1.6dvh,0.85rem)] leading-none text-cream shadow-[0_10px_25px_-12px_rgba(58,53,46,0.6)] transition-colors duration-300 hover:bg-terracotta"
              style={{ animationDelay: "0.5s" }}
            >
              Add to Calendar
            </a>
          </div>

          <p className="mt-5 max-w-xs text-[clamp(0.6rem,1.5dvh,0.8rem)] leading-snug text-taupe [@media(max-height:480px)]:hidden">
            A formal invitation with all the details will follow. We can&apos;t
            wait to celebrate with you!
          </p>
        </div>
      </div>
    </main>
  );
}
