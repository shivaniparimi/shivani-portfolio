import BrowserWindow from "@/components/BrowserWindow";

export default function Resume() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-28">
      <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
        resume
      </h1>

      <BrowserWindow title="resume">
        <p className="text-base font-mono text-neutral-500 dark:text-neutral-400">
          placeholder
        </p>
      </BrowserWindow>
    </main>
  );
}
