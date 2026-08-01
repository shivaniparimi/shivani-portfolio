"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import IconLinks from "@/components/IconLinks";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
];

const linkClass = (isActive: boolean) =>
  `text-sm font-medium tracking-wider underline-offset-4 transition-colors ${
    isActive
      ? "text-neutral-900 dark:text-white underline"
      : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:underline"
  }`;

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex flex-wrap items-center justify-center sm:justify-between gap-x-4 gap-y-2 px-4 sm:px-10 py-3 sm:py-4">
      <div className="flex items-center gap-4 sm:gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={linkClass(pathname === item.href)}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-1.5">
        <IconLinks />
        <ThemeToggle />
      </div>
    </nav>
  );
}
