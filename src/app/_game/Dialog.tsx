"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { SectionKey } from "./world";
import { SECTION_TITLE } from "./world";
import {
  ABOUT,
  CLUBS,
  COVERS,
  HACKATHON,
  HIGHLIGHTS,
  HOBBIES,
  PHOTOS,
  PROFILE,
  PROJECTS,
  SKILLS,
  TIMELINE,
} from "./content";
import { useLanguage } from "./LanguageContext";
import {
  JA_ABOUT,
  JA_CERTIFICATIONS,
  JA_CLUBS,
  JA_HACKATHON,
  JA_HIGHLIGHTS,
  JA_HOBBIES,
  JA_PHOTO_CAPTIONS,
  JA_PROJECTS,
  JA_SECTION_TITLE,
  JA_TAGLINE,
  JA_TIMELINE,
  JA_UI,
} from "./translations";

type Props = {
  section: SectionKey;
  onClose: () => void;
};

export function Dialog({ section, onClose }: Props) {
  const { lang } = useLanguage();
  const ja = lang === "ja";
  const title = ja ? JA_SECTION_TITLE[section] : SECTION_TITLE[section];
  return (
    <AnimatePresence>
      <motion.div
        key={section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 p-2 backdrop-blur-[2px] sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 20, scale: 0.97 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 10, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="panel max-h-[90dvh] w-full max-w-3xl overflow-y-auto p-4 sm:max-h-[85dvh] sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="panel-title text-3xl leading-none">{title}</h2>
              {section === "about" && (
                <div className="mt-1 text-sm opacity-70">
                  {ja ? JA_TAGLINE : PROFILE.tagline} · {PROFILE.location}
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="panel panel-title px-3 py-1 text-sm"
              aria-label={ja ? JA_UI.close : "Close"}
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
            {ja ? (
              JA_UI.pressEscClose
            ) : (
              <>
                Press <span className="pill">Esc</span> or click outside to close
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ---------------- About ----------------

function AboutContent() {
  const { lang } = useLanguage();
  const ja = lang === "ja";
  const intro = ja ? JA_ABOUT.intro : ABOUT.intro;
  const languages = ja ? JA_ABOUT.languages : ABOUT.languages;
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <img
          src={PROFILE.portrait}
          alt={PROFILE.name}
          className="h-32 w-32 flex-none rounded-md border-2 border-ink object-cover shadow-pixel-sm"
        />
        <div className="space-y-3 leading-relaxed">
          {intro.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>

      <div>
        <SubHeading>{ja ? JA_UI.languagesHeading : "Languages"}</SubHeading>
        <ul className="space-y-1 text-sm">
          {languages.map((l) => (
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
  const { lang } = useLanguage();
  const ja = lang === "ja";
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex-1">
          <SubHeading>{ja ? JA_UI.timeline : "Timeline"}</SubHeading>
          <ol className="space-y-3 border-l-2 border-ink/40 pl-4">
            {TIMELINE.map((t, i) => {
              const tr = JA_TIMELINE[t.title];
              return (
                <li key={i} className="relative">
                  <span className="absolute -left-[22px] top-1 h-3 w-3 rounded-full border-2 border-ink bg-firefly" />
                  <div className="panel-title">{ja && tr ? tr.title : t.title}</div>
                  <div className="text-xs opacity-70">
                    {t.year}
                    {t.place ? ` · ${t.place}` : ""}
                  </div>
                  {t.detail && (
                    <p className="mt-1 text-sm leading-relaxed">
                      {ja && tr?.detail ? tr.detail : t.detail}
                    </p>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
        <img
          src={PROFILE.aboutPhoto}
          alt={`${PROFILE.name} jumping joyfully on campus`}
          className="h-44 w-36 flex-none self-center rounded-md border-2 border-ink object-cover shadow-pixel-sm sm:self-start"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <SubHeading>{ja ? JA_UI.clubsNow : "Clubs: now"}</SubHeading>
          <ul className="space-y-1 text-sm">
            {CLUBS.now.map((c) => (
              <li key={c.name}>
                <span className="panel-title">{c.name}</span>
                <span className="opacity-70">
                  {" "}
                  · {ja ? (JA_CLUBS[c.name] ?? c.note) : c.note}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SubHeading>{ja ? JA_UI.clubsSchool : "Clubs: school & college"}</SubHeading>
          <ul className="space-y-1 text-sm">
            {CLUBS.school.map((c) => (
              <li key={c.name}>
                <span className="panel-title">{c.name}</span>
                <span className="opacity-70">
                  {" "}
                  · {ja ? (JA_CLUBS[c.name] ?? c.note) : c.note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <SubHeading>{ja ? JA_UI.highlights : "Highlights"}</SubHeading>
        <ul className="space-y-1 text-sm">
          {HIGHLIGHTS.map((h, i) => (
            <li key={i}>
              <span className="pill">{h.year}</span>{" "}
              <span>{ja ? (JA_HIGHLIGHTS[h.text] ?? h.text) : h.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---------------- Skills ----------------

function SkillsContent() {
  const { lang } = useLanguage();
  const ja = lang === "ja";
  return (
    <div className="space-y-6">
      <div>
        <SubHeading>
          {ja
            ? JA_UI.techHeading
            : "Tech : A jack of all trades is a master of none, but oftentimes better than a master of one."}
        </SubHeading>
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
        <SubHeading>{ja ? JA_UI.certifications : "Certifications"}</SubHeading>
        <ul className="space-y-1 text-sm">
          {SKILLS.certifications.map((c) => (
            <li key={c}>
              <span className="pill">✓</span>{" "}
              {ja ? (JA_CERTIFICATIONS[c] ?? c) : c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---------------- Projects ----------------

function ProjectsContent() {
  const { lang } = useLanguage();
  const ja = lang === "ja";
  const work = PROJECTS.filter((p) => p.category === "work");
  const personal = PROJECTS.filter((p) => p.category === "personal");
  const college = PROJECTS.filter((p) => p.category === "college");
  return (
    <div className="space-y-6">
      <div>
        <SubHeading>{ja ? JA_UI.work : "Work"}</SubHeading>
        <div className="space-y-3">
          {work.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
      <div>
        <SubHeading>{ja ? JA_UI.personalProjects : "Personal · side projects"}</SubHeading>
        <div className="space-y-3">
          {personal.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
      <HackathonDetail />
      <div>
        <SubHeading>{ja ? JA_UI.collegeProjects : "College · hardware & tinkering"}</SubHeading>
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
  const { lang } = useLanguage();
  const ja = lang === "ja";
  return (
    <div>
      <SubHeading>{ja ? JA_UI.hackathonDeepDive : "Hackathon deep dive"}</SubHeading>
      <div className="panel space-y-4 px-4 py-3">
        <div>
          <h3 className="panel-title text-xl">
            {ja ? JA_HACKATHON.title : HACKATHON.title}
          </h3>
          <div className="text-xs opacity-70">
            {ja ? JA_HACKATHON.subtitle : HACKATHON.subtitle}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {HACKATHON.images.map((img) => (
            <figure key={img.src} className="overflow-hidden border-2 border-ink bg-white">
              <a
                href={img.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open full-size: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(min-width: 768px) 230px, 100vw"
                  className="h-40 w-full object-cover sm:h-28"
                />
              </a>
              <figcaption className="border-t-2 border-ink bg-sky px-2 py-1 text-xs">
                {ja ? (JA_HACKATHON.imageCaptions[img.caption] ?? img.caption) : img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="text-xs opacity-60">
          {ja ? JA_UI.tapPhotoEnlarge : "Tap a photo to open it full size."}
        </p>
        {(ja ? JA_HACKATHON.sections : HACKATHON.sections).map((sec, i) => (
          <div key={i}>
            <div className="panel-title text-sm">{sec.label}</div>
            {sec.body && (
              <p className="mt-1 text-sm leading-relaxed">{sec.body}</p>
            )}
            {sec.items && (
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                {sec.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div>
          <div className="panel-title mb-1 text-sm">{ja ? "使用技術" : "Stack"}</div>
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
  const { lang } = useLanguage();
  const ja = lang === "ja";
  const isPersonal = p.category === "personal";
  const tr = JA_PROJECTS[p.title];
  return (
    <div
      className="panel px-4 py-3"
      style={
        isPersonal
          ? {
              border: "3px solid #249153",
              background: "#eef3e0",
              boxShadow: "4px 4px 0 0 rgba(36,145,83,0.9)",
            }
          : undefined
      }
    >
      <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="panel-title text-xl">{ja && tr ? tr.title : p.title}</h3>
          {isPersonal && (
            <span
              className="pill"
              style={{
                border: "2px solid #249153",
                background: "#249153",
                color: "#f7e9d0",
              }}
            >
              {ja ? JA_UI.buildingNow : "🌱 building now"}
            </span>
          )}
        </div>
        <div className="flex gap-2 text-sm">
          {p.href && (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {ja ? JA_UI.live : "live ↗"}
            </a>
          )}
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {ja ? JA_UI.code : "code ↗"}
            </a>
          )}
        </div>
      </div>
      <p className="mb-2 text-sm leading-relaxed">{ja && tr ? tr.blurb : p.blurb}</p>
      {p.images && p.images.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-2">
          {p.images.map((img) =>
            img.video ? (
              <video
                key={img.src}
                src={img.video}
                poster={img.src}
                controls
                playsInline
                muted
                loop
                preload="none"
                className={
                  isPersonal
                    ? "h-28 w-full flex-none border-2 border-ink object-cover sm:h-40 sm:w-64"
                    : "h-16 w-20 flex-none border-2 border-ink object-cover sm:h-20 sm:w-24"
                }
              />
            ) : (
              <a
                key={img.src}
                href={p.href ?? img.src}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isPersonal
                    ? "block w-full flex-none overflow-hidden border-2 border-ink sm:w-64"
                    : "block w-20 flex-none overflow-hidden border-2 border-ink sm:w-24"
                }
                aria-label={p.href ? `Open ${p.title}` : `Open full-size: ${img.alt}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={
                    isPersonal
                      ? "h-28 w-full object-cover sm:h-40"
                      : "h-16 w-full object-cover sm:h-20"
                  }
                />
              </a>
            ),
          )}
        </div>
      )}
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

const GALLERY_TITLES: Record<string, string> = {
  Photography: "Camera roll : birds, bugs & in between",
};
const JA_GALLERY_TITLES: Record<string, string> = {
  Photography: JA_UI.cameraRoll,
};

// Large galleries show this many tiles before a "View all" toggle appears.
const GALLERY_PAGE_SIZE = 9;

function HobbiesContent() {
  const { lang } = useLanguage();
  const ja = lang === "ja";
  const galleryFor = (hobby: string) => PHOTOS.filter((p) => p.hobby === hobby);
  const coversFor = (hobby: string) => COVERS.filter((c) => c.hobby === hobby);
  const [active, setActive] = useState<string>(
    HOBBIES.find((h) => galleryFor(h).length > 0 || coversFor(h).length > 0) ?? "",
  );
  const [showAll, setShowAll] = useState(false);
  const allPhotos = active ? galleryFor(active) : [];
  const photos = showAll ? allPhotos : allPhotos.slice(0, GALLERY_PAGE_SIZE);
  const covers = active ? coversFor(active) : [];
  const activeName = ja ? (JA_HOBBIES[active] ?? active) : active;

  return (
    <div className="space-y-6">
      <div>
        <SubHeading>{ja ? JA_UI.offScreen : "Off-screen"}</SubHeading>
        <div className="flex flex-wrap gap-1">
          {HOBBIES.map((h) => {
            const count = galleryFor(h).length + coversFor(h).length;
            const label = ja ? (JA_HOBBIES[h] ?? h) : h;
            if (count === 0) {
              return (
                <span key={h} className="pill">
                  {label}
                </span>
              );
            }
            const selected = h === active;
            return (
              <button
                key={h}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setActive(h);
                  setShowAll(false);
                }}
                className={`pill cursor-pointer transition hover:-translate-y-[1px] ${
                  selected ? "bg-firefly" : ""
                }`}
              >
                {label} · {count}
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-xs opacity-70">
          {ja ? JA_UI.pickHobby : "Pick a hobby with a number to see its gallery."}
        </p>
      </div>

      {photos.length > 0 && (
        <div>
          <SubHeading>
            {ja
              ? (JA_GALLERY_TITLES[active] ?? `${activeName} : ${JA_UI.hobbiesGallery}`)
              : (GALLERY_TITLES[active] ?? `${active} : gallery`)}
          </SubHeading>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {photos.map((p) => (
              <PhotoTile key={p.src} photo={p} />
            ))}
          </div>
          {allPhotos.length > GALLERY_PAGE_SIZE && (
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="pill mt-2 cursor-pointer"
            >
              {ja
                ? showAll
                  ? JA_UI.showFewer
                  : JA_UI.viewAll(allPhotos.length)
                : showAll
                  ? "Show fewer"
                  : `View all ${allPhotos.length}`}
            </button>
          )}
        </div>
      )}

      {covers.length > 0 && (
        <div>
          <SubHeading>
            {ja ? `${activeName} : ${JA_UI.whatImInto}` : <>{active} : what I&apos;m into</>}
          </SubHeading>
          <p className="mb-2 text-xs opacity-70">
            {ja ? (
              JA_UI.coverArtNote
            ) : (
              <>
                Cover art, not my own photos, just here to show what I&apos;m reading
                or watching.
              </>
            )}
          </p>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
            {covers.map((c) => (
              <figure key={c.src} className="overflow-hidden border-2 border-ink">
                <img
                  src={c.src}
                  alt={`${c.title} cover art`}
                  loading="lazy"
                  className="aspect-[2/3] w-full object-cover"
                />
                <figcaption className="border-t-2 border-ink bg-sky px-1 py-0.5 text-center text-[0.65rem] leading-tight">
                  {c.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PhotoTile({ photo: p }: { photo: (typeof PHOTOS)[number] }) {
  const { lang } = useLanguage();
  const ja = lang === "ja";
  const caption = ja ? (JA_PHOTO_CAPTIONS[p.src] ?? p.caption) : p.caption;
  return (
    <figure className="overflow-hidden border-2 border-ink">
      {p.video ? (
        <div className="h-32 w-full overflow-hidden">
          <video
            src={p.video}
            poster={p.src}
            controls
            playsInline
            muted
            loop
            preload="none"
            className="h-32 w-full object-cover"
            style={{
              objectPosition: p.focus,
              transform: p.zoom ? `scale(${p.zoom})` : undefined,
            }}
          />
        </div>
      ) : (
        <a
          href={p.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open full-size photo: ${p.alt}`}
          className="block h-32 w-full overflow-hidden"
        >
          <img
            src={p.src}
            alt={p.alt}
            loading="lazy"
            className="h-32 w-full object-cover"
            style={{
              objectPosition: p.focus,
              transform: p.zoom ? `scale(${p.zoom})` : undefined,
            }}
          />
        </a>
      )}
      {caption && (
        <figcaption className="border-t-2 border-ink bg-sky px-2 py-1 text-xs">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ---------------- Contact ----------------

function ContactContent() {
  const { lang } = useLanguage();
  const ja = lang === "ja";
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
        {ja ? (
          JA_UI.contactIntro
        ) : (
          <>
            Best way to reach me is email. LinkedIn works well too, and Instagram
            is the informal reflection of me.
          </>
        )}
      </p>

      <ContactRow
        label={ja ? JA_UI.email : "Email"}
        value={PROFILE.email}
        onCopy={() => copy(PROFILE.email, "email")}
        copied={copied === "email"}
        copyLabel={ja ? JA_UI.copy : "copy"}
        copiedLabel={ja ? JA_UI.copied : "copied!"}
        href={`mailto:${PROFILE.email}`}
      />
      <ContactRow
        label="LinkedIn"
        value={PROFILE.linkedin.replace(/^https?:\/\//, "")}
        onCopy={() => copy(PROFILE.linkedin, "linkedin")}
        copied={copied === "linkedin"}
        copyLabel={ja ? JA_UI.copy : "copy"}
        copiedLabel={ja ? JA_UI.copied : "copied!"}
        href={PROFILE.linkedin}
      />
      <ContactRow
        label="Instagram"
        value={PROFILE.instagram.replace(/^https?:\/\//, "")}
        onCopy={() => copy(PROFILE.instagram, "instagram")}
        copied={copied === "instagram"}
        copyLabel={ja ? JA_UI.copy : "copy"}
        copiedLabel={ja ? JA_UI.copied : "copied!"}
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
  copyLabel,
  copiedLabel,
  href,
}: {
  label: string;
  value: string;
  onCopy: () => void;
  copied: boolean;
  copyLabel: string;
  copiedLabel: string;
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
        {copied ? copiedLabel : copyLabel}
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
