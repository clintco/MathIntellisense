import { useRef, useEffect } from "react";
import {
  Toolbar,
  ToolbarButton,
  Tooltip,
} from "@fluentui/react-components";
import { MicRegular } from "@fluentui/react-icons";
import "./EditorToolbar.css";

export const SYMBOL_ITEMS = [
  { id: "leq",      accessKey: "0", label: "Less than or equal to",    display: <>&#x2264;</>, symbol: "≤" },
  { id: "geq",      accessKey: "1", label: "Greater than or equal to", display: <>&#x2265;</>, symbol: "≥" },
  { id: "sqrt",     accessKey: "2", label: "Square root",              display: <>&#x221A;</>, symbol: "√" },
  { id: "pi",       accessKey: "3", label: "Pi",                       display: <>&#x03C0;</>, symbol: "π" },
  { id: "infinity", accessKey: "4", label: "Infinity",                 display: <>&#x221E;</>, symbol: "∞" },
  { id: "approx",   accessKey: "5", label: "Approximately equal to",   display: <>&#x2248;</>, symbol: "≈" },
  { id: "sum",      accessKey: "6", label: "Summation",                display: <>&#x2211;</>, symbol: "∑" },
  { id: "integral", accessKey: "7", label: "Integral",                 display: <>&#x222B;</>, symbol: "∫" },
  { id: "emptyset", accessKey: "8", label: "Empty set",                display: <>&#x2205;</>, symbol: "∅" },
  { id: "neq",      accessKey: "9", label: "Not equal to",             display: <>&#x2260;</>, symbol: "≠" },
];

export const TOOLBAR_BUTTON_COUNT = 1 + SYMBOL_ITEMS.length;

/** Parse a MathML string and return an inline <math> element. */
function parseMathML(mathmlString) {
  const tmp = document.createElement("div");
  tmp.innerHTML = mathmlString;
  const math = tmp.querySelector("math");
  if (math) math.setAttribute("display", "inline");
  return math;
}

export function EditorToolbar({ editorRef, onInsert, onDictate, highlightIndex = -1 }) {
  const wrapperRef = useRef(null);

  // Drive visual focus ring from highlightIndex prop; DOM focus stays on the editor.
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    wrapper.querySelectorAll("[data-toolbar-focus]").forEach(b => b.removeAttribute("data-toolbar-focus"));
    if (highlightIndex >= 0) {
      const btn = wrapper.querySelector(`[data-toolbar-index="${highlightIndex}"]`);
      if (btn) btn.setAttribute("data-toolbar-focus", "");
    }
  }, [highlightIndex]);

  function handleItemClick(item) {
    if (item.symbol) {
      onInsert({ type: "symbol", symbol: item.symbol });
    } else if (item.mathml) {
      const el = parseMathML(item.mathml);
      if (el) onInsert({ type: "mathml", element: el, cursorSlot: item.cursorSlot });
    }
    editorRef.current?.focus();
  }

  return (
    <div ref={wrapperRef} id="editor-toolbar-container">
      <Toolbar
        className="editor-toolbar"
        aria-label="Math symbols"
        size="small"
      >
        <Tooltip content="Dictate" relationship="label" showDelay={300}>
          <ToolbarButton
            id="toolbar-btn-0"
            data-toolbar-index={0}
            aria-label="Dictate"
            className="toolbar-btn--dictate"
            icon={<MicRegular />}
            onMouseDown={e => { e.preventDefault(); onDictate?.(); }}
            onClick={() => onDictate?.()}
          />
        </Tooltip>

        {SYMBOL_ITEMS.map((item, i) => (
          <Tooltip key={item.id} content={item.label} relationship="label" showDelay={300}>
            <ToolbarButton
              id={`toolbar-btn-${i + 1}`}
              data-toolbar-index={i + 1}
              aria-label={item.label}
              className="toolbar-btn--symbol"
              icon={<span aria-hidden="true" className="toolbar-symbol">{item.display}</span>}
              onMouseDown={e => { e.preventDefault(); handleItemClick(item); }}
              onClick={() => handleItemClick(item)}
            />
          </Tooltip>
        ))}
      </Toolbar>
    </div>
  );
}
