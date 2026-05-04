/**
 * generateReference.mjs
 *
 * Generates public/reference.html — a static reference page listing all
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
const outPath = join(__dir, "../reference.html");

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

// ── TOC ────────────────────────────────────────────────────────────────────

function toc() {
  const symLinks = symCategories
    .map(c => `<li><a href="#sym-${slug(c)}">${esc(c)}</a> <span class="toc-count">${symbolsByCategory.get(c).length}</span></li>`)
    .join("\n          ");
  const eqLinks = eqDomains
    .map(d => `<li><a href="#eq-${slug(d)}">${esc(d)}</a> <span class="toc-count">${equationsByDomain.get(d).length}</span></li>`)
    .join("\n          ");
  return `
  <nav class="toc" aria-label="Table of contents">
    <h2>Contents</h2>
    <div class="toc-cols">
      <div class="toc-group">
        <a class="toc-section-link" href="#symbols">Symbols</a>
        <ul>
          ${symLinks}
        </ul>
      </div>
      <div class="toc-group">
        <a class="toc-section-link" href="#equations">Equations</a>
        <ul>
          ${eqLinks}
        </ul>
      </div>
    </div>
  </nav>`;
}

// ── Symbol tables ──────────────────────────────────────────────────────────

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

// ── Equation tables ────────────────────────────────────────────────────────

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

// ── Full page ──────────────────────────────────────────────────────────────

const totalSymbols   = mathSymbols.length;
const totalEquations = mathEquations.length;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Math Reference — Symbols &amp; Equations</title>
  <style>
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
    .page-header .counts { font-size: 12px; color: var(--muted); margin-left: auto; }

    /* ── TOC ── */
    .toc {
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      padding: 24px 32px;
    }
    .toc h2 {
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
      margin-bottom: 16px;
    }
    .toc-cols {
      display: flex;
      gap: 48px;
      flex-wrap: wrap;
    }
    .toc-group { min-width: 220px; }
    .toc-section-link {
      font-size: 13px;
      font-weight: 600;
      color: var(--accent2);
      display: block;
      margin-bottom: 8px;
    }
    .toc ul {
      list-style: none;
      columns: 2;
      column-gap: 24px;
    }
    .toc li {
      padding: 2px 0;
      break-inside: avoid;
    }
    .toc a { font-size: 13px; }
    .toc-count {
      font-size: 11px;
      color: var(--muted);
    }

    /* ── Main content ── */
    main { padding: 0 32px 48px; }

    .section-header {
      position: sticky;
      top: 0;
      z-index: 10;
      background: var(--bg);
      border-bottom: 2px solid var(--accent2);
      padding: 16px 0 8px;
      margin: 40px 0 0;
    }
    .section-header h2 {
      font-size: 20px;
      font-weight: 700;
      color: var(--accent2);
    }
    .section-header .section-count {
      font-size: 13px;
      color: var(--muted);
      font-weight: 400;
      margin-left: 12px;
    }

    h1 {
      font-size: 16px;
      font-weight: 600;
      color: var(--accent);
      margin: 32px 0 10px;
      padding-top: 8px;
      border-top: 1px solid var(--border);
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
      top: 57px;
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
      main, .page-header, .toc { padding-left: 16px; padding-right: 16px; }
      .toc ul { columns: 1; }
      .eq-desc { max-width: 180px; }
    }
  </style>
</head>
<body>

  <div class="page-header">
    <h1>Math Reference</h1>
    <a class="back" href="./">← Math Intellisense</a>
    <span class="counts">${totalSymbols} symbols &nbsp;·&nbsp; ${totalEquations} equations</span>
  </div>

  ${toc()}

  <main>

    <div class="section-header">
      <h2 id="symbols">Symbols <span class="section-count">${totalSymbols} entries across ${symCategories.length} categories</span></h2>
    </div>

    ${symCategories.map(symbolSection).join("\n")}

    <div class="section-header">
      <h2 id="equations">Equations <span class="section-count">${totalEquations} entries across ${eqDomains.length} domains</span></h2>
    </div>

    ${eqDomains.map(equationSection).join("\n")}

  </main>

</body>
</html>
`;

writeFileSync(outPath, html, "utf8");
console.log(`Written: ${outPath}`);
console.log(`  ${totalSymbols} symbols in ${symCategories.length} categories`);
console.log(`  ${totalEquations} equations in ${eqDomains.length} domains`);
