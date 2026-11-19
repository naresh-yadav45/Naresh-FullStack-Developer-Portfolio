import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { nav, profile } from "@/data/content";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const nodes = nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.15, 0.4] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-line bg-bg/80 px-3 py-2 backdrop-blur-md">
        <a href="#home" className="flex min-h-11 items-center gap-2 pl-2">
          <span className="grid size-8 place-items-center rounded-full bg-primary font-display text-xs font-bold text-bg">
            NY
          </span>
          <span className="font-display text-sm font-semibold text-fg">Naresh Yadav</span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Page">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full px-3 text-sm text-muted",
                active === item.id && "bg-surface text-fg",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={profile.resumeHref}
            download="developer.pdf"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-bg"
          >
            <Download className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <motion.nav
          id="mobile-nav"
          aria-label="Mobile"
          initial={{ y: -8 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="mx-auto mt-2 max-w-6xl rounded-3xl border border-line bg-surface p-3 lg:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-2xl px-4 text-base text-fg"
            >
              {item.label}
            </a>
          ))}
        </motion.nav>
      ) : null}
    </header>
  );
}
