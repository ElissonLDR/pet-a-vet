import { type ReactNode } from "react";
import {
  ArrowDownLeft,
  Check,
  ChevronUp,
  FileText,
  PawPrint,
  Plane,
  ScanLine,
  Syringe,
} from "lucide-react";

import {
  CarouselArrows,
  Cta,
  Eyebrow,
  IconRail,
  LogoLockup,
  Reveal,
  Seal,
  TickerBand,
  useCarousel,
} from "./primitives";
import bentoExam from "@/assets/bento-exam.jpg";
import bentoChip from "@/assets/bento-chip.jpg";
import bigtypeCut from "@/assets/bigtype-cut.png";
import bAvaliacao from "@/assets/b-avaliacao.jpg";
import bVacina from "@/assets/b-vacina.jpg";
import bMicrochip from "@/assets/b-microchip.jpg";
import bExames from "@/assets/b-exames.jpg";
import bAtestado from "@/assets/b-atestado.jpg";
import bViagem from "@/assets/b-viagem.jpg";

const RAIL_ICONS = [PawPrint, Syringe, ScanLine, FileText, Plane];

/* ================================================================== *
 * 04 — BANDAS + A VIRADA COMEÇA AQUI (bento)
 * ================================================================== */
export function IntroSection() {
  const phrase = "A gente orienta.";

  return (
    <>
      <TickerBand
        text="Não sabe quais documentos o seu pet precisa?"
        tone="front"
        dir="right"
        className="my-10"
      />

      <section className="bg-pv-cream py-14 lg:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-14">
          <div className="flex items-start justify-between gap-10">
            <Reveal className="max-w-[46rem]" variant="title">
              <Eyebrow>A virada começa aqui</Eyebrow>
              <h2 className="text-pv-ink mt-5 text-[clamp(1.6rem,2.95vw,2.6rem)] leading-[1.15]">
                A Pet a Vet é uma clínica veterinária na Vila Madalena{" "}
                <span className="text-pv-accent">
                  que prepara o seu pet e a documentação da viagem.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="hidden shrink-0 lg:block">
              <Seal className="w-[6.5rem]" />
            </Reveal>
          </div>

          {/* bento */}
          <Reveal delay={80} className="mt-12 grid gap-1.5 sm:grid-cols-2">
            {/*
              1 — white card with the repeated phrase.

              Static, not a marquee: the middle repeat is sharp and the ones
              either side blur out, so the eye lands on the readable one.
            */}
            <div className="bg-pv-white flex aspect-[346/128] flex-col items-center justify-center overflow-hidden rounded-[2px]">
              <p className="text-pv-ink px-4 text-center text-[0.97rem]">
                Aqui você <strong className="font-semibold">não pesquisa sozinho.</strong>
              </p>
              <div className="pv-edge-fade mt-3 w-full overflow-hidden">
                <div className="flex items-baseline justify-center text-[clamp(1.15rem,2.3vw,1.9rem)] leading-none whitespace-nowrap">
                  <span className="text-pv-muted/35 shrink-0 pr-5 blur-[2.5px]">{phrase}</span>
                  <span className="shrink-0 pr-5">
                    <span className="text-pv-ink">A gente </span>
                    <span className="text-pv-accent font-medium">orienta.</span>
                  </span>
                  <span className="text-pv-muted/35 shrink-0 blur-[2.5px]">{phrase}</span>
                </div>
              </div>
            </div>

            {/* 2 — photo */}
            <figure className="aspect-[346/128] overflow-hidden rounded-[2px]">
              <img
                src={bentoExam}
                alt="Veterinário aplicando vacina em um gato na clínica"
                loading="lazy"
                className="h-full w-full object-cover grayscale"
              />
            </figure>

            {/* 3 — photo */}
            <figure className="aspect-[346/128] overflow-hidden rounded-[2px]">
              <img
                src={bentoChip}
                alt="Leitura do microchip de identificação de um cachorro"
                loading="lazy"
                className="h-full w-full object-cover grayscale"
              />
            </figure>

            {/* 4 — deep card */}
            <div className="bg-pv-deep text-pv-cream flex aspect-[346/128] flex-col items-center justify-center rounded-[2px] px-6 text-center">
              <p className="text-[clamp(1rem,1.9vw,1.5rem)] leading-[1.25]">
                Sem achismo.
                <br />
                Sem improviso.
              </p>
              <p className="mt-3 text-[0.91rem] opacity-80">
                Apenas o que o destino do seu pet realmente exige.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ================================================================== *
 * 05 — O QUE VOCÊ VAI RESOLVER AQUI (oversized display word)
 * ================================================================== */
const OUTCOMES: { title: ReactNode }[] = [
  {
    title: (
      <>
        Avaliação <strong className="font-semibold">veterinária</strong>
      </>
    ),
  },
  {
    title: (
      <>
        Vacinas <strong className="font-semibold">em dia</strong>
      </>
    ),
  },
  {
    title: (
      <>
        Sorologia <strong className="font-semibold">de raiva</strong>
      </>
    ),
  },
  {
    title: (
      <>
        Orientações <strong className="font-semibold">adequadas</strong>
      </>
    ),
  },
];

/*
 * Brand lockup replaces the oversized wordmark so the mark matches
 * the official Pet a Vet logo used elsewhere on the page.
 */
export function BigTypeSection() {
  return (
    <section
      className="bg-pv-cream-2 relative overflow-hidden pt-14 lg:pt-16"
      style={{ "--pv-stage": "clamp(15rem,40vw,34rem)" } as React.CSSProperties}
    >
      <Reveal className="mx-auto max-w-[1180px] px-6 text-center sm:px-10 lg:px-14" variant="title">
        <Eyebrow>Tudo o que o seu pet precisa</Eyebrow>
        <h2 className="text-pv-ink mt-4 text-[clamp(1.6rem,3vw,2.6rem)]">
          O que você vai resolver aqui
        </h2>
      </Reveal>

      <div className="relative mt-8">
        <IconRail
          tone="warm"
          icons={RAIL_ICONS}
          className="absolute top-[60%] left-[6%] z-30 hidden -translate-y-1/2 lg:flex"
        />
        <IconRail
          tone="warm"
          icons={[...RAIL_ICONS, ChevronUp]}
          className="absolute top-[38%] right-[6%] z-30 hidden -translate-y-1/2 lg:flex"
        />

        {/* stage: logo + cut-out standing on the floor line */}
        <div className="relative h-[var(--pv-stage)] w-full overflow-hidden">
          <div aria-hidden="true" className="absolute top-[10%] left-1/2 w-max -translate-x-1/2">
            <LogoLockup height="h-[clamp(3.2rem,12vw,9rem)]" />
          </div>
          {/*
            Contact shadow along the floor line. Without it the cut-out reads as
            pasted on rather than standing on the surface.
          */}
          <div
            aria-hidden="true"
            className="absolute bottom-[1%] left-1/2 h-[6%] w-[64%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(69,34,7,0.24),rgba(69,34,7,0))] blur-[4px]"
          />
          <img
            src={bigtypeCut}
            alt="Golden retriever de mochila entre uma mala com um gato de óculos escuros em cima e uma pilha de bagagens com bolsa de transporte e passaporte"
            width={1250}
            height={786}
            className="absolute bottom-0 left-1/2 h-[76%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom [filter:url(#pv-soft-edge)_drop-shadow(0_16px_26px_rgba(69,34,7,0.12))]"
          />
        </div>

        {/*
          Floor reflection: only the cut-out is mirrored, and only for a few rem
          below the seam. Mirroring the whole stage repeated the word a second
          time and read as a rendering glitch. pv-fade-down keeps the clipped
          bottom from ending on a hard straight line.
        */}
        <div className="pv-fade-down relative -mt-px h-[clamp(2.5rem,5.5vw,5rem)] overflow-hidden">
          <img
            src={bigtypeCut}
            alt=""
            aria-hidden="true"
            className="pv-mirror absolute top-0 left-1/2 h-[calc(var(--pv-stage)*0.76)] w-auto max-w-none -translate-x-1/2 object-contain"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1180px] px-6 pt-8 pb-16 sm:px-10 lg:px-14 lg:pb-20">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map((o, i) => (
            <Reveal key={i} delay={i * 80}>
              <article className="bg-pv-white flex h-full flex-col items-center justify-center gap-4 rounded-[5px] px-5 py-8 text-center">
                <div className="flex items-center gap-2">
                  <span className="border-pv-sky text-pv-sky-deep bg-pv-sky-soft grid h-6 w-6 place-items-center rounded-full border">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="bg-pv-deep text-pv-cream rounded-full px-3 py-1 text-[0.77rem] font-medium tracking-[0.02em]">
                    Você vai ter
                  </span>
                </div>
                <p className="text-pv-ink text-[1.11rem]">{o.title}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 flex justify-center">
          <Cta size="lg">Quero preparar meu pet para viajar</Cta>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================== *
 * 06 — ETAPAS (checklist inside a large white panel)
 * ================================================================== */
const ETAPAS = [
  "Avaliação veterinária completa",
  "Checagem da carteira de vacinação",
  "Vacina antirrábica",
  "Microchipagem de identificação",
  "Sorologia de raiva, quando exigida",
  "Antiparasitários internos e externos",
  "Atestado de saúde veterinário",
  "Orientação sobre os prazos de cada etapa",
  "Verificação das exigências do destino",
  "Apoio no preenchimento da documentação",
  "Orientação para o certificado de viagem internacional",
  "Recomendações para o transporte",
  "Cuidados nos dias que antecedem o embarque",
  "Suporte até a data da viagem",
];

export function StepsSection() {
  return (
    <section className="bg-pv-cream py-14 lg:py-16">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-14">
        <Reveal>
          <div className="bg-pv-white border-pv-line/70 rounded-[16px] border p-7 sm:p-10 lg:p-12">
            <div className="flex items-start justify-between gap-6">
              <Reveal variant="title">
                <Eyebrow>Etapas</Eyebrow>
                <h2 className="text-pv-ink mt-3 text-[clamp(1.5rem,2.7vw,2.35rem)]">
                  O que o seu pet pode precisar
                </h2>
              </Reveal>
              <div aria-hidden="true" className="relative hidden h-11 w-[4.3rem] shrink-0 sm:block">
                <span className="border-pv-sky absolute top-0 right-0 h-11 w-11 rounded-full border-2" />
                <span className="bg-pv-accent text-pv-cream-3 absolute top-0 left-0 grid h-11 w-11 place-items-center rounded-full">
                  <ArrowDownLeft className="h-4 w-4" />
                </span>
              </div>
            </div>

            <ul className="mt-9 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {ETAPAS.map((e, i) => (
                <Reveal key={e} as="li" delay={i * 35}>
                  <div className="bg-pv-panel flex h-full items-center gap-3 rounded-[6px] px-4 py-4">
                    <span className="bg-pv-accent grid h-[1.15rem] w-[1.15rem] shrink-0 place-items-center rounded-full">
                      <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />
                    </span>
                    <span className="text-pv-ink text-[0.95rem] leading-[1.4]">{e}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================== *
 * 07 — O QUE VOCÊ RECEBE (edge-to-edge carousel)
 * ================================================================== */
const INCLUDED = [
  {
    img: bAvaliacao,
    title: ["Avaliação", "veterinária"],
    alt: "Veterinária examinando um cachorro",
  },
  { img: bVacina, title: ["Vacinação", "completa"], alt: "Aplicação de vacina em um cachorro" },
  { img: bMicrochip, title: ["Microchip", "do pet"], alt: "Leitura de microchip em um gato" },
  { img: bExames, title: ["Exames", "exigidos"], alt: "Análise laboratorial veterinária" },
  {
    img: bAtestado,
    title: ["Atestado", "de saúde"],
    alt: "Veterinária assinando um atestado de saúde",
  },
  {
    img: bViagem,
    title: ["Orientação", "para o certificado"],
    alt: "Cachorro pronto para viajar ao lado de uma mala",
  },
];

export function IncludedSection() {
  const pages = 3;
  const { trackRef, page, atStart, atEnd, step } = useCarousel(pages);

  return (
    <section className="bg-pv-cream overflow-hidden py-14 lg:py-16">
      <Reveal className="mx-auto max-w-[1180px] px-6 text-center sm:px-10 lg:px-14" variant="title">
        <Eyebrow>Incluso</Eyebrow>
        <h2 className="text-pv-ink mt-4 text-[clamp(1.6rem,3vw,2.6rem)]">
          O que você recebe na Pet a Vet
        </h2>
      </Reveal>

      <Reveal delay={80} className="relative mt-11 px-5 md:px-6">
        <CarouselArrows
          placement="sides"
          onPrev={() => step(-1)}
          onNext={() => step(1)}
          atStart={atStart}
          atEnd={atEnd}
          label="carrossel do que você recebe"
        />
        <div
          ref={trackRef}
          className="pv-no-scrollbar flex snap-x snap-mandatory gap-0 overflow-x-auto pb-1 md:snap-none md:gap-2"
        >
          {INCLUDED.map((c) => (
            <figure
              key={c.title.join(" ")}
              className="relative aspect-[238/337] w-full min-w-full shrink-0 snap-start overflow-hidden rounded-[10px] bg-[#ece7e1] md:aspect-[238/320] md:w-[calc((100%-1.5rem)/4)] md:min-w-0"
            >
              <img
                src={c.img}
                alt={c.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              {/* caption rides on a frosted panel instead of a flat scrim */}
              <figcaption className="pv-glass-dark absolute inset-x-3 bottom-3 rounded-[8px] px-4 py-5 text-center">
                <p className="text-[1.85rem] leading-[1.06] font-normal tracking-[-0.03em] text-white uppercase">
                  {c.title[0]}
                  <br />
                  {c.title[1]}
                </p>
                <p className="mt-3 text-[0.62rem] tracking-[0.32em] text-white/75 uppercase">
                  Pet a Vet
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      <div className="mt-7 flex items-center justify-center gap-6">
        <CarouselArrows
          className="hidden md:flex"
          onPrev={() => step(-1)}
          onNext={() => step(1)}
          atStart={atStart}
          atEnd={atEnd}
          label="carrossel do que você recebe"
        />
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {Array.from({ length: pages }, (_, i) => (
            <span
              key={i}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                i === page ? "bg-pv-accent w-6" : "bg-pv-accent/25 w-[3px]"
              }`}
            />
          ))}
        </div>
      </div>

      <Reveal delay={120} className="mt-10 flex justify-center px-6">
        <Cta size="lg">Quero começar a preparação</Cta>
      </Reveal>
    </section>
  );
}
