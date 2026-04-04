/**
 * Math AutoCorrect symbols sourced from Microsoft Office Math AutoCorrect.
 * Categories match the exact headings on the reference page.
 * Each symbol appears in exactly one category (its primary one).
 *
 * Each entry:
 *   code     - primary autocorrect code (without leading \)
 *   aliases  - alternative codes (without leading \)
 *   symbol   - the unicode character
 *   name     - human-readable symbol name
 *   category - exact category name from the Microsoft reference
 */
export const mathSymbols = [

  // ── Currency Symbols ──────────────────────────────────────────────────────
  { code: "cents",          aliases: [],                              symbol: "¢", name: "Cents sign",                          category: "Currency Symbols" },

  // ── Math ────────────────────────────────────────────────────────────
  { code: "pm",             aliases: ["plusminus"],                   symbol: "±", name: "Plus minus",                          category: "Basic Math" },
  { code: "mp",             aliases: ["minusplus"],                   symbol: "∓", name: "Minus plus",                          category: "Basic Math" },
  { code: "infty",          aliases: ["infinity", "inf"],             symbol: "∞", name: "Infinity",                            category: "Basic Math" },
  { code: "neq",            aliases: ["ne", "notequal"],              symbol: "≠", name: "Not equal to",                        category: "Basic Math" },
  { code: "sim",            aliases: [],                              symbol: "∼", name: "Approximately (similar to)",           category: "Basic Math" },
  { code: "times",          aliases: [],                              symbol: "×", name: "Multiplication sign",                 category: "Basic Math" },
  { code: "div",            aliases: ["divide"],                      symbol: "÷", name: "Division sign",                       category: "Basic Math" },
  { code: "propto",         aliases: ["proportional"],                symbol: "∝", name: "Proportional to",                    category: "Basic Math" },
  { code: "ll",             aliases: ["muchless"],                    symbol: "≪", name: "Much less than",                      category: "Basic Math" },
  { code: "gg",             aliases: ["muchgreater"],                 symbol: "≫", name: "Much greater than",                   category: "Basic Math" },
  { code: "leq",            aliases: ["le", "lte"],                   symbol: "≤", name: "Less than or equal to",               category: "Basic Math" },
  { code: "geq",            aliases: ["ge", "gte"],                   symbol: "≥", name: "Greater than or equal to",            category: "Basic Math" },
  { code: "cong",           aliases: ["congruent"],                   symbol: "≅", name: "Approximately equal to",              category: "Basic Math" },
  { code: "approx",         aliases: ["app"],                         symbol: "≈", name: "Almost equal to",                     category: "Basic Math" },
  { code: "equiv",          aliases: ["identical"],                   symbol: "≡", name: "Identical to",                        category: "Basic Math" },
  { code: "forall",         aliases: ["foreach", "all"],              symbol: "∀", name: "For all",                             category: "Basic Math" },
  { code: "complement",     aliases: ["compl"],                       symbol: "∁", name: "Set complement",                      category: "Basic Math" },
  { code: "partial",        aliases: [],                              symbol: "∂", name: "Partial differential",                category: "Basic Math" },
  { code: "sqrt",           aliases: ["2root"],                       symbol: "√", name: "Radical sign",                        category: "Basic Math" },
  { code: "cbrt",           aliases: ["3root"],                       symbol: "∛", name: "Cube root",                           category: "Basic Math" },
  { code: "qdrt",           aliases: ["4root"],                       symbol: "∜", name: "Fourth root",                         category: "Basic Math" },
  { code: "emptyset",       aliases: ["empty", "null"],               symbol: "∅", name: "Empty set",                           category: "Basic Math" },
  { code: "deg",            aliases: ["degree"],                      symbol: "°", name: "Degrees",                             category: "Basic Math" },
  { code: "rad",            aliases: [],                              symbol: "㎭", name: "Radians",                             category: "Basic Math" },
  { code: "degf",           aliases: [],                              symbol: "℉", name: "Degrees Fahrenheit",                  category: "Basic Math" },
  { code: "degc",           aliases: [],                              symbol: "℃", name: "Degrees Celsius",                     category: "Basic Math" },
  { code: "inc",            aliases: ["laplace"],                     symbol: "∆", name: "Increment",                           category: "Basic Math" },
  { code: "nabla",          aliases: ["grad"],                        symbol: "∇", name: "Nabla / Gradient",                    category: "Basic Math" },
  { code: "exists",         aliases: ["forsome", "exist"],            symbol: "∃", name: "There exists",                        category: "Basic Math" },
  { code: "nexists",        aliases: ["notexists"],                   symbol: "∄", name: "There does not exist",                category: "Basic Math" },
  { code: "in",             aliases: ["element", "belongs"],          symbol: "∈", name: "Element of (belongs to)",             category: "Basic Math" },
  { code: "ni",             aliases: ["contains", "owns"],            symbol: "∋", name: "Contains as member",                  category: "Basic Math" },
  { code: "therefore",      aliases: [],                              symbol: "∴", name: "Therefore",                           category: "Basic Math" },
  { code: "neg",            aliases: ["not", "lnot"],                 symbol: "¬", name: "Not sign",                            category: "Basic Math" },
  { code: "ast",            aliases: [],                              symbol: "∗", name: "Asterisk operator",                   category: "Basic Math" },
  { code: "bullet",         aliases: [],                              symbol: "∙", name: "Bullet operator",                     category: "Basic Math" },
  { code: "vdots",          aliases: [],                              symbol: "⋮", name: "Vertical ellipsis",                   category: "Basic Math" },
  { code: "cdots",          aliases: [],                              symbol: "⋯", name: "Midline horizontal ellipsis",          category: "Basic Math" },
  { code: "rddots",         aliases: [],                              symbol: "⋰", name: "Upward right diagonal ellipsis",       category: "Basic Math" },
  { code: "ddots",          aliases: [],                              symbol: "⋱", name: "Downward right diagonal ellipsis",     category: "Basic Math" },
  { code: "overbar",        aliases: ["overline", "vinculum", "repeat", "repeating"], symbol: "¯", name: "Repeating decimal / overline", category: "Basic Math" },
  { code: "aleph",          aliases: [],                              symbol: "ℵ", name: "Aleph",                               category: "Basic Math" },
  { code: "beth",           aliases: [],                              symbol: "ℶ", name: "Beth",                                category: "Basic Math" },

  // ── Number Theory ─────────────────────────────────────────────────────────
  { code: "mid",            aliases: ["divides"],                     symbol: "∣", name: "Divides (is divisible by)",           category: "Number Theory" },
  { code: "notdivide",      aliases: [],                              symbol: "∤", name: "Does not divide",                     category: "Number Theory" },

  // ── Statistics and Probability ────────────────────────────────────────────
  { code: "stddev",         aliases: [],                              symbol: "σ", name: "Standard deviation",                  category: "Statistics and Probability" },
  { code: "mean",           aliases: [],                              symbol: "μ", name: "Population mean",                     category: "Statistics and Probability" },
  { code: "corr",           aliases: [],                              symbol: "ρ", name: "Correlation coefficient",             category: "Statistics and Probability" },
  { code: "doubleE",        aliases: ["expect"],                      symbol: "𝔼", name: "Expected value",                      category: "Statistics and Probability" },
  { code: "doubleP",        aliases: ["prob"],                        symbol: "ℙ", name: "Probability",                         category: "Statistics and Probability" },

  // ── Greek Letters ─────────────────────────────────────────────────────────
  { code: "alpha",          aliases: [],                              symbol: "α", name: "Alpha (lowercase)",                   category: "Greek Letters" },
  { code: "Alpha",          aliases: [],                              symbol: "Α", name: "Alpha (uppercase)",                   category: "Greek Letters" },
  { code: "beta",           aliases: [],                              symbol: "β", name: "Beta (lowercase)",                    category: "Greek Letters" },
  { code: "Beta",           aliases: [],                              symbol: "Β", name: "Beta (uppercase)",                    category: "Greek Letters" },
  { code: "gamma",          aliases: [],                              symbol: "γ", name: "Gamma (lowercase)",                   category: "Greek Letters" },
  { code: "Gamma",          aliases: [],                              symbol: "Γ", name: "Gamma (uppercase)",                   category: "Greek Letters" },
  { code: "delta",          aliases: [],                              symbol: "δ", name: "Delta (lowercase)",                   category: "Greek Letters" },
  { code: "Delta",          aliases: [],                              symbol: "Δ", name: "Delta (uppercase)",                   category: "Greek Letters" },
  { code: "epsilon",        aliases: [],                              symbol: "ε", name: "Epsilon (lowercase)",                 category: "Greek Letters" },
  { code: "varepsilon",     aliases: [],                              symbol: "ϵ", name: "Variant epsilon",                     category: "Greek Letters" },
  { code: "Epsilon",        aliases: [],                              symbol: "Ε", name: "Epsilon (uppercase)",                 category: "Greek Letters" },
  { code: "zeta",           aliases: [],                              symbol: "ζ", name: "Zeta (lowercase)",                    category: "Greek Letters" },
  { code: "Zeta",           aliases: [],                              symbol: "Ζ", name: "Zeta (uppercase)",                    category: "Greek Letters" },
  { code: "eta",            aliases: [],                              symbol: "η", name: "Eta (lowercase)",                     category: "Greek Letters" },
  { code: "Eta",            aliases: [],                              symbol: "Η", name: "Eta (uppercase)",                     category: "Greek Letters" },
  { code: "theta",          aliases: [],                              symbol: "θ", name: "Theta (lowercase)",                   category: "Greek Letters" },
  { code: "vartheta",       aliases: [],                              symbol: "ϑ", name: "Variant theta",                       category: "Greek Letters" },
  { code: "Theta",          aliases: [],                              symbol: "Θ", name: "Theta (uppercase)",                   category: "Greek Letters" },
  { code: "iota",           aliases: [],                              symbol: "ι", name: "Iota (lowercase)",                    category: "Greek Letters" },
  { code: "Iota",           aliases: [],                              symbol: "Ι", name: "Iota (uppercase)",                    category: "Greek Letters" },
  { code: "kappa",          aliases: [],                              symbol: "κ", name: "Kappa (lowercase)",                   category: "Greek Letters" },
  { code: "Kappa",          aliases: [],                              symbol: "Κ", name: "Kappa (uppercase)",                   category: "Greek Letters" },
  { code: "lambda",         aliases: [],                              symbol: "λ", name: "Lambda (lowercase)",                  category: "Greek Letters" },
  { code: "Lambda",         aliases: [],                              symbol: "Λ", name: "Lambda (uppercase)",                  category: "Greek Letters" },
  { code: "mu",             aliases: [],                              symbol: "μ", name: "Mu (lowercase)",                      category: "Greek Letters" },
  { code: "Mu",             aliases: [],                              symbol: "Μ", name: "Mu (uppercase)",                      category: "Greek Letters" },
  { code: "nu",             aliases: [],                              symbol: "ν", name: "Nu (lowercase)",                      category: "Greek Letters" },
  { code: "Nu",             aliases: [],                              symbol: "Ν", name: "Nu (uppercase)",                      category: "Greek Letters" },
  { code: "xi",             aliases: [],                              symbol: "ξ", name: "Xi (lowercase)",                      category: "Greek Letters" },
  { code: "Xi",             aliases: [],                              symbol: "Ξ", name: "Xi (uppercase)",                      category: "Greek Letters" },
  { code: "omicron",        aliases: [],                              symbol: "ο", name: "Omicron (lowercase)",                 category: "Greek Letters" },
  { code: "Omicron",        aliases: [],                              symbol: "Ο", name: "Omicron (uppercase)",                 category: "Greek Letters" },
  { code: "pi",             aliases: [],                              symbol: "π", name: "Pi (lowercase)",                      category: "Greek Letters" },
  { code: "varpi",          aliases: [],                              symbol: "ϖ", name: "Variant pi",                          category: "Greek Letters" },
  { code: "Pi",             aliases: [],                              symbol: "Π", name: "Pi (uppercase)",                      category: "Greek Letters" },
  { code: "rho",            aliases: [],                              symbol: "ρ", name: "Rho (lowercase)",                     category: "Greek Letters" },
  { code: "varrho",         aliases: [],                              symbol: "ϱ", name: "Variant rho",                         category: "Greek Letters" },
  { code: "Rho",            aliases: [],                              symbol: "Ρ", name: "Rho (uppercase)",                     category: "Greek Letters" },
  { code: "sigma",          aliases: [],                              symbol: "σ", name: "Sigma (lowercase)",                   category: "Greek Letters" },
  { code: "varsigma",       aliases: [],                              symbol: "ς", name: "Variant sigma",                       category: "Greek Letters" },
  { code: "Sigma",          aliases: [],                              symbol: "Σ", name: "Sigma (uppercase)",                   category: "Greek Letters" },
  { code: "tau",            aliases: [],                              symbol: "τ", name: "Tau (lowercase)",                     category: "Greek Letters" },
  { code: "Tau",            aliases: [],                              symbol: "Τ", name: "Tau (uppercase)",                     category: "Greek Letters" },
  { code: "upsilon",        aliases: [],                              symbol: "υ", name: "Upsilon (lowercase)",                 category: "Greek Letters" },
  { code: "Upsilon",        aliases: [],                              symbol: "Υ", name: "Upsilon (uppercase)",                 category: "Greek Letters" },
  { code: "phi",            aliases: [],                              symbol: "φ", name: "Phi (lowercase)",                     category: "Greek Letters" },
  { code: "varphi",         aliases: [],                              symbol: "ϕ", name: "Variant phi",                         category: "Greek Letters" },
  { code: "Phi",            aliases: [],                              symbol: "Φ", name: "Phi (uppercase)",                     category: "Greek Letters" },
  { code: "chi",            aliases: [],                              symbol: "χ", name: "Chi (lowercase)",                     category: "Greek Letters" },
  { code: "Chi",            aliases: [],                              symbol: "Χ", name: "Chi (uppercase)",                     category: "Greek Letters" },
  { code: "psi",            aliases: [],                              symbol: "ψ", name: "Psi (lowercase)",                     category: "Greek Letters" },
  { code: "Psi",            aliases: [],                              symbol: "Ψ", name: "Psi (uppercase)",                     category: "Greek Letters" },
  { code: "omega",          aliases: [],                              symbol: "ω", name: "Omega (lowercase)",                   category: "Greek Letters" },
  { code: "Omega",          aliases: [],                              symbol: "Ω", name: "Omega (uppercase)",                   category: "Greek Letters" },

  // ── Letter-Like Symbols ───────────────────────────────────────────────────
  { code: "doubleC",        aliases: ["complex"],                     symbol: "ℂ", name: "Complex numbers",                    category: "Letter-Like Symbols" },
  { code: "doubleN",        aliases: ["naturals"],                    symbol: "ℕ", name: "Natural numbers",                    category: "Letter-Like Symbols" },
  { code: "doubleQ",        aliases: ["rationals"],                   symbol: "ℚ", name: "Rational numbers",                   category: "Letter-Like Symbols" },
  { code: "doubleR",        aliases: ["reals"],                       symbol: "ℝ", name: "Real numbers",                       category: "Letter-Like Symbols" },
  { code: "doubleZ",        aliases: ["integers"],                    symbol: "ℤ", name: "Integers",                           category: "Letter-Like Symbols" },
  { code: "hbar",           aliases: [],                              symbol: "ℏ", name: "Planck constant over two pi",        category: "Letter-Like Symbols" },
  { code: "planck",         aliases: [],                              symbol: "ℎ", name: "Planck constant",                    category: "Letter-Like Symbols" },
  { code: "scriptl",        aliases: [],                              symbol: "ℓ", name: "Script small L",                     category: "Letter-Like Symbols" },
  { code: "scriptL",        aliases: [],                              symbol: "ℒ", name: "Laplace transform",                  category: "Letter-Like Symbols" },
  { code: "Im",             aliases: ["frakturI"],                    symbol: "ℑ", name: "Imaginary part",                     category: "Letter-Like Symbols" },
  { code: "Re",             aliases: ["frakturR"],                    symbol: "ℜ", name: "Real part",                          category: "Letter-Like Symbols" },
  { code: "wp",             aliases: ["powerset"],                    symbol: "℘", name: "Power set / Weierstrass P",          category: "Letter-Like Symbols" },
  { code: "imath",          aliases: [],                              symbol: "ı", name: "Dotless i",                          category: "Letter-Like Symbols" },
  { code: "eth",            aliases: [],                              symbol: "ð", name: "Latin small letter eth",             category: "Letter-Like Symbols" },
  { code: "euler",          aliases: [],                              symbol: "ℇ", name: "Euler constant",                     category: "Letter-Like Symbols" },
  { code: "Digamma",        aliases: [],                              symbol: "Ϝ", name: "Greek capital digamma",              category: "Letter-Like Symbols" },
  { code: "turnedF",        aliases: [],                              symbol: "Ⅎ", name: "Turned capital F",                   category: "Letter-Like Symbols" },
  { code: "scriptg",        aliases: [],                              symbol: "ℊ", name: "Script small G",                     category: "Letter-Like Symbols" },
  { code: "scriptH",        aliases: [],                              symbol: "ℋ", name: "Script capital H",                   category: "Letter-Like Symbols" },
  { code: "frakturH",       aliases: [],                              symbol: "ℌ", name: "Hilbert space",                      category: "Letter-Like Symbols" },
  { code: "varkappa",       aliases: [],                              symbol: "ϰ", name: "Greek kappa symbol",                 category: "Letter-Like Symbols" },
  { code: "mho",            aliases: [],                              symbol: "℧", name: "Inverted ohm (mho)",                 category: "Letter-Like Symbols" },
  { code: "AA",             aliases: [],                              symbol: "Å", name: "Angstrom",                           category: "Letter-Like Symbols" },
  { code: "gimel",          aliases: [],                              symbol: "ℷ", name: "Gimel",                              category: "Letter-Like Symbols" },
  { code: "daleth",         aliases: [],                              symbol: "ℸ", name: "Daleth",                             category: "Letter-Like Symbols" },
  { code: "euro",           aliases: [],                              symbol: "℮", name: "Estimated symbol",                   category: "Letter-Like Symbols" },
  { code: "mathscr",        aliases: [],                              symbol: "ℬ", name: "Script capital B",                   category: "Letter-Like Symbols" },
  { code: "scriptE",        aliases: [],                              symbol: "ℰ", name: "Script capital E",                   category: "Letter-Like Symbols" },
  { code: "scriptF",        aliases: [],                              symbol: "ℱ", name: "Script capital F",                   category: "Letter-Like Symbols" },
  { code: "scriptM",        aliases: [],                              symbol: "ℳ", name: "Script capital M",                   category: "Letter-Like Symbols" },
  { code: "scripto",        aliases: [],                              symbol: "ℴ", name: "Script small O",                     category: "Letter-Like Symbols" },
  { code: "turnediota",     aliases: [],                              symbol: "℩", name: "Turned Greek iota",                  category: "Letter-Like Symbols" },

  // ── Binary Operators ───────────────────────────────────────────────
  { code: "ldiv",           aliases: [],                              symbol: "∕", name: "Division slash",                     category: "Binary Operators" },
  { code: "circ",           aliases: ["comp"],                        symbol: "∘", name: "Ring operator / composition",        category: "Binary Operators" },
  { code: "cdot",           aliases: ["dot"],                         symbol: "⋅", name: "Dot operator",                       category: "Binary Operators" },
  { code: "cap",            aliases: ["intersection"],                symbol: "∩", name: "Intersection",                       category: "Binary Operators" },
  { code: "cup",            aliases: ["union"],                       symbol: "∪", name: "Union",                              category: "Binary Operators" },
  { code: "uplus",          aliases: [],                              symbol: "⊎", name: "Multiset union",                     category: "Binary Operators" },
  { code: "sqcap",          aliases: [],                              symbol: "⊓", name: "Square cap",                        category: "Binary Operators" },
  { code: "sqcup",          aliases: [],                              symbol: "⊔", name: "Square cup",                        category: "Binary Operators" },

  // ── Relational Operators ───────────────────────────────────────────
  { code: "nlt",            aliases: ["notlt"],                       symbol: "≮", name: "Not less than",                      category: "Relational Operators" },
  { code: "nleq",           aliases: [],                              symbol: "≰", name: "Not less than or equal",             category: "Relational Operators" },
  { code: "ngt",            aliases: ["notgt"],                       symbol: "≯", name: "Not greater than",                   category: "Relational Operators" },
  { code: "ngeq",           aliases: [],                              symbol: "≱", name: "Not greater than or equal",          category: "Relational Operators" },
  { code: "nequiv",         aliases: [],                              symbol: "≢", name: "Not identical to",                   category: "Relational Operators" },
  { code: "simeq",          aliases: [],                              symbol: "≃", name: "Asymptotically equal to",            category: "Relational Operators" },
  { code: "nsimeq",         aliases: [],                              symbol: "≄", name: "Not asymptotically equal",           category: "Relational Operators" },
  { code: "notapprox",      aliases: [],                              symbol: "≉", name: "Not almost equal to",                category: "Relational Operators" },
  { code: "ncong",          aliases: ["notcong"],                     symbol: "≇", name: "Not congruent to",                   category: "Relational Operators" },
  { code: "notin",          aliases: [],                              symbol: "∉", name: "Not an element of",                  category: "Relational Operators" },
  { code: "subset",         aliases: [],                              symbol: "⊂", name: "Subset of",                          category: "Relational Operators" },
  { code: "supset",         aliases: [],                              symbol: "⊃", name: "Superset of",                        category: "Relational Operators" },
  { code: "subseteq",       aliases: [],                              symbol: "⊆", name: "Subset of or equal to",              category: "Relational Operators" },
  { code: "supseteq",       aliases: [],                              symbol: "⊇", name: "Superset of or equal to",            category: "Relational Operators" },
  { code: "prec",           aliases: [],                              symbol: "≺", name: "Precedes",                           category: "Relational Operators" },
  { code: "succ",           aliases: [],                              symbol: "≻", name: "Succeeds",                           category: "Relational Operators" },
  { code: "preceq",         aliases: [],                              symbol: "≼", name: "Precedes or equal to",               category: "Relational Operators" },
  { code: "succeq",         aliases: [],                              symbol: "≽", name: "Succeeds or equal to",               category: "Relational Operators" },
  { code: "sqsubset",       aliases: [],                              symbol: "⊏", name: "Square subset",                     category: "Relational Operators" },
  { code: "sqsupset",       aliases: [],                              symbol: "⊐", name: "Square superset",                   category: "Relational Operators" },
  { code: "sqsubseteq",     aliases: [],                              symbol: "⊑", name: "Square subset or equal",            category: "Relational Operators" },
  { code: "sqsupseteq",     aliases: [],                              symbol: "⊒", name: "Square superset or equal",          category: "Relational Operators" },
  { code: "parallel",       aliases: [],                              symbol: "∥", name: "Parallel to",                        category: "Relational Operators" },
  { code: "perp",           aliases: ["perpendicular"],               symbol: "⊥", name: "Perpendicular to",                  category: "Relational Operators" },
  { code: "vdash",          aliases: ["proves"],                      symbol: "⊢", name: "Proves",                             category: "Relational Operators" },
  { code: "dashv",          aliases: [],                              symbol: "⊣", name: "Does not yield",                     category: "Relational Operators" },
  { code: "top",            aliases: ["tautology"],                   symbol: "⊤", name: "Tautology (always true)",            category: "Relational Operators" },
  { code: "bot",            aliases: ["false", "contradiction"],      symbol: "⊥", name: "Contradiction (always false)",       category: "Relational Operators" },
  { code: "bowtie",         aliases: ["join"],                        symbol: "⋈", name: "Natural join",                       category: "Relational Operators" },
  { code: "asymp",          aliases: [],                              symbol: "≍", name: "Approximately equal or image of",    category: "Relational Operators" },

  // ── N-ary Operators ─────────────────────────────────────────────────
  { code: "sum",            aliases: [],                              symbol: "∑", name: "Summation",                          category: "N-ary Operators" },
  { code: "prod",           aliases: ["product"],                     symbol: "∏", name: "Product",                            category: "N-ary Operators" },
  { code: "amalg",          aliases: ["coprod"],                      symbol: "∐", name: "Coproduct",                          category: "N-ary Operators" },
  { code: "int",            aliases: ["integral"],                    symbol: "∫", name: "Integral",                           category: "N-ary Operators" },
  { code: "iint",           aliases: ["doubleint"],                   symbol: "∬", name: "Double integral",                    category: "N-ary Operators" },
  { code: "iiint",          aliases: ["tripleint"],                   symbol: "∭", name: "Triple integral",                    category: "N-ary Operators" },
  { code: "pprime",         aliases: ["dprime", "doubleprime"],       symbol: "″", name: "Double prime",                       category: "N-ary Operators" },
  { code: "ppprime",        aliases: ["tprime", "tripleprime"],       symbol: "‴", name: "Triple prime",                       category: "N-ary Operators" },
  { code: "pppprime",       aliases: ["qprime", "quadprime"],         symbol: "⁗", name: "Quadruple prime",                    category: "N-ary Operators" },
  { code: "oint",           aliases: ["contint"],                     symbol: "∮", name: "Contour integral",                   category: "N-ary Operators" },
  { code: "oiint",          aliases: [],                              symbol: "∯", name: "Surface integral",                   category: "N-ary Operators" },
  { code: "oiiint",         aliases: [],                              symbol: "∰", name: "Volume integral",                    category: "N-ary Operators" },
  { code: "cwint",          aliases: [],                              symbol: "∱", name: "Clockwise integral",                 category: "N-ary Operators" },
  { code: "coint",          aliases: [],                              symbol: "∲", name: "Clockwise contour integral",         category: "N-ary Operators" },
  { code: "aoint",          aliases: [],                              symbol: "∳", name: "Anticlockwise contour integral",     category: "N-ary Operators" },
  { code: "bigcap",         aliases: ["Intersection"],                symbol: "⋂", name: "N-ary intersection",                 category: "N-ary Operators" },
  { code: "bigcup",         aliases: ["Union"],                       symbol: "⋃", name: "N-ary union",                        category: "N-ary Operators" },
  { code: "bigwedge",       aliases: [],                              symbol: "⋀", name: "N-ary logical AND",                  category: "N-ary Operators" },
  { code: "bigvee",         aliases: [],                              symbol: "⋁", name: "N-ary logical OR",                   category: "N-ary Operators" },
  { code: "bigodot",        aliases: [],                              symbol: "⨀", name: "N-ary circled dot operator",         category: "N-ary Operators" },
  { code: "bigotimes",      aliases: [],                              symbol: "⨂", name: "N-ary circled times operator",       category: "N-ary Operators" },
  { code: "biguplus",       aliases: [],                              symbol: "⨄", name: "N-ary union operator with plus",     category: "N-ary Operators" },
  { code: "bigcapdot",      aliases: ["bigudot"],                     symbol: "⨃", name: "N-ary intersection with dot",        category: "N-ary Operators" },

  // ── Logic / Boolean Operations ────────────────────────────────────────────
  { code: "wedge",          aliases: ["and", "land"],                 symbol: "∧", name: "Logical AND (conjunction)",          category: "Logic / Boolean Operations" },
  { code: "vee",            aliases: ["or", "lor"],                   symbol: "∨", name: "Logical OR (disjunction)",           category: "Logic / Boolean Operations" },
  { code: "nand",           aliases: [],                              symbol: "⊼", name: "NAND",                               category: "Logic / Boolean Operations" },
  { code: "nor",            aliases: [],                              symbol: "⊽", name: "NOR",                                category: "Logic / Boolean Operations" },
  { code: "oplus",          aliases: ["xor", "directsum"],            symbol: "⊕", name: "Exclusive OR / direct sum (XOR)",   category: "Logic / Boolean Operations" },
  { code: "odot",           aliases: ["xnor"],                        symbol: "⊙", name: "Exclusive NOR (XNOR)",              category: "Logic / Boolean Operations" },

  // ── Binary Operators (Advanced) ─────────────────────────────────────────────
  { code: "dotplus",        aliases: [],                              symbol: "∔", name: "Dot plus",                           category: "Binary Operators (Advanced)" },
  { code: "dotminus",       aliases: [],                              symbol: "∸", name: "Dot minus",                          category: "Binary Operators (Advanced)" },
  { code: "setminus",       aliases: ["diff"],                        symbol: "∖", name: "Set minus (backslash)",              category: "Binary Operators (Advanced)" },
  { code: "Cap",            aliases: [],                              symbol: "⋒", name: "Double intersection",                category: "Binary Operators (Advanced)" },
  { code: "Cup",            aliases: [],                              symbol: "⋓", name: "Double union",                       category: "Binary Operators (Advanced)" },
  { code: "boxminus",       aliases: [],                              symbol: "⊟", name: "Squared minus",                     category: "Binary Operators (Advanced)" },
  { code: "boxtimes",       aliases: [],                              symbol: "⊠", name: "Squared times",                     category: "Binary Operators (Advanced)" },
  { code: "boxdot",         aliases: [],                              symbol: "⊡", name: "Squared dot operator",              category: "Binary Operators (Advanced)" },
  { code: "boxplus",        aliases: [],                              symbol: "⊞", name: "Squared plus",                      category: "Binary Operators (Advanced)" },
  { code: "divideontimes",  aliases: [],                              symbol: "⋇", name: "Division times",                    category: "Binary Operators (Advanced)" },
  { code: "ltimes",         aliases: [],                              symbol: "⋉", name: "Left semidirect product",            category: "Binary Operators (Advanced)" },
  { code: "rtimes",         aliases: [],                              symbol: "⋊", name: "Right semidirect product",           category: "Binary Operators (Advanced)" },
  { code: "leftthreetimes", aliases: [],                              symbol: "⋋", name: "Left three times",                  category: "Binary Operators (Advanced)" },
  { code: "rightthreetimes",aliases: [],                              symbol: "⋌", name: "Right three times",                 category: "Binary Operators (Advanced)" },
  { code: "curlywedge",     aliases: [],                              symbol: "⋏", name: "Curly logical AND",                  category: "Binary Operators (Advanced)" },
  { code: "curlyvee",       aliases: [],                              symbol: "⋎", name: "Curly logical OR",                   category: "Binary Operators (Advanced)" },
  { code: "odash",          aliases: [],                              symbol: "⊝", name: "Circled dash",                      category: "Binary Operators (Advanced)" },
  { code: "intercal",       aliases: [],                              symbol: "⊺", name: "Intercalate",                       category: "Binary Operators (Advanced)" },
  { code: "ominus",         aliases: [],                              symbol: "⊖", name: "Circled minus",                     category: "Binary Operators (Advanced)" },
  { code: "otimes",         aliases: ["tensor", "kron"],              symbol: "⊗", name: "Circled times / tensor product",    category: "Binary Operators (Advanced)" },
  { code: "oslash",         aliases: [],                              symbol: "⊘", name: "Circled division slash",            category: "Binary Operators (Advanced)" },
  { code: "oast",           aliases: [],                              symbol: "⊛", name: "Circled asterisk operator",         category: "Binary Operators (Advanced)" },
  { code: "ocirc",          aliases: [],                              symbol: "⊚", name: "Circled ring operator",             category: "Binary Operators (Advanced)" },
  { code: "dagger",         aliases: ["dag"],                         symbol: "†", name: "Dagger",                            category: "Binary Operators (Advanced)" },
  { code: "ddag",           aliases: ["ddagger"],                     symbol: "‡", name: "Double dagger",                     category: "Binary Operators (Advanced)" },
  { code: "star",           aliases: [],                              symbol: "⋆", name: "Star operator",                     category: "Binary Operators (Advanced)" },
  { code: "diamond",        aliases: [],                              symbol: "⋄", name: "Diamond operator",                  category: "Binary Operators (Advanced)" },
  { code: "wr",             aliases: [],                              symbol: "≀", name: "Wreath product",                    category: "Binary Operators (Advanced)" },
  { code: "bigoplus",       aliases: [],                              symbol: "⨁", name: "N-ary circled plus operator",       category: "Binary Operators (Advanced)" },
  { code: "bigsqcap",       aliases: [],                              symbol: "⨅", name: "N-ary square intersection",         category: "Binary Operators (Advanced)" },
  { code: "bigsqcup",       aliases: [],                              symbol: "⨆", name: "N-ary square union",               category: "Binary Operators (Advanced)" },

  // ── Relational Operators (Advanced) ─────────────────────────────────────────
  { code: "because",        aliases: [],                              symbol: "∵", name: "Because",                            category: "Relational Operators (Advanced)" },
  { code: "lll",            aliases: [],                              symbol: "⋘", name: "Very much less than",                category: "Relational Operators (Advanced)" },
  { code: "ggg",            aliases: [],                              symbol: "⋙", name: "Very much greater than",             category: "Relational Operators (Advanced)" },
  { code: "leqq",           aliases: [],                              symbol: "≦", name: "Less than over equal to",            category: "Relational Operators (Advanced)" },
  { code: "geqq",           aliases: [],                              symbol: "≧", name: "Greater than over equal to",         category: "Relational Operators (Advanced)" },
  { code: "lesssim",        aliases: [],                              symbol: "≲", name: "Less than and similar to",           category: "Relational Operators (Advanced)" },
  { code: "gtrsim",         aliases: [],                              symbol: "≳", name: "Greater than and similar to",        category: "Relational Operators (Advanced)" },
  { code: "lessdot",        aliases: [],                              symbol: "⋖", name: "Less than with dot",                 category: "Relational Operators (Advanced)" },
  { code: "gtrdot",         aliases: [],                              symbol: "⋗", name: "Greater than with dot",              category: "Relational Operators (Advanced)" },
  { code: "lessgtr",        aliases: [],                              symbol: "≶", name: "Less than or greater than",          category: "Relational Operators (Advanced)" },
  { code: "lesseqgtr",      aliases: [],                              symbol: "⋚", name: "Less than but not equivalent to",   category: "Relational Operators (Advanced)" },
  { code: "gtrless",        aliases: [],                              symbol: "≷", name: "Greater than or less than",          category: "Relational Operators (Advanced)" },
  { code: "gtreqless",      aliases: [],                              symbol: "⋛", name: "Greater than but not equivalent to", category: "Relational Operators (Advanced)" },
  { code: "Doteq",          aliases: [],                              symbol: "≑", name: "Geometrically equal to",             category: "Relational Operators (Advanced)" },
  { code: "fallingdotseq",  aliases: [],                              symbol: "≒", name: "Approximately equal or image of",   category: "Relational Operators (Advanced)" },
  { code: "risingdotseq",   aliases: [],                              symbol: "≓", name: "Image of or approximately equal to", category: "Relational Operators (Advanced)" },
  { code: "backsim",        aliases: [],                              symbol: "∽", name: "Reversed tilde",                    category: "Relational Operators (Advanced)" },
  { code: "approxeq",       aliases: [],                              symbol: "≊", name: "Almost equal or equivalent",        category: "Relational Operators (Advanced)" },
  { code: "backsimeq",      aliases: [],                              symbol: "⋍", name: "Reversed tilde equals",             category: "Relational Operators (Advanced)" },
  { code: "eqless",         aliases: [],                              symbol: "⋜", name: "Equal to or less than",             category: "Relational Operators (Advanced)" },
  { code: "eqgtr",          aliases: [],                              symbol: "⋝", name: "Equal to or greater than",          category: "Relational Operators (Advanced)" },
  { code: "precsim",        aliases: [],                              symbol: "≾", name: "Precedes but not equivalent",       category: "Relational Operators (Advanced)" },
  { code: "succsim",        aliases: [],                              symbol: "≿", name: "Succeeds or equivalent to",         category: "Relational Operators (Advanced)" },
  { code: "vartriangleleft",aliases: [],                              symbol: "⊲", name: "Normal subgroup of",               category: "Relational Operators (Advanced)" },
  { code: "vartriangleright",aliases: [],                             symbol: "⊳", name: "Contains as normal subgroup",      category: "Relational Operators (Advanced)" },
  { code: "trianglelefteq", aliases: [],                              symbol: "⊴", name: "Normal subgroup or equal",         category: "Relational Operators (Advanced)" },
  { code: "trianglerighteq",aliases: [],                              symbol: "⊵", name: "Contains as normal subgroup or equal", category: "Relational Operators (Advanced)" },
  { code: "models",         aliases: ["entailment", "true"],          symbol: "⊨", name: "Entailment / models",               category: "Relational Operators (Advanced)" },
  { code: "Subset",         aliases: [],                              symbol: "⋐", name: "Nested subset",                    category: "Relational Operators (Advanced)" },
  { code: "Supset",         aliases: [],                              symbol: "⋑", name: "Nested superset",                  category: "Relational Operators (Advanced)" },
  { code: "vDash",          aliases: ["forces"],                      symbol: "⊩", name: "Forces",                           category: "Relational Operators (Advanced)" },
  { code: "Vvdash",         aliases: [],                              symbol: "⊪", name: "Triple vertical bar with turnstile", category: "Relational Operators (Advanced)" },
  { code: "eqcirc",         aliases: [],                              symbol: "≖", name: "Circle with equals sign",          category: "Relational Operators (Advanced)" },
  { code: "circeq",         aliases: [],                              symbol: "≗", name: "Ring equal to",                    category: "Relational Operators (Advanced)" },
  { code: "Deltaeq",        aliases: [],                              symbol: "≜", name: "Delta equal to",                   category: "Relational Operators (Advanced)" },
  { code: "bumpe",          aliases: [],                              symbol: "≏", name: "Difference between",               category: "Relational Operators (Advanced)" },
  { code: "bumpeq",         aliases: [],                              symbol: "≎", name: "Geometrically equivalent to",      category: "Relational Operators (Advanced)" },
  { code: "between",        aliases: [],                              symbol: "≬", name: "Between",                          category: "Relational Operators (Advanced)" },
  { code: "pitchfork",      aliases: [],                              symbol: "⋔", name: "Pitchfork",                        category: "Relational Operators (Advanced)" },
  { code: "doteq",          aliases: [],                              symbol: "≐", name: "Approaches the limit",             category: "Relational Operators (Advanced)" },

  // ── Matrix Operations ─────────────────────────────────────────────────────
  { code: "kron",           aliases: [],                              symbol: "⊗", name: "Kronecker product",                 category: "Matrix Operations" },
  { code: "hadamard",       aliases: [],                              symbol: "⊙", name: "Hadamard product",                  category: "Matrix Operations" },
  { code: "adjoint",        aliases: [],                              symbol: "†", name: "Adjoint / Hermitian transpose",     category: "Matrix Operations" },
  { code: "identity",       aliases: [],                              symbol: "𝐈", name: "Identity matrix",                   category: "Matrix Operations" },
  { code: "directsum",      aliases: [],                              symbol: "⊕", name: "Direct sum",                       category: "Matrix Operations" },

  // ── Arrows ─────────────────────────────────────────────────────────────────
  { code: "rightarrow",     aliases: ["to"],                          symbol: "→", name: "Right arrow",                       category: "Arrows" },
  { code: "leftarrow",      aliases: ["gets"],                        symbol: "←", name: "Left arrow",                        category: "Arrows" },
  { code: "uparrow",        aliases: [],                              symbol: "↑", name: "Up arrow",                          category: "Arrows" },
  { code: "downarrow",      aliases: [],                              symbol: "↓", name: "Down arrow",                        category: "Arrows" },
  { code: "leftrightarrow", aliases: [],                              symbol: "↔", name: "Left-right arrow",                  category: "Arrows" },
  { code: "updownarrow",    aliases: [],                              symbol: "↕", name: "Up-down arrow",                     category: "Arrows" },
  { code: "Rightarrow",     aliases: ["Implies", "Implication"],      symbol: "⇒", name: "Double right arrow (implies)",      category: "Arrows" },
  { code: "Leftarrow",      aliases: [],                              symbol: "⇐", name: "Double left arrow",                 category: "Arrows" },
  { code: "Leftrightarrow", aliases: ["Biconditional", "iff"],        symbol: "⇔", name: "Biconditional (if and only if)",    category: "Arrows" },
  { code: "Uparrow",        aliases: [],                              symbol: "⇑", name: "Double up arrow",                   category: "Arrows" },
  { code: "Downarrow",      aliases: [],                              symbol: "⇓", name: "Double down arrow",                 category: "Arrows" },
  { code: "Updownarrow",    aliases: [],                              symbol: "⇕", name: "Up-down double arrow",              category: "Arrows" },
  { code: "longrightarrow", aliases: [],                              symbol: "⟶", name: "Long right arrow",                  category: "Arrows" },
  { code: "longleftarrow",  aliases: [],                              symbol: "⟵", name: "Long left arrow",                   category: "Arrows" },
  { code: "longleftrightarrow", aliases: [],                          symbol: "⟷", name: "Long left-right arrow",             category: "Arrows" },
  { code: "Longrightarrow", aliases: ["implies"],                     symbol: "⟹", name: "Long double right arrow",           category: "Arrows" },
  { code: "Longleftarrow",  aliases: [],                              symbol: "⟸", name: "Long double left arrow",            category: "Arrows" },
  { code: "Longleftrightarrow", aliases: [],                          symbol: "⟺", name: "Long biconditional",                category: "Arrows" },
  { code: "nearrow",        aliases: [],                              symbol: "↗", name: "Diagonal upward right arrow",       category: "Arrows" },
  { code: "nwarrow",        aliases: [],                              symbol: "↖", name: "Diagonal upward left arrow",        category: "Arrows" },
  { code: "searrow",        aliases: [],                              symbol: "↘", name: "Diagonal downward right arrow",     category: "Arrows" },
  { code: "swarrow",        aliases: [],                              symbol: "↙", name: "Diagonal downward left arrow",      category: "Arrows" },
  { code: "nleftarrow",     aliases: [],                              symbol: "↚", name: "Left arrow with stroke",            category: "Arrows" },
  { code: "nrightarrow",    aliases: [],                              symbol: "↛", name: "Right arrow with stroke",           category: "Arrows" },
  { code: "nleftrightarrow",aliases: [],                              symbol: "↮", name: "Left-right arrow with stroke",      category: "Arrows" },
  { code: "nLeftarrow",     aliases: [],                              symbol: "⇍", name: "Left double arrow with stroke",     category: "Arrows" },
  { code: "nRightarrow",    aliases: [],                              symbol: "⇏", name: "Right double arrow with stroke",    category: "Arrows" },
  { code: "nLeftrightarrow",aliases: [],                              symbol: "⇎", name: "Left-right double arrow with stroke", category: "Arrows" },
  { code: "dasharrowleft",  aliases: [],                              symbol: "⇠", name: "Left dashed arrow",                 category: "Arrows" },
  { code: "dasharrowright", aliases: [],                              symbol: "⇢", name: "Right dashed arrow",                category: "Arrows" },
  { code: "mapstoleft",     aliases: [],                              symbol: "↤", name: "Left arrow from bar",               category: "Arrows" },
  { code: "mapsto",         aliases: ["maps"],                        symbol: "↦", name: "Maps to (right arrow from bar)",    category: "Arrows" },
  { code: "longmapstoleft", aliases: [],                              symbol: "⟻", name: "Long left arrow from bar",          category: "Arrows" },
  { code: "longmapsto",     aliases: [],                              symbol: "⟼", name: "Long maps to",                      category: "Arrows" },
  { code: "hookleftarrow",  aliases: [],                              symbol: "↩", name: "Left arrow with hook",              category: "Arrows" },
  { code: "hookrightarrow", aliases: ["hook"],                        symbol: "↪", name: "Right arrow with hook",             category: "Arrows" },
  { code: "leftharpoonup",  aliases: [],                              symbol: "↼", name: "Left harpoon up",                   category: "Arrows" },
  { code: "leftharpoondown",aliases: [],                              symbol: "↽", name: "Left harpoon down",                 category: "Arrows" },
  { code: "rightharpoonup", aliases: [],                              symbol: "⇀", name: "Right harpoon up",                  category: "Arrows" },
  { code: "rightharpoondown",aliases: [],                             symbol: "⇁", name: "Right harpoon down",                category: "Arrows" },
  { code: "upharpoonleft",  aliases: [],                              symbol: "↿", name: "Upward harpoon left",               category: "Arrows" },
  { code: "upharpoonright", aliases: [],                              symbol: "↾", name: "Upward harpoon right",              category: "Arrows" },
  { code: "downharpoonleft",aliases: [],                              symbol: "⇃", name: "Downward harpoon left",             category: "Arrows" },
  { code: "downharpoonright",aliases: [],                             symbol: "⇂", name: "Downward harpoon right",            category: "Arrows" },
  { code: "leftrightharpoons",aliases: [],                            symbol: "⇋", name: "Left-right harpoons",               category: "Arrows" },
  { code: "rightleftharpoons",aliases: [],                            symbol: "⇌", name: "Right-left harpoons",               category: "Arrows" },
  { code: "leftleftarrows", aliases: [],                              symbol: "⇇", name: "Left paired arrows",                category: "Arrows" },
  { code: "rightrightarrows",aliases: [],                             symbol: "⇉", name: "Right paired arrows",               category: "Arrows" },
  { code: "upuparrows",     aliases: [],                              symbol: "⇈", name: "Upwards paired arrows",             category: "Arrows" },
  { code: "downdownarrows", aliases: ["downarrows"],                  symbol: "⇊", name: "Downwards paired arrows",           category: "Arrows" },
  { code: "leftrightarrows",aliases: [],                              symbol: "⇆", name: "Left arrow over right arrow",       category: "Arrows" },
  { code: "rightleftarrows",aliases: [],                              symbol: "⇄", name: "Right arrow over left arrow",       category: "Arrows" },
  { code: "looparrowleft",  aliases: [],                              symbol: "↫", name: "Left arrow with loop",              category: "Arrows" },
  { code: "looparrowright", aliases: [],                              symbol: "↬", name: "Right arrow with loop",             category: "Arrows" },
  { code: "leftarrowtail",  aliases: [],                              symbol: "↢", name: "Left arrow with tail",              category: "Arrows" },
  { code: "rightarrowtail", aliases: [],                              symbol: "↣", name: "Right arrow with tail",             category: "Arrows" },
  { code: "Lsh",            aliases: [],                              symbol: "↰", name: "Upward arrow with tip on left",     category: "Arrows" },
  { code: "Rsh",            aliases: [],                              symbol: "↱", name: "Upward arrow with tip on right",    category: "Arrows" },
  { code: "ldsh",           aliases: [],                              symbol: "↲", name: "Downward arrow with tip on left",   category: "Arrows" },
  { code: "rdsh",           aliases: [],                              symbol: "↳", name: "Downward arrow with tip on right",  category: "Arrows" },
  { code: "Lleftarrow",     aliases: [],                              symbol: "⇚", name: "Triple left arrow",                 category: "Arrows" },
  { code: "Rrightarrow",    aliases: [],                              symbol: "⇛", name: "Triple right arrow",                category: "Arrows" },
  { code: "twoheadleftarrow",aliases: [],                             symbol: "↞", name: "Two-headed left arrow",             category: "Arrows" },
  { code: "twoheadrightarrow",aliases: [],                            symbol: "↠", name: "Two-headed right arrow",            category: "Arrows" },
  { code: "curvearrowleft", aliases: [],                              symbol: "↶", name: "Anticlockwise arc arrow",           category: "Arrows" },
  { code: "curvearrowright",aliases: [],                              symbol: "↷", name: "Clockwise arc arrow",               category: "Arrows" },
  { code: "circlearrowleft",aliases: [],                              symbol: "↺", name: "Anticlockwise circle arrow",        category: "Arrows" },
  { code: "circlearrowright",aliases: [],                             symbol: "↻", name: "Clockwise circle arrow",            category: "Arrows" },
  { code: "multimap",       aliases: [],                              symbol: "⊸", name: "Multimap",                          category: "Arrows" },
  { code: "leftrightwavearrow",aliases: [],                           symbol: "↭", name: "Left-right wave arrow",             category: "Arrows" },
  { code: "leftwavearrow",  aliases: [],                              symbol: "↜", name: "Left wave arrow",                   category: "Arrows" },
  { code: "rightwavearrow", aliases: [],                              symbol: "↝", name: "Right wave arrow",                  category: "Arrows" },
  { code: "leftsquigarrow", aliases: [],                              symbol: "⇜", name: "Left squiggle arrow",               category: "Arrows" },
  { code: "rightsquigarrow",aliases: [],                              symbol: "⇝", name: "Right squiggle arrow",              category: "Arrows" },

  // ── Negated Relations ─────────────────────────────────────────────────────
  { code: "nsim",           aliases: [],                              symbol: "≁", name: "Not tilde",                          category: "Negated Relations" },
  { code: "nasymp",         aliases: [],                              symbol: "≭", name: "Not equivalent to",                  category: "Negated Relations" },
  { code: "lneqq",          aliases: [],                              symbol: "≨", name: "Less than but not equal to",         category: "Negated Relations" },
  { code: "gneqq",          aliases: [],                              symbol: "≩", name: "Greater than but not equal to",      category: "Negated Relations" },
  { code: "nprec",          aliases: [],                              symbol: "⊀", name: "Does not precede",                   category: "Negated Relations" },
  { code: "nsucc",          aliases: [],                              symbol: "⊁", name: "Does not succeed",                   category: "Negated Relations" },
  { code: "npreceq",        aliases: [],                              symbol: "⋠", name: "Does not precede or equal",          category: "Negated Relations" },
  { code: "nsucceq",        aliases: [],                              symbol: "⋡", name: "Does not succeed or equal",          category: "Negated Relations" },
  { code: "notni",          aliases: [],                              symbol: "∌", name: "Not contains as member",             category: "Negated Relations" },
  { code: "notsubset",      aliases: [],                              symbol: "⊄", name: "Not a subset of",                    category: "Negated Relations" },
  { code: "notsuperset",    aliases: [],                              symbol: "⊅", name: "Not a superset of",                  category: "Negated Relations" },
  { code: "notsubseteq",    aliases: [],                              symbol: "⊈", name: "Neither subset nor equal",           category: "Negated Relations" },
  { code: "notsuperseteq",  aliases: [],                              symbol: "⊉", name: "Neither superset nor equal",         category: "Negated Relations" },
  { code: "subsetnoteq",    aliases: [],                              symbol: "⊊", name: "Subset with not equal to",           category: "Negated Relations" },
  { code: "supsetnoteq",    aliases: ["supsetneq"],                   symbol: "⊋", name: "Superset with not equal to",         category: "Negated Relations" },
  { code: "nsqsubseteq",    aliases: [],                              symbol: "⋢", name: "Not square subset or equal",         category: "Negated Relations" },
];

