import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ABOUT,
  CLUBS,
  HACKATHON,
  HIGHLIGHTS,
  HOBBIES,
  PROFILE,
  PROJECTS,
  SKILLS,
  TIMELINE,
} from "../_game/content";

const TITLE = "Resume";
const DESCRIPTION = `${PROFILE.role} in Tokyo. Experience, skills, projects and a hackathon win, in a plain readable page.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/resume" },
  openGraph: {
    type: "website",
    title: `${PROFILE.name} | ${TITLE}`,
    description: DESCRIPTION,
    url: "/resume",
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="panel-title mb-3 border-b-2 border-ink/30 pb-1 text-2xl uppercase tracking-wide">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Level({ level }: { level: number }) {
  return (
    <span
      className="inline-flex gap-1 align-middle"
      role="img"
      aria-label={`Level ${level} of 4`}
    >
      {[1, 2, 3, 4].map((n) => (
        <span
          key={n}
          className={`h-2 w-4 border-2 border-ink ${
            n <= level ? "bg-firefly" : "bg-transparent"
          }`}
        />
      ))}
    </span>
  );
}

export default function ResumePage() {
  const work = PROJECTS.filter((p) => p.category === "work");
  const college = PROJECTS.filter((p) => p.category === "college");
  // Timeline is stored oldest first; a resume leads with the latest.
  const experience = [...TIMELINE].reverse();

  return (
    <main className="plain-scroll">
      <div className="mx-auto max-w-3xl px-5 py-10 pb-20 font-body leading-relaxed">
        <nav className="no-print mb-8 flex flex-wrap items-center justify-between gap-3 text-sm">
          <Link
            href="/"
            className="panel panel-title px-3 py-1 transition hover:-translate-y-[2px]"
          >
            ◂ Play the game
          </Link>
          <a href="#contact" className="underline">
            Jump to contact
          </a>
        </nav>

        <header className="flex flex-col gap-5 sm:flex-row sm:items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PROFILE.portrait}
            alt={PROFILE.name}
            width={128}
            height={128}
            className="h-32 w-32 flex-none rounded-md border-2 border-ink object-cover shadow-pixel-sm"
          />
          <div>
            <h1 className="panel-title text-5xl leading-none">
              {PROFILE.name}
            </h1>
            <div className="mt-1 text-sm opacity-70">{PROFILE.nameJa}</div>
            <p className="mt-2 text-xl">{PROFILE.role}</p>
            <p className="text-sm opacity-80">{PROFILE.location}</p>
            <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <a className="underline" href={`mailto:${PROFILE.email}`}>
                {PROFILE.email}
              </a>
              <a
                className="underline"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="underline"
                href={PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
        </header>

        <Section title="About">
          <div className="space-y-3">
            {ABOUT.intro.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm">
            {ABOUT.languages.map((l) => (
              <li key={l.name}>
                <span className="panel-title text-base">{l.name}</span>{" "}
                <span className="opacity-70">· {l.note}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Experience & education">
          <ol className="space-y-5">
            {experience.map((t) => (
              <li key={`${t.year}-${t.title}`}>
                <h3 className="panel-title text-xl">{t.title}</h3>
                <div className="text-sm opacity-70">
                  {t.year}
                  {t.place ? ` · ${t.place}` : ""}
                </div>
                {t.detail && <p className="mt-1 text-sm">{t.detail}</p>}
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Hackathon: 1st place">
          <h3 className="panel-title text-xl">{HACKATHON.title}</h3>
          <div className="mb-3 text-sm opacity-70">{HACKATHON.subtitle}</div>
          <figure className="mb-4 overflow-hidden border-2 border-ink bg-white">
            <a
              href={HACKATHON.image.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the full-size diagram in a new tab"
            >
              <Image
                src={HACKATHON.image.src}
                alt={HACKATHON.image.alt}
                width={HACKATHON.image.width}
                height={HACKATHON.image.height}
                sizes="(min-width: 768px) 700px, 100vw"
                className="h-auto w-full"
              />
            </a>
            <figcaption className="border-t-2 border-ink bg-sky px-2 py-1 text-xs">
              {HACKATHON.image.caption} · click to enlarge
            </figcaption>
          </figure>
          <div className="space-y-4">
            {HACKATHON.sections.map((sec) => (
              <div key={sec.label}>
                <h4 className="panel-title text-lg">{sec.label}</h4>
                {sec.body && <p className="mt-1 text-sm">{sec.body}</p>}
                {sec.items && (
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                    {sec.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <p className="mt-3 flex flex-wrap gap-1">
            {HACKATHON.tech.map((t) => (
              <span key={t} className="pill">
                {t}
              </span>
            ))}
          </p>
        </Section>

        <Section title="Skills">
          <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            {SKILLS.tech.map((s) => (
              <li key={s.name} className="flex items-center justify-between gap-3">
                <span>{s.name}</span>
                <Level level={s.level} />
              </li>
            ))}
          </ul>
          <h3 className="panel-title mb-1 mt-5 text-lg">Certifications</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            {SKILLS.certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Section>

        <Section title="Work projects">
          <ProjectList projects={work} />
        </Section>

        <Section title="College projects">
          <ProjectList projects={college} />
        </Section>

        <Section title="Highlights">
          <ul className="space-y-1 text-sm">
            {HIGHLIGHTS.map((h, i) => (
              <li key={i}>
                <span className="pill">{h.year}</span> {h.text}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Clubs & interests">
          <ul className="space-y-1 text-sm">
            {[...CLUBS.now, ...CLUBS.school].map((c) => (
              <li key={c.name}>
                <span className="panel-title text-base">{c.name}</span>{" "}
                <span className="opacity-70">· {c.note}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm">{HOBBIES.join(", ")}.</p>
        </Section>

        <Section title="Contact">
          <div id="contact" className="space-y-1">
            <p>
              Best way to reach me is email:{" "}
              <a className="underline" href={`mailto:${PROFILE.email}`}>
                {PROFILE.email}
              </a>
            </p>
            <p className="text-sm">
              <a
                className="underline"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              ·{" "}
              <a
                className="underline"
                href={PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}

function ProjectList({ projects }: { projects: (typeof PROJECTS)[number][] }) {
  return (
    <ul className="space-y-4">
      {projects.map((p) => (
        <li key={p.title}>
          <h3 className="panel-title text-xl">{p.title}</h3>
          <p className="text-sm">{p.blurb}</p>
          <p className="mt-1 flex flex-wrap gap-1">
            {p.tech.map((t) => (
              <span key={t} className="pill">
                {t}
              </span>
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
}
