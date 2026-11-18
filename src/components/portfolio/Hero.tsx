import { useState } from "react";
import { Info, X } from "lucide-react";

export function Hero() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[480px] w-[480px] rounded-full bg-[oklch(0.55_0.27_305/0.25)] blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-0 h-[420px] w-[420px] rounded-full bg-[oklch(0.65_0.22_220/0.2)] blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-mono">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-[oklch(0.75_0.2_150)]" />
            <span className="text-muted-foreground">Websites for businesses · One price</span>
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Your business.
            <br />
            <span className="text-gradient-neon">Online for</span>
            <br />
            R1,000.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground sm:text-lg">
            I'm Kuzi. I build full-stack websites for businesses, from the pages customers read to the features they use. Every website has the same straightforward price: <strong>R1,000.</strong>
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#package" className="rounded-xl bg-gradient-neon px-6 py-3.5 text-sm font-semibold text-background shadow-neon transition hover:-translate-y-0.5">
              See what's included →
            </a>
            <a href="#contact" className="glass rounded-xl px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-[oklch(0.3_0.1_285/0.4)]">
              Contact Kuzi
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[{ k: "R1,000", v: "One price" }, { k: "10", v: "Basic pages" }, { k: "5", v: "Features" }].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl font-bold text-gradient-neon sm:text-3xl">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl glass-strong p-1 shadow-neon">
            <img src="/Certificate.jpg" alt="K.C.T. certification" className="h-full w-full rounded-[1.4rem] object-contain" />
            <button type="button" onClick={() => setShowInfo(true)} aria-label="About Kuzi" className="absolute bottom-5 right-5 z-10 grid h-11 w-11 place-items-center rounded-full glass-strong text-foreground shadow-lg">
              <Info className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      {showInfo && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-background/80 p-4 backdrop-blur-xl" onClick={() => setShowInfo(false)}>
          <div className="relative w-full max-w-sm rounded-3xl glass-strong p-7 shadow-neon" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setShowInfo(false)} aria-label="Close" className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full glass"><X className="h-4 w-4" /></button>
            <h2 className="font-display text-2xl font-semibold">Hi, I'm Kuzi.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">I build complete websites for businesses. I work across the front end and back end, so the design, pages and working features come together as one website.</p>
          </div>
        </div>
      )}
    </section>
  );
}
