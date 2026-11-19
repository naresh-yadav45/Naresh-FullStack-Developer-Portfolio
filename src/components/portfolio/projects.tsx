import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { projects, type Project } from "@/data/content";

function Visual({ id }: { id: string }) {
  if (id === "somani-plywood") {
    return (
      <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
        <rect width="320" height="200" fill="var(--color-bg)" />
        <rect x="36" y="48" width="200" height="28" rx="6" fill="var(--color-surface-2)" />
        <rect x="52" y="84" width="200" height="28" rx="6" fill="var(--color-primary)" opacity="0.85" />
        <rect x="68" y="120" width="200" height="28" rx="6" fill="var(--color-glow)" opacity="0.7" />
      </svg>
    );
  }
  if (id === "nedtrex") {
    return (
      <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
        <rect width="320" height="200" fill="var(--color-bg)" />
        <path d="M40 100 H280" stroke="var(--color-line)" strokeWidth="2" />
        {[40, 100, 160, 220, 280].map((x, i) => (
          <g key={x}>
            <circle cx={x} cy="100" r={i === 2 ? 16 : 10} fill={i === 2 ? "var(--color-glow)" : "var(--color-primary)"} />
          </g>
        ))}
      </svg>
    );
  }
  if (id === "recruiter-outreach") {
    return (
      <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
        <rect width="320" height="200" fill="var(--color-bg)" />
        {[
          [48, 120, 28, 48],
          [96, 88, 28, 80],
          [144, 64, 28, 104],
          [192, 96, 28, 72],
          [240, 48, 28, 120],
        ].map(([x, y, w, h]) => (
          <rect key={x} x={x} y={y} width={w} height={h} rx="6" fill="var(--color-primary)" />
        ))}
        <circle cx="250" cy="40" r="8" fill="var(--color-glow)" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
      <rect width="320" height="200" fill="var(--color-bg)" />
      <path
        d="M70 150 L160 40 L250 150 Z"
        fill="none"
        stroke="var(--color-glow)"
        strokeWidth="2"
      />
      <path d="M100 150 L160 78 L220 150" fill="none" stroke="var(--color-primary)" strokeWidth="2" />
      <path d="M70 150 H250" stroke="var(--color-line)" strokeWidth="2" />
      <circle cx="160" cy="78" r="5" fill="var(--color-glow)" />
      <circle cx="124" cy="118" r="4" fill="var(--color-primary)" />
      <circle cx="196" cy="118" r="4" fill="var(--color-primary)" />
    </svg>
  );
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Dialog.Root open={project !== null} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/80" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 max-h-[85svh] w-[min(36rem,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-line bg-surface p-6 pr-14 text-fg">
          {project ? (
            <>
              <p className="text-xs font-semibold tracking-widest text-primary uppercase">{project.kind}</p>
              <Dialog.Title className="mt-2 font-display text-3xl font-semibold">{project.title}</Dialog.Title>
              <Dialog.Description className="mt-3 text-base leading-relaxed text-muted">
                {project.summary}
              </Dialog.Description>
              <h3 className="mt-6 font-display text-lg font-semibold">Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className="mt-6 font-display text-lg font-semibold">My contribution</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.contribution}</p>
              <h3 className="mt-6 font-display text-lg font-semibold">Stack</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li key={item} className="rounded-full border border-line px-3 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
              {project.note ? <p className="mt-6 text-sm leading-relaxed text-fg">{project.note}</p> : null}
              <p className="mt-6 text-sm leading-relaxed text-muted">
                A public live demo and GitHub repository are not linked for this project yet.
              </p>
            </>
          ) : null}
          <Dialog.Close className="absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-full border border-line">
            <span className="sr-only">Close</span>
            <X className="size-4" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = projects.find((project) => project.id === openId) ?? null;

  return (
    <section id="projects" className="scroll-mt-24 border-t border-line px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-widest text-primary uppercase">Projects</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl leading-tight font-semibold text-fg md:text-5xl">
          Four builds, told straight.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Client work, an internship platform, a recruiter tool, and a competition project.
        </p>
        <div className="mt-12">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="grid items-center gap-8 border-t border-line py-10 lg:grid-cols-2"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <div className="overflow-hidden rounded-3xl border border-line bg-bg">
                  <div className="h-52">
                    <Visual id={project.id} />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-glow">{project.kind}</p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-fg">{project.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{project.summary}</p>
                <p className="mt-3 text-sm leading-relaxed text-fg">{project.contribution}</p>
                <button
                  type="button"
                  onClick={() => setOpenId(project.id)}
                  className="mt-5 inline-flex min-h-11 items-center rounded-full border border-line px-5 text-sm font-semibold text-fg"
                >
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <ProjectDialog project={active} onClose={() => setOpenId(null)} />
    </section>
  );
}
