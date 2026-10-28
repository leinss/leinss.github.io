export const LANGS = ["en", "de"] as const;
export type Lang = (typeof LANGS)[number];

// English pages live at the root with no prefix; every other language lives
// under /<lang>/, and its content entries under a <lang>/ folder.
export const DEFAULT_LANG: Lang = "en";

const ui = {
  en: {
    dateLocale: "en-US",
    readingTime: "min read",
    switchLabel: "Deutsch",
    present: "Present",
    navWork: "work",
    navProjects: "projects",
    toggleTheme: "Toggle theme",
    backToTop: "Back to top",
    backToProjects: "Back to projects",
    backToBlog: "Back to blog",
    seeAllProjects: "See all projects →",
    seeAllWork: "See all work →",
    seeAllEducation: "See all education →",
    appsHeading: "Apps I've built",
    aboutHeading: "A little about me",
    consultingHeading: "AI consulting",
    recentProjects: "Recent projects",
    workHeading: "Work Experience",
    educationHeading: "Education",
    connectHeading: "Let's connect",
    share: "Share:",
    shareOnTwitter: "Share on Twitter",
    shareOnLinkedIn: "Share on LinkedIn",
    copyLink: "Copy link",
    socialOn: "on",
    emailTo: "Email",
    newsletterHeading: "Stay in the loop",
    newsletterIntro: "Get occasional updates on projects, tech insights, and new blog posts.",
    newsletterEmailLabel: "Email address",
    newsletterPlaceholder: "your@email.com",
    newsletterSubmit: "Subscribe",
    newsletterBusy: "Subscribing...",
    newsletterDone: "Thanks! Check your email to confirm.",
    newsletterError: "Something went wrong. Please try again.",
    newsletterNoSpam: "No spam. Unsubscribe anytime. Your email is stored by",
    newsletterSelfHosted: "(self-hosted) and used solely for this newsletter. See our",
    newsletterPrivacy: "Privacy Policy",
  },
  de: {
    dateLocale: "de-DE",
    readingTime: "Min. Lesezeit",
    switchLabel: "English",
    present: "heute",
    navWork: "werdegang",
    navProjects: "projekte",
    toggleTheme: "Farbschema wechseln",
    backToTop: "Nach oben",
    backToProjects: "Zurück zu den Projekten",
    backToBlog: "Zurück zum Blog",
    seeAllProjects: "Alle Projekte →",
    seeAllWork: "Ganzer Werdegang →",
    seeAllEducation: "Ganze Ausbildung →",
    appsHeading: "Meine Apps",
    aboutHeading: "Über mich",
    consultingHeading: "KI-Beratung",
    recentProjects: "Neue Projekte",
    workHeading: "Berufserfahrung",
    educationHeading: "Ausbildung",
    connectHeading: "Kontakt",
    share: "Teilen:",
    shareOnTwitter: "Auf Twitter teilen",
    shareOnLinkedIn: "Auf LinkedIn teilen",
    copyLink: "Link kopieren",
    socialOn: "auf",
    emailTo: "E-Mail an",
    newsletterHeading: "Auf dem Laufenden bleiben",
    newsletterIntro: "Ab und zu Neuigkeiten zu meinen Projekten, Technik und neuen Blogartikeln.",
    newsletterEmailLabel: "E-Mail-Adresse",
    newsletterPlaceholder: "ihre@email.de",
    newsletterSubmit: "Abonnieren",
    newsletterBusy: "Wird angemeldet...",
    newsletterDone: "Danke! Bitte bestätigen Sie die Anmeldung in Ihrem Postfach.",
    newsletterError: "Das hat nicht geklappt. Bitte versuchen Sie es noch einmal.",
    newsletterNoSpam: "Kein Spam, jederzeit abbestellbar. Ihre E-Mail-Adresse liegt bei",
    newsletterSelfHosted: "(selbst gehostet) und wird nur für diesen Newsletter genutzt. Mehr in der",
    newsletterPrivacy: "Datenschutzerklärung",
  },
} satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)["en"];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}

// Ids of the imprint and privacy policy in the `staticPages` collection, which
// the footer links on every page and scripts/check-legal-links.mjs enforces.
export const LEGAL_PAGES: Record<Lang, { privacy: string; imprint: string }> = {
  en: { privacy: "privacy", imprint: "imprint" },
  de: { privacy: "de/datenschutz", imprint: "de/impressum" },
};

const PREFIX_RE = new RegExp(
  `^(${LANGS.filter((lang) => lang !== DEFAULT_LANG).join("|")})\\/`
);

/** The language of a content entry, from its id: `de/foo` is German, `foo` English. */
export function entryLang(id: string): Lang {
  return (id.match(PREFIX_RE)?.[1] as Lang | undefined) ?? DEFAULT_LANG;
}

/** An entry id without its language folder: `de/foo` becomes `foo`. */
export function stripLang(id: string): string {
  return id.replace(PREFIX_RE, "");
}

/** Entries of one language. */
export function inLang<T extends { id: string }>(entries: T[], lang: Lang): T[] {
  return entries.filter((entry) => entryLang(entry.id) === lang);
}

/** A site path in a language: `/work` becomes `/de/work`. */
export function localePath(lang: Lang, path: string): string {
  return lang === DEFAULT_LANG ? path : `/${lang}${path === "/" ? "/" : path}`;
}

/** The other language, for the switch link in the header. */
export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "de" : "en";
}

/**
 * hreflang alternates for a page that exists at `path` in every language,
 * such as /work and /de/work.
 */
export function pageAlternates(path: string, site: URL | undefined) {
  return LANGS.map((lang) => ({
    hreflang: lang,
    href: new URL(localePath(lang, path), site).toString(),
  }));
}

/** A content entry id in a language: `foo` becomes `de/foo`. */
export function langId(lang: Lang, id: string): string {
  return lang === DEFAULT_LANG ? id : `${lang}/${id}`;
}
