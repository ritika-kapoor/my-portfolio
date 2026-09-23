import Link from "next/link";
import { GameCanvas } from "./_game/GameCanvas";
import { LanguageProvider } from "./_game/LanguageContext";
import { ABOUT, PROFILE } from "./_game/content";

export default function HomePage() {
  return (
    <LanguageProvider>
      {/* Text version of the page for search engines and screen readers,
          since the game itself is drawn on a canvas. */}
      <div className="sr-only">
        <h1>
          {PROFILE.name}, {PROFILE.role} in Tokyo
        </h1>
        <p>{ABOUT.intro[0]}</p>
        <Link href="/resume">Read the plain version of this portfolio</Link>
      </div>
      <GameCanvas />
    </LanguageProvider>
  );
}
