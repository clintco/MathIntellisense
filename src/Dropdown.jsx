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

export function Dropdown({ suggestions, selectedIndex, onSelect, onHover, position, mode, activeCategory, query, unit = "symbols", editorRef, onInsert, onDictate, onGoBack, toolbarHighlightIndex = -1 }) {
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current || selectedIndex < 0) return;
    const items = listRef.current.querySelectorAll("[data-item]");
    const item = items[selectedIndex];
    if (!item) return;
    const list = listRef.current;
    const listRect = list.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    if (itemRect.top < listRect.top) {
      list.scrollTop -= listRect.top - itemRect.top;
    } else if (itemRect.bottom > listRect.bottom) {
      list.scrollTop += itemRect.bottom - listRect.bottom;
    }
  }, [selectedIndex, mode]);

  const hasItems = suggestions.length > 0;

  return (
    <div
      role="presentation"
      className="dropdown"
      style={hasItems ? { top: position.top, left: position.left } : { display: "none" }}
      aria-hidden={!hasItems}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="dropdown-header">
        <EditorToolbar editorRef={editorRef} onInsert={onInsert} onDictate={onDictate} highlightIndex={toolbarHighlightIndex} />
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
          // Separator between sections, and between pinned vs unpinned categories within a section
          const prev = suggestions[idx - 1];
          const crossesSection = mode === "search" && prev?.section && item.section && prev.section !== item.section;
          const crossesPinBoundary = prev?.section === item.section && prev?.pinned && item.pinned === false;
          const sep = (crossesSection || crossesPinBoundary)
            ? <li key={`__sep-${idx}`} className="dropdown-separator" role="separator" aria-hidden="true" />
            : null;
          return sep ? [sep, el] : el;
        })}
      </ul>

    </div>
  );
}
