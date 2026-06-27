/**
 * Math AutoCorrect symbol search + autocorrect functions.
 *
 * The symbol DATA and category order are GENERATED from data/math-symbols.json into
 * ./mathSymbolsData.js by scripts/generateData.mjs (this project owns that master; the
 * sibling RN project regenerates its C++ tables from the same file). This module keeps
 * the hand-written behavior and re-exports the data for callers.
 */
import { mathSymbols, allCategories } from './mathSymbolsData.js';

export { mathSymbols, allCategories };

/** Get all symbols in a category */
export function getSymbolsByCategory(category) {
  return mathSymbols.filter(s => s.category === category);
}

/**
 * Case-sensitive exact lookup by autocorrect code or alias.
 * Returns the symbol string, or null if not found.
 */
export function lookupByCode(code) {
  const sym = mathSymbols.find(s => s.code === code || s.aliases.includes(code));
  return sym ? sym.symbol : null;
}

/**
 * Finds a \code pattern immediately before `cursor` in `value` and converts it.
 * If `appendBackslash` is true, appends \ after the symbol (for chaining codes).
 * Returns { newValue, newCursor } or null if no convertible code is found.
 */
export function applyAutocorrect(value, cursor, appendBackslash = false) {
  let backslashIdx = -1;
  for (let i = cursor - 1; i >= 0; i--) {
    if (value[i] === "\\") { backslashIdx = i; break; }
    if (/\s/.test(value[i])) break;
  }
  if (backslashIdx === -1) return null;
  const code = value.slice(backslashIdx + 1, cursor);
  const sym = lookupByCode(code);
  if (!sym) return null;
  const insert = appendBackslash ? sym + "\\" : sym;
  const newValue = value.slice(0, backslashIdx) + insert + value.slice(cursor);
  const newCursor = backslashIdx + insert.length;
  return { newValue, newCursor };
}

/**
 * Search symbols and categories by:
 *  1. Autocorrect code (e.g. "pm", "alpha")
 *  2. Aliases
 *  3. Symbol name (e.g. "plus minus")
 *  4. Category (e.g. "basic math", "greek", "arrows")
 *
 * Returns up to 14 items (mix of category and symbol entries) sorted by relevance.
 * Symbol shape:   { type:"symbol",   code, aliases, symbol, name, category, rank, score, matchOn }
 * Category shape: { type:"category", category, count, score }
 */
export function searchSymbols(query) {
  if (!query) return [];
  const q = query.toLowerCase();

  // --- Symbol matches ---
  const symbolResults = [];
  for (const sym of mathSymbols) {
    let score = 0;
    let matchOn = null;

    const codeLower = sym.code.toLowerCase();
    const nameLower = sym.name.toLowerCase();

    if (codeLower === q)              { score = 100; matchOn = "code"; }
    else if (codeLower.startsWith(q)) { score = 85;  matchOn = "code"; }
    else if (codeLower.includes(q))   { score = 65;  matchOn = "code"; }

    for (const alias of sym.aliases) {
      const a = alias.toLowerCase();
      if (a === q && score < 90)              { score = 90;  matchOn = "alias"; }
      else if (a.startsWith(q) && score < 80) { score = 80;  matchOn = "alias"; }
      else if (a.includes(q) && score < 55)   { score = 55;  matchOn = "alias"; }
    }

    if (nameLower === q && score < 75)              { score = 75; matchOn = "name"; }
    else if (nameLower.startsWith(q) && score < 60) { score = 60; matchOn = "name"; }
    else if (nameLower.includes(q) && score < 40)   { score = 40; matchOn = "name"; }

    if (score > 0) symbolResults.push({ type: "symbol", ...sym, score, matchOn });
  }
  // Sort by score descending, then rank ascending (rank 1 before rank 3 within same score)
  symbolResults.sort((a, b) => b.score !== a.score ? b.score - a.score : a.rank - b.rank);

  // --- Category matches ---
  const catResults = [];
  for (const cat of allCategories) {
    const catLower = cat.toLowerCase();
    let score = 0;
    if (catLower === q)              score = 70;
    else if (catLower.startsWith(q)) score = 55;
    else if (catLower.includes(q))   score = 35;

    // Also match individual words in the category name (e.g. "greek" → "Greek Letters")
    const words = catLower.split(/[\s/]+/);
    if (!score) {
      if (words.some(w => w === q))               score = 50;
      else if (words.some(w => w.startsWith(q)))  score = 40;
      else if (words.some(w => w.includes(q)))    score = 20;
    }

    if (score > 0) {
      catResults.push({
        type: "category",
        section: "unicode",
        category: cat,
        count: mathSymbols.filter(s => s.category === cat).length,
        score,
      });
    }
  }
  catResults.sort((a, b) => b.score - a.score);

  // Interleave categories and symbols, categories bubble up when they score well
  const combined = [];
  let si = 0;
  let ci = 0;
  while (combined.length < 14 && (si < symbolResults.length || ci < catResults.length)) {
    const sym = symbolResults[si];
    const cat = catResults[ci];
    if (!sym && !cat) break;
    if (!cat || (sym && sym.score >= cat.score)) {
      combined.push(sym); si++;
    } else {
      combined.push(cat); ci++;
    }
  }
  return combined;
}
