"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { SectionKey } from "./world";
import { SECTION_TITLE } from "./world";
import {
  ABOUT,
  CLUBS,
  HACKATHON,
  HIGHLIGHTS,
  HOBBIES,
  PHOTOS,
  PROFILE,
  PROJECTS,
  SKILLS,
  TIMELINE,
} from "./content";

type Props = {
  section: SectionKey;
  onClose: () => void;
};

export function Dialog({ section, onClose }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        key={section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 p-4 backdrop-blur-[2px]"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 20, scale: 0.97 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 10, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="panel max-h-[85vh] w-full max-w-3xl overflow-y-auto p-6 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="panel-title text-3xl leading-none">
                {SECTION_TITLE[section]}
              </h2>
              {section === "about" && (
                <div className="mt-1 text-sm opacity-70">
                  {PROFILE.tagline} · {PROFILE.location}
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="panel panel-title px-3 py-1 text-sm"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {section === "about" && <AboutContent />}
          {section === "journey" && <JourneyContent />}
          {section === "skills" && <SkillsContent />}
          {section === "projects" && <ProjectsContent />}
          {section === "hobbies" && <HobbiesContent />}
          {section === "contact" && <ContactContent />}

          <div className="mt-6 text-xs opacity-60">
            Press <span className="pill">Esc</span> or click outside to close
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ---------------- About ----------------

function AboutContent() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <img
          src={PROFILE.portrait}
          alt={PROFILE.name}
          className="h-32 w-32 flex-none rounded-md border-2 border-ink object-cover shadow-pixel-sm"
        />
        <div className="space-y-3 leading-relaxed">
          {ABOUT.intro.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>

      <div>
        <SubHeading>Languages</SubHeading>
        <ul className="space-y-1 text-sm">
          {ABOUT.languages.map((l) => (
            <li key={l.name}>
              <span className="panel-title">{l.name}</span>
              <span className="opacity-70"> · {l.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---------------- Journey ----------------

function JourneyContent() {
  return (
    <div className="space-y-6">
      <div>
        <SubHeading>Timeline</SubHeading>
        <ol className="space-y-3 border-l-2 border-ink/40 pl-4">
          {TIMELINE.map((t, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[22px] top-1 h-3 w-3 rounded-full border-2 border-ink bg-firefly" />
              <div className="panel-title">{t.title}</div>
              <div className="text-xs opacity-70">
                {t.year}
                {t.place ? ` · ${t.place}` : ""}
              </div>
              {t.detail && (
                <p className="mt-1 text-sm leading-relaxed">{t.detail}</p>
              )}
            </li>
          ))}
        </ol>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <SubHeading>Clubs: now</SubHeading>
          <ul className="space-y-1 text-sm">
            {CLUBS.now.map((c) => (
              <li key={c.name}>
                <span className="panel-title">{c.name}</span>
                <span className="opacity-70"> · {c.note}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SubHeading>Clubs: school & college</SubHeading>
          <ul className="space-y-1 text-sm">
            {CLUBS.school.map((c) => (
              <li key={c.name}>
                <span className="panel-title">{c.name}</span>
                <span className="opacity-70"> · {c.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <SubHeading>Highlights</SubHeading>
        <ul className="space-y-1 text-sm">
          {HIGHLIGHTS.map((h, i) => (
            <li key={i}>
              <span className="pill">{h.year}</span>{" "}
              <span>{h.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---------------- Skills ----------------

function SkillsContent() {
  return (
    <div className="space-y-6">
      <div>
        <SubHeading>Tech : A jack of all trades is a master of none, but oftentimes better than a master of one.</SubHeading>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {SKILLS.tech.map((s) => (
            <div key={s.name} className="panel px-3 py-2">
              <div className="panel-title text-base">{s.name}</div>
              <div className="mt-1 flex gap-1">
                {[1, 2, 3, 4].map((n) => (
                  <span
                    key={n}
                    className={`h-2 w-6 border-2 border-ink ${
                      n <= s.level ? "bg-firefly" : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SubHeading>Certifications</SubHeading>
        <ul className="space-y-1 text-sm">
          {SKILLS.certifications.map((c) => (
            <li key={c}>
              <span className="pill">✓</span> {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---------------- Projects ----------------

function ProjectsContent() {
  const work = PROJECTS.filter((p) => p.category === "work");
  const college = PROJECTS.filter((p) => p.category === "college");
  return (
    <div className="space-y-6">
      <div>
        <SubHeading>Work</SubHeading>
        <div className="space-y-3">
          {work.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
      <HackathonDetail />
      <div>
        <SubHeading>College · hardware & tinkering</SubHeading>
        <div className="space-y-3">
          {college.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HackathonDetail() {
  return (
    <div>
      <SubHeading>Hackathon deep dive</SubHeading>
      <div className="panel space-y-4 px-4 py-3">
        <div>
          <h3 className="panel-title text-xl">{HACKATHON.title}</h3>
          <div className="text-xs opacity-70">{HACKATHON.subtitle}</div>
        </div>
        {HACKATHON.sections.map((sec) => (
          <div key={sec.label}>
            <div className="panel-title text-sm">{sec.label}</div>
            {sec.body && (
              <p className="mt-1 text-sm leading-relaxed">{sec.body}</p>
            )}
            {sec.items && (
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                {sec.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div>
          <div className="panel-title mb-1 text-sm">Stack</div>
          <div className="flex flex-wrap gap-1">
            {HACKATHON.tech.map((t) => (
              <span key={t} className="pill">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p }: { p: (typeof PROJECTS)[number] }) {
  return (
    <div className="panel px-4 py-3">
      <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="panel-title text-xl">{p.title}</h3>
        <div className="flex gap-2 text-sm">
          {p.href && (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              live ↗
            </a>
          )}
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              code ↗
            </a>
          )}
        </div>
      </div>
      <p className="mb-2 text-sm leading-relaxed">{p.blurb}</p>
      <div className="flex flex-wrap gap-1">
        {p.tech.map((t) => (
          <span key={t} className="pill">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------------- Hobbies ----------------

function HobbiesContent() {
  return (
    <div className="space-y-6">
      <div>
        <SubHeading>Off-screen</SubHeading>
        <div className="flex flex-wrap gap-1">
          {HOBBIES.map((h) => (
            <span key={h} className="pill">
              {h}
            </span>
          ))}
        </div>
      </div>

      <div>
        <SubHeading>Camera roll : birds, bugs & in between</SubHeading>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {PHOTOS.map((p) => (
            <figure key={p.src} className="overflow-hidden border-2 border-ink">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-32 w-full object-cover"
                style={p.focus ? { objectPosition: p.focus } : undefined}
              />
              {p.caption && (
                <figcaption className="border-t-2 border-ink bg-sky px-2 py-1 text-xs">
                  {p.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------- Contact ----------------

function ContactContent() {
  const [copied, setCopied] = useState<string | null>(null);
  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(null), 1400);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
    } catch {
      setCopied(null);
    }
  };

  return (
    <div className="space-y-3">
      <p className="leading-relaxed">
        Best way to reach me is email. LinkedIn works well too, and Instagram
        is where the photography lives.
      </p>

      <ContactRow
        label="Email"
        value={PROFILE.email}
        onCopy={() => copy(PROFILE.email, "email")}
        copied={copied === "email"}
        href={`mailto:${PROFILE.email}`}
      />
      <ContactRow
        label="LinkedIn"
        value={PROFILE.linkedin.replace(/^https?:\/\//, "")}
        onCopy={() => copy(PROFILE.linkedin, "linkedin")}
        copied={copied === "linkedin"}
        href={PROFILE.linkedin}
      />
      <ContactRow
        label="Instagram"
        value={PROFILE.instagram.replace(/^https?:\/\//, "")}
        onCopy={() => copy(PROFILE.instagram, "instagram")}
        copied={copied === "instagram"}
        href={PROFILE.instagram}
      />
    </div>
  );
}

function ContactRow({
  label,
  value,
  onCopy,
  copied,
  href,
}: {
  label: string;
  value: string;
  onCopy: () => void;
  copied: boolean;
  href: string;
}) {
  return (
    <div className="panel flex flex-wrap items-center gap-3 px-4 py-3">
      <span className="panel-title min-w-[80px]">{label}</span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="min-w-0 flex-1 truncate underline"
      >
        {value}
      </a>
      <button onClick={onCopy} className="panel panel-title px-2 py-1 text-xs">
        {copied ? "copied!" : "copy"}
      </button>
    </div>
  );
}

// ---------------- shared ----------------

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="panel-title mb-2 border-b-2 border-ink/30 pb-1 text-lg uppercase tracking-wide">
      {children}
    </h3>
  );
}
