import { useRef, useState, useCallback, useEffect } from "react";
import { mathSymbols, applyAutocorrect } from "./mathSymbols";
import { mathEquations } from "./mathEquations";

const MAX_RESULTS = 10;

function extractLatex(mathml) {
  const match = mathml?.match(/encoding="application\/x-tex">([^<]+)<\/annotation>/);
  return match ? match[1] : null;
}

const allEquationItems = mathEquations
  .filter(e => e.mathml)
  .map(e => ({ type: "equation", ...e, latex: extractLatex(e.mathml) }));

function search(query) {
  if (!query) return [];
  const q = query.toLowerCase();
  const symbols = mathSymbols
    .filter(s => s.code.startsWith(q) || s.aliases.some(a => a.startsWith(q)))
    .slice(0, MAX_RESULTS);
  const equations = allEquationItems
    .filter(e => e.name.toLowerCase().includes(q))
    .slice(0, 6);
  return [...symbols, ...equations];
}

function getCaretPixelPos(textarea, anchorPos) {
  const ta = textarea;
  const style = window.getComputedStyle(ta);
  const mirror = document.createElement("div");
  const copyProps = [
    "boxSizing", "width",
    "paddingTop", "paddingRight", "paddingBottom", "paddingLeft",
    "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth",
    "fontFamily", "fontSize", "fontStyle", "fontWeight", "fontVariant",
    "fontStretch", "lineHeight", "letterSpacing", "wordSpacing",
    "textAlign", "textTransform", "textIndent", "textDecoration",
    "overflowX",
  ];
  copyProps.forEach(p => { mirror.style[p] = style[p]; });
  mirror.style.position = "absolute";
  mirror.style.top = "0";
  mirror.style.left = "0";
  mirror.style.visibility = "hidden";
  mirror.style.whiteSpace = "pre-wrap";
  mirror.style.wordBreak = "break-word";
  mirror.style.overflowY = "hidden";
  mirror.style.height = "auto";

  const pos = anchorPos ?? ta.selectionStart;
  mirror.textContent = ta.value.slice(0, pos);
  const marker = document.createElement("span");
  marker.textContent = "\u200b";
  mirror.appendChild(marker);
  ta.parentElement.appendChild(mirror);
  const markerRect = marker.getBoundingClientRect();
  ta.parentElement.removeChild(mirror);

  const lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.6;
  return { top: markerRect.top + lineHeight + 8, left: markerRect.left };
}

