import type { ReactNode } from "react";

type IconProps = { className?: string };

function Svg({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      {children}
    </svg>
  );
}

export function IconLinkedIn({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.79-2.1 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4V8.5z" />
    </Svg>
  );
}

export function IconGitHub({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </Svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2zM17.4 6.4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
    </Svg>
  );
}

export function IconX({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M14.7 10.3 22.4 2h-1.8l-6.7 7.2L8.4 2H2l8.1 10.9L2 22h1.8l7.1-7.6L15.6 22H22l-7.3-11.7zm-2.5 2.7-.8-1.1L4.6 3.3h2.8l5.3 7 .8 1.1 6.9 9.2h-2.8l-5.4-7.6z" />
    </Svg>
  );
}

export function IconLeetCode({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M13.5 4.5 8.2 9.8a3.2 3.2 0 0 0 0 4.5l5.3 5.2 1.3-1.3-5.3-5.2a1.4 1.4 0 0 1 0-2l5.3-5.2-1.3-1.3zM16 8.2h6.2v1.8H16V8.2zm0 5.8h6.2v1.8H16V14z" />
    </Svg>
  );
}

export function IconYouTube({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.2 3.3-6.2 3.3z" />
    </Svg>
  );
}

const iconMap = {
  LinkedIn: IconLinkedIn,
  GitHub: IconGitHub,
  Instagram: IconInstagram,
  X: IconX,
  LeetCode: IconLeetCode,
  YouTube: IconYouTube,
} as const;

export function SocialIcon({ name, className }: { name: keyof typeof iconMap; className?: string }) {
  const Icon = iconMap[name];
  return <Icon className={className} />;
}
