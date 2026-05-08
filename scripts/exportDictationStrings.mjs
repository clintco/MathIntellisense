import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));

function extractDictationStrings(filePath) {
  const text = readFileSync(filePath, "utf8");
  const re = /"dictationString":\s*"((?:[^"\\]|\\.)*)"/g;
  const matches = [...text.matchAll(re)];
  return matches.map(m => m[1].replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
}

const fromEvals     = extractDictationStrings(resolve(__dir, "../src/dictationPrimitivesEvals.js"));
const fromEquations = extractDictationStrings(resolve(__dir, "../src/mathEquations.js"));

const all = [...fromEvals, ...fromEquations];
const outPath = resolve(__dir, "../dictationStrings.txt");
writeFileSync(outPath, all.join("\n"), "utf8");
console.log(`Written ${fromEvals.length} from dictationPrimitivesEvals + ${fromEquations.length} from mathEquations = ${all.length} total`);
console.log(`Output: ${outPath}`);
