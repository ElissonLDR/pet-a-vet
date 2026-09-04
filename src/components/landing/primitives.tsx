import { useEffect, useRef, useState, type ReactNode } from "react";
import { LogIn } from "lucide-react";
import logo from "@/assets/logo-mark.png";
import logoCream from "@/assets/logo-cream.png";

export const WHATS =
  "https://wa.me/5511999999999?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site e preciso de ajuda com o CVI/documentação para viajar com meu pet. Meu destino é ______ e a data da viagem é ______. Podem me orientar?",
  );

/* ------------------------------------------------------------------ *
 * Scroll reveal
 * ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <As
      ref={ref as never}
      style={{ "--pv-delay": `${delay}ms` } as React.CSSProperties}
      className={`pv-reveal ${shown ? "pv-reveal-in" : ""} ${className}`}
    >
      {children}
    </As>
  );
}

/* ------------------------------------------------------------------ *
 * "// LABEL" eyebrow
 * ------------------------------------------------------------------ */
export function Eyebrow({
  children,
  tone = "accent",
  className = "",
}: {
  children: ReactNode;
  tone?: "accent" | "soft";
  className?: string;
}) {
  return (
    <p
      className={`pv-eyebrow ${tone === "soft" ? "text-pv-accent-soft" : "text-pv-accent"} ${className}`}
    >
      <span className="mr-1.5">//</span>
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ *
 * Primary rectangular CTA
 * ------------------------------------------------------------------ */
export function Cta({
  children,
  className = "",
  tone = "accent",
  size = "md",
}: {
  children: ReactNode;
  className?: string;
  tone?: "accent" | "cream";
  size?: "md" | "lg";
}) {
  const palette =
    tone === "accent"
      ? "bg-pv-accent text-pv-cream-3 hover:bg-pv-deep"
      : "bg-pv-cream-3 text-pv-accent hover:bg-white";
  const pad = size === "lg" ? "px-11 py-[1.35rem]" : "px-10 py-[1.15rem]";
  return (
    <a
      href={WHATS}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-[3px] text-[0.7rem] font-medium tracking-[0.11em] uppercase transition-colors duration-300 ${palette} ${pad} ${className}`}
    >
      {children}
      <LogIn className="h-[0.95rem] w-[0.95rem] transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

/* ------------------------------------------------------------------ *
 * Horizontal ticker strip (hero foot)
 * ------------------------------------------------------------------ */
export function TickerStrip({ items, duration = 46 }: { items: string[]; duration?: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="border-pv-line bg-pv-cream-3 relative w-full overflow-hidden border-y">
      <div
        className="pv-track-left"
        style={{ "--pv-duration": `${duration}s` } as React.CSSProperties}
      >
        {doubled.map((t, i) => (
          <div key={`${t}-${i}`} className="flex shrink-0 items-center">
            <span className="text-pv-body px-14 py-[0.95rem] text-[0.78rem] whitespace-nowrap">
              {t}
            </span>
            <span className="bg-pv-line h-4 w-px shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Small dotted seal used as a separator inside the diagonal bands
 * ------------------------------------------------------------------ */
function DottedSeal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`h-6 w-6 shrink-0 ${className}`} aria-hidden="true">
      <circle
        cx="20"
        cy="20"
        r="17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeDasharray="0.6 4.2"
        strokeLinecap="round"
        opacity="0.75"
      />
      <circle
        cx="20"
        cy="20"
        r="10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="0.6 3.6"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ *
 * Two overlapping tilted bands crossing the page
 * ------------------------------------------------------------------ */
export function DiagonalBands({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const row = Array.from({ length: 12 }, (_, i) => i);
  const Band = ({
    dir,
    duration,
  }: {
    dir: "left" | "right";
    duration: number;
  }) => (
    <div className="bg-pv-deep text-pv-cream w-full overflow-hidden py-[0.8rem]">
      <div
        className={dir === "left" ? "pv-track-left" : "pv-track-right"}
        style={{ "--pv-duration": `${duration}s` } as React.CSSProperties}
      >
        {[...row, ...row].map((i, n) => (
          <div key={n} className="flex shrink-0 items-center gap-10 pr-10">
            <span className="text-[0.82rem] whitespace-nowrap opacity-95">{text}</span>
            <DottedSeal className="text-pv-cream" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={`pointer-events-none relative w-full overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* Bands are 150% wide and centred so the rotation never exposes a corner. */}
      <div className="flex flex-col">
        <div className="-ml-[25%] w-[150%] origin-center -rotate-[1.1deg]">
          <Band dir="left" duration={38} />
        </div>
        <div className="-mt-[0.35rem] -ml-[25%] w-[150%] origin-center -rotate-[1.9deg]">
          <Band dir="right" duration={46} />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Circular stamp: dashed ring + curved lettering + logo mark
 * ------------------------------------------------------------------ */
/*
 * Root stays `relative` so the logo mark can be centred inside it. Callers that
 * need it positioned should wrap it — passing `absolute` in `className` would
 * collide with this rule and its winner depends on stylesheet order, not the
 * class attribute.
 */
export function Seal({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className}`}>
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <defs>
          <path
            id="pv-seal-top"
            d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
            fill="none"
          />
          <path
            id="pv-seal-bottom"
            d="M 100,100 m -72,0 a 72,72 0 1,0 144,0 a 72,72 0 1,0 -144,0"
            fill="none"
          />
        </defs>
        <circle
          cx="100"
          cy="100"
          r="96"
          fill="none"
          stroke="var(--pv-accent)"
          strokeWidth="1"
          strokeDasharray="1 5"
          strokeLinecap="round"
          opacity="0.55"
        />
        <circle cx="100" cy="100" r="88" fill="none" stroke="var(--pv-line)" strokeWidth="1" />
        <text
          fill="var(--pv-accent)"
          fontSize="12"
          fontWeight="500"
          letterSpacing="4.4"
          fontFamily="DM Sans, sans-serif"
        >
          <textPath href="#pv-seal-top" startOffset="25%" textAnchor="middle">
            CUIDADO VETERINÁRIO
          </textPath>
        </text>
        <text
          fill="var(--pv-accent)"
          fontSize="12"
          fontWeight="500"
          letterSpacing="4.4"
          fontFamily="DM Sans, sans-serif"
        >
          <textPath href="#pv-seal-bottom" startOffset="25%" textAnchor="middle">
            VILA MADALENA · SP
          </textPath>
        </text>
      </svg>
      <img
        src={logo}
        alt=""
        className="pointer-events-none absolute top-1/2 left-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Vertical decorative icon rail
 * ------------------------------------------------------------------ */
export function IconRail({
  icons,
  className = "",
}: {
  icons: React.ComponentType<{ className?: string }>[];
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none flex flex-col items-center gap-[1.6rem] ${className}`}
    >
      {icons.map((Icon, i) => (
        <Icon
          key={i}
          className="text-pv-accent h-[1.05rem] w-[1.05rem] drop-shadow-[0_1px_3px_rgba(255,253,251,0.85)]"
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Logo lockup — the mark plus a hairline rule, as in the reference
 * ------------------------------------------------------------------ */
export function LogoLockup({
  className = "",
  invert = false,
  height = "h-11",
}: {
  className?: string;
  invert?: boolean;
  height?: string;
}) {
  return (
    <img
      src={invert ? logoCream : logo}
      alt="Pet a Vet"
      className={`${height} w-auto ${className}`}
    />
  );
}
