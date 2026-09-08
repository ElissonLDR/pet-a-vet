import { useEffect, useRef, useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  CalendarCheck,
  CalendarDays,
  Check,
  ChevronLeft,
  MapPin,
  Phone,
  Video,
} from "lucide-react";

import { Cta, DiagonalBands, Eyebrow, LogoLockup, Reveal, Seal, WHATS } from "./primitives";
import { StoryChrome } from "./sections-top";
import heroPortrait from "@/assets/hero-travel.jpg";
import depo1 from "@/assets/depo-1.jpg";
import depo2 from "@/assets/depo-2.jpg";
import collageSelfie from "@/assets/collage-selfie.jpg";

/* ================================================================== *
 * 08 — GARANTA O PREPARO (offer card)
 * ================================================================== */
const OFFER = [
  "Avaliação veterinária presencial",
  "Vacinação e reforços",
  "Microchipagem",
  "Exames exigidos pelo destino",
  "Atestado de saúde veterinário",
  "Orientação sobre a documentação",
  "Orientação para a emissão do CVI",
];

export function PlanSection() {
  return (
    <section className="bg-pv-cream relative overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
        <DiagonalBands text="Atendimento com hora marcada na Vila Madalena" />
      </div>

      <div className="relative mx-auto max-w-[62rem] px-6 sm:px-10">
        <Reveal>
          <div className="pv-shadow-float relative rounded-[6px]">
            <div className="absolute -top-11 left-1/2 z-20 hidden w-[5.5rem] -translate-x-1/2 sm:block">
              <Seal />
            </div>

            <div className="grid overflow-hidden rounded-[6px] md:grid-cols-[minmax(0,45%)_minmax(0,55%)]">
              {/* ---- left: what's included ---- */}
              <div className="bg-[#f2eae0] px-8 py-10 sm:px-10 lg:px-11 lg:py-14">
                <Eyebrow>Atendimento</Eyebrow>
                <h2 className="text-pv-ink mt-4 text-[clamp(1.45rem,2.6vw,2.05rem)]">
                  Prepare seu pet
                </h2>
                <ul className="mt-7 space-y-3.5">
                  {OFFER.map((o) => (
                    <li key={o} className="flex items-center gap-3">
                      <span className="bg-pv-accent grid h-[1.15rem] w-[1.15rem] shrink-0 place-items-center rounded-full">
                        <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />
                      </span>
                      <span className="text-pv-ink text-[1.01rem]">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ---- right: the headline number ---- */}
              <div className="bg-pv-white px-8 py-10 text-center sm:px-10 lg:px-12 lg:py-14">
                <div className="flex justify-center">
                  <LogoLockup height="h-12" />
                </div>

                <div className="mt-9 flex items-end justify-center gap-2">
                  <p className="text-pv-ink pb-3 text-right text-[clamp(0.85rem,1.5vw,1.15rem)] leading-[1.15]">
                    Comece
                    <br />
                    com
                  </p>
                  <p className="text-pv-accent text-[clamp(3.6rem,8.5vw,5.6rem)] leading-[0.85] font-medium">
                    60
                  </p>
                  <p className="text-pv-ink pb-3 text-[clamp(0.85rem,1.5vw,1.15rem)]">dias</p>
                </div>

                <p className="border-pv-line text-pv-ink mx-auto mt-6 inline-block rounded-full border px-6 py-2.5 text-[0.99rem]">
                  Ou o quanto antes <strong className="font-semibold">for possível</strong>
                </p>

                <a
                  href={WHATS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pv-accent text-pv-cream-3 hover:bg-pv-deep mt-7 flex w-full items-center justify-center gap-2.5 rounded-[3px] px-6 py-[1.15rem] text-[0.7rem] font-medium tracking-[0.11em] uppercase transition-colors duration-300"
                >
                  Quero falar com a Pet a Vet
                  <ArrowUpRight className="h-[0.95rem] w-[0.95rem]" />
                </a>

                <p className="text-pv-ink mt-5 flex items-center justify-center gap-2 text-[0.94rem]">
                  <CalendarCheck className="text-pv-accent h-3.5 w-3.5" />
                  Agenda com <strong className="font-semibold">horário marcado</strong>
                </p>

                <div className="text-pv-body mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[0.89rem]">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="text-pv-sky-deep h-3.5 w-3.5" />
                    Seg a Sex — 8h às 19h
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="text-pv-sky-deep h-3.5 w-3.5" />
                    Vila Madalena — São Paulo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================== *
 * 09 — DEPOIMENTOS
 *
 * NOTE: the message threads below are placeholder copy shaped like real
 * tutor feedback so the layout reads correctly. Swap them for genuine
 * messages before the page goes live.
 * ================================================================== */
const THREADS = [
  {
    name: "Marina R.",
    count: "248",
    messages: [
      "Eu tinha comprado a passagem e só depois fui descobrir que Portugal pedia microchip e sorologia com prazo de carência. Achei que não ia dar tempo de jeito nenhum e quase desisti de levar a Nina.",
      "Marquei a avaliação na Pet a Vet e saí de lá com o cronograma inteiro na mão: o que fazer, em que ordem e até quando. Pela primeira vez eu entendi o processo do começo ao fim.",
      "Fizemos tudo lá mesmo — vacina, microchip e os exames. Não precisei ficar remarcando consulta em três lugares diferentes.",
      "A Nina embarcou com tudo certo e a documentação passou sem nenhuma pergunta na chegada.",
      "Recomendo demais para quem está começando a organizar a viagem agora. Comecem cedo!",
      "Qualquer dúvida que aparecer eu mando aqui, tá? Muito obrigada por tudo mesmo.",
    ],
  },
  {
    name: "Rafael e Thor",
    count: "247",
    messages: [
      "Meu caso era complicado: mudança para o Japão, que tem um dos processos mais rigorosos, com prazo de carência longo e a vacina do Thor atrasada.",
      "A equipe foi super honesta comigo sobre o que dava e o que não dava para fazer no tempo que eu tinha. Reorganizei a data da viagem por causa dessa conversa e foi a melhor decisão que tomei.",
      "Durante os meses seguintes eles me lembraram de cada etapa e prazo. Eu só precisava aparecer na data marcada.",
      "Fizemos vacina, microchip e os exames todos no mesmo lugar. Não precisei correr atrás de nada sozinho.",
      "Chegamos em Tóquio sem nenhum problema na alfândega. Valeu cada dia de antecedência.",
      "Já indiquei vocês para dois amigos que estão se mudando ano que vem.",
    ],
  },
  {
    name: "Camila S.",
    count: "247",
    messages: [
      "Eu já tinha tentado entender sozinha e só me confundi mais — cada site dizia uma coisa diferente e eu não sabia em quem confiar.",
      "Na consulta explicaram exatamente o que o meu destino exigia, o que a Mel já tinha em dia e o que ainda faltava. Saí com tudo anotado.",
      "O que mais me ajudou foi entender os prazos. Eu não fazia ideia de que alguns exames só valem depois de um intervalo específico.",
      "Me acompanharam até a emissão do CVI e tiraram todas as minhas dúvidas por mensagem.",
      "Viajei tranquila, sabendo que a documentação da Mel estava certa. Foi a única parte da mudança que não me deu dor de cabeça.",
      "Assim que a gente se instalar eu mando foto dela no apartamento novo!",
    ],
  },
];

function ChatCard({ t }: { t: (typeof THREADS)[number] }) {
  return (
    <figure className="border-pv-line/70 bg-pv-white w-[15.5rem] shrink-0 overflow-hidden rounded-[8px] border p-2 sm:w-[16.5rem]">
      <div className="overflow-hidden rounded-[5px]">
        <div className="flex items-center gap-1.5 bg-[#ece7e1] px-2 py-1.5">
          <ChevronLeft className="h-2.5 w-2.5 shrink-0 text-black/55" />
          <span className="text-[0.45rem] text-black/55">{t.count}</span>
          <span className="bg-pv-accent/25 h-4 w-4 shrink-0 rounded-full" />
          <span className="text-pv-ink flex-1 truncate text-[0.5rem] font-medium">{t.name}</span>
          <Video className="h-2.5 w-2.5 shrink-0 text-black/45" />
          <Phone className="h-2 w-2 shrink-0 text-black/45" />
        </div>
        <div className="flex h-[16.6rem] flex-col gap-1.5 overflow-hidden bg-[#e7ddd0] p-2">
          {t.messages.map((m, i) => (
            <p
              key={i}
              className="text-pv-ink rounded-[4px] rounded-tl-none bg-[#fbf8f4] px-2 py-1.5 text-[0.46rem] leading-[1.5]"
            >
              {m}
            </p>
          ))}
        </div>
      </div>
    </figure>
  );
}

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    // Start centred so the row bleeds off both edges, as in the reference.
    el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
  }, []);

  return (
    <section className="bg-pv-cream relative overflow-hidden pt-14 lg:pt-16">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-14">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Depoimentos</Eyebrow>
            <h2 className="text-pv-ink mt-4 text-[clamp(1.6rem,3vw,2.6rem)]">
              Tutores que já viajaram com a Pet a Vet
            </h2>
          </div>
          <div className="flex items-center gap-3" aria-hidden="true">
            <div className="flex -space-x-3">
              {[depo1, collageSelfie, depo2].map((src, i) => (
                <span
                  key={i}
                  className="ring-pv-cream h-10 w-10 overflow-hidden rounded-full ring-2"
                >
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
                </span>
              ))}
            </div>
            <span className="bg-pv-accent text-pv-cream-3 grid h-11 w-11 place-items-center rounded-full">
              <ArrowDownLeft className="h-4 w-4" />
            </span>
          </div>
        </Reveal>
      </div>

      <Reveal delay={80}>
        <div ref={trackRef} className="pv-no-scrollbar mt-11 flex gap-3 overflow-x-auto px-6 pb-1">
          {THREADS.map((t) => (
            <ChatCard key={t.name} t={t} />
          ))}
          {[
            { src: depo1, name: "Beatriz L.", role: "Tutora da Mel · Lisboa" },
            { src: depo2, name: "Helena M.", role: "Tutora do Simba · Madri" },
            { src: collageSelfie, name: "Júlia P.", role: "Tutora do Bento · Porto" },
          ].map((p) => (
            <figure
              key={p.name}
              className="border-pv-line/70 bg-pv-white relative w-[15.5rem] shrink-0 overflow-hidden rounded-[8px] border p-2 sm:w-[16.5rem]"
            >
              <div className="relative h-[17.4rem] overflow-hidden rounded-[5px]">
                <img
                  src={p.src}
                  alt={`${p.name}, tutora atendida pela Pet a Vet`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-3 bottom-3 text-center">
                  <p className="text-[0.89rem] font-medium text-white drop-shadow">{p.name}</p>
                  <p className="bg-pv-deep/85 text-pv-cream mt-1 inline-block rounded-[2px] px-2 py-1 text-[0.69rem]">
                    {p.role}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </Reveal>

      <Reveal delay={120} className="mt-11 flex justify-center px-6">
        <Cta size="lg">Quero verificar o meu caso</Cta>
      </Reveal>

      {/* oversized word bleeding into the next section */}
      <p
        aria-hidden="true"
        className="mt-12 -mb-[0.3em] text-center text-[clamp(4rem,26.5vw,24rem)] leading-[0.78] font-medium tracking-[-0.05em] whitespace-nowrap text-[#fbf7f2] select-none"
      >
        PET A VET
      </p>
    </section>
  );
}

/* ================================================================== *
 * 10 — QUEM SOMOS NÓS
 * ================================================================== */
export function WhoSection() {
  return (
    <section className="bg-pv-cream relative overflow-hidden pb-20 lg:pb-28">
      {/* oversized word closing the sandwich */}
      <p
        aria-hidden="true"
        className="text-pv-accent pointer-events-none absolute inset-x-0 -bottom-[0.16em] text-center text-[clamp(4rem,26.5vw,24rem)] leading-[0.78] font-medium tracking-[-0.05em] whitespace-nowrap select-none"
      >
        PET A VET
      </p>

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-14">
        <div className="relative grid items-center lg:grid-cols-[minmax(0,58%)_minmax(0,42%)]">
          <Reveal className="bg-pv-deep text-pv-cream relative z-10 px-8 py-12 sm:px-12 lg:px-14 lg:py-16">
            <Eyebrow tone="soft">Um pouco sobre nós</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.6rem,3vw,2.5rem)]">Quem somos nós</h2>
            <p className="mt-6 max-w-[30rem] text-[1.02rem] leading-[1.7] opacity-90">
              A Pet a Vet é uma clínica veterinária na Vila Madalena que acompanha tutores durante a
              preparação dos seus pets para viagens internacionais — da primeira avaliação até a
              orientação para a emissão do Certificado Veterinário Internacional.
            </p>
            <p className="mt-5 max-w-[30rem] text-[1.02rem] leading-[1.7] opacity-90">
              O que nos move é simples: cuidar bem do animal e tirar o peso da burocracia do colo do
              tutor. Sem promessas irreais, sem achismo — apenas orientação veterinária clara sobre
              o que cada destino exige.
            </p>

            <div className="mt-12 flex flex-wrap gap-x-14 gap-y-8">
              <div>
                <p className="text-[clamp(2.6rem,5.5vw,4rem)] leading-[0.9] font-normal">+7</p>
                <p className="mt-3 max-w-[9rem] text-[0.87rem] leading-[1.5] opacity-80">
                  Etapas veterinárias
                  <br />
                  resolvidas no mesmo lugar
                </p>
              </div>
              <div>
                <p className="text-[clamp(2.6rem,5.5vw,4rem)] leading-[0.9] font-normal">100%</p>
                <p className="mt-3 max-w-[11rem] text-[0.87rem] leading-[1.5] opacity-80">
                  Acompanhamento veterinário do início ao embarque
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative z-10 -mt-8 px-8 lg:mt-0 lg:-ml-16 lg:px-0">
            <figure className="pv-shadow-float relative overflow-hidden rounded-[3px] bg-[#d7d3ce]">
              <img
                src={heroPortrait}
                alt="Golden retriever pronto para viajar ao lado da bagagem e dos documentos"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <StoryChrome compact />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== *
 * 11 — FAQ + FOOTER
 * ================================================================== */
const FAQ = [
  {
    q: "O que é o CVI?",
    a: "O Certificado Veterinário Internacional (CVI) é o documento utilizado para comprovar que o animal atende às exigências sanitárias necessárias para uma viagem internacional.",
  },
  {
    q: "Todo pet precisa de CVI para viajar para o exterior?",
    a: "As exigências variam conforme o país de destino. Por isso é importante verificar previamente quais documentos e procedimentos são necessários para a sua viagem.",
  },
  {
    q: "Quanto tempo antes da viagem devo começar?",
    a: "O ideal é começar o planejamento com antecedência. Algumas etapas dependem de prazos específicos, então não é recomendado deixar a preparação para os últimos dias.",
  },
  {
    q: "Meu pet precisa de microchip?",
    a: "A necessidade de microchip varia conforme o destino e as exigências aplicáveis à viagem. Nossa equipe orienta você sobre essa etapa.",
  },
  {
    q: "Meu pet precisa fazer sorologia?",
    a: "Alguns destinos exigem exames específicos, como a sorologia para raiva. A necessidade depende das regras aplicáveis ao país de destino.",
  },
  {
    q: "E se a vacina do meu pet estiver atrasada?",
    a: "Não significa necessariamente que seu pet não poderá viajar. O primeiro passo é avaliar a situação e entender quais procedimentos e prazos serão necessários para regularizar a documentação.",
  },
  {
    q: "Vocês ajudam com a documentação do meu pet?",
    a: "A Pet a Vet oferece orientação veterinária para as etapas necessárias à preparação do seu pet e para o processo de documentação da viagem.",
  },
  {
    q: "Vocês atendem na Vila Madalena?",
    a: "Sim. A Pet a Vet fica na Vila Madalena e atende tutores da região que precisam preparar seus pets para viagens internacionais.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-pv-deep px-6 py-20 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-[56rem]">
        <Reveal className="text-center">
          <Eyebrow tone="soft">FAQ</Eyebrow>
          <h2 className="text-pv-cream mt-4 text-[clamp(1.75rem,3.4vw,2.9rem)]">
            Perguntas Frequentes
          </h2>
        </Reveal>

        <div className="mt-11 space-y-3">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 45}>
                <div className="bg-pv-cream overflow-hidden rounded-[6px]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-5 px-6 py-5 text-left sm:px-7"
                  >
                    <span className="text-pv-ink flex-1 text-[clamp(0.95rem,1.5vw,1.1rem)]">
                      {f.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-[4px] transition-colors duration-300 ${
                        isOpen
                          ? "bg-pv-accent text-pv-cream-3"
                          : "border-pv-sky text-pv-sky-deep bg-pv-sky-soft/60 border"
                      }`}
                    >
                      {isOpen ? (
                        <ArrowDownLeft className="h-3.5 w-3.5" />
                      ) : (
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-pv-body px-6 pb-5 text-[0.97rem] leading-[1.65] sm:px-7">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="bg-pv-sky/35 mt-16 h-px w-full" />

        <footer className="text-pv-cream mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <LogoLockup invert height="h-11" />
          <div className="text-center text-[0.87rem] leading-[1.7] opacity-80 sm:text-right">
            <p>Pet a Vet — cuidado veterinário na Vila Madalena, São Paulo</p>
            <p>
              © 2026 · <strong className="font-semibold">Pet a Vet</strong> · Todos os direitos
              reservados
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
