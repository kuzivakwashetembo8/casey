import { Section, SectionHeader } from "./Section";
type Domain = {
  name: string;
  desc: string;
  glow: "cyan" | "violet" | "magenta";
  logo: string;
};

const domains: Domain[] = [
  { logo: "/brands/windows11.svg", name: "Windows CMD", desc: "Managing the operating system, file directories, services and network diagnostics from the command line.", glow: "cyan" },
  { logo: "/brands/vscode.svg", name: "Visual Studio Code", desc: "Daily-driver editor for writing, debugging and shipping across every stack with extensions, Git and terminals built in.", glow: "violet" },
  { logo: "/brands/html5.svg", name: "HTML", desc: "Semantic, accessible markup that gives every interface a clear structure and a meaningful document outline.", glow: "magenta" },
  { logo: "/brands/css3.svg", name: "CSS", desc: "Responsive layouts, design tokens, transitions and animations that bring interfaces to life across devices.", glow: "cyan" },
  { logo: "/brands/javascript.svg", name: "JavaScript", desc: "Interactive behavior, DOM control and modern ES syntax powering both browser and Node runtimes.", glow: "magenta" },
  { logo: "/brands/linux.svg", name: "Linux", desc: "Servers, shells, package managers and containers, the operating system underneath most of the modern web.", glow: "violet" },
  { logo: "/brands/supabase.svg", name: "Supabase", desc: "Postgres database, authentication, storage and edge functions wired up with row level security out of the box.", glow: "cyan" },
  { logo: "/brands/vercel.svg", name: "Vercel", desc: "Frictionless deployment, preview environments and edge delivery for modern React and Next.js applications.", glow: "violet" },
  { logo: "/brands/lovable.svg", name: "Lovable", desc: "AI-native build platform for shipping full stack products in hours, from prompt to production.", glow: "magenta" },
];

const glowClass: Record<string, string> = {
  cyan: "from-[oklch(0.78_0.18_220/0.4)] to-transparent text-[oklch(0.78_0.18_220)]",
  violet: "from-[oklch(0.66_0.27_305/0.4)] to-transparent text-[oklch(0.66_0.27_305)]",
  magenta: "from-[oklch(0.70_0.32_340/0.4)] to-transparent text-[oklch(0.70_0.32_340)]",
};

export function Expertise() {
  return (
    <Section id="expertise" reveal="up">
      <SectionHeader
        eyebrow="Technology Overview"
        title={<>A broad stack.<br /><span className="text-gradient-neon">Engineered depth.</span></>}
        description="Across nine core domains, I build systems that communicate clearly, abstracting the technical jargon from non-technical colleagues."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {domains.map(({ logo, name, desc, glow }, i) => (
          <div
            key={name}
            className="card-elevated group relative overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-1 hover:border-[oklch(0.66_0.27_305/0.5)]"
          >
            <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${glowClass[glow]} opacity-0 blur-2xl transition group-hover:opacity-100`} />
            <div className={`relative mb-5 inline-grid h-14 w-14 place-items-center rounded-xl glass-strong ${glowClass[glow]}`}>
              <img src={logo} alt={`${name} logo`} className="h-9 w-9 object-contain" loading="lazy" decoding="async" />
            </div>
            <h3 className="font-display text-lg font-semibold">{name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
              0{i + 1} / {domains.length}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
