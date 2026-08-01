import Link from "next/link";
import BrowserWindow from "@/components/BrowserWindow";
import ProjectScreenshot from "@/components/ProjectScreenshot";

type Project = {
  title: string;
  image?: string;
  description?: string;
  why?: string;
  stack?: string;
  github?: string;
  live?: string;
  caseStudy?: string;
};

const projects: Project[] = [
  {
    title: "Mosaic",
    description:
      "A native iOS productivity app that brings together the essential pieces of modern productivity into one effortless experience.",
    stack: "SwiftUI · iOS",
    github: "https://github.com/shivaniparimi/Mosaic",
    caseStudy: "/projects/mosaic",
  },
  {
    title: "Pantry Pal",
    image: "/pantrypal-screenshot.png",
    description:
      "An AI recipe generator for whatever's already in your fridge. Type your ingredients or snap a photo and get recipes tailored to what you have on hand. Filter by preferences, save favorites, and ask the built-in AI \"chef\" chatbot for help.",
    why: "As a college student, I often come home with no idea how to use up my random ingredients and leftovers. I wanted to create a way to limit food waste and make meals easily.",
    stack: "React · TypeScript · Vite · Express · Firebase · Gemini",
    github: "https://github.com/shivaniparimi/PantryPal",
    live: "https://pantry-pal-navy.vercel.app",
  },
  {
    title: "Price Tracker",
    image: "/pricetracker-screenshot.png",
    description:
      "A price monitoring tool for online shopping. Submit a product URL and it finds the same item across competing retailers, checks prices daily, and emails you when one drops.",
    why: "I always miss the window of buying that pair of jeans that goes on sale. I built this to make it easier to find where a product is sold across different retailers and compare prices so that I never miss a sale again.",
    stack: "FastAPI · Python · SQLite · Playwright · APScheduler",
    github: "https://github.com/shivaniparimi/PriceTracker",
  },
];

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-4 py-28">
      <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
        projects
      </h1>

      <div className="flex w-full max-w-[608px] flex-col gap-10">
        {projects.map((project) => (
          <div key={project.title} className="flex w-full justify-center">
            <BrowserWindow
              title={project.title}
              draggable={false}
              maxWidthClassName="max-w-[608px]"
            >
              {project.description ? (
                <div className="space-y-2.5 text-left font-mono">
                  {project.image && (
                    <ProjectScreenshot
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      why={project.why}
                      sizes="(min-width: 640px) 608px, 100vw"
                    />
                  )}
                  <p className="text-base font-semibold text-neutral-900 dark:text-white">
                    {project.title}
                  </p>
                  <p className="text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {project.description}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {project.stack}
                  </p>
                  <div className="flex gap-4 pt-1 text-sm">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-800 underline underline-offset-4 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white"
                      >
                        github ↗
                      </a>
                    )}
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
                    {project.caseStudy && (
                      <Link
                        href={project.caseStudy}
                        className="text-neutral-800 underline underline-offset-4 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white"
                      >
                        case study ↗
                      </Link>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-base font-mono text-neutral-500 dark:text-neutral-400">
                  placeholder
                </p>
              )}
            </BrowserWindow>
          </div>
        ))}
      </div>
    </main>
  );
}
