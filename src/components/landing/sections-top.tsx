import type { ReactNode } from "react";
import {
  Bookmark,
  CalendarDays,
  ChevronLeft,
  ChevronUp,
  FileText,
  Heart,
  MapPin,
  MessageCircle,
  Mic,
  MoreHorizontal,
  PawPrint,
  Phone,
  Plane,
  Plus,
  ScanLine,
  Send,
  Syringe,
  Video,
  X,
} from "lucide-react";

import { Cta, Eyebrow, IconRail, LogoLockup, Reveal, TickerStrip } from "./primitives";
import logo from "@/assets/logo-mark.png";
import heroCut from "@/assets/hero-cut.png";
import collageSelfie from "@/assets/collage-selfie.jpg";
import collageDark from "@/assets/collage-dark.jpg";
import painDocs from "@/assets/pain-docs.jpg";
import painPhone from "@/assets/pain-phone.jpg";
import painCarrier from "@/assets/pain-carrier.jpg";
import painAirport from "@/assets/pain-airport.jpg";

const RAIL_ICONS = [PawPrint, Syringe, ScanLine, FileText, Plane];

/* ================================================================== *
 * 01 — HERO
 * ================================================================== */
export function HeroSection() {
  return (
    <section className="bg-pv-cream relative overflow-hidden">
      {/* decorative icon rail, right edge */}
      <IconRail
        icons={[...RAIL_ICONS, ChevronUp]}
        className="absolute top-1/2 right-5 z-30 hidden -translate-y-1/2 xl:flex"
      />

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-6 pt-12 pb-14 sm:px-10 lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] lg:gap-6 lg:px-14 lg:pt-16 lg:pb-0">
        {/* ---------------- left column ---------------- */}
        <div className="relative z-20 lg:pb-24">
          <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-4">
              <LogoLockup height="h-12" />
              <span className="bg-pv-line h-10 w-px" />
            </div>
            <div className="space-y-1.5">
              <p className="text-pv-body flex items-center gap-2 text-[0.72rem]">
                <CalendarDays className="text-pv-accent h-3.5 w-3.5" />
                Seg a Sex — 8h às 19h · Sáb — 8h às 13h
              </p>
              <p className="text-pv-body flex items-center gap-2 text-[0.72rem]">
                <MapPin className="text-pv-accent h-3.5 w-3.5" />
                Vila Madalena — São Paulo
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="text-pv-ink mt-9 text-[clamp(2.15rem,3.5vw,3.2rem)] leading-[1.08] font-normal">
              Você não precisa
              <br />
              <span className="text-pv-accent">arriscar a viagem</span>
              <br />
              do seu pet.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-pv-body mt-8 max-w-[27rem] text-[0.9rem] leading-[1.7]">
              Com a preparação veterinária certa, seu pet pode embarcar com{" "}
              <strong className="text-pv-ink font-semibold">
                vacinas, exames e documentação em ordem.
              </strong>
            </p>
            <p className="text-pv-body mt-5 max-w-[27rem] text-[0.9rem] leading-[1.7]">
              Atendimento presencial na Vila Madalena, com orientação sobre cada etapa —{" "}
              <strong className="text-pv-ink font-semibold">
                mesmo que você ainda não saiba por onde começar.
              </strong>
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-10">
              <Cta size="lg">Quero emitir o CVI do meu pet</Cta>
            </div>
          </Reveal>
        </div>

        {/* ---------------- right column ---------------- */}
        <div className="relative h-[24rem] sm:h-[30rem] lg:h-[38rem]">
          {/* story card behind */}
          <div className="absolute top-[4%] left-[2%] h-[86%] w-[66%] rounded-[4px] bg-[#d7d3ce]">
            <StoryChrome />
          </div>

          {/* accent ring */}
          <div
            aria-hidden="true"
            className="border-pv-accent absolute top-[5%] left-[50%] aspect-square w-[80%] -translate-x-1/2 rounded-full border-[14px] lg:border-[18px]"
          />

          {/* cut-out subject */}
          <img
            src={heroCut}
            alt="Veterinária da Pet a Vet ao lado de um golden retriever"
            width={1165}
            height={1500}
            className="absolute bottom-0 left-1/2 z-20 h-[104%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_30px_60px_rgba(69,34,7,0.18)] lg:left-[10%] lg:translate-x-0"
          />

          {/* inner rail, mirroring the reference's second column of glyphs */}
          <IconRail
            icons={RAIL_ICONS}
            className="absolute top-[62%] left-[5%] z-30 hidden -translate-y-1/2 lg:flex"
          />
        </div>
      </div>

      <TickerStrip
        items={[
          "Certificado Veterinário Internacional",
          "Vacinação",
          "Microchipagem",
          "Exames exigidos pelo destino",
          "Atestado de saúde",
          "Orientação sobre a documentação",
          "Vila Madalena — São Paulo",
        ]}
      />
    </section>
  );
}