/** All categories in the order they appear on the Microsoft reference page */
export const allCategories = [
  "Currency Symbols",
  "Basic Math",
  "Number Theory",
  "Statistics and Probability",
  "Greek Letters",
  "Letter-Like Symbols",
  "Binary Operators",
  "Relational Operators",
  "N-ary Operators",
  "Logic / Boolean Operations",
  "Binary Operators (Advanced)",
  "Relational Operators (Advanced)",
  "Matrix Operations",
  "Arrows",
  "Negated Relations",
];

/** Get all symbols in a category */
export function getSymbolsByCategory(category) {
  return mathSymbols.filter(s => s.category === category);
}

/**
 * Case-sensitive exact lookup by autocorrect code or alias.
 * Returns the symbol string, or null if not found.
 */
export function lookupByCode(code) {
  const sym = mathSymbols.find(s => s.code === code || s.aliases.includes(code));
  return sym ? sym.symbol : null;
}

/**
 * Finds a \code pattern immediately before `cursor` in `value` and converts it.
 * If `appendBackslash` is true, appends \ after the symbol (for chaining codes).
 * Returns { newValue, newCursor } or null if no convertible code is found.
 */
export function applyAutocorrect(value, cursor, appendBackslash = false) {
  let backslashIdx = -1;
  for (let i = cursor - 1; i >= 0; i--) {
    if (value[i] === "\\") { backslashIdx = i; break; }
    if (/\s/.test(value[i])) break;
  }
  if (backslashIdx === -1) return null;
  const code = value.slice(backslashIdx + 1, cursor);
  const sym = lookupByCode(code);
  if (!sym) return null;
  const insert = appendBackslash ? sym + "\\" : sym;
  const newValue = value.slice(0, backslashIdx) + insert + value.slice(cursor);
  const newCursor = backslashIdx + insert.length;
  return { newValue, newCursor };
}

