import type { Metadata, Viewport } from "next";
import { VT323, Nunito } from "next/font/google";
import "./globals.css";
import { PROFILE } from "./_game/content";
import { SITE_URL } from "./siteUrl";

const display = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const TITLE = `${PROFILE.name} | Playable Portfolio`;
const DESCRIPTION = `${PROFILE.role} in Tokyo (Rails, React/Next.js, Laravel, AWS). Walk around a small island to explore my work, or read the plain version.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s | ${PROFILE.name}` },
  description: DESCRIPTION,
  applicationName: TITLE,
  authors: [{ name: PROFILE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#2e2418",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  alternateName: PROFILE.nameJa,
  jobTitle: PROFILE.role,
  url: SITE_URL,
  image: `${SITE_URL}${PROFILE.portrait}`,
  address: { "@type": "PostalAddress", addressLocality: "Tokyo", addressCountry: "JP" },
  worksFor: { "@type": "Organization", name: "IBJ Inc." },
  alumniOf: "New Horizon College of Engineering",
  sameAs: [PROFILE.linkedin, PROFILE.instagram],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} no-select`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