/* Instagram-story chrome reused in the hero and in "Quem somos nós". */
export function StoryChrome({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`absolute inset-x-0 top-0 ${compact ? "px-3 pt-2.5" : "px-4 pt-3"}`}>
      <div className="flex items-center gap-2">
        <span className="grid h-6 w-6 shrink-0 place-items-center overflow-hidden rounded-full bg-white/90 ring-1 ring-black/5">
          <img src={logo} alt="" className="h-3.5 w-auto" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-1.5 text-[0.6rem] leading-tight font-semibold text-black/75">
            petavet <span className="font-normal text-black/40">· 1 h</span>
          </p>
          <p className="flex items-center gap-1 text-[0.53rem] leading-tight text-black/45">
            <span className="inline-block h-1 w-1 rounded-full bg-black/35" />
            Ver tradução
          </p>
        </div>
        <MoreHorizontal className="h-3.5 w-3.5 shrink-0 text-black/50" />
        <X className="h-3.5 w-3.5 shrink-0 text-black/60" />
      </div>
    </div>
  );
}

/* ================================================================== *
 * 02 — A VERDADE (floating collage)
 * ================================================================== */
const FLOAT_BADGES = [
  { label: "Portugal", className: "left-[15%] top-[27%]" },
  { label: "Estados Unidos", className: "left-[47%] top-[0%]" },
  { label: "Japão", className: "right-[13%] bottom-[3%]" },
];

