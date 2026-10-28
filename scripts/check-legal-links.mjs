/**
 * Fails the build when a page does not link to the imprint and the privacy
 * policy of its own language.
 *
 * German law (§ 5 DDG) wants the imprint reachable from every page. The footer
 * once picked the legal pages out of the three newest static pages, and once
 * newer app pages existed, both links vanished from every page without any
 * check noticing.
 *
 * The language is read from `<html lang>`, the same attribute PageLayout sets.
 */

import { readdirSync, readFileSync, statSync } from "node:fs"
import { join, resolve } from "node:path"

const DIST = resolve("dist")

const LEGAL_LINKS = {
  en: ["/imprint", "/privacy"],
  de: ["/de/impressum", "/de/datenschutz"],
}

const walk = (dir) =>
  readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry)
    return statSync(full).isDirectory() ? walk(full) : [full]
  })

let pages
try {
  pages = walk(DIST).filter((f) => f.endsWith(".html"))
} catch {
  console.error("no dist/ to check, run the build first")
  process.exit(1)
}

const failures = []

for (const page of pages) {
  const html = readFileSync(page, "utf8")
  const name = page.slice(DIST.length + 1)
  const lang = html.match(/<html[^>]*\blang="([^"]+)"/)?.[1]
  const required = LEGAL_LINKS[lang]
  if (!required) {
    failures.push(`${name}: no legal links defined for <html lang="${lang}">`)
    continue
  }
  const hrefs = new Set(
    [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1].replace(/\/$/, "")),
  )
  for (const target of required) {
    if (!hrefs.has(target)) failures.push(`${name}: no link to ${target}`)
  }
}

if (failures.length > 0) {
  for (const failure of failures) console.error(failure)
  console.error(`\nlegal links: ${failures.length} missing across ${pages.length} pages`)
  process.exit(1)
}

console.log(`legal links: imprint and privacy linked from all ${pages.length} pages`)
