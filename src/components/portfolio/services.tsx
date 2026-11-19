import { services } from "@/data/content";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-line px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-widest text-primary uppercase">What I do</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl leading-tight font-semibold text-fg md:text-5xl">
          The work I take on.
        </h2>
        <ul className="mt-10">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="grid gap-2 border-t border-line py-6 md:grid-cols-[4.5rem_1fr_1.3fr] md:items-baseline md:gap-6"
            >
              <span className="font-display text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl font-semibold text-fg">{service.title}</h3>
              <p className="text-base leading-relaxed text-muted">{service.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
