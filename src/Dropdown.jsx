import { useEffect, useRef } from "react";
import { EditorToolbar } from "./EditorToolbar";
import "./Dropdown.css";

function HighlightedLabel({ text, query }) {
  if (!query) return <span>{text}</span>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <span>{text}</span>;
  return (
    <span>
      {text.slice(0, idx)}
      <mark className="match">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </span>
  );
}

export function Dropdown({ suggestions, selectedIndex, onSelect, onHover, position, mode, activeCategory, query, unit = "symbols", editorRef, onInsert, onDictate, onReturnToList, onGoBack }) {
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll("[data-item]");
    items[selectedIndex]?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  if (!suggestions.length) {
    return <ul id="math-symbol-menu" role="menu" aria-label="Math symbol suggestions" style={{ display: "none" }} />;
  }

  return (
    <div className="dropdown" style={{ top: position.top, left: position.left }} onMouseDown={(e) => e.preventDefault()}>
      <div className="dropdown-header">
        <EditorToolbar editorRef={editorRef} listRef={listRef} onInsert={onInsert} onDictate={onDictate} onReturnToList={onReturnToList} />
      </div>

      {mode === "category" && activeCategory && (
        <div
          className="dropdown-breadcrumb"
          role="button"
          tabIndex={-1}
          aria-label={`Back to list, currently in ${activeCategory}`}
          onMouseDown={(e) => { e.preventDefault(); onGoBack?.(); }}
        >
          <span className="breadcrumb-back">←</span>
          <span className="breadcrumb-cat">{activeCategory}</span>
          <span className="breadcrumb-count">{suggestions.length}</span>
        </div>
      )}

      <ul ref={listRef} id="math-symbol-menu" className="dropdown-list" role="menu" aria-label="Math symbol suggestions">
        {suggestions.flatMap((item, idx) => {
          const el = item.type === "category"
            ? (
              <li
                key={`${item.section ?? "unicode"}-${item.category}`}
                id={`math-option-${idx}`}
                data-item
                role="menuitem"
                aria-label={`${item.category}, ${item.count} ${item.section === "equations" ? "equations" : "symbols"}`}
                className={`dropdown-item dropdown-item--category${idx === selectedIndex ? " selected" : ""}`}
                onMouseEnter={() => onHover(idx)}
                onMouseDown={(e) => { e.preventDefault(); onSelect(item); }}
              >
                <span className="item-icon" style={item.section === "equations" ? { filter: "sepia(1) saturate(4) hue-rotate(90deg)" } : undefined}>📁</span>
                <span className="item-label">
                  <HighlightedLabel text={item.category} query={query} />
                </span>
                <span className="item-count">{item.count} {item.section === "equations" ? "equations" : "symbols"}</span>
                <span className="item-chevron" aria-hidden="true">›</span>
              </li>
            )
            : item.type === "equation"
            ? (
              <li
                key={item.name}
                id={`math-option-${idx}`}
                data-item
                role="menuitem"
                aria-label={`${item.name}, ${item.domain}`}
                className={`dropdown-item dropdown-item--equation${idx === selectedIndex ? " selected" : ""}`}
                onMouseEnter={() => onHover(idx)}
                onMouseDown={(e) => { e.preventDefault(); onSelect(item); }}
              >
                <span className="item-eq-name">
                  <HighlightedLabel text={item.name} query={query} />
                </span>
                <span className="item-cat">{item.domain}</span>
              </li>
            )
            : (
              <li
                key={item.code}
                id={`math-option-${idx}`}
                data-item
                role="menuitem"
                aria-label={`${item.symbol} ${item.name}, code backslash ${item.code}, ${item.category}`}
                className={`dropdown-item${idx === selectedIndex ? " selected" : ""}`}
                onMouseEnter={() => onHover(idx)}
                onMouseDown={(e) => { e.preventDefault(); onSelect(item); }}
              >
                <span className="item-symbol">{item.symbol}</span>
                <span className="item-body">
                  <span className="item-code">
                    \<HighlightedLabel
                      text={item.code}
                      query={item.matchOn === "code" ? query : null}
                    />
                  </span>
                  <span className="item-name">
                    <HighlightedLabel
                      text={item.name}
                      query={item.matchOn === "name" ? query : null}
                    />
                  </span>
                </span>
                <span className="item-cat">{item.category}</span>
              </li>
            );
          // Separator between the two sections — placed before whichever section comes second
          const prevSection = suggestions[idx - 1]?.section;
          const sep = (mode === "search" && prevSection && item.section && item.section !== prevSection)
            ? <li key="__sep" className="dropdown-separator" role="separator" aria-hidden="true" />
            : null;
          return sep ? [sep, el] : el;
        })}
      </ul>

    </div>
  );
}
