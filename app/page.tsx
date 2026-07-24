export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-neutral-900 dark:text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)] dark:drop-shadow-[0_2px_16px_rgba(255,255,255,0.35)]">
        <span className="inline-block overflow-hidden whitespace-nowrap align-bottom font-mono animate-type1 w-0">
          hi, i&apos;m shivani
        </span>
        <span className="inline-block overflow-hidden whitespace-nowrap align-bottom font-mono animate-type2 w-0">
          welcome to my portfolio
        </span>
        <span className="inline-block w-1 h-[0.9em] bg-neutral-900 dark:bg-white align-bottom ml-1 animate-caret" />
      </h1>
    </main>
  );
}
