import { activities, experience } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-line px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-widest text-primary uppercase">Experience</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl leading-tight font-semibold text-fg md:text-5xl">
          Freelance, then two internships.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Roles are labeled the way they happened. Nothing here is a full-time job I did not hold.
        </p>
        <ol className="mt-12 border-l border-line">
          {experience.map((item) => (
            <li key={item.org} className="relative pb-12 pl-8">
              <span className="absolute top-1.5 -left-1.5 size-3 rounded-full bg-primary" aria-hidden="true" />
              <p className="text-sm text-muted">{item.dates}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-fg">{item.role}</h3>
              <p className="mt-1 text-base text-fg">
                {item.org}
                <span className="ml-2 rounded-full border border-line px-2 py-0.5 text-xs text-glow">{item.kind}</span>
              </p>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{item.detail}</p>
            </li>
          ))}
        </ol>
        <h3 className="font-display text-2xl font-semibold text-fg">Competitions and activities</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Participation only. These are not awards, and a result is not claimed where the resume does not
          state one.
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {activities.map((item) => (
            <li key={item.name} className="rounded-2xl border border-line bg-surface px-4 py-4">
              <p className="font-medium text-fg">{item.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.place}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          Also took part in coding competitions on HackerRank, Unstop, and CodeChef.
        </p>
      </div>
    </section>
  );
}
