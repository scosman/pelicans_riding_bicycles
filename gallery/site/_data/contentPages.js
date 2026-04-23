const fs = require("node:fs");
const path = require("node:path");
const md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true,
});

const FILES = {
  governance: "GOVERNANCE.md",
  "code-of-conduct": "CODE_OF_CONDUCT.md",
  contributing: "CONTRIBUTING.md",
  support: "SUPPORT.md",
  license: "LICENSE.md",
};

module.exports = () => {
  const out = {};
  for (const [key, filename] of Object.entries(FILES)) {
    const abs = path.resolve(__dirname, "../../../", filename);
    const raw = fs.readFileSync(abs, "utf8");
    const stripped = raw.replace(/^#\s+.+\n+/, "");
    out[key] = md.render(stripped);
  }
  return out;
};
