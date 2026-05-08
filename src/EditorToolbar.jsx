import { useRef, useEffect } from "react";
import {
  Toolbar,
  ToolbarButton,
  Tooltip,
} from "@fluentui/react-components";
import { MicRegular } from "@fluentui/react-icons";
import "./EditorToolbar.css";

export const SYMBOL_ITEMS = [
  {
    id: "superscript",
    accessKey: "0",
    label: "Superscript",
    display: <>x<sup>n</sup></>,
    mathml: `<math><msup><mi>x</mi><mi>&#x25A1;</mi></msup></math>`,
    cursorSlot: 1,
  },
  {
    id: "subscript",
    accessKey: "1",
    label: "Subscript",
    display: <>x<sub>n</sub></>,
    mathml: `<math><msub><mi>x</mi><mi>&#x25A1;</mi></msub></math>`,
    cursorSlot: 1,
  },
  {
    id: "fraction",
    accessKey: "2",
    label: "Fraction",
    display: <span className="toolbar-fraction"><span>x</span><span>y</span></span>,
    mathml: `<math><mfrac><mi>&#x25A1;</mi><mi>&#x25A1;</mi></mfrac></math>`,
    cursorSlot: 0,
  },
  {
    id: "sqrt",
    accessKey: "3",
    label: "Square root",
    display: <>&#x221A;x</>,
    mathml: `<math><msqrt><mi>&#x25A1;</mi></msqrt></math>`,
    cursorSlot: 0,
  },
  {
    id: "sum",
    accessKey: "4",
    label: "Summation",
    display: <>&#x2211;</>,
    symbol: "∑",
  },
  {
    id: "integral",
    accessKey: "5",
    label: "Integral",
    display: <>&#x222B;</>,
    symbol: "∫",
  },
  {
    id: "pi",
    accessKey: "6",
    label: "Pi",
    display: <>&#x03C0;</>,
    symbol: "π",
  },
  {
    id: "infinity",
    accessKey: "7",
    label: "Infinity",
    display: <>&#x221E;</>,
    symbol: "∞",
  },
  {
    id: "leq",
    accessKey: "8",
    label: "Less than or equal to",
    display: <>&#x2264;</>,
    symbol: "≤",
  },
  {
    id: "geq",
    accessKey: "9",
    label: "Greater than or equal to",
    display: <>&#x2265;</>,
    symbol: "≥",
  },
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
