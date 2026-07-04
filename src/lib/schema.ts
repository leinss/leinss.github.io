import { APPS, SITE } from "@consts"

// schema.org applicationCategory per app, keyed by project slug.
// Kept here (not in consts) so the schema concern stays out of the config.
const APP_CATEGORY: Record<string, string> = {
  TobiBoard: "UtilitiesApplication",
  TobiReader: "NewsApplication",
  TobiRecord: "MultimediaApplication",
  TobiVoice: "UtilitiesApplication",
  TobiBar: "UtilitiesApplication",
  kAIros: "LifestyleApplication",
  finanzplanr: "FinanceApplication",
  taggr: "UtilitiesApplication",
}

interface ProjectLike {
  id: string
  data: { title: string; description: string; repoURL?: string }
}

/**
 * Build a SoftwareApplication schema for a project that is one of the shipped
 * apps (listed in APPS). Returns null for non-app projects (e.g. hackathons),
 * so the caller can skip emitting anything. No price/rating is claimed — the
 * apps' pricing/status varies, so only verifiable fields are included.
 */
export function softwareApplicationSchema(
  project: ProjectLike,
  site: URL | undefined,
) {
  const app = APPS.find((a) => a.slug === project.id)
  if (!app) return null

  const base = site?.toString() ?? "https://leinss.xyz/"
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.data.title,
    description: project.data.description,
    url: new URL(`projects/${project.id}/`, base).toString(),
    operatingSystem: app.platform,
    applicationCategory: APP_CATEGORY[app.slug] ?? "UtilitiesApplication",
    author: {
      "@type": "Person",
      name: SITE.NAME,
      url: base,
    },
    ...(project.data.repoURL ? { codeRepository: project.data.repoURL } : {}),
  }
}
