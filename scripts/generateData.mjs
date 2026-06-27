/**
 * generateData.mjs
 *
 * This project owns the master reference data in data/:
 *   data/named-equations.json             (equations + domains)
 *   data/named-equations.{es,de,fr}.json  (localization pilot)
 *   data/math-symbols.json                (symbols + categories)
 *
 * It regenerates the JS data modules the app + static reference pages consume:
 *   src/mathEquations.js      English equations (app/useIntellisense + equations.html)
 *   src/localizedEquations.js localized pilot   (equations.{es,de,fr}.html)
 *   src/mathSymbolsData.js    symbol data + category order
 *                             (src/mathSymbols.js keeps the search/autocorrect functions)
 *
 * The sibling RN project (../MathIntellisenseRN) reads the SAME data/ masters to
 * regenerate its C++ tables, so this data/ folder is the single source of truth.
 *
 * Usage: node scripts/generateData.mjs   (then scripts/generateReference.mjs)
 */
import { readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const DATA = resolve(__dir, "../data");
const SRC = resolve(__dir, "../src");
const read = (f) => JSON.parse(readFileSync(resolve(DATA, f), "utf8"));
const header = (src) =>
  `// GENERATED from data/${src} by scripts/generateData.mjs. Do not edit by hand.\n\n`;

// ── Equations (English) → src/mathEquations.js ───────────────────────────────
const eq = read("named-equations.json");
const domainLabel = new Map(eq.domains.map((d) => [d.id, d.label]));
const equations = eq.equations.map((e) => ({
  name: e.name,
  aliases: e.aliases.join("; "),
  description: e.description,
  domain: domainLabel.get(e.domainId) ?? e.domainId,
  unicodemath: e.unicodemath,
}));
writeFileSync(
  resolve(SRC, "mathEquations.js"),
  header("named-equations.json") + `export const mathEquations = ${JSON.stringify(equations, null, 2)};\n`,
  "utf8",
);

// ── Localized equations → src/localizedEquations.js ──────────────────────────
const LOCALES = [
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
];
const byId = new Map(eq.equations.map((e) => [e.id, e]));
const localizedEquations = {};
for (const { code } of LOCALES) {
  const loc = read(`named-equations.${code}.json`);
  localizedEquations[code] = loc.equations.map((e) => {
    const m = byId.get(e.id) || {};
    return {
      id: e.id,
      name: e.name,
      englishName: m.name ?? "",
      aliases: e.aliases ?? [],
      dictation: e.dictation ?? "",
      unicodemath: m.unicodemath ?? "",
      domain: domainLabel.get(m.domainId) ?? m.domainId ?? "",
    };
  });
}
writeFileSync(
  resolve(SRC, "localizedEquations.js"),
  header("named-equations.{es,de,fr}.json") +
    `export const localizedLocales = ${JSON.stringify(LOCALES, null, 2)};\n\n` +
    `export const localizedEquations = ${JSON.stringify(localizedEquations, null, 2)};\n`,
  "utf8",
);

// ── Symbols → src/mathSymbolsData.js (functions stay in src/mathSymbols.js) ──
const sym = read("math-symbols.json");
const catLabel = new Map(sym.categories.map((c) => [c.id, c.label]));
const allCategories = [...sym.categories].sort((a, b) => a.order - b.order).map((c) => c.label);
const mathSymbols = sym.symbols.map((s) => ({
  code: s.code,
  aliases: s.aliases,
  symbol: s.symbol,
  name: s.name,
  category: catLabel.get(s.categoryId) ?? s.categoryId,
  rank: s.rank,
}));
writeFileSync(
  resolve(SRC, "mathSymbolsData.js"),
  header("math-symbols.json") +
    `export const mathSymbols = ${JSON.stringify(mathSymbols, null, 2)};\n\n` +
    `export const allCategories = ${JSON.stringify(allCategories, null, 2)};\n`,
  "utf8",
);

console.log(
  `✓ mathEquations (${equations.length}) · localizedEquations (${LOCALES.map((l) => `${l.code}:${localizedEquations[l.code].length}`).join(", ")}) · mathSymbols (${mathSymbols.length}, ${allCategories.length} categories)`,
);
