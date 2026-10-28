import type { Site, Metadata, Socials } from "@types"
import type { Lang } from "@lib/i18n"

export const SITE: Site = {
  NAME: "Tobias Leinss",
  EMAIL: "dev@leinss.xyz",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_EDUCATION_ON_HOMEPAGE: 3,
}

// The postal address and phone number the legal pages print: imprint, privacy
// policy, and the app privacy and deletion pages, in every language. They render
// them through LegalAddress.astro or `{LEGAL.PHONE}` in MDX, so a change of
// address is this one edit.
export const LEGAL = {
  NAME: "Tobias Leinss",
  STREET: "Blumenstr. 73",
  CITY: "73033 Göppingen",
  COUNTRY: { en: "Germany", de: "Deutschland" },
  PHONE: "+49 15679 63 41 99",
} as const

export const HOME: Record<Lang, Metadata> = {
  en: {
    TITLE: "Privacy-first apps you can install today",
    DESCRIPTION:
      "I build privacy-first, on-device apps with optional bring-your-own-key AI: keyboards, voice-to-text, RSS readers and more. No accounts, no telemetry, no backend.",
  },
  de: {
    TITLE: "Datenschutzfreundliche Apps, die Sie heute installieren können",
    DESCRIPTION:
      "Ich baue datenschutzfreundliche Apps, die auf dem Gerät laufen, mit optionaler KI über Ihren eigenen API-Schlüssel: Tastaturen, Spracheingabe, RSS-Reader und mehr. Kein Konto, keine Telemetrie, kein Server.",
  },
}

// Shipped apps shown in the homepage portfolio grid. `slug` must match the
// corresponding entry under content/projects/ (used for the card link).
export type App = {
  name: string
  tagline: Record<Lang, string>
  platform: string
  slug: string
}

export const APPS: App[] = [
  {
    name: "TobiBoard",
    tagline: {
      en: "Android keyboard whose AI voice-to-text and text fix run on the device, no account or API key.",
      de: "Android-Tastatur, deren KI-Spracheingabe und Textkorrektur auf dem Gerät laufen, ohne Konto und ohne API-Schlüssel.",
    },
    platform: "Android",
    slug: "TobiBoard",
  },
  {
    name: "TobiReader",
    tagline: {
      en: "Local-first RSS/Atom reader with on-device read-aloud, optional AI summaries and self-hosted sync.",
      de: "RSS/Atom-Reader, der lokal arbeitet: Vorlesen auf dem Gerät, optionale KI-Zusammenfassungen und Sync über den eigenen Server.",
    },
    platform: "Android",
    slug: "TobiReader",
  },
  {
    name: "TobiRecord",
    tagline: {
      en: "Open-source screen recorder and editor with auto-zoom, cursor polish and styled frames.",
      de: "Quelloffener Bildschirmrekorder mit Editor: automatischer Zoom, aufgeräumter Mauszeiger und gestaltete Rahmen.",
    },
    platform: "macOS · Windows · Linux",
    slug: "TobiRecord",
  },
  {
    name: "TobiVoice",
    tagline: {
      en: "Native macOS voice-to-text that transcribes on-device: local models by default, optional cloud providers.",
      de: "Native Spracheingabe für macOS, die auf dem Gerät transkribiert: standardmäßig lokale Modelle, Cloud-Anbieter optional.",
    },
    platform: "macOS",
    slug: "TobiVoice",
  },
  {
    name: "TobiBar",
    tagline: {
      en: "macOS menu-bar manager: hide, show and organise menu-bar items, with a growing toolbox of extras.",
      de: "Menüleisten-Manager für macOS: Symbole der Menüleiste ausblenden, einblenden und ordnen, dazu eine wachsende Sammlung von Extras.",
    },
    platform: "macOS",
    slug: "TobiBar",
  },
  {
    name: "kAIros",
    tagline: {
      en: "AI-guided goal tracking: conversational goal setup, reminders and progress with local-LLM integration.",
      de: "Zielverfolgung mit KI: Ziele im Gespräch festlegen, Erinnerungen und Fortschritt, mit Anbindung an lokale LLMs.",
    },
    platform: "Android",
    slug: "kAIros",
  },
  {
    name: "finanzplanr",
    tagline: {
      en: "Financial planning platform for the DACH region: household budgeting, statement parsing and AI insights.",
      de: "Finanzplanung für den DACH-Raum: Haushaltsbudget, Einlesen von Kontoauszügen und KI-Auswertungen.",
    },
    platform: "Web · Mobile",
    slug: "finanzplanr",
  },
  {
    name: "taggr",
    tagline: {
      en: "Self-hosted, AI-powered image tagging: bulk auto-tagging with a local LLM, all data stays on your machine.",
      de: "Selbst gehostetes Verschlagworten von Bildern mit KI: Bilder in großer Zahl automatisch taggen mit einem lokalen LLM, alle Daten bleiben auf Ihrem Rechner.",
    },
    platform: "Web (self-hosted)",
    slug: "taggr",
  },
]

export const BLOG: Record<Lang, Metadata> = {
  en: { TITLE: "Blog", DESCRIPTION: "A collection of articles on topics I am passionate about." },
  de: { TITLE: "Blog", DESCRIPTION: "Artikel zu Themen, die mich beschäftigen." },
}

export const WORK: Record<Lang, Metadata> = {
  en: { TITLE: "Work", DESCRIPTION: "Where I have worked and what I have done." },
  de: { TITLE: "Werdegang", DESCRIPTION: "Wo ich gearbeitet habe und was ich dort gemacht habe." },
}

export const PROJECTS: Record<Lang, Metadata> = {
  en: { TITLE: "Projects", DESCRIPTION: "A collection of my projects, with links to repositories and demos." },
  de: { TITLE: "Projekte", DESCRIPTION: "Meine Projekte, mit Links zu Repositories und Demos." },
}

export const HACKATHONS: Record<Lang, Metadata> = {
  en: { TITLE: "Hackathons", DESCRIPTION: "Hackathon projects and prototypes I have built." },
  de: { TITLE: "Hackathons", DESCRIPTION: "Hackathon-Projekte und Prototypen, die ich gebaut habe." },
}

// Slugs in the `projects` collection that are hackathon entries, shown under
// /hackathons and excluded from /projects and the homepage projects list.
export const HACKATHON_SLUGS: string[] = [
  "ethberlin",
  "ethglobal-agentic-ethereum",
  "ethglobal-fevm",
  "ethglobal-istanbul",
  "ethglobal-paris",
  "ethlisbon-2023",
  "ethmunich",
  "ethprague",
  "ethrome",
  "ethzurich",
  "farcaster-hackathons",
  "nearcon",
]

export const EDUCATION: Record<Lang, Metadata> = {
  en: { TITLE: "Education", DESCRIPTION: "Where I have studied." },
  de: { TITLE: "Ausbildung", DESCRIPTION: "Wo ich studiert und gelernt habe." },
}

// Bluesky is deliberately absent. The account exists but has no posts, and
// `NAME` is also the Feather icon name, which has no `bluesky` glyph, so the
// entry rendered a bare word with an empty box beside it. The Bluesky feed at
// /social is gone with it.
export const SOCIALS: Socials = [
  {
    NAME: "twitter",
    HREF: "https://x.com/t_leinss",
    LABEL: "x",
  },
  {
    NAME: "github",
    HREF: "https://github.com/leinss",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/tobias-leinss",
  },
  {
    NAME: "youtube",
    HREF: "https://www.youtube.com/@t_leinss",
  },
]
