function Cloud({
  className,
  animationClass,
  delay,
}: {
  className: string;
  animationClass: string;
  delay: string;
}) {
  return (
    <svg
      viewBox="0 -8 220 118"
      className={`absolute ${className} ${animationClass}`}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <path
        d="M52 88c-18 0-32-13-32-30 0-15 11-27 26-29 3-19 20-32 40-32 22 0 40 15 43 35 15 2 26 14 26 29 0 17-15 30-33 30H52z"
        className="fill-white dark:fill-slate-400 stroke-blue-300 dark:stroke-slate-500"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function buildMoundPath({
  bumpCount,
  vbWidth,
  vbHeight,
  baseY,
  minHeight,
  maxHeight,
  phase,
}: {
  bumpCount: number;
  vbWidth: number;
  vbHeight: number;
  baseY: number;
  minHeight: number;
  maxHeight: number;
  phase: number;
}) {
  const bumpWidth = vbWidth / bumpCount;
  const curves: string[] = [];
  for (let i = 0; i < bumpCount; i++) {
    const leftX = i * bumpWidth;
    const midX = leftX + bumpWidth / 2;
    const rightX = leftX + bumpWidth;
    const tipY =
      baseY -
      (minHeight + (maxHeight - minHeight) * Math.abs(Math.sin(i * 0.8 + phase)));
    curves.push(`Q${midX},${tipY} ${rightX},${baseY}`);
  }
  return `M0,${vbHeight} L0,${baseY} ${curves.join(" ")} L${vbWidth},${vbHeight} Z`;
}

function Grass() {
  const vbWidth = 480;
  const vbHeight = 40;

  const basePath = buildMoundPath({
    bumpCount: 6,
    vbWidth,
    vbHeight,
    baseY: 20,
    minHeight: 4,
    maxHeight: 8,
    phase: 0,
  });

  return (
    <svg
      viewBox={`0 0 ${vbWidth} ${vbHeight}`}
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 w-full h-20 sm:h-28"
      aria-hidden="true"
    >
      <path d={basePath} fill="#166534" />
    </svg>
  );
}

function Stars() {
  const count = 50;
  const stars = Array.from({ length: count }, (_, i) => {
    const left = (Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1) * 100;
    const top = (Math.abs(Math.sin(i * 78.233) * 12543.123) % 1) * 100;
    const size = 1 + (i % 3);
    const duration = 2 + (i % 5) * 0.5;
    const delay = (i % 10) * 0.3;
    return { left, top, size, duration, delay };
  });

  return (
    <div className="hidden dark:block absolute inset-0">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function CloudBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900"
      aria-hidden="true"
    >
      <Stars />
      <Cloud
        className="top-[3%] w-64 opacity-100"
        animationClass="animate-cloud-1"
        delay="-2s"
      />
      <Cloud
        className="top-[28%] w-80 opacity-90"
        animationClass="animate-cloud-2"
        delay="-16s"
      />
      <Cloud
        className="top-[76%] w-48 opacity-100"
        animationClass="animate-cloud-3"
        delay="-9s"
      />
      <Grass />
    </div>
  );
}
