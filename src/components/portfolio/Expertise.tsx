import { Section, SectionHeader } from "./Section";
import {
  Terminal,
  Code2,
  Code,
  Palette,
  FileCode2,
  Server,
  Database,
  Triangle,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Domain = {
  name: string;
  desc: string;
  glow: "cyan" | "violet" | "magenta";
  icon: LucideIcon;
};

const domains: Domain[] = [
  { icon: Terminal, name: "Windows CMD", desc: "Managing the operating system, file directories, services and network diagnostics from the command line.", glow: "cyan" },
  { icon: Code2, name: "Visual Studio Code", desc: "Daily-driver editor for writing, debugging and shipping across every stack with extensions, Git and terminals built in.", glow: "violet" },
  { icon: Code, name: "HTML", desc: "Semantic, accessible markup that gives every interface a clear structure and a meaningful document outline.", glow: "magenta" },
  { icon: Palette, name: "CSS", desc: "Responsive layouts, design tokens, transitions and animations that bring interfaces to life across devices.", glow: "cyan" },
  { icon: FileCode2, name: "JavaScript", desc: "Interactive behavior, DOM control and modern ES syntax powering both browser and Node runtimes.", glow: "magenta" },
  { icon: Server, name: "Linux", desc: "Servers, shells, package managers and containers, the operating system underneath most of the modern web.", glow: "violet" },
  { icon: Database, name: "Supabase", desc: "Postgres database, authentication, storage and edge functions wired up with row level security out of the box.", glow: "cyan" },
  { icon: Triangle, name: "Vercel", desc: "Frictionless deployment, preview environments and edge delivery for modern React and Next.js applications.", glow: "violet" },
  { icon: Sparkles, name: "Lovable", desc: "AI-native build platform for shipping full stack products in hours, from prompt to production.", glow: "magenta" },
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
        {domains.map(({ icon: Icon, name, desc, glow }, i) => (
          <div
            key={name}
            className="card-elevated group relative overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-1 hover:border-[oklch(0.66_0.27_305/0.5)]"
          >
            <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${glowClass[glow]} opacity-0 blur-2xl transition group-hover:opacity-100`} />
            <div className={`relative mb-5 inline-grid h-14 w-14 place-items-center rounded-xl glass-strong ${glowClass[glow]}`}>
              <Icon aria-hidden="true" className="h-7 w-7" strokeWidth={1.8} />
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
