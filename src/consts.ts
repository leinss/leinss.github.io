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
  TITLE: "Home",
  DESCRIPTION:
    "👷 Building innovative solutions in Web3 and AI 👨‍💻 Fullstack engineer specialized in UI, backend, smart contracts, devops and AI integration",
}

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

export const PROJECTS_TO_FILTER: string[] = [
  "EthLisbon Hackathon",
  "Nearcon Lisbon Hackathon",
  "EthMunich Hackathon",
]

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
    NAME: "twitter",
    HREF: "https://twitter.com/t_leinss",
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
