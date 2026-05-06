/**
 * latexToUnicodeMath.mjs
 *
 * Converts LaTeX math expressions to UnicodeMath linear format
 * (Microsoft Office / Murray Sargent TN28).
 *
 * Returns null for expressions that could not be converted confidently
 * (signals "needs review" to the caller).
 */

// ── Greek letters ──────────────────────────────────────────────────────────
const GREEK = {
  alpha:'α',beta:'β',gamma:'γ',delta:'δ',epsilon:'ε',varepsilon:'ε',
  zeta:'ζ',eta:'η',theta:'θ',vartheta:'ϑ',iota:'ι',kappa:'κ',
  lambda:'λ',mu:'μ',nu:'ν',xi:'ξ',pi:'π',varpi:'ϖ',
  rho:'ρ',varrho:'ϱ',sigma:'σ',varsigma:'ς',tau:'τ',upsilon:'υ',
  phi:'φ',varphi:'ϕ',chi:'χ',psi:'ψ',omega:'ω',
  Alpha:'Α',Beta:'Β',Gamma:'Γ',Delta:'Δ',Epsilon:'Ε',Zeta:'Ζ',
  Eta:'Η',Theta:'Θ',Iota:'Ι',Kappa:'Κ',Lambda:'Λ',Mu:'Μ',
  Nu:'Ν',Xi:'Ξ',Pi:'Π',Rho:'Ρ',Sigma:'Σ',Tau:'Τ',
  Upsilon:'Υ',Phi:'Φ',Chi:'Χ',Psi:'Ψ',Omega:'Ω',
};

// ── Simple one-for-one command substitutions ───────────────────────────────
const CMD = {
  // operators
  cdot:'⋅',times:'×',div:'÷',pm:'±',mp:'∓',
  ast:'*',circ:'∘',bullet:'•',
  oplus:'⊕',ominus:'⊖',otimes:'⊗',oslash:'⊘',odot:'⊙',
  cap:'∩',cup:'∪',sqcap:'⊓',sqcup:'⊔',
  wedge:'∧',land:'∧',vee:'∨',lor:'∨',setminus:'∖',
  // relations
  leq:'≤',le:'≤',geq:'≥',ge:'≥',neq:'≠',ne:'≠',
  approx:'≈',equiv:'≡',sim:'∼',simeq:'≃',cong:'≅',propto:'∝',
  subset:'⊂',supset:'⊃',subseteq:'⊆',supseteq:'⊇',
  subsetneq:'⊊',supsetneq:'⊋',
  'in':'∈',notin:'∉',ni:'∋',
  perp:'⊥',parallel:'∥',mid:'∣',nmid:'∤',
  ll:'≪',gg:'≫',
  // arrows
  to:'→',rightarrow:'→',leftarrow:'←',gets:'←',
  leftrightarrow:'↔',Rightarrow:'⇒',Leftarrow:'⇐',
  Leftrightarrow:'⇔',iff:'⟺',implies:'⟹',impliedby:'⟸',
  uparrow:'↑',downarrow:'↓',Uparrow:'⇑',Downarrow:'⇓',
  nearrow:'↗',searrow:'↘',nwarrow:'↖',swarrow:'↙',
  mapsto:'↦',longmapsto:'⟼',
  hookrightarrow:'↪',hookleftarrow:'↩',
  // logic / misc
  lnot:'¬',neg:'¬',forall:'∀',exists:'∃',nexists:'∄',
  infty:'∞',partial:'∂',nabla:'∇',square:'□',
  emptyset:'∅',varnothing:'∅',
  hbar:'ℏ',ell:'ℓ',Re:'ℜ',Im:'ℑ',wp:'℘',
  aleph:'ℵ',beth:'ℶ',
  prime:'′',
  '%':'%',
  ldots:'…',cdots:'⋯',vdots:'⋮',ddots:'⋱',
  langle:'⟨',rangle:'⟩',
  lfloor:'⌊',rfloor:'⌋',lceil:'⌈',rceil:'⌉',
  // integrals
  int:'∫',iint:'∬',iiint:'∭',oint:'∮',oiint:'∯',oiiint:'∰',
  // large ops
  sum:'∑',prod:'∏',coprod:'∐',
  bigcup:'⋃',bigcap:'⋂',bigoplus:'⨁',bigotimes:'⨂',
  // trig / functions (kept as plain roman text)
  sin:'sin',cos:'cos',tan:'tan',cot:'cot',sec:'sec',csc:'csc',
  arcsin:'arcsin',arccos:'arccos',arctan:'arctan',
  sinh:'sinh',cosh:'cosh',tanh:'tanh',coth:'coth',
  log:'log',ln:'ln',exp:'exp',lg:'lg',
  lim:'lim',limsup:'limsup',liminf:'liminf',
  max:'max',min:'min',sup:'sup',inf:'inf',
  det:'det',dim:'dim',deg:'deg',
  gcd:'gcd',lcm:'lcm',ker:'ker',coker:'coker',
  hom:'hom',End:'End',Aut:'Aut',
  rank:'rank',tr:'tr',Pr:'Pr',arg:'arg',
  mod:'mod',bmod:'mod',pmod:null,  // handled specially below
  // display/style (transparent)
  displaystyle:'',textstyle:'',scriptstyle:'',scriptscriptstyle:'',
  // spacing
  quad:'\u2003',qquad:'\u2003\u2003',
  // sizing (drop — just delimiters remain)
  big:'',Big:'',bigg:'',Bigg:'',
  biggl:'',biggr:'',Biggl:'',Biggr:'',bigl:'',bigr:'',Bigl:'',Bigr:'',
  // left/right sizing operator used bare
  '\\':'',  // \\ newline in display — ignore
  // \| → ‖
  '|':'‖',
};

