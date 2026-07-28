export default function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-neutral-900/15 pl-6 dark:border-white/15 sm:pl-8">
      <p className="text-base font-medium leading-snug text-neutral-800 sm:text-lg dark:text-neutral-200">
        {children}
      </p>
    </blockquote>
  );
}
