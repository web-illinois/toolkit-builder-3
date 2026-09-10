const timer = require('node:timers/promises');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');

const checkoutRoot = path.join(root, 'external_directory');
const readmesDir = path.join(root, 'site', 'components');

function ensureCleanDirectory(directory) {
  fs.rmSync(directory, { recursive: true, force: true });
}

async function run() {
  console.log('Waiting to ensure OS resources are released...');
  await timer.setTimeout(30000); 
  console.log('Starting clean process...');
  ensureCleanDirectory(checkoutRoot);
  ensureCleanDirectory(readmesDir);
  console.log('Clean process completed.');
}
run();

