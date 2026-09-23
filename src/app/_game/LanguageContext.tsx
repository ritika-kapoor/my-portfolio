"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "ja";

const LanguageContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({
  lang: "en",
  // Placeholder only — always overridden by LanguageProvider below.
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "ja" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