// Accent combining characters
const ACCENT = {
  hat:'\u0302', widehat:'\u0302',
  check:'\u030C',
  breve:'\u0306',
  acute:'\u0301',
  grave:'\u0300',
  tilde:'\u0303', widetilde:'\u0303',
  bar:'\u0305',   overline:'\u0305',
  underline:'\u0332',
  dot:'\u0307',
  ddot:'\u0308',
  // vec uses U+20D7 (combining right arrow above)
  vec:'\u20D7',
};

// ── Math italic ───────────────────────────────────────────────────────────
// Single Latin letters in math context use Unicode Mathematical Italic.
function toMathItalic(c) {
  const code = c.codePointAt(0);
  if (code >= 0x61 && code <= 0x7A) { // a–z
    if (c === 'h') return 'ℎ'; // ℎ (Planck constant, special case)
    return String.fromCodePoint(0x1D44E + (code - 0x61));
  }
  if (code >= 0x41 && code <= 0x5A) // A–Z
    return String.fromCodePoint(0x1D434 + (code - 0x41));
  return c;
}

// Maps regular Greek Unicode chars (output of GREEK map) to italic equivalents.
const ITALIC_GREEK = {
  'α':'\u{1D6FC}','β':'\u{1D6FD}','γ':'\u{1D6FE}','δ':'\u{1D6FF}',
  'ε':'\u{1D700}','ζ':'\u{1D701}','η':'\u{1D702}','θ':'\u{1D703}',
  'ι':'\u{1D704}','κ':'\u{1D705}','λ':'\u{1D706}','μ':'\u{1D707}',
  'ν':'\u{1D708}','ξ':'\u{1D709}','π':'\u{1D70B}','ρ':'\u{1D70C}',
  'σ':'\u{1D70E}','τ':'\u{1D70F}','υ':'\u{1D710}','φ':'\u{1D711}',
  'χ':'\u{1D712}','ψ':'\u{1D713}','ω':'\u{1D714}',
  // variant letters
  'ϑ':'\u{1D717}','ϕ':'\u{1D719}','ϖ':'\u{1D71B}','ϱ':'\u{1D71A}','ς':'\u{1D70D}',
  // uppercase
  'Α':'\u{1D6E2}','Β':'\u{1D6E3}','Γ':'\u{1D6E4}','Δ':'\u{1D6E5}',
  'Ε':'\u{1D6E6}','Ζ':'\u{1D6E7}','Η':'\u{1D6E8}','Θ':'\u{1D6E9}',
  'Ι':'\u{1D6EA}','Κ':'\u{1D6EB}','Λ':'\u{1D6EC}','Μ':'\u{1D6ED}',
  'Ν':'\u{1D6EE}','Ξ':'\u{1D6EF}','Π':'\u{1D6F1}','Ρ':'\u{1D6F2}',
  'Σ':'\u{1D6F4}','Τ':'\u{1D6F5}','Υ':'\u{1D6F6}','Φ':'\u{1D6F7}',
  'Χ':'\u{1D6F8}','Ψ':'\u{1D6F9}','Ω':'\u{1D6FA}',
};

