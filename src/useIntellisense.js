import { useState, useCallback, useRef } from "react";
import { searchSymbols, getSymbolsByCategory, allCategories } from "./mathSymbols";
import { mathEquations } from "./mathEquations";

const allEquationItems = mathEquations
  .filter(e => e.mathml)
  .map(e => ({ type: "equation", ...e, code: e.name.replace(/\s+/g, "") }));

const equationsByDomain = allEquationItems.reduce((acc, e) => {
  (acc[e.domain] ??= []).push(e);
  return acc;
}, {});

const allCategoryItems = [
  ...allCategories
    .map(cat => ({ type: "category", section: "unicode", category: cat, count: getSymbolsByCategory(cat).length, score: 0 }))
    .sort((a, b) => a.category.localeCompare(b.category)),
  ...Object.keys(equationsByDomain)
    .sort()
    .map(domain => ({ type: "category", section: "equations", category: domain, count: equationsByDomain[domain].length, score: 0 })),
];

/**
 * VS Code-style intellisense hook for a math symbol textarea.
 *
 * Modes:
 *   "search"   - live search results as user types \query
 *   "category" - user drilled into a category; shows all symbols in it
 */
export function useIntellisense() {
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [triggerPos, setTriggerPos] = useState(null); // index of the \ char in textarea
  const [mode, setMode] = useState("search"); // "search" | "category"
  const [activeCategory, setActiveCategory] = useState(null);

  // Keep triggerPos accessible in callbacks without stale closure issues
  const triggerPosRef = useRef(null);
  triggerPosRef.current = triggerPos;

  // Saved parent list for going back up from a category drill-in
  const prevSuggestionsRef = useRef([]);

  const reset = useCallback(() => {
    setSuggestions([]);
    setSelectedIndex(-1);
    setTriggerPos(null);
    setMode("search");
    setActiveCategory(null);
    prevSuggestionsRef.current = [];
  }, []);

  const goBack = useCallback(() => {
    if (prevSuggestionsRef.current.length > 0) {
      setSuggestions(prevSuggestionsRef.current);
      prevSuggestionsRef.current = [];
      setSelectedIndex(-1);
      setMode("search");
      setActiveCategory(null);
    } else {
      reset();
    }
  }, [reset]);

  /**
   * Called on every textarea input change.
   * Detects \query pattern and updates suggestions.
   */
  const onValueChange = useCallback((value, cursorPos, fullContent = value) => {
    // If browsing a category and cursor moved away from trigger, close.
    // Otherwise fall through — typing a character exits category mode and re-filters.
    if (mode === "category") {
      const tp = triggerPosRef.current;
      if (tp === null || cursorPos <= tp) {
        reset();
        return;
      }
      setMode("search");
      setActiveCategory(null);
      prevSuggestionsRef.current = [];
    }

    // Walk back from cursor to find a backslash
    let backslashIdx = -1;
    for (let i = cursorPos - 1; i >= 0; i--) {
      const ch = value[i];
      if (ch === "\\") { backslashIdx = i; break; }
      if (/\s/.test(ch)) break;
    }

    if (backslashIdx === -1) { reset(); return; }

    const query = value.slice(backslashIdx + 1, cursorPos);
    // Use full editor content to determine if anything exists outside the \query trigger
    const triggerText = "\\" + query;
    const contentOutside = fullContent.replace(triggerText, "").trim();
    const editorIsEmpty = contentOutside.length === 0;
    let results;
    if (query.length === 0) {
      // Empty query: order depends on whether the editor already has content
      results = editorIsEmpty
        ? [...allCategoryItems.filter(c => c.section === "equations"), ...allCategoryItems.filter(c => c.section === "unicode")]
        : [...allCategoryItems.filter(c => c.section === "unicode"), ...allCategoryItems.filter(c => c.section === "equations")];
    } else {
      const symbolResults = searchSymbols(query);
      const q = query.toLowerCase();
      const eqCategoryResults = allCategoryItems
        .filter(c => c.section === "equations" && c.category.toLowerCase().includes(q));
      const eqResults = allEquationItems
        .filter(e => e.name.toLowerCase().includes(q) || e.aliases.toLowerCase().includes(q))
        .slice(0, 6);
      results = [...symbolResults, ...eqCategoryResults, ...eqResults];
    }
    setTriggerPos(backslashIdx);
    setSuggestions(results);
    setSelectedIndex(-1);
  }, [mode, reset]);

  /**
   * Accept whatever item is currently selected.
   * - Category item → drill in and show all symbols in that category.
   * - Symbol item   → insert the symbol, close dropdown.
   *
   * Returns { newValue, newCursor } for symbol inserts, or null for category drill-in.
   */
  const acceptItem = useCallback((value, cursorPos, item) => {
    if (item.type === "category") {
      const items = item.section === "equations"
        ? equationsByDomain[item.category]
        : getSymbolsByCategory(item.category).map(s => ({ type: "symbol", ...s }));
      prevSuggestionsRef.current = suggestions;
      setMode("category");
      setActiveCategory(item.category);
      setSuggestions(items);
      setSelectedIndex(-1);
      return null;
    }

    if (item.type === "equation") {
      reset();
      return { newValue: value, newCursor: cursorPos, equation: item };
    }

    // Symbol insert
    const tp = triggerPosRef.current;
    if (tp === null) return { newValue: value, newCursor: cursorPos };
    const before = value.slice(0, tp);
    const after = value.slice(cursorPos);
    const newValue = before + item.symbol + after;
    const newCursor = tp + item.symbol.length;
    reset();
    return { newValue, newCursor };
  }, [reset, suggestions]);

  /**
   * Keyboard handler. Returns true if event was consumed.
   */
  const onKeyDown = useCallback((e, value, cursorPos, onAccept) => {
    if (suggestions.length === 0) return false;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(i => Math.min(i + 1, suggestions.length - 1));
      return true;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(i => Math.max(i - 1, 0));
      return true;
    }
    if (e.key === "PageDown") {
      e.preventDefault();
      setSelectedIndex(i => Math.min(i + 8, suggestions.length - 1));
      return true;
    }
    if (e.key === "PageUp") {
      e.preventDefault();
      setSelectedIndex(i => Math.max(i - 8, 0));
      return true;
    }
    if (e.key === "Home") {
      e.preventDefault();
      setSelectedIndex(0);
      return true;
    }
    if (e.key === "End") {
      e.preventDefault();
      setSelectedIndex(suggestions.length - 1);
      return true;
    }
    if (e.key === "ArrowRight" || (e.key === "Enter" && suggestions[selectedIndex >= 0 ? selectedIndex : 0]?.type === "category")) {
      const idx = selectedIndex >= 0 ? selectedIndex : 0;
      if (suggestions[idx]?.type === "category") {
        e.preventDefault();
        onAccept(suggestions[idx]);
        return true;
      }
    }
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      const idx = selectedIndex >= 0 ? selectedIndex : 0;
      onAccept(suggestions[idx]);
      return true;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      goBack();
      return true;
    }
    if (e.key === "ArrowLeft" && mode === "category") {
      e.preventDefault();
      goBack();
      return true;
    }
    // Backspace in category mode → go back to parent list
    if (e.key === "Backspace" && mode === "category") {
      goBack();
      return false; // let textarea handle the backspace
    }
    return false;
  }, [suggestions, selectedIndex, mode, reset, goBack]);

  return {
    suggestions,
    selectedIndex,
    setSelectedIndex,
    onValueChange,
    acceptItem,
    onKeyDown,
    reset,
    isOpen: suggestions.length > 0,
    mode,
    activeCategory,
  };
}
