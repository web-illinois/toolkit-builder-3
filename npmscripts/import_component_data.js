const childProcess = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const organization = 'web-illinois';
const repositories = require(path.join(root, 'component_repositories.json'));

const checkoutRoot = path.join(root, 'external_directory');
const readmesDir = path.join(root, 'site', 'components');

const componentsFile = path.join(root, 'site', '_data', 'components.json');
const componentVersionsFile = path.join(root, 'site', '_data', 'component_templates.json');

const environmentsFile = path.join(root, 'site', '_data', 'environments.json');

function run(command, args, options = {}) {
  childProcess.execFileSync(command, args, {
    cwd: options.cwd || root,
    stdio: 'inherit',
    env: process.env,
  });
}

function ensureCleanDirectory(directory) {
  fs.rmSync(directory, { recursive: true, force: true });
  fs.mkdirSync(directory, { recursive: true });
}

function copyJsonFiles(source, repository) {
  const returnValue = [];
  if (!fs.existsSync(source)) {
    console.warn(`Skipping missing directory: ${path.relative(root, source)}`);
    return returnValue;
  }

  for (const file of fs.readdirSync(source)) {
    if (file.endsWith('.json')) {
      const fileData = fs.readFileSync(path.join(source, file), 'utf8');
      returnValue.push(JSON.parse(fileData));
    }
  }
  if (repository !== '') {
    fs.writeFileSync(path.join(root, 'site', '_data', repository + '.json'), JSON.stringify(returnValue, null, 2), 'utf8');
  }
  return returnValue;
}

function cloneRepository(repository, destination) {
  const args = ['clone', '--depth=1', '--branch', 'main', `https://github.com/${organization}/${repository}.git`, destination];
  run('git', args);
}

function rewriteRelativeMarkdownUrls(markdown, repository) {
  markdown = markdown.replace(
    /^(\s{0,3})(#{1,5})(?=\s|$)/gm,
    (_, indentation, hashes) => `${indentation}${hashes}#`
  );

  return markdown.replace(/(!?)\[([^\]]+)\]\(([^)\s]+)(\s+"[^"]+")?\)/g, (match, imagePrefix, label, url, title = '') => {
    if (/^(?:[a-z][a-z0-9+.-]*:|#|\/)/i.test(url)) {
      return match;
    }

    const cleanUrl = url.replace(/^\.\//, '');
    const baseUrl = imagePrefix
      ? `https://raw.githubusercontent.com/${organization}/${repository}/main/`
      : `https://github.com/${organization}/${repository}/blob/main/`;

    return `${imagePrefix}[${label}](${baseUrl}${cleanUrl}${title})`;
  });
}

function writeReadmePage(repository, readmeFile, checkoutPath) {
  const readmePath = [readmeFile].map(file => path.join(checkoutPath, file)).find(fs.existsSync);
  const sourceRepository = `https://github.com/${organization}/${repository}`;
  const outputPath = path.join(readmesDir, `${repository}.md`);
  const body = readmePath
    ? rewriteRelativeMarkdownUrls(fs.readFileSync(readmePath, 'utf8'), repository)
    : `No ${readmeFile} file was found for this repository during the most recent builder import.`;

  let lineValue = 0;
  for (const [index, line] of body.split('\n').entries()) {
    if (line.trim().startsWith('## Overview') || line.trim().startsWith('### Overview')) {
      lineValue = index;
      break;
    }
    if (index > 20) {
      break;
    }
  }

  const truncatedBody = body.split('\n').slice(lineValue).join('\n');
  const frontMatter = `---
  pagination:
    data: ${repository}
    size: 1
    alias: component
  repository: "${repository}"
  sourceRepository: "${sourceRepository}"
  layout: components/component.liquid
  permalink: component/{{ component.tag | slugify }}/index.html
  eleventyComputed:
    title: "{{ component.title }}"
    tag: "{{ component.tag }}"
---`;
  fs.writeFileSync(outputPath, `${frontMatter}\n\n${truncatedBody}\n`);
}

ensureCleanDirectory(checkoutRoot);
ensureCleanDirectory(readmesDir);
const combinedComponents = [];
const combinedComponentVersions = [];

for (const entry of repositories) {
  const repository = entry.repository;
  const readmeFile = entry.file || 'README.md';
  const builderPath = entry.builderPath || 'builder';
  const checkoutPath = path.join(checkoutRoot, repository);

  console.log(`Importing ${organization}/${repository}`);
  cloneRepository(repository, checkoutPath);
  combinedComponents.push(...copyJsonFiles(path.join(checkoutPath, builderPath), repository));
  combinedComponentVersions.push(...copyJsonFiles(path.join(checkoutPath, builderPath, 'versions'), ''));
  writeReadmePage(repository, readmeFile, checkoutPath);
}
combinedComponents.sort((a, b) => a.title.localeCompare(b.title));
fs.writeFileSync(componentsFile, JSON.stringify(combinedComponents, null, 2), 'utf8');
fs.writeFileSync(componentVersionsFile, JSON.stringify(combinedComponentVersions, null, 2), 'utf8');

const environments = `[
  {
    "title": "Latest Beta",
    "tag": "beta",
    "baseurl": "//dev.toolkit.illinois.edu/latest/"
  },
  {
    "title": "Production",
    "tag": "production",
    "baseurl": "//cdn.toolkit.illinois.edu/3/"
  }
]`;

fs.writeFileSync(environmentsFile, environments, 'utf8');

