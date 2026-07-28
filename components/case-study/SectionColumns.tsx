import Reveal from "./Reveal";
import { Container } from "./Container";
import StatusBadge from "./StatusBadge";

export default function SectionColumns({
  id,
  title,
  status,
  children,
}: {
  id: string;
  title: string;
  status?: string;
  children?: React.ReactNode;
}) {
  return (
    <Container width="wide">
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-12 lg:gap-16">
        <div className="shrink-0 sm:w-44 lg:w-52">
          <Reveal>
            <h2
              id={id}
              className="font-mono text-lg font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-xl"
            >
              {title}
            </h2>
            {status && (
              <div className="mt-3">
                <StatusBadge label={status} />
              </div>
            )}
          </Reveal>
        </div>
        <div className="min-w-0 flex-1 space-y-6 sm:max-w-xl lg:max-w-2xl">{children}</div>
      </div>
    </Container>
  );
}