// U+2061 FUNCTION APPLICATION — appended after function names (including their
// subscripts) so a UnicodeMath engine can distinguish e.g. sin⁡θ from sinθ.
const FUNC_APP = '⁡';
const FUNC_NAMES = new Set([
  'sin','cos','tan','cot','sec','csc',
  'arcsin','arccos','arctan',
  'sinh','cosh','tanh','coth',
  'log','ln','exp',
  'lim','limsup','liminf',
  'max','min','sup','inf',
  'det','dim','deg','gcd','lcm',
  'ker','coker','hom','rank','tr','Pr','arg',
]);

// Matrix environment delimiters
const MATRIX_DELIM = {
  matrix:     ['',''],
  pmatrix:    ['(',')'],
  bmatrix:    ['[',']'],
  vmatrix:    ['|','|'],
  Vmatrix:    ['‖','‖'],
  Bmatrix:    ['{','}'],
  smallmatrix:['',''],
};

// ── Tokenizer ─────────────────────────────────────────────────────────────
function tokenize(input) {
  // Pre-process HTML entities that can appear in LaTeX annotations
  input = input
    .replace(/&#x27;/g, "'")
    .replace(/&amp;/g,  '&')
    .replace(/&gt;/g,   '>')
    .replace(/&lt;/g,   '<');

  const toks = [];
  let i = 0;
  while (i < input.length) {
    const c = input[i];
    if (c === ' ' || c === '\t' || c === '\n' || c === '\r') {
      // Emit a single space token (collapsed); ignored except inside \text{}
      if (toks.length && toks[toks.length - 1].t !== 'space') toks.push({ t:'space', v:' ' });
      i++; continue;
    }
    if (c === '\\') {
      i++;
      if (i >= input.length) break;
      const n = input[i];
      if (/[a-zA-Z]/.test(n)) {
        let name = '';
        while (i < input.length && /[a-zA-Z*]/.test(input[i])) name += input[i++];
        toks.push({ t:'cmd', v:name });
      } else {
        // single-char command: \\  \,  \;  \!  \|  \{  \}  \'  \`
        toks.push({ t:'cmd', v:n });
        i++;
      }
    } else {
      toks.push({ t:'char', v:c });
      i++;
    }
  }
  return toks;
}

// ── Parser ────────────────────────────────────────────────────────────────
class Parser {
  constructor(tokens) {
    this.toks     = tokens;
    this.pos      = 0;
    this.inTextMode = false; // true inside \text{}, \mathrm{} etc. — suppresses italic
  }

  peek()  { return this.toks[this.pos]; }
  done()  { return this.pos >= this.toks.length; }
  next()  { return this.toks[this.pos++]; }

  // Parse entire token stream (preserve inter-token spaces at top level)
  parseAll() { return this.parseSeq(null, true); }

  // Parse a sequence of atoms until stopChar (a char token value) or EOF
  parseSeq(stopChar, keepSpaces = false) {
    const parts = [];
    while (!this.done()) {
      const tok = this.peek();
      if (tok.t === 'char' && tok.v === stopChar) break;
      if (tok.t === 'char' && tok.v === '}') break;
      if (tok.t === 'char' && (tok.v === '&' || tok.v === '@')) break;
      if (tok.t === 'space') {
        this.next();
        if (keepSpaces) parts.push(' ');
        continue;
      }
      parts.push(this.parseAtom());
    }
    return parts.join('');
  }

  // True when the next non-space token is a letter or digit.
  // Peeks past space tokens so that "log_b x" inside a keepSpaces=false group
  // still gets a separating space before x.
  nextIsAlnum() {
    let pos = this.pos;
    while (pos < this.toks.length && this.toks[pos].t === 'space') pos++;
    if (pos >= this.toks.length) return false;
    const tok = this.toks[pos];
    return tok.t === 'char' && /^[\p{L}\p{N}]$/u.test(tok.v);
  }

  // Parse one atom, including any trailing scripts (^ _)
  parseAtom() {
    // Skip leading space tokens (only reach here from parseSeq when keepSpaces=false)
    while (!this.done() && this.peek().t === 'space') this.next();
    if (this.done()) return '';
    const tok = this.next();
    let base = this.convertToken(tok);
    let hadScript = false;
    const isFuncName = tok.t === 'cmd' && FUNC_NAMES.has(tok.v);

    // Attach any following ^ or _ scripts
    while (!this.done()) {
      const next = this.peek();
      if (next.t === 'char' && next.v === '^') {
        this.next();
        const arg = this.parseArg();
        base += '^' + this.scriptWrap(arg);
        hadScript = true;
      } else if (next.t === 'char' && next.v === '_') {
        this.next();
        const arg = this.parseArg();
        base += '_' + this.scriptWrap(arg);
        hadScript = true;
      } else {
        break;
      }
    }
    if (isFuncName) {
      // U+2061 FUNCTION APPLICATION after the full function expression (including
      // subscripts like log_b). This lets a UnicodeMath engine distinguish sin⁡θ
      // from the identifier sinθ, and log_b⁡(xy) from a subscript ambiguity.
      base += FUNC_APP;
    } else if (hadScript && this.nextIsAlnum()) {
      // For non-function subscripts (e.g. x_1 y), add a space so the next
      // alphanumeric isn't absorbed into the subscript by the renderer.
      base += ' ';
    }
    return base;
  }

  // Wrap a script/subscript arg in parens if it's "complex"
  scriptWrap(s) {
    // Complex = more than one Unicode code point (approx), or contains operators
    if ([...s].length <= 1) return s;
    // Single combining-char sequences (e.g. x̂) count as 1 base char
    // Simple multi-char cases that don't need parens: multi-digit numbers, plain letter runs
    if (/^[a-zA-Zα-ωΑ-Ω0-9]+$/.test(s)) return s;
    return '(' + s + ')';
  }

  // Parse next argument: either a {group} or a single atom
  parseArg() {
    while (!this.done() && this.peek().t === 'space') this.next();
    if (this.done()) return '';
    const tok = this.peek();
    if (tok.t === 'char' && tok.v === '{') {
      this.next(); // consume {
      const inner = this.parseSeq('}');
      if (!this.done() && this.peek().t === 'char' && this.peek().v === '}') this.next();
      return inner;
    }
    // Single atom (no script attachment here — that's handled at top-level)
    const saved = this.pos;
    const atom = this.next();
    return this.convertToken(atom);
  }

  // Parse a {group} argument preserving internal spaces (for \text{})
  parseTextArg() {
    while (!this.done() && this.peek().t === 'space') this.next();
    if (this.done()) return '';
    const tok = this.peek();
    if (tok.t === 'char' && tok.v === '{') {
      this.next(); // consume {
      const inner = this.parseSeq('}', true); // keepSpaces = true
      if (!this.done() && this.peek().t === 'char' && this.peek().v === '}') this.next();
      return inner; // preserve leading/trailing spaces (e.g. \text{ for some })
    }
    // Single token
    while (!this.done() && this.peek().t === 'space') this.next();
    if (this.done()) return '';
    return this.convertToken(this.next());
  }

  // Parse optional [arg]
  parseOptArg() {
    while (!this.done() && this.peek().t === 'space') this.next();
    if (this.done()) return null;
    const tok = this.peek();
    if (tok.t === 'char' && tok.v === '[') {
      this.next(); // consume [
      const inner = this.parseSeq(']');
      if (!this.done() && this.peek().t === 'char' && this.peek().v === ']') this.next();
      return inner;
    }
    return null;
  }

  // Convert a single token to UnicodeMath string
  convertToken(tok) {
    if (tok.t === 'space') return '';
    if (tok.t === 'char') {
      // Opening brace that isn't part of a command arg — treat as grouping
      if (tok.v === '{') {
        const inner = this.parseSeq('}');
        if (!this.done() && this.peek().t === 'char' && this.peek().v === '}') this.next();
        return inner;
      }
      // Italicise single letters in math context (not inside \text{}/\mathrm{})
      if (!this.inTextMode && /^[a-zA-Z]$/.test(tok.v)) return toMathItalic(tok.v);
      return tok.v;
    }

    // cmd token
    const cmd = tok.v;

    // ── Greek (always italic — Greek letters in math are always slanted)
    if (GREEK[cmd]) { const g = GREEK[cmd]; return ITALIC_GREEK[g] ?? g; }

    // ── Simple substitutions (null means "handle specially")
    if (CMD[cmd] !== undefined && CMD[cmd] !== null) return CMD[cmd];

    // ── Commands with arguments ────────────────────────────────────────────

    // \frac{num}{den}
    if (cmd === 'frac' || cmd === 'dfrac' || cmd === 'tfrac') {
      const num = this.parseArg();
      const den = this.parseArg();
      const n = this.fracWrap(num);
      const d = this.fracWrap(den);
      const result = n + '/' + d;
      return this.nextIsAlnum() ? result + ' ' : result;
    }

    // \sqrt[n]{x}
    if (cmd === 'sqrt') {
      const deg = this.parseOptArg();
      const arg = this.parseArg();
      const inner = this.sqrtWrap(arg);
      const result = deg ? deg + '√' + inner : '√' + inner;
      return this.nextIsAlnum() ? result + ' ' : result;
    }

    // \binom{n}{k}  →  (n¦k)  [U+00A6 broken bar = UnicodeMath "choose"]
    if (cmd === 'binom' || cmd === 'tbinom' || cmd === 'dbinom') {
      const top = this.parseArg();
      const bot = this.parseArg();
      return '(' + top + '\u00A6' + bot + ')';
    }

    // \pmod{n}  →  (mod n)
    if (cmd === 'pmod') {
      const arg = this.parseArg();
      return '\u2003(mod\u2009' + arg + ')';
    }

    // \text{...} / \mbox{...} / \mathrm{...} — keep content, suppress italic
    if (['text','mbox','mathrm','mathup'].includes(cmd)) {
      const prev = this.inTextMode;
      this.inTextMode = true;
      const result = this.parseTextArg();
      this.inTextMode = prev;
      return result;
    }

    // \mathbf{...} / \boldsymbol{...} — keep content (bold hint only)
    if (['mathbf','boldsymbol','bm'].includes(cmd)) {
      return this.parseArg();
    }

    // \mathit{...}
    if (cmd === 'mathit') return this.parseArg();

    // \mathcal{...} — use script Unicode block where possible, else as-is
    if (cmd === 'mathcal' || cmd === 'mathscr') {
      const inner = this.parseArg();
      return toScript(inner);
    }

    // \mathbb{...} — double-struck
    if (cmd === 'mathbb') {
      const inner = this.parseArg();
      return toDoubleStruck(inner);
    }

    // \operatorname{...}
    if (cmd === 'operatorname') {
      return this.parseArg();
    }

    // Accents: \hat{x} → x̂ etc.
    if (ACCENT[cmd]) {
      const arg = this.parseArg();
      return arg + ACCENT[cmd];
    }

    // \vec{x} — combining right arrow above U+20D7
    if (cmd === 'vec') {
      const arg = this.parseArg();
      return arg + '\u20D7';
    }

    // \overline{x}, \underline{x} — handled as accents above
    // (already in ACCENT map)

    // \overbrace, \underbrace — keep arg, drop brace notation
    if (cmd === 'overbrace' || cmd === 'underbrace') {
      return this.parseArg();
    }

    // \overset{above}{base} / \stackrel{above}{base}
    if (cmd === 'overset' || cmd === 'stackrel') {
      const above = this.parseArg();
      const base  = this.parseArg();
      return base + '^(' + above + ')';  // approximate
    }

    // \underset{below}{base}
    if (cmd === 'underset') {
      const below = this.parseArg();
      const base  = this.parseArg();
      return base + '_(' + below + ')';
    }

    // \left  \right — consume the delimiter char that follows
    if (cmd === 'left' || cmd === 'right') {
      if (!this.done()) {
        const delim = this.next();
        // Map LaTeX delimiter to UnicodeMath equivalent
        const v = delim.v;
        if (v === '.') return '';                    // \left. \right. — invisible
        if (v === '{' || (delim.t === 'cmd' && v === '{')) return '{';
        if (v === '}' || (delim.t === 'cmd' && v === '}')) return '}';
        if (delim.t === 'cmd' && v === '|') return '‖'; // \left\|
        if (delim.t === 'cmd' && (v === 'langle')) return '⟨';
        if (delim.t === 'cmd' && (v === 'rangle')) return '⟩';
        if (delim.t === 'cmd' && (v === 'lfloor')) return '⌊';
        if (delim.t === 'cmd' && (v === 'rfloor')) return '⌋';
        if (delim.t === 'cmd' && (v === 'lceil'))  return '⌈';
        if (delim.t === 'cmd' && (v === 'rceil'))  return '⌉';
        return v;  // ( ) [ ] | etc.
      }
      return '';
    }

    // \not\cmd — negation overlay
    if (cmd === 'not') {
      const next = this.parseArg();
      return next + '\u0338'; // combining long solidus overlay
    }

    // \begin{env} ... \end{env}
    if (cmd === 'begin') {
      return this.parseEnvironment();
    }
    if (cmd === 'end') {
      // Consume the {envname} and return empty (environment was closed by parseEnvironment)
      this.parseArg();
      return '';
    }

    // \\ (display newline) — skip
    if (cmd === '\\') return '';

    // Spacing commands \, \; \: \! — drop
    if ([',',';',':','!'].includes(cmd)) return '';

    // \| — double vertical bar
    if (cmd === '|') return '‖';

    // \{ \} — literal braces
    if (cmd === '{') return '{';
    if (cmd === '}') return '}';

    // \' \` etc. — pass through
    if (cmd === "'") return '′';

    // Unknown command — return backslash+name to flag for review
    return '\\' + cmd;
  }

  // ── Helpers ──────────────────────────────────────────────────────────────

  // Wrap fraction arm in parens if needed to preserve structure
  fracWrap(s) {
    // Needs outer parens if it contains + - at top level (not inside parens/braces)
    if (needsParens(s)) return '(' + s + ')';
    return s;
  }

  // Wrap sqrt argument in parens if complex
  sqrtWrap(s) {
    if ([...s].length <= 1) return s;
    if (/^[a-zA-Zα-ωΑ-Ω0-9]+$/.test(s)) return s;
    return '(' + s + ')';
  }

  // Parse \begin{env} body \end{env}
  parseEnvironment() {
    const envName = this.parseArg(); // {envname}

    if (MATRIX_DELIM[envName] !== undefined) {
      return this.parseMatrix(envName);
    }

    // \begin{cases} — render as {■(...)}
    if (envName === 'cases') {
      return this.parseMatrix('cases');
    }

    // Unknown environment — consume until \end{envName} and return raw content
    const parts = [];
    while (!this.done()) {
      const tok = this.peek();
      if (tok.t === 'cmd' && tok.v === 'end') {
        this.next(); // consume \end
        this.parseArg(); // consume {envname}
        break;
      }
      parts.push(this.parseAtom());
    }
    return parts.join('');
  }

  // Build UnicodeMath matrix: [■(r1c1&r1c2@r2c1&r2c2)]
  parseMatrix(envName) {
    const rows = [];
    let   row  = [];
    const parts = [];

    while (!this.done()) {
      // Skip spaces explicitly so we can peek structural tokens reliably
      while (!this.done() && this.peek().t === 'space') this.next();
      if (this.done()) break;

      const tok = this.peek();
      // \end{...}
      if (tok.t === 'cmd' && tok.v === 'end') {
        this.next();
        this.parseArg(); // consume {envname}
        break;
      }
      // Row separator \\
      if (tok.t === 'cmd' && tok.v === '\\') {
        this.next();
        row.push(parts.splice(0).join(''));
        rows.push(row);
        row = [];
        continue;
      }
      // Column separator &
      if (tok.t === 'char' && tok.v === '&') {
        this.next();
        row.push(parts.splice(0).join(''));
        continue;
      }
      parts.push(this.parseAtom());
    }
    // Last cell / row
    row.push(parts.join(''));
    if (row.some(c => c !== '')) rows.push(row);

    const inner = rows.map(r => r.join('&')).join('@');
    const [L, R] = envName === 'cases' ? ['{',''] : (MATRIX_DELIM[envName] || ['','']);
    return L + '\u25A0(' + inner + ')' + R;
  }
}

// ── Top-level fraction "needs parens" heuristic ───────────────────────────
function needsParens(s) {
  let depth = 0;
  for (const c of s) {
    if (c === '(' || c === '[' || c === '{') { depth++; continue; }
    if (c === ')' || c === ']' || c === '}') { depth--; continue; }
    if (depth === 0 && (c === '+' || c === '−' || c === '-')) return true;
  }
  return false;
}

// ── Script/double-struck Unicode ranges ──────────────────────────────────
const SCRIPT_MAP = {
  A:'𝒜',B:'ℬ',C:'𝒞',D:'𝒟',E:'ℰ',F:'ℱ',G:'𝒢',H:'ℋ',I:'ℐ',J:'𝒥',
  K:'𝒦',L:'ℒ',M:'ℳ',N:'𝒩',O:'𝒪',P:'𝒫',Q:'𝒬',R:'ℛ',S:'𝒮',T:'𝒯',
  U:'𝒰',V:'𝒱',W:'𝒲',X:'𝒳',Y:'𝒴',Z:'𝒵',
};
function toScript(s) {
  return [...s].map(c => SCRIPT_MAP[c] || c).join('');
}

const DSTRUCK_MAP = {
  A:'𝔸',B:'𝔹',C:'ℂ',D:'𝔻',E:'𝔼',F:'𝔽',G:'𝔾',H:'ℍ',I:'𝕀',J:'𝕁',
  K:'𝕂',L:'𝕃',M:'𝕄',N:'ℕ',O:'𝕆',P:'ℙ',Q:'ℚ',R:'ℝ',S:'𝕊',T:'𝕋',
  U:'𝕌',V:'𝕍',W:'𝕎',X:'𝕏',Y:'𝕐',Z:'ℤ',
  a:'𝕒',b:'𝕓',c:'𝕔',d:'𝕕',e:'𝕖',f:'𝕗',g:'𝕘',h:'𝕙',i:'𝕚',j:'𝕛',
  k:'𝕜',l:'𝕝',m:'𝕞',n:'𝕟',o:'𝕠',p:'𝕡',q:'𝕢',r:'𝕣',s:'𝕤',t:'𝕥',
  u:'𝕦',v:'𝕧',w:'𝕨',x:'𝕩',y:'𝕪',z:'𝕫',
  '0':'𝟘','1':'𝟙','2':'𝟚','3':'𝟛','4':'𝟜','5':'𝟝','6':'𝟞','7':'𝟟','8':'𝟠','9':'𝟡',
};
function toDoubleStruck(s) {
  return [...s].map(c => DSTRUCK_MAP[c] || c).join('');
}

// ── Post-processing ────────────────────────────────────────────────────────
// Longest names first so "arcsin" matches before "sin", "limsup" before "sup".
const _FN_RE = new RegExp(
  '([\\p{L}\\p{N}])(arcsin|arccos|arctan|limsup|liminf|sinh|cosh|tanh|coth' +
  '|sin|cos|tan|cot|sec|csc|log|ln|exp|lim|max|min|sup|inf' +
  '|det|dim|deg|gcd|lcm|ker|coker|hom|rank|tr|arg)',
  'gu'
);

// Binary and relational operators around which spaces are stripped.
const _OP_RE = / *(=|\+|-|<|>|×|÷|±|∓|⋅|≤|≥|≠|≈|≡|∼|≃|≅|∝|⊂|⊃|⊆|⊇|⊊|⊋|∈|∉|∋|⊥|∥|∣|∤|≪|≫|⟺|⟹|⟸|⟼|↔|⇔|⇒|⇐|→|←|↦|↗|↘|∧|∨|∩|∪|⊕|⊖|⊗|⊘|⊙|⊓|⊔|∖) */g;

function postProcess(s) {
  // Insert a space before function names immediately preceded by an alphanumeric
  // character so the renderer sees them as separate tokens. Handles cases like
  // "𝑖sin⁡𝜃" → "𝑖 sin⁡𝜃" where no LaTeX space existed between i and \sin.
  s = s.replace(_FN_RE, '$1 $2');
  // Remove spaces around binary/relational operators.
  s = s.replace(_OP_RE, '$1');
  return s.replace(/  +/g, ' ').trim();
}

// ── Public API ─────────────────────────────────────────────────────────────
export function latexToUnicodeMath(latex) {
  if (!latex) return null;
  try {
    const toks   = tokenize(latex);
    const parser = new Parser(toks);
    const result = parser.parseAll();
    // If result still contains backslash commands, flag for review
    if (result.includes('\\')) return null;
    return postProcess(result);
  } catch (_) {
    return null;
  }
}
