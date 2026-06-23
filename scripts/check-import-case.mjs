// Walks src/ and verifies every relative import path matches the actual
// on-disk filename case. Windows / macOS are case-insensitive, so a wrong-case
// import "works" locally but breaks the Linux build in CI. This script runs
// case-sensitively regardless of OS — same as Linux does.
//
// Run: npm run check:imports
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const EXTS = [".jsx", ".js", ".ts", ".tsx"];
const SKIP_DIRS = new Set(["node_modules", "dist", ".husky", ".git"]);

const issues = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (/\.(jsx?|tsx?)$/.test(entry)) inspect(full);
  }
}

function inspect(file) {
  const src = readFileSync(file, "utf8");
  const re = /(?:from|import\s*\(?|require\s*\()\s*['"](\.{1,2}\/[^'"]+)['"]/g;
  for (const m of src.matchAll(re)) {
    const importPath = m[1];
    const mismatch = caseCheck(file, importPath);
    if (mismatch) issues.push({ file, importPath, ...mismatch });
  }
}

function caseCheck(fromFile, importPath) {
  const startDir = dirname(fromFile);
  const candidates = [
    importPath,
    ...EXTS.map((ext) => importPath + ext),
    ...EXTS.map((ext) => importPath + "/index" + ext),
  ];

  for (const candidate of candidates) {
    const parts = candidate.split("/").filter(Boolean);
    let cursor = startDir;
    let resolved = true;
    let foundMismatch = null;

    for (const part of parts) {
      if (part === ".") continue;
      if (part === "..") {
        cursor = resolve(cursor, "..");
        continue;
      }
      let entries;
      try {
        entries = readdirSync(cursor);
      } catch {
        resolved = false;
        break;
      }
      if (entries.includes(part)) {
        cursor = join(cursor, part);
      } else {
        const ciHit = entries.find(
          (e) => e.toLowerCase() === part.toLowerCase()
        );
        resolved = false;
        if (ciHit) foundMismatch = { expected: part, actual: ciHit };
        break;
      }
    }

    if (resolved && existsSync(cursor)) return null;
    if (foundMismatch) return foundMismatch;
  }
  return null;
}

walk("src");

if (issues.length === 0) {
  console.log("OK — all relative imports match disk case.");
  process.exit(0);
}

console.error(`Case mismatch in ${issues.length} import(s):`);
for (const i of issues) {
  console.error(`  ${i.file}`);
  console.error(`    import:   "${i.importPath}"`);
  console.error(`    expected: "${i.expected}"`);
  console.error(`    on disk:  "${i.actual}"`);
}
process.exit(1);
