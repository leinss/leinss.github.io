import type { Site, Metadata, Socials } from "@types"

export const SITE: Site = {
  NAME: "Tobias Leinss",
  EMAIL: "dev@leinss.xyz",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_EDUCATION_ON_HOMEPAGE: 3,
}

export const HOME: Metadata = {
  TITLE: "Privacy-first apps you can install today",
  DESCRIPTION:
    "I build privacy-first, on-device apps with optional bring-your-own-key AI — keyboards, voice-to-text, RSS readers and more. No accounts, no telemetry, no backend.",
}

// Shipped apps shown in the homepage portfolio grid. `slug` must match the
// corresponding entry under content/projects/ (used for the card link).
export type App = {
  name: string
  tagline: string
  platform: string
  slug: string
}

export const APPS: App[] = [
  {
    name: "TobiBoard",
    tagline:
      "On-device Android keyboard with optional bring-your-own-key AI voice-to-text and text fix.",
    platform: "Android",
    slug: "TobiBoard",
  },
  {
    name: "TobiReader",
    tagline:
      "Local-first RSS/Atom reader with on-device read-aloud, optional AI summaries and self-hosted sync.",
    platform: "Android",
    slug: "TobiReader",
  },
  {
    name: "TobiRecord",
    tagline:
      "Open-source screen recorder and editor with auto-zoom, cursor polish and styled frames.",
    platform: "macOS · Windows · Linux",
    slug: "TobiRecord",
  },
  {
    name: "TobiVoice",
    tagline:
      "Native macOS voice-to-text that transcribes locally — offline processing, your data never leaves the device.",
    platform: "macOS",
    slug: "TobiVoice",
  },
  {
    name: "TobiBar",
    tagline:
      "macOS menu-bar manager — hide, show and organise menu-bar items, with a growing toolbox of extras.",
    platform: "macOS",
    slug: "TobiBar",
  },
  {
    name: "kAIros",
    tagline:
      "AI-guided goal tracking — conversational goal setup, reminders and progress with local-LLM integration.",
    platform: "Android",
    slug: "kAIros",
  },
  {
    name: "finanzplanr",
    tagline:
      "Financial planning platform for the DACH region — household budgeting, statement parsing and AI insights.",
    platform: "Web · Mobile",
    slug: "finanzplanr",
  },
  {
    name: "taggr",
    tagline:
      "Self-hosted, AI-powered image tagging — bulk auto-tagging with a local LLM, all data stays on your machine.",
    platform: "Web (self-hosted)",
    slug: "taggr",
  },
]

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
}

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
}

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
}

export const HACKATHONS: Metadata = {
  TITLE: "Hackathons",
  DESCRIPTION: "Hackathon projects and prototypes I have built.",
}

// Slugs in the `projects` collection that are hackathon entries — shown under
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

export const EDUCATION: Metadata = {
  TITLE: "Education",
  DESCRIPTION: "Where I have studied.",
}

export const SOCIALS: Socials = [
  {
    NAME: "bluesky",
    HREF: "https://bsky.app/profile/leinss.bsky.social",
  },
  {
    NAME: "github",
    HREF: "https://github.com/leinss",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/tobias-leinss",
  },
]
