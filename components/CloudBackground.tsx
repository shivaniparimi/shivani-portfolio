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
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-b from-amber-100 via-orange-100 to-pink-200 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950"
      aria-hidden="true"
    >
      <Stars />
    </div>
  );
}
