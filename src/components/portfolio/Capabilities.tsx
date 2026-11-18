import { Section, SectionHeader } from "./Section";
import { CheckCircle2, Layers3, Tag } from "lucide-react";

const pages = ["Home", "About", "Services", "Contact", "Products", "Pricing", "Gallery", "Testimonials", "FAQ", "Blog / Updates"];
const features = [
  { name: "Sign-up forms", detail: "Let visitors register or send their details." },
  { name: "Orders", detail: "Collect product or service orders online." },
  { name: "Payments", detail: "Accept payments through an integrated payment provider." },
  { name: "AI chatbot", detail: "Give visitors an automated way to ask questions." },
  { name: "Maps", detail: "Show your location and help customers find you." },
];

export function Capabilities() {
  return (
    <Section id="package" reveal="left">
      <SectionHeader
        eyebrow="One simple website package"
        title={<>Everything your business needs to <span className="text-gradient-neon">get online.</span></>}
        description="No confusing tiers or custom quotes. Every commercial website has the same package and the same price."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 shadow-neon lg:p-10">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[oklch(0.66_0.27_305/0.2)] blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-neon px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-background"><Tag className="h-3 w-3" /> Fixed price</div>
            <div className="mt-7 font-display text-6xl font-bold tracking-tight">R1,000</div>
            <p className="mt-2 text-sm text-muted-foreground">One commercial website. One price.</p>
            <div className="my-7 h-px bg-border/70" />
            <div className="flex items-center gap-3"><Layers3 className="h-5 w-5 text-[oklch(0.78_0.18_220)]" /><span className="font-semibold">10 basic pages + 5 distinct features</span></div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Built as a complete website, with front-end pages and back-end functionality where needed.</p>
            <a href="#contact" className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gradient-neon px-5 py-3.5 text-sm font-semibold text-background shadow-neon transition hover:-translate-y-0.5">Discuss your website →</a>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="glass rounded-3xl p-7">
            <h3 className="font-display text-xl font-semibold">10 basic pages</h3>
            <p className="mt-2 text-sm text-muted-foreground">A useful starting structure for a business website.</p>
            <ol className="mt-5 space-y-3">
              {pages.map((page, i) => <li key={page} className="flex items-center gap-3 text-sm"><span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span><span>{page}</span></li>)}
            </ol>
          </div>
          <div className="glass rounded-3xl p-7">
            <h3 className="font-display text-xl font-semibold">5 features</h3>
            <p className="mt-2 text-sm text-muted-foreground">Choose five distinct features for your business.</p>
            <ul className="mt-5 space-y-5">
              {features.map((feature) => <li key={feature.name} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[oklch(0.78_0.18_220)]" /><div><div className="text-sm font-medium">{feature.name}</div><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{feature.detail}</p></div></li>)}
            </ul>
            <p className="mt-5 border-t border-border/60 pt-4 text-xs leading-relaxed text-muted-foreground">Examples of available features. Select five that fit your business.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
