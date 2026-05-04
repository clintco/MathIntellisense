/**
 * generateReference.mjs
 *
 * Generates symbols.html and equations.html — static reference pages for
 * math symbols (by category) and equations (by domain).
 *
 * Usage:  node scripts/generateReference.mjs
 */

import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { mathSymbols } from "../src/mathSymbols.js";
import { mathEquations } from "../src/mathEquations.js";

const __dir = dirname(fileURLToPath(import.meta.url));

// ── Helpers ────────────────────────────────────────────────────────────────

function slug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function esc(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function rank(n) {
  const filled = "★".repeat(n > 0 ? 4 - n : 0);   // rank 1→3★, 2→2★, 3→1★
  const empty  = "☆".repeat(n > 0 ? n - 1 : 0);
  return `<span class="rank" title="Rank ${n}">${filled}${empty}</span>`;
}

// ── Group data ──────────────────────────────────────────────────────────────

const symbolsByCategory = new Map();
for (const s of mathSymbols) {
  if (!symbolsByCategory.has(s.category)) symbolsByCategory.set(s.category, []);
  symbolsByCategory.get(s.category).push(s);
}

const equationsByDomain = new Map();
for (const e of mathEquations) {
  if (!equationsByDomain.has(e.domain)) equationsByDomain.set(e.domain, []);
  equationsByDomain.get(e.domain).push(e);
}

const symCategories = [...symbolsByCategory.keys()].sort((a, b) => a.localeCompare(b));
const eqDomains     = [...equationsByDomain.keys()].sort((a, b) => a.localeCompare(b));

const totalSymbols   = mathSymbols.length;
const totalEquations = mathEquations.length;

// ── Shared styles ──────────────────────────────────────────────────────────

function sharedStyles(bmHeight) {
  return `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:       #1e1e2e;
      --surface:  #2a2a3e;
      --border:   #3a3a5a;
      --text:     #e0e0f0;
      --muted:    #8888aa;
      --accent:   #7aa2f7;
      --accent2:  #9ece6a;
      --code-bg:  #1a1a2e;
      --row-alt:  #252535;
      --bm-h:     ${bmHeight}px;
    }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: "Segoe UI", system-ui, sans-serif;
      font-size: 14px;
      line-height: 1.6;
    }

    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }

    /* ── Page header ── */
    .page-header {
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      padding: 20px 32px;
      display: flex;
      align-items: baseline;
      gap: 24px;
    }
    .page-header h1 {
      font-size: 22px;
      font-weight: 600;
      color: var(--text);
    }
    .page-header .back { font-size: 13px; color: var(--muted); }
    .page-header .other { font-size: 13px; color: var(--accent2); }
    .page-header .counts { font-size: 12px; color: var(--muted); margin-left: auto; }

    /* ── Bookmarks bar ── */
    .bookmarks {
      position: sticky;
      top: 0;
      z-index: 20;
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      padding: 8px 32px;
    }
    .bm-row {
      display: flex;
      align-items: center;
      gap: 6px;
      min-height: 28px;
    }
    .bm-section {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--accent2);
      white-space: nowrap;
      min-width: 70px;
      text-decoration: none;
    }
    .bm-section:hover { text-decoration: underline; }
    .bm-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    .bm-pill {
      font-size: 11px;
      color: var(--text);
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 1px 8px;
      white-space: nowrap;
      line-height: 18px;
      text-decoration: none;
    }
    .bm-pill:hover {
      background: var(--accent);
      color: var(--bg);
      border-color: var(--accent);
      text-decoration: none;
    }
    .bm-pill--eq:hover {
      background: var(--accent2);
      border-color: var(--accent2);
    }

    /* ── Main content ── */
    main { padding: 0 32px 48px; }

    h1 {
      font-size: 16px;
      font-weight: 600;
      color: var(--accent);
      margin: 32px 0 10px;
      padding-top: 8px;
      border-top: 1px solid var(--border);
      scroll-margin-top: calc(var(--bm-h) + 8px);
    }
    h1:first-of-type { border-top: none; }

    /* ── Tables ── */
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 8px;
      font-size: 13px;
    }
    thead th {
      background: var(--surface);
      color: var(--muted);
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 8px 12px;
      text-align: left;
      border-bottom: 1px solid var(--border);
      position: sticky;
      top: var(--bm-h);
      z-index: 5;
    }
    tbody tr:nth-child(even) { background: var(--row-alt); }
    tbody tr:hover { background: #2e2e48; }
    td {
      padding: 7px 12px;
      vertical-align: middle;
      border-bottom: 1px solid #2a2a3a;
    }

    /* Symbol column */
    .sym-char {
      font-size: 22px;
      text-align: center;
      width: 48px;
      color: var(--text);
    }

    code {
      font-family: "Cascadia Code", "Fira Code", monospace;
      font-size: 12px;
      background: var(--code-bg);
      color: var(--accent);
      padding: 2px 5px;
      border-radius: 3px;
    }

    .rank { color: #f9e2af; letter-spacing: -1px; font-size: 13px; }

    /* Equation columns */
    .eq-math {
      min-width: 180px;
      text-align: center;
    }
    .eq-math math { font-size: 16px; }
    .eq-aliases { color: var(--muted); }
    .eq-unicode code { color: var(--accent2); }
    .eq-desc { color: var(--muted); max-width: 300px; }

    @media (max-width: 800px) {
      main, .page-header, .bookmarks { padding-left: 16px; padding-right: 16px; }
      .eq-desc { max-width: 180px; }
    }`;
}

// ── Symbol section ─────────────────────────────────────────────────────────

function symbolSection(category) {
  const items = symbolsByCategory.get(category);
  const rows = items.map(s => {
    const aliases = s.aliases.length
      ? s.aliases.map(a => `<code>\\${esc(a)}</code>`).join(" ")
      : "";
    return `
        <tr>
          <td class="sym-char">${esc(s.symbol)}</td>
          <td>${esc(s.name)}</td>
          <td>${aliases}</td>
          <td><code>\\${esc(s.code)}</code></td>
          <td>${rank(s.rank)}</td>
        </tr>`;
  }).join("");

  return `
  <h1 id="sym-${slug(category)}">${esc(category)}</h1>
  <table>
    <thead>
      <tr>
        <th>Symbol</th>
        <th>Symbol Name</th>
        <th>Aliases</th>
        <th>AutoCorrect</th>
        <th>Rank</th>
      </tr>
    </thead>
    <tbody>${rows}
    </tbody>
  </table>`;
}

// ── Equation section ───────────────────────────────────────────────────────

function equationSection(domain) {
  const items = equationsByDomain.get(domain);
  const rows = items.map(e => {
    return `
        <tr>
          <td>${esc(e.name)}</td>
          <td class="eq-aliases">${esc(e.aliases)}</td>
          <td class="eq-math">${e.mathml}</td>
          <td class="eq-unicode"><code>${esc(e.unicodemath)}</code></td>
          <td class="eq-desc">${esc(e.description)}</td>
        </tr>`;
  }).join("");

  return `
  <h1 id="eq-${slug(domain)}">${esc(domain)}</h1>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Aliases</th>
        <th>MathML</th>
        <th>UnicodeMath</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>${rows}
    </tbody>
  </table>`;
}

// ── symbols.html ───────────────────────────────────────────────────────────

// Bookmarks bar height: 8px top + 28px row + 8px bottom = 44px
const BM_H = 44;

const symPills = symCategories
  .map(c => `<a class="bm-pill" href="#sym-${slug(c)}">${esc(c)}</a>`)
  .join("");

const symbolsHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Math Reference — Symbols</title>
  <style>${sharedStyles(BM_H)}
  </style>
</head>
<body>

  <div class="page-header">
    <h1>Symbols</h1>
    <a class="back" href="./">← Math Intellisense</a>
    <a class="other" href="equations.html">Equations →</a>
    <span class="counts">${totalSymbols} symbols across ${symCategories.length} categories</span>
  </div>

  <nav class="bookmarks" aria-label="Symbol categories">
    <div class="bm-row">
      <span class="bm-section">Categories</span>
      <div class="bm-pills">${symPills}</div>
    </div>
  </nav>

  <main>
    ${symCategories.map(symbolSection).join("\n")}
  </main>

</body>
</html>
`;

// ── equations.html ─────────────────────────────────────────────────────────

const eqPills = eqDomains
  .map(d => `<a class="bm-pill bm-pill--eq" href="#eq-${slug(d)}">${esc(d)}</a>`)
  .join("");

const equationsHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Math Reference — Equations</title>
  <style>${sharedStyles(BM_H)}
  </style>
</head>
<body>

  <div class="page-header">
    <h1>Equations</h1>
    <a class="back" href="./">← Math Intellisense</a>
    <a class="other" href="symbols.html">Symbols →</a>
    <span class="counts">${totalEquations} equations across ${eqDomains.length} domains</span>
  </div>

  <nav class="bookmarks" aria-label="Equation domains">
    <div class="bm-row">
      <span class="bm-section">Domains</span>
      <div class="bm-pills">${eqPills}</div>
    </div>
  </nav>

  <main>
    ${eqDomains.map(equationSection).join("\n")}
  </main>

</body>
</html>
`;

// ── Write files ────────────────────────────────────────────────────────────

const symOut = join(__dir, "../symbols.html");
const eqOut  = join(__dir, "../equations.html");

writeFileSync(symOut,  symbolsHtml,  "utf8");
writeFileSync(eqOut,   equationsHtml, "utf8");

console.log(`Written: ${symOut}`);
console.log(`  ${totalSymbols} symbols in ${symCategories.length} categories`);
console.log(`Written: ${eqOut}`);
console.log(`  ${totalEquations} equations in ${eqDomains.length} domains`);
