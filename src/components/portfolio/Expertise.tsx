import { Section, SectionHeader } from "./Section";
type Domain = { name: string; desc: string; glow: "cyan" | "violet" | "magenta"; logo: string };

const domains: Domain[] = [
  { logo: "/brands/windows11.svg", name: "Windows CMD", desc: "Command-line tools for files, system settings and network checks.", glow: "cyan" },
  { logo: "/brands/vscode.svg", name: "Visual Studio Code", desc: "The editor I use to write, test and maintain website code.", glow: "violet" },
  { logo: "/brands/html5.svg", name: "HTML", desc: "The structure and content of every website page.", glow: "magenta" },
  { logo: "/brands/css3.svg", name: "CSS", desc: "Responsive layouts and styling for phones, tablets and desktops.", glow: "cyan" },
  { logo: "/brands/javascript.svg", name: "JavaScript", desc: "Interactive features that make websites work.", glow: "magenta" },
  { logo: "/brands/linux.svg", name: "Linux", desc: "Server environments used to run web applications.", glow: "violet" },
  { logo: "/brands/supabase.svg", name: "Supabase", desc: "Database, sign-in, file storage and back-end services.", glow: "cyan" },
  { logo: "/brands/vercel.svg", name: "Vercel", desc: "Website hosting and deployment tools.", glow: "violet" },
  { logo: "/brands/lovable.svg", name: "Lovable", desc: "A tool in my development toolkit for building web applications.", glow: "magenta" },
];

const glowClass: Record<string, string> = {
  cyan: "from-[oklch(0.78_0.18_220/0.4)] to-transparent text-[oklch(0.78_0.18_220)]",
  violet: "from-[oklch(0.66_0.27_305/0.4)] to-transparent text-[oklch(0.66_0.27_305)]",
  magenta: "from-[oklch(0.70_0.32_340/0.4)] to-transparent text-[oklch(0.70_0.32_340)]",
};

export function Expertise() {
  return (
    <Section id="expertise" reveal="up">
      <SectionHeader eyebrow="My technology stack" title={<>Full-stack skills. <span className="text-gradient-neon">One complete website.</span></>} description="I work on both sides of a website: what customers see and the back-end features that make it work." />
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {domains.map(({ logo, name, desc, glow }, i) => (
          <div key={name} className="card-elevated group relative overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-1 hover:border-[oklch(0.66_0.27_305/0.5)]">
            <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${glowClass[glow]} opacity-0 blur-2xl transition group-hover:opacity-100`} />
            <div className={`relative mb-5 inline-grid h-14 w-14 place-items-center rounded-xl glass-strong ${glowClass[glow]}`}><img src={logo} alt={`${name} logo`} className="h-9 w-9 object-contain" loading="lazy" decoding="async" /></div>
            <h3 className="font-display text-lg font-semibold">{name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">0{i + 1} / {domains.length}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
