import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
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

import { Cta, DiagonalBands, Eyebrow, IconRail, Reveal, Seal } from "./primitives";
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
  const tones = ["text-pv-muted/45", "text-pv-ink font-medium", "text-pv-accent font-medium"];

  return (
    <>
      <DiagonalBands text="Não sabe quais documentos o seu pet precisa" className="py-14" />

      <section className="bg-pv-cream py-14 lg:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-14">
          <div className="flex items-start justify-between gap-10">
            <Reveal className="max-w-[46rem]">
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
            {/* 1 — white card with running line */}
            <div className="bg-pv-white flex aspect-[346/128] flex-col items-center justify-center overflow-hidden rounded-[2px]">
              <p className="text-pv-ink px-4 text-center text-[0.78rem]">
                Aqui você <strong className="font-semibold">não pesquisa sozinho.</strong>
              </p>
              <div className="mt-3 w-full overflow-hidden">
                <div
                  className="pv-track-left"
                  style={{ "--pv-duration": "22s" } as React.CSSProperties}
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <span
                      key={i}
                      className={`shrink-0 pr-4 text-[clamp(1.15rem,2.3vw,1.9rem)] leading-none whitespace-nowrap ${tones[i % 3]}`}
                    >
                      {phrase}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 2 — photo */}
            <figure className="aspect-[346/128] overflow-hidden rounded-[2px]">
              <img
                src={bentoExam}
                alt="Veterinária auscultando um cachorro na clínica"
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
              <p className="mt-3 text-[0.72rem] opacity-80">
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
        Exames <strong className="font-semibold">do destino</strong>
      </>
    ),
  },
  {
    title: (
      <>
        Documentação <strong className="font-semibold">orientada</strong>
      </>
    ),
  },
];

/*
 * leading-[0.78] puts the glyph baseline within ~2% of the line box edge, so the
 * mirrored copy underneath meets the real word seamlessly — the reflection the
 * reference draws under its display word.
 */
const DISPLAY_WORD =
  "block text-[clamp(4.2rem,26.5vw,24rem)] leading-[0.78] font-medium tracking-[-0.045em] whitespace-nowrap text-pv-accent";

function BigTypeStage({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <div className="relative h-[clamp(17rem,50vw,44rem)] w-full overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-[26%] left-1/2 w-max -translate-x-1/2"
      >
        <span className={DISPLAY_WORD}>PET A VET</span>
        <span className={`pv-mirror ${DISPLAY_WORD}`}>PET A VET</span>
      </div>
      <img
        src={bigtypeCut}
        alt={
          mirrored
            ? ""
            : "Veterinária da Pet a Vet sentada segurando um cachorro e um gato"
        }
        aria-hidden={mirrored || undefined}
        width={1209}
        height={1300}
        className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
      />
    </div>
  );
}

export function BigTypeSection() {
  return (
    <section className="bg-pv-cream-2 relative overflow-hidden pt-14 lg:pt-16">
      <Reveal className="mx-auto max-w-[1180px] px-6 text-center sm:px-10 lg:px-14">
        <Eyebrow>Tudo o que o seu pet precisa</Eyebrow>
        <h2 className="text-pv-ink mt-4 text-[clamp(1.6rem,3vw,2.6rem)]">
          O que você vai resolver aqui
        </h2>
      </Reveal>

      <div className="relative mt-8">
        <IconRail
          icons={RAIL_ICONS}
          className="absolute top-[60%] left-[6%] z-30 hidden -translate-y-1/2 lg:flex"
        />
        <IconRail
          icons={[...RAIL_ICONS, ChevronUp]}
          className="absolute top-[38%] right-[6%] z-30 hidden -translate-y-1/2 lg:flex"
        />

        <BigTypeStage />

        {/* floor reflection */}
        <div className="pv-mirror relative -mt-px h-[clamp(4.5rem,10vw,9rem)] overflow-hidden">
          <div className="absolute inset-x-0 bottom-0">
            <BigTypeStage mirrored />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1180px] px-6 pt-8 pb-16 sm:px-10 lg:px-14 lg:pb-20">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map((o, i) => (
            <Reveal key={i} delay={i * 80}>
              <article className="bg-pv-white flex h-full flex-col items-center justify-center gap-4 rounded-[5px] px-5 py-8 text-center">
                <div className="flex items-center gap-2">
                  <span className="border-pv-accent/35 text-pv-accent grid h-6 w-6 place-items-center rounded-full border">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="bg-pv-deep text-pv-cream rounded-full px-3 py-1 text-[0.58rem] font-medium tracking-[0.02em]">
                    Você vai ter
                  </span>
                </div>
                <p className="text-pv-ink text-[0.92rem]">{o.title}</p>
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
  "Vacina antirrábica e reforços",
  "Microchipagem de identificação",
  "Exames laboratoriais exigidos",
  "Sorologia para raiva, quando exigida",
  "Vermifugação e antiparasitários",
  "Atestado de saúde veterinário",
  "Orientação sobre os prazos de cada etapa",
  "Verificação das exigências do destino",
  "Apoio no preenchimento da documentação",
  "Orientação para a emissão do CVI",
  "Recomendações para o transporte",
  "Cuidados nos dias que antecedem o embarque",
  "Acompanhamento até a data da viagem",
];

