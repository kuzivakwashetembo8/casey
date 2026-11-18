import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Moon, Sun, X, FileUser, FileText } from "lucide-react";

function ThemeToggle() {
  const [light, setLight] = useState(() => typeof document !== "undefined" ? document.documentElement.classList.contains("light") : true);
  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(next ? "light" : "dark");
    try { localStorage.setItem("theme", next ? "light" : "dark"); } catch {}
  };
  return <button type="button" onClick={toggle} aria-label={light ? "Switch to dark mode" : "Switch to light mode"} className="grid h-9 w-9 place-items-center rounded-full glass text-foreground transition hover:scale-110">{light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}</button>;
}

const links = [
  { href: "#package", label: "The R1,000 Deal" },
  { href: "#expertise", label: "My Stack" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [request, setRequest] = useState<null | "CV" | "Cover Letter">(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); setRequest(null); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto mt-4 max-w-6xl px-4">
          <nav className="glass-strong nav-shadow flex items-center justify-between rounded-2xl px-5 py-3">
            <div className="flex items-center gap-2.5">
              <button type="button" onClick={() => setOpen(true)} aria-label="Open Kuzi profile photo" className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full ring-1 ring-border/60 transition hover:ring-[oklch(0.66_0.27_305)]"><img src="/Casey.jpeg" alt="Kuzi" className="h-full w-full object-cover" /></button>
              <Link to="/" className="font-display text-base font-semibold tracking-tight">Kuzi</Link>
            </div>
            <ul className="hidden items-center gap-7 lg:flex">{links.map((l) => <li key={l.href}><a href={l.href} className="text-sm text-muted-foreground transition hover:text-foreground">{l.label}</a></li>)}</ul>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setRequest("CV")} className="hidden items-center gap-1.5 rounded-xl glass px-3 py-2 text-sm font-medium text-foreground transition hover:scale-[1.03] md:inline-flex"><FileUser className="h-4 w-4" /> CV</button>
              <button type="button" onClick={() => setRequest("Cover Letter")} className="hidden items-center gap-1.5 rounded-xl glass px-3 py-2 text-sm font-medium text-foreground transition hover:scale-[1.03] md:inline-flex"><FileText className="h-4 w-4" /> Cover Letter</button>
              <ThemeToggle />
              <a href="#contact" className="rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90">Let's Talk →</a>
            </div>
          </nav>
        </div>
      </header>
      {open && <div className="fixed inset-0 z-[100] grid place-items-center bg-background/80 p-4 backdrop-blur-xl" onClick={() => setOpen(false)}><button type="button" onClick={() => setOpen(false)} aria-label="Close profile" className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full glass-strong"><X className="h-5 w-5" /></button><img src="/Casey.jpeg" alt="Kuzi" className="max-h-[80vh] max-w-[90vw] rounded-3xl object-contain shadow-neon" /></div>}
      {request && <div role="dialog" aria-modal="true" aria-labelledby="request-title" className="fixed inset-0 z-[110] grid place-items-center bg-background/80 p-4 backdrop-blur-xl" onClick={() => setRequest(null)}><div className="relative w-full max-w-sm rounded-3xl glass-strong p-8 text-center shadow-neon" onClick={(e) => e.stopPropagation()}><button type="button" onClick={() => setRequest(null)} aria-label="Close request message" className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full glass"><X className="h-4 w-4" /></button><div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-neon text-background">{request === "CV" ? <FileUser className="h-6 w-6" /> : <FileText className="h-6 w-6" />}</div><h2 id="request-title" className="mt-5 font-display text-2xl font-semibold">Request {request}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Kuzi is open to being hired for web development services, projects and jobs. {request} available upon request.</p></div></div>}
    </>
  );
}
