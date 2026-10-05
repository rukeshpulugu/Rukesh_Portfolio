"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download, ExternalLink, FileText, Github, GraduationCap, Linkedin, Mail, Menu, Moon, Sun, X, BarChart3 } from "lucide-react";
import { CERTS, EXPERIENCE, LINKS, PROJECTS, SKILLS, type Project } from "@/lib/data";

const NAV = ["Home", "About", "Skills", "Experience", "Projects", "Certifications", "Education", "Contact"];
const id = (s: string) => s.toLowerCase();
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
  );
}
function Section({ name, title, sub, children }: { name: string; title: string; sub?: string; children: React.ReactNode }) {
  return (
    <section id={id(name)} className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-accent">{name}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {sub && <p className="mt-3 max-w-2xl text-mute">{sub}</p>}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
const btn = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5";
const primary = `${btn} bg-accent text-bg shadow-lg shadow-accent/20 hover:shadow-accent/40`;
const ghost = `${btn} border border-line bg-card/60 backdrop-blur hover:border-accent`;

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [proj, setProj] = useState<Project | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => { setDark(document.documentElement.classList.contains("dark")); }, []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    NAV.forEach((n) => { const el = document.getElementById(id(n)); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);
  useEffect(() => {
    document.body.style.overflow = proj ? "hidden" : "";
    const k = (e: KeyboardEvent) => e.key === "Escape" && (setProj(null), setOpen(false));
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, [proj]);

  const toggle = () => {
    const next = !dark; setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-bg">Skip to content</a>
      <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "border-b border-line bg-bg/80 backdrop-blur-xl" : ""}`}>
        <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#home" className="flex items-center gap-2 font-semibold"><BarChart3 className="h-5 w-5 text-accent" aria-hidden />Rukesh Pulugu</a>
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.slice(1).map((n) => (
              <li key={n}><a href={`#${id(n)}`} aria-current={active === id(n) ? "true" : undefined}
                className={`relative rounded-full px-3 py-1.5 text-sm transition ${active === id(n) ? "text-fg" : "text-mute hover:text-fg"}`}>
                {active === id(n) && <motion.span layoutId="pill" className="absolute inset-0 -z-10 rounded-full bg-accent/15" />}{n}</a></li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} className="rounded-full border border-line bg-card/60 p-2 hover:border-accent">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="rounded-full border border-line bg-card/60 p-2 lg:hidden">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
          </div>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-b border-line bg-bg/95 px-5 backdrop-blur-xl lg:hidden">
              {NAV.map((n) => <li key={n}><a href={`#${id(n)}`} onClick={() => setOpen(false)} className="block py-3 text-mute hover:text-fg">{n}</a></li>)}
            </motion.ul>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
          <div className="grid-bg absolute inset-0 -z-10" aria-hidden />
          <div className="orb absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="orb absolute -right-24 top-40 -z-10 h-72 w-72 rounded-full bg-accent2/20 blur-3xl" aria-hidden />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 md:grid-cols-[1.3fr_1fr]">
            <div>
              <motion.p initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-3 py-1 text-xs text-mute backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-accent" />Aspiring Data Analyst</motion.p>
              <motion.h1 initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                Hi, I&apos;m <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Rukesh Pulugu</span></motion.h1>
              <motion.p initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-5 max-w-xl text-lg text-mute">
                I turn raw data into actionable insights using Excel, SQL, Python and Power BI, to support better business decisions.</motion.p>
              <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className={primary}>View Projects <ArrowUpRight className="h-4 w-4" /></a>
                <a href={LINKS.resume} download className={ghost}><Download className="h-4 w-4" />Download Resume</a>
                <a href="#contact" className={ghost}>Contact Me</a>
              </motion.div>
              <div className="mt-6 flex gap-3">
                <a href={LINKS.github} {...ext} aria-label="GitHub profile" className="rounded-full border border-line bg-card/60 p-2.5 transition hover:border-accent hover:text-accent"><Github className="h-5 w-5" /></a>
                <a href={LINKS.linkedin} {...ext} aria-label="LinkedIn profile" className="rounded-full border border-line bg-card/60 p-2.5 transition hover:border-accent hover:text-accent"><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>
            <motion.div initial={reduce ? false : { opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="mx-auto w-full max-w-xs">
              <div className="rounded-3xl bg-gradient-to-br from-accent to-accent2 p-[2px] shadow-2xl shadow-accent/20">
                <div className="overflow-hidden rounded-[22px] bg-card">
                  <Image src="/rukesh.jpeg" alt="Portrait of Rukesh Pulugu, Data Analyst" width={402} height={531} priority sizes="(max-width:768px) 80vw, 320px" className="h-auto w-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Section name="About" title="Turning data into decisions" sub="A Data Analytics student building practical, portfolio-ready analysis.">
          <div className="grid gap-6 md:grid-cols-3">
            {[["Analytical mindset", "I enjoy transforming raw data into clear, actionable insights that support business decisions."],
              ["Hands-on practice", "Dashboards in Excel and Power BI plus SQL analysis, backed by four data analytics internships."],
              ["Always learning", "Pursuing a B.Tech in Data Analytics at VIT-AP University while building expertise in real-world analytics challenges."]].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.1}><div className="h-full rounded-2xl border border-line bg-card p-6 shadow-sm"><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm leading-relaxed text-mute">{d}</p></div></Reveal>
            ))}
          </div>
        </Section>

        <Section name="Skills" title="Tools I work with">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-card p-6 transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/5">
                  <h3 className="font-semibold">{g.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">{g.items.map((s) => <span key={s} className="rounded-full border border-line bg-bg px-3 py-1 text-xs text-mute">{s}</span>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section name="Experience" title="Internships" sub="Hands-on data analytics internships. Each links to the associated GitHub work.">
          <ol className="relative ml-3 space-y-6 border-l border-line">
            {EXPERIENCE.map((e, i) => (
              <li key={e.org} className="pl-8">
                <Reveal delay={i * 0.08}>
                  <span className="absolute -left-[7px] mt-2 h-3 w-3 rounded-full bg-accent ring-4 ring-bg" aria-hidden />
                  <div className="rounded-2xl border border-line bg-card p-5 transition hover:border-accent/60">
                    <p className="text-xs text-accent">{e.date}</p>
                    <h3 className="mt-1 font-semibold">{e.role}</h3>
                    <p className="text-sm text-mute">{e.org}</p>
                    <a href={e.repo} {...ext} className="mt-3 inline-flex items-center gap-1 text-sm hover:text-accent"><Github className="h-4 w-4" />View work on GitHub<ExternalLink className="h-3 w-3" /></a>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>

        <Section name="Projects" title="Selected projects" sub="Dashboards and analysis built on real business-style datasets.">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/10">
                  <div className="relative flex h-36 items-end gap-2 bg-gradient-to-br from-accent/15 to-accent2/15 p-5" aria-hidden>
                    {[40, 65, 50, 85, 60, 95].map((h, k) => <span key={k} style={{ height: `${h}%` }} className="w-full rounded-t bg-accent/50 transition-all duration-500 group-hover:bg-accent" />)}
                    <span className="absolute right-3 top-3 rounded-full bg-bg/80 px-2.5 py-1 text-xs font-medium">{p.tool}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-mute">{p.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">{p.tech.slice(0, 4).map((t) => <span key={t} className="rounded-md bg-bg px-2 py-0.5 text-xs text-mute">{t}</span>)}</div>
                    <div className="mt-auto flex gap-2 pt-6">
                      <a href={p.repo} {...ext} className={`${ghost} !px-4 !py-2`}><Github className="h-4 w-4" />GitHub</a>
                      <button onClick={() => setProj(p)} className={`${primary} !px-4 !py-2`}>View Details</button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section name="Certifications" title="Certifications">
          <div className="grid gap-5 sm:grid-cols-2">
            {CERTS.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.1}>
                <a href={c.href} {...ext} className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-card p-5 transition hover:-translate-y-1 hover:border-accent/60">
                  <FileText className="h-8 w-8 shrink-0 text-accent" aria-hidden />
                  <div><h3 className="flex items-center gap-1 font-semibold group-hover:text-accent">{c.name}<ExternalLink className="h-3.5 w-3.5" aria-hidden /></h3>
                    <p className="text-sm text-mute">{c.org} · {c.date}</p><p className="mt-2 text-sm text-mute">{c.note}</p></div>
                </a>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section name="Education" title="Education">
          <Reveal>
            <div className="flex items-start gap-4 rounded-2xl border border-line bg-card p-6">
              <GraduationCap className="mt-1 h-8 w-8 shrink-0 text-accent" aria-hidden />
              <div><h3 className="font-semibold">B.Tech – Data Analytics</h3><p className="text-mute">VIT-AP University, Amaravathi</p><p className="mt-1 text-sm text-accent">Expected graduation 2029</p></div>
            </div>
          </Reveal>
        </Section>

        <Section name="Contact" title="Let's connect">
          <Reveal>
            <div className="rounded-3xl border border-line bg-gradient-to-br from-accent/10 to-accent2/10 p-8 text-center sm:p-12">
              <p className="mx-auto max-w-xl text-xl font-medium">Let&apos;s connect and build something meaningful with data.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={`mailto:${LINKS.email}`} className={primary}><Mail className="h-4 w-4" />Email Me</a>
                <a href={LINKS.linkedin} {...ext} className={ghost}><Linkedin className="h-4 w-4" />LinkedIn</a>
                <a href={LINKS.github} {...ext} className={ghost}><Github className="h-4 w-4" />GitHub</a>
                <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" className={ghost}><FileText className="h-4 w-4" />View Resume</a>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-line py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-mute sm:flex-row">
          <p>© {new Date().getFullYear()} Rukesh Pulugu · Data Analyst</p>
          <div className="flex gap-4">
            <a href={LINKS.github} {...ext} aria-label="GitHub" className="hover:text-accent"><Github className="h-5 w-5" /></a>
            <a href={`mailto:${LINKS.email}`} aria-label="Email" className="hover:text-accent"><Mail className="h-5 w-5" /></a>
            <a href={LINKS.linkedin} {...ext} aria-label="LinkedIn" className="hover:text-accent"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {proj && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setProj(null)} className="fixed inset-0 z-[55] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
            <motion.div role="dialog" aria-modal="true" aria-label={proj.title} initial={{ y: 30, scale: 0.97 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, opacity: 0 }} onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-line bg-card p-6 shadow-2xl sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div><p className="text-xs font-medium uppercase tracking-widest text-accent">{proj.tool}</p><h3 className="mt-1 text-2xl font-semibold">{proj.title}</h3></div>
                <button autoFocus onClick={() => setProj(null)} aria-label="Close details" className="rounded-full border border-line p-2 hover:border-accent"><X className="h-4 w-4" /></button>
              </div>
              {([["Overview", proj.summary], ["Objective", proj.objective], ["Insights", proj.insights]] as const).map(([h, t]) => (
                <div key={h} className="mt-6"><h4 className="text-sm font-semibold">{h}</h4><p className="mt-1 text-sm text-mute">{t}</p></div>
              ))}
              <div className="mt-6"><h4 className="text-sm font-semibold">Key work performed</h4><ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-mute">{proj.work.map((w) => <li key={w}>{w}</li>)}</ul></div>
              <div className="mt-6"><h4 className="text-sm font-semibold">Tools & technologies</h4><div className="mt-2 flex flex-wrap gap-2">{proj.tech.map((t) => <span key={t} className="rounded-full border border-line bg-bg px-3 py-1 text-xs text-mute">{t}</span>)}</div></div>
              <a href={proj.repo} {...ext} className={`${primary} mt-8`}><Github className="h-4 w-4" />View Repository</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