export default function SimpleApp() {
  const textareaRef = useRef(null);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [caretPos, setCaretPos] = useState({ top: 0, left: 0 });
  const triggerPosRef = useRef(null);

  const handleChange = useCallback((e) => {
    const newValue = e.target.value;
    const cursor = e.target.selectionStart;
    setValue(newValue);

    let query = null;
    let backslashPos = null;
    for (let i = cursor - 1; i >= 0; i--) {
      if (newValue[i] === "\\") { query = newValue.slice(i + 1, cursor); backslashPos = i; break; }
      if (/\s/.test(newValue[i])) break;
    }

    if (query !== null) {
      triggerPosRef.current = backslashPos;
      setSuggestions(search(query));
      setSelectedIndex(0);
      setCaretPos(getCaretPixelPos(e.target, backslashPos));
    } else {
      triggerPosRef.current = null;
      setSuggestions([]);
    }
  }, []);

  const acceptItem = useCallback((item) => {
    const ta = textareaRef.current;
    if (!ta || triggerPosRef.current === null) return;
    const cursor = ta.selectionStart;
    const before = value.slice(0, triggerPosRef.current);
    const after = value.slice(cursor);
    const insert = item.type === "equation" ? (item.latex ?? item.name) : item.symbol;
    const newValue = before + insert + after;
    const newCursor = before.length + insert.length;
    setValue(newValue);
    setSuggestions([]);
    triggerPosRef.current = null;
    requestAnimationFrame(() => {
      ta.selectionStart = newCursor;
      ta.selectionEnd = newCursor;
    });
  }, [value]);

  const handleKeyDown = useCallback((e) => {
    if (suggestions.length) {
      if (e.key === "ArrowDown") { e.preventDefault(); setSelectedIndex(i => Math.min(i + 1, suggestions.length - 1)); return; }
      if (e.key === "ArrowUp") { e.preventDefault(); setSelectedIndex(i => Math.max(i - 1, 0)); return; }
      if (e.key === "Enter" || e.key === "Tab") { e.preventDefault(); acceptItem(suggestions[selectedIndex]); return; }
      if (e.key === "Escape") { setSuggestions([]); return; }
    }

    if (e.key === " " || e.key === "\\") {
      const ta = textareaRef.current;
      const result = applyAutocorrect(value, ta.selectionStart, e.key === "\\");
      if (result) {
        e.preventDefault();
        setValue(result.newValue);
        setSuggestions([]);
        triggerPosRef.current = e.key === "\\" ? result.newCursor - 1 : null;
        requestAnimationFrame(() => {
          ta.selectionStart = result.newCursor;
          ta.selectionEnd = result.newCursor;
        });
      }
    }
  }, [suggestions, selectedIndex, acceptItem, value]);

  const isOpen = suggestions.length > 0;
  const activeOptionId = isOpen ? `simple-option-${selectedIndex}` : undefined;

  // Announce selected item via ariaNotify (Edge 136+)
  useEffect(() => {
    if (!isOpen || !suggestions[selectedIndex]) return;
    const item = suggestions[selectedIndex];
    const msg = item.type === "equation"
      ? `${item.name}, ${item.domain}`
      : `${item.symbol} ${item.name}, backslash ${item.code}`;
    if (typeof document.ariaNotify === "function") {
      document.ariaNotify(msg);
    }
  }, [selectedIndex, isOpen, suggestions]);

  return (
    <div role="application" aria-label="Math Intellisense Simple" style={{ padding: "24px", fontFamily: "system-ui, sans-serif", background: "#1e1e2e", minHeight: "100vh", color: "#cdd6f4" }}>
      <header style={{ marginBottom: "16px" }}>
        <h1 style={{ margin: 0, fontSize: "20px" }}>Math Intellisense — Simple</h1>
        <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#6c7086" }}>
          Type <kbd style={kbdStyle}>\</kbd> followed by a code to insert a math symbol. &nbsp;
          <a href="/" style={{ color: "#89b4fa" }}>← Full version</a>
        </p>
      </header>

      <div role="application" aria-label="Math symbol editor" style={{ position: "relative" }}>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={"Type \\alpha, \\pm, \\sum..."}
          autoFocus
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          role="combobox"
          aria-label="Math symbol editor"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-autocomplete="list"
          aria-controls="simple-listbox"
          aria-activedescendant={activeOptionId}
          style={{
            width: "100%", height: "200px", boxSizing: "border-box",
            background: "#181825", color: "#cdd6f4",
            border: "1px solid #313244", borderRadius: "8px",
            padding: "16px", fontSize: "16px", lineHeight: "1.6",
            fontFamily: "'JetBrains Mono', 'Cascadia Code', monospace",
            resize: "none", outline: "none",
          }}
        />

        <ul
          id="simple-listbox"
          role="listbox"
          aria-label="Math symbol suggestions"
          style={{
            display: isOpen ? undefined : "none",
            position: "fixed",
            top: caretPos.top,
            left: caretPos.left,
            margin: 0, padding: "4px 0",
            listStyle: "none",
            background: "#1e1e2e",
            border: "1px solid #45475a",
            borderRadius: "6px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.6)",
            zIndex: 1000,
            minWidth: "220px",
          }}
        >
          {suggestions.map((item, idx) => (
            <li
              key={item.type === "equation" ? `eq-${item.name}` : item.code}
              id={`simple-option-${idx}`}
              role="option"
              aria-selected={idx === selectedIndex}
              aria-label={item.type === "equation" ? `${item.name}, ${item.domain}` : `${item.symbol} backslash ${item.code}`}
              onMouseEnter={() => setSelectedIndex(idx)}
              onMouseDown={(e) => { e.preventDefault(); acceptItem(item); }}
              style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "5px 12px", cursor: "pointer",
                background: idx === selectedIndex ? "#3b4261" : "transparent",
                fontSize: "13px",
              }}
            >
              {item.type === "equation" ? (
                <>
                  <span style={{ flex: 1, color: "#cdd6f4", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.name}</span>
                  <span style={{ fontSize: "10px", color: "#9399b2", flexShrink: 0 }}>{item.domain}</span>
                </>
              ) : (
                <>
                  <span style={{ fontSize: "18px", width: "24px", textAlign: "center", color: "#cdd6f4" }}>{item.symbol}</span>
                  <span style={{ fontFamily: "'Cascadia Code', monospace", color: "#89b4fa" }}>\{item.code}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const kbdStyle = {
  display: "inline-block", padding: "0 4px",
  background: "#313244", border: "1px solid #45475a",
  borderRadius: "3px", fontSize: "11px", color: "#cdd6f4",
};
