/**
 * Defines the "core" equation set shown when the Core filter is active.
 * Core = equations commonly encountered in standard math courses
 * (Algebra through Calculus, Stats, introductory Physics).
 */

export const CORE_DOMAINS = new Set([
  "Algebra", "Geometry", "Trigonometry", "Calculus",
  "Statistics", "Linear Algebra", "Differential Equations",
  "Discrete Mathematics", "Combinatorics", "Number Theory",
  "Complex Numbers", "Conic Sections", "Set Theory", "Logic",
  "Financial Mathematics",
  "Physics - Mechanics", "Physics - Thermodynamics",
  "Physics - Electromagnetism", "Physics - Waves", "Physics - Modern",
]);

// Equations in core domains that are too specialized or advanced for standard coursework
export const NON_CORE_NAMES = new Set([
  // Algebra — drop trivial variations and minor topics
  "direct variation", "inverse variation", "joint variation",
  "distance rate time", "absolute value equation",
  "power of a product", "power of a quotient",

  // Geometry — drop trivial volume/SA formulas
  "volume of a cube", "volume of a rectangular prism",
  "surface area of a rectangular prism",

  // Trigonometry — drop product-to-sum, sum-to-product, half-angle,
  // power-reducing, cofunction, and odd/even identities
  "product to sum sine cosine", "product to sum cosine cosine", "product to sum sine sine",
  "sum to product sine", "sum to product cosine",
  "sine half angle formula", "cosine half angle formula", "tangent half angle formula",
  "power reducing sine", "power reducing cosine",
  "sine cofunction identity", "cosine cofunction identity", "tangent cofunction identity",
  "sine odd identity", "cosine even identity", "tangent odd identity",
  "angular velocity", "linear velocity from angular",

  // Calculus — drop advanced multivariable, obscure integrals, and advanced tests
  "Green's theorem", "Stokes' theorem", "divergence theorem",
  "directional derivative", "multivariable second derivative test",
  "change of variables Jacobian", "double integral in polar coordinates",
  "integral of secant", "integral of cosecant",
  "root test", "gamma function", "contour integral",

  // Statistics — drop advanced distributions, diagnostics, and matrix regression
  "skewness", "kurtosis", "coefficient of variation", "interquartile range",
  "chi-squared test statistic", "F-statistic",
  "two-sample t-test", "pooled variance",
  "OLS normal equations", "sum of squared residuals",
  "geometric distribution PMF", "hypergeometric distribution PMF",
  "exponential distribution PDF", "uniform distribution PDF",

  // Linear Algebra — drop complex matrix notation and derivable formulas
  "cross product components", "characteristic polynomial",

  // Discrete Mathematics — drop CS-specific
  "master theorem",

  // Combinatorics — drop advanced counting
  "stars and bars", "Catalan number", "derangement",

  // Number Theory — drop foundational theorems not typically templated
  "Bezout's identity", "division algorithm",

  // Complex Numbers — drop trivial arithmetic
  "complex multiplication",

  // Set Theory — drop trivially derivable cardinality formulas
  "power set cardinality", "Cartesian product cardinality",

  // Financial Mathematics — keep only the 6 core time-value formulas
  "future value of an annuity", "present value of a perpetuity",
  "loan payment amortization", "effective annual rate",
  "net present value", "compound annual growth rate",
  "doubling time", "rule of 72", "Fisher equation",
  "straight-line depreciation", "return on investment",
  "bond price formula", "Black-Scholes formula",

  // Physics - Mechanics — drop advanced rotational dynamics
  "escape velocity", "gravitational potential energy general",
  "angular momentum", "rotational kinetic energy",

  // Physics - Electromagnetism — drop upper-division Maxwell formulations
  "Gauss's law electric", "Gauss's law magnetic", "Ampere-Maxwell law",
  "Lorentz force law", "energy stored in an inductor",

  // Physics - Waves — drop advanced wave topics
  "wave equation", "double slit constructive interference",
  "double slit destructive interference", "standing wave wavelength",

  // Physics - Modern — drop graduate-level and research equations
  "radioactive decay", "radioactive half-life",
  "Planck blackbody radiation", "Einstein field equations",
]);

export function isCoreEquation(eq) {
  return CORE_DOMAINS.has(eq.domain) && !NON_CORE_NAMES.has(eq.name);
}
