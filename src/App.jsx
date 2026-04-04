import { useState } from "react";
import { Editor } from "./Editor";
import { allCategories } from "./mathSymbols";
import "./App.css";

export default function App() {
  const [, setText] = useState("");

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Math Intellisense</h1>
        <p className="app-subtitle">
          Type <kbd>\</kbd> followed by a symbol name, alias, or category to insert unicode math symbols
          &nbsp;·&nbsp; <a href="/simple.html" style={{ color: "#89b4fa" }}>Simple version →</a>
        </p>
      </header>

      <main className="app-main">
        <Editor onChange={setText} />

        <aside className="app-sidebar">
          <section className="sidebar-section">
            <h2>How to use</h2>
            <ul>
              <li>Type <kbd>\</kbd> to open intellisense</li>
              <li>By code: <kbd>\pm</kbd> → ±</li>
              <li>By name: <kbd>\plus minus</kbd></li>
              <li>By category: <kbd>\greek</kbd>, <kbd>\equations</kbd></li>
              <li><kbd>↑</kbd> <kbd>↓</kbd> to navigate</li>
              <li><kbd>Enter</kbd> or <kbd>Tab</kbd> to insert</li>
              <li><kbd>Esc</kbd> to dismiss</li>
            </ul>
          </section>

          <section className="sidebar-section">
            <h2>Quick examples</h2>
            <div className="examples">
              {[
                ["\\alpha", "α"], ["\\beta", "β"], ["\\sum", "∑"],
                ["\\int", "∫"], ["\\infty", "∞"], ["\\pm", "±"],
                ["\\leq", "≤"], ["\\in", "∈"], ["\\forall", "∀"],
                ["\\Rightarrow", "⇒"], ["\\nabla", "∇"], ["\\pi", "π"],
              ].map(([code, sym]) => (
                <span key={code} className="example-chip">
                  <span className="example-code">{code}</span>
                  <span className="example-sym">{sym}</span>
                </span>
              ))}
            </div>
          </section>

          <section className="sidebar-section">
            <h2>Categories</h2>
            <ul>
              <li><kbd>\equations</kbd> — HS equations</li>
              {allCategories.map(cat => (
                <li key={cat}><kbd>\{cat.toLowerCase()}</kbd></li>
              ))}
            </ul>
          </section>
        </aside>
      </main>
    </div>
  );
}
