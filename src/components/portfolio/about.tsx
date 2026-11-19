import { focus, profile } from "@/data/content";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface">
            <img
              src="/portrait.jpg"
              alt="Portrait of Naresh Yadav"
              width={640}
              height={800}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <p className="absolute right-4 bottom-4 rounded-full border border-line bg-bg/80 px-3 py-1 text-xs font-medium text-fg backdrop-blur-md">
            Jaipur
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">About</p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-semibold text-fg md:text-5xl">
            A student who already ships.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            I'm a B.Tech student in Electronics and Instrumentation Control Engineering at{" "}
            {profile.college}, and a full stack developer based in Jaipur. I build modern web applications
            and real-world digital products — interfaces people can use, and the backend behind them.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Alongside college I freelance on Fiverr, where I have delivered 10+ client projects, and I have
            interned as a web and full stack developer.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {focus.map((item) => (
              <li key={item} className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm text-fg">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