export function TruthSection() {
  return (
    <section className="bg-pv-cream overflow-hidden py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[minmax(0,54%)_minmax(0,46%)] lg:gap-10 lg:px-14">
        {/* ---------------- collage ---------------- */}
        <Reveal className="relative h-[23rem] sm:h-[27rem]">
          {/* dark chat card */}
          <figure className="pv-shadow-float absolute top-[8%] right-[6%] w-[37%] -rotate-[3deg] overflow-hidden rounded-[6px] bg-[#141210]">
            <div className="flex items-center gap-2 px-2.5 py-2">
              <ChevronLeft className="h-3 w-3 shrink-0 text-white/70" />
              <span className="h-4 w-4 shrink-0 overflow-hidden rounded-full bg-white/15" />
              <span className="flex-1 truncate text-[0.5rem] font-medium text-white/85">
                Pet a Vet
              </span>
              <Video className="h-3 w-3 shrink-0 text-white/60" />
              <Phone className="h-2.5 w-2.5 shrink-0 text-white/60" />
            </div>
            <img
              src={collageDark}
              alt="Veterinária com um gato no colo"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
            <div className="flex items-center gap-2 px-2.5 py-2">
              <Plus className="h-3 w-3 shrink-0 text-white/50" />
              <span className="flex-1 rounded-full bg-white/10 px-2 py-1 text-[0.45rem] text-white/40">
                Mensagem
              </span>
              <Mic className="h-3 w-3 shrink-0 text-white/50" />
            </div>
          </figure>

          {/* reel card */}
          <figure className="pv-shadow-float absolute top-[5%] left-[27%] w-[38%] rotate-[1.5deg] overflow-hidden rounded-[10px] bg-[#cfcbd6]">
            <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-2 px-3 pt-2.5">
              <ChevronLeft className="h-3 w-3 text-white/85" />
              <span className="flex-1 text-center text-[0.52rem] font-medium text-white/90">
                Reels · Favoritos
              </span>
            </div>
            <img
              src={collageSelfie}
              alt="Tutora gravando um vídeo com seu cachorro"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
            <div className="absolute right-2 bottom-6 z-10 flex flex-col gap-3 text-white/90">
              <Heart className="h-3 w-3" />
              <MessageCircle className="h-3 w-3" />
            </div>
          </figure>

          {/* quote / post card */}
          <figure className="bg-pv-white pv-shadow-float absolute bottom-[3%] left-0 w-[41%] -rotate-[2deg] overflow-hidden rounded-[6px]">
            <div className="border-pv-line flex items-center gap-2 border-b px-3 py-2">
              <span className="grid h-5 w-5 shrink-0 place-items-center overflow-hidden rounded-full bg-white ring-1 ring-black/5">
                <img src={logo} alt="" className="h-3 w-auto" />
              </span>
              <span className="text-pv-ink flex-1 truncate text-[0.5rem] font-semibold">
                petavet <span className="text-pv-muted font-normal">· 12 h</span>
              </span>
              <MoreHorizontal className="text-pv-muted h-3 w-3 shrink-0" />
            </div>
            <blockquote className="px-4 pt-5 pb-6">
              <span className="text-pv-line block text-3xl leading-none font-semibold">&ldquo;</span>
              <p className="text-pv-ink mt-1 text-[clamp(0.95rem,1.5vw,1.25rem)] leading-[1.2] font-medium">
                Não falta
                <br />
                amor.
                <br />
                <span className="text-pv-accent pv-underline font-semibold">Falta preparo.</span>
              </p>
            </blockquote>
            <div className="text-pv-muted flex items-center gap-2 px-3 pb-2.5">
              <Heart className="h-2.5 w-2.5" />
              <span className="text-[0.42rem]">2.312</span>
              <MessageCircle className="h-2.5 w-2.5" />
              <span className="text-[0.42rem]">184</span>
              <Send className="h-2.5 w-2.5" />
              <span className="text-[0.42rem]">96</span>
              <Bookmark className="ml-auto h-2.5 w-2.5" />
            </div>
          </figure>

          {/* floating destination badges */}
          {FLOAT_BADGES.map((b) => (
            <span
              key={b.label}
              className={`text-pv-ink absolute z-20 inline-flex items-center gap-1.5 text-[0.62rem] font-medium ${b.className}`}
            >
              <Plane className="text-pv-accent h-3 w-3" />
              {b.label}
            </span>
          ))}
        </Reveal>

        {/* ---------------- copy ---------------- */}
        <div>
          <Reveal>
            <Eyebrow>Pode ser difícil ouvir isso</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-pv-ink mt-5 text-[clamp(1.75rem,3.05vw,2.75rem)] leading-[1.12]">
              A verdade que ninguém
              <br className="hidden sm:block" /> te conta sobre viajar
              <br className="hidden sm:block" /> com o seu pet é:
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-pv-accent mt-7 text-[0.85rem] font-medium">
              Não falta amor. Falta preparo.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-pv-muted mt-9 text-[0.82rem]">
              Hoje, a passagem costuma ser comprada primeiro…
            </p>
            <p className="text-pv-ink mt-2 text-[0.82rem] font-medium">
              E só depois vem a descoberta do que o destino realmente exige.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== *
 * 03 — SE VOCÊ CHEGOU ATÉ AQUI (4 monochrome cards)
 * ================================================================== */
const PAINS: { img: string; alt: string; label: ReactNode }[] = [
  {
    img: painDocs,
    alt: "Mãos organizando documentos veterinários sobre uma mesa",
    label: (
      <>
        Não sabe <strong className="font-semibold">quais documentos</strong> precisa
      </>
    ),
  },
  {
    img: painPhone,
    alt: "Tutora pesquisando no celular ao lado do seu cachorro",
    label: (
      <>
        Tem <strong className="font-semibold">medo de errar</strong> o prazo
      </>
    ),
  },
  {
    img: painCarrier,
    alt: "Cachorro dentro de uma caixa de transporte no aeroporto",
    label: (
      <>
        Já pesquisou e <strong className="font-semibold">se confundiu mais</strong>
      </>
    ),
  },
  {
    img: painAirport,
    alt: "Tutora e seu cachorro olhando a pista pela janela do aeroporto",
    label: (
      <>
        Quer viajar com o pet,
        <br />
        <strong className="font-semibold">mas não sabe como</strong>
      </>
    ),
  },
];

export function PainSection() {
  return (
    <section className="bg-pv-cream pt-8 pb-16 lg:pt-10 lg:pb-20">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-14">
        <Reveal className="text-center">
          <Eyebrow>Você passa por isso</Eyebrow>
          <h2 className="text-pv-ink mt-4 text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.15]">
            Se você chegou até aqui, provavelmente:
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-1.5 lg:grid-cols-4">
          {PAINS.map((p, i) => (
            <Reveal key={p.alt} delay={i * 90}>
              <figure className="relative aspect-[168/220] overflow-hidden rounded-[3px]">
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale contrast-[1.08]"
                />
                <figcaption className="bg-pv-deep text-pv-cream absolute inset-x-[6%] bottom-[12%] rounded-[2px] px-3 py-2.5 text-center text-[0.63rem] leading-[1.35]">
                  {p.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 text-center">
          <p className="text-pv-body text-[clamp(0.95rem,1.5vw,1.15rem)]">
            Isso não é falta de cuidado.
          </p>
          <p className="text-pv-ink mt-1 text-[clamp(1rem,1.6vw,1.25rem)] font-semibold">
            É falta de orientação.
          </p>
          <div className="mt-9 flex justify-center">
            <Cta size="lg">Quero avaliar o meu caso</Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
