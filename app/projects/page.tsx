import Image from "next/image";
import BrowserWindow from "@/components/BrowserWindow";

const projects = [
  {
    title: "Pantry Pal",
    image: "/pantrypal-screenshot.png",
    description:
      "An AI recipe generator for whatever's already in your fridge. Type your ingredients or snap a photo and get recipes tailored to what you have on hand. Filter by preferences, save favorites, and ask the built-in AI \"chef\" chatbot for help.",
    stack: "React · TypeScript · Vite · Express · Firebase · Gemini",
    github: "https://github.com/shivaniparimi/PantryPal",
    live: "https://pantry-pal-navy.vercel.app",
  },
  {
    title: "Price Tracker",
    image: "/pricetracker-screenshot.png",
    description:
      "A price monitoring tool for online shopping. Submit a product URL and it finds the same item across competing retailers, checks prices daily, and emails you when one drops.",
    stack: "FastAPI · Python · SQLite · Playwright · APScheduler",
    github: "https://github.com/shivaniparimi/PriceTracker",
  },
  { title: "project-three" },
];

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 px-6 py-28">
      <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
        projects
      </h1>

      {projects.map((project) => (
        <BrowserWindow key={project.title} title={project.title} draggable={false}>
          {project.description ? (
            <div className="space-y-3 text-left font-mono">
              {project.image && (
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(min-width: 1024px) 900px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              )}
              <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                {project.title}
              </p>
              <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                {project.description}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {project.stack}
              </p>
              <div className="flex gap-4 pt-1 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 underline underline-offset-4 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white"
                >
                  github ↗
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-800 underline underline-offset-4 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white"
                  >
                    live demo ↗
                  </a>
                )}
              </div>
            </div>
          ) : (
            <p className="text-base font-mono text-neutral-500 dark:text-neutral-400">
              placeholder
            </p>
          )}
        </BrowserWindow>
      ))}
    </main>
  );
}
