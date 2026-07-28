import Image from "next/image";

const logos = {
  "Things 3": { src: "/logos/things3.jpg", alt: "Things 3 app icon" },
  Todoist: { src: "/logos/todoist.jpg", alt: "Todoist app icon" },
  TickTick: { src: "/logos/ticktick.jpg", alt: "TickTick app icon" },
  "Apple Reminders": { src: "/logos/reminders.jpg", alt: "Apple Reminders app icon" },
  Motion: { src: "/logos/motion.jpg", alt: "Motion app icon" },
  Notion: { src: "/logos/notion.jpg", alt: "Notion app icon" },
} as const;

export type AppIconName = keyof typeof logos;

export default function AppIcon({ name }: { name: AppIconName }) {
  const { src, alt } = logos[name];
  return (
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      className="h-10 w-10 rounded-[10px] shadow-sm"
    />
  );
}
