const childProcess = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const organization = 'web-illinois';
const repositories = require(path.join(root, 'component-repositories.json'));

const checkoutRoot = path.join(root, 'external-directory');
const componentsDir = path.join(root, 'site', 'imported_json', 'components');
const componentVersionsDir = path.join(root, 'site', 'imported_json', 'component_versions');
const readmesDir = path.join(root, 'site', 'imported_readmes');

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

function cleanGeneratedJson(directory) {
  fs.mkdirSync(directory, { recursive: true });
  for (const file of fs.readdirSync(directory)) {
    if (file.endsWith('.json')) {
      fs.rmSync(path.join(directory, file));
    }
  }
}

function copyJsonFiles(source, destination) {
  if (!fs.existsSync(source)) {
    console.warn(`Skipping missing directory: ${path.relative(root, source)}`);
    return;
  }

  for (const file of fs.readdirSync(source)) {
    if (file.endsWith('.json')) {
      fs.copyFileSync(path.join(source, file), path.join(destination, file));
    }
  }
}

function cloneRepository(repository, destination) {
  const args = ['clone', '--depth=1', '--branch', 'main', `https://github.com/${organization}/${repository}.git`, destination];

  if (process.env.GITHUB_TOKEN) {
    args.unshift('-c', `http.https://github.com/.extraheader=AUTHORIZATION: bearer ${process.env.GITHUB_TOKEN}`);
  }

  run('git', args);
}

function rewriteRelativeMarkdownUrls(markdown, repository) {
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

function frontMatterValue(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function writeReadmePage(repository, checkoutPath) {
  const readmePath = ['README.md', 'readme.md'].map(file => path.join(checkoutPath, file)).find(fs.existsSync);
  const sourceRepository = `https://github.com/${organization}/${repository}`;
  const outputPath = path.join(readmesDir, `${repository}.md`);
  const body = readmePath
    ? rewriteRelativeMarkdownUrls(fs.readFileSync(readmePath, 'utf8'), repository)
    : 'No README.md file was found for this repository during the most recent builder import.';

  fs.writeFileSync(outputPath, `---\ntitle: "${frontMatterValue(repository)} README"\nrepository: "${frontMatterValue(repository)}"\nsourceRepository: "${sourceRepository}"\nlayout: readme.liquid\npermalink: "readme/${repository}/index.html"\n---\n\n${body}\n`);
}

ensureCleanDirectory(checkoutRoot);
cleanGeneratedJson(componentsDir);
cleanGeneratedJson(componentVersionsDir);
ensureCleanDirectory(readmesDir);
fs.writeFileSync(path.join(readmesDir, '_empty.txt'), 'This directory is populated by npm run import-components during deployment.\n');

for (const entry of repositories) {
  const repository = entry.repository;
  const builderPath = entry.builderPath || 'builder';
  const checkoutPath = path.join(checkoutRoot, repository);

  console.log(`Importing ${organization}/${repository}`);
  cloneRepository(repository, checkoutPath);
  copyJsonFiles(path.join(checkoutPath, builderPath), componentsDir);
  copyJsonFiles(path.join(checkoutPath, builderPath, 'versions'), componentVersionsDir);
  writeReadmePage(repository, checkoutPath);
}

fs.rmSync(checkoutRoot, { recursive: true, force: true });
