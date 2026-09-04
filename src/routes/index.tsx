import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Stethoscope,
  Syringe,
  FileText,
  ScanLine,
  FlaskConical,
  Car,
  HeartHandshake,
  Clock,
  AlertTriangle,
  MessageCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/assets/logo.webp.asset.json";
import heroImg from "@/assets/hero-pet-travel.jpg";
import vetImg from "@/assets/vet-care.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emissão de CVI para pets na Vila Madalena | Pet a Vet" },
      {
        name: "description",
        content:
          "Vacinas, microchip, exames e orientação para o Certificado Veterinário Internacional do seu pet. Atendimento na Vila Madalena, São Paulo.",
      },
      { property: "og:title", content: "Emissão de CVI para pets na Vila Madalena | Pet a Vet" },
      {
        property: "og:description",
        content:
          "Prepare seu pet para viajar ao exterior com apoio veterinário completo na Vila Madalena.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATS =
  "https://wa.me/5511999999999?text=" +
  encodeURIComponent(
    "Olá! Vim pelo Google e preciso de ajuda com o CVI/documentação para viajar com meu pet. Meu destino é ______ e a data da viagem é ______. Podem me orientar?",
  );

function Cta({ children, variant = "solid" }: { children: string; variant?: "solid" | "outline" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-wide transition-transform duration-200 hover:-translate-y-0.5";
  const styles =
    variant === "solid"
      ? "bg-gradient-brand text-brand-foreground shadow-soft"
      : "border-2 border-brand text-brand-deep hover:bg-accent";
  return (
    <a href={WHATS} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      <MessageCircle className="h-4 w-4" />
      {children}
    </a>
  );
}

const steps = [
  {
    n: "01",
    t: "Informe seu destino e a data da viagem",
    d: "Entre em contato pelo WhatsApp e conte para nossa equipe para onde você vai e quando pretende viajar.",
  },
  {
    n: "02",
    t: "Entenda o que seu pet precisa",
    d: "A equipe orienta você sobre os cuidados, exames e documentos necessários para a preparação.",
  },
  {
    n: "03",
    t: "Realize os procedimentos necessários",
    d: "Faça na Pet a Vet as etapas veterinárias necessárias para preparar seu pet para a viagem.",
  },
  {
    n: "04",
    t: "Organize a documentação",
    d: "Receba orientação durante o processo de documentação e emissão do Certificado Veterinário Internacional.",
  },
  {
    n: "05",
    t: "Viaje com mais tranquilidade",
    d: "Com as etapas organizadas e seu pet preparado, você segue para o embarque com mais segurança.",
  },
];

function Steps() {
  return (
    <ol className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
      {steps.map((s, i) => (
        <li
          key={s.n}
          className={`rounded-3xl border border-border bg-card p-7 shadow-soft ${
            i === steps.length - 1 ? "md:col-span-2" : ""
          }`}
        >
          <span className="font-display text-3xl text-brand">{s.n}</span>
          <h3 className="mt-2 text-xl font-semibold">{s.t}</h3>
          <p className="mt-2 text-muted-foreground">{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

const requisitos = [
  {
    icon: Syringe,
    t: "Vacinação",
    d: "Verificação e realização das vacinas necessárias para a viagem.",
  },
  {
    icon: ScanLine,
    t: "Microchipagem",
    d: "Identificação do animal quando exigida para o destino.",
  },
  {
    icon: FlaskConical,
    t: "Exames",
    d: "Realização dos exames necessários conforme as exigências da viagem.",
  },
  {
    icon: ShieldCheck,
    t: "Atestado de saúde",
    d: "Documentação veterinária necessária para o processo.",
  },
  {
    icon: FileText,
    t: "CVI — Certificado Veterinário Internacional",
    d: "Documento utilizado no processo de viagem internacional do pet.",
  },
];

const local = [
  {
    icon: MapPin,
    t: "Atendimento próximo",
    d: "Resolva as etapas necessárias sem precisar percorrer grandes distâncias.",
  },
  {
    icon: Car,
    t: "Estacionamento próprio",
    d: "Mais comodidade para chegar à clínica com seu pet.",
  },
  {
    icon: Stethoscope,
    t: "Equipe veterinária",
    d: "Conte com profissionais para orientar os cuidados necessários.",
  },
  {
    icon: HeartHandshake,
    t: "Atendimento personalizado",
    d: "Seu pet recebe atenção de acordo com as necessidades do caso.",
  },
];

const autoridade = [
  {
    t: "Cuidado veterinário",
    d: "Seu pet é acompanhado por uma equipe veterinária durante as etapas necessárias para sua preparação.",
  },
  {
    t: "Estrutura completa",
    d: "Tenha acesso a diferentes cuidados veterinários no mesmo lugar, sem precisar organizar cada etapa separadamente.",
  },
  {
    t: "Orientação profissional",
    d: "Entenda o que precisa ser feito para preparar seu pet para a viagem e evite tomar decisões sozinho.",
  },
  {
    t: "Atendimento próximo",
    d: "Uma equipe disponível para orientar você durante a preparação do seu pet.",
  },
  {
    t: "Praticidade",
    d: "Menos deslocamentos, menos pesquisa e menos preocupação para organizar a viagem.",
  },
];

const objecoes = [
  {
    q: "“E se meu pet estiver com alguma vacina atrasada?”",
    a: "Nossa equipe pode avaliar a situação e orientar quais procedimentos precisam ser realizados antes da viagem.",
  },
  {
    q: "“E se o meu destino exigir exames?”",
    a: "A orientação considera as exigências relacionadas ao destino e ajuda você a entender quais exames podem ser necessários.",
  },
  {
    q: "“E se eu não souber quais documentos preciso?”",
    a: "Você não precisa descobrir tudo sozinho. Entre em contato e informe o destino e a data da viagem para receber orientação sobre as próximas etapas.",
  },
  {
    q: "“E se eu estiver com pouco tempo?”",
    a: "Quanto mais próxima estiver a viagem, mais importante é verificar o quanto antes quais são as exigências e os prazos envolvidos.",
  },
];

const faq = [
  {
    q: "O que é o CVI?",
    a: "O Certificado Veterinário Internacional (CVI) é um documento utilizado para comprovar que o animal atende às exigências sanitárias necessárias para uma viagem internacional.",
  },
  {
    q: "Todo pet precisa de CVI para viajar para o exterior?",
    a: "As exigências podem variar de acordo com o país de destino. Por isso, é importante verificar previamente quais documentos e procedimentos são necessários para a sua viagem.",
  },
  {
    q: "Quanto tempo antes da viagem devo começar?",
    a: "O ideal é começar o planejamento com antecedência. Algumas etapas podem depender de prazos específicos, por isso não é recomendado deixar a preparação para os últimos dias.",
  },
  {
    q: "Meu pet precisa de microchip?",
    a: "A necessidade de microchip pode variar conforme o destino e as exigências aplicáveis à viagem. Nossa equipe pode orientar você sobre essa etapa.",
  },
  {
    q: "Meu pet precisa fazer sorologia?",
    a: "Alguns destinos podem exigir exames específicos, como a sorologia para raiva. A necessidade depende das regras aplicáveis ao país de destino.",
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
    a: "Sim. A Pet a Vet está localizada na Vila Madalena, atendendo tutores da região que precisam preparar seus pets para viagens internacionais.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <img src={logo.url} alt="Pet a Vet" className="h-10 w-auto" />
          <a
            href={WHATS}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-brand-foreground shadow-soft sm:inline-flex"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-warm">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
              <MapPin className="h-3.5 w-3.5" /> Vila Madalena — São Paulo
            </span>
            <h1 className="mt-5 text-4xl leading-tight font-bold md:text-5xl">
              Emissão de CVI para seu pet na Vila Madalena
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Viaje com seu pet para o exterior sem correr o risco de ter sua viagem comprometida
              por erros na documentação.
            </p>
            <div className="mt-8">
              <Cta>QUERO EMITIR O CVI DO MEU PET</Cta>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={heroImg}
              alt="Cachorro e gato ao lado de uma mala em um aeroporto"
              width={1408}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="mx-auto max-w-4xl px-5 py-20">
        <h2 className="text-3xl font-bold md:text-4xl">Viajar com seu pet exige atenção aos detalhes</h2>
        <p className="mt-5 text-muted-foreground">
          Uma viagem internacional com um animal envolve mais do que passagem e caixa de transporte.
        </p>
        <p className="mt-3 text-muted-foreground">
          Dependendo do destino, podem existir exigências relacionadas a vacinação, microchipagem,
          exames, atestados, documentação e prazos.
        </p>
        <p className="mt-6 font-semibold">E um erro em qualquer uma dessas etapas pode gerar:</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "atraso no processo",
            "necessidade de refazer procedimentos",
            "custos inesperados",
            "problemas com a documentação",
            "risco de não conseguir embarcar com seu pet",
          ].map((i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
            >
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-lg font-semibold">
          Não deixe para descobrir isso quando a viagem estiver chegando.
        </p>
        <p className="mt-2 text-muted-foreground">
          Quanto antes você entender o que seu pet precisa, mais tranquilo será organizar tudo.
        </p>
        <div className="mt-8">
          <Cta>QUERO AVALIAR O MEU CASO</Cta>
        </div>
      </section>

      {/* COMO FUNCIONA 1 */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Como funciona?</h2>
          <Steps />
        </div>
      </section>

      {/* EXIGÊNCIAS */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Cada país pode ter exigências diferentes para a entrada do seu pet
          </h2>
          <p className="mt-5 text-muted-foreground">
            O que é necessário para viajar com um pet pode variar conforme o país de destino, data
            da viagem e situação do animal. Por isso, antes de iniciar os procedimentos, é
            importante entender exatamente quais etapas serão necessárias.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {requisitos.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-brand-deep">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-gradient-brand p-9 text-center text-brand-foreground shadow-lift">
          <p className="text-xl font-semibold">O mais importante?</p>
          <p className="mx-auto mt-3 max-w-2xl">
            Saber o que precisa ser feito antes de começar — e respeitar os prazos de cada etapa.
          </p>
          <div className="mt-7 flex justify-center">
            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-card px-7 py-4 text-sm font-semibold uppercase tracking-wide text-brand-deep shadow-soft"
            >
              <MessageCircle className="h-4 w-4" />
              Quero saber quais documentos meu pet precisa
            </a>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={vetImg}
              alt="Veterinária examinando um cachorro na clínica"
              loading="lazy"
              width={1200}
              height={912}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Resolva as etapas veterinárias da viagem do seu pet em um só lugar
            </h2>
            <p className="mt-5 text-muted-foreground">
              A Pet a Vet oferece o suporte veterinário necessário para ajudar você a preparar seu
              pet para uma viagem internacional. Você não precisa passar horas pesquisando cada
              etapa ou tentando descobrir sozinho o que fazer.
            </p>
            <p className="mt-3 text-muted-foreground">
              Nossa equipe orienta você sobre o processo e ajuda a organizar os cuidados necessários
              para o seu pet.
            </p>
            <p className="mt-6 font-semibold">Na Pet a Vet, você pode contar com:</p>
            <ul className="mt-4 space-y-2">
              {[
                "Avaliação veterinária",
                "Vacinação",
                "Microchipagem",
                "Exames",
                "Atestados veterinários",
                "Orientação sobre documentação",
                "Orientação para emissão do CVI",
              ].map((i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" />
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Cta>QUERO PREPARAR MEU PET PARA VIAJAR</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Tudo isso perto de você, na Vila Madalena</h2>
          <p className="mt-5 text-muted-foreground">
            Se você mora ou trabalha na Vila Madalena e região, não precisa atravessar São Paulo
            para começar a preparar seu pet para uma viagem internacional. A Pet a Vet reúne
            atendimento veterinário e estrutura completa para facilitar a preparação do seu pet.
          </p>
          <p className="mt-4 font-semibold">Mais praticidade para quem tem uma rotina corrida</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {local.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <Icon className="h-7 w-7 text-brand" />
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Cta>QUERO FALAR COM A PET A VET</Cta>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="bg-brand-deep py-20 text-cream">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Por que preparar seu pet para viajar com a Pet a Vet?
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {autoridade.map((a) => (
              <div key={a.t} className="rounded-3xl border border-cream/15 bg-cream/5 p-7">
                <h3 className="text-lg font-semibold">{a.t}</h3>
                <p className="mt-2 text-sm text-cream/80">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA 2 */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Como funciona?</h2>
        <Steps />
        <div className="mt-10 flex justify-center">
          <Cta>QUERO COMEÇAR A PREPARAÇÃO</Cta>
        </div>
      </section>

      {/* OBJEÇÕES */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-3xl font-bold md:text-4xl">Tem medo de esquecer alguma coisa?</h2>
          <p className="mt-4 text-muted-foreground">
            É normal ter dúvidas quando o assunto é viagem internacional com pets.
          </p>
          <div className="mt-8 space-y-4">
            {objecoes.map((o) => (
              <div key={o.q} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <p className="font-display text-lg font-semibold text-brand-deep">{o.q}</p>
                <p className="mt-2 text-muted-foreground">{o.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 flex items-center gap-3 font-semibold">
            <Clock className="h-5 w-5 text-brand" />
            Por isso, não espere a viagem estar próxima para começar.
          </p>
          <div className="mt-8">
            <Cta>QUERO VERIFICAR MEU CASO</Cta>
          </div>
        </div>
      </section>

      {/* PROVA */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Seu pet merece uma preparação tão cuidadosa quanto a sua viagem
        </h2>
        <p className="mt-5 text-muted-foreground">
          Viajar para outro país já exige planejamento. Quando seu pet também vai viajar, ter uma
          equipe veterinária acompanhando a preparação ajuda a tornar o processo mais simples e
          organizado.
        </p>
        <p className="mt-3 text-muted-foreground">
          Conte com a Pet a Vet para cuidar do seu pet durante essa preparação.
        </p>
        <div className="mt-8 flex justify-center">
          <Cta variant="outline">QUERO FALAR COM UM VETERINÁRIO</Cta>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-3xl font-bold md:text-4xl">
            Perguntas frequentes sobre CVI e viagens internacionais com pets
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faq.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-brand py-20 text-brand-foreground">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Não deixe a documentação do seu pet para a última hora
          </h2>
          <p className="mt-5">Descubra agora o que seu pet precisa para viajar para o exterior.</p>
          <p className="mt-3">
            Informe para nossa equipe o destino e a data da sua viagem e receba orientação sobre os
            próximos passos.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-card px-8 py-4 text-sm font-semibold uppercase tracking-wide text-brand-deep shadow-lift"
            >
              <MessageCircle className="h-4 w-4" />
              Quero preparar meu pet para viajar
            </a>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4" /> Atendimento na Vila Madalena
          </p>
        </div>
      </section>

      <footer className="bg-brand-deep py-10 text-center text-cream">
        <img src={logo.url} alt="Pet a Vet" className="mx-auto h-10 w-auto" />
        <p className="mx-auto mt-4 max-w-md px-5 text-sm text-cream/80">
          Pet a Vet — cuidado veterinário para você e seu pet viajarem com mais tranquilidade.
        </p>
      </footer>

      <a
        href={WHATS}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-brand-foreground shadow-lift"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