export function StepsSection() {
  return (
    <section className="bg-pv-cream py-14 lg:py-16">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-14">
        <Reveal>
          <div className="bg-pv-white border-pv-line/70 rounded-[16px] border p-7 sm:p-10 lg:p-12">
            <div className="flex items-start justify-between gap-6">
              <div>
                <Eyebrow>Etapas</Eyebrow>
                <h2 className="text-pv-ink mt-3 text-[clamp(1.5rem,2.7vw,2.35rem)]">
                  O que o seu pet pode precisar
                </h2>
              </div>
              <div aria-hidden="true" className="relative hidden h-11 w-[4.3rem] shrink-0 sm:block">
                <span className="border-pv-line absolute top-0 right-0 h-11 w-11 rounded-full border" />
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
                    <span className="text-pv-ink text-[0.76rem] leading-[1.35]">{e}</span>
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
  { img: bAvaliacao, title: ["Avaliação", "veterinária"], alt: "Veterinária examinando um cachorro" },
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
    title: ["Orientação", "para o CVI"],
    alt: "Cachorro pronto para viajar ao lado de uma mala",
  },
];

export function IncludedSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const pages = 3;

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const ratio = max > 0 ? el.scrollLeft / max : 0;
    setPage(Math.min(pages - 1, Math.round(ratio * (pages - 1))));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    // Start centred so the row bleeds off both edges, as in the reference.
    el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <section className="bg-pv-cream overflow-hidden py-14 lg:py-16">
      <Reveal className="mx-auto max-w-[1180px] px-6 text-center sm:px-10 lg:px-14">
        <Eyebrow>Incluso</Eyebrow>
        <h2 className="text-pv-ink mt-4 text-[clamp(1.6rem,3vw,2.6rem)]">
          O que você recebe na Pet a Vet
        </h2>
      </Reveal>

      <Reveal delay={80}>
        <div
          ref={trackRef}
          className="pv-no-scrollbar mt-11 flex gap-3 overflow-x-auto px-6 pb-1"
        >
          {INCLUDED.map((c) => (
            <figure
              key={c.title.join(" ")}
              className="relative aspect-[238/337] w-[14.5rem] shrink-0 overflow-hidden rounded-[5px] bg-black sm:w-[15.5rem]"
            >
              <img
                src={c.img}
                alt={c.alt}
                loading="lazy"
                className="h-full w-full object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/35 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 px-4 pb-5 text-center">
                <p className="text-[1.5rem] leading-[1.08] font-normal tracking-[-0.03em] text-white uppercase">
                  {c.title[0]}
                  <br />
                  {c.title[1]}
                </p>
                <p className="mt-3 text-[0.5rem] tracking-[0.32em] text-white/65 uppercase">
                  Pet a Vet
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      <div className="mt-7 flex items-center justify-center gap-1.5" aria-hidden="true">
        {Array.from({ length: pages }, (_, i) => (
          <span
            key={i}
            className={`h-[3px] rounded-full transition-all duration-300 ${
              i === page ? "bg-pv-accent w-6" : "bg-pv-accent/25 w-[3px]"
            }`}
          />
        ))}
      </div>

      <Reveal delay={120} className="mt-10 flex justify-center px-6">
        <Cta size="lg">Quero começar a preparação</Cta>
      </Reveal>
    </section>
  );
}
