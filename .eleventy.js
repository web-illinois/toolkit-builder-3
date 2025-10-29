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

  eleventyConfig.addFilter("outputComponent", function (name, component_version) {
    let returnValue = '';
    if (component_version['parent-style'] && component_version['parent-style'].length > 0) {
      returnValue += `<div style="${component_version['parent-style']}">`;
    } else {
      returnValue += '<div>';
    }
    if (component_version['addon-html'] && component_version['addon-html'].length > 0) {
      returnValue += component_version['addon-html'];
    }
    returnValue += '<' + component_version['element-name'];
    if (component_version['attributes-fixed']) {
      component_version['attributes-fixed'].forEach(attribute => {
        returnValue += ` ${attribute.name}="${attribute.value}"`;
      });
    }
    if (component_version['classes-fixed']) {
      returnValue += ' class="';
      component_version['classes-fixed'].forEach(attribute => {
        returnValue += attribute.value + ' ';
      });
      returnValue += '" ';
    }
    returnValue += '>';
    if (component_version.samples && component_version.samples.length > 0) {
      returnValue += component_version.samples[0].text;
    }
    returnValue += '</' + component_version['element-name'] + '></div>';
    return returnValue;
  });

  eleventyConfig.addFilter("outputAllComponents", function (name, components, component_versions) {
    let returnValue = '';
    components.forEach(component => {
      console.log(component.tag);
      let component_version = component_versions.find((cv) => cv['tag'] == component['tag'] && cv['builder-version'] == component['toolkit-version']);
      if (!component_version) {
        console.log('WARNING: ' + component.tag + ' has no component version');
      }
      if (component_version && component_version.attributes && component_version.attributes.find((attr) => attr.name === name)) {
        returnValue += eleventyConfig.getFilter("outputSingleComponent")(component.tag, components, component_versions, 'update');
      } else if (component_version && component_version.classes && component_version.classes.find((cls) => cls.name === name)) {
        returnValue += eleventyConfig.getFilter("outputSingleComponent")(component.tag, components, component_versions, 'update-class');
      }
    });
    return returnValue;
 });

  eleventyConfig.addFilter("outputSingleComponent", function (name, components, component_versions, className) {
    let returnValue = '';
    let component = components.find((c) => c['tag'] === name);
    let component_version = component_versions.find((cv) => cv['tag'] == component['tag'] && cv['builder-version'] == component['toolkit-version']);

    if (component_version) {
      if (component_version['parent-style'] && component_version['parent-style'].length > 0) {
        returnValue += `<div style="${component_version['parent-style']}">`;
      } else {
        returnValue += '<div>';
      }
      if (component_version['addon-html'] && component_version['addon-html'].length > 0) {
        returnValue += component_version['addon-html'];
      }
      returnValue += '<' + component_version['element-name'];
      if (component_version['attributes-fixed']) {
        component_version['attributes-fixed'].forEach(attribute => {
          returnValue += ` ${attribute.name}="${attribute.value}"`;
        });
      }
      returnValue += ` class="${className} `;
      if (component_version['classes-fixed']) {
        component_version['classes-fixed'].forEach(attribute => {
          returnValue += attribute.value + ' ';
        });
      }
      returnValue += '">';
      if (component_version.samples && component_version.samples.length > 0) {
        returnValue += component_version.samples[0].text;
      }
      returnValue += '</' + component_version['element-name'] + '></div><ilw-spacer></ilw-spacer>';
    }
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
