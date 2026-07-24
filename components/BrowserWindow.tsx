export default function BrowserWindow({
  title,
  children,
  maxWidthClassName = "max-w-5xl",
  tight = false,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  maxWidthClassName?: string;
  tight?: boolean;
  onClose?: () => void;
}) {
  const dotSize = tight ? "w-2 h-2" : "w-3 h-3";

  return (
    <div
      className={`w-full ${maxWidthClassName} rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-[#fffdf7] dark:bg-slate-900 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.45)] dark:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.75)]`}
    >
      <div
        className={`flex items-center justify-between bg-neutral-800 ${
          tight ? "px-3 py-2" : "px-5 py-3"
        }`}
      >
        <span
          className={`font-mono text-neutral-200 ${tight ? "text-xs" : "text-sm"}`}
        >
          {title}
        </span>
        <div className={tight ? "flex gap-1.5" : "flex gap-2"}>
          {onClose ? (
            <button
              onClick={onClose}
              aria-label="Close"
              className={`${dotSize} rounded-full bg-red-400 hover:brightness-110 transition`}
            />
          ) : (
            <span className={`${dotSize} rounded-full bg-red-400`} />
          )}
          <span className={`${dotSize} rounded-full bg-amber-400`} />
          <span className={`${dotSize} rounded-full bg-green-400`} />
        </div>
      </div>
      <div className={tight ? "p-4 sm:p-5" : "p-8 sm:p-12"}>{children}</div>
    </div>
  );
}
