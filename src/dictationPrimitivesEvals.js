/**
 * dictationPrimitivesEvals.js
 *
 * Test cases for evaluating math dictation / speech-to-equation recognition.
 *
 * Each entry:
 *   name            - unique test identifier
 *   domain          - test category or spec section
 *   dictationString - spoken input string to be recognized
 *   expected_latex  - expected LaTeX output (or '(no equation)' / 'segment: ...')
 *   mathml          - MathML string for the expected equation (null if non-equation)
 *   unicodemath     - UnicodeMath linear format string (null if non-equation)
 */
export const dictationPrimitivesEvals = [
  {
    "name": "Isidro1",
    "domain": "Isidro",
    "dictationString": "x to the power of two",
    "expected_latex": "x^2",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">x^2</annotation></semantics></math>",
    "unicodemath": "x^2"
  },
  {
    "name": "Isidro2",
    "domain": "Isidro",
    "dictationString": "x squared",
    "expected_latex": "x^2",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">x^2</annotation></semantics></math>",
    "unicodemath": "x^2"
  },
  {
    "name": "Isidro3",
    "domain": "Isidro",
    "dictationString": "f of x equals x squared minus seven x plus three",
    "expected_latex": "f(x)=x^2-7x+3",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">f(x)=x^2-7x+3</annotation></semantics></math>",
    "unicodemath": "f(x)=x^2-7x+3"
  },
  {
    "name": "Isidro4",
    "domain": "Isidro",
    "dictationString": "f of x equals x cubed minus x square root of x",
    "expected_latex": "f(x)=x^3-x\\sqrt{x}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mi>x</mi><msqrt><mi>x</mi></msqrt></mrow><annotation encoding=\"application/x-tex\">f(x)=x^3-x\\sqrt{x}</annotation></semantics></math>",
    "unicodemath": "f(x)=x^3-x√x"
  },
  {
    "name": "Isidro5",
    "domain": "Isidro",
    "dictationString": "f of x equals x to the power of three minus x to the power of one half",
    "expected_latex": "f(x)=x^3-x^{\\frac{1}{2}}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><msup><mi>x</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></msup></mrow><annotation encoding=\"application/x-tex\">f(x)=x^3-x^{\\frac{1}{2}}</annotation></semantics></math>",
    "unicodemath": "f(x)=x^3-x^(1/2)"
  },
  {
    "name": "Isidro6",
    "domain": "Isidro",
    "dictationString": "square root of x minus one",
    "expected_latex": "\\sqrt{x}-1",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msqrt><mi>x</mi></msqrt><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\sqrt{x}-1</annotation></semantics></math>",
    "unicodemath": "√x-1"
  },
  {
    "name": "Isidro7",
    "domain": "Isidro",
    "dictationString": "square root of the quantity x minus one",
    "expected_latex": "\\sqrt{x-1}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msqrt><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></msqrt></mrow><annotation encoding=\"application/x-tex\">\\sqrt{x-1}</annotation></semantics></math>",
    "unicodemath": "√(x-1)"
  },
  {
    "name": "Isidro8",
    "domain": "Isidro",
    "dictationString": "x to the power of a plus b",
    "expected_latex": "x^{a+b}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msup><mi>x</mi><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow></msup></mrow><annotation encoding=\"application/x-tex\">x^{a+b}</annotation></semantics></math>",
    "unicodemath": "x^(a+b)"
  },
  {
    "name": "Isidro9",
    "domain": "Isidro",
    "dictationString": "x to the power of start quantity a plus b end quantity plus c",
    "expected_latex": "x^{a+b}+c",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msup><mi>x</mi><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow></msup><mo>+</mo><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">x^{a+b}+c</annotation></semantics></math>",
    "unicodemath": "x^(a+b)+c"
  },
  {
    "name": "Isidro10",
    "domain": "Isidro",
    "dictationString": "a plus b squared",
    "expected_latex": "a+b^2",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>a</mi><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">a+b^2</annotation></semantics></math>",
    "unicodemath": "a+b^2"
  },
  {
    "name": "Isidro11",
    "domain": "Isidro",
    "dictationString": "The quantity of a plus b squared",
    "expected_latex": "(a+b)^2",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>a</mi><mo>+</mo><mi>b</mi><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">(a+b)^2</annotation></semantics></math>",
    "unicodemath": "(a+b)^2"
  },
  {
    "name": "Isidro12",
    "domain": "Isidro",
    "dictationString": "Open parentheses a plus b close parentheses squared",
    "expected_latex": "(a+b)^2",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>a</mi><mo>+</mo><mi>b</mi><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">(a+b)^2</annotation></semantics></math>",
    "unicodemath": "(a+b)^2"
  },
  {
    "name": "Isidro13",
    "domain": "Isidro",
    "dictationString": "a over b",
    "expected_latex": "\\frac{a}{b}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mfrac><mi>a</mi><mi>b</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{a}{b}</annotation></semantics></math>",
    "unicodemath": "a/b"
  },
  {
    "name": "Isidro14",
    "domain": "Isidro",
    "dictationString": "a divided by b",
    "expected_latex": "\\frac{a}{b}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mfrac><mi>a</mi><mi>b</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{a}{b}</annotation></semantics></math>",
    "unicodemath": "a/b"
  },
  {
    "name": "Isidro15",
    "domain": "Isidro",
    "dictationString": "a over the quantity b plus c",
    "expected_latex": "\\frac{a}{b+c}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mfrac><mi>a</mi><mrow><mi>b</mi><mo>+</mo><mi>c</mi></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{a}{b+c}</annotation></semantics></math>",
    "unicodemath": "a/(b+c)"
  },
  {
    "name": "Isidro16",
    "domain": "Isidro",
    "dictationString": "a divided by the quantity b plus c",
    "expected_latex": "\\frac{a}{b+c}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mfrac><mi>a</mi><mrow><mi>b</mi><mo>+</mo><mi>c</mi></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{a}{b+c}</annotation></semantics></math>",
    "unicodemath": "a/(b+c)"
  },
  {
    "name": "Isidro17",
    "domain": "Isidro",
    "dictationString": "a all over b + c",
    "expected_latex": "\\frac{a}{b+c}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mfrac><mi>a</mi><mrow><mi>b</mi><mo>+</mo><mi>c</mi></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{a}{b+c}</annotation></semantics></math>",
    "unicodemath": "a/(b+c)"
  },
  {
    "name": "Isidro18",
    "domain": "Isidro",
    "dictationString": "Five is less than nine",
    "expected_latex": "5<9",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mn>5</mn><mo>&lt;</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">5&lt;9</annotation></semantics></math>",
    "unicodemath": "5<9"
  },
  {
    "name": "Isidro19",
    "domain": "Isidro",
    "dictationString": "x is greater than or equal to two",
    "expected_latex": "x\\geq2",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>x</mi><mo>≥</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">x\\geq2</annotation></semantics></math>",
    "unicodemath": "x≥2"
  },
  {
    "name": "Isidro20",
    "domain": "Isidro",
    "dictationString": "Five times open parentheses two plus three close parentheses equals twenty-five",
    "expected_latex": "5\\times(2+3)=25",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mn>5</mn><mo>×</mo><mo stretchy=\"false\">(</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>25</mn></mrow><annotation encoding=\"application/x-tex\">5\\times(2+3)=25</annotation></semantics></math>",
    "unicodemath": "5×(2+3)=25"
  },
  {
    "name": "Isidro21",
    "domain": "Isidro",
    "dictationString": "Five times the quantity of two plus three equals twenty-five",
    "expected_latex": "5\\times(2+3)=25",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mn>5</mn><mo>×</mo><mo stretchy=\"false\">(</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>25</mn></mrow><annotation encoding=\"application/x-tex\">5\\times(2+3)=25</annotation></semantics></math>",
    "unicodemath": "5×(2+3)=25"
  },
  {
    "name": "GK1",
    "domain": "5.10 Greek Letters & Named Constants",
    "dictationString": "pi r squared",
    "expected_latex": "\\pi r^2",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">\\pi r^2</annotation></semantics></math>",
    "unicodemath": "π r^2"
  },
  {
    "name": "GK2",
    "domain": "5.10 Greek Letters & Named Constants",
    "dictationString": "theta equals pi over four",
    "expected_latex": "\\theta=\\frac{\\pi}{4}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>θ</mi><mo>=</mo><mfrac><mi>π</mi><mn>4</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\theta=\\frac{\\pi}{4}</annotation></semantics></math>",
    "unicodemath": "θ=π/4"
  },
  {
    "name": "GK3",
    "domain": "5.10 Greek Letters & Named Constants",
    "dictationString": "e to the x",
    "expected_latex": "e^x",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msup><mi>e</mi><mi>x</mi></msup></mrow><annotation encoding=\"application/x-tex\">e^x</annotation></semantics></math>",
    "unicodemath": "e^x"
  },
  {
    "name": "GK4",
    "domain": "5.10 Greek Letters & Named Constants",
    "dictationString": "alpha plus beta equals gamma",
    "expected_latex": "\\alpha+\\beta=\\gamma",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>α</mi><mo>+</mo><mi>β</mi><mo>=</mo><mi>γ</mi></mrow><annotation encoding=\"application/x-tex\">\\alpha+\\beta=\\gamma</annotation></semantics></math>",
    "unicodemath": "α+β=γ"
  },
  {
    "name": "GK5",
    "domain": "5.10 Greek Letters & Named Constants",
    "dictationString": "two pi i",
    "expected_latex": "2\\pi i",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mn>2</mn><mi>π</mi><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">2\\pi i</annotation></semantics></math>",
    "unicodemath": "2π i"
  },
  {
    "name": "R1",
    "domain": "5.11 Roots",
    "dictationString": "square root of x",
    "expected_latex": "\\sqrt{x}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msqrt><mi>x</mi></msqrt></mrow><annotation encoding=\"application/x-tex\">\\sqrt{x}</annotation></semantics></math>",
    "unicodemath": "√x"
  },
  {
    "name": "R2",
    "domain": "5.11 Roots",
    "dictationString": "cube root of x",
    "expected_latex": "\\sqrt[3]{x}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mroot><mi>x</mi><mn>3</mn></mroot></mrow><annotation encoding=\"application/x-tex\">\\sqrt[3]{x}</annotation></semantics></math>",
    "unicodemath": "3√x"
  },
  {
    "name": "R3",
    "domain": "5.11 Roots",
    "dictationString": "nth root of x",
    "expected_latex": "\\sqrt[n]{x}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mroot><mi>x</mi><mi>n</mi></mroot></mrow><annotation encoding=\"application/x-tex\">\\sqrt[n]{x}</annotation></semantics></math>",
    "unicodemath": "n√x"
  },
  {
    "name": "R4",
    "domain": "5.11 Roots",
    "dictationString": "square root of x squared plus y squared",
    "expected_latex": "\\sqrt{x^2+y^2}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mrow><annotation encoding=\"application/x-tex\">\\sqrt{x^2+y^2}</annotation></semantics></math>",
    "unicodemath": "√(x^2+y^2)"
  },
  {
    "name": "R5",
    "domain": "5.11 Roots",
    "dictationString": "square root of one minus x squared",
    "expected_latex": "\\sqrt{1-x^2}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow><annotation encoding=\"application/x-tex\">\\sqrt{1-x^2}</annotation></semantics></math>",
    "unicodemath": "√(1-x^2)"
  },
  {
    "name": "AV1",
    "domain": "5.12 Absolute Value",
    "dictationString": "absolute value of x",
    "expected_latex": "\\left|x\\right|",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo fence=\"true\">∣</mo><mi>x</mi><mo fence=\"true\">∣</mo></mrow><annotation encoding=\"application/x-tex\">\\left|x\\right|</annotation></semantics></math>",
    "unicodemath": "|x|"
  },
  {
    "name": "AV2",
    "domain": "5.12 Absolute Value",
    "dictationString": "absolute value of x minus three",
    "expected_latex": "\\left|x-3\\right|",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo fence=\"true\">∣</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo fence=\"true\">∣</mo></mrow><annotation encoding=\"application/x-tex\">\\left|x-3\\right|</annotation></semantics></math>",
    "unicodemath": "|x-3|"
  },
  {
    "name": "AV3",
    "domain": "5.12 Absolute Value",
    "dictationString": "absolute value of x plus absolute value of y",
    "expected_latex": "\\left|x\\right|+\\left|y\\right|",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mrow><mo fence=\"true\">∣</mo><mi>x</mi><mo fence=\"true\">∣</mo></mrow><mo>+</mo><mrow><mo fence=\"true\">∣</mo><mi>y</mi><mo fence=\"true\">∣</mo></mrow></mrow><annotation encoding=\"application/x-tex\">\\left|x\\right|+\\left|y\\right|</annotation></semantics></math>",
    "unicodemath": "|x|+|y|"
  },
  {
    "name": "IQ1",
    "domain": "5.13 Inequalities",
    "dictationString": "x is less than or equal to five",
    "expected_latex": "x\\leq5",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>x</mi><mo>≤</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">x\\leq5</annotation></semantics></math>",
    "unicodemath": "x≤5"
  },
  {
    "name": "IQ2",
    "domain": "5.13 Inequalities",
    "dictationString": "x is greater than or equal to zero",
    "expected_latex": "x\\geq0",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x\\geq0</annotation></semantics></math>",
    "unicodemath": "x≥0"
  },
  {
    "name": "IQ3",
    "domain": "5.13 Inequalities",
    "dictationString": "zero is less than x is less than one",
    "expected_latex": "0<x<1",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">0&lt;x&lt;1</annotation></semantics></math>",
    "unicodemath": "0<x<1"
  },
  {
    "name": "IQ4",
    "domain": "5.13 Inequalities",
    "dictationString": "x is not equal to zero",
    "expected_latex": "x\\neq0",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>x</mi><mo mathvariant=\"normal\">≠</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x\\neq0</annotation></semantics></math>",
    "unicodemath": "x≠0"
  },
  {
    "name": "IN1",
    "domain": "5.14 Infinity",
    "dictationString": "limit as x approaches infinity of one over x",
    "expected_latex": "\\lim_{x\\to\\infty}\\frac{1}{x}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>x</mi><mo>→</mo><mi mathvariant=\"normal\">∞</mi></mrow></munder><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\lim_{x\\to\\infty}\\frac{1}{x}</annotation></semantics></math>",
    "unicodemath": "lim_(x→∞)1/x"
  },
  {
    "name": "IN2",
    "domain": "5.14 Infinity",
    "dictationString": "sum from n equals one to infinity of one over n squared",
    "expected_latex": "\\sum_{n=1}^{\\infty}\\frac{1}{n^2}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi mathvariant=\"normal\">∞</mi></munderover><mfrac><mn>1</mn><msup><mi>n</mi><mn>2</mn></msup></mfrac></mrow><annotation encoding=\"application/x-tex\">\\sum_{n=1}^{\\infty}\\frac{1}{n^2}</annotation></semantics></math>",
    "unicodemath": "∑_(n=1)^∞1/n^2"
  },
  {
    "name": "IN3",
    "domain": "5.14 Infinity",
    "dictationString": "limit as x approaches negative infinity of e to the x",
    "expected_latex": "\\lim_{x\\to-\\infty}e^x",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>x</mi><mo>→</mo><mo>−</mo><mi mathvariant=\"normal\">∞</mi></mrow></munder><msup><mi>e</mi><mi>x</mi></msup></mrow><annotation encoding=\"application/x-tex\">\\lim_{x\\to-\\infty}e^x</annotation></semantics></math>",
    "unicodemath": "lim_(x→-∞)e^x"
  },
  {
    "name": "PD1",
    "domain": "5.15 Partial Derivatives",
    "dictationString": "partial f partial x",
    "expected_latex": "\\frac{\\partial f}{\\partial x}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mfrac><mrow><mi mathvariant=\"normal\">∂</mi><mi>f</mi></mrow><mrow><mi mathvariant=\"normal\">∂</mi><mi>x</mi></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{\\partial f}{\\partial x}</annotation></semantics></math>",
    "unicodemath": "∂f/∂x"
  },
  {
    "name": "PD2",
    "domain": "5.15 Partial Derivatives",
    "dictationString": "partial squared f partial x squared",
    "expected_latex": "\\frac{\\partial^2 f}{\\partial x^2}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mfrac><mrow><msup><mi mathvariant=\"normal\">∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi mathvariant=\"normal\">∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{\\partial^2 f}{\\partial x^2}</annotation></semantics></math>",
    "unicodemath": "∂^2f/∂x^2"
  },
  {
    "name": "PD3",
    "domain": "5.15 Partial Derivatives",
    "dictationString": "partial squared f partial x partial y",
    "expected_latex": "\\frac{\\partial^2 f}{\\partial x\\partial y}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mfrac><mrow><msup><mi mathvariant=\"normal\">∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi mathvariant=\"normal\">∂</mi><mi>x</mi><mi mathvariant=\"normal\">∂</mi><mi>y</mi></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{\\partial^2 f}{\\partial x\\partial y}</annotation></semantics></math>",
    "unicodemath": "∂^2f/∂x∂y"
  },
  {
    "name": "MI1",
    "domain": "5.16 Multiple Integrals",
    "dictationString": "double integral of f of x y d a",
    "expected_latex": "\\iint f(x,y)\\,dA",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo>∬</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo separator=\"true\">,</mo><mi>y</mi><mo stretchy=\"false\">)</mo><mtext> </mtext><mi>d</mi><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">\\iint f(x,y)\\,dA</annotation></semantics></math>",
    "unicodemath": "∬ f(x,y)dA"
  },
  {
    "name": "MI2",
    "domain": "5.16 Multiple Integrals",
    "dictationString": "double integral from zero to one of x y d y d x",
    "expected_latex": "\\int_0^1\\int_0^1 xy\\,dy\\,dx",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>x</mi><mi>y</mi><mtext> </mtext><mi>d</mi><mi>y</mi><mtext> </mtext><mi>d</mi><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">\\int_0^1\\int_0^1 xy\\,dy\\,dx</annotation></semantics></math>",
    "unicodemath": "∫_0^1∫_0^1 xydydx"
  },
  {
    "name": "BC1",
    "domain": "5.17 Binomial Coefficient",
    "dictationString": "n choose k",
    "expected_latex": "\\binom{n}{k}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mi>n</mi><mi>k</mi></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom{n}{k}</annotation></semantics></math>",
    "unicodemath": "(n¦k)"
  },
  {
    "name": "BC2",
    "domain": "5.17 Binomial Coefficient",
    "dictationString": "five choose two",
    "expected_latex": "\\binom{5}{2}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo fence=\"true\">(</mo><mfrac linethickness=\"0px\"><mn>5</mn><mn>2</mn></mfrac><mo fence=\"true\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\binom{5}{2}</annotation></semantics></math>",
    "unicodemath": "(5¦2)"
  },
  {
    "name": "FC1",
    "domain": "5.18 Floor & Ceiling",
    "dictationString": "floor of x",
    "expected_latex": "\\lfloor x\\rfloor",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo stretchy=\"false\">⌊</mo><mi>x</mi><mo stretchy=\"false\">⌋</mo></mrow><annotation encoding=\"application/x-tex\">\\lfloor x\\rfloor</annotation></semantics></math>",
    "unicodemath": "⌊ x⌋"
  },
  {
    "name": "FC2",
    "domain": "5.18 Floor & Ceiling",
    "dictationString": "ceiling of x",
    "expected_latex": "\\lceil x\\rceil",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mi>x</mi><mo stretchy=\"false\">⌉</mo></mrow><annotation encoding=\"application/x-tex\">\\lceil x\\rceil</annotation></semantics></math>",
    "unicodemath": "⌈ x⌉"
  },
  {
    "name": "FC3",
    "domain": "5.18 Floor & Ceiling",
    "dictationString": "ceiling of x plus one",
    "expected_latex": "\\lceil x+1\\rceil",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">⌉</mo></mrow><annotation encoding=\"application/x-tex\">\\lceil x+1\\rceil</annotation></semantics></math>",
    "unicodemath": "⌈ x+1⌉"
  },
  {
    "name": "MD1",
    "domain": "5.19 Modulo",
    "dictationString": "x mod n",
    "expected_latex": "x\\mod n",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>x</mi><mspace></mspace><mspace width=\"1em\"/><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow><mtext> </mtext><mtext> </mtext><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">x\\mod n</annotation></semantics></math>",
    "unicodemath": "xmod n"
  },
  {
    "name": "MD2",
    "domain": "5.19 Modulo",
    "dictationString": "x is congruent to one mod n",
    "expected_latex": "x\\equiv1\\pmod{n}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>x</mi><mo>≡</mo><mn>1</mn><mspace></mspace><mspace width=\"1em\"/><mo stretchy=\"false\">(</mo><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow><mspace width=\"0.3333em\"/><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">x\\equiv1\\pmod{n}</annotation></semantics></math>",
    "unicodemath": "x≡1 (mod n)"
  },
  {
    "name": "VC1",
    "domain": "5.20 Vectors",
    "dictationString": "vector a dot vector b",
    "expected_latex": "\\mathbf{a}\\cdot\\mathbf{b}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi mathvariant=\"bold\">a</mi><mo>⋅</mo><mi mathvariant=\"bold\">b</mi></mrow><annotation encoding=\"application/x-tex\">\\mathbf{a}\\cdot\\mathbf{b}</annotation></semantics></math>",
    "unicodemath": "a⋅b"
  },
  {
    "name": "VC2",
    "domain": "5.20 Vectors",
    "dictationString": "vector a cross vector b",
    "expected_latex": "\\mathbf{a}\\times\\mathbf{b}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi mathvariant=\"bold\">a</mi><mo>×</mo><mi mathvariant=\"bold\">b</mi></mrow><annotation encoding=\"application/x-tex\">\\mathbf{a}\\times\\mathbf{b}</annotation></semantics></math>",
    "unicodemath": "a×b"
  },
  {
    "name": "VC3",
    "domain": "5.20 Vectors",
    "dictationString": "magnitude of vector v",
    "expected_latex": "\\left|\\mathbf{v}\\right|",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo fence=\"true\">∣</mo><mi mathvariant=\"bold\">v</mi><mo fence=\"true\">∣</mo></mrow><annotation encoding=\"application/x-tex\">\\left|\\mathbf{v}\\right|</annotation></semantics></math>",
    "unicodemath": "|v|"
  },
  {
    "name": "CN1",
    "domain": "5.21 Complex Numbers",
    "dictationString": "two plus three i",
    "expected_latex": "2+3i",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mn>2</mn><mo>+</mo><mn>3</mn><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">2+3i</annotation></semantics></math>",
    "unicodemath": "2+3i"
  },
  {
    "name": "CN2",
    "domain": "5.21 Complex Numbers",
    "dictationString": "the complex conjugate of z",
    "expected_latex": "\\bar{z}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mover accent=\"true\"><mi>z</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar{z}</annotation></semantics></math>",
    "unicodemath": "z̅"
  },
  {
    "name": "CN3",
    "domain": "5.21 Complex Numbers",
    "dictationString": "the modulus of z",
    "expected_latex": "\\left|z\\right|",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo fence=\"true\">∣</mo><mi>z</mi><mo fence=\"true\">∣</mo></mrow><annotation encoding=\"application/x-tex\">\\left|z\\right|</annotation></semantics></math>",
    "unicodemath": "|z|"
  },
  {
    "name": "IT1",
    "domain": "5.22 Inverse & Hyperbolic Trig",
    "dictationString": "arc sine of x",
    "expected_latex": "\\arcsin\\left(x\\right)",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>arcsin</mi><mo>⁡</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">\\arcsin\\left(x\\right)</annotation></semantics></math>",
    "unicodemath": "arcsin(x)"
  },
  {
    "name": "IT2",
    "domain": "5.22 Inverse & Hyperbolic Trig",
    "dictationString": "sine to the negative one of x",
    "expected_latex": "\\sin^{-1}\\left(x\\right)",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msup><mrow><mi>sin</mi><mo>⁡</mo></mrow><mrow><mo>−</mo><mn>1</mn></mrow></msup><mrow><mo fence=\"true\">(</mo><mi>x</mi><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">\\sin^{-1}\\left(x\\right)</annotation></semantics></math>",
    "unicodemath": "sin^(-1)(x)"
  },
  {
    "name": "IT3",
    "domain": "5.22 Inverse & Hyperbolic Trig",
    "dictationString": "arc tangent of y over x",
    "expected_latex": "\\arctan\\left(\\frac{y}{x}\\right)",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>arctan</mi><mo>⁡</mo><mrow><mo fence=\"true\">(</mo><mfrac><mi>y</mi><mi>x</mi></mfrac><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">\\arctan\\left(\\frac{y}{x}\\right)</annotation></semantics></math>",
    "unicodemath": "arctan(y/x)"
  },
  {
    "name": "IT4",
    "domain": "5.22 Inverse & Hyperbolic Trig",
    "dictationString": "hyperbolic sine of x",
    "expected_latex": "\\sinh\\left(x\\right)",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>sinh</mi><mo>⁡</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">\\sinh\\left(x\\right)</annotation></semantics></math>",
    "unicodemath": "sinh(x)"
  },
  {
    "name": "IT5",
    "domain": "5.22 Inverse & Hyperbolic Trig",
    "dictationString": "hyperbolic cosine of x",
    "expected_latex": "\\cosh\\left(x\\right)",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>cosh</mi><mo>⁡</mo><mrow><mo fence=\"true\">(</mo><mi>x</mi><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">\\cosh\\left(x\\right)</annotation></semantics></math>",
    "unicodemath": "cosh(x)"
  },
  {
    "name": "AU1",
    "domain": "5.23 Alternate Utterances (Robustness)",
    "dictationString": "x to the second",
    "expected_latex": "x^2",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">x^2</annotation></semantics></math>",
    "unicodemath": "x^2"
  },
  {
    "name": "AU2",
    "domain": "5.23 Alternate Utterances (Robustness)",
    "dictationString": "x to the power of two",
    "expected_latex": "x^2",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">x^2</annotation></semantics></math>",
    "unicodemath": "x^2"
  },
  {
    "name": "AU3",
    "domain": "5.23 Alternate Utterances (Robustness)",
    "dictationString": "one over x",
    "expected_latex": "\\frac{1}{x}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{1}{x}</annotation></semantics></math>",
    "unicodemath": "1/x"
  },
  {
    "name": "AU4",
    "domain": "5.23 Alternate Utterances (Robustness)",
    "dictationString": "x to the minus one",
    "expected_latex": "x^{-1}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msup><mi>x</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">x^{-1}</annotation></semantics></math>",
    "unicodemath": "x^(-1)"
  },
  {
    "name": "AU5",
    "domain": "5.23 Alternate Utterances (Robustness)",
    "dictationString": "the square of x",
    "expected_latex": "x^2",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">x^2</annotation></semantics></math>",
    "unicodemath": "x^2"
  },
  {
    "name": "AU6",
    "domain": "5.23 Alternate Utterances (Robustness)",
    "dictationString": "x times x",
    "expected_latex": "x\\cdot x",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>x</mi><mo>⋅</mo><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x\\cdot x</annotation></semantics></math>",
    "unicodemath": "x⋅ x"
  },
  {
    "name": "SG1",
    "domain": "5.24 Auto-Segmentation",
    "dictationString": "I have three dogs",
    "expected_latex": "(no equation)",
    "mathml": null,
    "unicodemath": null
  },
  {
    "name": "SG2",
    "domain": "5.24 Auto-Segmentation",
    "dictationString": "call me at five p m",
    "expected_latex": "(no equation)",
    "mathml": null,
    "unicodemath": null
  },
  {
    "name": "SG3",
    "domain": "5.24 Auto-Segmentation",
    "dictationString": "the area is pi r squared",
    "expected_latex": "segment: \\pi r^2",
    "mathml": null,
    "unicodemath": null
  },
  {
    "name": "SG4",
    "domain": "5.24 Auto-Segmentation",
    "dictationString": "solve for x comma where x equals five",
    "expected_latex": "segment: x=5",
    "mathml": null,
    "unicodemath": null
  },
  {
    "name": "SG5",
    "domain": "5.24 Auto-Segmentation",
    "dictationString": "the answer is forty two",
    "expected_latex": "(no equation)",
    "mathml": null,
    "unicodemath": null
  },
  {
    "name": "ST1",
    "domain": "5.26 Stress Tests",
    "dictationString": "x equals negative b plus or minus square root of b squared minus four a c all over two a",
    "expected_latex": "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mi>b</mi><mo>±</mo><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi></mrow></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}</annotation></semantics></math>",
    "unicodemath": "x=(-b±√(b^2-4ac))/2a"
  },
  {
    "name": "ST2",
    "domain": "5.26 Stress Tests",
    "dictationString": "e to the i pi plus one equals zero",
    "expected_latex": "e^{i\\pi}+1=0",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">e^{i\\pi}+1=0</annotation></semantics></math>",
    "unicodemath": "e^iπ+1=0"
  },
  {
    "name": "ST3",
    "domain": "5.26 Stress Tests",
    "dictationString": "the limit as delta x approaches zero of f of x plus delta x minus f of x over delta x",
    "expected_latex": "\\lim_{\\Delta x\\to0}\\frac{f(x+\\Delta x)-f(x)}{\\Delta x}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo stretchy=\"false\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">\\lim_{\\Delta x\\to0}\\frac{f(x+\\Delta x)-f(x)}{\\Delta x}</annotation></semantics></math>",
    "unicodemath": "lim_(Δx→0)(f(x+Δx)-f(x))/Δx"
  },
  {
    "name": "Case B1",
    "domain": "Basics: arithmetic, equality, precedence",
    "dictationString": "x equals five",
    "expected_latex": "x=5",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">x=5</annotation></semantics></math>",
    "unicodemath": "x=5"
  },
  {
    "name": "Case B2",
    "domain": "Basics: arithmetic, equality, precedence",
    "dictationString": "two plus two equals four",
    "expected_latex": "2+2=4",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mn>2</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">2+2=4</annotation></semantics></math>",
    "unicodemath": "2+2=4"
  },
  {
    "name": "Case B3",
    "domain": "Basics: arithmetic, equality, precedence",
    "dictationString": "x plus y times z",
    "expected_latex": "x+yz",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mi>z</mi></mrow><annotation encoding=\"application/x-tex\">x+yz</annotation></semantics></math>",
    "unicodemath": "x+yz"
  },
  {
    "name": "Case B4",
    "domain": "Basics: arithmetic, equality, precedence",
    "dictationString": "open parenthesis x plus y close parenthesis times z",
    "expected_latex": "(x+y)z",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\">)</mo><mi>z</mi></mrow><annotation encoding=\"application/x-tex\">(x+y)z</annotation></semantics></math>",
    "unicodemath": "(x+y)z"
  },
  {
    "name": "Case B5",
    "domain": "Basics: arithmetic, equality, precedence",
    "dictationString": "negative three x squared plus two x minus five",
    "expected_latex": "-3x^2+2x-5",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo>−</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">-3x^2+2x-5</annotation></semantics></math>",
    "unicodemath": "-3x^2+2x-5"
  },
  {
    "name": "Case F1",
    "domain": "Fractions & “over” (including ambiguity)",
    "dictationString": "x over y",
    "expected_latex": "\\frac{x}{y}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mfrac><mi>x</mi><mi>y</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{x}{y}</annotation></semantics></math>",
    "unicodemath": "x/y"
  },
  {
    "name": "Case F2",
    "domain": "Fractions & “over” (including ambiguity)",
    "dictationString": "x plus y over z",
    "expected_latex": "x+\\frac{y}{z}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>x</mi><mo>+</mo><mfrac><mi>y</mi><mi>z</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">x+\\frac{y}{z}</annotation></semantics></math>",
    "unicodemath": "x+y/z"
  },
  {
    "name": "Case F3",
    "domain": "Fractions & “over” (including ambiguity)",
    "dictationString": "quantity x plus y end quantity over z",
    "expected_latex": "\\frac{x+y}{z}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow><mi>z</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{x+y}{z}</annotation></semantics></math>",
    "unicodemath": "(x+y)/z"
  },
  {
    "name": "Case F4",
    "domain": "Fractions & “over” (including ambiguity)",
    "dictationString": "two and one half",
    "expected_latex": "2+\\frac{1}{2}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mn>2</mn><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">2+\\frac{1}{2}</annotation></semantics></math>",
    "unicodemath": "2+1/2"
  },
  {
    "name": "Case E1",
    "domain": "Exponents, subscripts, roots (with implicit multiplication",
    "dictationString": "x squared",
    "expected_latex": "x^2",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">x^2</annotation></semantics></math>",
    "unicodemath": "x^2"
  },
  {
    "name": "Case E2",
    "domain": "Exponents, subscripts, roots (with implicit multiplication",
    "dictationString": "x to the minus two",
    "expected_latex": "x^{-2}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msup><mi>x</mi><mrow><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">x^{-2}</annotation></semantics></math>",
    "unicodemath": "x^(-2)"
  },
  {
    "name": "Case E3",
    "domain": "Exponents, subscripts, roots (with implicit multiplication",
    "dictationString": "a sub i plus one",
    "expected_latex": "a_{i+1}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msub><mi>a</mi><mrow><mi>i</mi><mo>+</mo><mn>1</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_{i+1}</annotation></semantics></math>",
    "unicodemath": "a_(i+1)"
  },
  {
    "name": "Case R1",
    "domain": "Exponents, subscripts, roots (with implicit multiplication",
    "dictationString": "square root of x plus one",
    "expected_latex": "\\sqrt{x+1}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msqrt><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></msqrt></mrow><annotation encoding=\"application/x-tex\">\\sqrt{x+1}</annotation></semantics></math>",
    "unicodemath": "√(x+1)"
  },
  {
    "name": "Case R2",
    "domain": "Exponents, subscripts, roots (with implicit multiplication",
    "dictationString": "the cube root of x plus one",
    "expected_latex": "\\sqrt[3]{x+1}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mroot><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mn>3</mn></mroot></mrow><annotation encoding=\"application/x-tex\">\\sqrt[3]{x+1}</annotation></semantics></math>",
    "unicodemath": "3√(x+1)"
  },
  {
    "name": "Case IM1",
    "domain": "Implicit multiplication stress cases",
    "dictationString": "two x",
    "expected_latex": "2x",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mn>2</mn><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">2x</annotation></semantics></math>",
    "unicodemath": "2x"
  },
  {
    "name": "Case IM2",
    "domain": "Implicit multiplication stress cases",
    "dictationString": "x y",
    "expected_latex": "xy",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>x</mi><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">xy</annotation></semantics></math>",
    "unicodemath": "xy"
  },
  {
    "name": "Case IM3",
    "domain": "Implicit multiplication stress cases",
    "dictationString": "x open paren y plus one close paren",
    "expected_latex": "x(y+1)",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>x</mi><mo stretchy=\"false\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">x(y+1)</annotation></semantics></math>",
    "unicodemath": "x(y+1)"
  },
  {
    "name": "Case IM4",
    "domain": "Implicit multiplication stress cases",
    "dictationString": "open paren a plus b close paren open paren c plus d close paren",
    "expected_latex": "(a+b)(c+d)",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">(</mo><mi>c</mi><mo>+</mo><mi>d</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(a+b)(c+d)</annotation></semantics></math>",
    "unicodemath": "(a+b)(c+d)"
  },
  {
    "name": "Case IM5",
    "domain": "Implicit multiplication stress cases",
    "dictationString": "one half x",
    "expected_latex": "\\frac{1}{2}x",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">\\frac{1}{2}x</annotation></semantics></math>",
    "unicodemath": "1/2x"
  },
  {
    "name": "Case FN1",
    "domain": "Functions, trig, logs (plus disambiguation)",
    "dictationString": "f of x equals x squared plus one",
    "expected_latex": "f(x)=x^2+1",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">f(x)=x^2+1</annotation></semantics></math>",
    "unicodemath": "f(x)=x^2+1"
  },
  {
    "name": "Case TR1",
    "domain": "Functions, trig, logs (plus disambiguation)",
    "dictationString": "sine x",
    "expected_latex": "\\sin(x)",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>sin</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\sin(x)</annotation></semantics></math>",
    "unicodemath": "sin(x)"
  },
  {
    "name": "Case TR2",
    "domain": "Functions, trig, logs (plus disambiguation)",
    "dictationString": "sine squared x plus cosine squared x equals one",
    "expected_latex": "\\sin^2(x)+\\cos^2(x)=1",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msup><mrow><mi>sin</mi><mo>⁡</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>+</mo><msup><mrow><mi>cos</mi><mo>⁡</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\sin^2(x)+\\cos^2(x)=1</annotation></semantics></math>",
    "unicodemath": "sin^2(x)+cos^2(x)=1"
  },
  {
    "name": "Case TR3",
    "domain": "Functions, trig, logs (plus disambiguation)",
    "dictationString": "sine of x squared",
    "expected_latex": "\\sin(x^2)",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>sin</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\sin(x^2)</annotation></semantics></math>",
    "unicodemath": "sin(x^2)"
  },
  {
    "name": "Case LG1",
    "domain": "Functions, trig, logs (plus disambiguation)",
    "dictationString": "log base ten of x",
    "expected_latex": "\\log_{10}(x)",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>10</mn></msub><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\log_{10}(x)</annotation></semantics></math>",
    "unicodemath": "log_10(x)"
  },
  {
    "name": "Case C1",
    "domain": "Calculus: limits, derivatives, integrals, sums",
    "dictationString": "limit as x approaches zero of sine x over x",
    "expected_latex": "\\lim_{x\\to0}\\frac{\\sin(x)}{x}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>sin</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo></mrow><mi>x</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\lim_{x\\to0}\\frac{\\sin(x)}{x}</annotation></semantics></math>",
    "unicodemath": "lim_(x→0)sin(x)/x"
  },
  {
    "name": "Case C2",
    "domain": "Calculus: limits, derivatives, integrals, sums",
    "dictationString": "d y d x",
    "expected_latex": "\\frac{dy}{dx}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{dy}{dx}</annotation></semantics></math>",
    "unicodemath": "dy/dx"
  },
  {
    "name": "Case C3",
    "domain": "Calculus: limits, derivatives, integrals, sums",
    "dictationString": "second derivative of y with respect to x",
    "expected_latex": "\\frac{d^2y}{dx^2}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{d^2y}{dx^2}</annotation></semantics></math>",
    "unicodemath": "d^2y/dx^2"
  },
  {
    "name": "Case C4",
    "domain": "Calculus: limits, derivatives, integrals, sums",
    "dictationString": "integral from zero to one of x squared d x",
    "expected_latex": "\\int_0^1 x^2\\,dx",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msup><mi>x</mi><mn>2</mn></msup><mtext> </mtext><mi>d</mi><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">\\int_0^1 x^2\\,dx</annotation></semantics></math>",
    "unicodemath": "∫_0^1 x^2dx"
  },
  {
    "name": "Case C5",
    "domain": "Calculus: limits, derivatives, integrals, sums",
    "dictationString": "summation from i equals one to n of i squared",
    "expected_latex": "\\sum_{i=1}^{n} i^2",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msup><mi>i</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">\\sum_{i=1}^{n} i^2</annotation></semantics></math>",
    "unicodemath": "∑_(i=1)^n i^2"
  },
  {
    "name": "Case M1",
    "domain": "Matrices and piecewise",
    "dictationString": "matrix a equals open bracket 1 0 semicolon 0 1 close bracket",
    "expected_latex": "A=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>A</mi><mo>=</mo><mrow><mo fence=\"true\">[</mo><mtable rowspacing=\"0.16em\" columnalign=\"center center\" columnspacing=\"1em\"><mtr><mtd><mstyle scriptlevel=\"0\" displaystyle=\"false\"><mn>1</mn></mstyle></mtd><mtd><mstyle scriptlevel=\"0\" displaystyle=\"false\"><mn>0</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel=\"0\" displaystyle=\"false\"><mn>0</mn></mstyle></mtd><mtd><mstyle scriptlevel=\"0\" displaystyle=\"false\"><mn>1</mn></mstyle></mtd></mtr></mtable><mo fence=\"true\">]</mo></mrow></mrow><annotation encoding=\"application/x-tex\">A=\\begin{bmatrix}1&amp;0\\\\0&amp;1\\end{bmatrix}</annotation></semantics></math>",
    "unicodemath": "A=[■(1&0@0&1)]"
  },
  {
    "name": "Case P1",
    "domain": "Matrices and piecewise",
    "dictationString": "f of x equals piecewise x squared if x is greater than zero zero otherwise",
    "expected_latex": "f(x)=\\begin{cases}x^2 & x>0 \\\\ 0 & \\text{otherwise} \\end{cases}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>f</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mrow><mo fence=\"true\">{</mo><mtable rowspacing=\"0.36em\" columnalign=\"left left\" columnspacing=\"1em\"><mtr><mtd><mstyle scriptlevel=\"0\" displaystyle=\"false\"><msup><mi>x</mi><mn>2</mn></msup></mstyle></mtd><mtd><mstyle scriptlevel=\"0\" displaystyle=\"false\"><mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel=\"0\" displaystyle=\"false\"><mn>0</mn></mstyle></mtd><mtd><mstyle scriptlevel=\"0\" displaystyle=\"false\"><mtext>otherwise</mtext></mstyle></mtd></mtr></mtable></mrow></mrow><annotation encoding=\"application/x-tex\">f(x)=\\begin{cases}x^2 &amp; x&gt;0 \\\\ 0 &amp; \\text{otherwise} \\end{cases}</annotation></semantics></math>",
    "unicodemath": "f(x)={■(x^2&x>0@0&otherwise)"
  },
  {
    "name": "Case S1",
    "domain": "Sets, relations, probability",
    "dictationString": "x is an element of s",
    "expected_latex": "x\\in S",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>x</mi><mo>∈</mo><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">x\\in S</annotation></semantics></math>",
    "unicodemath": "x∈ S"
  },
  {
    "name": "Case S2",
    "domain": "Sets, relations, probability",
    "dictationString": "for all x there exists y such that x is less than y",
    "expected_latex": "\\forall x \\exists y (x<y)",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi mathvariant=\"normal\">∀</mi><mi>x</mi><mi mathvariant=\"normal\">∃</mi><mi>y</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo>&lt;</mo><mi>y</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\forall x \\exists y (x&lt;y)</annotation></semantics></math>",
    "unicodemath": "∀ x ∃ y (x<y)"
  },
  {
    "name": "Case PR1",
    "domain": "Sets, relations, probability",
    "dictationString": "probability of a given b",
    "expected_latex": "P(A|B)",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>P</mi><mo stretchy=\"false\">(</mo><mi>A</mi><mi mathvariant=\"normal\">∣</mi><mi>B</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">P(A|B)</annotation></semantics></math>",
    "unicodemath": "P(A|B)"
  },
  {
    "name": "Case A1",
    "domain": "Ambiguity & robustness",
    "dictationString": "x minus y squared",
    "expected_latex": "x-y^2",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">x-y^2</annotation></semantics></math>",
    "unicodemath": "x-y^2"
  },
  {
    "name": "Case A2",
    "domain": "Ambiguity & robustness",
    "dictationString": "the quantity x minus y squared",
    "expected_latex": "(x-y)^2",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><msup><mo stretchy=\"false\">)</mo><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">(x-y)^2</annotation></semantics></math>",
    "unicodemath": "(x-y)^2"
  },
  {
    "name": "Case A3",
    "domain": "Ambiguity & robustness",
    "dictationString": "negative x squared",
    "expected_latex": "-x^2",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">-x^2</annotation></semantics></math>",
    "unicodemath": "-x^2"
  },
  {
    "name": "Case A4",
    "domain": "Ambiguity & robustness",
    "dictationString": "six times ten to the minus three",
    "expected_latex": "6\\times10^{-3}",
    "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mn>6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">6\\times10^{-3}</annotation></semantics></math>",
    "unicodemath": "6×10^(-3)"
  }
];

/** All unique domains, in original order */
export const allEvalDomains = [...new Set(dictationPrimitivesEvals.map(e => e.domain))];

/** Get all evals for a given domain */
export function getEvalsByDomain(domain) {
  return dictationPrimitivesEvals.filter(e => e.domain === domain);
}

/** Look up a single eval by name */
export function getEvalByName(name) {
  return dictationPrimitivesEvals.find(e => e.name === name) ?? null;
}
