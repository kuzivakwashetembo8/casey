import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const projects = [
  {
    name: "African Centre for Global Christianity",
    domain: "acgc.site",
    link: "https://acgc.site",
    tag: "Education · Theology",
    desc: "A learning portal for the African Centre for Global Christianity, supporting the institution’s theology education programmes and digital learning experience.",
    capabilities: ["Online learning", "Theology education", "Digital learning portal"],
    outcome: "A central online destination for theology education.",
    accent: "violet",
  },
  {
    name: "First Aid",
    domain: "firstaidapp.co.za",
    link: "https://firstaidapp.co.za",
    tag: "Healthcare · Emergency Support",
    desc: "An AI-assisted emergency support platform that helps patients communicate their needs, connect with doctors and identify relevant prescription information.",
    capabilities: ["AI-assisted support", "Doctor connection", "Prescription identification"],
    outcome: "Helping patients access relevant support during emergencies.",
    accent: "magenta",
  },
  {
    name: "Grey Analytics",
    domain: "greyanalytics.co.za",
    link: "https://greyanalytics.co.za",
    tag: "Finance · Risk & Audit",
    desc: "A financial document analytics platform that helps identify calculation errors, flag potential fraud indicators and support auditing processes.",
    capabilities: ["Document analysis", "Error detection", "Fraud indicators", "Audit support"],
    outcome: "Clearer financial reviews and more focused audit work.",
    accent: "cyan",
  },
  {
    name: "SA Learn",
    domain: "salearn.online",
    link: "https://salearn.online",
    tag: "Education · Career Development",
    desc: "An education platform for South African students to calculate APS scores, explore careers matched to their marks, find opportunities and apply to universities.",
    capabilities: ["APS calculator", "Career matching", "Job discovery", "University applications"],
    outcome: "Connecting academic results with education and career opportunities.",
    accent: "violet",
  },
  {
    name: "Cwenga Peter",
    domain: "cwengapeter.info",
    link: "https://cwengapeter.info",
    tag: "Professional Services · Legal",
    desc: "A professional portfolio website for a lawyer, presenting a clear digital profile and an accessible point of contact for prospective clients.",
    capabilities: ["Professional profile", "Legal portfolio", "Client enquiries"],
    outcome: "A focused online presence for a legal professional.",
    accent: "magenta",
  },
];

const accentGradient: Record<string, string> = {
  cyan: "from-[oklch(0.78_0.18_220)] to-[oklch(0.65_0.22_260)]",
  violet: "from-[oklch(0.65_0.27_300)] to-[oklch(0.55_0.27_280)]",
  magenta: "from-[oklch(0.70_0.32_340)] to-[oklch(0.60_0.28_320)]",
};

export function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    containScroll: false,
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <Section id="projects">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Websites built for<br /><span className="text-gradient-neon">real-world needs.</span></>}
        />
        <a href="#contact" className="glass rounded-xl px-5 py-2.5 text-sm font-medium transition hover:bg-[oklch(0.3_0.1_285/0.4)]">
          Discuss a project →
        </a>
      </div>

      <div className="relative mt-14">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y items-stretch">
            {projects.map((p, i) => {
              const isActive = i === selected;
              return (
                <div
                  key={p.name}
                  className="relative min-w-0 shrink-0 grow-0 basis-[92%] px-1.5 sm:basis-[78%] md:basis-[62%] lg:basis-[52%]"
                >
                  <div
                    className={`relative w-full transition-all duration-500 ease-out ${
                      isActive ? "scale-100 opacity-100" : "scale-[0.82] opacity-40"
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-tl-3xl rounded-br-3xl">
                      <div
                        className={`absolute -top-10 -left-8 h-40 w-40 rounded-full bg-gradient-to-br ${accentGradient[p.accent]} opacity-60 blur-3xl animate-float`}
                      />
                      <div
                        className={`absolute -bottom-12 -right-10 h-44 w-44 rounded-full bg-gradient-to-br ${accentGradient[p.accent]} opacity-50 blur-3xl animate-pulse-glow`}
                      />
                      <div className="absolute right-10 top-1/3 h-20 w-20 rounded-full bg-[oklch(0.78_0.18_220)] opacity-30 blur-2xl animate-float" style={{ animationDelay: "1.2s" }} />
                    </div>

                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${p.name} website`}
                      className="relative flex w-full flex-col overflow-hidden rounded-tl-3xl rounded-br-3xl glass p-8 text-white backdrop-blur-3xl lg:p-10 transition hover:scale-[1.01]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="font-mono text-[10px] uppercase tracking-widest text-[oklch(0.78_0.18_220)]">
                            {p.tag}
                          </div>
                          <h3 className="mt-1.5 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">{p.name}</h3>
                          <div className="mt-1 font-mono text-xs text-white/60">{p.domain}</div>
                        </div>
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full glass text-white">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                      <p className="mt-5 text-sm leading-relaxed text-white/85">{p.desc}</p>
                      <div className="mt-6">
                        <div className="flex flex-wrap gap-1.5">
                          {p.capabilities.map((capability) => (
                            <span
                              key={capability}
                              className="rounded-md border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] text-white/90"
                            >
                              {capability}
                            </span>
                          ))}
                        </div>
                        <div className="mt-5 border-t border-white/15 pt-4 text-xs leading-snug text-white/85">
                          {p.outcome}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous project"
            className="glass grid h-11 w-11 place-items-center rounded-full transition hover:bg-[oklch(0.3_0.1_285/0.4)]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-1.5">
            {projects.map((p, i) => (
              <button
                key={p.name}
                type="button"
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to ${p.name}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === selected ? "w-6 bg-gradient-neon" : "w-1.5 bg-foreground/30 hover:bg-foreground/60"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next project"
            className="glass grid h-11 w-11 place-items-center rounded-full transition hover:bg-[oklch(0.3_0.1_285/0.4)]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
