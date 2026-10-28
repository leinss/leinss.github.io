/**
 * Fails when an English entry has no German twin, or the other way round.
 *
 * Every page exists in English and German. A German entry lives under a de/
 * folder of the same collection at the same path, or names its English page
 * with `translationOf`. Without this check a new English page goes live with
 * no German version, and the German lists are silently shorter.
 *
 * It also compares the fields that must match across a pair: `date`,
 * `dateStart`, `dateEnd` and `draft`. It cannot tell whether the German text
 * still says what the English says.
 *
 * Reads src/content directly, so it needs no build.
 */

import { readdirSync, readFileSync, statSync } from "node:fs"
import { join, relative, resolve } from "node:path"

const CONTENT = resolve("src/content")
const COLLECTIONS = ["projects", "work", "education", "staticPages"]
const SAME_FIELDS = ["date", "dateStart", "dateEnd", "draft"]
// "Present" in English is "heute" in German; both mean an open-ended entry.
const OPEN_END = new Set(["Present", "heute"])

const walk = (dir) =>
  readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry)
    return statSync(full).isDirectory() ? walk(full) : [full]
  })

// Same rule as stripIndex in src/content.config.ts.
const idOf = (base, file) =>
  relative(base, file).replace(/\/index\.(md|mdx)$/, "").replace(/\.(md|mdx)$/, "")

const frontmatter = (file) => {
  const block = readFileSync(file, "utf8").match(/^---\n([\s\S]*?)\n---/)?.[1] ?? ""
  return Object.fromEntries(
    [...block.matchAll(/^(\w+):\s*"?(.*?)"?\s*$/gm)].map((m) => [m[1], m[2]]),
  )
}

const failures = []
let pairs = 0

for (const collection of COLLECTIONS) {
  const base = join(CONTENT, collection)
  const entries = walk(base)
    .filter((f) => /\.(md|mdx)$/.test(f))
    .map((file) => ({ id: idOf(base, file), data: frontmatter(file) }))

  const english = new Map(entries.filter((e) => !e.id.startsWith("de/")).map((e) => [e.id, e]))
  const german = new Map()
  for (const entry of entries.filter((e) => e.id.startsWith("de/"))) {
    const target = entry.data.translationOf ?? entry.id.slice(3)
    if (german.has(target)) {
      failures.push(`${collection}: ${entry.id} and ${german.get(target).id} both translate ${target}`)
    }
    german.set(target, entry)
  }

  for (const [id, en] of english) {
    const de = german.get(id)
    if (!de) {
      failures.push(`${collection}: ${id} has no German twin (de/${id})`)
      continue
    }
    pairs += 1
    for (const field of SAME_FIELDS) {
      const a = en.data[field]
      const b = de.data[field]
      if (a === b || (OPEN_END.has(a) && OPEN_END.has(b))) continue
      failures.push(`${collection}: ${field} differs, ${id} has "${a}", ${de.id} has "${b}"`)
    }
  }
  for (const [target, de] of german) {
    if (!english.has(target)) failures.push(`${collection}: ${de.id} translates ${target}, which does not exist`)
  }
}

if (failures.length > 0) {
  for (const failure of failures) console.error(failure)
  console.error(`\ni18n parity: ${failures.length} problems`)
  process.exit(1)
}

console.log(`i18n parity: ${pairs} English entries, each with a German twin`)
