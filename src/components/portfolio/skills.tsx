import { skillGroups } from "@/data/content";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-widest text-primary uppercase">Skills</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl leading-tight font-semibold text-fg md:text-5xl">
          What I use to build.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Taken from my resume and from projects I have actually built. FastAPI and Streamlit are listed
          because the recruiter outreach system uses them.
        </p>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-xl font-semibold text-fg">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-fg transition-colors duration-200 hover:border-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
