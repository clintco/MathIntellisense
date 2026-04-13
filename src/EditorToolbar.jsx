import {
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  Tooltip,
} from "@fluentui/react-components";
import { MicRegular } from "@fluentui/react-icons";
import "./EditorToolbar.css";

const SYMBOL_ITEMS = [
  {
    id: "superscript",
    label: "Superscript",
    display: <>x<sup>n</sup></>,
    mathml: `<math><msup><mi>x</mi><mi>&#x25A1;</mi></msup></math>`,
    cursorSlot: 1,
  },
  {
    id: "subscript",
    label: "Subscript",
    display: <>x<sub>n</sub></>,
    mathml: `<math><msub><mi>x</mi><mi>&#x25A1;</mi></msub></math>`,
    cursorSlot: 1,
  },
  {
    id: "fraction",
    label: "Fraction",
    display: <span className="toolbar-fraction"><span>x</span><span>y</span></span>,
    mathml: `<math><mfrac><mi>&#x25A1;</mi><mi>&#x25A1;</mi></mfrac></math>`,
    cursorSlot: 0,
  },
  {
    id: "sqrt",
    label: "Square root",
    display: <>&#x221A;x</>,
    mathml: `<math><msqrt><mi>&#x25A1;</mi></msqrt></math>`,
    cursorSlot: 0,
  },
  {
    id: "sum",
    label: "Summation",
    display: <>&#x2211;</>,
    symbol: "∑",
  },
  {
    id: "integral",
    label: "Integral",
    display: <>&#x222B;</>,
    symbol: "∫",
  },
  {
    id: "pi",
    label: "Pi",
    display: <>&#x03C0;</>,
    symbol: "π",
  },
  {
    id: "infinity",
    label: "Infinity",
    display: <>&#x221E;</>,
    symbol: "∞",
  },
  {
    id: "leq",
    label: "Less than or equal to",
    display: <>&#x2264;</>,
    symbol: "≤",
  },
  {
    id: "geq",
    label: "Greater than or equal to",
    display: <>&#x2265;</>,
    symbol: "≥",
  },
];

/** Parse a MathML string and return an inline <math> element. */
function parseMathML(mathmlString) {
  const tmp = document.createElement("div");
  tmp.innerHTML = mathmlString;
  const math = tmp.querySelector("math");
  if (math) math.setAttribute("display", "inline");
  return math;
}

export function EditorToolbar({ editorRef, listRef, onInsert, onDictate, onReturnToList }) {
  function handleItemClick(item) {
    if (item.symbol) {
      onInsert({ type: "symbol", symbol: item.symbol });
    } else if (item.mathml) {
      const el = parseMathML(item.mathml);
      if (el) onInsert({ type: "mathml", element: el, cursorSlot: item.cursorSlot });
    }
    editorRef.current?.focus();
  }

  function handleToolbarKeyDown(e) {
    if (e.key === "Tab" && !e.shiftKey) {
      e.preventDefault();
      onReturnToList ? onReturnToList() : editorRef.current?.focus();
    } else if (e.key === "Escape") {
      e.preventDefault();
      editorRef.current?.focus();
    }
  }

  return (
    <Toolbar
      className="editor-toolbar"
      aria-label="Math symbols"
      size="small"
      onKeyDownCapture={handleToolbarKeyDown}
    >
      <Tooltip content="Dictate" relationship="label" showDelay={300}>
        <ToolbarButton
          id="toolbar-dictate-btn"
          className="toolbar-btn--dictate"
          icon={<MicRegular />}
          onMouseDown={e => { e.preventDefault(); onDictate?.(); }}
          onClick={() => onDictate?.()}
        />
      </Tooltip>

      {SYMBOL_ITEMS.map(item => (
        <Tooltip key={item.id} content={item.label} relationship="label" showDelay={300}>
          <ToolbarButton
            className="toolbar-btn--symbol"
            icon={<span aria-hidden="true" className="toolbar-symbol">{item.display}</span>}
            onMouseDown={e => { e.preventDefault(); handleItemClick(item); }}
            onClick={() => handleItemClick(item)}
          />
        </Tooltip>
      ))}
    </Toolbar>
  );
}
