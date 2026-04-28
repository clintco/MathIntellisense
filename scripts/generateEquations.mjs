/**
 * generateEquations.mjs
 *
 * Reads equations.csv, converts each LaTeX field to MathML via KaTeX,
 * and writes src/mathEquations.js.
 *
 * Usage:  node scripts/generateEquations.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { createRequire } from "module";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { isCoreEquation } from "../src/coreEquations.js";
import { latexToUnicodeMath } from "./latexToUnicodeMath.mjs";

const require = createRequire(import.meta.url);
const katex = require("katex");

const __dir = dirname(fileURLToPath(import.meta.url));
const CSV_PATH  = "C:\\Users\\clintc\\OneDrive - Microsoft\\MathIntellisense\\Math_Templates_V2.txt";
const OUT_PATH  = resolve(__dir, "../src/mathEquations.js");

// ---------------------------------------------------------------------------
// Minimal RFC-4180 CSV parser (handles quoted fields with embedded commas)
// ---------------------------------------------------------------------------
function parseCSV(text) {
  const rows = [];
  const lines = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
  for (const line of lines) {
    if (!line.trim()) continue;
    const fields = [];
    let i = 0;
    while (i < line.length) {
      if (line[i] === '"') {
        // Quoted field
        let field = "";
        i++; // skip opening quote
        while (i < line.length) {
          if (line[i] === '"' && line[i + 1] === '"') { field += '"'; i += 2; }
          else if (line[i] === '"') { i++; break; }
          else { field += line[i++]; }
        }
        fields.push(field);
        if (line[i] === ",") i++;
      } else {
        // Unquoted field
        const end = line.indexOf(",", i);
        if (end === -1) { fields.push(line.slice(i)); i = line.length; }
        else { fields.push(line.slice(i, end)); i = end + 1; }
      }
    }
    rows.push(fields);
  }
  return rows;
}

// ---------------------------------------------------------------------------
// Pre-process Word-specific LaTeX syntax → standard LaTeX for KaTeX
// ---------------------------------------------------------------------------
function preprocessLatex(latex) {
  // Replace \placeholder{n} with \square (Word-specific, not standard LaTeX)
  latex = latex.replace(/\\placeholder\{[^}]*\}/g, "\\square");
  // Word uses \matrix(a&b\\c&d) — convert to \begin{pmatrix}a&b\\c&d\end{pmatrix}
  latex = latex.replace(/\\matrix\(([^)]*)\)/g, (_, inner) => `\\begin{pmatrix}${inner}\\end{pmatrix}`);
  // Handle \pmatrix/\bmatrix/\vmatrix{...} brace syntax (safe after placeholder replacement)
  latex = latex.replace(/\\pmatrix\{([^}]*)\}/g, (_, inner) => `\\begin{pmatrix}${inner}\\end{pmatrix}`);
  latex = latex.replace(/\\bmatrix\{([^}]*)\}/g, (_, inner) => `\\begin{bmatrix}${inner}\\end{bmatrix}`);
  latex = latex.replace(/\\vmatrix\{([^}]*)\}/g, (_, inner) => `\\begin{vmatrix}${inner}\\end{vmatrix}`);
  return latex;
}

// ---------------------------------------------------------------------------
// LaTeX → MathML via KaTeX
// ---------------------------------------------------------------------------
function latexToMathML(latex) {
  return katex.renderToString(preprocessLatex(latex), {
    output:       "mathml",
    throwOnError: false,
    displayMode:  true,
    strict:       "ignore",
  });
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
const csv     = readFileSync(CSV_PATH, "utf8");
const rows    = parseCSV(csv);
const header  = rows[0]; // name,aliases,latex,domain,description
const data    = rows.slice(1);

const equations = [];
const failures  = [];

for (const row of data) {
  if (row.length < 5) { console.warn("Bad row:", row); continue; }
  const [name, aliases, latex, domain, description, , dictationString] = row;

  // The .txt file stores LaTeX with doubled backslashes (\\det → \det).
  // Unescape them before converting.
  const latexUnescaped = latex.replace(/\\\\/g, "\\");

  let mathml;
  try {
    const html = latexToMathML(latexUnescaped);
    // KaTeX wraps in <span>, extract the <math> element
    const match = html.match(/<math[\s\S]*<\/math>/);
    mathml = match ? match[0] : html;
    // Check if KaTeX silently failed (produces error span)
    if (html.includes("katex-error")) throw new Error("KaTeX parse error");
  } catch (err) {
    failures.push({ name, latex, error: err.message });
    mathml = null;
  }

  const core       = isCoreEquation({ name, domain });
  const unicodemath = latexToUnicodeMath(preprocessLatex(latexUnescaped));
  equations.push({ name, aliases, mathml, unicodemath, domain, description, dictationString: dictationString ?? "", core });
}

// ---------------------------------------------------------------------------
// Report failures
// ---------------------------------------------------------------------------
if (failures.length) {
  console.log(`\n⚠  ${failures.length} conversion failure(s):\n`);
  for (const f of failures) {
    console.log(`  [${f.name}]`);
    console.log(`    latex: ${f.latex}`);
    console.log(`    error: ${f.error}\n`);
  }
} else {
  console.log("✓ All equations converted successfully.");
}

// ---------------------------------------------------------------------------
// Emit JS
// ---------------------------------------------------------------------------
const js = `/**
 * mathEquations.js  —  AUTO-GENERATED by scripts/generateEquations.mjs
 *
 * Each entry:
 *   name        - equation name (used for search)
 *   aliases     - alternate spoken names
 *   mathml      - MathML string for insertion
 *   unicodemath - UnicodeMath linear format string (null = needs manual review)
 *   domain          - subject domain (used for category browsing)
 *   description     - human-readable description
 *   dictationString - natural spoken form for speech recognition / accessibility
 */
export const mathEquations = ${JSON.stringify(equations, null, 2)};

/** All unique domains, sorted alphabetically */
export const allDomains = [...new Set(mathEquations.map(e => e.domain))].sort();

/** Core equations only */
export const coreEquations = mathEquations.filter(e => e.core);

/** Domains that have at least one core equation */
export const coreDomains = [...new Set(coreEquations.map(e => e.domain))].sort();

/** Search equations by name or aliases (case-insensitive contains match) */
export function searchEquations(query, coreOnly = false) {
  if (!query) return [];
  const q = query.toLowerCase();
  const list = coreOnly ? coreEquations : mathEquations;
  return list
    .filter(e => e.mathml && (
      e.name.toLowerCase().includes(q) ||
      e.aliases.toLowerCase().includes(q)
    ))
    .map(e => ({ type: "equation", ...e }))
    .slice(0, 20);
}

/** Get all equations in a domain */
export function getEquationsByDomain(domain, coreOnly = false) {
  const list = coreOnly ? coreEquations : mathEquations;
  return list
    .filter(e => e.domain === domain && e.mathml)
    .map(e => ({ type: "equation", ...e }));
}
`;

writeFileSync(OUT_PATH, js, "utf8");
console.log(`\n✓ Wrote ${equations.length} equations to src/mathEquations.js`);
console.log(`  (${equations.filter(e => e.mathml).length} with MathML, ${failures.length} null)`);
