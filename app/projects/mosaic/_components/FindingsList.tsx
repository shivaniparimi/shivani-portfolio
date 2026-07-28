import Reveal from "@/components/case-study/Reveal";
import { Container } from "@/components/case-study/Container";

type Finding = {
  number: string;
  title: string;
  body: string;
  quotes?: string[];
  bullets?: string[];
};

const findings: Finding[] = [
  {
    number: "01",
    title: "Users don't want another productivity app.",
    body: "They want fewer productivity apps. Many workflows involve switching between a task manager, calendar, notes app, reminder app, and AI assistant throughout the day.",
  },
  {
    number: "02",
    title: "Capture should feel effortless.",
    body: "Users naturally think in phrases. Modern task entry should understand intent instead of requiring multiple manual inputs.",
    quotes: ["Email Haley tomorrow.", "Pick up groceries when I leave work."],
  },
  {
    number: "03",
    title: "Context matters.",
    body: "Many tasks depend on where someone is, what meeting they just attended, or what document they're referencing. Users repeatedly requested features like:",
    bullets: [
      "Photo attachments",
      "File attachments",
      "Location-based reminders",
      "Calendar awareness",
    ],
  },
  {
    number: "04",
    title: "AI should reduce friction, not replace decision-making.",
    body: "Rather than asking AI to plan an entire day, users benefit more from AI quietly handling repetitive work, such as extracting action items from meeting notes or organizing captured tasks.",
  },
];

export default function FindingsList() {
  return (
    <Container width="narrow" className="flex flex-col gap-14">
      {findings.map((f, i) => (
        <Reveal key={f.number} delay={i * 0.06}>
          <div className="min-w-0">
            <h3 className="mb-2 font-mono text-base font-semibold text-neutral-900 sm:text-lg dark:text-white">
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-neutral-400">
              {f.body}
            </p>
            {f.quotes && (
              <ul className="mt-3 space-y-1.5 border-l-2 border-black/10 pl-4 dark:border-white/10">
                {f.quotes.map((q) => (
                  <li
                    key={q}
                    className="font-mono text-sm italic text-neutral-500 dark:text-neutral-500"
                  >
                    &ldquo;{q}&rdquo;
                  </li>
                ))}
              </ul>
            )}
            {f.bullets && (
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:flex sm:flex-wrap sm:gap-2">
                {f.bullets.map((b) => (
                  <li
                    key={b}
                    className="rounded-full bg-black/5 px-3 py-1 font-mono text-sm text-neutral-700 dark:bg-white/10 dark:text-neutral-300"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      ))}
    </Container>
  );
}
