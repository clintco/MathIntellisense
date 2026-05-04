import { useState } from "react";
import { Editor } from "./Editor";
import "./App.css";

export default function App() {
  const [, setText] = useState("");

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Math Intellisense</h1>
        <p className="app-subtitle">
          Type <kbd>\</kbd> followed by a symbol name, alias, or category to insert unicode math symbols
          &nbsp;·&nbsp; <a href="simple.html" style={{ color: "var(--colorBrandForeground1)" }}>Simple version →</a>
          &nbsp;·&nbsp; <a href="reference.html#symbols" style={{ color: "var(--colorBrandForeground1)" }}>Symbols</a>
          &nbsp;·&nbsp; <a href="reference.html#equations" style={{ color: "var(--colorBrandForeground1)" }}>Equations</a>
        </p>
      </header>

      <main className="app-main">
        <Editor onChange={setText} />

      </main>
    </div>
  );
}
