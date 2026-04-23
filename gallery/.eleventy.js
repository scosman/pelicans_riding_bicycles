const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "site/assets": "assets" });
  eleventyConfig.addPassthroughCopy({
    "../pelicans_riding_bicycles_enthusiasts_club.png": "assets/seal.png",
  });

  eleventyConfig.addWatchTarget("../*.md");
  eleventyConfig.addWatchTarget("../pelicans_riding_bicycles/");

  eleventyConfig.addFilter("inlineSvg", (filePath) => {
    const abs = path.resolve(REPO_ROOT, filePath);
    return fs.readFileSync(abs, "utf8");
  });

  return {
    dir: {
      input: "site",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    pathPrefix: "/pelicans_riding_bicycles/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
