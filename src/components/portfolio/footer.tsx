import { profile } from "@/data/content";
import { SocialRow } from "@/components/portfolio/contact";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl font-semibold text-fg">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.title} · {profile.location}
          </p>
        </div>
        <SocialRow />
      </div>
    </footer>
  );
}
