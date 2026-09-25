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
import logo from "@/assets/logo-icon.png";
import heroCut from "@/assets/hero-cut.png";
import heroGate from "@/assets/hero-gate.jpg";
import collageSelfie from "@/assets/collage-selfie.jpg";
import collageTravel from "@/assets/collage-travel.jpg";
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

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-6 pt-12 pb-14 sm:px-10 lg:grid-cols-[minmax(0,44%)_minmax(0,56%)] lg:gap-6 lg:px-14 lg:pt-16 lg:pb-0">
        {/* ---------------- left column ---------------- */}
        <div className="relative z-20 min-w-0 lg:pb-24">
          <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-4">
              <LogoLockup height="h-12" />
              <span className="bg-pv-line h-10 w-px" />
            </div>
            <div className="space-y-1.5">
              <p className="text-pv-body flex items-center gap-2 text-[0.91rem]">
                <CalendarDays className="text-pv-sky-deep h-4 w-4" />
                Seg a Sex — 8h às 19h · Sáb — 8h às 13h
              </p>
              <p className="text-pv-body flex items-center gap-2 text-[0.91rem]">
                <MapPin className="text-pv-sky-deep h-4 w-4" />
                Vila Madalena — São Paulo
              </p>
            </div>
          </Reveal>

          <Reveal delay={90} variant="title">
            <h1 className="text-pv-ink mt-9 text-[clamp(2.15rem,3.5vw,3.2rem)] leading-[1.08] font-normal">
              Você não precisa
              <br />
              <span className="text-pv-accent">arriscar a viagem</span>
              <br />
              do seu pet.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-pv-body mt-8 max-w-[30rem] text-[1.09rem] leading-[1.65]">
              Com a preparação veterinária certa, seu pet pode embarcar com{" "}
              <strong className="text-pv-ink font-semibold">
                vacinas, exames e documentação em ordem.
              </strong>
            </p>
            <p className="text-pv-body mt-5 max-w-[30rem] text-[1.09rem] leading-[1.65]">
              Atendimento presencial na Vila Madalena, com orientação sobre cada etapa —{" "}
              <strong className="text-pv-ink font-semibold">
                mesmo que você ainda não saiba por onde começar.
              </strong>
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-10">
              <Cta size="lg">Quero o certificado de viagem internacional</Cta>
            </div>
          </Reveal>
        </div>

        {/* ---------------- right column ---------------- */}
        <div className="relative h-[25rem] min-w-0 sm:h-[31rem] lg:h-[39rem]">
          {/* soft cyan wash so the cut-out sits on something, not on flat cream */}
          <div
            aria-hidden="true"
            className="absolute top-[6%] left-1/2 h-[74%] w-[92%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(124,212,228,0.32),rgba(124,212,228,0))]"
          />

          {/* accent ring, in the logo cyan */}
          <div
            aria-hidden="true"
            className="border-pv-sky absolute top-[4%] left-[54%] aspect-square w-[70%] -translate-x-1/2 rounded-full border-[12px] lg:border-[16px]"
          />

          {/* story card behind, tilted */}
          <div className="pv-shadow-float absolute top-[2%] left-[-4%] w-[40%] -rotate-[4deg] overflow-hidden rounded-[14px] bg-[#d7d3ce] sm:w-[35%]">
            <img
              src={heroGate}
              alt="Avião estacionado no portão de embarque ao amanhecer"
              width={1728}
              height={2304}
              className="aspect-[9/16] w-full object-cover"
            />
            <StoryChrome />
          </div>

          {/* ground shadow under the cut-out */}
          <div
            aria-hidden="true"
            className="absolute bottom-[2%] left-1/2 h-[7%] w-[74%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(69,34,7,0.26),rgba(69,34,7,0))] blur-[3px]"
          />

          {/* cut-out subject */}
          <img
            src={heroCut}
            alt="Golden retriever de chapéu de palha e óculos escuros sentado ao lado de uma mala, com um gato dentro da bolsa de transporte, passaporte e atestado de saúde"
            width={1872}
            height={1248}
            className="absolute bottom-[2%] left-1/2 z-20 w-[104%] max-w-none -translate-x-1/2 object-contain object-bottom [filter:url(#pv-soft-edge)_drop-shadow(0_24px_40px_rgba(69,34,7,0.16))] lg:w-[100%]"
          />

          {/* floating glass tags */}
          <span className="pv-glass text-pv-ink absolute top-[22%] right-[2%] z-30 hidden items-center gap-2 rounded-full py-2 pr-4 pl-3 text-[0.8rem] font-medium sm:inline-flex">
            <Syringe className="text-pv-accent h-3.5 w-3.5" />
            Vacinas em dia
          </span>
          <span className="pv-glass text-pv-ink absolute bottom-[3%] left-[2%] z-30 hidden items-center gap-2 rounded-full py-2 pr-4 pl-3 text-[0.8rem] font-medium sm:inline-flex">
            <FileText className="text-pv-sky-deep h-3.5 w-3.5" />
            Orientações adequadas
          </span>
        </div>
      </div>

      <TickerStrip
        items={[
          "Certificado de viagem internacional",
          "Vacinação",
          "Microchipagem",
          "Sorologia de raiva",
          "Atestado de saúde",
          "Orientação sobre a documentação",
          "Vila Madalena — São Paulo",
        ]}
      />
    </section>
  );
}

/*
 * Instagram-story chrome reused in the hero and in "Quem somos nós".
 *
 * The whole chrome sits over a top-to-bottom scrim so the white UI stays
 * readable regardless of what the photo underneath is doing.
 */
