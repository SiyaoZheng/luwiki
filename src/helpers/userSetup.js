const { generateLlmsArtifacts } = require("./llmsGenerator");

function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js
  eleventyConfig.on("eleventy.after", () => {
    const result = generateLlmsArtifacts();
    console.log(
      `[llms] Generated ${result.pageCount} page companions and /llms.txt`,
    );
  });
}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
