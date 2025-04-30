module.exports = function (eleventyConfig) {

  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  var markdownIt = require("markdown-it")(options);
  var markdownItAttrs = require('markdown-it-attrs');

  markdownIt.use(markdownItAttrs, {
    leftDelimiter: '{',
    rightDelimiter: '}',
    allowedAttributes: []
  });

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.setLibrary("md", markdownIt);

  eleventyConfig.addPassthroughCopy("site/img");

  eleventyConfig.addFilter("generateGithubIssuesLink", function (name, components) {
    let returnValue = 'https://github.com/search?q=';
    const arrayComponents = [""];
    components.forEach(component => {
        if (component.type === "web component" && !arrayComponents.includes(component["element-name"])) {
            returnValue += `repo%3Aweb-illinois%2F${component["element-name"]}+`;
            arrayComponents.push(component["element-name"]);
        }
    });
    returnValue += 'state%3Aopen&type=Issues&s=created&o=asc'
    return returnValue;
  });

  eleventyConfig.addFilter("markdownify", (markdownString) =>
      markdownIt.render(markdownString)
  );

  return {
    dir: {
      input: "site"
    },
    pathPrefix: process.env.PATH_PREFIX || '/'
  };
};
