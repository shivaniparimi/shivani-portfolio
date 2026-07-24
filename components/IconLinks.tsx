import { links } from "@/lib/links";

function GithubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="22" height="22" rx="4" />
      <circle cx="7.5" cy="7.7" r="1.7" fill="white" />
      <rect x="6.1" y="10.4" width="2.8" height="7.6" rx="0.4" fill="white" />
      <path
        fill="white"
        d="M11 10.4h2.7v1.2c.6-.9 1.6-1.4 2.8-1.4 2.1 0 3.5 1.4 3.5 4v3.8h-2.8v-3.4c0-1.1-.5-1.8-1.5-1.8-.8 0-1.4.5-1.6 1.2-.1.2-.1.4-.1.7v3.3H11z"
      />
    </svg>
  );
}

function MailIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.15l-10 6.4-10-6.4V5Z" />
      <path d="M2 8.55V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.55l-10 6.4-10-6.4Z" />
    </svg>
  );
}

function ResumeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7H6Z" />
      <rect x="7" y="13" width="8" height="1.6" rx="0.8" fill="white" />
      <rect x="7" y="16" width="8" height="1.6" rx="0.8" fill="white" />
      <rect x="7" y="19" width="5" height="1.6" rx="0.8" fill="white" />
    </svg>
  );
}

function SpotifyIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0Zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.68-6.3-2.1-10.44-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.58 1.32.42.18.48.66.24 1.02Zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.38-1.32 9.78-.66 13.5 1.56.36.18.54.78.24 1.26Zm.12-3.36C15.24 8.4 8.88 8.16 5.28 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.14-1.26 11.16-1.02 15.36 1.44.54.3.72 1.02.36 1.56-.3.48-1.02.66-1.56.36Z" />
    </svg>
  );
}

const iconLinks = [
  {
    href: links.github,
    label: "GitHub",
    Icon: GithubIcon,
    colorClass: "text-[#181717] dark:text-neutral-200",
  },
  {
    href: links.linkedin,
    label: "LinkedIn",
    Icon: LinkedinIcon,
    colorClass: "text-[#0A66C2]",
  },
  {
    href: links.spotify,
    label: "Spotify",
    Icon: SpotifyIcon,
    colorClass: "text-[#1DB954]",
  },
  {
    href: links.resume,
    label: "Resume",
    Icon: ResumeIcon,
    colorClass: "text-[#DC2626]",
  },
  {
    href: `mailto:${links.email}`,
    label: "Mail",
    Icon: MailIcon,
    colorClass: "text-[#EC4899]",
  },
];

export default function IconLinks() {
  return (
    <div className="flex gap-6">
      {iconLinks.map(({ href, label, Icon, colorClass }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={label}
          className={`transition-transform hover:scale-110 ${colorClass}`}
        >
          <Icon size={34} />
        </a>
      ))}
    </div>
  );
}
