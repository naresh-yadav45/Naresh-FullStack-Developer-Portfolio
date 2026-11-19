import { Component, useEffect, useRef, useState, type ComponentType, type ReactNode } from "react";
import { ArrowDownRight, Download, Mail } from "lucide-react";
import gsap from "gsap";
import { profile } from "@/data/content";

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

function HeroFallback() {
  const chips = [
    { label: "React", className: "left-2 top-8 float-y" },
    { label: "Node", className: "right-2 top-16 float-y-delay" },
    { label: "TypeScript", className: "bottom-10 left-6 float-y-delay" },
    { label: "MongoDB", className: "right-6 bottom-16 float-y" },
  ];
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <div className="stage-glow absolute inset-0" />
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-line" />
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30" />
      <div className="absolute top-1/2 left-1/2 w-64 -translate-x-1/2 -translate-y-[46%] [transform:translate(-50%,-46%)_rotateX(14deg)_rotateY(-24deg)_rotateZ(6deg)]">
        <div className="rounded-2xl border border-line bg-surface p-3">
          <div className="rounded-xl bg-bg p-4">
            <div className="mb-4 h-2 w-14 rounded-full bg-glow" />
            <div className="space-y-2">
              <div className="h-2 w-4/5 rounded-full bg-primary" />
              <div className="h-2 w-3/5 rounded-full bg-fg/25" />
              <div className="h-2 w-2/3 rounded-full bg-accent" />
              <div className="h-2 w-1/2 rounded-full bg-fg/20" />
            </div>
          </div>
        </div>
        <div className="mx-auto h-2 w-48 rounded-b-xl bg-surface-2" />
      </div>
      {chips.map((chip) => (
        <span
          key={chip.label}
          className={`absolute rounded-full border border-glow/50 bg-surface px-3 py-1 text-xs font-medium text-fg ${chip.className}`}
        >
          {chip.label}
        </span>
      ))}
    </div>
  );
}

class SceneErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return this.props.fallback;
    return this.props.children;
  }
}

export function HeroVisual() {
  const [Scene, setScene] = useState<ComponentType | null>(null);

  useEffect(() => {
    const narrow = window.matchMedia("(max-width: 767px)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (narrow || reduce || !hasWebGL()) return;
    let cancelled = false;
    import("./hero-scene")
      .then((mod) => {
        if (!cancelled) setScene(() => mod.HeroScene);
      })
      .catch(() => {
        if (!cancelled) setScene(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!Scene) return <HeroFallback />;
  return (
    <SceneErrorBoundary fallback={<HeroFallback />}>
      <Scene />
    </SceneErrorBoundary>
  );
}

export function Hero() {
  const rule = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = rule.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tween = gsap.fromTo(
      el,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.9, ease: "power3.out", transformOrigin: "left center" },
    );
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="mx-auto grid min-h-svh max-w-6xl items-center gap-10 px-6 pt-28 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            Jaipur · Full stack developer
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight font-semibold text-fg sm:text-6xl">
            Hi, I'm Naresh Yadav.
          </h1>
          <p className="mt-5 max-w-xl font-display text-xl text-fg sm:text-2xl">
            <span className="bg-gradient-to-r from-primary to-glow bg-clip-text text-transparent">
              Full Stack Developer | Crafting Digital Experiences.
            </span>
          </p>
          <span ref={rule} className="mt-5 block h-px w-40 origin-left bg-primary" />
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I transform ideas into meaningful digital experiences through modern technologies, creative
            development and problem-solving.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-bg"
            >
              Explore My Work
              <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={profile.resumeHref}
              download="developer.pdf"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-5 text-sm font-semibold text-fg"
            >
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-semibold text-fg"
            >
              <Mail className="size-4" aria-hidden="true" />
              Let's Connect
            </a>
          </div>
          <p className="mt-8 text-sm text-muted">
            {profile.degree}
            <span aria-hidden="true"> · </span>
            {profile.college}
          </p>
        </div>
        <div className="relative h-80 sm:h-[28rem] lg:h-[34rem]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
