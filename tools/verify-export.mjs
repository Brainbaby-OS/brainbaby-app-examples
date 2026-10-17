import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const manifest = JSON.parse(readFileSync(resolve(root, 'docs/garden-checklist-provenance.json'), 'utf8'));
assert.equal(hash(readFileSync(resolve(root, 'downloads/garden-checklist-original.zip'))), manifest.sourceZipSha256, 'Original ZIP differs');
assert.equal(manifest.originalFiles.length, 13, 'Original export inventory differs');
for (const file of manifest.originalFiles) {
  assert.match(file.path, /^(?:src\/(?:components\/|pages\/|utils\/)?[A-Za-z]+\.(?:tsx|jsx|css)|(?:package\.json|vite\.config\.ts|tsconfig\.json|index\.html|README\.md))$/);
  const patch = manifest.runnableOverrides.find(item => item.path === file.path);
  if (patch) assert.equal(patch.path, 'package.json', 'Only the build manifest may have a documented override');
  assert.equal(hash(readFileSync(resolve(root, 'examples/garden-checklist', file.path))), patch?.sha256 ?? file.sha256, `Undocumented source change: ${file.path}`);
}
assert.equal(manifest.runnableOverrides.length, 1, 'Expected one documented build-manifest patch');
console.log('Verified unchanged original ZIP, 12 original runnable files and the documented build-manifest patch. This is an integrity check, not a functional or security audit.');
