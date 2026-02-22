/**
 * sync-version.js
 * Run after copy-files to patch APP_VERSION in js/app.js so it always
 * matches the version field in electron/package.json.
 *
 * This prevents the update banner from appearing on every launch when
 * the copy-files script overwrites electron/js/app.js with the root
 * js/app.js (which might have a stale version string).
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// Resolve paths relative to the electron/ directory (cwd when npm scripts run)
const pkgPath   = path.resolve('package.json');
const appJsPath = path.resolve('js', 'app.js');

const version = JSON.parse(fs.readFileSync(pkgPath, 'utf8')).version;

let content = fs.readFileSync(appJsPath, 'utf8');
const updated = content.replace(
  /APP_VERSION\s*=\s*'[^']*'/,
  `APP_VERSION = '${version}'`
);

if (updated === content) {
  console.log(`[sync-version] APP_VERSION already '${version}' — no change needed.`);
} else {
  fs.writeFileSync(appJsPath, updated, 'utf8');
  console.log(`[sync-version] APP_VERSION patched to '${version}' in js/app.js`);
}
