import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Smartphone,
  MessageSquareText,
  NotebookPen,
  Paperclip,
  Image as ImageIcon,
  Inbox,
  Layers,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/case-study/Container";
import Reveal from "@/components/case-study/Reveal";
import SectionColumns from "@/components/case-study/SectionColumns";
import PullQuote from "@/components/case-study/PullQuote";
import { PhonePlaceholder, DiagramPlaceholder } from "@/components/case-study/MediaPlaceholder";

import CompetitorGrid from "./_components/CompetitorGrid";
import FindingsList from "./_components/FindingsList";
import FeatureList from "./_components/FeatureList";

export const metadata: Metadata = {
  title: "mosaic — shivani parimi",
  description: "Bringing the pieces of productivity together. A case study on Mosaic, an iOS productivity app.",
};

export default function MosaicCaseStudy() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="pb-20 pt-28 sm:pb-28 sm:pt-36">
        <Container width="wide">
          <div className="flex flex-col items-center gap-12 sm:flex-row sm:gap-16">
            <div className="min-w-0 flex-1">
              <Reveal>
                <Link
                  href="/projects"
                  className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white"
                >
                  <ArrowLeft size={14} aria-hidden="true" /> projects
                </Link>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">Mosaic</h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
                  Bringing the pieces of productivity together.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["iOS", "SwiftUI"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black/5 px-3 py-1 font-mono text-xs text-neutral-600 dark:bg-white/10 dark:text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="flex min-w-0 flex-1 justify-center">
              <Reveal delay={0.15} className="w-full max-w-sm">
                <DiagramPlaceholder
                  icon={ImageIcon}
                  note="icon"
                  aspect="square"
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 01 — Context */}
      <section
        id="context"
        aria-labelledby="context-heading"
        className="border-t border-black/5 py-20 dark:border-white/5 sm:py-28"
      >
        <SectionColumns id="context-heading" title="Context">
          <Reveal>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base dark:text-neutral-300">
              Modern productivity has become fragmented. While apps for task management,
              planning, organization, and automation each excel in different areas, many users
              rely on several tools throughout a typical day to manage their personal and work
              life. Some prioritize simplicity and speed, while others focus on flexibility,
              customization, or automation. However, this often forces users to choose between a
              focused experience and the capabilities needed to support their entire workflow.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base dark:text-neutral-300">
              This project became{" "}
              <strong className="font-semibold text-neutral-900 dark:text-white">Mosaic</strong>,
              an exploration into reducing context switching by bringing together the essential
              pieces of modern productivity into one cohesive experience.
            </p>
          </Reveal>
        </SectionColumns>
      </section>

      {/* 02 — Competitor Analysis */}
      <section
        id="competitor-analysis"
        aria-labelledby="competitor-analysis-heading"
        className="border-t border-black/5 py-20 dark:border-white/5 sm:py-28"
      >
        <SectionColumns id="competitor-analysis-heading" title="Competitor Analysis">
          <Reveal>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base dark:text-neutral-300">
              Existing productivity tools tend to optimize one stage of the workflow
              exceptionally well while neglecting others. To better understand the landscape, I
              compared the strengths and trade-offs of several widely used applications.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <PullQuote>
              The challenge was identifying which features provide meaningful value to users and integrating them in a way that improves the workflow without adding unnecessary complexity.
            </PullQuote>
          </Reveal>
        </SectionColumns>
        <Container width="wide" className="mt-14">
          <CompetitorGrid />
        </Container>
        <Container width="narrow" className="mt-10">
          <Reveal>
            <div className="rounded-2xl border border-amber-600/20 bg-amber-500/5 p-6 dark:border-amber-400/20 dark:bg-amber-400/5 sm:p-8">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400">
                Key Insight
              </p>
              <p className="text-sm leading-relaxed text-neutral-800 sm:text-base dark:text-neutral-200">
                Every application solves a different productivity problem well, but no single
                product combines fast capture, thoughtful organization, contextual reminders,
                and intelligent assistance while maintaining a clean, minimal experience.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 03 — User Research */}
      <section
        id="user-research"
        aria-labelledby="user-research-heading"
        className="border-t border-black/5 py-20 dark:border-white/5 sm:py-28"
      >
        <SectionColumns id="user-research-heading" title="User Research">
          <Reveal>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base dark:text-neutral-300">
              To understand how people manage their productivity workflows, I analyzed 200+ user
              discussions across popular productivity platforms. Rather than focusing on isolated
              feature requests, I identified recurring patterns in how users capture tasks,
              organize information, and manage their daily workflows.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-black/5 bg-white/50 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
                Research Sources
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "200+ user discussions analyzed",
                  "App Store reviews across productivity applications",
                  "Reddit productivity communities",
                  "YouTube productivity reviews and comparisons",
                ].map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-black/5 px-3 py-1.5 font-mono text-sm text-neutral-700 dark:bg-white/10 dark:text-neutral-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="rounded-2xl border border-black/5 bg-white/50 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
              <p className="mb-5 font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
                Key Research Findings
              </p>
              <div className="space-y-5">
                {[
                  {
                    stat: "45%",
                    label: "Task Capture",
                    description:
                      "Users struggle with quickly capturing ideas and turning them into actionable tasks.",
                    icon: Inbox,
                    color: "text-blue-600 dark:text-blue-400",
                    bg: "bg-blue-500/10",
                  },
                  {
                    stat: "32%",
                    label: "Fragmented Workflows",
                    description:
                      "Users rely on multiple applications to manage tasks, notes, calendars, and reminders.",
                    icon: Layers,
                    color: "text-purple-600 dark:text-purple-400",
                    bg: "bg-purple-500/10",
                  },
                  {
                    stat: "27%",
                    label: "Contextual Organization",
                    description:
                      "Users want tasks connected to relevant context such as deadlines, locations, and attachments.",
                    icon: MapPin,
                    color: "text-amber-600 dark:text-amber-400",
                    bg: "bg-amber-500/10",
                  },
                  {
                    stat: "21%",
                    label: "AI Assistance",
                    description:
                      "Users are interested in automation that reduces repetitive work while keeping them in control.",
                    icon: Sparkles,
                    color: "text-teal-600 dark:text-teal-400",
                    bg: "bg-teal-500/10",
                  },
                ].map((f) => (
                  <div key={f.label} className="flex gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${f.bg}`}
                    >
                      <f.icon size={18} strokeWidth={2} className={f.color} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className={`font-mono text-base font-semibold ${f.color}`}>
                          {f.stat}
                        </span>
                        <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                          {f.label}
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {f.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </SectionColumns>
      </section>

      {/* 04 — Findings */}
      <section
        id="findings"
        aria-labelledby="findings-heading"
        className="border-t border-black/5 py-20 dark:border-white/5 sm:py-28"
      >
        <SectionColumns id="findings-heading" title="Findings">
          <Reveal>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base dark:text-neutral-300">
              After synthesizing community feedback, four themes consistently emerged.
            </p>
          </Reveal>
        </SectionColumns>
        <div className="mt-14">
          <FindingsList />
        </div>
      </section>

      {/* 05 — Product */}
      <section
        id="product"
        aria-labelledby="product-heading"
        className="border-t border-black/5 py-20 dark:border-white/5 sm:py-28"
      >
        <SectionColumns id="product-heading" title="Product">
          <Reveal>
            <PullQuote>
              Inspired by Things 3’s simplicity, Mosaic brings modern productivity features into
              one cohesive experience.
            </PullQuote>
          </Reveal>
        </SectionColumns>
        <Container width="wide" className="mt-14">
          <FeatureList />
        </Container>
        <Container width="wide" className="mt-16">
          <div className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:gap-12 sm:overflow-visible sm:pb-0">
            <Reveal className="shrink-0 snap-center">
              <PhonePlaceholder icon={MessageSquareText} caption="Natural language capture" />
            </Reveal>
            <Reveal delay={0.08} className="shrink-0 snap-center">
              <PhonePlaceholder icon={NotebookPen} caption="AI meeting notes" />
            </Reveal>
            <Reveal delay={0.16} className="shrink-0 snap-center">
              <PhonePlaceholder icon={Paperclip} caption="Attachments" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 06 — Final Product */}
      <section
        id="final-product"
        aria-labelledby="final-product-heading"
        className="border-t border-black/5 py-20 dark:border-white/5 sm:py-32"
      >
        <SectionColumns id="final-product-heading" title="Final Product" />
        <Reveal delay={0.1} className="mt-14 flex justify-center">
          <PhonePlaceholder icon={Smartphone} caption="Mosaic — product demo" size="hero" />
        </Reveal>
        <Container width="narrow" className="mt-16 text-center">
          <Reveal delay={0.15}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 font-mono text-sm text-neutral-600 underline underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              ← back to projects
            </Link>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