export function StoryChrome({ compact = false }: { compact?: boolean }) {
  const pad = compact ? "px-2.5" : "px-3.5";
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[38%] bg-gradient-to-b from-black/45 via-black/12 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[26%] bg-gradient-to-t from-black/45 to-transparent"
      />

      <div className={`absolute inset-x-0 top-0 ${pad} ${compact ? "pt-2" : "pt-2.5"}`}>
        {/* progress segments */}
        <div className="flex gap-1">
          {[100, 100, 62, 0, 0].map((fill, i) => (
            <span key={i} className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/35">
              <span className="block h-full rounded-full bg-white" style={{ width: `${fill}%` }} />
            </span>
          ))}
        </div>

        <div className="mt-2.5 flex items-center gap-2">
          <span className="from-pv-accent to-pv-sky grid shrink-0 place-items-center rounded-full bg-gradient-to-br p-[1.5px]">
            <span className="grid h-6 w-6 place-items-center overflow-hidden rounded-full bg-white">
              <img src={logo} alt="" className="h-3.5 w-auto" />
            </span>
          </span>
          <div className="min-w-0 flex-1">
            <p className="flex items-center gap-1.5 text-[0.62rem] leading-tight font-semibold text-white drop-shadow">
              petavet <span className="font-normal text-white/65">· 1 h</span>
            </p>
            <p className="text-[0.54rem] leading-tight text-white/70">Vila Madalena, SP</p>
          </div>
          <MoreHorizontal className="h-3.5 w-3.5 shrink-0 text-white/85" />
          <X className="h-3.5 w-3.5 shrink-0 text-white/85" />
        </div>
      </div>

      {/* caption sticker + reply bar */}
      <div className={`absolute inset-x-0 bottom-0 ${pad} ${compact ? "pb-2" : "pb-2.5"}`}>
        <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/92 px-2.5 py-1 text-[0.55rem] font-semibold text-black/80 shadow-sm">
          <Plane className="text-pv-accent h-2.5 w-2.5" />
          embarque autorizado ✈︎
        </span>
        <div className="flex items-center gap-2">
          <span className="flex-1 rounded-full border border-white/45 px-2.5 py-1.5 text-[0.5rem] text-white/75">
            Enviar mensagem
          </span>
          <Heart className="h-3 w-3 shrink-0 text-white/90" />
          <Send className="h-3 w-3 shrink-0 text-white/90" />
        </div>
      </div>
    </>
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
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,54%)_minmax(0,46%)] lg:gap-10 lg:px-14">
        {/* ---------------- collage ---------------- */}
        {/* Mobile: stacked beige cards (no absolute overlap). Desktop: floating collage. */}
        <Reveal className="relative grid grid-cols-2 gap-2 sm:hidden">
          <figure className="overflow-hidden rounded-[6px] bg-[#ece7e1]">
            <img
              src={collageTravel}
              alt="Gato sentado dentro de uma mala aberta"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </figure>
          <figure className="overflow-hidden rounded-[6px] bg-[#ece7e1]">
            <img
              src={collageSelfie}
              alt="Tutora gravando um vídeo com seu cachorro"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </figure>
          <figure className="bg-pv-white col-span-2 overflow-hidden rounded-[6px] px-5 py-6">
            <blockquote>
              <p className="text-pv-ink text-[1.15rem] leading-[1.25] font-medium">
                Não falta amor.{" "}
                <span className="text-pv-accent pv-underline font-semibold">Falta preparo.</span>
              </p>
            </blockquote>
          </figure>
        </Reveal>

        <Reveal className="relative hidden h-[23rem] sm:block sm:h-[27rem]">
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
              src={collageTravel}
              alt="Gato sentado dentro de uma mala aberta"
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
              <span className="text-pv-line block text-3xl leading-none font-semibold">
                &ldquo;
              </span>
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
              className={`text-pv-ink absolute z-20 inline-flex items-center gap-1.5 text-[0.81rem] font-medium ${b.className}`}
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
          <Reveal delay={80} variant="title">
            <h2 className="text-pv-ink mt-5 text-[clamp(1.75rem,3.05vw,2.75rem)] leading-[1.12]">
              A verdade que ninguém
              <br className="hidden sm:block" /> te conta sobre viajar
              <br className="hidden sm:block" /> com o seu pet é:
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-pv-accent mt-7 text-[1.04rem] font-medium">
              Não falta amor. Falta preparo.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-pv-muted mt-9 text-[1.01rem]">
              Hoje, a passagem costuma ser comprada primeiro…
            </p>
            <p className="text-pv-ink mt-2 text-[1.01rem] font-medium">
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
    img: painCarrier,
    alt: "Cachorro dentro de uma caixa de transporte no aeroporto",
    label: (
      <>
        Já pesquisou e <strong className="font-semibold">se confundiu mais</strong>
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
];

export function PainSection() {
  return (
    <section className="bg-pv-cream pt-8 pb-16 lg:pt-10 lg:pb-20">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-14">
        <Reveal className="text-center" variant="title">
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
                <figcaption className="bg-pv-deep text-pv-cream absolute inset-x-[6%] bottom-[12%] rounded-[2px] px-3 py-2.5 text-center text-[0.82rem] leading-[1.4]">
                  {p.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 text-center">
          <p className="text-pv-body text-[clamp(1.14rem,1.8vw,1.34rem)]">
            Isso não é falta de cuidado.
          </p>
          <p className="text-pv-ink mt-1 text-[clamp(1.19rem,1.9vw,1.44rem)] font-semibold">
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
