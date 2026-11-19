import { education } from "@/data/content";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-line px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-widest text-primary uppercase">Education</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl leading-tight font-semibold text-fg md:text-5xl">
          Government Engineering College, Ajmer.
        </h2>
        <ol className="mt-12 border-l border-line">
          {education.map((item) => (
            <li key={item.title} className="relative pb-10 pl-8">
              <span className="absolute top-1.5 -left-1.5 size-3 rounded-full bg-glow" aria-hidden="true" />
              <p className="text-sm text-muted">{item.dates}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-fg">{item.title}</h3>
              <p className="mt-1 text-base text-muted">{item.place}</p>
              <p className="mt-2 text-sm text-fg">{item.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
