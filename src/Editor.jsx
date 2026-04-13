import { useRef, useCallback, useState, useEffect } from "react";
import { useIntellisense } from "./useIntellisense";
import { Dropdown } from "./Dropdown";
import { applyAutocorrect } from "./mathSymbols";
import "./Editor.css";

/** Pixel position of the caret using the Selection API. */
function getCaretPixelPos() {
  const sel = window.getSelection();
  if (!sel?.rangeCount) return { top: 0, left: 0 };
  const rect = sel.getRangeAt(0).getBoundingClientRect();
  return { top: rect.bottom + 8, left: rect.left };
}

/**
 * Returns the text node at the cursor and the \ trigger index within it,
 * or null if the cursor is not inside a text node with an active \ trigger.
 */
function getCaretTextContext() {
  const sel = window.getSelection();
  if (!sel?.rangeCount) return null;
  const range = sel.getRangeAt(0);
  if (range.startContainer.nodeType !== Node.TEXT_NODE) return null;
  const textNode = range.startContainer;
  const offset = range.startOffset;
  const textBefore = textNode.textContent.slice(0, offset);
  let backslashIdx = -1;
  for (let i = textBefore.length - 1; i >= 0; i--) {
    if (textBefore[i] === "\\") { backslashIdx = i; break; }
    if (/\s/.test(textBefore[i])) break;
  }
  return { textNode, offset, textBefore, backslashIdx };
}

/** Parse a MathML string into an inline <math> DOM element. */
function parseMathML(mathmlString) {
  const tmp = document.createElement("div");
  tmp.innerHTML = mathmlString;
  const math = tmp.querySelector("math");
  if (math) math.setAttribute("display", "inline");
  return math;
}

