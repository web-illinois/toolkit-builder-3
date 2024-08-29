module.exports = function (eleventyConfig) {

  eleventyConfig.setTemplateFormats(['html', 'md', 'njk', '11ty.js', 'css', 'jpg', 'json', 'js']);

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
    components.forEach(component => {
        if (component.slug === name) {
            returnValue += `repo%3Aweb-illinois%2Filw-content+`;
        }
    });
    returnValue += 'state%3Aopen&type=Issues'
    return returnValue;
  });

  return {
    dir: {
      input: "site"
    }
  };
};
