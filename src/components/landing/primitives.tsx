import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, LogIn } from "lucide-react";
import logo from "@/assets/logo-mark.png";
import logoCream from "@/assets/logo-cream.png";
import logoIcon from "@/assets/logo-icon.png";

export const WHATS =
  "https://wa.me/5511999999999?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site e preciso de ajuda com o certificado de viagem internacional / documentação para viajar com meu pet. Meu destino é ______ e a data da viagem é ______. Podem me orientar?",
  );

/* ------------------------------------------------------------------ *
 * Cut-out edge softener
 *
 * Background removal leaves a hard, slightly haloed 1px edge that reads as
 * a sticker pasted on the page. Blurring the alpha channel and then pulling
 * the ramp back in eats that halo and leaves a soft contour instead.
 * Rendered once, near the top of the page, and referenced by `filter:`.
 * ------------------------------------------------------------------ */
export function EdgeFilters() {
  return (
    <svg aria-hidden="true" focusable="false" className="pointer-events-none absolute h-0 w-0">
      <filter id="pv-soft-edge" x="-4%" y="-4%" width="108%" height="108%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.6" result="soft" />
        <feComponentTransfer in="soft" result="tightened">
          <feFuncA type="linear" slope="1.7" intercept="-0.42" />
        </feComponentTransfer>
        <feComposite in="SourceGraphic" in2="tightened" operator="in" />
      </filter>
    </svg>
  );
}

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
  /*
   * The label is 4px larger than it used to be, so the horizontal padding is
   * relaxed on small screens — at the old px-11 the longest CTA no longer fit
   * a 360px viewport without wrapping mid-word.
   */
  const pad =
    size === "lg" ? "px-5 py-[1.05rem] sm:px-11 sm:py-[1.35rem]" : "px-5 py-[0.95rem] sm:px-10 sm:py-[1.05rem]";
  return (
    <a
      href={WHATS}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-[3px] text-center text-[0.78rem] font-medium tracking-[0.07em] uppercase transition-colors duration-300 sm:gap-2.5 sm:text-[0.95rem] sm:tracking-[0.09em] ${palette} ${pad} ${className}`}
    >
      {children}
      <LogIn className="h-[0.95rem] w-[0.95rem] shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-[1.05rem] sm:w-[1.05rem]" />
    </a>
  );
}

/* ------------------------------------------------------------------ *
 * Edge-to-edge carousel: scroll state + one-card-at-a-time stepping
 * ------------------------------------------------------------------ */
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animateScrollLeft(el: HTMLElement, to: number, duration = 680) {
  const from = el.scrollLeft;
  const delta = to - from;
  if (Math.abs(delta) < 1) return;

  // Snap fights mid-animation — pause it until the ease finishes.
  const prevSnap = el.style.scrollSnapType;
  el.style.scrollSnapType = "none";

  const start = performance.now();
  let raf = 0;

  const frame = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    el.scrollLeft = from + delta * easeInOutCubic(t);
    if (t < 1) {
      raf = requestAnimationFrame(frame);
    } else {
      el.style.scrollSnapType = prevSnap;
    }
  };

  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(frame);
}

export function useCarousel(pages = 3) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(Math.floor(pages / 2));
  const [atStart, setAtStart] = useState(false);
  const [atEnd, setAtEnd] = useState(false);
  const animatingRef = useRef(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const ratio = max > 0 ? el.scrollLeft / max : 0;
    setPage(Math.min(pages - 1, Math.round(ratio * (pages - 1))));
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(max <= 0 || el.scrollLeft >= max - 2);
  }, [pages]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    // Mobile: start on the first card. Desktop: centre so the row bleeds both edges.
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    el.scrollLeft = isMobile ? 0 : (el.scrollWidth - el.clientWidth) / 2;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  /* Steps by one card with a longer ease-in-out glide. */
  const step = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el || animatingRef.current) return;
    const first = el.firstElementChild as HTMLElement | null;
    const gap = first?.nextElementSibling
      ? (first.nextElementSibling as HTMLElement).offsetLeft - first.offsetLeft - first.offsetWidth
      : 16;
    const distance = first ? first.offsetWidth + gap : el.clientWidth * 0.8;
    const max = el.scrollWidth - el.clientWidth;
    const target = Math.max(0, Math.min(max, el.scrollLeft + dir * distance));

    animatingRef.current = true;
    animateScrollLeft(el, target, 720);
    window.setTimeout(() => {
      animatingRef.current = false;
      sync();
    }, 740);
  }, [sync]);

  return { trackRef, page, atStart, atEnd, step };
}

export function CarouselArrows({
  onPrev,
  onNext,
  atStart,
  atEnd,
  className = "",
  label = "carrossel",
  placement = "inline",
}: {
  onPrev: () => void;
  onNext: () => void;
  atStart: boolean;
  atEnd: boolean;
  className?: string;
  label?: string;
  /** `sides` = absolute left/right over the track (mobile). `inline` = clustered buttons. */
  placement?: "inline" | "sides";
}) {
  const base =
    "border-pv-accent/45 text-pv-accent hover:bg-pv-accent hover:text-pv-cream-3 grid place-items-center rounded-full border bg-pv-cream/90 backdrop-blur-sm transition-colors duration-300 disabled:cursor-default disabled:opacity-30 disabled:hover:bg-pv-cream/90 disabled:hover:text-pv-accent";

  if (placement === "sides") {
    return (
      <>
        <button
          type="button"
          onClick={onPrev}
          disabled={atStart}
          aria-label={`Voltar no ${label}`}
          className={`${base} absolute top-1/2 left-1 z-20 h-10 w-10 -translate-y-1/2 shadow-sm md:hidden ${className}`}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={atEnd}
          aria-label={`Avançar no ${label}`}
          className={`${base} absolute top-1/2 right-1 z-20 h-10 w-10 -translate-y-1/2 shadow-sm md:hidden ${className}`}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={onPrev}
        disabled={atStart}
        aria-label={`Voltar no ${label}`}
        className={`${base} h-11 w-11`}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={atEnd}
        aria-label={`Avançar no ${label}`}
        className={`${base} h-11 w-11`}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
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
            <span className="text-pv-body px-14 py-[0.95rem] text-[0.97rem] whitespace-nowrap">
              {t}
            </span>
            <span className="bg-pv-sky/70 h-4 w-px shrink-0" />
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
 * Two tilted bands crossing the page in an X
 *
 * The back band leans one way in the logo cyan, the front band leans the
 * other way in the deep brown, so they read as two ribbons crossing rather
 * than as one thick stripe.
 * ------------------------------------------------------------------ */
export function DiagonalBands({ text, className = "" }: { text: string; className?: string }) {
  const row = Array.from({ length: 12 }, (_, i) => i);
  const Band = ({
    dir,
    duration,
    tone,
  }: {
    dir: "left" | "right";
    duration: number;
    tone: "front" | "back";
  }) => (
    <div
      className={`w-full overflow-hidden py-[0.8rem] ${
        tone === "front" ? "bg-pv-deep text-pv-cream" : "bg-pv-sky-deep text-pv-sky-soft"
      }`}
    >
      <div
        className={dir === "left" ? "pv-track-left" : "pv-track-right"}
        style={{ "--pv-duration": `${duration}s` } as React.CSSProperties}
      >
        {[...row, ...row].map((i, n) => (
          <div key={n} className="flex shrink-0 items-center gap-10 pr-10">
            <span className="text-[1.01rem] whitespace-nowrap opacity-95">{text}</span>
            <DottedSeal className={tone === "front" ? "text-pv-sky" : "text-pv-sky-soft"} />
          </div>
        ))}
      </div>
    </div>
  );

  /*
   * Both bands are absolutely centred on the same axis so they overlap at the
   * middle of the page. 150% wide keeps the rotated ends past the viewport,
   * and the container is tall enough to hold the vertical travel of the tilt.
   */
  return (
    <div
      className={`pointer-events-none relative h-[10.5rem] w-full overflow-hidden select-none sm:h-[12rem] ${className}`}
      aria-hidden="true"
    >
      <div className="absolute top-1/2 left-[-25%] w-[150%] origin-center -translate-y-1/2 rotate-[2.6deg]">
        <Band dir="right" duration={46} tone="back" />
      </div>
      <div className="absolute top-1/2 left-[-25%] w-[150%] origin-center -translate-y-1/2 -rotate-[2.6deg]">
        <Band dir="left" duration={38} tone="front" />
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
        <circle cx="100" cy="100" r="88" fill="none" stroke="var(--pv-sky)" strokeWidth="1.4" />
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
        src={logoIcon}
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
  tone = "cool",
}: {
  icons: React.ComponentType<{ className?: string }>[];
  className?: string;
  tone?: "cool" | "warm";
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none flex flex-col items-center gap-[1.35rem] rounded-full px-[0.7rem] py-[1.1rem] ${
        tone === "warm" ? "pv-glass-warm" : "pv-glass"
      } ${className}`}
    >
      {icons.map((Icon, i) => (
        <Icon
          key={i}
          className="text-pv-accent h-[1.05rem] w-[1.05rem] drop-shadow-[0_1px_2px_rgba(255,253,251,0.9)]"
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
