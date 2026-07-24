import BrowserWindow from "@/components/BrowserWindow";

const projects = [
  { title: "project-one" },
  { title: "project-two" },
  { title: "project-three" },
];

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 px-6 py-28">
      <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
        projects
      </h1>

      {projects.map((project) => (
        <BrowserWindow key={project.title} title={project.title}>
          <p className="text-base font-mono text-neutral-500 dark:text-neutral-400">
            placeholder
          </p>
        </BrowserWindow>
      ))}
    </main>
  );
}
