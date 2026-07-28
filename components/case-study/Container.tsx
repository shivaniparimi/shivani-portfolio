export function Container({
  children,
  className = "",
  width = "wide",
}: {
  children: React.ReactNode;
  className?: string;
  width?: "wide" | "narrow";
}) {
  const maxW = width === "narrow" ? "max-w-[42rem]" : "max-w-6xl";
  return (
    <div className={`mx-auto w-full ${maxW} px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