/**
 * Search symbols and categories by:
 *  1. Autocorrect code (e.g. "pm", "alpha")
 *  2. Aliases
 *  3. Symbol name (e.g. "plus minus")
 *  4. Category (e.g. "basic math", "greek", "arrows")
 *
 * Returns up to 14 items (mix of category and symbol entries) sorted by relevance.
 * Symbol shape:   { type:"symbol",   code, aliases, symbol, name, category, score, matchOn }
 * Category shape: { type:"category", category, count, score }
 */
export function searchSymbols(query) {
  if (!query) return [];
  const q = query.toLowerCase();

  // --- Symbol matches ---
  const symbolResults = [];
  for (const sym of mathSymbols) {
    let score = 0;
    let matchOn = null;

    const codeLower = sym.code.toLowerCase();
    const nameLower = sym.name.toLowerCase();

    if (codeLower === q)              { score = 100; matchOn = "code"; }
    else if (codeLower.startsWith(q)) { score = 85;  matchOn = "code"; }
    else if (codeLower.includes(q))   { score = 65;  matchOn = "code"; }

    for (const alias of sym.aliases) {
      const a = alias.toLowerCase();
      if (a === q && score < 90)              { score = 90;  matchOn = "alias"; }
      else if (a.startsWith(q) && score < 80) { score = 80;  matchOn = "alias"; }
      else if (a.includes(q) && score < 55)   { score = 55;  matchOn = "alias"; }
    }

    if (nameLower === q && score < 75)              { score = 75; matchOn = "name"; }
    else if (nameLower.startsWith(q) && score < 60) { score = 60; matchOn = "name"; }
    else if (nameLower.includes(q) && score < 40)   { score = 40; matchOn = "name"; }

    if (score > 0) symbolResults.push({ type: "symbol", ...sym, score, matchOn });
  }
  symbolResults.sort((a, b) => b.score - a.score);

  // --- Category matches ---
  const catResults = [];
  for (const cat of allCategories) {
    const catLower = cat.toLowerCase();
    let score = 0;
    if (catLower === q)              score = 70;
    else if (catLower.startsWith(q)) score = 55;
    else if (catLower.includes(q))   score = 35;

    // Also match individual words in the category name (e.g. "greek" → "Greek Letters")
    const words = catLower.split(/[\s/]+/);
    if (!score) {
      if (words.some(w => w === q))               score = 50;
      else if (words.some(w => w.startsWith(q)))  score = 40;
      else if (words.some(w => w.includes(q)))    score = 20;
    }

    if (score > 0) {
      catResults.push({
        type: "category",
        section: "unicode",
        category: cat,
        count: mathSymbols.filter(s => s.category === cat).length,
        score,
      });
    }
  }
  catResults.sort((a, b) => b.score - a.score);

  // Interleave categories and symbols, categories bubble up when they score well
  const combined = [];
  let si = 0;
  let ci = 0;
  while (combined.length < 14 && (si < symbolResults.length || ci < catResults.length)) {
    const sym = symbolResults[si];
    const cat = catResults[ci];
    if (!sym && !cat) break;
    if (!cat || (sym && sym.score >= cat.score)) {
      combined.push(sym); si++;
    } else {
      combined.push(cat); ci++;
    }
  }
  return combined;
}