export function Editor({ onChange }) {
  const divRef = useRef(null);
  const [caretPos, setCaretPos] = useState({ top: 0, left: 0 });
  const [query, setQuery] = useState("");
  const triggerRef = useRef(null); // { node: TextNode, offset: number } of the \ trigger

  const is = useIntellisense();
  const { suggestions, selectedIndex, setSelectedIndex, isOpen, mode, activeCategory, reset: resetIS } = is;
  const [hideActiveDescendant, setHideActiveDescendant] = useState(false);

  // Auto-focus on mount
  useEffect(() => { divRef.current?.focus(); }, []);

  /** Replace \query with content (string → text, Element → MathML). */
  const insertAtTrigger = useCallback((content) => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const { node, offset: triggerOffset } = trigger;
    const sel = window.getSelection();
    if (!sel?.rangeCount) return;
    const cursorOffset = sel.getRangeAt(0).startOffset;
    const before = node.textContent.slice(0, triggerOffset);
    const after = node.textContent.slice(cursorOffset);
    const parent = node.parentNode;

    if (typeof content === "string") {
      node.textContent = before + content + after;
      const range = document.createRange();
      range.setStart(node, before.length + content.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    } else {
      // MathML element: split the text node around it
      const beforeNode = document.createTextNode(before);
      const afterNode = document.createTextNode(after);
      parent.insertBefore(beforeNode, node);
      parent.insertBefore(content, node);
      parent.insertBefore(afterNode, node);
      parent.removeChild(node);
      // Place cursor at the start of the after-node
      const range = document.createRange();
      range.setStart(afterNode, 0);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    triggerRef.current = null;
  }, []);

  const handleInput = useCallback(() => {
    const div = divRef.current;
    const ctx = getCaretTextContext();
    if (!ctx || ctx.backslashIdx === -1) {
      resetIS();
      triggerRef.current = null;
      setQuery("");
    } else {
      triggerRef.current = { node: ctx.textNode, offset: ctx.backslashIdx };
      const q = ctx.textBefore.slice(ctx.backslashIdx + 1);
      setQuery(q);
      is.onValueChange(ctx.textNode.textContent, ctx.offset, div.textContent);
      setCaretPos(getCaretPixelPos());
    }
    onChange?.(div.innerHTML);
  }, [is, resetIS, onChange]);

  const handleAccept = useCallback((item) => {
    if (item.type === "category") {
      const ctx = getCaretTextContext();
      is.acceptItem(ctx?.textNode.textContent ?? "", ctx?.offset ?? 0, item);
      return;
    }
    if (item.type === "equation") {
      const mathEl = parseMathML(item.mathml);
      if (mathEl) {
        insertAtTrigger(mathEl);
        const sel = window.getSelection();
        if (sel?.rangeCount) {
          const range = sel.getRangeAt(0);
          const br = document.createElement("br");
          range.insertNode(br);
          range.setStartAfter(br);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
      resetIS();
    } else {
      insertAtTrigger(item.symbol);
      resetIS();
    }
    setQuery("");
    onChange?.(divRef.current.innerHTML);
  }, [is, resetIS, insertAtTrigger, onChange]);

  const handleKeyDown = useCallback((e) => {
    const div = divRef.current;

    // Clear aria-activedescendant when moving the text cursor so NVDA/JAWS
    // can read the input value instead of the focused list item (FluentUI pattern)
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setHideActiveDescendant(true);
    } else {
      setHideActiveDescendant(false);
    }

    if (e.key === "Tab" && e.shiftKey && isOpen) {
      e.preventDefault();
      setSelectedIndex(-1);
      document.getElementById("toolbar-dictate-btn")?.focus();
      return;
    }

    is.onKeyDown(e, "", 0, handleAccept);

    // Autocorrect
    if ((e.key === " " || e.key === "\\") && !e.defaultPrevented) {
      const ctx = getCaretTextContext();
      if (ctx) {
        const result = applyAutocorrect(ctx.textNode.textContent, ctx.offset, e.key === "\\");
        if (result) {
          e.preventDefault();
          ctx.textNode.textContent = result.newValue;
          const sel = window.getSelection();
          const range = document.createRange();
          range.setStart(ctx.textNode, result.newCursor);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
          resetIS();
          setQuery("");
          onChange?.(div.innerHTML);
          // Re-trigger search if backslash was appended (chaining)
          if (e.key === "\\") {
            const newCtx = getCaretTextContext();
            if (newCtx?.backslashIdx !== -1) {
              triggerRef.current = { node: newCtx.textNode, offset: newCtx.backslashIdx };
              is.onValueChange(newCtx.textNode.textContent, newCtx.offset);
              setCaretPos(getCaretPixelPos());
            }
          }
        }
      }
    }
  }, [is, resetIS, handleAccept, onChange]);

  const handleToolbarInsert = useCallback(({ type, symbol, element, cursorSlot }) => {
    const div = divRef.current;
    if (!div) return;

    if (type === "symbol") {
      // insertAtTrigger replaces \query with the symbol when a trigger is active;
      // falls back to a no-op if triggerRef is null, so insert directly in that case.
      if (triggerRef.current) {
        insertAtTrigger(symbol);
      } else {
        const sel = window.getSelection();
        if (!sel?.rangeCount || !div.contains(sel.getRangeAt(0).commonAncestorContainer)) {
          const range = document.createRange();
          range.selectNodeContents(div);
          range.collapse(false);
          sel.removeAllRanges();
          sel.addRange(range);
        }
        const range = sel.getRangeAt(0);
        range.deleteContents();
        const textNode = document.createTextNode(symbol);
        range.insertNode(textNode);
        range.setStartAfter(textNode);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    } else if (type === "mathml" && element) {
      if (triggerRef.current) {
        insertAtTrigger(element);
      } else {
        const sel = window.getSelection();
        if (!sel?.rangeCount || !div.contains(sel.getRangeAt(0).commonAncestorContainer)) {
          const range = document.createRange();
          range.selectNodeContents(div);
          range.collapse(false);
          sel.removeAllRanges();
          sel.addRange(range);
        }
        const range = sel.getRangeAt(0);
        range.deleteContents();
        range.insertNode(element);
      }
      // Place cursor inside the requested slot
      const slots = element.querySelectorAll("mi");
      const slot = slots[cursorSlot ?? 0];
      if (slot) {
        const sel = window.getSelection();
        const r = document.createRange();
        r.selectNodeContents(slot);
        r.collapse(false);
        sel.removeAllRanges();
        sel.addRange(r);
      }
    }

    resetIS();
    setQuery("");
    onChange?.(div.innerHTML);
  }, [onChange, resetIS, insertAtTrigger]);

  const handleReturnToList = useCallback(() => {
    setSelectedIndex(0);
    divRef.current?.focus();
  }, [setSelectedIndex]);

  const activeOptionId = isOpen && selectedIndex >= 0 && !hideActiveDescendant ? `math-option-${selectedIndex}` : undefined;



  return (
    <div className="editor-wrapper">
      <div
        ref={divRef}
        className="editor-textarea"
        contentEditable="true"
        suppressContentEditableWarning={true}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        role="textbox"
        aria-multiline="true"
        aria-label="Math editor"
        aria-expanded={isOpen}
        aria-owns={isOpen ? "math-symbol-menu" : undefined}
        aria-controls="math-symbol-menu"
        aria-activedescendant={activeOptionId}
        spellCheck={false}
        data-placeholder="Type \ for symbols and equations"
      />
      <Dropdown
        suggestions={suggestions}
        selectedIndex={selectedIndex}
        position={caretPos}
        mode={mode}
        activeCategory={activeCategory}
        query={query}
        onSelect={handleAccept}
        onHover={setSelectedIndex}
        editorRef={divRef}
        onInsert={handleToolbarInsert}
        onReturnToList={handleReturnToList}
      />
    </div>
  );
}
