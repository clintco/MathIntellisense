/**
 * Math AutoCorrect symbols sourced from Microsoft Office Math AutoCorrect.
 * Categories favor the structure of the DAISY/Microsoft reference:
 * https://daisy.github.io/math-a11y/docs/ms-math/List-of-Commonly-Used-Math-AutoCorrect-Entries-in-Word-365
 * Each symbol appears in exactly one category (its primary one).
 *
 * Each entry:
 *   code     - primary autocorrect code (without leading \)
 *   aliases  - alternative codes (without leading \)
 *   symbol   - the unicode character
 *   name     - human-readable symbol name
 *   category - category name
 *   rank     - usage frequency in math equations: 1=very common, 2=common, 3=specialized
 */
export const mathSymbols = [

  // ── Currency Symbols ──────────────────────────────────────────────────────
  { code: "cents",          aliases: [],                              symbol: "¢", name: "Cents sign",                          category: "Currency Symbols",                   rank: 3 },

  // ── Basic Symbols and Operations ──────────────────────────────────────────
  { code: "pm",             aliases: ["plusminus"],                   symbol: "±", name: "Plus minus",                          category: "Basic Symbols and Operations",        rank: 1 },
  { code: "mp",             aliases: ["minusplus"],                   symbol: "∓", name: "Minus plus",                          category: "Basic Symbols and Operations",        rank: 2 },
  { code: "infty",          aliases: ["infinity", "inf"],             symbol: "∞", name: "Infinity",                            category: "Basic Symbols and Operations",        rank: 1 },
  { code: "times",          aliases: [],                              symbol: "×", name: "Multiplication sign",                 category: "Basic Symbols and Operations",        rank: 1 },
  { code: "div",            aliases: ["divide"],                      symbol: "÷", name: "Division sign",                       category: "Basic Symbols and Operations",        rank: 2 },
  { code: "sqrt",           aliases: ["2root"],                       symbol: "√", name: "Radical sign",                        category: "Basic Symbols and Operations",        rank: 1 },
  { code: "cbrt",           aliases: ["3root"],                       symbol: "∛", name: "Cube root",                           category: "Basic Symbols and Operations",        rank: 2 },
  { code: "qdrt",           aliases: ["4root"],                       symbol: "∜", name: "Fourth root",                         category: "Basic Symbols and Operations",        rank: 3 },
  { code: "inc",            aliases: ["laplace"],                     symbol: "∆", name: "Increment",                           category: "Basic Symbols and Operations",        rank: 2 },
  { code: "overbar",        aliases: ["overline", "vinculum", "repeat", "repeating"], symbol: "‾", name: "Repeating decimal / overline", category: "Basic Symbols and Operations", rank: 2 },
  { code: "degree",         aliases: ["deg"],                         symbol: "°", name: "Degrees",                             category: "Basic Symbols and Operations",        rank: 1 },
  { code: "rad",            aliases: [],                              symbol: "㎭", name: "Radians",                             category: "Basic Symbols and Operations",        rank: 3 },
  { code: "ast",            aliases: [],                              symbol: "∗", name: "Asterisk operator",                   category: "Basic Symbols and Operations",        rank: 2 },
  { code: "bullet",         aliases: [],                              symbol: "∙", name: "Bullet operator",                     category: "Basic Symbols and Operations",        rank: 2 },
  { code: "circ",           aliases: ["comp"],                        symbol: "∘", name: "Ring operator / composition",        category: "Basic Symbols and Operations",        rank: 2 },
  { code: "cdot",           aliases: ["dot"],                         symbol: "⋅", name: "Dot operator",                       category: "Basic Symbols and Operations",        rank: 1 },
  { code: "prime",          aliases: [],                              symbol: "′", name: "Prime",                               category: "Basic Symbols and Operations",        rank: 1 },

  // ── Common Mathematical Relationships ─────────────────────────────────────
  { code: "neq",            aliases: ["ne", "notequal"],              symbol: "≠", name: "Not equal to",                        category: "Common Mathematical Relationships",   rank: 1 },
  { code: "sim",            aliases: [],                              symbol: "∼", name: "Approximately (similar to)",           category: "Common Mathematical Relationships",   rank: 2 },
  { code: "propto",         aliases: ["proportional"],                symbol: "∝", name: "Proportional to",                    category: "Common Mathematical Relationships",   rank: 2 },
  { code: "ll",             aliases: ["muchless"],                    symbol: "≪", name: "Much less than",                      category: "Common Mathematical Relationships",   rank: 2 },
  { code: "gg",             aliases: ["muchgreater"],                 symbol: "≫", name: "Much greater than",                   category: "Common Mathematical Relationships",   rank: 2 },
  { code: "leq",            aliases: ["le", "lte"],                   symbol: "≤", name: "Less than or equal to",               category: "Common Mathematical Relationships",   rank: 1 },
  { code: "geq",            aliases: ["ge", "gte"],                   symbol: "≥", name: "Greater than or equal to",            category: "Common Mathematical Relationships",   rank: 1 },
  { code: "cong",           aliases: ["congruent"],                   symbol: "≅", name: "Congruent to",                        category: "Common Mathematical Relationships",   rank: 2 },
  { code: "approx",         aliases: ["app"],                         symbol: "≈", name: "Almost equal to",                     category: "Common Mathematical Relationships",   rank: 1 },
  { code: "equiv",          aliases: ["identical"],                   symbol: "≡", name: "Identical to",                        category: "Common Mathematical Relationships",   rank: 1 },
  { code: "simeq",          aliases: [],                              symbol: "≃", name: "Asymptotically equal to",             category: "Common Mathematical Relationships",   rank: 3 },
  { code: "approxeq",       aliases: [],                              symbol: "≊", name: "Almost equal or equivalent",          category: "Common Mathematical Relationships",   rank: 3 },

  // ── Sets and Logic ─────────────────────────────────────────────────────────
  { code: "emptyset",       aliases: ["empty", "null"],               symbol: "∅", name: "Empty set",                           category: "Sets and Logic",                      rank: 1 },
  { code: "complement",     aliases: ["compl"],                       symbol: "∁", name: "Set complement",                      category: "Sets and Logic",                      rank: 3 },
  { code: "forall",         aliases: ["foreach", "all"],              symbol: "∀", name: "For all",                             category: "Sets and Logic",                      rank: 1 },
  { code: "exists",         aliases: ["forsome", "exist"],            symbol: "∃", name: "There exists",                        category: "Sets and Logic",                      rank: 1 },
  { code: "nexists",        aliases: ["notexists"],                   symbol: "∄", name: "There does not exist",                category: "Sets and Logic",                      rank: 3 },
  { code: "in",             aliases: ["element", "belongs"],          symbol: "∈", name: "Element of (belongs to)",             category: "Sets and Logic",                      rank: 1 },
  { code: "ni",             aliases: ["contains", "owns"],            symbol: "∋", name: "Contains as member",                  category: "Sets and Logic",                      rank: 3 },
  { code: "neg",            aliases: ["not", "lnot"],                 symbol: "¬", name: "Not sign",                            category: "Sets and Logic",                      rank: 1 },
  { code: "notin",          aliases: [],                              symbol: "∉", name: "Not an element of",                  category: "Sets and Logic",                      rank: 1 },
  { code: "subset",         aliases: [],                              symbol: "⊂", name: "Subset of",                          category: "Sets and Logic",                      rank: 1 },
  { code: "supset",         aliases: ["superset"],                    symbol: "⊃", name: "Superset of",                        category: "Sets and Logic",                      rank: 2 },
  { code: "subseteq",       aliases: [],                              symbol: "⊆", name: "Subset of or equal to",              category: "Sets and Logic",                      rank: 1 },
  { code: "supseteq",       aliases: ["superseteq"],                  symbol: "⊇", name: "Superset of or equal to",            category: "Sets and Logic",                      rank: 2 },
  { code: "notsubset",      aliases: [],                              symbol: "⊄", name: "Not a subset of",                    category: "Sets and Logic",                      rank: 3 },
  { code: "notsuperset",    aliases: [],                              symbol: "⊅", name: "Not a superset of",                  category: "Sets and Logic",                      rank: 3 },
  { code: "notsubseteq",    aliases: [],                              symbol: "⊈", name: "Neither subset nor equal",           category: "Sets and Logic",                      rank: 3 },
  { code: "notsuperseteq",  aliases: [],                              symbol: "⊉", name: "Neither superset nor equal",         category: "Sets and Logic",                      rank: 3 },
  { code: "subsetnoteq",    aliases: [],                              symbol: "⊊", name: "Subset with not equal to",           category: "Sets and Logic",                      rank: 3 },
  { code: "supsetnoteq",    aliases: ["supsetneq"],                   symbol: "⊋", name: "Superset with not equal to",         category: "Sets and Logic",                      rank: 3 },
  { code: "notni",          aliases: [],                              symbol: "∌", name: "Not contains as member",             category: "Sets and Logic",                      rank: 3 },
  { code: "cup",            aliases: ["union"],                       symbol: "∪", name: "Union",                              category: "Sets and Logic",                      rank: 1 },
  { code: "cap",            aliases: ["intersection"],                symbol: "∩", name: "Intersection",                       category: "Sets and Logic",                      rank: 1 },
  { code: "bigcup",         aliases: ["Union"],                       symbol: "⋃", name: "N-ary union",                        category: "Sets and Logic",                      rank: 1 },
  { code: "bigcap",         aliases: ["Intersection"],                symbol: "⋂", name: "N-ary intersection",                 category: "Sets and Logic",                      rank: 1 },
  { code: "setminus",       aliases: ["diff"],                        symbol: "∖", name: "Set minus (backslash)",              category: "Sets and Logic",                      rank: 2 },
  { code: "wedge",          aliases: ["and", "land"],                 symbol: "∧", name: "Logical AND (conjunction)",          category: "Sets and Logic",                      rank: 1 },
  { code: "vee",            aliases: ["or", "lor"],                   symbol: "∨", name: "Logical OR (disjunction)",           category: "Sets and Logic",                      rank: 1 },
  { code: "nand",           aliases: [],                              symbol: "⊼", name: "NAND",                               category: "Sets and Logic",                      rank: 3 },
  { code: "nor",            aliases: [],                              symbol: "⊽", name: "NOR",                                category: "Sets and Logic",                      rank: 3 },
  { code: "oplus",          aliases: ["xor"],                         symbol: "⊕", name: "Exclusive OR (XOR)",                 category: "Sets and Logic",                      rank: 2 },
  { code: "odot",           aliases: ["xnor"],                        symbol: "⊙", name: "Exclusive NOR (XNOR)",              category: "Sets and Logic",                      rank: 3 },

  // ── Special Sets ──────────────────────────────────────────────────────────
  { code: "doubleC",        aliases: ["complex"],                     symbol: "ℂ", name: "Complex numbers",                    category: "Special Sets",                        rank: 1 },
  { code: "doubleN",        aliases: ["naturals"],                    symbol: "ℕ", name: "Natural numbers",                    category: "Special Sets",                        rank: 1 },
  { code: "doubleQ",        aliases: ["rationals"],                   symbol: "ℚ", name: "Rational numbers",                   category: "Special Sets",                        rank: 1 },
  { code: "doubleR",        aliases: ["reals"],                       symbol: "ℝ", name: "Real numbers",                       category: "Special Sets",                        rank: 1 },
  { code: "doubleZ",        aliases: ["integers"],                    symbol: "ℤ", name: "Integers",                           category: "Special Sets",                        rank: 1 },
  { code: "doubleE",        aliases: ["expect"],                      symbol: "𝔼", name: "Expected value",                     category: "Special Sets",                        rank: 2 },
  { code: "doubleP",        aliases: ["prob"],                        symbol: "ℙ", name: "Probability",                        category: "Special Sets",                        rank: 2 },

  // ── Greek Letters ─────────────────────────────────────────────────────────
  { code: "alpha",          aliases: [],                              symbol: "α", name: "Alpha (lowercase)",                   category: "Greek Letters",                      rank: 1 },
  { code: "Alpha",          aliases: [],                              symbol: "Α", name: "Alpha (uppercase)",                   category: "Greek Letters",                      rank: 3 },
  { code: "beta",           aliases: [],                              symbol: "β", name: "Beta (lowercase)",                    category: "Greek Letters",                      rank: 1 },
  { code: "Beta",           aliases: [],                              symbol: "Β", name: "Beta (uppercase)",                    category: "Greek Letters",                      rank: 3 },
  { code: "gamma",          aliases: [],                              symbol: "γ", name: "Gamma (lowercase)",                   category: "Greek Letters",                      rank: 1 },
  { code: "Gamma",          aliases: [],                              symbol: "Γ", name: "Gamma (uppercase)",                   category: "Greek Letters",                      rank: 2 },
  { code: "delta",          aliases: [],                              symbol: "δ", name: "Delta (lowercase)",                   category: "Greek Letters",                      rank: 1 },
  { code: "Delta",          aliases: [],                              symbol: "Δ", name: "Delta (uppercase)",                   category: "Greek Letters",                      rank: 1 },
  { code: "epsilon",        aliases: [],                              symbol: "ε", name: "Epsilon (lowercase)",                 category: "Greek Letters",                      rank: 1 },
  { code: "varepsilon",     aliases: [],                              symbol: "ϵ", name: "Variant epsilon",                     category: "Greek Letters",                      rank: 2 },
  { code: "Epsilon",        aliases: [],                              symbol: "Ε", name: "Epsilon (uppercase)",                 category: "Greek Letters",                      rank: 3 },
  { code: "zeta",           aliases: [],                              symbol: "ζ", name: "Zeta (lowercase)",                    category: "Greek Letters",                      rank: 2 },
  { code: "Zeta",           aliases: [],                              symbol: "Ζ", name: "Zeta (uppercase)",                    category: "Greek Letters",                      rank: 3 },
  { code: "eta",            aliases: [],                              symbol: "η", name: "Eta (lowercase)",                     category: "Greek Letters",                      rank: 2 },
  { code: "Eta",            aliases: [],                              symbol: "Η", name: "Eta (uppercase)",                     category: "Greek Letters",                      rank: 3 },
  { code: "theta",          aliases: [],                              symbol: "θ", name: "Theta (lowercase)",                   category: "Greek Letters",                      rank: 1 },
  { code: "vartheta",       aliases: [],                              symbol: "ϑ", name: "Variant theta",                       category: "Greek Letters",                      rank: 3 },
  { code: "Theta",          aliases: [],                              symbol: "Θ", name: "Theta (uppercase)",                   category: "Greek Letters",                      rank: 2 },
  { code: "iota",           aliases: [],                              symbol: "ι", name: "Iota (lowercase)",                    category: "Greek Letters",                      rank: 3 },
  { code: "Iota",           aliases: [],                              symbol: "Ι", name: "Iota (uppercase)",                    category: "Greek Letters",                      rank: 3 },
  { code: "kappa",          aliases: [],                              symbol: "κ", name: "Kappa (lowercase)",                   category: "Greek Letters",                      rank: 2 },
  { code: "Kappa",          aliases: [],                              symbol: "Κ", name: "Kappa (uppercase)",                   category: "Greek Letters",                      rank: 3 },
  { code: "lambda",         aliases: [],                              symbol: "λ", name: "Lambda (lowercase)",                  category: "Greek Letters",                      rank: 1 },
  { code: "Lambda",         aliases: [],                              symbol: "Λ", name: "Lambda (uppercase)",                  category: "Greek Letters",                      rank: 2 },
  { code: "mu",             aliases: [],                              symbol: "μ", name: "Mu (lowercase)",                      category: "Greek Letters",                      rank: 1 },
  { code: "Mu",             aliases: [],                              symbol: "Μ", name: "Mu (uppercase)",                      category: "Greek Letters",                      rank: 3 },
  { code: "nu",             aliases: [],                              symbol: "ν", name: "Nu (lowercase)",                      category: "Greek Letters",                      rank: 2 },
  { code: "Nu",             aliases: [],                              symbol: "Ν", name: "Nu (uppercase)",                      category: "Greek Letters",                      rank: 3 },
  { code: "xi",             aliases: [],                              symbol: "ξ", name: "Xi (lowercase)",                      category: "Greek Letters",                      rank: 2 },
  { code: "Xi",             aliases: [],                              symbol: "Ξ", name: "Xi (uppercase)",                      category: "Greek Letters",                      rank: 3 },
  { code: "omicron",        aliases: [],                              symbol: "ο", name: "Omicron (lowercase)",                 category: "Greek Letters",                      rank: 3 },
  { code: "Omicron",        aliases: [],                              symbol: "Ο", name: "Omicron (uppercase)",                 category: "Greek Letters",                      rank: 3 },
  { code: "pi",             aliases: [],                              symbol: "π", name: "Pi (lowercase)",                      category: "Greek Letters",                      rank: 1 },
  { code: "varpi",          aliases: [],                              symbol: "ϖ", name: "Variant pi",                          category: "Greek Letters",                      rank: 3 },
  { code: "Pi",             aliases: [],                              symbol: "Π", name: "Pi (uppercase)",                      category: "Greek Letters",                      rank: 2 },
  { code: "rho",            aliases: [],                              symbol: "ρ", name: "Rho (lowercase)",                     category: "Greek Letters",                      rank: 2 },
  { code: "varrho",         aliases: [],                              symbol: "ϱ", name: "Variant rho",                         category: "Greek Letters",                      rank: 3 },
  { code: "Rho",            aliases: [],                              symbol: "Ρ", name: "Rho (uppercase)",                     category: "Greek Letters",                      rank: 3 },
  { code: "sigma",          aliases: [],                              symbol: "σ", name: "Sigma (lowercase)",                   category: "Greek Letters",                      rank: 1 },
  { code: "varsigma",       aliases: [],                              symbol: "ς", name: "Variant sigma",                       category: "Greek Letters",                      rank: 3 },
  { code: "Sigma",          aliases: [],                              symbol: "Σ", name: "Sigma (uppercase)",                   category: "Greek Letters",                      rank: 1 },
  { code: "tau",            aliases: [],                              symbol: "τ", name: "Tau (lowercase)",                     category: "Greek Letters",                      rank: 2 },
  { code: "Tau",            aliases: [],                              symbol: "Τ", name: "Tau (uppercase)",                     category: "Greek Letters",                      rank: 3 },
  { code: "upsilon",        aliases: [],                              symbol: "υ", name: "Upsilon (lowercase)",                 category: "Greek Letters",                      rank: 3 },
  { code: "Upsilon",        aliases: [],                              symbol: "Υ", name: "Upsilon (uppercase)",                 category: "Greek Letters",                      rank: 3 },
  { code: "phi",            aliases: [],                              symbol: "ϕ", name: "Phi (lowercase)",                     category: "Greek Letters",                      rank: 1 },
  { code: "varphi",         aliases: [],                              symbol: "φ", name: "Variant phi",                         category: "Greek Letters",                      rank: 2 },
  { code: "Phi",            aliases: [],                              symbol: "Φ", name: "Phi (uppercase)",                     category: "Greek Letters",                      rank: 2 },
  { code: "chi",            aliases: [],                              symbol: "χ", name: "Chi (lowercase)",                     category: "Greek Letters",                      rank: 2 },
  { code: "Chi",            aliases: [],                              symbol: "Χ", name: "Chi (uppercase)",                     category: "Greek Letters",                      rank: 3 },
  { code: "psi",            aliases: [],                              symbol: "ψ", name: "Psi (lowercase)",                     category: "Greek Letters",                      rank: 2 },
  { code: "Psi",            aliases: [],                              symbol: "Ψ", name: "Psi (uppercase)",                     category: "Greek Letters",                      rank: 2 },
  { code: "omega",          aliases: [],                              symbol: "ω", name: "Omega (lowercase)",                   category: "Greek Letters",                      rank: 1 },
  { code: "Omega",          aliases: [],                              symbol: "Ω", name: "Omega (uppercase)",                   category: "Greek Letters",                      rank: 2 },

  // ── Calculus and Analysis ─────────────────────────────────────────────────
  { code: "partial",        aliases: [],                              symbol: "∂", name: "Partial differential",                category: "Calculus and Analysis",               rank: 1 },
  { code: "nabla",          aliases: ["grad"],                        symbol: "∇", name: "Nabla / Gradient",                    category: "Calculus and Analysis",               rank: 2 },
  { code: "sum",            aliases: [],                              symbol: "∑", name: "Summation",                          category: "Calculus and Analysis",               rank: 1 },
  { code: "prod",           aliases: ["product"],                     symbol: "∏", name: "Product",                            category: "Calculus and Analysis",               rank: 1 },
  { code: "int",            aliases: ["integral"],                    symbol: "∫", name: "Integral",                           category: "Calculus and Analysis",               rank: 1 },
  { code: "iint",           aliases: ["doubleint"],                   symbol: "∬", name: "Double integral",                    category: "Calculus and Analysis",               rank: 2 },
  { code: "iiint",          aliases: ["tripleint"],                   symbol: "∭", name: "Triple integral",                    category: "Calculus and Analysis",               rank: 2 },
  { code: "oint",           aliases: ["contint"],                     symbol: "∮", name: "Contour integral",                   category: "Calculus and Analysis",               rank: 2 },
  { code: "oiint",          aliases: [],                              symbol: "∯", name: "Surface integral",                   category: "Calculus and Analysis",               rank: 3 },
  { code: "oiiint",         aliases: [],                              symbol: "∰", name: "Volume integral",                    category: "Calculus and Analysis",               rank: 3 },
  { code: "cwint",          aliases: [],                              symbol: "∱", name: "Clockwise integral",                 category: "Calculus and Analysis",               rank: 3 },
  { code: "coint",          aliases: [],                              symbol: "∲", name: "Clockwise contour integral",         category: "Calculus and Analysis",               rank: 3 },
  { code: "aoint",          aliases: [],                              symbol: "∳", name: "Anticlockwise contour integral",     category: "Calculus and Analysis",               rank: 3 },
  { code: "pprime",         aliases: ["dprime", "doubleprime"],       symbol: "″", name: "Double prime",                       category: "Calculus and Analysis",               rank: 2 },
  { code: "ppprime",        aliases: ["tprime", "tripleprime"],       symbol: "‴", name: "Triple prime",                       category: "Calculus and Analysis",               rank: 3 },
  { code: "pppprime",       aliases: ["qprime", "quadprime"],         symbol: "⁗", name: "Quadruple prime",                    category: "Calculus and Analysis",               rank: 3 },

  // ── Geometry and Vectors ──────────────────────────────────────────────────
  { code: "circle",         aliases: [],                              symbol: "◯", name: "Circle",                              category: "Geometry and Vectors",                rank: 1 },
  { code: "circledot",      aliases: ["odotgeo"],                     symbol: "⊙", name: "Circle with dot inside",             category: "Geometry and Vectors",                rank: 2 },
  { code: "tvec",           aliases: ["line"],                        symbol: "⃡", name: "Line (left-right arrow above)",      category: "Geometry and Vectors",                rank: 2 },
  { code: "seg",            aliases: ["segment"],                     symbol: "¯", name: "Segment",                             category: "Geometry and Vectors",                rank: 2 },
  { code: "rightangle",     aliases: [],                              symbol: "∟", name: "Right angle",                         category: "Geometry and Vectors",                rank: 1 },
  { code: "angle",          aliases: [],                              symbol: "∠", name: "Angle",                               category: "Geometry and Vectors",                rank: 1 },
  { code: "angmsd",         aliases: ["measangle"],                   symbol: "∡", name: "Measured angle",                      category: "Geometry and Vectors",                rank: 2 },
  { code: "angsph",         aliases: [],                              symbol: "∢", name: "Spherical angle",                     category: "Geometry and Vectors",                rank: 3 },
  { code: "angrtvb",        aliases: [],                              symbol: "⊾", name: "Right angle with arc",               category: "Geometry and Vectors",                rank: 2 },
  { code: "rtriangle",      aliases: ["righttriangle"],               symbol: "⊿", name: "Right triangle",                     category: "Geometry and Vectors",                rank: 2 },
  { code: "triangle",       aliases: [],                              symbol: "△", name: "Triangle",                            category: "Geometry and Vectors",                rank: 1 },
  { code: "parallelogram",  aliases: [],                              symbol: "▱", name: "Parallelogram",                       category: "Geometry and Vectors",                rank: 2 },
  { code: "epar",           aliases: ["equalparallel"],               symbol: "⋕", name: "Equal and parallel to",              category: "Geometry and Vectors",                rank: 2 },
  { code: "nparallel",      aliases: ["notparallel"],                 symbol: "∦", name: "Not parallel to",                    category: "Geometry and Vectors",                rank: 2 },
  { code: "parallel",       aliases: ["parallelto"],                  symbol: "∥", name: "Parallel to",                        category: "Geometry and Vectors",                rank: 2 },
  { code: "perp",           aliases: ["perpendicular"],               symbol: "⊥", name: "Perpendicular to",                  category: "Geometry and Vectors",                rank: 2 },
  { code: "ratio",          aliases: [],                              symbol: "∶", name: "Ratio",                               category: "Geometry and Vectors",                rank: 2 },
  { code: "Colon",          aliases: ["proportion"],                  symbol: "∷", name: "Proportion",                          category: "Geometry and Vectors",                rank: 2 },
  { code: "qed",            aliases: ["endproof"],                    symbol: "∎", name: "End of proof (Q.E.D.)",              category: "Geometry and Vectors",                rank: 2 },
  { code: "overparen",      aliases: ["arc"],                         symbol: "⌢", name: "Arc",                                category: "Geometry and Vectors",                rank: 2 },

  // ── Chemistry and Physics ─────────────────────────────────────────────────
  { code: "degc",           aliases: [],                              symbol: "℃", name: "Degrees Celsius",                     category: "Chemistry and Physics",               rank: 3 },
  { code: "degf",           aliases: [],                              symbol: "℉", name: "Degrees Fahrenheit",                  category: "Chemistry and Physics",               rank: 3 },
  { code: "hbar",           aliases: [],                              symbol: "ℏ", name: "Planck constant over two pi",        category: "Chemistry and Physics",               rank: 2 },
  { code: "planck",         aliases: [],                              symbol: "ℎ", name: "Planck constant",                    category: "Chemistry and Physics",               rank: 2 },
  { code: "mho",            aliases: [],                              symbol: "℧", name: "Inverted ohm (mho)",                 category: "Chemistry and Physics",               rank: 3 },
  { code: "AA",             aliases: [],                              symbol: "Å", name: "Angstrom",                           category: "Chemistry and Physics",               rank: 3 },

  // ── Matrix Operations ─────────────────────────────────────────────────────
  { code: "kron",           aliases: [],                              symbol: "⊗", name: "Kronecker product",                 category: "Matrix Operations",                  rank: 2 },
  { code: "hadamard",       aliases: [],                              symbol: "⊙", name: "Hadamard product",                  category: "Matrix Operations",                  rank: 3 },
  { code: "adjoint",        aliases: [],                              symbol: "†", name: "Adjoint / Hermitian transpose",     category: "Matrix Operations",                  rank: 2 },
  { code: "identity",       aliases: [],                              symbol: "𝐈", name: "Identity matrix",                   category: "Matrix Operations",                  rank: 2 },
  { code: "directsum",      aliases: [],                              symbol: "⊕", name: "Direct sum",                       category: "Matrix Operations",                  rank: 2 },

  // ── Miscellaneous Common Symbols ──────────────────────────────────────────
  { code: "therefore",      aliases: [],                              symbol: "∴", name: "Therefore",                           category: "Miscellaneous Common Symbols",         rank: 2 },
  { code: "because",        aliases: ["since"],                       symbol: "∵", name: "Because",                            category: "Miscellaneous Common Symbols",         rank: 2 },
  { code: "cdots",          aliases: [],                              symbol: "⋯", name: "Midline horizontal ellipsis",          category: "Miscellaneous Common Symbols",         rank: 2 },
  { code: "vdots",          aliases: [],                              symbol: "⋮", name: "Vertical ellipsis",                   category: "Miscellaneous Common Symbols",         rank: 2 },
  { code: "ddots",          aliases: [],                              symbol: "⋱", name: "Downward right diagonal ellipsis",     category: "Miscellaneous Common Symbols",         rank: 2 },
  { code: "rddots",         aliases: [],                              symbol: "⋰", name: "Upward right diagonal ellipsis",       category: "Miscellaneous Common Symbols",         rank: 3 },
  { code: "dots",           aliases: ["ldots", "ellipsis"],           symbol: "…", name: "Horizontal ellipsis",                 category: "Miscellaneous Common Symbols",         rank: 1 },

  // ── Letter-Like Symbols ───────────────────────────────────────────────────
  { code: "aleph",          aliases: [],                              symbol: "ℵ", name: "Aleph",                               category: "Letter-Like Symbols",                rank: 3 },
  { code: "beth",           aliases: [],                              symbol: "ℶ", name: "Beth",                                category: "Letter-Like Symbols",                rank: 3 },
  { code: "scriptl",        aliases: [],                              symbol: "ℓ", name: "Script small L",                     category: "Letter-Like Symbols",                rank: 2 },
  { code: "scriptL",        aliases: [],                              symbol: "ℒ", name: "Laplace transform",                  category: "Letter-Like Symbols",                rank: 3 },
  { code: "Im",             aliases: ["frakturI"],                    symbol: "ℑ", name: "Imaginary part",                     category: "Letter-Like Symbols",                rank: 1 },
  { code: "Re",             aliases: ["frakturR"],                    symbol: "ℜ", name: "Real part",                          category: "Letter-Like Symbols",                rank: 1 },
  { code: "wp",             aliases: ["powerset"],                    symbol: "℘", name: "Power set / Weierstrass P",          category: "Letter-Like Symbols",                rank: 3 },
  { code: "imath",          aliases: [],                              symbol: "ı", name: "Dotless i",                          category: "Letter-Like Symbols",                rank: 3 },
  { code: "eth",            aliases: [],                              symbol: "ð", name: "Latin small letter eth",             category: "Letter-Like Symbols",                rank: 3 },
  { code: "euler",          aliases: [],                              symbol: "ℇ", name: "Euler constant",                     category: "Letter-Like Symbols",                rank: 3 },
  { code: "Digamma",        aliases: [],                              symbol: "Ϝ", name: "Greek capital digamma",              category: "Letter-Like Symbols",                rank: 3 },
  { code: "turnedF",        aliases: [],                              symbol: "Ⅎ", name: "Turned capital F",                   category: "Letter-Like Symbols",                rank: 3 },
  { code: "scriptg",        aliases: [],                              symbol: "ℊ", name: "Script small G",                     category: "Letter-Like Symbols",                rank: 3 },
  { code: "scriptH",        aliases: [],                              symbol: "ℋ", name: "Script capital H",                   category: "Letter-Like Symbols",                rank: 3 },
  { code: "frakturH",       aliases: [],                              symbol: "ℌ", name: "Hilbert space",                      category: "Letter-Like Symbols",                rank: 3 },
  { code: "varkappa",       aliases: [],                              symbol: "ϰ", name: "Greek kappa symbol",                 category: "Letter-Like Symbols",                rank: 3 },
  { code: "gimel",          aliases: [],                              symbol: "ℷ", name: "Gimel",                              category: "Letter-Like Symbols",                rank: 3 },
  { code: "daleth",         aliases: [],                              symbol: "ℸ", name: "Daleth",                             category: "Letter-Like Symbols",                rank: 3 },
  { code: "euro",           aliases: [],                              symbol: "℮", name: "Estimated symbol",                   category: "Letter-Like Symbols",                rank: 3 },
  { code: "mathscr",        aliases: [],                              symbol: "ℬ", name: "Script capital B",                   category: "Letter-Like Symbols",                rank: 3 },
  { code: "scriptE",        aliases: [],                              symbol: "ℰ", name: "Script capital E",                   category: "Letter-Like Symbols",                rank: 3 },
  { code: "scriptF",        aliases: [],                              symbol: "ℱ", name: "Script capital F",                   category: "Letter-Like Symbols",                rank: 3 },
  { code: "scriptM",        aliases: [],                              symbol: "ℳ", name: "Script capital M",                   category: "Letter-Like Symbols",                rank: 3 },
  { code: "scripto",        aliases: [],                              symbol: "ℴ", name: "Script small O",                     category: "Letter-Like Symbols",                rank: 3 },
  { code: "turnediota",     aliases: [],                              symbol: "℩", name: "Turned Greek iota",                  category: "Letter-Like Symbols",                rank: 3 },

  // ── Arrows ─────────────────────────────────────────────────────────────────
  { code: "rightarrow",     aliases: ["to"],                          symbol: "→", name: "Right arrow",                       category: "Arrows",                             rank: 1 },
  { code: "leftarrow",      aliases: ["gets"],                        symbol: "←", name: "Left arrow",                        category: "Arrows",                             rank: 2 },
  { code: "uparrow",        aliases: [],                              symbol: "↑", name: "Up arrow",                          category: "Arrows",                             rank: 2 },
  { code: "downarrow",      aliases: [],                              symbol: "↓", name: "Down arrow",                        category: "Arrows",                             rank: 2 },
  { code: "leftrightarrow", aliases: ["biconditional"],               symbol: "↔", name: "Left-right arrow",                  category: "Arrows",                             rank: 2 },
  { code: "updownarrow",    aliases: [],                              symbol: "↕", name: "Up-down arrow",                     category: "Arrows",                             rank: 3 },
  { code: "Rightarrow",     aliases: ["Implies", "Implication"],      symbol: "⇒", name: "Double right arrow (implies)",      category: "Arrows",                             rank: 1 },
  { code: "Leftarrow",      aliases: [],                              symbol: "⇐", name: "Double left arrow",                 category: "Arrows",                             rank: 2 },
  { code: "Leftrightarrow", aliases: ["Biconditional", "iff"],        symbol: "⇔", name: "Biconditional (if and only if)",    category: "Arrows",                             rank: 1 },
  { code: "Uparrow",        aliases: [],                              symbol: "⇑", name: "Double up arrow",                   category: "Arrows",                             rank: 3 },
  { code: "Downarrow",      aliases: [],                              symbol: "⇓", name: "Double down arrow",                 category: "Arrows",                             rank: 3 },
  { code: "Updownarrow",    aliases: [],                              symbol: "⇕", name: "Up-down double arrow",              category: "Arrows",                             rank: 3 },
  { code: "longrightarrow", aliases: [],                              symbol: "⟶", name: "Long right arrow",                  category: "Arrows",                             rank: 2 },
  { code: "longleftarrow",  aliases: [],                              symbol: "⟵", name: "Long left arrow",                   category: "Arrows",                             rank: 3 },
  { code: "longleftrightarrow", aliases: [],                          symbol: "⟷", name: "Long left-right arrow",             category: "Arrows",                             rank: 3 },
  { code: "Longrightarrow", aliases: ["implies"],                     symbol: "⟹", name: "Long double right arrow",           category: "Arrows",                             rank: 2 },
  { code: "Longleftarrow",  aliases: [],                              symbol: "⟸", name: "Long double left arrow",            category: "Arrows",                             rank: 3 },
  { code: "Longleftrightarrow", aliases: [],                          symbol: "⟺", name: "Long biconditional",                category: "Arrows",                             rank: 2 },
  { code: "nearrow",        aliases: [],                              symbol: "↗", name: "Diagonal upward right arrow",       category: "Arrows",                             rank: 3 },
  { code: "nwarrow",        aliases: [],                              symbol: "↖", name: "Diagonal upward left arrow",        category: "Arrows",                             rank: 3 },
  { code: "searrow",        aliases: [],                              symbol: "↘", name: "Diagonal downward right arrow",     category: "Arrows",                             rank: 3 },
  { code: "swarrow",        aliases: [],                              symbol: "↙", name: "Diagonal downward left arrow",      category: "Arrows",                             rank: 3 },
  { code: "nleftarrow",     aliases: [],                              symbol: "↚", name: "Left arrow with stroke",            category: "Arrows",                             rank: 3 },
  { code: "nrightarrow",    aliases: [],                              symbol: "↛", name: "Right arrow with stroke",           category: "Arrows",                             rank: 3 },
  { code: "nleftrightarrow",aliases: [],                              symbol: "↮", name: "Left-right arrow with stroke",      category: "Arrows",                             rank: 3 },
  { code: "nLeftarrow",     aliases: [],                              symbol: "⇍", name: "Left double arrow with stroke",     category: "Arrows",                             rank: 3 },
  { code: "nRightarrow",    aliases: [],                              symbol: "⇏", name: "Right double arrow with stroke",    category: "Arrows",                             rank: 3 },
  { code: "nLeftrightarrow",aliases: [],                              symbol: "⇎", name: "Left-right double arrow with stroke", category: "Arrows",                           rank: 3 },
  { code: "dasharrowleft",  aliases: [],                              symbol: "⇠", name: "Left dashed arrow",                 category: "Arrows",                             rank: 3 },
  { code: "dasharrowright", aliases: [],                              symbol: "⇢", name: "Right dashed arrow",                category: "Arrows",                             rank: 3 },
  { code: "mapstoleft",     aliases: [],                              symbol: "↤", name: "Left arrow from bar",               category: "Arrows",                             rank: 3 },
  { code: "mapsto",         aliases: ["maps"],                        symbol: "↦", name: "Maps to (right arrow from bar)",    category: "Arrows",                             rank: 2 },
  { code: "longmapstoleft", aliases: [],                              symbol: "⟻", name: "Long left arrow from bar",          category: "Arrows",                             rank: 3 },
  { code: "longmapsto",     aliases: [],                              symbol: "⟼", name: "Long maps to",                      category: "Arrows",                             rank: 3 },
  { code: "hookleftarrow",  aliases: [],                              symbol: "↩", name: "Left arrow with hook",              category: "Arrows",                             rank: 3 },
  { code: "hookrightarrow", aliases: ["hook"],                        symbol: "↪", name: "Right arrow with hook",             category: "Arrows",                             rank: 2 },
  { code: "leftharpoonup",  aliases: [],                              symbol: "↼", name: "Left harpoon up",                   category: "Arrows",                             rank: 3 },
  { code: "leftharpoondown",aliases: [],                              symbol: "↽", name: "Left harpoon down",                 category: "Arrows",                             rank: 3 },
  { code: "rightharpoonup", aliases: [],                              symbol: "⇀", name: "Right harpoon up",                  category: "Arrows",                             rank: 2 },
  { code: "rightharpoondown",aliases: [],                             symbol: "⇁", name: "Right harpoon down",                category: "Arrows",                             rank: 3 },
  { code: "upharpoonleft",  aliases: [],                              symbol: "↿", name: "Upward harpoon left",               category: "Arrows",                             rank: 3 },
  { code: "upharpoonright", aliases: [],                              symbol: "↾", name: "Upward harpoon right",              category: "Arrows",                             rank: 3 },
  { code: "downharpoonleft",aliases: [],                              symbol: "⇃", name: "Downward harpoon left",             category: "Arrows",                             rank: 3 },
  { code: "downharpoonright",aliases: [],                             symbol: "⇂", name: "Downward harpoon right",            category: "Arrows",                             rank: 3 },
  { code: "leftrightharpoons",aliases: [],                            symbol: "⇋", name: "Left-right harpoons",               category: "Arrows",                             rank: 2 },
  { code: "rightleftharpoons",aliases: [],                            symbol: "⇌", name: "Right-left harpoons",               category: "Arrows",                             rank: 2 },
  { code: "leftleftarrows", aliases: [],                              symbol: "⇇", name: "Left paired arrows",                category: "Arrows",                             rank: 3 },
  { code: "rightrightarrows",aliases: [],                             symbol: "⇉", name: "Right paired arrows",               category: "Arrows",                             rank: 3 },
  { code: "upuparrows",     aliases: [],                              symbol: "⇈", name: "Upwards paired arrows",             category: "Arrows",                             rank: 3 },
  { code: "downdownarrows", aliases: ["downarrows"],                  symbol: "⇊", name: "Downwards paired arrows",           category: "Arrows",                             rank: 3 },
  { code: "leftrightarrows",aliases: [],                              symbol: "⇆", name: "Left arrow over right arrow",       category: "Arrows",                             rank: 3 },
  { code: "rightleftarrows",aliases: [],                              symbol: "⇄", name: "Right arrow over left arrow",       category: "Arrows",                             rank: 3 },
  { code: "looparrowleft",  aliases: [],                              symbol: "↫", name: "Left arrow with loop",              category: "Arrows",                             rank: 3 },
  { code: "looparrowright", aliases: [],                              symbol: "↬", name: "Right arrow with loop",             category: "Arrows",                             rank: 3 },
  { code: "leftarrowtail",  aliases: [],                              symbol: "↢", name: "Left arrow with tail",              category: "Arrows",                             rank: 3 },
  { code: "rightarrowtail", aliases: [],                              symbol: "↣", name: "Right arrow with tail",             category: "Arrows",                             rank: 3 },
  { code: "Lsh",            aliases: [],                              symbol: "↰", name: "Upward arrow with tip on left",     category: "Arrows",                             rank: 3 },
  { code: "Rsh",            aliases: [],                              symbol: "↱", name: "Upward arrow with tip on right",    category: "Arrows",                             rank: 3 },
  { code: "ldsh",           aliases: [],                              symbol: "↲", name: "Downward arrow with tip on left",   category: "Arrows",                             rank: 3 },
  { code: "rdsh",           aliases: [],                              symbol: "↳", name: "Downward arrow with tip on right",  category: "Arrows",                             rank: 3 },
  { code: "Lleftarrow",     aliases: [],                              symbol: "⇚", name: "Triple left arrow",                 category: "Arrows",                             rank: 3 },
  { code: "Rrightarrow",    aliases: [],                              symbol: "⇛", name: "Triple right arrow",                category: "Arrows",                             rank: 3 },
  { code: "twoheadleftarrow",aliases: [],                             symbol: "↞", name: "Two-headed left arrow",             category: "Arrows",                             rank: 3 },
  { code: "twoheadrightarrow",aliases: [],                            symbol: "↠", name: "Two-headed right arrow",            category: "Arrows",                             rank: 3 },
  { code: "curvearrowleft", aliases: [],                              symbol: "↶", name: "Anticlockwise arc arrow",           category: "Arrows",                             rank: 3 },
  { code: "curvearrowright",aliases: [],                              symbol: "↷", name: "Clockwise arc arrow",               category: "Arrows",                             rank: 3 },
  { code: "circlearrowleft",aliases: [],                              symbol: "↺", name: "Anticlockwise circle arrow",        category: "Arrows",                             rank: 3 },
  { code: "circlearrowright",aliases: [],                             symbol: "↻", name: "Clockwise circle arrow",            category: "Arrows",                             rank: 3 },
  { code: "multimap",       aliases: [],                              symbol: "⊸", name: "Multimap",                          category: "Arrows",                             rank: 3 },
  { code: "leftrightwavearrow",aliases: [],                           symbol: "↭", name: "Left-right wave arrow",             category: "Arrows",                             rank: 3 },
  { code: "leftwavearrow",  aliases: [],                              symbol: "↜", name: "Left wave arrow",                   category: "Arrows",                             rank: 3 },
  { code: "rightwavearrow", aliases: [],                              symbol: "↝", name: "Right wave arrow",                  category: "Arrows",                             rank: 3 },
  { code: "leftsquigarrow", aliases: [],                              symbol: "⇜", name: "Left squiggle arrow",               category: "Arrows",                             rank: 3 },
  { code: "rightsquigarrow",aliases: [],                              symbol: "⇝", name: "Right squiggle arrow",              category: "Arrows",                             rank: 3 },

  // ── Number Theory ─────────────────────────────────────────────────────────
  { code: "mid",            aliases: ["divides"],                     symbol: "∣", name: "Divides (is divisible by)",           category: "Number Theory",                      rank: 2 },
  { code: "notdivide",      aliases: ["nmid"],                        symbol: "∤", name: "Does not divide",                     category: "Number Theory",                      rank: 3 },

  // ── Statistics and Probability ────────────────────────────────────────────
  { code: "stddev",         aliases: [],                              symbol: "σ", name: "Standard deviation",                  category: "Statistics and Probability",         rank: 1 },
  { code: "mean",           aliases: [],                              symbol: "μ", name: "Population mean",                     category: "Statistics and Probability",         rank: 1 },
  { code: "corr",           aliases: [],                              symbol: "ρ", name: "Correlation coefficient",             category: "Statistics and Probability",         rank: 2 },

  // ── Advanced Operators ────────────────────────────────────────────────────
  { code: "ldiv",           aliases: [],                              symbol: "∕", name: "Division slash",                     category: "Advanced Operators",                 rank: 2 },
  { code: "uplus",          aliases: [],                              symbol: "⊎", name: "Multiset union",                     category: "Advanced Operators",                 rank: 3 },
  { code: "sqcap",          aliases: [],                              symbol: "⊓", name: "Square cap",                        category: "Advanced Operators",                 rank: 3 },
  { code: "sqcup",          aliases: [],                              symbol: "⊔", name: "Square cup",                        category: "Advanced Operators",                 rank: 3 },
  { code: "nlt",            aliases: ["notlt"],                       symbol: "≮", name: "Not less than",                      category: "Advanced Operators",                 rank: 3 },
  { code: "nleq",           aliases: [],                              symbol: "≰", name: "Not less than or equal",             category: "Advanced Operators",                 rank: 3 },
  { code: "ngt",            aliases: ["notgt"],                       symbol: "≯", name: "Not greater than",                   category: "Advanced Operators",                 rank: 3 },
  { code: "ngeq",           aliases: [],                              symbol: "≱", name: "Not greater than or equal",          category: "Advanced Operators",                 rank: 3 },
  { code: "nequiv",         aliases: [],                              symbol: "≢", name: "Not identical to",                   category: "Advanced Operators",                 rank: 3 },
  { code: "nsimeq",         aliases: [],                              symbol: "≄", name: "Not asymptotically equal",           category: "Advanced Operators",                 rank: 3 },
  { code: "notapprox",      aliases: [],                              symbol: "≉", name: "Not almost equal to",                category: "Advanced Operators",                 rank: 3 },
  { code: "ncong",          aliases: ["notcong"],                     symbol: "≇", name: "Not congruent to",                   category: "Advanced Operators",                 rank: 3 },
  { code: "prec",           aliases: [],                              symbol: "≺", name: "Precedes",                           category: "Advanced Operators",                 rank: 3 },
  { code: "succ",           aliases: [],                              symbol: "≻", name: "Succeeds",                           category: "Advanced Operators",                 rank: 3 },
  { code: "preceq",         aliases: [],                              symbol: "≼", name: "Precedes or equal to",               category: "Advanced Operators",                 rank: 3 },
  { code: "succeq",         aliases: [],                              symbol: "≽", name: "Succeeds or equal to",               category: "Advanced Operators",                 rank: 3 },
  { code: "sqsubset",       aliases: [],                              symbol: "⊏", name: "Square subset",                     category: "Advanced Operators",                 rank: 3 },
  { code: "sqsupset",       aliases: [],                              symbol: "⊐", name: "Square superset",                   category: "Advanced Operators",                 rank: 3 },
  { code: "sqsubseteq",     aliases: [],                              symbol: "⊑", name: "Square subset or equal",            category: "Advanced Operators",                 rank: 3 },
  { code: "sqsupseteq",     aliases: [],                              symbol: "⊒", name: "Square superset or equal",          category: "Advanced Operators",                 rank: 3 },
  { code: "vdash",          aliases: ["proves"],                      symbol: "⊢", name: "Proves",                             category: "Advanced Operators",                 rank: 3 },
  { code: "dashv",          aliases: [],                              symbol: "⊣", name: "Does not yield",                     category: "Advanced Operators",                 rank: 3 },
  { code: "top",            aliases: ["tautology"],                   symbol: "⊤", name: "Tautology (always true)",            category: "Advanced Operators",                 rank: 3 },
  { code: "bot",            aliases: ["false", "contradiction"],      symbol: "⊥", name: "Contradiction (always false)",       category: "Advanced Operators",                 rank: 3 },
  { code: "bowtie",         aliases: ["join"],                        symbol: "⋈", name: "Natural join",                       category: "Advanced Operators",                 rank: 3 },
  { code: "asymp",          aliases: [],                              symbol: "≍", name: "Approximately equal or image of",    category: "Advanced Operators",                 rank: 3 },
  { code: "amalg",          aliases: ["coprod"],                      symbol: "∐", name: "Coproduct",                          category: "Advanced Operators",                 rank: 3 },
  { code: "bigwedge",       aliases: [],                              symbol: "⋀", name: "N-ary logical AND",                  category: "Advanced Operators",                 rank: 3 },
  { code: "bigvee",         aliases: [],                              symbol: "⋁", name: "N-ary logical OR",                   category: "Advanced Operators",                 rank: 3 },
  { code: "bigodot",        aliases: [],                              symbol: "⨀", name: "N-ary circled dot operator",         category: "Advanced Operators",                 rank: 3 },
  { code: "bigotimes",      aliases: [],                              symbol: "⨂", name: "N-ary circled times operator",       category: "Advanced Operators",                 rank: 3 },
  { code: "biguplus",       aliases: [],                              symbol: "⨄", name: "N-ary union operator with plus",     category: "Advanced Operators",                 rank: 3 },
  { code: "bigcapdot",      aliases: ["bigudot"],                     symbol: "⨃", name: "N-ary intersection with dot",        category: "Advanced Operators",                 rank: 3 },
  { code: "dotplus",        aliases: [],                              symbol: "∔", name: "Dot plus",                           category: "Advanced Operators",                 rank: 3 },
  { code: "dotminus",       aliases: [],                              symbol: "∸", name: "Dot minus",                          category: "Advanced Operators",                 rank: 3 },
  { code: "Cap",            aliases: [],                              symbol: "⋒", name: "Double intersection",                category: "Advanced Operators",                 rank: 3 },
  { code: "Cup",            aliases: [],                              symbol: "⋓", name: "Double union",                       category: "Advanced Operators",                 rank: 3 },
  { code: "boxminus",       aliases: [],                              symbol: "⊟", name: "Squared minus",                     category: "Advanced Operators",                 rank: 3 },
  { code: "boxtimes",       aliases: [],                              symbol: "⊠", name: "Squared times",                     category: "Advanced Operators",                 rank: 3 },
  { code: "boxdot",         aliases: [],                              symbol: "⊡", name: "Squared dot operator",              category: "Advanced Operators",                 rank: 3 },
  { code: "boxplus",        aliases: [],                              symbol: "⊞", name: "Squared plus",                      category: "Advanced Operators",                 rank: 3 },
  { code: "divideontimes",  aliases: [],                              symbol: "⋇", name: "Division times",                    category: "Advanced Operators",                 rank: 3 },
  { code: "ltimes",         aliases: [],                              symbol: "⋉", name: "Left semidirect product",            category: "Advanced Operators",                 rank: 3 },
  { code: "rtimes",         aliases: [],                              symbol: "⋊", name: "Right semidirect product",           category: "Advanced Operators",                 rank: 3 },
  { code: "leftthreetimes", aliases: [],                              symbol: "⋋", name: "Left three times",                  category: "Advanced Operators",                 rank: 3 },
  { code: "rightthreetimes",aliases: [],                              symbol: "⋌", name: "Right three times",                 category: "Advanced Operators",                 rank: 3 },
  { code: "curlywedge",     aliases: [],                              symbol: "⋏", name: "Curly logical AND",                  category: "Advanced Operators",                 rank: 3 },
  { code: "curlyvee",       aliases: [],                              symbol: "⋎", name: "Curly logical OR",                   category: "Advanced Operators",                 rank: 3 },
  { code: "odash",          aliases: [],                              symbol: "⊝", name: "Circled dash",                      category: "Advanced Operators",                 rank: 3 },
  { code: "intercal",       aliases: [],                              symbol: "⊺", name: "Intercalate",                       category: "Advanced Operators",                 rank: 3 },
  { code: "ominus",         aliases: [],                              symbol: "⊖", name: "Circled minus",                     category: "Advanced Operators",                 rank: 3 },
  { code: "otimes",         aliases: ["tensor"],                      symbol: "⊗", name: "Circled times / tensor product",    category: "Advanced Operators",                 rank: 2 },
  { code: "oslash",         aliases: [],                              symbol: "⊘", name: "Circled division slash",            category: "Advanced Operators",                 rank: 3 },
  { code: "oast",           aliases: [],                              symbol: "⊛", name: "Circled asterisk operator",         category: "Advanced Operators",                 rank: 3 },
  { code: "ocirc",          aliases: [],                              symbol: "⊚", name: "Circled ring operator",             category: "Advanced Operators",                 rank: 3 },
  { code: "dagger",         aliases: ["dag"],                         symbol: "†", name: "Dagger",                            category: "Advanced Operators",                 rank: 2 },
  { code: "ddag",           aliases: ["ddagger"],                     symbol: "‡", name: "Double dagger",                     category: "Advanced Operators",                 rank: 3 },
  { code: "star",           aliases: [],                              symbol: "⋆", name: "Star operator",                     category: "Advanced Operators",                 rank: 3 },
  { code: "diamond",        aliases: [],                              symbol: "⋄", name: "Diamond operator",                  category: "Advanced Operators",                 rank: 3 },
  { code: "wr",             aliases: [],                              symbol: "≀", name: "Wreath product",                    category: "Advanced Operators",                 rank: 3 },
  { code: "bigoplus",       aliases: [],                              symbol: "⨁", name: "N-ary circled plus operator",       category: "Advanced Operators",                 rank: 2 },
  { code: "bigsqcap",       aliases: [],                              symbol: "⨅", name: "N-ary square intersection",         category: "Advanced Operators",                 rank: 3 },
  { code: "bigsqcup",       aliases: [],                              symbol: "⨆", name: "N-ary square union",               category: "Advanced Operators",                 rank: 3 },
  { code: "lll",            aliases: [],                              symbol: "⋘", name: "Very much less than",                category: "Advanced Operators",                 rank: 3 },
  { code: "ggg",            aliases: [],                              symbol: "⋙", name: "Very much greater than",             category: "Advanced Operators",                 rank: 3 },
  { code: "leqq",           aliases: [],                              symbol: "≦", name: "Less than over equal to",            category: "Advanced Operators",                 rank: 3 },
  { code: "geqq",           aliases: [],                              symbol: "≧", name: "Greater than over equal to",         category: "Advanced Operators",                 rank: 3 },
  { code: "lesssim",        aliases: [],                              symbol: "≲", name: "Less than and similar to",           category: "Advanced Operators",                 rank: 3 },
  { code: "gtrsim",         aliases: [],                              symbol: "≳", name: "Greater than and similar to",        category: "Advanced Operators",                 rank: 3 },
  { code: "lessdot",        aliases: [],                              symbol: "⋖", name: "Less than with dot",                 category: "Advanced Operators",                 rank: 3 },
  { code: "gtrdot",         aliases: [],                              symbol: "⋗", name: "Greater than with dot",              category: "Advanced Operators",                 rank: 3 },
  { code: "lessgtr",        aliases: [],                              symbol: "≶", name: "Less than or greater than",          category: "Advanced Operators",                 rank: 3 },
  { code: "lesseqgtr",      aliases: [],                              symbol: "⋚", name: "Less than but not equivalent to",   category: "Advanced Operators",                 rank: 3 },
  { code: "gtrless",        aliases: [],                              symbol: "≷", name: "Greater than or less than",          category: "Advanced Operators",                 rank: 3 },
  { code: "gtreqless",      aliases: [],                              symbol: "⋛", name: "Greater than but not equivalent to", category: "Advanced Operators",                rank: 3 },
  { code: "Doteq",          aliases: [],                              symbol: "≑", name: "Geometrically equal to",             category: "Advanced Operators",                 rank: 3 },
  { code: "fallingdotseq",  aliases: [],                              symbol: "≒", name: "Approximately equal or image of",   category: "Advanced Operators",                 rank: 3 },
  { code: "risingdotseq",   aliases: [],                              symbol: "≓", name: "Image of or approximately equal to", category: "Advanced Operators",                rank: 3 },
  { code: "backsim",        aliases: [],                              symbol: "∽", name: "Reversed tilde",                    category: "Advanced Operators",                 rank: 3 },
  { code: "backsimeq",      aliases: [],                              symbol: "⋍", name: "Reversed tilde equals",             category: "Advanced Operators",                 rank: 3 },
  { code: "eqless",         aliases: [],                              symbol: "⋜", name: "Equal to or less than",             category: "Advanced Operators",                 rank: 3 },
  { code: "eqgtr",          aliases: [],                              symbol: "⋝", name: "Equal to or greater than",          category: "Advanced Operators",                 rank: 3 },
  { code: "precsim",        aliases: [],                              symbol: "≾", name: "Precedes but not equivalent",       category: "Advanced Operators",                 rank: 3 },
  { code: "succsim",        aliases: [],                              symbol: "≿", name: "Succeeds or equivalent to",         category: "Advanced Operators",                 rank: 3 },
  { code: "vartriangleleft",aliases: [],                              symbol: "⊲", name: "Normal subgroup of",               category: "Advanced Operators",                 rank: 3 },
  { code: "vartriangleright",aliases: [],                             symbol: "⊳", name: "Contains as normal subgroup",      category: "Advanced Operators",                 rank: 3 },
  { code: "trianglelefteq", aliases: [],                              symbol: "⊴", name: "Normal subgroup or equal",         category: "Advanced Operators",                 rank: 3 },
  { code: "trianglerighteq",aliases: [],                              symbol: "⊵", name: "Contains as normal subgroup or equal", category: "Advanced Operators",             rank: 3 },
  { code: "models",         aliases: ["entailment", "true"],          symbol: "⊨", name: "Entailment / models",               category: "Advanced Operators",                 rank: 2 },
  { code: "Subset",         aliases: [],                              symbol: "⋐", name: "Nested subset",                    category: "Advanced Operators",                 rank: 3 },
  { code: "Supset",         aliases: [],                              symbol: "⋑", name: "Nested superset",                  category: "Advanced Operators",                 rank: 3 },
  { code: "vDash",          aliases: ["forces"],                      symbol: "⊩", name: "Forces",                           category: "Advanced Operators",                 rank: 3 },
  { code: "Vvdash",         aliases: [],                              symbol: "⊪", name: "Triple vertical bar with turnstile", category: "Advanced Operators",                rank: 3 },
  { code: "eqcirc",         aliases: [],                              symbol: "≖", name: "Circle with equals sign",          category: "Advanced Operators",                 rank: 3 },
  { code: "circeq",         aliases: [],                              symbol: "≗", name: "Ring equal to",                    category: "Advanced Operators",                 rank: 3 },
  { code: "Deltaeq",        aliases: [],                              symbol: "≜", name: "Delta equal to",                   category: "Advanced Operators",                 rank: 3 },
  { code: "bumpe",          aliases: [],                              symbol: "≏", name: "Difference between",               category: "Advanced Operators",                 rank: 3 },
  { code: "bumpeq",         aliases: [],                              symbol: "≎", name: "Geometrically equivalent to",      category: "Advanced Operators",                 rank: 3 },
  { code: "between",        aliases: [],                              symbol: "≬", name: "Between",                          category: "Advanced Operators",                 rank: 3 },
  { code: "pitchfork",      aliases: [],                              symbol: "⋔", name: "Pitchfork",                        category: "Advanced Operators",                 rank: 3 },
  { code: "doteq",          aliases: [],                              symbol: "≐", name: "Approaches the limit",             category: "Advanced Operators",                 rank: 3 },
  { code: "nsim",           aliases: [],                              symbol: "≁", name: "Not tilde",                        category: "Advanced Operators",                 rank: 3 },
  { code: "nasymp",         aliases: [],                              symbol: "≭", name: "Not equivalent to",                category: "Advanced Operators",                 rank: 3 },
  { code: "lneqq",          aliases: [],                              symbol: "≨", name: "Less than but not equal to",       category: "Advanced Operators",                 rank: 3 },
  { code: "gneqq",          aliases: [],                              symbol: "≩", name: "Greater than but not equal to",    category: "Advanced Operators",                 rank: 3 },
  { code: "nprec",          aliases: [],                              symbol: "⊀", name: "Does not precede",                 category: "Advanced Operators",                 rank: 3 },
  { code: "nsucc",          aliases: [],                              symbol: "⊁", name: "Does not succeed",                 category: "Advanced Operators",                 rank: 3 },
  { code: "npreceq",        aliases: [],                              symbol: "⋠", name: "Does not precede or equal",        category: "Advanced Operators",                 rank: 3 },
  { code: "nsucceq",        aliases: [],                              symbol: "⋡", name: "Does not succeed or equal",        category: "Advanced Operators",                 rank: 3 },
  { code: "nsqsubseteq",    aliases: [],                              symbol: "⋢", name: "Not square subset or equal",       category: "Advanced Operators",                 rank: 3 },
];

/** All categories in display order */
export const allCategories = [
  "Basic Symbols and Operations",
  "Common Mathematical Relationships",
  "Sets and Logic",
  "Special Sets",
  "Greek Letters",
  "Calculus and Analysis",
  "Geometry and Vectors",
  "Chemistry and Physics",
  "Matrix Operations",
  "Miscellaneous Common Symbols",
  "Letter-Like Symbols",
  "Arrows",
  "Number Theory",
  "Statistics and Probability",
  "Currency Symbols",
  "Advanced Operators",
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
 * Symbol shape:   { type:"symbol",   code, aliases, symbol, name, category, rank, score, matchOn }
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
  // Sort by score descending, then rank ascending (rank 1 before rank 3 within same score)
  symbolResults.sort((a, b) => b.score !== a.score ? b.score - a.score : a.rank - b.rank);

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
