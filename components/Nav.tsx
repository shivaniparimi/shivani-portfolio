"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-8 py-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium tracking-wider underline-offset-4 transition-colors ${
              isActive
                ? "text-neutral-900 dark:text-white underline"
                : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:underline"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
